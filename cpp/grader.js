/* ─────────────────────────────────────────────────────────────
   채점 엔진 — 페이지와 테스트가 같은 코드를 씁니다.

   핵심 아이디어: 테스트케이스 N개를 "요청 1번"으로 채점합니다.
   학습자의 main() 을 __user_main() 으로 바꾸고, 하네스 main 이
   케이스마다 cin/cout 을 문자열 스트림으로 바꿔치기해 호출합니다.
   → Wandbox 레이트리밋(429)을 피하고 훨씬 빠릅니다.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  'use strict';

  /* 출력 비교용 정규화: 줄 끝 공백·후행 개행 제거 */
  function norm(s) {
    return String(s == null ? '' : s)
      .replace(/\r\n/g, '\n')
      .replace(/[ \t]+$/gm, '')
      .replace(/\n+$/, '')
      .trim();
  }

  /* 하네스 생성.
     반환: { code, offset }  — offset = 내 코드가 시작하는 줄 수(에러 줄번호 보정용)
     main 을 못 찾으면 null */
  function buildHarness(head, userCode, cases) {
    const renamed = userCode.replace(/\bint\s+main\s*\(([^)]*)\)/, 'int __user_main()');
    if (renamed === userCode) return null;

    const inputs = cases.map(function (c) {
      const v = c.in === '' ? '' : (c.in.endsWith('\n') ? c.in : c.in + '\n');
      return JSON.stringify(v);
    }).join(', ');

    const prefix = [head, '#include <sstream>', ''];
    const offset = prefix.join('\n').split('\n').length;

    const code = prefix.concat([
      renamed,
      '',
      'int main() {',
      '    const char* __IN[] = {' + inputs + '};',
      '    for (int __i = 0; __i < ' + cases.length + '; __i++) {',
      '        istringstream __iss(__IN[__i]);',
      '        streambuf* __oi = cin.rdbuf(__iss.rdbuf());',
      '        ostringstream __oss;',
      '        streambuf* __oo = cout.rdbuf(__oss.rdbuf());',
      '        __user_main();',
      '        cin.rdbuf(__oi); cout.rdbuf(__oo);',
      '        cout << "@@@C" << __i << "@@@" << endl << __oss.str();',
      '    }',
      '    cout << "@@@E@@@" << endl;',
      '    return 0;',
      '}',
    ]).join('\n');

    return { code: code, offset: offset };
  }

  /* 하네스 출력을 케이스별로 분리 */
  function splitCases(raw, n) {
    const out = String(raw == null ? '' : raw).replace(/\r\n/g, '\n');
    const chunks = out.split(/@@@C\d+@@@\n/).slice(1);
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(norm((chunks[i] || '').replace(/@@@E@@@\n?$/, '')));
    }
    return res;
  }

  /* 컴파일 메시지의 줄번호를 "내 코드" 기준으로 되돌립니다.
     Wandbox 는 "prog.cc:20:3:", 로컬 g++ 는 "/tmp/x.cpp:20:3:" 형태를 냅니다.
     둘 다 처리하고, 파일 경로는 노출하지 않습니다. */
  function remapLines(msg, userCode, offset) {
    const nUser = String(userCode).split('\n').length;
    const label = function (ln, col) {
      const n = +ln - offset;
      return (n >= 1 && n <= nUser)
        ? '내 코드 ' + n + '번째 줄:' + col
        : '하네스 내부:' + ln + ':' + col;
    };
    return String(msg == null ? '' : msg)
      // 파일 경로(공백·탭 포함 가능) + 줄:열 → 줄 머리에서만 매칭
      .replace(/^.*?\.(?:cc|cpp|cxx):(\d+):(\d+)/gm, function (full, ln, col) {
        return label(ln, col);
      })
      // 줄번호 없는 머리말 ("....cpp: In function 'x':") 은 파일 경로만 제거
      .replace(/^.*?\.(?:cc|cpp|cxx): /gm, '')
      // 하네스 내부 이름은 학습자에게 혼란만 주므로 가립니다
      .replace(/__user_main/g, 'main')
      .replace(/\b__(?:IN|iss|oss|oi|oo|i)\b/g, '하네스변수')
      .replace(/^ *(\d+) \|/gm, function (full, ln) {
        const n = +ln - offset;
        return (n >= 1 && n <= nUser) ? ' ' + n + ' |' : '  · |';
      });
  }

  /* 컴파일 결과 + 문제 정의 → 채점 결과
     result: Wandbox 응답 형태 { status, program_output, compiler_error, program_error } */
  function judge(result, cases, userCode, offset) {
    const status = String(result.status);
    const cerr = (result.compiler_error || '').trim();

    if (status !== '0' && /(?:^|\n)[^\n]*\berror\b/i.test(cerr)) {
      return { kind: 'compile_error', message: remapLines(cerr, userCode, offset) };
    }
    if (status !== '0' && !cerr) {
      return { kind: 'crashed', status: status,
               stderr: (result.program_error || '').trim() };
    }

    const got = splitCases(result.program_output, cases.length);
    const rows = cases.map(function (c, i) {
      const want = norm(c.out);
      return { index: i, input: c.in, want: want, got: got[i], ok: got[i] === want };
    });
    const passed = rows.filter(function (r) { return r.ok; }).length;

    return {
      kind: 'graded',
      rows: rows,
      passed: passed,
      total: cases.length,
      allPassed: passed === cases.length,
      warning: cerr ? remapLines(cerr, userCode, offset) : '',
    };
  }

  const api = { norm, buildHarness, splitCases, remapLines, judge };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Grader = api;

})(typeof globalThis !== 'undefined' ? globalThis : this);
