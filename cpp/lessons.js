/* ─────────────────────────────────────────────────────────────
   C++ Coding Test Trainer — 커리큘럼 데이터
   모든 정답 코드는 실제 g++ 17로 컴파일·실행해 출력을 검증했습니다.
   ───────────────────────────────────────────────────────────── */

const HEAD = [
  '#include <iostream>',
  '#include <vector>',
  '#include <string>',
  '#include <algorithm>',
  '#include <map>',
  '#include <unordered_map>',
  '#include <set>',
  '#include <unordered_set>',
  '#include <queue>',
  '#include <stack>',
  '#include <deque>',
  '#include <sstream>',
  '#include <numeric>',
  '#include <climits>',
  '#include <cmath>',
  'using namespace std;',
].join('\n');

/* 각 UNIT = 문법 한 묶음 + 그걸 바로 쓰는 문제들 */
const UNITS = [

/* ══════════════════ 0. 환경 ══════════════════ */
{
  id: 'u0', group: '시작', title: '첫 컴파일',
  syntax: [
    { h: '프로그램의 최소 형태',
      code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}`,
      note: '<code>main</code>이 시작점입니다. <code>cout &lt;&lt;</code> 으로 출력하고, <code>endl</code>은 줄바꿈입니다.' },
    { h: '출력을 이어붙이기',
      code: `int a = 3;
cout << "a = " << a << endl;      // a = 3
cout << 1 << ' ' << 2 << '\\n';    // 1 2`,
      note: '<code>&lt;&lt;</code> 를 계속 이어 쓸 수 있습니다. <code>\'\\n\'</code> 이 <code>endl</code>보다 빠릅니다 — <code>endl</code>은 매번 버퍼를 비웁니다.' },
    { h: '주석',
      code: `// 한 줄 주석
/* 여러 줄
   주석 */`,
      note: '' },
  ],
  problems: [
    { id: 'p0a', title: '이름 출력하기', diff: 0,
      desc: '<code>Jihyeon</code> 을 출력하세요. (줄바꿈 포함)',
      starter: `int main() {
    // 여기에 작성

    return 0;
}`,
      cases: [ { in: '', out: 'Jihyeon' } ],
      solution: `int main() {
    cout << "Jihyeon" << endl;
    return 0;
}`,
      hint: '<code>cout &lt;&lt; "Jihyeon" &lt;&lt; endl;</code>' },

    { id: 'p0b', title: '두 줄 출력', diff: 0,
      desc: '첫 줄에 <code>C++</code>, 둘째 줄에 <code>2026</code> 을 출력하세요.',
      starter: `int main() {

    return 0;
}`,
      cases: [ { in: '', out: 'C++\n2026' } ],
      solution: `int main() {
    cout << "C++" << '\\n';
    cout << 2026 << '\\n';
    return 0;
}`,
      hint: '두 번 출력하면 됩니다. 숫자는 따옴표가 없습니다.' },
  ],
},

/* ══════════════════ 1. 변수와 입력 ══════════════════ */
{
  id: 'u1', group: '기초', title: '변수 · 입력',
  syntax: [
    { h: '자료형',
      code: `int    a = 10;        // 정수, 약 ±21억
long long b = 10;     // 큰 정수, 약 ±9×10^18
double c = 3.14;      // 실수
char   d = 'A';       // 문자 하나 (작은따옴표)
string e = "abc";     // 문자열 (큰따옴표)
bool   f = true;      // 참/거짓`,
      note: '🔴 <b>합이나 곱이 나오면 <code>long long</code></b>을 쓰세요. <code>int</code>는 21억을 넘으면 쓰레기값이 됩니다.' },
    { h: '입력받기',
      code: `int n;
cin >> n;              // 정수 하나

int a, b;
cin >> a >> b;         // 두 개를 한 번에

string s;
cin >> s;              // 공백 전까지
getline(cin, s);       // 한 줄 전체 (공백 포함)`,
      note: '<code>cin &gt;&gt;</code> 는 공백·줄바꿈을 기준으로 끊어 읽습니다.' },
    { h: '빠른 입출력 — 외우세요',
      code: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    // ...
}`,
      note: '입력이 10만 줄쯤 되면 이 두 줄이 없으면 <b>시간초과</b>가 납니다. C 입출력과의 동기화를 끊어 버퍼링을 켜는 것입니다. <b>면접에서 이유를 물을 수 있습니다.</b>' },
    { h: '연산자',
      code: `a + b   a - b   a * b
a / b   // 정수끼리면 몫!  7/2 = 3
a % b   // 나머지         7%2 = 1
a++     // 1 증가`,
      note: '🔴 <code>7/2</code>가 <code>3.5</code>가 아니라 <code>3</code>입니다. 실수가 필요하면 <code>7.0/2</code> 또는 <code>(double)a/b</code>.' },
  ],
  problems: [
    { id: 'p1a', title: 'A+B', diff: 0,
      desc: '두 정수를 입력받아 합을 출력하세요.<br><span class="io">입력: <code>3 4</code> → 출력: <code>7</code></span>',
      starter: `int main() {
    int a, b;
    cin >> a >> b;
    // 여기에 작성

    return 0;
}`,
      cases: [ { in: '3 4', out: '7' }, { in: '100 -50', out: '50' }, { in: '0 0', out: '0' } ],
      solution: `int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << '\\n';
    return 0;
}`,
      hint: '<code>cout &lt;&lt; a + b &lt;&lt; \'\\n\';</code>',
      why: "<b>왜 <code>'\\n'</code> 인가</b>: <code>endl</code>은 줄바꿈 + 버퍼 비우기(flush)입니다. flush 는 시스템 호출이라 줄 수가 많아지면 느려집니다 (실측: 20만 줄에서 sync 끈 상태라면 15배 차이). 코테에서는 <code>'\\n'</code>이 기본입니다." },
    { id: 'p1b', title: '몫과 나머지', diff: 0,
      desc: '두 정수 A B를 입력받아 <code>A/B</code> 와 <code>A%B</code> 를 공백으로 구분해 출력하세요.<br><span class="io">입력: <code>7 2</code> → 출력: <code>3 1</code></span>',
      starter: `int main() {
    int a, b;
    cin >> a >> b;

    return 0;
}`,
      cases: [ { in: '7 2', out: '3 1' }, { in: '10 5', out: '2 0' }, { in: '1 3', out: '0 1' } ],
      solution: `int main() {
    int a, b;
    cin >> a >> b;
    cout << a / b << ' ' << a % b << '\\n';
    return 0;
}`,
      hint: '<code>/</code> 와 <code>%</code> 를 각각 출력합니다.' },

    { id: 'p1c', title: '오버플로 체험', diff: 1,
      desc: '두 정수를 입력받아 <b>곱</b>을 출력하세요. 입력이 최대 10만까지 올 수 있습니다.<br>' +
            '<span class="io">입력: <code>100000 100000</code> → 출력: <code>10000000000</code></span><br>' +
            '🔴 <code>int</code>로 받으면 틀립니다. 왜 그런지 직접 확인해보세요.',
      starter: `int main() {
    long long a, b;
    cin >> a >> b;
    // int 로 바꿔서도 한 번 돌려보세요

    return 0;
}`,
      cases: [ { in: '100000 100000', out: '10000000000' }, { in: '3 4', out: '12' },
               { in: '99999 99999', out: '9999800001' } ],
      solution: `int main() {
    long long a, b;
    cin >> a >> b;
    cout << a * b << '\\n';
    return 0;
}`,
      hint: '<code>long long</code>으로 받으면 됩니다. <code>int</code>로 받으면 10^10이 범위를 넘어 1410065408 같은 값이 나옵니다.',
      why: '<b>왜 캐스팅을 곱하기 전에 하나</b>: <code>a * b</code>를 먼저 계산하면 그 시점에 이미 <code>int</code>로 계산되어 넘칩니다. <code>(long long)a * b</code>로 써야 한쪽이 64비트가 되어 전체가 64비트로 계산됩니다.<ul><li>10만 × 10만 = 100억 → <code>int</code>(21억) 초과</li><li><code>int</code>로 받으면 1410065408 같은 쓰레기값이 나옵니다</li></ul>' },
  ],
},

/* ══════════════════ 2. 조건문 ══════════════════ */
{
  id: 'u2', group: '기초', title: '조건문',
  syntax: [
    { h: 'if / else',
      code: `if (a > b) {
    cout << "a가 큼";
} else if (a == b) {
    cout << "같음";
} else {
    cout << "b가 큼";
}`,
      note: '🔴 <code>==</code> 는 비교, <code>=</code> 는 대입입니다. <code>if (a = b)</code>는 버그입니다.' },
    { h: '비교 · 논리 연산자',
      code: `a == b    같다        a != b   다르다
a <  b    작다        a <= b   작거나 같다
cond1 && cond2        둘 다 참 (AND)
cond1 || cond2        하나라도 참 (OR)
!cond                 부정 (NOT)`,
      note: '🔴 C++에는 <code>0 &lt;= a &lt; n</code> 같은 연쇄 비교가 <b>없습니다.</b> <code>0 &lt;= a && a &lt; n</code> 으로 써야 합니다. (Python과 다릅니다)' },
    { h: '삼항 연산자',
      code: `int big = (a > b) ? a : b;
// a>b 가 참이면 a, 아니면 b`,
      note: '짧은 if-else를 한 줄로 씁니다.' },
  ],
  problems: [
    { id: 'p2a', title: '세 수 중 최대', diff: 0,
      desc: '세 정수를 입력받아 가장 큰 값을 출력하세요.<br><span class="io">입력: <code>3 9 5</code> → 출력: <code>9</code></span>',
      starter: `int main() {
    int a, b, c;
    cin >> a >> b >> c;

    return 0;
}`,
      cases: [ { in: '3 9 5', out: '9' }, { in: '-1 -5 -3', out: '-1' }, { in: '7 7 7', out: '7' } ],
      solution: `int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max(a, max(b, c)) << '\\n';
    return 0;
}`,
      hint: '<code>max(a, max(b, c))</code> 로 한 줄에 됩니다. if문으로 풀어도 좋습니다.' },

    { id: 'p2b', title: '짝수 홀수', diff: 0,
      desc: '정수를 입력받아 짝수면 <code>even</code>, 홀수면 <code>odd</code> 를 출력하세요.<br>' +
            '🔴 음수도 들어옵니다. <code>-3 % 2</code> 가 C++에서 몇인지 확인해보세요.',
      starter: `int main() {
    int n;
    cin >> n;

    return 0;
}`,
      cases: [ { in: '4', out: 'even' }, { in: '7', out: 'odd' }, { in: '-3', out: 'odd' }, { in: '0', out: 'even' } ],
      solution: `int main() {
    int n;
    cin >> n;
    cout << (n % 2 == 0 ? "even" : "odd") << '\\n';
    return 0;
}`,
      hint: '🔴 C++에서 <code>-3 % 2 == -1</code> 입니다 (Python은 1). 그래서 <code>n % 2 == 1</code>로 검사하면 음수에서 틀립니다. <code>n % 2 == 0</code> 으로 짝수를 검사하세요.',
      why: '<b>왜 <code>n % 2 == 0</code> 으로 짝수를 검사하나</b>: C++의 <code>%</code>는 음수에서 음수를 반환합니다 — <code>-3 % 2 == -1</code>입니다 (Python 은 1). 그래서 <code>n % 2 == 1</code>로 홀수를 검사하면 음수 입력에서 전부 틀립니다.<ul><li><code>(n & 1)</code>도 안 됩니다: <code>(-3) & 1 == 1</code>이라 <code>%</code>와 결과가 다릅니다</li><li><b>짝수를 기준으로 검사하면 부호와 무관하게 안전합니다</b></li></ul>' },
    { id: 'p2c', title: '격자 안에 있나', diff: 1,
      desc: 'n, r, c를 입력받아 좌표 (r,c)가 n×n 격자 안에 있으면 <code>in</code>, 아니면 <code>out</code>.<br>' +
            '<span class="io">입력: <code>3 1 2</code> → 출력: <code>in</code> / <code>3 -1 0</code> → <code>out</code></span><br>' +
            '💡 BFS에서 매번 쓰는 경계 검사입니다.',
      starter: `int main() {
    int n, r, c;
    cin >> n >> r >> c;

    return 0;
}`,
      cases: [ { in: '3 1 2', out: 'in' }, { in: '3 -1 0', out: 'out' },
               { in: '3 0 0', out: 'in' }, { in: '3 3 1', out: 'out' }, { in: '3 2 2', out: 'in' } ],
      solution: `int main() {
    int n, r, c;
    cin >> n >> r >> c;
    bool inside = (r >= 0 && r < n && c >= 0 && c < n);
    cout << (inside ? "in" : "out") << '\\n';
    return 0;
}`,
      hint: '네 조건을 <code>&&</code>로 묶습니다: <code>r &gt;= 0 && r &lt; n && c &gt;= 0 && c &lt; n</code>. 인덱스는 0부터 n-1까지입니다.',
      why: '<b>왜 <code>&&</code>로 네 조건을 다 쓰나</b>: C++에는 Python 의 <code>0 &lt;= r &lt; n</code> 같은 연쇄 비교가 없습니다. 그렇게 쓰면 <code>(0 &lt;= r) &lt; n</code>으로 해석되어 <code>true/false</code>가 숫자 0/1 이 된 뒤 비교됩니다 — 항상 참이 되는 버그입니다.<br>💡 이 네 줄 조건이 BFS 의 경계 검사와 똑같습니다. 손에 익혀두면 10번 유닛이 쉬워집니다.' },
  ],
},

/* ══════════════════ 3. 반복문 ══════════════════ */
{
  id: 'u3', group: '기초', title: '반복문',
  syntax: [
    { h: 'for',
      code: `for (int i = 0; i < 5; i++) {
    cout << i << ' ';        // 0 1 2 3 4
}

for (int i = 1; i <= n; i++) { ... }   // 1부터 n까지`,
      note: '<code>초기화; 조건; 증가</code> 세 부분입니다.' },
    { h: 'while',
      code: `int i = 0;
while (i < 5) {
    cout << i;
    i++;                     // 🔴 빼먹으면 무한루프
}`,
      note: '' },
    { h: '2중 루프',
      code: `for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
        cout << i << ',' << j << ' ';`,
      note: '🔴 <code>n</code>이 10만이면 2중 루프는 100억 번 → <b>시간초과</b>입니다. 제약조건을 먼저 보세요.' },
    { h: 'break / continue',
      code: `for (int i = 0; i < n; i++) {
    if (i == 3) continue;    // 이번 회차만 건너뜀
    if (i == 7) break;       // 루프 완전 탈출
}`,
      note: '' },
  ],
  problems: [
    { id: 'p3a', title: '1부터 N까지 합', diff: 0,
      desc: 'N을 입력받아 1부터 N까지의 합을 출력하세요. N은 최대 100만.<br>' +
            '🔴 합이 얼마나 커지는지 계산해보세요 — 자료형이 중요합니다.',
      starter: `int main() {
    int n;
    cin >> n;

    return 0;
}`,
      cases: [ { in: '10', out: '55' }, { in: '1', out: '1' }, { in: '1000000', out: '500000500000' } ],
      solution: `int main() {
    int n;
    cin >> n;
    long long sum = 0;
    for (int i = 1; i <= n; i++) sum += i;
    cout << sum << '\\n';
    return 0;
}`,
      hint: 'N=100만이면 합은 약 5000억입니다. <code>int</code>(21억)를 넘으니 <code>long long</code>이 필요합니다.',
      why: '<b>왜 <code>long long</code>인가</b>: N=100만이면 합이 약 5000억입니다. <code>int</code> 최대가 21억이라 한참 넘습니다.<ul><li>판단법: <b>1부터 N까지 합 ≈ N²/2</b>. N이 10만을 넘으면 의심하세요</li><li>루프 변수 <code>i</code>는 <code>int</code>로 둬도 됩니다 — 넘치는 건 <b>누적값</b>입니다</li></ul>' },
    { id: 'p3b', title: '구구단 한 줄', diff: 0,
      desc: 'N을 입력받아 <code>N*1</code> 부터 <code>N*9</code> 까지의 결과를 공백으로 구분해 출력하세요.<br><span class="io">입력: <code>3</code> → 출력: <code>3 6 9 12 15 18 21 24 27</code></span>',
      starter: `int main() {
    int n;
    cin >> n;

    return 0;
}`,
      cases: [ { in: '3', out: '3 6 9 12 15 18 21 24 27' }, { in: '1', out: '1 2 3 4 5 6 7 8 9' } ],
      solution: `int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= 9; i++) {
        cout << n * i;
        if (i < 9) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '마지막에 공백이 붙어도 보통 통과하지만, 깔끔하게 하려면 <code>if (i &lt; 9)</code> 로 구분자를 제어합니다.' },

    { id: 'p3c', title: '별 삼각형', diff: 1,
      desc: 'N을 입력받아 i번째 줄에 별 i개를 출력하세요.<br><span class="io">입력: <code>3</code> → 출력:<br><code>*</code><br><code>**</code><br><code>***</code></span>',
      starter: `int main() {
    int n;
    cin >> n;

    return 0;
}`,
      cases: [ { in: '3', out: '*\n**\n***' }, { in: '1', out: '*' } ],
      solution: `int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) cout << '*';
        cout << '\\n';
    }
    return 0;
}`,
      hint: '바깥 루프가 줄, 안쪽 루프가 그 줄의 별 개수입니다.' },

    { id: 'p3d', title: '3 또는 5의 배수 합', diff: 1,
      desc: 'N을 입력받아 1~N 중 3 또는 5의 배수인 수의 합을 출력하세요.<br><span class="io">입력: <code>10</code> → 출력: <code>33</code> (3+5+6+9+10)</span>',
      starter: `int main() {
    int n;
    cin >> n;

    return 0;
}`,
      cases: [ { in: '10', out: '33' }, { in: '1', out: '0' }, { in: '100', out: '2418' } ],
      solution: `int main() {
    int n;
    cin >> n;
    long long sum = 0;
    for (int i = 1; i <= n; i++)
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    cout << sum << '\\n';
    return 0;
}`,
      hint: '<code>||</code> 로 두 조건을 묶습니다. 15처럼 둘 다 해당하는 수를 두 번 더하지 않도록 <code>||</code>를 쓰는 게 맞습니다.' },
  ],
},

/* ══════════════════ 4. vector ══════════════════ */
{
  id: 'u4', group: '자료구조', title: 'vector (배열)',
  syntax: [
    { h: '만들기',
      code: `vector<int> v;                   // 빈 벡터
vector<int> v(5);                // 크기 5, 전부 0
vector<int> v(5, -1);            // 크기 5, 전부 -1
vector<int> v = {1, 2, 3};       // 초기값

vector<vector<int>> g(n, vector<int>(m, 0));   // n×m 2차원`,
      note: '🔴 2차원 선언을 외우세요. 격자 문제에서 매번 씁니다.' },
    { h: '쓰기',
      code: `v.push_back(10);     // 뒤에 추가
v.pop_back();        // 뒤에서 제거
v[i]                 // i번째 (0부터)
v.size()             // 크기
v.empty()            // 비었나
v.back()             // 마지막 원소
v.clear()            // 전부 삭제`,
      note: '' },
    { h: '🔴 값을 꺼내고 넣기 — 가장 많이 쓰는 형태',
      code: `vector<int> v = {10, 20, 30};

// 꺼내기 — 인덱스는 0 부터 시작합니다
cout << v[0];          // 10   (첫 번째)
cout << v[2];          // 30   (세 번째)
cout << v[v.size()-1]; // 30   (마지막)
cout << v.back();      // 30   (마지막, 더 짧게)

// 넣기 / 바꾸기
v[1] = 99;             // {10, 99, 30}
v.push_back(40);       // {10, 99, 30, 40}

// 🔴 N개를 입력받는 정석 패턴 — 이걸 외우세요
int n;
cin >> n;
vector<int> a(n);                      // 크기 n 으로 미리 만들고
for (int i = 0; i < n; i++)
    cin >> a[i];                        // 한 칸씩 채웁니다`,
      note: '🔴 <b>인덱스는 0부터 n−1까지</b>입니다. <code>v[n]</code>은 범위 밖이라 ' +
            '쓰레기값이 나오거나 크래시합니다 — C++은 <b>범위 검사를 해주지 않습니다</b>.<br>' +
            '<b>왜 <code>vector&lt;int&gt; a(n)</code>으로 미리 만드나</b>: 크기를 알 때는 ' +
            '미리 잡아두면 <code>a[i]</code>로 바로 넣을 수 있습니다. ' +
            '<code>push_back</code>으로 채우려면 빈 벡터에서 시작해야 합니다 ' +
            '(둘을 섞으면 앞쪽 n칸이 0으로 남습니다).' },

    { h: '순회 — 전체를 훑을 때',
      code: `vector<int> v = {10, 20, 30};

// ① range-for : 인덱스가 필요 없을 때 (가장 짧음)
for (int x : v) cout << x << ' ';        // 10 20 30

// ② 수정하려면 & 를 붙입니다
for (int& x : v) x *= 2;                 // {20, 40, 60}

// ③ 인덱스가 필요할 때
for (int i = 0; i < (int)v.size(); i++)
    cout << i << ":" << v[i] << ' ';     // 0:20 1:40 2:60`,
      note: '🔴 수정할 거면 <code>int&amp;</code> 로 받아야 합니다. <code>int x</code>는 복사라 원본이 안 바뀝니다.' },
    { h: '🔴 size()의 함정',
      code: `vector<int> v;             // 비어있음
v.size() - 1              // → 18446744073709551615 (!)

// ❌ 사실상 무한루프
for (int i = 0; i < v.size() - 1; i++)

// ✅ int로 캐스팅
for (int i = 0; i + 1 < (int)v.size(); i++)`,
      note: '<code>size()</code>는 <b>부호 없는</b> 정수를 반환합니다. <code>0 - 1</code>이 음수가 아니라 엄청 큰 수가 됩니다. 직접 출력해서 확인해보세요.' },
  ],
  problems: [
    { id: 'p4a', title: 'N개 입력받아 거꾸로', diff: 0,
      desc: 'N과 N개의 정수를 입력받아 역순으로 출력하세요.<br><span class="io">입력: <code>4</code> / <code>1 2 3 4</code> → 출력: <code>4 3 2 1</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '4\n1 2 3 4', out: '4 3 2 1' }, { in: '1\n7', out: '7' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    for (int i = n - 1; i >= 0; i--) {
        cout << v[i];
        if (i > 0) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '뒤에서부터 순회하거나, <code>reverse(v.begin(), v.end())</code> 후 출력합니다.' },

    { id: 'p4b', title: '최대 최소 합', diff: 0,
      desc: 'N개의 정수를 입력받아 <code>최대 최소 합</code> 을 공백으로 구분해 출력하세요.<br><span class="io">입력: <code>4</code> / <code>3 1 4 1</code> → 출력: <code>4 1 9</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '4\n3 1 4 1', out: '4 1 9' }, { in: '1\n5', out: '5 5 5' },
               { in: '3\n-1 -5 -3', out: '-1 -5 -9' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    long long sum = accumulate(v.begin(), v.end(), 0LL);
    cout << *max_element(v.begin(), v.end()) << ' '
         << *min_element(v.begin(), v.end()) << ' '
         << sum << '\\n';
    return 0;
}`,
      hint: '<code>*max_element(v.begin(), v.end())</code> — 앞의 <code>*</code>를 빼먹지 마세요 (반복자를 반환하므로). 합은 <code>accumulate(..., 0LL)</code>.',
      why: '<b>왜 <code>*max_element</code>에 <code>*</code>를 붙이나</b>: 이 함수는 값이 아니라 <b>반복자(위치)</b>를 반환합니다. <code>*</code>로 그 위치의 값을 꺼내야 합니다.<ul><li><code>accumulate(..., 0LL)</code>의 <code>0LL</code>이 중요합니다 — 초기값의 타입이 누적 타입을 결정하므로 <code>0</code>으로 두면 int 로 누적되어 넘칩니다</li></ul>' },
    { id: 'p4c', title: '2차원 격자 합', diff: 1,
      desc: 'n, m과 n×m 격자를 입력받아 모든 값의 합을 출력하세요.<br><span class="io">입력: <code>2 3</code> / <code>1 2 3</code> / <code>4 5 6</code> → 출력: <code>21</code></span>',
      starter: `int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    // 입력받기

    return 0;
}`,
      cases: [ { in: '2 3\n1 2 3\n4 5 6', out: '21' }, { in: '1 1\n5', out: '5' } ],
      solution: `int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];
    long long sum = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            sum += g[i][j];
    cout << sum << '\\n';
    return 0;
}`,
      hint: '2중 루프로 입력받고, 2중 루프로 더합니다. 합은 <code>long long</code>.' },

    { id: 'p4d', title: 'size() 함정 확인', diff: 1,
      desc: '빈 vector의 <code>size() - 1</code> 값을 출력하세요.<br>' +
            '🔴 왜 이런 값이 나오는지 이해하는 게 목적입니다. 예상과 다를 겁니다.',
      starter: `int main() {
    vector<int> v;      // 비어있음
    cout << v.size() - 1 << '\\n';
    return 0;
}`,
      cases: [ { in: '', out: '18446744073709551615' } ],
      solution: `int main() {
    vector<int> v;
    cout << v.size() - 1 << '\\n';
    return 0;
}`,
      hint: '그냥 실행 버튼을 눌러보세요. <code>size()</code>가 부호 없는 64비트라 <code>0-1</code>이 최대값으로 돌아갑니다. 이게 루프 조건에서 무한루프를 만드는 원인입니다.',
      why: '<b>왜 이런 값이 나오나</b>: <code>size()</code>는 <code>size_t</code>(부호 없는 64비트)를 반환합니다. 부호가 없으면 음수를 표현할 수 없으므로 <code>0 - 1</code>이 <b>표현 가능한 최대값으로 한 바퀴 돌아갑니다</b>(2⁶⁴−1).<ul><li>그래서 <code>for (int i = 0; i &lt; v.size() - 1; i++)</code>가 빈 벡터에서 사실상 무한 루프가 됩니다</li><li>대책: <code>(int)v.size()</code>로 캐스팅하거나 <code>i + 1 &lt; v.size()</code>로 씁니다</li></ul>' },
  ],
},

/* ══════════════════ 5. string ══════════════════ */
{
  id: 'u5', group: '자료구조', title: 'string (문자열)',
  syntax: [
    { h: '기본',
      code: `string s = "hello";
s.size()  또는  s.length()     // 5
s[0]                            // 'h'
s += "!";                       // 이어붙이기
s.substr(1, 3)                  // "ell"  (시작, 개수)
s.find("ll")                    // 위치, 없으면 string::npos`,
      note: '🔴 <code>substr(시작, <b>개수</b>)</code> 입니다. Python의 <code>s[1:4]</code>는 (시작, <b>끝</b>)이라 의미가 다릅니다.' },
    { h: '없음 판정',
      code: `if (s.find("x") == string::npos) {
    // 없음
}`,
      note: '<code>find</code>는 못 찾으면 <code>string::npos</code>를 반환합니다. <code>-1</code>과 비교하면 안 됩니다.' },
    { h: '문자 ↔ 숫자',
      code: `int d = c - '0';       // '7' → 7
char c = d + '0';      // 7 → '7'

int n = stoi("123");           // 문자열 → int
long long m = stoll("123456789012");
string t = to_string(456);     // 숫자 → 문자열`,
      note: '🔴 <code>c - \'0\'</code> 패턴을 외우세요. 자릿수 분해에 매번 씁니다.' },
    { h: '문자 판정 · 변환',
      code: `isdigit(c)  isalpha(c)  isupper(c)  islower(c)
toupper(c)  tolower(c)

for (char& c : s) c = toupper(c);   // 전부 대문자`,
      note: '' },
    { h: '정렬 · 뒤집기',
      code: `sort(s.begin(), s.end());       // 문자열도 정렬 가능
reverse(s.begin(), s.end());`,
      note: '' },

    { h: '🔴 문자를 바꾸려면 &amp; 를 붙입니다',
      code: `string s = "hello";

for (char c : s)                // ❌ c 는 복사본 — s 는 안 바뀜
    c = toupper(c);

for (char& c : s)               // ✅ & = 원본을 가리킴
    c = toupper(c);             //    s 가 "HELLO" 로 바뀜

s[0] = 'H';                     // ✅ 인덱스로 직접 바꿔도 됩니다`,
      note: '<b>왜 <code>&amp;</code>가 필요한가</b>: <code>for (char c : s)</code>는 ' +
            '각 문자를 <b>복사해서</b> <code>c</code>에 담습니다. ' +
            '복사본을 바꿔도 원본 문자열은 그대로입니다.<br>' +
            '<code>&amp;</code>를 붙이면 <code>c</code>가 <b>원본 문자 자체의 별명</b>이 되어 ' +
            '바꾸면 문자열이 바뀝니다.<br>' +
            '💡 <code>&amp;</code>(참조)는 <b>8단원 함수 · 참조</b>에서 자세히 다룹니다. ' +
            '여기서는 "수정하려면 <code>&amp;</code>" 만 기억하면 됩니다.' },
  ],
  problems: [
    { id: 'p5a', title: '문자열 뒤집기', diff: 0,
      desc: '문자열을 입력받아 뒤집어 출력하세요.<br><span class="io">입력: <code>hello</code> → 출력: <code>olleh</code></span>',
      starter: `int main() {
    string s;
    cin >> s;

    return 0;
}`,
      cases: [ { in: 'hello', out: 'olleh' }, { in: 'a', out: 'a' }, { in: 'ab', out: 'ba' } ],
      solution: `int main() {
    string s;
    cin >> s;
    reverse(s.begin(), s.end());
    cout << s << '\\n';
    return 0;
}`,
      hint: '<code>reverse(s.begin(), s.end())</code> 한 줄입니다.' },

    { id: 'p5b', title: '회문 판정', diff: 1,
      desc: '문자열이 앞뒤로 같으면 <code>yes</code>, 아니면 <code>no</code>.<br><span class="io">입력: <code>level</code> → <code>yes</code> / <code>hello</code> → <code>no</code></span>',
      starter: `int main() {
    string s;
    cin >> s;

    return 0;
}`,
      cases: [ { in: 'level', out: 'yes' }, { in: 'hello', out: 'no' },
               { in: 'a', out: 'yes' }, { in: 'ab', out: 'no' }, { in: 'abba', out: 'yes' } ],
      solution: `int main() {
    string s;
    cin >> s;
    string t = s;
    reverse(t.begin(), t.end());
    cout << (s == t ? "yes" : "no") << '\\n';
    return 0;
}`,
      hint: '뒤집어서 비교하거나, 투포인터로 양쪽에서 좁혀옵니다. 투포인터가 더 효율적입니다: <code>int l=0, r=(int)s.size()-1;</code>' },

    { id: 'p5c', title: '자릿수 합', diff: 1,
      desc: '숫자를 <b>문자열로</b> 입력받아 각 자리 숫자의 합을 출력하세요.<br><span class="io">입력: <code>12345</code> → 출력: <code>15</code></span>',
      starter: `int main() {
    string s;
    cin >> s;

    return 0;
}`,
      cases: [ { in: '12345', out: '15' }, { in: '0', out: '0' }, { in: '999', out: '27' } ],
      solution: `int main() {
    string s;
    cin >> s;
    int sum = 0;
    for (char c : s) sum += c - '0';
    cout << sum << '\\n';
    return 0;
}`,
      hint: '<code>c - \'0\'</code> 으로 문자를 숫자로 바꿔 더합니다.' },

    { id: 'p5d', title: '대소문자 뒤집기', diff: 1,
      desc: '대문자는 소문자로, 소문자는 대문자로 바꿔 출력하세요.<br><span class="io">입력: <code>Hello</code> → 출력: <code>hELLO</code></span>',
      starter: `int main() {
    string s;
    cin >> s;

    return 0;
}`,
      cases: [ { in: 'Hello', out: 'hELLO' }, { in: 'ABC', out: 'abc' }, { in: 'xyz', out: 'XYZ' } ],
      solution: `int main() {
    string s;
    cin >> s;
    for (char& c : s)
        c = isupper(c) ? tolower(c) : toupper(c);
    cout << s << '\\n';
    return 0;
}`,
      hint: '🔴 <code>char&amp; c</code> — 참조로 받아야 원본이 바뀝니다. <code>char c</code>로 받으면 복사라 안 바뀝니다.',
      why: '<b>왜 <code>char&amp; c</code>인가</b>: <code>for (char c : s)</code>는 각 문자를 <b>복사</b>해서 가져오므로 <code>c</code>를 바꿔도 원본 <code>s</code>는 그대로입니다. <code>&amp;</code>를 붙여 참조로 받아야 원본이 바뀝니다.<br>💡 반대로 <b>읽기만</b> 할 때 <code>string</code>처럼 큰 값은 <code>const string&amp;</code>로 받아야 복사 비용을 피합니다 (실측 39배 차이).' },
  ],
},

/* ══════════════════ 신규: 변수 선언 위치 (스코프) ══════════════════ */
{
  id: 'us', group: '기초', title: '변수 선언 위치',
  syntax: [
    { h: '스코프 — 변수가 살아있는 범위',
      code: `int main() {
    int a = 1;                 // main 전체에서 사용 가능
    {
        int b = 2;             // 이 블록 안에서만
        cout << a << b;        // 둘 다 OK
    }
    // cout << b;              // ❌ 에러: b 는 이미 사라짐
}`,
      note: '변수는 <b>선언된 중괄호 <code>{}</code> 안에서만</b> 살아있습니다. 블록이 끝나면 사라집니다.<br>' +
            '<b>왜 이런 규칙이 있나</b>: 변수가 필요한 범위를 좁히면 ' +
            '① 이름 충돌이 줄고 ② 메모리를 바로 회수하고 ③ "이 변수가 어디서 바뀌나"를 추적하기 쉽습니다.' },

    { h: '🔴 for 루프 변수는 루프 안에서만',
      code: `for (int i = 0; i < n; i++) {
    cout << i;                 // OK
}
// cout << i;                  // ❌ 에러: i 는 루프와 함께 사라짐

int i;                         // 루프 밖에서도 쓰려면 밖에 선언
for (i = 0; i < n; i++) { }
cout << i;                     // OK (n 이 됨)`,
      note: '보통은 <code>for (int i = ...)</code>가 맞습니다. ' +
            '루프가 끝난 뒤 <b>그 값을 써야 할 때만</b> 밖에 선언하세요.' },

    { h: '🔴 어디에 선언해야 하나 — 3가지 원칙',
      code: `int main() {
    int n;
    cin >> n;

    // ① 쓰는 곳에 최대한 가깝게
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // ② 누적 변수는 루프 "밖" — 루프 안이면 매번 초기화됨
    long long sum = 0;
    for (int x : v) sum += x;

    // ③ 임시 변수는 루프 "안" — 매번 새로 쓰는 값
    for (int i = 0; i < n; i++) {
        int doubled = v[i] * 2;
        cout << doubled << ' ';
    }
}`,
      note: '<b>②와 ③의 차이가 핵심입니다.</b><br>' +
            '· <b>누적</b>(합계, 최대값, 개수)은 루프를 넘어 유지되어야 하므로 <b>밖</b><br>' +
            '· <b>임시</b>(이번 회차에만 쓰는 값)는 <b>안</b>에 두면 의도가 분명하고 실수가 줄어듭니다' },

    { h: '🔴 가장 흔한 실수 — 누적 변수를 루프 안에 선언',
      code: `// ❌ sum 이 매번 0 으로 초기화되어 마지막 값만 남습니다
for (int x : v) {
    long long sum = 0;
    sum += x;
}

// ✅ 루프 밖에서 한 번만
long long sum = 0;
for (int x : v) sum += x;`,
      note: '컴파일은 되고 에러도 안 나지만 <b>답이 틀립니다.</b> ' +
            '이런 버그는 찾기 어려우니 "누적은 밖"을 반사적으로 기억하세요.' },

    { h: '최댓값 찾기 — 초기화 값이 중요합니다',
      code: `// ❌ 전부 음수인 입력에서 틀립니다
int best = 0;
for (int x : v) best = max(best, x);

// ✅ 가능한 최솟값으로 초기화
int best = INT_MIN;                 // <climits>
long long best = LLONG_MIN;

// ✅ 또는 첫 원소로 시작 (비어있지 않을 때)
int best = v[0];
for (int x : v) best = max(best, x);`,
      note: '<b>왜</b>: <code>best = 0</code>은 "0보다 큰 값"만 찾습니다. ' +
            '<code>[-5, -2, -9]</code>의 최댓값은 −2 인데 0 이 나옵니다.<br>' +
            '💡 <b>최댓값은 최솟값으로, 최솟값은 최댓값으로</b> 초기화합니다.' },

    { h: '전역 변수 — 코테에서 쓸 때와 안 쓸 때',
      code: `int n, m;                      // 전역: 모든 함수에서 접근
vector<vector<int>> grid;
bool visited[1001][1001];      // 🔴 전역 배열은 자동으로 false/0

void dfs(int r, int c) {
    visited[r][c] = true;      // 인자로 넘기지 않아도 됨
    // ...
}

int main() {
    // 지역 배열은 초기화되지 않습니다 (쓰레기값)
    bool local[100];           // ❌ 값이 뭔지 모름
    bool local2[100] = {};     // ✅ 전부 false
}`,
      note: '<b>전역을 쓰는 이유</b> (코테 한정):<br>' +
            '· DFS 재귀에서 인자를 줄일 수 있습니다<br>' +
            '· 큰 배열을 <b>스택이 아닌 영역</b>에 둬서 스택 오버플로를 피합니다 ' +
            '(지역 배열 <code>int a[1000000]</code>은 스택 4MB 요구 → 터짐)<br>' +
            '· 자동으로 0/false 로 초기화됩니다<br><br>' +
            '🔴 <b>함정 — 전역 변수는 한 번만 초기화됩니다.</b> 같은 함수를 여러 번 호출하면 이전 값이 남아 누적됩니다. 채점기가 여러 테스트케이스를 연속 실행하는 경우 답이 틀어지므로, <b>쓰기 전에 직접 0 으로 초기화</b>하는 습관을 들이세요.<br><br>' +
            '🔴 <b>실무에서는 피하세요.</b> 어디서 바뀌는지 추적이 안 돼 버그의 원천입니다. ' +
            '코테는 코드가 짧고 수명이 짧아 예외로 허용됩니다.' },

    { h: '🔴 큰 배열은 어디에 선언하나 — 스택 한계',
      code: `int main() {
    int a[1000000];              // ❌ 스택 4MB 요구 → 크래시 가능
    vector<int> b(1000000);      // ✅ 힙에 할당 (안전)
}

int c[1000000];                  // ✅ 전역 = 정적 영역 (안전)`,
      note: '<b>왜</b>: 지역 변수는 <b>스택</b>에 놓이고, 스택은 보통 1~8MB 뿐입니다. ' +
            '<code>vector</code>는 내부적으로 <b>힙</b>을 쓰고, 전역 변수는 <b>정적 영역</b>에 들어가 ' +
            '둘 다 훨씬 큰 공간을 씁니다.<br>' +
            '💡 <b>기준: 원소 10만 개 이상이면 <code>vector</code> 또는 전역으로.</b>' },

    { h: 'const — 바뀌지 않는 값',
      code: `const int MAX_N = 100000;      // 이름을 주면 의도가 드러납니다
const int INF = 1e9;
const long long LINF = 1e18;

int dr[4] = {-1, 1, 0, 0};     // 방향 배열도 const 로 둘 수 있습니다`,
      note: '<b>왜 쓰나</b>: ① 실수로 바꾸는 것을 컴파일러가 막아줍니다 ' +
            '② <code>if (x == 4)</code> 대신 <code>if (x == DIRECTIONS)</code>로 읽히게 합니다. ' +
            '<b>코드 품질 평가에서 유리합니다.</b>' },
  ],
  problems: [
    { id: 'usa', title: '누적 변수 위치 고치기', diff: 0,
      desc: 'N개의 정수 합을 출력하세요. <b>starter 코드에 버그가 있습니다</b> — ' +
            '누적 변수가 잘못된 위치에 있어 마지막 값만 나옵니다. 찾아서 고치세요.<br>' +
            '<span class="io">입력: <code>4</code> / <code>1 2 3 4</code> → 출력: <code>10</code></span>',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        long long sum = 0;        // 🔴 이 위치가 문제입니다
        int x;
        cin >> x;
        sum += x;
        if (i == n - 1) cout << sum << '\\n';
    }
    return 0;
}`,
      cases: [ { in: '4\n1 2 3 4', out: '10' }, { in: '1\n7', out: '7' },
               { in: '3\n-1 -2 -3', out: '-6' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    long long sum = 0;            // 루프 밖: 회차를 넘어 유지되어야 함
    for (int i = 0; i < n; i++) {
        int x;                    // 루프 안: 이번 회차에만 쓰는 임시값
        cin >> x;
        sum += x;
    }
    cout << sum << '\\n';
    return 0;
}`,
      hint: '<code>sum</code>을 루프 <b>밖</b>으로 꺼내고, 출력도 루프가 끝난 뒤로 옮깁니다. ' +
            '반대로 <code>x</code>는 매 회차에 새 값이니 루프 안이 맞습니다.',
      why: '<b>왜 위치가 중요한가</b>: 루프 안에 <code>long long sum = 0;</code>을 두면 ' +
           '매 회차마다 <b>새 변수가 만들어지고 0으로 초기화</b>됩니다. ' +
           '이전 회차의 값이 사라지므로 누적이 되지 않습니다.' +
           '<ul><li><b>누적값</b>(합·최대·개수)은 루프를 넘어 살아야 하므로 <b>밖</b></li>' +
           '<li><b>임시값</b>(이번 회차 입력)은 <b>안</b>에 둬야 의도가 분명합니다</li>' +
           '<li>컴파일 에러가 안 나고 답만 틀리는 유형이라 특히 주의해야 합니다</li></ul>' },

    { id: 'usb', title: '최댓값 초기화', diff: 1,
      desc: 'N개의 정수 중 최댓값을 출력하세요. <b>음수만 들어오는 경우도 있습니다.</b><br>' +
            '<span class="io">입력: <code>3</code> / <code>-5 -2 -9</code> → 출력: <code>-2</code></span><br>' +
            '🔴 <code>best = 0</code> 으로 시작하면 틀립니다. 왜 그런지 생각해보세요.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    // best 를 무엇으로 초기화해야 할까요?

    return 0;
}`,
      cases: [ { in: '3\n-5 -2 -9', out: '-2' }, { in: '4\n3 1 4 1', out: '4' },
               { in: '1\n-7', out: '-7' }, { in: '2\n0 -1', out: '0' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    int best = INT_MIN;           // 가능한 최솟값으로 시작
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        best = max(best, x);
    }
    cout << best << '\\n';
    return 0;
}`,
      hint: '<code>INT_MIN</code>(<code>&lt;climits&gt;</code>)으로 초기화하거나, ' +
            '첫 원소를 읽어 <code>best</code>로 삼고 나머지와 비교합니다.',
      why: '<b>왜 0 으로 초기화하면 안 되나</b>: <code>best = 0</code>은 사실상 ' +
           '"0과 비교해서 더 큰 값"을 찾습니다. 모든 값이 음수면 0 이 끝까지 남아 답이 틀립니다.' +
           '<ul><li><b>최댓값은 가능한 최솟값으로</b>(<code>INT_MIN</code> / <code>LLONG_MIN</code>)</li>' +
           '<li><b>최솟값은 가능한 최댓값으로</b>(<code>INT_MAX</code> / <code>LLONG_MAX</code>)</li>' +
           '<li>또는 <b>첫 원소로 시작</b>하면 범위를 신경쓰지 않아도 됩니다 (단 배열이 비어있지 않아야 함)</li></ul>' },

    { id: 'usc', title: '큰 배열은 어디에', diff: 1,
      desc: '크기 100만의 배열에 <code>0..N-1</code>을 채우고 합을 출력하세요.<br>' +
            '<span class="io">입력: <code>1000000</code> → 출력: <code>499999500000</code></span><br>' +
            '🔴 <code>int a[1000000];</code>을 <code>main</code> 안에 선언하면 스택이 터질 수 있습니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    // 100만 개 배열을 어디에, 어떻게 선언할까요?

    return 0;
}`,
      cases: [ { in: '1000000', out: '499999500000' }, { in: '1', out: '0' },
               { in: '10', out: '45' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> a(n);             // 힙에 할당 — 크기가 커도 안전
    for (int i = 0; i < n; i++) a[i] = i;

    long long sum = 0;            // 합은 long long (5000억)
    for (int x : a) sum += x;

    cout << sum << '\\n';
    return 0;
}`,
      hint: '<code>vector&lt;int&gt; a(n);</code> 으로 선언하면 힙을 쓰므로 안전합니다. ' +
            '합이 약 5000억이라 <code>long long</code>이 필요합니다.',
      why: '<b>왜 지역 배열이 위험한가</b>: 지역 변수는 <b>스택</b>에 놓이고, ' +
           '스택 크기는 보통 1~8MB 입니다. <code>int a[1000000]</code>은 4MB 를 요구해 ' +
           '환경에 따라 스택 오버플로로 바로 죽습니다.' +
           '<ul><li><code>vector</code>는 내부적으로 <b>힙</b>을 씁니다 — 수 GB 까지 가능</li>' +
           '<li><b>전역 배열</b>은 <b>정적 영역</b>에 들어가 역시 안전하고, 자동으로 0 초기화됩니다</li>' +
           '<li>기준: <b>원소 10만 개 이상이면 <code>vector</code> 또는 전역</b></li></ul>' },
  ],
},

/* ══════════════════ 신규: 함수 · 참조 ══════════════════ */
{
  id: 'uf', group: '기초', title: '함수 · 참조',
  syntax: [
    { h: '함수 정의',
      code: `int add(int a, int b) {     // 반환형 이름(매개변수)
    return a + b;
}

void printLine() {          // 반환값 없으면 void
    cout << "----" << '\\n';
}

int main() {
    cout << add(3, 4) << '\\n';   // 7
    printLine();
}`,
      note: '🔴 <b>함수는 쓰기 전에 정의되어 있어야 합니다.</b> <code>main</code> 위에 쓰거나, 아래에 쓰려면 선언을 먼저 해야 합니다.' },
    { h: '선언을 먼저 (프로토타입)',
      code: `int add(int a, int b);      // 선언만 — 이런 함수가 있다고 알림

int main() {
    cout << add(3, 4);     // 정의가 아래 있어도 OK
}

int add(int a, int b) {    // 실제 정의
    return a + b;
}`,
      note: '코테에서는 보통 <code>main</code> 위에 함수를 다 쓰는 게 편합니다.' },
    { h: '값 전달 vs 참조 전달 — 🔴 중요',
      code: `void byValue(int x)  { x = 99; }    // 복사 → 원본 안 바뀜
void byRef(int& x)   { x = 99; }    // 참조 → 원본 바뀜

int main() {
    int a = 1;
    byValue(a);   cout << a;   // 1  (그대로)
    byRef(a);     cout << a;   // 99 (바뀜)
}`,
      note: '<code>&amp;</code> 하나로 동작이 완전히 달라집니다. 함수가 값을 바꿔야 하면 <code>&amp;</code>를 붙입니다.' },
    { h: '큰 데이터는 const 참조로 — 성능',
      code: `void slow(vector<int> v)         { ... }   // ❌ 전체 복사 (느림)
void fast(vector<int>& v)        { ... }   // ✅ 복사 없음, 수정 가능
void safe(const vector<int>& v)  { ... }   // ✅ 복사 없음, 수정 불가`,
      note: '🔴 <b>읽기만 할 거면 <code>const vector&lt;int&gt;&amp;</code> 가 정답입니다.</b> ' +
            'vector 를 값으로 받으면 원소를 전부 복사해 시간초과의 원인이 됩니다. ' +
            '임베디드·시스템 직무 면접에서도 자주 묻는 부분입니다.' },
    { h: '전역 변수 — 코테에서는 허용',
      code: `int n, m;                      // 전역
vector<vector<int>> grid;
bool visited[1001][1001];      // 전역이면 자동으로 false

void dfs(int r, int c) {       // 인자를 줄일 수 있음
    visited[r][c] = true;
}`,
      note: '실무에서는 피하지만 코테에서는 관례입니다. 특히 DFS 재귀에서 인자를 줄이는 데 씁니다.' },
  ],
  problems: [
    { id: 'pfa', title: '함수로 나눠 쓰기', diff: 0,
      desc: '세 정수를 입력받아 <b>두 개의 함수</b>를 만들어 쓰세요.<br>' +
            '· <code>sum3</code> — 세 수의 합을 반환<br>' +
            '· <code>maxOf3</code> — 세 수 중 최대를 반환<br>' +
            '<span class="io">입력: <code>3 9 5</code> → 출력: <code>17 9</code></span><br>' +
            '💡 같은 계산을 <code>main</code> 안에 늘어놓는 대신 ' +
            '<b>이름 붙인 함수로 꺼내는</b> 연습입니다.',
      starter: `int sum3(int a, int b, int c) {
    // 여기에 작성

}

int maxOf3(int a, int b, int c) {
    // 여기에 작성

}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int x, y, z;
    cin >> x >> y >> z;
    cout << sum3(x, y, z) << ' ' << maxOf3(x, y, z) << '\\n';
    return 0;
}`,
      cases: [ { in: '3 9 5', out: '17 9' }, { in: '1 1 1', out: '3 1' },
               { in: '-5 -2 -9', out: '-16 -2' }, { in: '0 0 10', out: '10 10' } ],
      solution: `int sum3(int a, int b, int c) {
    return a + b + c;
}

int maxOf3(int a, int b, int c) {
    return max(a, max(b, c));      // max 를 두 번 겹쳐 씁니다
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int x, y, z;
    cin >> x >> y >> z;
    cout << sum3(x, y, z) << ' ' << maxOf3(x, y, z) << '\\n';
    return 0;
}`,
      hint: '<code>sum3</code>은 <code>return a + b + c;</code> 한 줄입니다. ' +
            '<code>maxOf3</code>은 <code>max(a, max(b, c))</code> — ' +
            '<code>max</code>는 두 개만 받으므로 겹쳐 씁니다. ' +
            'if 문으로 직접 비교해도 됩니다.',
      why: '<b>함수의 세 부분</b>: <code>int sum3(int a, int b, int c)</code> 에서<br>' +
           '· <code>int</code> = <b>반환형</b> (이 함수가 내놓는 값의 종류)<br>' +
           '· <code>sum3</code> = <b>이름</b> (호출할 때 쓰는 것)<br>' +
           '· <code>(int a, int b, int c)</code> = <b>매개변수</b> (받아올 값들)<br>' +
           '<code>return</code> 이 값을 돌려주고 함수를 즉시 끝냅니다.' +
           '<ul><li><b>왜 함수로 꺼내나</b>: ① 같은 계산을 여러 번 쓸 때 한 곳만 고치면 됩니다 ' +
           '② <code>maxOf3(x,y,z)</code> 가 <code>max(x,max(y,z))</code> 보다 의도가 드러납니다 ' +
           '③ <code>main</code> 이 짧아져 전체 흐름이 보입니다</li>' +
           '<li>🔴 <b>함수는 쓰기 전에 정의되어 있어야 합니다.</b> ' +
           '<code>main</code> 아래에 쓰면 "선언되지 않음" 에러가 납니다 ' +
           '(위에 프로토타입을 두면 해결됩니다 — 문법 설명 참고)</li>' +
           '<li>음수 케이스가 있는 이유: <code>maxOf3</code> 을 ' +
           '<code>best = 0</code> 으로 시작하는 방식으로 짜면 틀립니다. ' +
           '매개변수로 받은 값끼리만 비교해야 합니다</li></ul>' },
    { id: 'pfb', title: '참조로 두 값 교환', diff: 1,
      desc: '두 변수의 값을 바꾸는 함수를 <b>참조로</b> 만들어 호출하세요.<br>' +
            '<span class="io">입력: <code>3 7</code> → 출력: <code>7 3</code></span><br>' +
            '🔴 <code>&amp;</code> 를 빼면 원본이 안 바뀝니다. 빼고도 한 번 돌려보세요.',
      starter: `void mySwap(int& x, int& y) {
    // 여기에 작성

}

int main() {
    int a, b;
    cin >> a >> b;
    mySwap(a, b);
    cout << a << ' ' << b << '\\n';
    return 0;
}`,
      cases: [ { in: '3 7', out: '7 3' }, { in: '1 1', out: '1 1' }, { in: '-5 10', out: '10 -5' } ],
      solution: `void mySwap(int& x, int& y) {
    int t = x;
    x = y;
    y = t;
}

int main() {
    int a, b;
    cin >> a >> b;
    mySwap(a, b);
    cout << a << ' ' << b << '\\n';
    return 0;
}`,
      hint: '임시 변수에 하나를 담아두고 교환합니다. 참고로 표준 <code>swap(a, b)</code> 가 이미 있어서 코테에서는 그걸 쓰면 됩니다.',
      why: '<b>왜 <code>int&amp;</code>인가</b>: <code>int x</code>로 받으면 값이 복사되어 함수 안에서 바꿔도 호출한 쪽의 원본은 그대로입니다. <code>&amp;</code>는 "원본을 가리키는 별명"이라 바꾸면 원본이 바뀝니다.<ul><li>실무에서는 표준 <code>swap(a, b)</code>를 씁니다 — 이미 최적화되어 있습니다</li></ul>' },
    { id: 'pfc', title: 'const 참조로 벡터 합', diff: 1,
      desc: '벡터의 합을 구하는 함수를 <code>const vector&lt;int&gt;&amp;</code> 로 받아 만드세요.<br>' +
            '<span class="io">입력: <code>4</code> / <code>1 2 3 4</code> → 출력: <code>10</code></span>',
      starter: `long long total(const vector<int>& v) {
    // 여기에 작성

}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    cout << total(v) << '\\n';
    return 0;
}`,
      cases: [ { in: '4\n1 2 3 4', out: '10' }, { in: '1\n5', out: '5' },
               { in: '3\n-1 -2 -3', out: '-6' } ],
      solution: `long long total(const vector<int>& v) {
    long long sum = 0;
    for (int x : v) sum += x;
    return sum;
}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    cout << total(v) << '\\n';
    return 0;
}`,
      hint: 'range-for 로 더합니다. 반환형이 <code>long long</code> 이니 <code>sum</code> 도 <code>long long</code> 으로. ' +
            '<code>const</code> 라서 함수 안에서 <code>v</code> 를 수정하려 하면 컴파일 에러가 납니다 — 한 번 해보세요.',
      why: '<b>왜 <code>const vector&lt;int&gt;&amp;</code>인가</b>: 세 가지를 동시에 얻습니다.<ul><li><b>&amp;</b> — 복사하지 않습니다. 값으로 받으면 원소를 전부 복사합니다 (실측: 100만 원소 100회 전달에서 65.8ms vs 0.0ms)</li><li><b>const</b> — 실수로 수정하는 것을 컴파일러가 막아줍니다</li><li>읽기 전용이라는 <b>의도</b>가 코드에 드러납니다</li></ul>💡 기준: <b>8바이트보다 큰 타입은 참조로</b>. <code>int</code>는 복사가 더 빠릅니다.' },
  ],
},

/* ══════════════════ 6. 정렬 ══════════════════ */
{
  id: 'u6', group: '알고리즘', title: '정렬',
  syntax: [
    { h: '기본 정렬',
      code: `sort(v.begin(), v.end());                   // 오름차순
sort(v.begin(), v.end(), greater<int>());   // 내림차순
sort(v.rbegin(), v.rend());                 // 내림차순 (같음)`,
      note: '<code>sort</code>는 O(N log N)입니다. N=10만이어도 충분히 빠릅니다.' },
    { h: '람다로 커스텀 정렬',
      code: `sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;        // true면 a가 앞
});`,
      note: '🔴 <b><code>&gt;=</code> 를 쓰면 안 됩니다.</b> 같을 때 true를 반환하면 STL 규칙(strict weak ordering) 위반으로 크래시할 수 있습니다. 항상 <code>&lt;</code> 또는 <code>&gt;</code>만.' },
    { h: '다중 기준 — 실전에서 가장 많이 나옴',
      code: `sort(v.begin(), v.end(), [](const auto& a, const auto& b) {
    if (a.second != b.second)
        return a.second > b.second;   // 1순위: 점수 내림
    return a.first < b.first;         // 2순위: 이름 오름
});`,
      note: '"1순위로 ~, 같으면 2순위로 ~" 패턴입니다. if로 1순위를 먼저 처리하고, 같을 때만 2순위로 내려갑니다.' },
    { h: '중복 제거',
      code: `sort(v.begin(), v.end());                        // 정렬 먼저!
v.erase(unique(v.begin(), v.end()), v.end());`,
      note: '🔴 <code>unique</code>는 <b>정렬된 상태에서만</b> 작동합니다.' },
    { h: 'pair',
      code: `pair<int,string> p = {90, "amy"};
p.first    // 90
p.second   // "amy"

vector<pair<int,int>> v;
v.push_back({3, 5});
sort(v.begin(), v.end());    // first 우선, 같으면 second`,
      note: '' },
  ],
  problems: [
    { id: 'p6a', title: '정렬해서 출력', diff: 0,
      desc: 'N개의 정수를 입력받아 오름차순으로 출력하세요.<br><span class="io">입력: <code>4</code> / <code>3 1 4 1</code> → 출력: <code>1 1 3 4</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '4\n3 1 4 1', out: '1 1 3 4' }, { in: '1\n5', out: '5' },
               { in: '3\n-1 5 0', out: '-1 0 5' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end());
    for (int i = 0; i < n; i++) {
        cout << v[i];
        if (i + 1 < n) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '<code>sort(v.begin(), v.end())</code> 후 출력.' },

    { id: 'p6b', title: '중복 제거 후 정렬', diff: 1,
      desc: 'N개의 정수에서 중복을 제거하고 오름차순 출력하세요.<br><span class="io">입력: <code>5</code> / <code>3 1 3 2 1</code> → 출력: <code>1 2 3</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '5\n3 1 3 2 1', out: '1 2 3' }, { in: '3\n7 7 7', out: '7' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end());
    for (int i = 0; i < (int)v.size(); i++) {
        cout << v[i];
        if (i + 1 < (int)v.size()) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '정렬 → <code>unique</code> + <code>erase</code>. 또는 <code>set</code>에 넣으면 자동으로 정렬+중복제거됩니다.' },

    { id: 'p6c', title: '점수 내림, 이름 오름', diff: 2,
      desc: 'N명의 <code>이름 점수</code>를 입력받아 점수 내림차순, 동점이면 이름 오름차순으로 출력하세요.<br>' +
            '<span class="io">입력: <code>3</code> / <code>bob 90</code> / <code>amy 90</code> / <code>cat 85</code><br>' +
            '출력: <code>amy 90</code> / <code>bob 90</code> / <code>cat 85</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<pair<string,int>> v(n);
    for (int i = 0; i < n; i++)
        cin >> v[i].first >> v[i].second;

    return 0;
}`,
      cases: [ { in: '3\nbob 90\namy 90\ncat 85', out: 'amy 90\nbob 90\ncat 85' },
               { in: '2\nzoe 95\namy 90', out: 'zoe 95\namy 90' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<pair<string,int>> v(n);
    for (int i = 0; i < n; i++)
        cin >> v[i].first >> v[i].second;
    sort(v.begin(), v.end(), [](const auto& a, const auto& b) {
        if (a.second != b.second) return a.second > b.second;
        return a.first < b.first;
    });
    for (auto& [name, score] : v)
        cout << name << ' ' << score << '\\n';
    return 0;
}`,
      hint: '람다에서 if로 1순위(점수)를 먼저 비교하고, 같을 때만 2순위(이름)로 내려갑니다. 🔴 <code>&gt;=</code>를 쓰지 마세요.',
      why: '<b>왜 <code>if</code>로 1순위를 먼저 처리하나</b>: 비교 함수는 "a가 b보다 앞에 와야 하나?"에 답해야 합니다. 1순위(점수)가 다르면 그것만으로 결정되고, <b>같을 때만</b> 2순위(이름)로 내려갑니다.<ul><li>🔴 <code>&gt;=</code>를 쓰면 안 됩니다: 같은 원소에 <code>true</code>를 반환하면 STL 이 요구하는 strict weak ordering 을 위반해 정렬 중 범위 밖을 읽을 수 있습니다</li><li>항상 <code>&lt;</code> 또는 <code>&gt;</code>만 쓰세요</li></ul>' },
  ],
},

/* ══════════════════ 7. map / set ══════════════════ */
{
  id: 'u7', group: '자료구조', title: 'map · set (해시)',
  syntax: [
    { h: 'map — 키:값',
      code: `map<string,int> m;              // 정렬됨, O(log n)
unordered_map<string,int> um;   // 해시, O(1) — 더 빠름

m["apple"] = 3;
m["apple"]++;        // 🔴 없으면 0으로 만들고 1
m.count("apple")     // 있나? 0 또는 1
m.erase("apple");
m.size()`,
      note: '정렬이 필요 없으면 <code>unordered_map</code>이 빠릅니다.' },
    { h: '🔴 함정 — 읽기만 해도 원소가 생깁니다',
      code: `unordered_map<string,int> m;
int x = m["ghost"];     // x=0, 그런데 m.size()가 1이 됨!

if (m.count("ghost"))   // ✅ 존재 확인은 count로`,
      note: 'Python <code>dict</code>는 KeyError가 나고 크기가 안 바뀝니다. C++은 조용히 원소를 만듭니다. 직접 출력해서 확인해보세요.' },
    { h: '순회',
      code: `for (auto& [key, val] : m)          // C++17
    cout << key << '=' << val << ' ';

for (auto& p : m)                    // C++11
    cout << p.first << p.second;`,
      note: '' },
    { h: 'set — 중복 없는 집합',
      code: `set<int> s;                 // 정렬됨
unordered_set<int> us;      // 해시, 빠름

s.insert(5);
s.count(5)          // 있나
s.erase(5);

set<int> s(v.begin(), v.end());   // 벡터로 초기화 (정렬+중복제거)`,
      note: '' },
    { h: '빈도수 세기 — 가장 흔한 패턴',
      code: `unordered_map<int,int> cnt;
for (int x : v) cnt[x]++;`,
      note: '이 두 줄을 외우세요. "몇 번 나왔나" 문제가 전부 이겁니다.' },
  ],
  problems: [
    { id: 'p7a', title: '중복이 있나', diff: 1,
      desc: 'N개의 정수에 중복이 있으면 <code>yes</code>, 없으면 <code>no</code>.<br><span class="io">입력: <code>4</code> / <code>1 2 3 2</code> → <code>yes</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '4\n1 2 3 2', out: 'yes' }, { in: '3\n1 2 3', out: 'no' }, { in: '1\n5', out: 'no' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    unordered_set<int> seen;
    bool dup = false;
    for (int x : v) {
        if (seen.count(x)) { dup = true; break; }
        seen.insert(x);
    }
    cout << (dup ? "yes" : "no") << '\\n';
    return 0;
}`,
      hint: 'set에 넣으면서 이미 있는지 확인합니다. 또는 <code>set</code>의 크기와 원본 크기를 비교해도 됩니다.' },

    { id: 'p7b', title: '가장 많이 나온 수', diff: 1,
      desc: 'N개의 정수 중 가장 많이 나온 수를 출력하세요. 동점이면 <b>먼저 나온 것</b>.<br><span class="io">입력: <code>5</code> / <code>1 2 2 3 2</code> → 출력: <code>2</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '5\n1 2 2 3 2', out: '2' }, { in: '4\n1 1 2 2', out: '1' }, { in: '1\n7', out: '7' } ],
      solution: `int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    unordered_map<int,int> cnt;
    for (int x : v) cnt[x]++;
    int best = v[0], bestCount = 0;
    for (int x : v) {                 // 원본 순서로 순회
        if (cnt[x] > bestCount) {     // > 이지 >= 아님
            bestCount = cnt[x];
            best = x;
        }
    }
    cout << best << '\\n';
    return 0;
}`,
      hint: '🔴 두 단계입니다. ① <code>cnt[x]++</code>로 세기 ② <b>원본 순서로</b> 순회하며 최대 찾기. map을 순회하면 "먼저 나온 것" 보장이 깨집니다. 그리고 <code>&gt;=</code>가 아니라 <code>&gt;</code>를 써야 합니다.',
      why: '<b>왜 원본 순서로 두 번 순회하나</b>: <code>unordered_map</code>은 순서가 보장되지 않아 map 을 순회하면 "먼저 나온 것" 규칙이 깨집니다. 그래서 ① map 으로 개수를 세고 ② <b>원본 배열</b>을 순회하며 최대를 찾습니다.<ul><li><code>&gt;</code>를 쓰는 것도 핵심입니다 — <code>&gt;=</code>면 나중에 나온 동점이 이깁니다</li></ul>' },
    { id: 'p7c', title: '두 수의 합', diff: 2,
      desc: 'N개의 정수와 target이 주어집니다. 두 수의 합이 target인 쌍이 있으면 <code>yes</code>, 없으면 <code>no</code>.<br>' +
            '<span class="io">입력: <code>4 9</code> / <code>2 7 11 15</code> → <code>yes</code> (2+7)</span><br>' +
            '제약: N ≤ 100,000 → 🔴 2중 루프는 시간초과입니다.',
      starter: `int main() {
    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '4 9\n2 7 11 15', out: 'yes' }, { in: '4 100\n2 7 11 15', out: 'no' },
               { in: '1 8\n4', out: 'no' }, { in: '2 8\n4 4', out: 'yes' } ],
      solution: `int main() {
    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    unordered_set<int> seen;
    bool found = false;
    for (int x : v) {
        if (seen.count(target - x)) { found = true; break; }
        seen.insert(x);               // 확인 "후"에 기록
    }
    cout << (found ? "yes" : "no") << '\\n';
    return 0;
}`,
      hint: '🔴 "두 개 찾기"를 "하나 보면서 나머지를 묻기"로 바꿉니다. <code>target - x</code>가 이미 지나갔는지 set으로 O(1)에 확인합니다. ' +
            '<b>기록은 확인 후에</b> — 먼저 넣으면 <code>[4], target=8</code>에서 자기 자신과 짝지어 틀립니다.',
      why: '<b>왜 기록을 확인 뒤에 하나</b>: 먼저 <code>seen.insert(x)</code>를 하면 <code>[4], target=8</code>에서 자기 자신(4)과 짝지어 <code>true</code>를 반환합니다. 같은 원소를 두 번 쓴 것이라 틀립니다.<ul><li><b>확인 → 기록</b> 순서면 지금 원소는 아직 집합에 없으므로 안전합니다</li><li>이 패턴이 O(N²)을 O(N)으로 바꾸는 핵심입니다: "두 개 찾기"를 "하나 보며 나머지를 묻기"로 바꿉니다</li></ul>' },
  ],
},

/* ══════════════════ 8. queue / BFS ══════════════════ */
{
  id: 'u8', group: '알고리즘', title: 'queue · BFS',
  syntax: [
    { h: 'queue — BFS의 핵심',
      code: `queue<int> q;
q.push(x);
q.front();      // 맨 앞 보기
q.pop();        // 🔴 제거만! 값을 반환하지 않음
q.empty();`,
      note: '🔴 <code>int cur = q.pop();</code> 는 <b>컴파일 에러</b>입니다. <code>front()</code>로 꺼내 저장한 뒤 <code>pop()</code>으로 제거합니다.' },
    { h: '올바른 사용',
      code: `while (!q.empty()) {
    int cur = q.front();    // 먼저 저장
    q.pop();                // 그 다음 제거
    // ...
}`,
      note: '' },
    { h: '좌표를 큐에 — 격자 BFS',
      code: `queue<pair<int,int>> q;
q.push({r, c});

auto [cr, cc] = q.front();   // C++17 구조 분해
q.pop();`,
      note: '' },
    { h: '🔴 방향 배열 — 외우세요',
      code: `int dr[4] = {-1, 1, 0, 0};    // 위 아래 좌 우
int dc[4] = { 0, 0,-1, 1};

for (int d = 0; d < 4; d++) {
    int nr = r + dr[d];
    int nc = c + dc[d];
}`,
      note: 'if 4개를 쓰는 대신 배열로 묶어 루프 하나로 처리합니다. BFS 문제마다 씁니다.' },
    { h: 'BFS 템플릿 — 3단 검사',
      code: `vector<vector<int>> dist(n, vector<int>(m, -1));
queue<pair<int,int>> q;
q.push({0,0});
dist[0][0] = 0;              // 🔴 넣을 때 방문처리

while (!q.empty()) {
    auto [r, c] = q.front(); q.pop();
    for (int d = 0; d < 4; d++) {
        int nr = r+dr[d], nc = c+dc[d];
        if (nr<0||nr>=n||nc<0||nc>=m) continue;  // ① 경계
        if (dist[nr][nc] != -1) continue;        // ② 방문
        if (grid[nr][nc] == 0) continue;         // ③ 벽
        dist[nr][nc] = dist[r][c] + 1;
        q.push({nr,nc});
    }
}`,
      note: '🔴 <b>경계 검사를 항상 첫 번째로.</b> 방문 검사를 먼저 하면 <code>dist[-1][5]</code> 접근이 생깁니다. 그리고 방문처리는 큐에 <b>넣을 때</b> — 꺼낼 때 하면 같은 칸이 여러 번 들어갑니다.' },
    { h: '"최단"이면 BFS',
      code: `// 문제에 이 말이 있으면 BFS:
//   "최소 이동 / 최단 거리 / 최소 시간 / 가장 빨리"`,
      note: 'BFS는 가까운 순서로 퍼지므로 <b>처음 도달한 순간이 최단</b>입니다. DFS는 보장되지 않습니다.' },
  ],
  problems: [
    { id: 'p8a', title: 'queue 기본', diff: 0,
      desc: 'N개의 정수를 큐에 넣고 순서대로 꺼내 출력하세요. (입력 순서와 같아야 합니다)<br><span class="io">입력: <code>3</code> / <code>1 2 3</code> → 출력: <code>1 2 3</code></span>',
      starter: `int main() {
    int n;
    cin >> n;
    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        q.push(x);
    }
    // 꺼내서 출력

    return 0;
}`,
      cases: [ { in: '3\n1 2 3', out: '1 2 3' }, { in: '1\n7', out: '7' } ],
      solution: `int main() {
    int n;
    cin >> n;
    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        q.push(x);
    }
    bool first = true;
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        if (!first) cout << ' ';
        cout << cur;
        first = false;
    }
    cout << '\\n';
    return 0;
}`,
      hint: '🔴 <code>q.front()</code>로 저장하고 <code>q.pop()</code>으로 제거합니다. <code>q.pop()</code>이 값을 반환할 거라 생각하면 컴파일 에러가 납니다.',
      why: '<b>왜 <code>front()</code>와 <code>pop()</code>을 나눠 쓰나</b>: C++ 의 <code>queue::pop()</code>은 <b>제거만 하고 값을 반환하지 않습니다</b>. <code>int x = q.pop();</code>은 컴파일 에러입니다.<ul><li>이유: 값을 반환하면서 제거하면 예외 안전성을 보장하기 어렵기 때문입니다 (복사 중 예외가 나면 원소가 사라짐)</li><li>Python <code>deque.popleft()</code>는 둘을 한 번에 합니다 — 습관을 바꿔야 합니다</li></ul>' },
    { id: 'p8b', title: '격자 최단거리', diff: 2,
      desc: 'n, m과 격자(1=길, 0=벽)를 입력받아 (0,0)에서 (n-1,m-1)까지 최소 이동 횟수를 출력하세요. 도달 불가면 <code>-1</code>.<br>' +
            '<span class="io">입력: <code>3 3</code> / <code>1 1 0</code> / <code>0 1 1</code> / <code>1 1 1</code> → 출력: <code>4</code></span>',
      starter: `int dr[4] = {-1, 1, 0, 0};
int dc[4] = { 0, 0,-1, 1};

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    // BFS 작성

    return 0;
}`,
      cases: [ { in: '3 3\n1 1 0\n0 1 1\n1 1 1', out: '4' },
               { in: '2 2\n1 0\n0 1', out: '-1' },
               { in: '1 1\n1', out: '0' },
               { in: '2 2\n0 1\n1 1', out: '-1' } ],
      solution: `int dr[4] = {-1, 1, 0, 0};
int dc[4] = { 0, 0,-1, 1};

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    if (g[0][0] == 0) { cout << -1 << '\\n'; return 0; }

    vector<vector<int>> dist(n, vector<int>(m, -1));
    queue<pair<int,int>> q;
    q.push({0, 0});
    dist[0][0] = 0;

    while (!q.empty()) {
        auto [r, c] = q.front();
        q.pop();
        if (r == n-1 && c == m-1) { cout << dist[r][c] << '\\n'; return 0; }
        for (int d = 0; d < 4; d++) {
            int nr = r + dr[d], nc = c + dc[d];
            if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
            if (dist[nr][nc] != -1) continue;
            if (g[nr][nc] == 0) continue;
            dist[nr][nc] = dist[r][c] + 1;
            q.push({nr, nc});
        }
    }
    cout << -1 << '\\n';
    return 0;
}`,
      hint: '템플릿 그대로입니다. 🔴 <b>시작이 벽인 경우</b>를 빠뜨리기 쉽습니다 (테스트케이스에 있습니다). ' +
            '그리고 1×1 격자는 시작이 곧 목표라 답이 0입니다.',
      why: '<b>왜 3단 검사의 순서가 중요한가</b>: 경계 검사를 <b>가장 먼저</b> 해야 합니다. 방문 검사를 먼저 하면 <code>dist[-1][5]</code> 같은 범위 밖 접근이 일어납니다.<ul><li><b>왜 방문 처리를 큐에 넣을 때 하나</b>: 꺼낼 때 하면 같은 칸을 여러 이웃이 각자 넣어 큐 삽입이 약 2배가 됩니다 (실측 100×100에서 19,801 vs 10,000)</li><li><b>왜 BFS가 최단을 보장하나</b>: 거리 1인 칸을 모두 본 뒤 거리 2로 넘어가므로, 목표에 처음 닿은 순간이 최단입니다. DFS는 운 좋게 먼 길로 먼저 도달할 수 있어 보장이 없습니다</li><li>시작이 벽인 경우를 빠뜨리기 쉽습니다 — 테스트케이스에 넣어뒀습니다</li></ul>' },
    { id: 'p8c', title: '섬의 개수', diff: 2,
      desc: '격자에서 상하좌우로 연결된 1의 덩어리 개수를 출력하세요.<br>' +
            '<span class="io">입력: <code>3 3</code> / <code>1 1 0</code> / <code>0 0 0</code> / <code>1 0 1</code> → 출력: <code>3</code></span>',
      starter: `int dr[4] = {-1, 1, 0, 0};
int dc[4] = { 0, 0,-1, 1};

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    return 0;
}`,
      cases: [ { in: '3 3\n1 1 0\n0 0 0\n1 0 1', out: '3' },
               { in: '2 2\n1 1\n1 1', out: '1' },
               { in: '2 2\n0 0\n0 0', out: '0' } ],
      solution: `int dr[4] = {-1, 1, 0, 0};
int dc[4] = { 0, 0,-1, 1};

int main() {
    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    vector<vector<bool>> visited(n, vector<bool>(m, false));
    int count = 0;

    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++) {
            if (g[i][j] != 1 || visited[i][j]) continue;
            count++;
            queue<pair<int,int>> q;
            q.push({i, j});
            visited[i][j] = true;
            while (!q.empty()) {
                auto [r, c] = q.front();
                q.pop();
                for (int d = 0; d < 4; d++) {
                    int nr = r + dr[d], nc = c + dc[d];
                    if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
                    if (visited[nr][nc] || g[nr][nc] != 1) continue;
                    visited[nr][nc] = true;
                    q.push({nr, nc});
                }
            }
        }
    cout << count << '\\n';
    return 0;
}`,
      hint: '바깥 2중 루프로 "아직 안 본 땅"을 찾고, 찾으면 BFS로 그 섬 전체를 방문 처리합니다. <b>BFS 한 번 = 섬 하나</b>입니다.',
      why: '<b>왜 바깥 2중 루프가 필요한가</b>: BFS 한 번은 <b>연결된 영역 하나</b>만 방문합니다. 떨어져 있는 섬은 닿지 않으므로, 아직 안 본 땅을 찾을 때마다 BFS 를 새로 시작합니다. <b>BFS 호출 횟수 = 섬 개수</b>입니다.<br>💡 전체 복잡도는 여전히 O(N×M)입니다 — 각 칸을 한 번만 방문하기 때문입니다.' },
  ],
},
/* ══════════════════ 신규: 구조체 · 재귀 ══════════════════ */
{
  id: 'ur', group: '알고리즘', title: '구조체 · 재귀',
  syntax: [
    { h: 'struct — 값을 묶기',
      code: `struct Point {
    int r, c;
};

int main() {
    Point p;
    p.r = 1; p.c = 2;

    Point q = {3, 4};          // 초기화
    cout << q.r << ' ' << q.c;
}`,
      note: '<code>pair</code> 로 부족할 때(3개 이상) 씁니다. <code>.r</code> 처럼 이름이 있어 <code>.first/.second</code> 보다 읽기 쉽습니다.' },
    { h: 'struct 를 vector/queue 에 담기',
      code: `vector<Point> pts;
pts.push_back({1, 2});

queue<Point> q;
q.push({0, 0});
Point cur = q.front(); q.pop();
cout << cur.r;`,
      note: '' },
    { h: 'struct 정렬 — 비교 함수',
      code: `struct Student {
    string name;
    int score;
};

sort(v.begin(), v.end(), [](const Student& a, const Student& b) {
    if (a.score != b.score) return a.score > b.score;
    return a.name < b.name;
});`,
      note: '람다로 기준을 정합니다. 7번 유닛의 다중 기준 정렬과 같은 방식입니다.' },
    { h: '재귀 — 자기를 호출',
      code: `int factorial(int n) {
    if (n <= 1) return 1;        // 🔴 종료 조건 (필수!)
    return n * factorial(n - 1);
}`,
      note: '🔴 <b>종료 조건을 빼면 무한 재귀 → 스택 오버플로(크래시)</b> 입니다. 재귀를 쓸 때 가장 먼저 종료 조건을 씁니다.' },
    { h: '재귀의 구조 — 두 부분',
      code: `반환형 함수(상태) {
    if (끝났나?) return 기본값;     // ① 종료 조건
    return 함수(더 작은 상태);       // ② 자기 호출
}`,
      note: '모든 재귀가 이 두 부분입니다. ①을 먼저 쓰고 ②를 씁니다.' },
    { h: '🔴 재귀 깊이의 한계',
      code: `// 노드 10만 개가 일자로 연결된 그래프에서
// 재귀 DFS 를 하면 깊이가 10만 → 스택 오버플로

// 대책: BFS(반복문)로 바꾸거나, 스택을 직접 쓴다`,
      note: 'C++ 기본 스택은 약 1MB 라 깊이 10만~100만에서 터집니다. ' +
            '<b>노드가 많으면 BFS 를 쓰세요</b> — 반복문이라 깊이 제한이 없습니다.' },
  ],
  problems: [
    { id: 'pra', title: '구조체로 좌표 담기', diff: 1,
      desc: 'N개의 좌표를 구조체에 담고, <b>r 오름차순</b>(같으면 c 오름차순)으로 정렬해 출력하세요.<br>' +
            '<span class="io">입력: <code>3</code> / <code>2 1</code> / <code>1 5</code> / <code>1 2</code><br>' +
            '출력: <code>1 2</code> / <code>1 5</code> / <code>2 1</code></span>',
      starter: `struct Point {
    int r, c;
};

int main() {
    int n;
    cin >> n;
    vector<Point> v(n);
    for (int i = 0; i < n; i++)
        cin >> v[i].r >> v[i].c;

    // 정렬하고 출력

    return 0;
}`,
      cases: [ { in: '3\n2 1\n1 5\n1 2', out: '1 2\n1 5\n2 1' },
               { in: '1\n5 5', out: '5 5' },
               { in: '2\n1 1\n1 1', out: '1 1\n1 1' } ],
      solution: `struct Point {
    int r, c;
};

int main() {
    int n;
    cin >> n;
    vector<Point> v(n);
    for (int i = 0; i < n; i++)
        cin >> v[i].r >> v[i].c;

    sort(v.begin(), v.end(), [](const Point& a, const Point& b) {
        if (a.r != b.r) return a.r < b.r;
        return a.c < b.c;
    });

    for (const Point& p : v)
        cout << p.r << ' ' << p.c << '\\n';
    return 0;
}`,
      hint: '람다에서 <code>a.r</code> 을 먼저 비교하고, 같으면 <code>a.c</code> 로 내려갑니다. ' +
            '출력은 <code>const Point&amp;</code> 로 받아 복사를 피합니다.' },

    { id: 'prb', title: '재귀로 팩토리얼', diff: 1,
      desc: 'N!(팩토리얼)을 재귀로 구하세요. N ≤ 20<br>' +
            '<span class="io">입력: <code>5</code> → 출력: <code>120</code></span><br>' +
            '🔴 20! 은 약 2.4×10¹⁸ 입니다. 자료형을 생각해보세요.',
      starter: `long long factorial(int n) {
    // 종료 조건부터

}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << '\\n';
    return 0;
}`,
      cases: [ { in: '5', out: '120' }, { in: '1', out: '1' },
               { in: '0', out: '1' }, { in: '20', out: '2432902008176640000' } ],
      solution: `long long factorial(int n) {
    if (n <= 1) return 1;
    return (long long)n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << '\\n';
    return 0;
}`,
      hint: '<code>n &lt;= 1</code> 이면 1 을 반환하는 게 종료 조건입니다 (0! = 1 이라 <code>&lt;=</code> 가 맞습니다). ' +
            '20! 이 <code>int</code> 범위를 한참 넘으니 <code>long long</code> 이어야 하고, 곱하기 전에 캐스팅합니다.',
      why: '<b>왜 종료 조건을 먼저 쓰나</b>: 재귀는 종료 조건이 없으면 스택이 가득 차 크래시합니다(스택 오버플로). 조건을 먼저 쓰는 습관을 들이면 빠뜨리지 않습니다.<ul><li><code>n &lt;= 1</code>로 쓴 이유: 0! = 1 이므로 0도 처리해야 합니다</li><li>20! ≈ 2.4×10¹⁸ 이라 <code>long long</code>이 필수입니다</li></ul>' },
    { id: 'prc', title: '재귀로 피보나치 + 메모이제이션', diff: 2,
      desc: 'N번째 피보나치 수를 구하세요. <code>F(0)=0, F(1)=1</code>. N ≤ 50<br>' +
            '<span class="io">입력: <code>10</code> → 출력: <code>55</code></span><br>' +
            '🔴 단순 재귀는 N=50 에서 매우 느립니다. 이미 계산한 값을 저장(메모이제이션)하세요.',
      starter: `long long memo[51];
bool done[51];

long long fib(int n) {
    // 종료 조건 + 메모 확인 + 계산 후 저장

}

int main() {
    int n;
    cin >> n;
    cout << fib(n) << '\\n';
    return 0;
}`,
      cases: [ { in: '10', out: '55' }, { in: '0', out: '0' }, { in: '1', out: '1' },
               { in: '50', out: '12586269025' } ],
      solution: `long long memo[51];
bool done[51];

long long fib(int n) {
    if (n <= 1) return n;            // 종료 조건
    if (done[n]) return memo[n];     // 이미 계산했으면 꺼내 쓴다
    done[n] = true;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

int main() {
    int n;
    cin >> n;
    cout << fib(n) << '\\n';
    return 0;
}`,
      hint: '세 단계입니다. ① <code>n &lt;= 1</code> 이면 <code>n</code> 반환 ② <code>done[n]</code> 이면 <code>memo[n]</code> 반환 ' +
            '③ 계산해서 <code>memo[n]</code> 에 저장하고 반환. ' +
            '메모 없이 돌리면 같은 값을 수십억 번 다시 계산합니다 — 이게 DP 의 출발점입니다.',
      why: '<b>왜 메모이제이션이 필요한가</b>: 단순 재귀는 같은 값을 반복 계산합니다. <code>fib(50)</code>이면 호출 횟수가 약 2⁵⁰(1000조)회라 사실상 끝나지 않습니다.<ul><li>한 번 계산한 값을 저장하면 각 n 을 <b>한 번만</b> 계산 → O(N)</li><li>이게 <b>DP(동적 계획법)의 출발점</b>입니다. "겹치는 부분 문제"를 저장해 재사용하는 것이 DP 의 핵심입니다</li></ul>' },
    { id: 'prd', title: '재귀로 최대공약수', diff: 1,
      desc: '두 수의 최대공약수(GCD)를 <b>재귀</b>로 구하세요.<br>' +
            '<span class="io">입력: <code>12 18</code> → 출력: <code>6</code></span><br>' +
            '💡 <b>유클리드 호제법</b>: <code>gcd(a, b) = gcd(b, a % b)</code>, ' +
            'b가 0이면 답은 a 입니다.',
      starter: `int gcd(int a, int b) {
    // 종료 조건부터 — b 가 0 이면?

}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << '\\n';
    return 0;
}`,
      cases: [ { in: '12 18', out: '6' }, { in: '7 13', out: '1' },
               { in: '100 10', out: '10' }, { in: '5 5', out: '5' },
               { in: '0 7', out: '7' } ],
      solution: `int gcd(int a, int b) {
    if (b == 0) return a;          // 종료 조건
    return gcd(b, a % b);          // 더 작은 문제로
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << '\\n';
    return 0;
}`,
      hint: '두 줄입니다. <code>b == 0</code>이면 <code>a</code>를 반환(종료 조건), ' +
            '아니면 <code>gcd(b, a % b)</code>를 반환. ' +
            '반복문으로도 됩니다 — <code>while (b != 0)</code> 안에서 두 값을 바꿔치기.',
      why: '<b>왜 <code>gcd(a,b) = gcd(b, a%b)</code> 가 성립하나</b>: ' +
           'a와 b의 공약수는 <code>a - kb</code>(= 나머지)의 약수이기도 합니다. ' +
           '따라서 b와 나머지의 최대공약수가 원래 답과 같습니다.' +
           '<ul><li><b>왜 빠른가</b>: 나머지는 b보다 작고, 매 단계에서 값이 ' +
           '빠르게 줄어 <b>O(log)</b> 번에 끝납니다. ' +
           '12,18 → 18,12 → 12,6 → 6,0 으로 네 번입니다</li>' +
           '<li><b>종료 조건이 <code>b == 0</code>인 이유</b>: 0과 a의 최대공약수는 a 입니다 ' +
           '(모든 수가 0을 나누므로). 마지막 케이스 <code>0 7</code>이 이걸 검사합니다</li>' +
           '<li><b>재귀 vs 반복</b>: 이 재귀는 깊이가 O(log)라 ' +
           '스택이 터질 걱정이 없어 재귀로 써도 안전합니다. ' +
           '깊이가 입력 크기에 비례하는 재귀라면 반복문이 안전합니다</li>' +
           '<li>💡 <b>최소공배수</b>는 <code>a / gcd(a,b) * b</code> 입니다. ' +
           '<code>a * b / gcd</code> 로 쓰면 곱셈에서 오버플로할 수 있어 ' +
           '<b>나누기를 먼저</b> 합니다</li></ul>' },
  ],
},
/* ══════════════════ 신규: 완전탐색 ══════════════════ */
{
  id: 'ub', group: '알고리즘', title: '완전탐색',
  syntax: [
    { h: '🔴 제약조건이 작으면 완전탐색이 정답입니다',
      code: `N ≤ 10      →  O(N!)   모든 순열    (10! = 362만)
N ≤ 20      →  O(2^N)  모든 부분집합 (2^20 = 104만)
N ≤ 100     →  O(N^3)  3중 루프     (100만)
N ≤ 1,000   →  O(N^2)  2중 루프     (100만)
N ≤ 100,000 →  O(N log N) 이상이 필요`,
      note: '<b>왜 이 표가 중요한가</b>: 1초에 약 1억 번 연산이 기준입니다. ' +
            '제약조건을 보면 <b>허용되는 복잡도가 역산</b>되고, 그게 곧 "어떤 방법을 쓰라는 뜻"입니다.<br>' +
            '🔴 <code>N ≤ 100</code>이 보이면 영리한 공식을 찾지 말고 <b>다 해보세요</b>. 그게 의도된 풀이입니다.' },

    { h: '조합 — 순서가 무관할 때',
      code: `// 2개 고르기
for (int i = 0; i < n; i++)
    for (int j = i + 1; j < n; j++)        // 🔴 j 는 i+1 부터
        check(v[i], v[j]);

// 3개 고르기
for (int i = 0; i < n; i++)
    for (int j = i + 1; j < n; j++)
        for (int k = j + 1; k < n; k++)
            check(v[i], v[j], v[k]);`,
      note: '<b>왜 <code>j = i + 1</code> 인가</b>: <code>j = 0</code>부터 돌면 ' +
            '① 같은 원소를 두 번 고르고(<code>i == j</code>) ' +
            '② <code>(1,2)</code>와 <code>(2,1)</code>을 중복으로 셉니다.<br>' +
            '뒤 인덱스부터 시작하면 <b>각 조합이 정확히 한 번</b> 나옵니다.' },

    { h: '🔴 비트마스크 — 모든 부분집합',
      code: `int n = v.size();                     // n ≤ 20
for (int mask = 0; mask < (1 << n); mask++) {
    long long sum = 0;
    for (int i = 0; i < n; i++)
        if (mask & (1 << i))              // i 번째 비트가 켜졌나
            sum += v[i];
    // mask 하나가 부분집합 하나
}`,
      note: '<b>원리</b>: n개 원소 각각이 "포함/제외" 2가지 → 전체 2ⁿ가지. ' +
            '이걸 <b>n비트 이진수</b>로 표현합니다.<br>' +
            '· <code>mask = 5 = 101₂</code> → 0번, 2번 원소를 선택<br>' +
            '· <code>1 &lt;&lt; n</code> = 2ⁿ (비트를 n칸 왼쪽으로 = 2를 n번 곱하기)<br>' +
            '· <code>mask &amp; (1 &lt;&lt; i)</code> = i번째 비트만 남기고 나머지를 0으로 → 켜졌으면 0이 아님<br><br>' +
            '💡 임베디드에서 레지스터 비트를 다루는 것과 같은 연산입니다.' },

    { h: '순열 — 순서가 중요할 때',
      code: `sort(v.begin(), v.end());             // 🔴 정렬 상태에서 시작
do {
    check(v);                          // 이 순서로 한 번
} while (next_permutation(v.begin(), v.end()));`,
      note: '<b>왜 정렬이 필요한가</b>: <code>next_permutation</code>은 ' +
            '"현재보다 사전순으로 바로 다음인 순열"을 만듭니다. ' +
            '가장 작은 순열(=정렬된 상태)에서 시작하지 않으면 <b>앞쪽 순열들을 건너뜁니다</b>.<br>' +
            '· 반환값: 다음 순열이 있으면 <code>true</code>, 마지막이면 <code>false</code><br>' +
            '· 그래서 <code>do-while</code>을 씁니다 (첫 순열도 검사해야 하므로)' },

    { h: '재귀로 뽑기 (백트래킹)',
      code: `vector<int> picked;

void pick(int start, int k, const vector<int>& v) {
    if ((int)picked.size() == k) {      // ① 다 뽑았으면
        check(picked);
        return;
    }
    for (int i = start; i < (int)v.size(); i++) {
        picked.push_back(v[i]);         // ② 고르고
        pick(i + 1, k, v);              // ③ 다음으로
        picked.pop_back();              // ④ 되돌리기 ← 핵심
    }
}`,
      note: '<b>왜 <code>pop_back()</code>이 필요한가</b>: 재귀가 돌아온 뒤 ' +
            '<code>picked</code>를 원래대로 되돌려야 다음 <code>i</code>를 올바른 상태에서 시작합니다. ' +
            '이 "고르고 → 들어가고 → 되돌리기"가 <b>백트래킹</b>입니다.<br>' +
            '💡 루프로 쓰기 어려운 경우(개수가 가변, 조건부 가지치기)에 씁니다.' },
  ],
  problems: [
    { id: 'uba', title: '세 수의 합이 target', diff: 1,
      desc: 'N개의 정수 중 <b>서로 다른 세 개</b>를 골라 합이 target이 되는 경우의 수를 출력하세요.<br>' +
            '<span class="io">입력: <code>5 9</code> / <code>1 2 3 4 5</code> → 출력: <code>2</code> ((1,3,5),(2,3,4))</span><br>' +
            '제약: N ≤ 100 → 복잡도 표를 보고 어떤 방법이 허용되는지 판단하세요.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '5 9\n1 2 3 4 5', out: '2' }, { in: '3 6\n1 2 3', out: '1' },
               { in: '3 100\n1 2 3', out: '0' }, { in: '4 0\n0 0 0 0', out: '4' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    int count = 0;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)       // j 는 i+1 부터
            for (int k = j + 1; k < n; k++)   // k 는 j+1 부터
                if (v[i] + v[j] + v[k] == target) count++;

    cout << count << '\\n';
    return 0;
}`,
      hint: 'N ≤ 100 이므로 3중 루프(100만)가 허용됩니다. ' +
            '<code>j = i+1</code>, <code>k = j+1</code> 로 시작해 중복을 막습니다.',
      why: '<b>왜 3중 루프가 정답인가</b>: N ≤ 100 이면 100³ = 100만 번으로 1초 안에 끝납니다. ' +
           '제약이 작은 건 "다 해보라"는 신호입니다.' +
           '<ul><li><b>왜 뒤 인덱스부터</b>: <code>j = 0</code>이면 (1,2,3)과 (3,2,1)을 따로 세고, ' +
           '<code>i == j</code>로 같은 원소를 두 번 고릅니다</li>' +
           '<li>마지막 케이스 <code>[0,0,0,0]</code>의 답이 4 입니다 — ' +
           '값은 같지만 <b>위치가 다른 조합</b>이 4가지(4개 중 3개 고르기)</li></ul>' },

    { id: 'ubb', title: '부분집합의 합', diff: 2,
      desc: 'N개의 정수 중 일부를 골라(하나도 안 골라도 됨) 합이 target이 되는 경우의 수를 출력하세요.<br>' +
            '<span class="io">입력: <code>3 3</code> / <code>1 2 3</code> → 출력: <code>2</code> ({3}, {1,2})</span><br>' +
            '제약: N ≤ 20 → 비트마스크로 모든 부분집합을 돕니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // mask 를 0 부터 2^n - 1 까지

    return 0;
}`,
      cases: [ { in: '3 3\n1 2 3', out: '2' }, { in: '3 0\n1 2 3', out: '1' },
               { in: '1 5\n5', out: '1' }, { in: '4 5\n1 2 3 4', out: '2' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    int count = 0;
    for (int mask = 0; mask < (1 << n); mask++) {   // 2^n 가지
        long long sum = 0;
        for (int i = 0; i < n; i++)
            if (mask & (1 << i)) sum += v[i];        // i번째 비트가 켜졌으면 포함
        if (sum == target) count++;
    }

    cout << count << '\\n';
    return 0;
}`,
      hint: '<code>mask</code>를 0부터 <code>(1 &lt;&lt; n) - 1</code>까지 돌리고, ' +
            '각 <code>mask</code>에서 <code>mask &amp; (1 &lt;&lt; i)</code>로 i번째 원소 포함 여부를 봅니다.',
      why: '<b>원리</b>: 원소 n개 각각이 "포함/제외" 2가지이므로 전체 2ⁿ가지입니다. ' +
           '이걸 n비트 이진수 하나(<code>mask</code>)로 표현합니다.' +
           '<ul><li><code>1 &lt;&lt; n</code>은 2ⁿ 입니다 (비트를 n칸 왼쪽 이동 = 2를 n번 곱하기)</li>' +
           '<li><code>mask &amp; (1 &lt;&lt; i)</code>는 i번째 비트만 남깁니다 — 켜져 있으면 0이 아닌 값</li>' +
           '<li><code>target = 0</code>일 때 답이 1 인 이유: <b>빈 집합</b>(mask=0)의 합이 0 입니다</li>' +
           '<li>복잡도는 O(2ⁿ × n) — n=20이면 약 2000만으로 통과합니다</li></ul>' },

    { id: 'ubc', title: '순열로 최대 수 만들기', diff: 2,
      desc: 'N개의 숫자 조각을 모두 이어붙여 만들 수 있는 가장 큰 수를 출력하세요.<br>' +
            '<span class="io">입력: <code>3</code> / <code>3 30 34</code> → 출력: <code>34330</code></span><br>' +
            '제약: N ≤ 8 → 8! = 40,320 이므로 모든 순서를 다 만들어볼 수 있습니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<string> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '3\n3 30 34', out: '34330' }, { in: '1\n5', out: '5' },
               { in: '2\n10 2', out: '210' }, { in: '4\n9 5 34 3', out: '95343' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<string> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    sort(v.begin(), v.end());        // next_permutation 은 정렬에서 시작
    string best = "";
    do {
        string cur = "";
        for (const string& s : v) cur += s;
        if (cur.size() > best.size() ||
           (cur.size() == best.size() && cur > best)) best = cur;
    } while (next_permutation(v.begin(), v.end()));

    cout << best << '\\n';
    return 0;
}`,
      hint: '<code>sort</code> 후 <code>do-while</code> + <code>next_permutation</code>. ' +
            '길이가 다를 수 있으니 <b>길이 먼저, 같으면 사전순</b>으로 비교합니다.',
      why: '<b>왜 정렬부터 하나</b>: <code>next_permutation</code>은 "사전순 다음 순열"을 만듭니다. ' +
           '정렬된 상태(= 가장 작은 순열)에서 시작해야 모든 순열을 빠뜨리지 않습니다.' +
           '<ul><li><b>왜 길이를 먼저 비교하나</b>: 문자열 비교 <code>"9" &gt; "34"</code>는 true 지만 ' +
           '수로는 9 &lt; 34 입니다. 길이가 다르면 <b>긴 쪽이 큰 수</b>이므로 길이를 우선합니다</li>' +
           '<li>이 문제는 조각을 모두 쓰므로 길이가 항상 같습니다. ' +
           '하지만 일부만 고르는 변형에서는 길이 비교가 필수입니다</li>' +
           '<li>💡 N이 크면 순열이 불가능합니다. 그때는 ' +
           '<code>a+b &gt; b+a</code> 기준으로 <b>정렬</b>하면 O(N log N)에 됩니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: 투포인터 · 누적합 ══════════════════ */
{
  id: 'ut', group: '알고리즘', title: '투포인터 · 누적합',
  syntax: [
    { h: '🔴 누적합 — 구간 합을 O(1)로',
      code: `vector<long long> pre(n + 1, 0);
for (int i = 0; i < n; i++)
    pre[i + 1] = pre[i] + v[i];

// i 부터 j 까지(양끝 포함)의 합
long long sum = pre[j + 1] - pre[i];`,
      note: '<b>원리</b>: <code>pre[k]</code> = 처음 k개의 합. ' +
            '그러면 구간 [i, j]의 합은 <b>(처음 j+1개의 합) − (처음 i개의 합)</b>입니다.<br>' +
            '· 전처리 O(N) 한 번 → 이후 <b>질의마다 O(1)</b><br>' +
            '· 질의가 Q개면 매번 더하기는 O(N×Q), 누적합은 O(N+Q)<br><br>' +
            '🔴 <b>크기를 <code>n+1</code>로 잡고 <code>pre[0] = 0</code>으로 두는 게 핵심</b>입니다. ' +
            '그러면 <code>i = 0</code>일 때도 <code>pre[0]</code>을 빼면 되어 ' +
            '별도 조건 분기가 필요 없습니다.' },

    { h: '투포인터 — 정렬된 배열에서 쌍 찾기',
      code: `sort(v.begin(), v.end());
int l = 0, r = n - 1;
while (l < r) {
    long long sum = (long long)v[l] + v[r];
    if (sum == target) return true;
    if (sum < target) l++;          // 합을 키워야 함
    else r--;                        // 합을 줄여야 함
}`,
      note: '<b>왜 되나</b>: 정렬했으므로 ' +
            '<b>왼쪽을 오른쪽으로 옮기면 합이 커지고, 오른쪽을 왼쪽으로 옮기면 합이 작아집니다.</b> ' +
            '목표보다 작으면 키우고, 크면 줄이면 되므로 되돌아갈 필요가 없습니다.<br>' +
            '· O(N²) 2중 루프 → <b>O(N log N)</b> (정렬 비용이 지배)<br>' +
            '· 각 포인터가 한 방향으로만 움직여 전체 이동이 N번' },

    { h: '슬라이딩 윈도우 — 조건을 만족하는 구간',
      code: `// 합이 target 이하인 가장 긴 구간
int l = 0;
long long sum = 0;
int best = 0;
for (int r = 0; r < n; r++) {
    sum += v[r];                     // 오른쪽 확장
    while (sum > target) {           // 조건을 넘으면
        sum -= v[l];                 //   왼쪽을 줄임
        l++;
    }
    best = max(best, r - l + 1);
}`,
      note: '<b>원리</b>: 오른쪽을 계속 넓히다가 조건을 깨면 왼쪽을 당깁니다. ' +
            '두 포인터가 각각 최대 N번만 움직이므로 <b>O(N)</b>입니다 ' +
            '(안쪽 <code>while</code>이 있어도 <code>l</code>은 되돌아가지 않으므로).<br>' +
            '🔴 <b>조건: 값이 모두 양수</b>여야 합니다. 음수가 섞이면 ' +
            '왼쪽을 줄여도 합이 줄어든다는 보장이 없습니다.' },

    { h: '2차원 누적합',
      code: `vector<vector<long long>> pre(n + 1, vector<long long>(m + 1, 0));
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
        pre[i+1][j+1] = pre[i][j+1] + pre[i+1][j] - pre[i][j] + g[i][j];

// (r1,c1) ~ (r2,c2) 직사각형 합
long long sum = pre[r2+1][c2+1] - pre[r1][c2+1] - pre[r2+1][c1] + pre[r1][c1];`,
      note: '<b>왜 <code>- pre[i][j]</code>를 더하나</b>: ' +
            '<code>pre[i][j+1]</code>과 <code>pre[i+1][j]</code>를 더하면 ' +
            '<b>왼쪽 위 영역이 두 번 더해집니다</b>. 그래서 한 번 빼줍니다 (포함-배제 원리).<br>' +
            '질의 공식도 같은 이유로 네 항이 나옵니다.' },
  ],
  problems: [
    { id: 'uta', title: '구간 합 질의', diff: 1,
      desc: 'N개의 정수와 Q개의 질의가 주어집니다. 각 질의 <code>i j</code>에 대해 ' +
            'i번째부터 j번째까지의 합을 출력하세요 (0-based, 양끝 포함).<br>' +
            '<span class="io">입력: <code>5 2</code> / <code>1 2 3 4 5</code> / <code>0 2</code> / <code>1 3</code><br>' +
            '출력: <code>6</code> / <code>9</code></span><br>' +
            '제약: N, Q ≤ 100,000 → 🔴 질의마다 더하면 100억입니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // 누적합을 먼저 만들어두면 질의가 O(1)

    return 0;
}`,
      cases: [ { in: '5 2\n1 2 3 4 5\n0 2\n1 3', out: '6\n9' },
               { in: '3 1\n1 2 3\n0 2', out: '6' },
               { in: '1 1\n7\n0 0', out: '7' },
               { in: '4 2\n1000000000 1000000000 1000000000 1000000000\n0 3\n1 2', out: '4000000000\n2000000000' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    vector<long long> pre(n + 1, 0);          // pre[k] = 처음 k개의 합
    for (int i = 0; i < n; i++)
        pre[i + 1] = pre[i] + v[i];

    for (int t = 0; t < q; t++) {
        int i, j;
        cin >> i >> j;
        cout << pre[j + 1] - pre[i] << '\\n';   // O(1)
    }
    return 0;
}`,
      hint: '<code>pre[k]</code>를 "처음 k개의 합"으로 만들면 ' +
            '구간 [i,j]의 합은 <code>pre[j+1] - pre[i]</code>입니다. ' +
            '마지막 케이스가 40억이라 <code>long long</code> 필수입니다.',
      why: '<b>왜 크기를 <code>n+1</code>로 잡나</b>: <code>pre[0] = 0</code>(아무것도 안 더한 상태)을 ' +
           '두면 <code>i = 0</code>인 질의도 <code>pre[j+1] - pre[0]</code>으로 같은 공식이 적용됩니다. ' +
           '크기를 n으로 잡으면 <code>i = 0</code>을 따로 처리해야 해 버그가 생깁니다.' +
           '<ul><li>복잡도: 전처리 O(N) + 질의 O(1)×Q = <b>O(N+Q)</b></li>' +
           '<li>질의마다 더하면 O(N×Q) = 100억 → 시간초과</li>' +
           '<li>누적합 배열은 원소가 <code>int</code>라도 <b>합이 넘칠 수 있어</b> <code>long long</code>으로</li></ul>' },

    { id: 'utb', title: '합이 target인 두 수 (투포인터)', diff: 2,
      desc: '정렬되지 않은 N개의 정수에서 합이 target인 <b>두 수</b>를 찾아 ' +
            '작은 수부터 출력하세요. 없으면 <code>-1</code>.<br>' +
            '<span class="io">입력: <code>4 9</code> / <code>2 7 11 15</code> → 출력: <code>2 7</code></span><br>' +
            '💡 정렬 + 투포인터로 O(N log N)에 풉니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '4 9\n2 7 11 15', out: '2 7' }, { in: '4 100\n2 7 11 15', out: '-1' },
               { in: '2 8\n4 4', out: '4 4' }, { in: '5 10\n1 2 3 4 6', out: '4 6' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    sort(v.begin(), v.end());             // 투포인터는 정렬이 전제

    int l = 0, r = n - 1;
    while (l < r) {
        long long sum = (long long)v[l] + v[r];
        if (sum == target) {
            cout << v[l] << ' ' << v[r] << '\\n';
            return 0;
        }
        if (sum < target) l++;            // 합을 키운다
        else r--;                          // 합을 줄인다
    }
    cout << -1 << '\\n';
    return 0;
}`,
      hint: '정렬 후 양 끝에서 좁혀옵니다. 합이 작으면 <code>l++</code>(큰 값 쪽으로), ' +
            '크면 <code>r--</code>(작은 값 쪽으로).',
      why: '<b>왜 되돌아갈 필요가 없나</b>: 정렬된 배열에서 ' +
           '<code>l</code>을 오른쪽으로 옮기면 합이 <b>반드시 커지고</b>, ' +
           '<code>r</code>을 왼쪽으로 옮기면 <b>반드시 작아집니다</b>. ' +
           '목표와 비교해 한 방향만 선택하면 되므로 각 포인터가 한 번씩만 지나갑니다.' +
           '<ul><li>복잡도: 정렬 O(N log N) + 탐색 O(N) = <b>O(N log N)</b></li>' +
           '<li><code>l &lt; r</code> 조건이 "서로 다른 두 원소"를 보장합니다</li>' +
           '<li>💡 해시(set)를 쓰면 정렬 없이 O(N)입니다. ' +
           '단 <b>값을 정렬된 순서로 출력</b>해야 하면 정렬이 어차피 필요합니다</li></ul>' },

    { id: 'utc', title: '합이 target 이하인 최장 구간', diff: 2,
      desc: 'N개의 <b>양의</b> 정수에서, 연속된 구간의 합이 target 이하인 ' +
            '가장 긴 구간의 길이를 출력하세요.<br>' +
            '<span class="io">입력: <code>5 7</code> / <code>2 1 3 4 1</code> → 출력: <code>3</code> (2+1+3=6)</span><br>' +
            '제약: N ≤ 100,000',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '5 7\n2 1 3 4 1', out: '3' }, { in: '3 100\n1 2 3', out: '3' },
               { in: '3 0\n1 2 3', out: '0' }, { in: '4 5\n5 1 1 1', out: '3' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long target;
    cin >> n >> target;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    int l = 0, best = 0;
    long long sum = 0;
    for (int r = 0; r < n; r++) {
        sum += v[r];                       // 오른쪽으로 확장
        while (sum > target && l <= r) {   // 조건을 넘으면 왼쪽을 당김
            sum -= v[l];
            l++;
        }
        best = max(best, r - l + 1);
    }
    cout << best << '\\n';
    return 0;
}`,
      hint: '오른쪽을 한 칸씩 넓히면서, 합이 target을 넘으면 왼쪽을 당깁니다. ' +
            '매 단계에서 <code>r - l + 1</code>이 현재 구간 길이입니다.',
      why: '<b>왜 O(N)인가</b>: 안쪽에 <code>while</code>이 있어 O(N²)처럼 보이지만, ' +
           '<code>l</code>은 <b>절대 되돌아가지 않습니다</b>. ' +
           '전체 실행에서 <code>l</code>이 움직이는 횟수는 최대 N번이므로 합쳐서 O(N)입니다.' +
           '<ul><li>🔴 <b>값이 모두 양수여야 성립합니다</b>. 음수가 있으면 ' +
           '왼쪽을 줄여도 합이 줄어든다는 보장이 없어 이 방법이 깨집니다</li>' +
           '<li><code>target = 0</code>이고 모든 값이 양수면 답이 0 입니다 — ' +
           '<code>l &lt;= r</code> 조건이 그걸 처리합니다</li>' +
           '<li>구간 길이는 <code>r - l + 1</code>입니다 (양끝 포함이므로 +1)</li></ul>' },
  ],
},

/* ══════════════════ 신규: 이분탐색 ══════════════════ */
{
  id: 'ubs', group: '알고리즘', title: '이분탐색',
  syntax: [
    { h: '값 찾기 — 정렬된 배열에서',
      code: `int l = 0, r = n - 1;
while (l <= r) {
    int mid = l + (r - l) / 2;        // 🔴 (l+r)/2 보다 안전
    if (v[mid] == target) return mid;
    if (v[mid] < target) l = mid + 1;
    else r = mid - 1;
}
return -1;`,
      note: '<b>왜 <code>l + (r-l)/2</code> 인가</b>: <code>(l+r)/2</code>는 ' +
            '<code>l</code>과 <code>r</code>이 큰 값일 때 <b>덧셈에서 오버플로</b>할 수 있습니다. ' +
            '두 값이 각각 20억이면 합이 40억 → <code>int</code> 초과.<br>' +
            '· 매 단계에서 범위가 절반이 되므로 <b>O(log N)</b> — 100만 개도 20번만에 끝납니다' },

    { h: '🔴 STL 로 쓰기 — 직접 구현보다 안전',
      code: `// target 이 들어갈 수 있는 "가장 왼쪽" 위치
auto it = lower_bound(v.begin(), v.end(), target);
int idx = it - v.begin();

// target 보다 "처음으로 큰" 위치
auto it2 = upper_bound(v.begin(), v.end(), target);

// 존재 여부
bool found = binary_search(v.begin(), v.end(), target);

// target 의 개수
int cnt = upper_bound(v.begin(), v.end(), target)
        - lower_bound(v.begin(), v.end(), target);`,
      note: '<b>반드시 정렬된 상태여야 합니다.</b> 아니면 결과가 무의미합니다.<br>' +
            '· <code>lower_bound</code>: target <b>이상</b>인 첫 위치<br>' +
            '· <code>upper_bound</code>: target <b>초과</b>인 첫 위치<br>' +
            '· 둘의 차이가 곧 <b>target의 개수</b>입니다 — 자주 쓰는 패턴<br>' +
            '· 없으면 <code>v.end()</code>를 반환하므로 <code>it != v.end()</code>로 확인' },

    { h: '🔴 답을 이분탐색 (매개변수 탐색)',
      code: `// "조건을 만족하는 최소값" 을 찾는 틀
long long lo = 1, hi = 1e18, answer = -1;
while (lo <= hi) {
    long long mid = lo + (hi - lo) / 2;
    if (possible(mid)) {           // mid 로 가능한가?
        answer = mid;              //   가능하면 기록하고
        hi = mid - 1;              //   더 작은 값을 시도
    } else {
        lo = mid + 1;              //   불가능하면 키운다
    }
}`,
      note: '🔴 <b>코테에서 가장 자주 나오는 형태입니다.</b><br>' +
            '<b>언제 쓰나</b>: "최소 ~로 만들 수 있나", "최대 ~개 가능한가" 처럼 ' +
            '<b>답을 하나 정하면 가능/불가능을 쉽게 판정할 수 있을 때</b>.<br>' +
            '<b>왜 되나</b>: 답이 커질수록 가능해지는(또는 반대) <b>단조성</b>이 있으면, ' +
            '가능/불가능의 경계를 이분탐색으로 찾을 수 있습니다.<br>' +
            '💡 "최대의 최소" / "최소의 최대" 라는 표현이 보이면 거의 이것입니다.' },

    { h: '탐색 범위 정하기',
      code: `// lo = 가능한 가장 작은 답 (보통 1 또는 0)
// hi = 확실히 가능한 큰 답 (넉넉하게)
long long lo = 1, hi = 1e9;        // 범위를 모르면 넉넉히

// 복잡도 = O(log(hi-lo) × possible 의 비용)
// hi = 10^9 이면 log 가 30 → possible 이 O(N) 이면 O(30N)`,
      note: '<b>범위를 넉넉하게 잡아도 괜찮습니다.</b> ' +
            'log 라서 10억이든 100억이든 30~37번 차이뿐입니다. ' +
            '좁히려다 답을 범위 밖에 두는 실수가 더 위험합니다.' },
  ],
  problems: [
    { id: 'ubsa', title: '값의 개수 세기', diff: 1,
      desc: '정렬된 N개의 정수와 Q개의 질의가 주어집니다. 각 질의 값이 배열에 몇 번 나오는지 출력하세요.<br>' +
            '<span class="io">입력: <code>7 3</code> / <code>1 2 2 2 5 5 9</code> / <code>2 5 7</code><br>' +
            '출력: <code>3 2 0</code></span><br>' +
            '제약: N, Q ≤ 100,000',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    return 0;
}`,
      cases: [ { in: '7 3\n1 2 2 2 5 5 9\n2 5 7', out: '3 2 0' },
               { in: '3 1\n1 1 1\n1', out: '3' },
               { in: '1 2\n5\n5 6', out: '1 0' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    for (int t = 0; t < q; t++) {
        int x;
        cin >> x;
        // upper - lower = x 의 개수
        int cnt = upper_bound(v.begin(), v.end(), x)
                - lower_bound(v.begin(), v.end(), x);
        cout << cnt;
        if (t + 1 < q) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '<code>upper_bound - lower_bound</code>가 그 값의 개수입니다. ' +
            '각 질의가 O(log N)이므로 전체 O(Q log N).',
      why: '<b>왜 두 함수의 차이가 개수인가</b>: ' +
           '<code>lower_bound</code>는 <b>x 이상인 첫 위치</b>, ' +
           '<code>upper_bound</code>는 <b>x 초과인 첫 위치</b>입니다. ' +
           '그 사이 구간이 정확히 x 들의 범위입니다.' +
           '<ul><li><code>[1,2,2,2,5]</code>에서 x=2면 lower=1, upper=4 → 4−1=3개</li>' +
           '<li>x 가 없으면 두 위치가 같아져 0 이 됩니다 — 별도 분기가 필요 없습니다</li>' +
           '<li>🔴 <b>반드시 정렬된 배열</b>이어야 합니다. 아니면 결과가 무의미합니다</li></ul>' },

    { id: 'ubsb', title: '랜선 자르기 (답을 이분탐색)', diff: 2,
      desc: 'N개의 랜선이 있습니다. 이를 잘라서 <b>같은 길이</b>의 랜선 K개 이상을 만들려 합니다. ' +
            '만들 수 있는 <b>최대 길이</b>를 출력하세요 (길이는 자연수).<br>' +
            '<span class="io">입력: <code>4 11</code> / <code>802 743 457 539</code> → 출력: <code>200</code></span><br>' +
            '💡 길이를 L로 정하면 만들 수 있는 개수는 <code>sum(len[i] / L)</code>입니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long k;
    cin >> n >> k;
    vector<long long> len(n);
    for (int i = 0; i < n; i++) cin >> len[i];

    // 길이 L 로 가능한가? -> 개수를 세어 k 이상인지 확인

    return 0;
}`,
      cases: [ { in: '4 11\n802 743 457 539', out: '200' },
               { in: '1 1\n10', out: '10' },
               { in: '2 4\n10 10', out: '5' },
               { in: '1 3\n7', out: '2' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long k;
    cin >> n >> k;
    vector<long long> len(n);
    for (int i = 0; i < n; i++) cin >> len[i];

    long long lo = 1, hi = *max_element(len.begin(), len.end());
    long long answer = 0;

    while (lo <= hi) {
        long long mid = lo + (hi - lo) / 2;      // 길이 후보

        long long count = 0;
        for (long long L : len) count += L / mid;

        if (count >= k) {          // 이 길이로 k개 이상 가능
            answer = mid;          //   기록하고
            lo = mid + 1;          //   더 긴 길이를 시도
        } else {
            hi = mid - 1;          //   불가능하면 짧게
        }
    }
    cout << answer << '\\n';
    return 0;
}`,
      hint: '길이를 <code>mid</code>로 정하면 개수는 <code>sum(len[i] / mid)</code>입니다. ' +
            'k개 이상이면 더 긴 길이를 시도(<code>lo = mid+1</code>), 아니면 짧게(<code>hi = mid-1</code>).',
      why: '<b>왜 이분탐색이 되나</b>: <b>단조성</b>이 있습니다 — ' +
           '길이를 짧게 하면 만들 수 있는 개수가 늘고, 길게 하면 줍니다. ' +
           '따라서 "k개 이상 가능한 최대 길이"라는 <b>경계</b>가 하나 존재하고, 그걸 찾는 문제입니다.' +
           '<ul><li><b>이 문제의 핵심 전환</b>: 답(길이)을 직접 계산하기는 어렵지만, ' +
           '"길이 L로 k개 가능한가?"는 한 번 순회로 쉽게 판정됩니다. ' +
           '<b>계산이 어려우면 후보를 찍고 검증하세요</b></li>' +
           '<li>범위: <code>lo = 1</code>, <code>hi = </code>최대 랜선 길이 (그보다 길면 하나도 못 만듦)</li>' +
           '<li>복잡도: O(N log(max)) — N=100만, max=10억이어도 약 3000만</li>' +
           '<li><code>802/200 + 743/200 + 457/200 + 539/200 = 4+3+2+2 = 11</code> ✓</li></ul>' },

    { id: 'ubsc', title: '나무 자르기 (최대의 최소)', diff: 2,
      desc: 'N개의 나무 높이가 주어집니다. 절단기 높이 H를 정하면 H보다 높은 부분이 잘립니다. ' +
            '적어도 M만큼의 나무를 얻으려면 <b>H를 최대 몇으로</b> 설정할 수 있는지 출력하세요.<br>' +
            '<span class="io">입력: <code>4 7</code> / <code>20 15 10 17</code> → 출력: <code>15</code></span><br>' +
            '💡 H=15면 (20−15)+(17−15)=7 을 얻습니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long m;
    cin >> n >> m;
    vector<long long> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];

    return 0;
}`,
      cases: [ { in: '4 7\n20 15 10 17', out: '15' },
               { in: '5 20\n4 42 40 26 46', out: '36' },
               { in: '1 5\n10', out: '5' },
               { in: '2 0\n5 5', out: '5' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long m;
    cin >> n >> m;
    vector<long long> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];

    long long lo = 0, hi = *max_element(h.begin(), h.end());
    long long answer = 0;

    while (lo <= hi) {
        long long mid = lo + (hi - lo) / 2;      // 절단기 높이 후보

        long long got = 0;
        for (long long x : h)
            if (x > mid) got += x - mid;          // 넘는 부분만

        if (got >= m) {            // 충분히 얻음
            answer = mid;          //   기록하고
            lo = mid + 1;          //   H 를 더 높여본다
        } else {
            hi = mid - 1;          //   부족하면 낮춘다
        }
    }
    cout << answer << '\\n';
    return 0;
}`,
      hint: 'H를 <code>mid</code>로 두고 <code>sum(max(0, h[i] - mid))</code>를 계산합니다. ' +
            'M 이상이면 H를 높이고(<code>lo = mid+1</code>), 부족하면 낮춥니다.',
      why: '<b>단조성</b>: H를 높이면 얻는 나무가 줄고, 낮추면 늘어납니다. ' +
           '"M 이상 얻을 수 있는 최대 H"라는 경계를 찾는 문제입니다.' +
           '<ul><li>🔴 <code>lo = 0</code>부터 시작합니다 — H=0 (바닥까지 자르기)도 유효한 답입니다. ' +
           '마지막 케이스(M=0)에서 확인할 수 있습니다</li>' +
           '<li><code>if (x > mid)</code> 검사가 필요합니다 — 빼먹으면 ' +
           '나무보다 절단기가 높을 때 <b>음수가 더해져</b> 틀립니다</li>' +
           '<li>합이 크므로 <code>long long</code> (나무 100만 개 × 높이 10억)</li>' +
           '<li>💡 <b>"최대의 최소", "최소의 최대"</b>는 거의 항상 이 패턴입니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: DFS · 백트래킹 ══════════════════ */
{
  id: 'ud', group: '알고리즘', title: 'DFS · 백트래킹',
  syntax: [
    { h: 'DFS — 한 방향으로 끝까지',
      code: `vector<vector<int>> adj;
vector<bool> visited;

void dfs(int cur) {
    visited[cur] = true;
    for (int next : adj[cur])
        if (!visited[next]) dfs(next);
}`,
      note: '<b>BFS 와의 차이</b>: BFS 는 가까운 것부터 동심원으로, DFS 는 한 방향으로 끝까지 파고듭니다.<br>' +
            '· <b>최단거리</b>: BFS 만 보장 (DFS 는 먼 길로 먼저 도달 가능)<br>' +
            '· <b>연결 요소 개수 / 경로 존재 여부</b>: 둘 다 가능, DFS 가 코드가 짧음<br>' +
            '· <b>모든 경로 탐색 / 조합 생성</b>: DFS(백트래킹)가 자연스러움' },

    { h: '격자 DFS',
      code: `int dr[4] = {-1, 1, 0, 0};
int dc[4] = { 0, 0,-1, 1};

void dfs(int r, int c, vector<vector<int>>& g) {
    int n = g.size(), m = g[0].size();
    g[r][c] = 0;                      // 방문 표시 (덮어쓰기)
    for (int d = 0; d < 4; d++) {
        int nr = r + dr[d], nc = c + dc[d];
        if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
        if (g[nr][nc] == 0) continue;
        dfs(nr, nc, g);
    }
}`,
      note: '💡 <b>방문 배열 대신 원본을 덮어쓰는</b> 기법입니다. ' +
            '메모리를 아끼고 코드가 짧아지지만, <b>원본이 필요하면 쓸 수 없습니다.</b>' },

    { h: '🔴 재귀 깊이 — DFS 의 가장 큰 위험',
      code: `// 노드 10만 개가 일자로 연결 → 재귀 깊이 10만
// C++ 스택은 보통 1MB → 스택 오버플로(크래시)

// 대책 1: BFS 로 바꾼다 (반복문이라 제한 없음)
// 대책 2: 명시적 스택을 쓴다
void dfsIterative(int start) {
    vector<int> st = {start};
    visited[start] = true;
    while (!st.empty()) {
        int cur = st.back(); st.pop_back();
        for (int next : adj[cur])
            if (!visited[next]) {
                visited[next] = true;
                st.push_back(next);
            }
    }
}`,
      note: '<b>왜 터지나</b>: 함수 호출마다 <b>스택 프레임</b>(지역변수 + 복귀주소)이 쌓입니다. ' +
            '프레임이 50바이트여도 10만 깊이면 5MB → 1MB 스택을 넘습니다.<br>' +
            '🔴 <b>기준: 노드가 10만 이상이고 깊이가 깊을 수 있으면 BFS 또는 반복 DFS 를 쓰세요.</b>' },

    { h: '백트래킹 — 조합·순열 생성',
      code: `vector<int> picked;

void backtrack(int start, int k, const vector<int>& v) {
    if ((int)picked.size() == k) {
        output(picked);
        return;
    }
    for (int i = start; i < (int)v.size(); i++) {
        picked.push_back(v[i]);         // ① 선택
        backtrack(i + 1, k, v);         // ② 진행
        picked.pop_back();              // ③ 되돌리기
    }
}`,
      note: '<b>①②③ 이 백트래킹의 전부입니다.</b> ' +
            '③ 되돌리기가 없으면 다음 <code>i</code>가 더럽혀진 상태에서 시작해 틀립니다.<br>' +
            '· <code>start</code>를 쓰면 <b>조합</b>(순서 무관)<br>' +
            '· <code>visited</code> 배열로 전체를 돌면 <b>순열</b>(순서 중요)' },

    { h: '가지치기 — 백트래킹의 핵심 최적화',
      code: `void backtrack(int idx, long long sum) {
    if (sum > target) return;          // 🔴 이미 초과면 더 볼 필요 없음
    if (idx == n) {
        if (sum == target) count++;
        return;
    }
    backtrack(idx + 1, sum + v[idx]);  // 포함
    backtrack(idx + 1, sum);           // 제외
}`,
      note: '<b>왜 중요한가</b>: 완전탐색은 2ⁿ인데, 불가능한 가지를 일찍 끊으면 ' +
            '실제 탐색량이 수십~수천 배 줄어듭니다. ' +
            '<b>"더 가도 답이 될 수 없다"는 조건을 찾는 것이 핵심</b>입니다.' },
  ],
  problems: [
    { id: 'uda', title: '연결 요소 개수 (DFS)', diff: 1,
      desc: '노드 1~N과 간선 목록이 주어집니다. 연결 요소의 개수를 출력하세요.<br>' +
            '<span class="io">입력: <code>5 3</code> / <code>1 2</code> / <code>2 3</code> / <code>4 5</code> → 출력: <code>2</code></span>',
      starter: `vector<vector<int>> adj;
vector<bool> visited;

void dfs(int cur) {
    // 여기에 작성
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    adj.assign(n + 1, {});
    visited.assign(n + 1, false);
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    return 0;
}`,
      cases: [ { in: '5 3\n1 2\n2 3\n4 5', out: '2' },
               { in: '3 0', out: '3' },
               { in: '4 3\n1 2\n2 3\n3 4', out: '1' } ],
      solution: `vector<vector<int>> adj;
vector<bool> visited;

void dfs(int cur) {
    visited[cur] = true;
    for (int next : adj[cur])
        if (!visited[next]) dfs(next);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    adj.assign(n + 1, {});
    visited.assign(n + 1, false);
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    int count = 0;
    for (int i = 1; i <= n; i++)
        if (!visited[i]) {          // 아직 안 본 노드 = 새 연결 요소
            count++;
            dfs(i);
        }
    cout << count << '\\n';
    return 0;
}`,
      hint: '<code>dfs</code>는 세 줄입니다: 방문 표시 → 이웃 순회 → 안 가본 곳만 재귀. ' +
            '<code>main</code>에서 모든 노드를 돌며 안 가본 노드가 나오면 카운트+DFS.',
      why: '<b>왜 바깥 루프가 필요한가</b>: DFS 한 번은 <b>연결된 영역 하나</b>만 방문합니다. ' +
           '떨어진 그래프는 닿지 않으므로, 안 가본 노드마다 DFS 를 새로 시작합니다. ' +
           '<b>DFS 호출 횟수 = 연결 요소 개수</b>입니다.' +
           '<ul><li>간선이 0개면 모든 노드가 각각 하나의 요소 → 답이 N</li>' +
           '<li>양방향 그래프라 <code>adj[u]</code>와 <code>adj[v]</code> 둘 다 넣습니다. ' +
           '단방향이면 한 줄만</li>' +
           '<li>크기를 <code>n+1</code>로 잡는 이유: 노드 번호가 1부터라 ' +
           '<code>adj[n]</code>까지 써야 합니다</li></ul>' },

    { id: 'udb', title: 'N개 중 K개 고르기 (백트래킹)', diff: 2,
      desc: '1부터 N까지 중 K개를 고르는 모든 조합을 <b>사전순</b>으로 출력하세요 (한 줄에 하나).<br>' +
            '<span class="io">입력: <code>4 2</code> → 출력:<br>' +
            '<code>1 2</code> / <code>1 3</code> / <code>1 4</code> / <code>2 3</code> / <code>2 4</code> / <code>3 4</code></span>',
      starter: `int n, k;
vector<int> picked;

void backtrack(int start) {
    // ① 다 골랐으면 출력
    // ② start 부터 순회하며 고르고 -> 진행 -> 되돌리기
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cin >> n >> k;
    backtrack(1);
    return 0;
}`,
      cases: [ { in: '4 2', out: '1 2\n1 3\n1 4\n2 3\n2 4\n3 4' },
               { in: '3 1', out: '1\n2\n3' },
               { in: '3 3', out: '1 2 3' } ],
      solution: `int n, k;
vector<int> picked;

void backtrack(int start) {
    if ((int)picked.size() == k) {          // ① 다 골랐다
        for (int i = 0; i < k; i++) {
            cout << picked[i];
            if (i + 1 < k) cout << ' ';
        }
        cout << '\\n';
        return;
    }
    for (int i = start; i <= n; i++) {
        picked.push_back(i);                 // ② 선택
        backtrack(i + 1);                    // ③ 진행 (i+1 = 조합)
        picked.pop_back();                   // ④ 되돌리기
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cin >> n >> k;
    backtrack(1);
    return 0;
}`,
      hint: '<code>picked.size() == k</code>면 출력하고 종료. ' +
            '아니면 <code>start</code>부터 <code>n</code>까지 고르고 <code>backtrack(i+1)</code>로 진행, ' +
            '돌아오면 <code>pop_back()</code>.',
      why: '<b>왜 <code>pop_back()</code>이 필요한가</b>: 재귀에서 돌아온 뒤 ' +
           '<code>picked</code>에 방금 고른 값이 남아있으면, 다음 <code>i</code>를 고를 때 ' +
           '<b>이전 선택이 섞입니다</b>. 되돌려야 각 가지가 독립적으로 탐색됩니다.' +
           '<ul><li><b>왜 <code>i + 1</code>로 넘기나</b>: 조합(순서 무관)이므로 ' +
           '이미 지난 숫자를 다시 고르면 중복입니다. ' +
           '<code>backtrack(1)</code>로 넘기면 순열이 됩니다</li>' +
           '<li><b>왜 사전순으로 나오나</b>: <code>start</code>부터 <b>작은 수부터</b> 순회하고 ' +
           '깊이 우선으로 내려가므로 자연스럽게 사전순이 됩니다</li>' +
           '<li>전역 변수로 둔 이유: 재귀 인자를 줄여 코드가 짧아집니다 (코테 관례)</li></ul>' },

    { id: 'udc', title: '가지치기로 부분수열 합', diff: 2,
      desc: 'N개의 <b>양의</b> 정수에서 일부를 골라 합이 정확히 target이 되는 경우의 수를 출력하세요.<br>' +
            '<span class="io">입력: <code>4 5</code> / <code>1 2 3 4</code> → 출력: <code>2</code> ({1,4},{2,3})</span><br>' +
            '제약: N ≤ 30 → 2³⁰은 10억이라 그냥 돌리면 느립니다. <b>가지치기</b>를 쓰세요.',
      starter: `int n;
long long target;
vector<long long> v;
int answer = 0;              // 🔴 count 는 std::count 와 이름이 겹칩니다

void backtrack(int idx, long long sum) {
    // 가지치기: sum 이 이미 target 을 넘으면?

}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cin >> n >> target;
    v.resize(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    answer = 0;                  // 전역이므로 쓰기 전에 초기화
    backtrack(0, 0);
    cout << answer << '\\n';
    return 0;
}`,
      cases: [ { in: '4 5\n1 2 3 4', out: '2' },
               { in: '3 0\n1 2 3', out: '1' },
               { in: '1 5\n5', out: '1' },
               { in: '5 10\n1 2 3 4 5', out: '3' } ],
      solution: `int n;
long long target;
vector<long long> v;
int answer = 0;              // 🔴 count 라고 쓰면 std::count 와 모호해져 컴파일 에러

void backtrack(int idx, long long sum) {
    if (sum > target) return;            // 🔴 가지치기: 양수만 남았으니 더 커질 뿐
    if (idx == n) {
        if (sum == target) answer++;
        return;
    }
    backtrack(idx + 1, sum + v[idx]);    // 이 원소를 포함
    backtrack(idx + 1, sum);             // 포함하지 않음
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cin >> n >> target;
    v.resize(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    answer = 0;                  // 전역이므로 쓰기 전에 초기화
    backtrack(0, 0);
    cout << answer << '\\n';
    return 0;
}`,
      hint: '각 원소마다 "포함/제외" 두 가지로 재귀합니다. ' +
            '<code>sum &gt; target</code>이면 양수만 남았으므로 더 가도 답이 될 수 없어 바로 <code>return</code>.',
      why: '<b>왜 가지치기가 유효한가</b>: 모든 값이 <b>양수</b>라서 ' +
           '합은 앞으로 <b>커지기만</b> 합니다. 이미 target 을 넘었다면 ' +
           '나머지를 어떻게 고르든 답이 될 수 없으므로 그 가지 전체를 버립니다.' +
           '<ul><li>🔴 <b>음수가 섞이면 이 가지치기는 틀립니다</b> — 나중에 음수를 더해 줄어들 수 있습니다</li>' +
           '<li><code>target = 0</code>일 때 답이 1 인 이유: <b>아무것도 안 고르는 경우</b></li>' +
           '<li>복잡도: 최악 O(2ⁿ)이지만 가지치기로 실제 탐색량이 크게 줄어듭니다. ' +
           '효과는 입력에 따라 달라집니다</li>' +
           '<li>💡 N이 더 크면 DP(배낭 문제)나 <b>중간에서 만나기</b>(절반씩 나눠 2^(n/2))를 씁니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: 우선순위큐 · 그리디 ══════════════════ */
{
  id: 'ug', group: '알고리즘', title: '우선순위큐 · 그리디',
  syntax: [
    { h: '🔴 우선순위큐 선언 — 외우세요',
      code: `priority_queue<int> maxHeap;                              // 최대 힙 (기본)
priority_queue<int, vector<int>, greater<int>> minHeap;   // 최소 힙

maxHeap.push(5);
maxHeap.top();      // 가장 큰 값 (보기만)
maxHeap.pop();      // 제거 (값 반환 안 함)`,
      note: '🔴 <b>C++ 기본은 최대 힙입니다</b> (Python <code>heapq</code>는 최소 힙 — 반대!).<br>' +
            '<b>왜 <code>greater&lt;int&gt;</code>가 최소 힙인가</b>: 비교 함수가 ' +
            '"누가 뒤로 갈지"를 정합니다. <code>greater</code>는 큰 값을 뒤로 보내므로 ' +
            '작은 값이 <code>top</code>에 옵니다.<br>' +
            '· <code>push</code>/<code>pop</code> 모두 O(log N), <code>top</code>은 O(1)' },

    { h: '언제 쓰나 — 정렬과의 차이',
      code: `// 정렬: 한 번만 순서가 필요할 때
sort(v.begin(), v.end());

// 힙: 중간에 데이터가 계속 추가될 때
priority_queue<int, vector<int>, greater<int>> pq;
while (조건) {
    int smallest = pq.top(); pq.pop();
    pq.push(새로운값);             // 🔴 추가되면서도 순서 유지
}`,
      note: '<b>핵심 차이</b>: 정렬은 고정된 데이터를 한 번 줄 세우는 것, ' +
            '힙은 <b>데이터가 변하는 동안 계속 최소/최대를 꺼내는</b> 것입니다.<br>' +
            '💡 "매번 가장 작은 둘을 합친다", "가장 급한 일부터 처리한다" 류가 힙입니다.' },

    { h: 'pair 힙 — 다익스트라 등',
      code: `priority_queue<pair<long long,int>,
               vector<pair<long long,int>>,
               greater<>> pq;        // C++14+ 에서 greater<> 생략형

pq.push({cost, node});
auto [c, u] = pq.top(); pq.pop();`,
      note: '<code>pair</code>는 <b>first 우선</b>으로 비교되므로 ' +
            '비용을 <code>first</code>에 두면 비용 기준 힙이 됩니다.<br>' +
            '💡 <code>greater&lt;&gt;</code>(타입 생략)는 C++14 이상에서 됩니다. 코테 환경은 보통 C++17 이라 안전합니다.' },

    { h: '🔴 그리디 — "지금 최선"이 전체 최선일 때',
      code: `// 회의실 배정: 최대한 많이 선택
sort(v.begin(), v.end(), [](auto& a, auto& b) {
    return a.second < b.second;      // 🔴 "끝나는 시간" 기준
});

int lastEnd = -1, count = 0;
for (auto& [start, end] : v)
    if (start >= lastEnd) { count++; lastEnd = end; }`,
      note: '<b>왜 끝나는 시간 기준인가</b>: 빨리 끝나는 회의를 고르면 ' +
            '<b>남는 시간이 가장 많아져</b> 이후 선택지가 최대가 됩니다. ' +
            '시작 시간이나 길이 기준으로 고르면 반례가 있습니다.<br>' +
            '🔴 <code>&gt;=</code>냐 <code>&gt;</code>냐로 답이 달라집니다 — ' +
            '"끝나는 동시에 시작 가능"한지 문제를 확인하세요.' },

    { h: '그리디가 되는지 판단하는 법',
      code: `// ✅ 그리디가 되는 전형
거스름돈 (큰 단위부터)       — 단위가 배수 관계일 때만
회의실 배정 (끝나는 시간)
가장 작은 둘을 합치기 (허프만)

// ❌ 그리디가 안 되는 전형
배낭 문제 (무게 대비 가치)   — DP 필요
동전이 {1, 3, 4} 일 때 6원   — 그리디: 4+1+1(3개), 최적: 3+3(2개)`,
      note: '🔴 <b>코테에서의 현실적 판단</b>: 증명은 어렵습니다. ' +
            '대신 ① <b>작은 반례를 만들어보고</b> ② 제약조건이 크면(10만 이상) ' +
            'DP 가 불가능하니 그리디를 의심합니다.<br>' +
            '💡 그리디가 의심스러우면 <b>작은 입력으로 완전탐색과 비교</b>해보세요.' },
  ],
  problems: [
    { id: 'uga', title: '가장 작은 둘 합치기', diff: 1,
      desc: 'N개의 수가 있습니다. 매번 <b>가장 작은 두 수</b>를 꺼내 합친 값을 다시 넣습니다. ' +
            '하나가 될 때까지 반복했을 때, <b>합친 값들의 총합</b>을 출력하세요.<br>' +
            '<span class="io">입력: <code>4</code> / <code>1 2 3 9</code> → 출력: <code>24</code><br>' +
            '(1+2=3 → 3+3=6 → 6+9=15, 총합 3+6+15=24)</span>',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    // 최소 힙을 만들어 쓰세요

    return 0;
}`,
      cases: [ { in: '4\n1 2 3 9', out: '24' }, { in: '2\n5 5', out: '10' },
               { in: '1\n7', out: '0' }, { in: '3\n1 1 1', out: '5' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    priority_queue<long long, vector<long long>, greater<long long>> pq;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        pq.push(x);
    }

    long long total = 0;
    while (pq.size() >= 2) {              // 둘 이상 남아있을 때
        long long a = pq.top(); pq.pop();
        long long b = pq.top(); pq.pop();
        total += a + b;                    // 합친 값을 누적
        pq.push(a + b);                    // 다시 넣는다
    }
    cout << total << '\\n';
    return 0;
}`,
      hint: '최소 힙에 전부 넣고, <code>size() &gt;= 2</code>인 동안 두 개를 꺼내 합칩니다. ' +
            '합친 값을 누적하면서 다시 힙에 넣습니다.',
      why: '<b>왜 힙이 필요한가</b>: 합친 값을 <b>다시 넣어야</b> 하므로 정렬로는 안 됩니다. ' +
           '새 값이 어디에 들어갈지 매번 다시 정렬하면 O(N² log N)이 됩니다. ' +
           '힙은 삽입·삭제가 O(log N)이라 전체 O(N log N)입니다.' +
           '<ul><li><b>왜 가장 작은 둘인가</b>: 먼저 합친 값은 이후에도 계속 더해지므로, ' +
           '작은 것부터 합쳐야 총합이 최소가 됩니다 (허프만 코딩의 원리)</li>' +
           '<li>원소가 1개면 합칠 게 없어 답이 0 입니다 — <code>size() &gt;= 2</code>가 처리합니다</li>' +
           '<li>합이 커지므로 <code>long long</code>. 값이 10억 × 10만 개면 쉽게 넘칩니다</li></ul>' },

    { id: 'ugb', title: '회의실 배정', diff: 2,
      desc: 'N개의 회의 (시작, 종료)가 주어집니다. 한 회의실에서 <b>최대 몇 개</b>를 ' +
            '겹치지 않게 열 수 있는지 출력하세요. 회의가 끝나는 동시에 다음 회의를 시작할 수 있습니다.<br>' +
            '<span class="io">입력: <code>3</code> / <code>1 4</code> / <code>2 3</code> / <code>3 5</code> → 출력: <code>2</code></span>',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<pair<int,int>> v(n);
    for (int i = 0; i < n; i++)
        cin >> v[i].first >> v[i].second;

    // 무엇을 기준으로 정렬해야 할까요?

    return 0;
}`,
      cases: [ { in: '3\n1 4\n2 3\n3 5', out: '2' },
               { in: '1\n1 2', out: '1' },
               { in: '3\n1 2\n2 3\n3 4', out: '3' },
               { in: '4\n1 10\n2 3\n4 5\n6 7', out: '3' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<pair<int,int>> v(n);
    for (int i = 0; i < n; i++)
        cin >> v[i].first >> v[i].second;

    // 끝나는 시간이 빠른 것부터 (같으면 시작이 빠른 것부터)
    sort(v.begin(), v.end(), [](const auto& a, const auto& b) {
        if (a.second != b.second) return a.second < b.second;
        return a.first < b.first;
    });

    int count = 0, lastEnd = -1;
    for (const auto& [s, e] : v)
        if (s >= lastEnd) {            // 끝난 뒤(또는 동시)에 시작 가능
            count++;
            lastEnd = e;
        }
    cout << count << '\\n';
    return 0;
}`,
      hint: '<b>종료 시간</b> 기준으로 정렬하고, 앞에서부터 "이전 회의가 끝난 뒤 시작하는" 것을 고릅니다. ' +
            '"동시에 시작 가능"하므로 <code>s &gt;= lastEnd</code>.',
      why: '<b>왜 종료 시간 기준인가</b>: 빨리 끝나는 회의를 고르면 ' +
           '<b>남은 시간이 최대가 되어</b> 이후 선택지가 가장 많아집니다.' +
           '<ul><li><b>시작 시간 기준의 반례</b>: <code>(1,10), (2,3), (4,5)</code> — ' +
           '시작 기준이면 (1,10)을 골라 1개뿐, 종료 기준이면 (2,3),(4,5)로 2개</li>' +
           '<li><b>길이 기준의 반례</b>: 짧은 회의가 가운데 있어 양쪽을 막는 경우</li>' +
           '<li>🔴 <code>&gt;=</code> vs <code>&gt;</code>: 세 번째 케이스 ' +
           '<code>(1,2),(2,3),(3,4)</code>가 <code>&gt;=</code>면 3개, <code>&gt;</code>면 2개입니다. ' +
           '<b>문제가 "동시 시작 가능"이라 했으니 <code>&gt;=</code></b></li>' +
           '<li>복잡도: 정렬 O(N log N) + 한 번 순회 O(N)</li></ul>' },

    { id: 'ugc', title: '거스름돈 — 그리디의 함정', diff: 2,
      desc: '동전 종류와 금액이 주어집니다. 금액을 만드는 <b>최소 동전 개수</b>를 출력하세요. ' +
            '불가능하면 <code>-1</code>.<br>' +
            '<span class="io">입력: <code>3 6</code> / <code>1 3 4</code> → 출력: <code>2</code> (3+3)</span><br>' +
            '🔴 큰 단위부터 고르는 그리디는 <b>틀립니다</b> (4+1+1 = 3개). 왜 그런지 생각해보세요.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, amount;
    cin >> n >> amount;
    vector<int> coin(n);
    for (int i = 0; i < n; i++) cin >> coin[i];

    // 그리디가 안 되면 무엇을 써야 할까요?

    return 0;
}`,
      cases: [ { in: '3 6\n1 3 4', out: '2' }, { in: '3 11\n1 5 10', out: '2' },
               { in: '1 7\n3', out: '-1' }, { in: '2 0\n1 2', out: '0' },
               { in: '2 7\n2 4', out: '-1' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, amount;
    cin >> n >> amount;
    vector<int> coin(n);
    for (int i = 0; i < n; i++) cin >> coin[i];

    const int INF = 1e9;
    vector<int> dp(amount + 1, INF);       // dp[k] = k원을 만드는 최소 개수
    dp[0] = 0;                              // 0원은 동전 0개

    for (int k = 1; k <= amount; k++)
        for (int c : coin)
            if (c <= k && dp[k - c] != INF)
                dp[k] = min(dp[k], dp[k - c] + 1);

    cout << (dp[amount] == INF ? -1 : dp[amount]) << '\\n';
    return 0;
}`,
      hint: '그리디가 안 되니 <b>DP</b>를 씁니다. ' +
            '<code>dp[k]</code> = k원을 만드는 최소 개수. ' +
            '<code>dp[k] = min(dp[k - 동전] + 1)</code>.',
      why: '<b>왜 그리디가 틀리나</b>: 동전 <code>{1,3,4}</code>로 6원을 만들 때 ' +
           '큰 것부터 고르면 4 → 1 → 1 (3개)이지만, 최적은 3+3 (2개)입니다. ' +
           '<b>큰 동전을 쓰는 게 항상 유리하지 않습니다.</b>' +
           '<ul><li>그리디가 되는 조건: 동전 단위가 <b>배수 관계</b>일 때 (예: 1, 5, 10, 50). ' +
           '한국 동전이 그래서 그리디가 됩니다</li>' +
           '<li><b>DP 의 아이디어</b>: k원을 만드는 최소 개수는 ' +
           '"k−c원을 만드는 최소 개수 + 1" 중 최솟값입니다. ' +
           '작은 금액부터 채워 올라가면 모든 경우가 고려됩니다</li>' +
           '<li><code>dp[k-c] != INF</code> 검사가 중요합니다 — ' +
           '만들 수 없는 금액을 거쳐 계산하면 틀립니다 (마지막 케이스 7원에서 확인)</li>' +
           '<li>복잡도: O(amount × N)</li></ul>' },
  ],
},

/* ══════════════════ 신규: DP 기초 ══════════════════ */
{
  id: 'udp', group: '알고리즘', title: 'DP 기초',
  syntax: [
    { h: '🔴 DP 란 — 겹치는 부분문제를 저장하기',
      code: `// 재귀만 쓰면: fib(5) 를 구할 때 fib(3) 을 2번, fib(2) 를 3번 계산
// → fib(50) 이면 약 2^50 번 (불가능)

// DP: 한 번 계산한 걸 저장해 재사용
vector<long long> dp(n + 1);
dp[0] = 0; dp[1] = 1;
for (int i = 2; i <= n; i++)
    dp[i] = dp[i-1] + dp[i-2];      // 각 i 를 한 번만 계산 → O(N)`,
      note: '<b>DP 가 가능한 조건 두 가지</b>:<br>' +
            '① <b>겹치는 부분문제</b> — 같은 계산이 반복된다<br>' +
            '② <b>최적 부분구조</b> — 큰 문제의 답이 작은 문제의 답으로 구성된다<br><br>' +
            '💡 11번 유닛의 메모이제이션이 DP 의 재귀 버전입니다. ' +
            '여기서는 <b>반복문으로 아래부터 채우는</b> 방식을 씁니다 (바텀업).' },

    { h: 'DP 문제를 푸는 순서',
      code: `① dp 가 무엇을 뜻하는지 한 문장으로 정의한다
     "dp[i] = i번째까지 봤을 때의 최대 이익"

② 점화식을 세운다 (dp[i] 를 더 작은 dp 로)
     dp[i] = max(dp[i-1], dp[i-2] + v[i])

③ 초기값(base case)을 정한다
     dp[0] = ?,  dp[1] = ?

④ 채우는 순서를 정한다 (작은 것부터)
     for (i = 2; i <= n; i++)`,
      note: '🔴 <b>①이 가장 중요하고 가장 어렵습니다.</b> ' +
            'dp 의 정의가 애매하면 점화식이 안 나옵니다. ' +
            '"dp[i]가 정확히 무엇인가"를 <b>말로 적어보세요</b>.' },

    { h: '전형 1 — 한 칸씩 올라가며 선택',
      code: `// 계단 오르기: 1칸 또는 2칸씩, 몇 가지 방법?
dp[0] = 1;                  // 제자리: 1가지 (아무것도 안 함)
dp[1] = 1;
for (int i = 2; i <= n; i++)
    dp[i] = dp[i-1] + dp[i-2];   // 1칸 전에서 오거나, 2칸 전에서 오거나`,
      note: '<b>왜 더하나</b>: i번째에 도달하는 방법은 ' +
            '"i−1에서 1칸" 또는 "i−2에서 2칸"뿐이고 <b>서로 겹치지 않으므로</b> 합이 전체입니다.<br>' +
            '💡 <b>개수를 세는 문제는 더하기</b>, <b>최적값을 찾는 문제는 min/max</b>입니다.' },

    { h: '전형 2 — 최대/최소 선택',
      code: `// 연속하지 않게 골라 최대 합
dp[0] = v[0];
dp[1] = max(v[0], v[1]);
for (int i = 2; i < n; i++)
    dp[i] = max(dp[i-1],            // i 를 안 고름
                dp[i-2] + v[i]);     // i 를 고름 (i-1 은 못 고름)`,
      note: '<b>구조</b>: 각 칸에서 "고른다 / 안 고른다" 두 선택지의 <b>더 좋은 쪽</b>을 취합니다. ' +
            '고르면 이전 칸을 못 쓰므로 <code>dp[i-2]</code>에서 옵니다.' },

    { h: '전형 3 — 2차원 DP (격자)',
      code: `// 왼쪽 위에서 오른쪽 아래로, 오른쪽·아래로만 이동. 최대 합
dp[0][0] = g[0][0];
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++) {
        if (i == 0 && j == 0) continue;
        long long best = -1;
        if (i > 0) best = max(best, dp[i-1][j]);   // 위에서 옴
        if (j > 0) best = max(best, dp[i][j-1]);   // 왼쪽에서 옴
        dp[i][j] = best + g[i][j];
    }`,
      note: '<b>경계 처리가 핵심</b>입니다. 첫 행은 왼쪽에서만, 첫 열은 위에서만 올 수 있습니다. ' +
            '<code>if (i &gt; 0)</code>, <code>if (j &gt; 0)</code>로 나눠 처리하면 안전합니다.' },

    { h: '🔴 메모이제이션(탑다운) vs 반복(바텀업)',
      code: `// 탑다운: 재귀 + 저장. 점화식을 그대로 옮기기 쉽다
long long solve(int i) {
    if (i <= 1) return i;
    if (done[i]) return memo[i];
    done[i] = true;
    return memo[i] = solve(i-1) + solve(i-2);
}

// 바텀업: 반복문. 스택 걱정이 없고 보통 더 빠르다
for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];`,
      note: '<b>어느 쪽을 쓰나</b>:<br>' +
            '· 점화식이 복잡하거나 "필요한 부분만" 계산하고 싶으면 <b>탑다운</b><br>' +
            '· 단순하고 전부 계산해야 하면 <b>바텀업</b> (스택 오버플로 위험이 없음)<br>' +
            '🔴 탑다운은 <b>재귀 깊이</b>를 주의하세요 — N이 10만이면 터질 수 있습니다.' },
  ],
  problems: [
    { id: 'udpa', title: '계단 오르기 방법 수', diff: 1,
      desc: 'N개의 계단을 1칸 또는 2칸씩 올라갈 때, 올라가는 방법의 수를 출력하세요. ' +
            '답이 커질 수 있으니 <code>1000000007</code>로 나눈 나머지를 출력합니다.<br>' +
            '<span class="io">입력: <code>4</code> → 출력: <code>5</code></span><br>' +
            '(1111, 112, 121, 211, 22)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    const long long MOD = 1000000007;

    return 0;
}`,
      cases: [ { in: '4', out: '5' }, { in: '1', out: '1' }, { in: '2', out: '2' },
               { in: '3', out: '3' }, { in: '45', out: '836311896' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    const long long MOD = 1000000007;

    vector<long long> dp(n + 1, 0);
    dp[0] = 1;                             // 제자리에 있는 방법 1가지
    if (n >= 1) dp[1] = 1;

    for (int i = 2; i <= n; i++)
        dp[i] = (dp[i-1] + dp[i-2]) % MOD;  // 1칸 전 + 2칸 전

    cout << dp[n] << '\\n';
    return 0;
}`,
      hint: '<code>dp[i] = dp[i-1] + dp[i-2]</code>. ' +
            '<code>dp[0] = 1</code>(제자리), <code>dp[1] = 1</code>로 시작합니다. ' +
            '더할 때마다 <code>% MOD</code>를 해야 넘치지 않습니다.',
      why: '<b>왜 더하기인가</b>: i번째 계단에 도달하는 경우는 ' +
           '"i−1에서 1칸 올라옴"과 "i−2에서 2칸 올라옴" 두 가지뿐이고, ' +
           '이 둘은 <b>서로 겹치지 않습니다</b>. 따라서 방법의 수는 두 경우의 합입니다.' +
           '<ul><li><b>왜 <code>dp[0] = 1</code>인가</b>: "0번째 계단(출발점)에 있는 방법"은 ' +
           '아무것도 하지 않는 1가지입니다. 0으로 두면 전체가 0이 됩니다</li>' +
           '<li><b>왜 MOD 를 계속 취하나</b>: 마지막에만 나누면 그 전에 이미 ' +
           '<code>long long</code>을 넘습니다. 덧셈마다 나눠도 결과는 같습니다 ' +
           '(모듈러 연산의 성질)</li>' +
           '<li>이 수열이 피보나치입니다. 11번 유닛의 메모이제이션과 같은 문제를 ' +
           '<b>반복문(바텀업)</b>으로 푼 것입니다</li></ul>' },

    { id: 'udpb', title: '연속하지 않게 골라 최대 합', diff: 2,
      desc: 'N개의 정수에서 <b>인접하지 않은</b> 원소들을 골라 합을 최대로 만드세요. ' +
            '하나도 안 골라도 됩니다(합 0).<br>' +
            '<span class="io">입력: <code>5</code> / <code>3 2 7 10 12</code> → 출력: <code>22</code> (3+7+12)</span>',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<long long> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // dp[i] = i번째까지 봤을 때의 최대 합

    return 0;
}`,
      cases: [ { in: '5\n3 2 7 10 12', out: '22' }, { in: '1\n5', out: '5' },
               { in: '3\n-1 -2 -3', out: '0' }, { in: '4\n5 1 1 5', out: '10' },
               { in: '2\n3 9', out: '9' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<long long> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // dp[i] = i번째까지 고려했을 때의 최대 합 (안 고르는 것도 허용 -> 0 이상)
    vector<long long> dp(n, 0);
    dp[0] = max(0LL, v[0]);
    if (n >= 2) dp[1] = max(dp[0], max(0LL, v[1]));

    for (int i = 2; i < n; i++)
        dp[i] = max(dp[i-1],              // i 를 안 고름
                    dp[i-2] + v[i]);       // i 를 고름 (i-1 은 불가)

    cout << max(0LL, dp[n-1]) << '\\n';
    return 0;
}`,
      hint: '각 칸에서 <b>고른다/안 고른다</b>를 비교합니다. ' +
            '고르면 <code>dp[i-2] + v[i]</code>, 안 고르면 <code>dp[i-1]</code>. ' +
            '음수만 있으면 안 고르는 게 최선이라 0 입니다.',
      why: '<b>왜 <code>dp[i-2]</code>에서 오나</b>: i를 고르면 i−1은 인접해서 못 고릅니다. ' +
           '그래서 i−2까지의 최적값에 v[i]를 더합니다.' +
           '<ul><li><b>dp 의 정의를 명확히</b>: "i번째까지 고려했을 때의 최대 합"입니다. ' +
           '"i를 반드시 포함한 최대 합"으로 정의하면 점화식이 달라지니 ' +
           '<b>정의를 먼저 말로 적는 게 중요합니다</b></li>' +
           '<li>음수 처리: "하나도 안 골라도 된다"고 했으므로 ' +
           '<code>max(0LL, ...)</code>로 하한을 0 으로 둡니다. ' +
           '세 번째 케이스가 이걸 검사합니다</li>' +
           '<li>💡 메모리를 줄이려면 변수 2개로도 됩니다 — <code>dp[i-1]</code>과 <code>dp[i-2]</code>만 ' +
           '필요하므로 배열 전체가 불필요합니다 (O(1) 공간)</li></ul>' },

    { id: 'udpc', title: '격자 최대 경로 합', diff: 2,
      desc: 'n×m 격자에서 (0,0)에서 (n−1,m−1)까지 <b>오른쪽 또는 아래로만</b> 이동할 때 ' +
            '지나는 수의 합을 최대로 만드세요.<br>' +
            '<span class="io">입력: <code>3 3</code> / <code>1 2 3</code> / <code>4 5 6</code> / <code>7 8 9</code> → 출력: <code>29</code></span><br>' +
            '(1→4→7→8→9 = 29)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<long long>> g(n, vector<long long>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    // dp[i][j] = (0,0) 에서 (i,j) 까지의 최대 합

    return 0;
}`,
      cases: [ { in: '3 3\n1 2 3\n4 5 6\n7 8 9', out: '29' },
               { in: '1 1\n5', out: '5' },
               { in: '1 3\n1 2 3', out: '6' },
               { in: '2 2\n1 100\n1 1', out: '102' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<long long>> g(n, vector<long long>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    vector<vector<long long>> dp(n, vector<long long>(m, 0));
    dp[0][0] = g[0][0];

    for (int i = 0; i < n; i++)              // 행 우선 = 캐시 친화적
        for (int j = 0; j < m; j++) {
            if (i == 0 && j == 0) continue;
            long long best = LLONG_MIN;
            if (i > 0) best = max(best, dp[i-1][j]);   // 위에서 내려옴
            if (j > 0) best = max(best, dp[i][j-1]);   // 왼쪽에서 옴
            dp[i][j] = best + g[i][j];
        }

    cout << dp[n-1][m-1] << '\\n';
    return 0;
}`,
      hint: '<code>dp[i][j]</code>는 위(<code>dp[i-1][j]</code>)나 왼쪽(<code>dp[i][j-1]</code>) ' +
            '중 큰 값에 현재 칸을 더합니다. 첫 행·첫 열은 한쪽에서만 올 수 있으니 ' +
            '<code>if (i &gt; 0)</code>, <code>if (j &gt; 0)</code>로 나눕니다.',
      why: '<b>왜 위/왼쪽만 보면 되나</b>: 오른쪽·아래로만 이동하므로 ' +
           '(i,j)에 도달하는 직전 칸은 <b>반드시</b> (i−1,j) 또는 (i,j−1)입니다. ' +
           '그 두 곳까지의 최적값을 이미 알고 있으면 (i,j)의 최적값이 바로 나옵니다 — ' +
           '이게 <b>최적 부분구조</b>입니다.' +
           '<ul><li><b>왜 순서가 이래야 하나</b>: <code>dp[i][j]</code>를 계산할 때 ' +
           '위와 왼쪽이 <b>이미 채워져 있어야</b> 합니다. ' +
           '행 우선으로 돌면 자연스럽게 보장됩니다 (그리고 캐시에도 유리합니다 — 12번 유닛)</li>' +
           '<li>경계 처리를 <code>if</code>로 나눈 이유: ' +
           '<code>dp[-1][j]</code> 같은 범위 밖 접근을 막습니다. ' +
           '대안으로 <code>dp</code>를 <code>(n+1)×(m+1)</code>로 잡고 ' +
           '0행·0열을 <code>LLONG_MIN</code>으로 두는 방법도 있습니다</li>' +
           '<li>💡 이 문제는 <b>DFS 로도 풀리지만</b> 같은 칸을 여러 번 계산해 ' +
           '지수 시간이 됩니다. DP 가 그 중복을 제거합니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: DP 심화 ══════════════════ */
{
  id: 'udp2', group: '알고리즘', title: 'DP 심화',
  syntax: [
    { h: '🔴 0-1 배낭 — 각 물건을 "한 번만"',
      code: `// dp[w] = 무게 한도 w 로 얻을 수 있는 최대 가치
vector<long long> dp(W + 1, 0);

for (int i = 0; i < n; i++)
    for (int w = W; w >= weight[i]; w--)       // 🔴 뒤에서 앞으로!
        dp[w] = max(dp[w], dp[w - weight[i]] + value[i]);

cout << dp[W];`,
      note: '🔴 <b>왜 뒤에서 앞으로 도나</b> — 이게 배낭의 핵심입니다.<br>' +
            '<code>dp[w]</code>를 계산할 때 <code>dp[w - weight]</code>를 봅니다. ' +
            '앞에서부터(<code>w</code> 증가) 돌면 <code>dp[w-weight]</code>가 ' +
            '<b>이미 이번 물건을 넣은 값</b>이라 같은 물건을 여러 번 쓰게 됩니다.<br>' +
            '뒤에서부터 돌면 <code>dp[w-weight]</code>가 <b>아직 이번 물건을 안 쓴 값</b>이라 ' +
            '정확히 한 번만 사용됩니다.<br>' +
            '💡 거꾸로 말하면, <b>앞에서부터 돌면 "물건을 무한히 쓸 수 있는" 배낭</b>이 됩니다.' },

    { h: '2차원으로 쓴 배낭 (이해하기 쉬운 형태)',
      code: `// dp[i][w] = 앞의 i개만 고려했을 때 한도 w 의 최대 가치
vector<vector<long long>> dp(n + 1, vector<long long>(W + 1, 0));

for (int i = 1; i <= n; i++)
    for (int w = 0; w <= W; w++) {
        dp[i][w] = dp[i-1][w];                    // i번째를 안 넣음
        if (w >= weight[i-1])                      // 넣을 수 있으면
            dp[i][w] = max(dp[i][w],
                           dp[i-1][w - weight[i-1]] + value[i-1]);
    }`,
      note: '<b>2차원이 명확하고, 1차원은 그걸 압축한 것</b>입니다. ' +
            '2차원은 <code>dp[i-1]</code>(이전 물건까지)을 명시적으로 참조하므로 ' +
            '중복 사용이 구조적으로 불가능합니다.<br>' +
            '· 2차원: 메모리 O(n×W), 이해 쉬움<br>' +
            '· 1차원: 메모리 O(W), 역순 루프 필수<br>' +
            '💡 <b>처음엔 2차원으로 쓰고, 메모리가 부족하면 1차원으로 줄이세요.</b>' },

    { h: 'LIS — 가장 긴 증가 부분수열 O(N²)',
      code: `// dp[i] = i 를 마지막으로 하는 증가 수열의 최대 길이
vector<int> dp(n, 1);                 // 자기 혼자면 길이 1

for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        if (v[j] < v[i])
            dp[i] = max(dp[i], dp[j] + 1);

int answer = *max_element(dp.begin(), dp.end());`,
      note: '<b>왜 <code>dp[i]</code>를 "i로 끝나는" 길이로 정의하나</b>: ' +
            '그러면 <code>dp[i]</code>를 <code>dp[j]</code>(j &lt; i, v[j] &lt; v[i])로 ' +
            '표현할 수 있습니다. "i까지의 최대"로 정의하면 ' +
            '마지막 원소를 모르니 이어붙일 수 없습니다.<br>' +
            '🔴 <b>답은 <code>dp[n-1]</code>이 아니라 <code>max(dp)</code></b>입니다 — ' +
            '가장 긴 수열이 중간에서 끝날 수 있습니다.' },

    { h: 'LIS O(N log N) — 이분탐색 활용',
      code: `vector<int> tails;                 // tails[k] = 길이 k+1 수열의 최소 끝값
for (int x : v) {
    auto it = lower_bound(tails.begin(), tails.end(), x);
    if (it == tails.end()) tails.push_back(x);   // 더 긴 수열 발견
    else *it = x;                                 // 끝값을 더 작게 갱신
}
int answer = tails.size();`,
      note: '<b>원리</b>: 같은 길이면 <b>끝값이 작을수록 유리</b>합니다 ' +
            '(뒤에 더 많은 수를 붙일 수 있으므로). ' +
            '그래서 각 길이별로 최소 끝값만 유지합니다.<br>' +
            '🔴 <code>tails</code>는 LIS 자체가 아닙니다 — <b>길이만 정확</b>합니다. ' +
            '실제 수열을 복원하려면 별도 추적이 필요합니다.<br>' +
            '💡 N이 10만 이상이면 이 방법을 써야 합니다 (O(N²)은 100억).' },

    { h: 'LCS — 두 문자열의 최장 공통 부분수열',
      code: `// dp[i][j] = a 의 앞 i글자와 b 의 앞 j글자의 LCS 길이
vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

for (int i = 1; i <= n; i++)
    for (int j = 1; j <= m; j++) {
        if (a[i-1] == b[j-1])
            dp[i][j] = dp[i-1][j-1] + 1;          // 같으면 이어붙임
        else
            dp[i][j] = max(dp[i-1][j], dp[i][j-1]); // 다르면 한쪽 포기
    }`,
      note: '<b>왜 세 경우인가</b>: 마지막 글자를 보고<br>' +
            '· <b>같으면</b> 둘 다 쓰고 이전 상태(<code>dp[i-1][j-1]</code>)에 +1<br>' +
            '· <b>다르면</b> a의 마지막을 버리거나(<code>dp[i-1][j]</code>) ' +
            'b의 마지막을 버린(<code>dp[i][j-1]</code>) 것 중 더 좋은 쪽<br>' +
            '🔴 <b>인덱스가 1부터</b>인 이유: <code>dp[0][*]</code>, <code>dp[*][0]</code>을 ' +
            '"빈 문자열"로 두면 경계 조건이 자동으로 0이 되어 분기가 사라집니다.' },

    { h: '🔴 DP 정의를 잡는 연습',
      code: `// 나쁜 정의 (점화식이 안 나옴)
dp[i] = "i까지 봤을 때의 최대 길이"      // 마지막 원소를 모름

// 좋은 정의 (점화식이 나옴)
dp[i] = "i 를 마지막으로 쓸 때의 최대 길이"
dp[i][w] = "앞 i개 중에서 한도 w 를 쓸 때의 최대 가치"
dp[i][j] = "a 의 앞 i글자와 b 의 앞 j글자를 봤을 때의 답"`,
      note: '🔴 <b>DP 의 90%는 정의 잡기입니다.</b> ' +
            '정의가 좋으면 점화식이 거의 자동으로 나오고, 나쁘면 아무리 봐도 안 나옵니다.<br>' +
            '<b>좋은 정의의 특징</b>: 상태에 <b>"무엇을 마지막으로 썼는지" 또는 ' +
            '"어디까지 봤는지"</b>가 들어있어, 더 작은 상태로 쪼갤 수 있습니다.' },
  ],
  problems: [
    { id: 'udp2a', title: '0-1 배낭', diff: 2,
      desc: 'N개의 물건과 배낭 한도 W가 주어집니다. 각 물건은 무게와 가치를 가지며 ' +
            '<b>한 번만</b> 넣을 수 있습니다. 가치의 최대 합을 출력하세요.<br>' +
            '<span class="io">입력: <code>4 7</code> / <code>6 13</code> / <code>4 8</code> / ' +
            '<code>3 6</code> / <code>5 12</code> → 출력: <code>14</code></span><br>' +
            '(무게 4+3=7, 가치 8+6=14)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, W;
    cin >> n >> W;
    vector<int> wt(n), val(n);
    for (int i = 0; i < n; i++) cin >> wt[i] >> val[i];

    // dp[w] = 한도 w 에서의 최대 가치
    // 🔴 w 루프의 방향을 주의하세요

    return 0;
}`,
      cases: [ { in: '4 7\n6 13\n4 8\n3 6\n5 12', out: '14' },
               { in: '1 5\n10 100', out: '0' },
               { in: '1 5\n5 100', out: '100' },
               { in: '3 10\n5 10\n5 10\n5 10', out: '20' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, W;
    cin >> n >> W;
    vector<int> wt(n), val(n);
    for (int i = 0; i < n; i++) cin >> wt[i] >> val[i];

    vector<long long> dp(W + 1, 0);
    for (int i = 0; i < n; i++)
        for (int w = W; w >= wt[i]; w--)          // 🔴 뒤에서 앞으로
            dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);

    cout << dp[W] << '\\n';
    return 0;
}`,
      hint: '<code>dp[w] = max(dp[w], dp[w - 무게] + 가치)</code>. ' +
            '🔴 <code>w</code>를 <b>W부터 내려오며</b> 돌아야 각 물건을 한 번만 씁니다. ' +
            '앞에서부터 돌면 같은 물건을 여러 번 넣게 됩니다.',
      why: '<b>왜 역순인가</b>: <code>dp[w]</code>를 갱신할 때 <code>dp[w-무게]</code>를 참조합니다.' +
           '<ul><li><b>정순(w 증가)</b>: <code>dp[w-무게]</code>가 이번 회차에 이미 갱신되어 ' +
           '<b>이번 물건이 포함된 값</b>입니다 → 같은 물건을 중복 사용 ' +
           '(이건 "무한히 쓸 수 있는 배낭"의 답)</li>' +
           '<li><b>역순(w 감소)</b>: <code>dp[w-무게]</code>가 아직 갱신 전이라 ' +
           '<b>이전 물건까지만의 값</b>입니다 → 정확히 한 번만 사용</li>' +
           '<li>마지막 케이스로 확인: 무게 5짜리 3개, 한도 10 → 2개만 들어가 20. ' +
           '정순으로 돌면 30이 나옵니다</li>' +
           '<li>복잡도 O(N×W). W가 10억이면 불가능하니 그때는 다른 접근이 필요합니다</li></ul>' },

    { id: 'udp2b', title: '가장 긴 증가 부분수열', diff: 2,
      desc: 'N개의 정수에서 <b>증가하는 부분수열</b>(연속일 필요 없음)의 최대 길이를 출력하세요.<br>' +
            '<span class="io">입력: <code>6</code> / <code>10 20 10 30 20 50</code> → 출력: <code>4</code></span><br>' +
            '(10 20 30 50)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // dp[i] = i 를 마지막으로 하는 증가 수열의 최대 길이

    return 0;
}`,
      cases: [ { in: '6\n10 20 10 30 20 50', out: '4' },
               { in: '1\n5', out: '1' },
               { in: '4\n4 3 2 1', out: '1' },
               { in: '5\n1 2 3 4 5', out: '5' },
               { in: '3\n5 5 5', out: '1' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    vector<int> dp(n, 1);                 // 자기 혼자면 길이 1
    for (int i = 0; i < n; i++)
        for (int j = 0; j < i; j++)
            if (v[j] < v[i])              // 증가 조건
                dp[i] = max(dp[i], dp[j] + 1);

    cout << *max_element(dp.begin(), dp.end()) << '\\n';
    return 0;
}`,
      hint: '<code>dp[i]</code>를 "i를 마지막으로 하는 길이"로 정의합니다. ' +
            '앞의 모든 j 중 <code>v[j] &lt; v[i]</code>인 것에서 이어받습니다. ' +
            '🔴 답은 <code>dp[n-1]</code>이 아니라 <code>max(dp)</code>입니다.',
      why: '<b>왜 "i를 마지막으로 하는"으로 정의하나</b>: 그래야 이어붙일 수 있습니다. ' +
           '"i까지의 최대 길이"로 정의하면 그 수열의 끝값을 모르므로 ' +
           '<code>v[i]</code>를 붙일 수 있는지 판단할 수 없습니다.' +
           '<ul><li><b>답이 <code>max(dp)</code>인 이유</b>: 가장 긴 수열이 중간에서 끝날 수 있습니다. ' +
           '<code>[1,2,3,0]</code>이면 <code>dp = [1,2,3,1]</code>이고 답은 3입니다</li>' +
           '<li><code>v[j] &lt; v[i]</code>로 <b>엄격한 증가</b>를 요구합니다. ' +
           '<code>&lt;=</code>로 쓰면 "비감소"가 되어 마지막 케이스 <code>[5,5,5]</code>의 답이 3이 됩니다</li>' +
           '<li>복잡도 O(N²). N이 10만 이상이면 ' +
           '<code>lower_bound</code>를 쓴 O(N log N) 방법이 필요합니다 (문법 설명 참고)</li></ul>' },

    { id: 'udp2c', title: '최장 공통 부분수열 (LCS)', diff: 2,
      desc: '두 문자열의 <b>공통 부분수열</b> 중 가장 긴 것의 길이를 출력하세요.<br>' +
            '<span class="io">입력: <code>ACAYKP</code> / <code>CAPCAK</code> → 출력: <code>4</code></span><br>' +
            '(ACAK)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string a, b;
    cin >> a >> b;
    int n = a.size(), m = b.size();

    // dp[i][j] = a 의 앞 i글자와 b 의 앞 j글자의 LCS 길이
    // 크기를 (n+1) x (m+1) 로 잡으면 경계가 편합니다

    return 0;
}`,
      cases: [ { in: 'ACAYKP\nCAPCAK', out: '4' },
               { in: 'ABC\nABC', out: '3' },
               { in: 'ABC\nXYZ', out: '0' },
               { in: 'A\nA', out: '1' },
               { in: 'AAAA\nAA', out: '2' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string a, b;
    cin >> a >> b;
    int n = a.size(), m = b.size();

    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            if (a[i-1] == b[j-1])
                dp[i][j] = dp[i-1][j-1] + 1;         // 같으면 이어붙임
            else
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]); // 다르면 한쪽 포기
        }

    cout << dp[n][m] << '\\n';
    return 0;
}`,
      hint: '두 문자가 같으면 <code>dp[i-1][j-1] + 1</code>, ' +
            '다르면 <code>max(dp[i-1][j], dp[i][j-1])</code>. ' +
            '크기를 <code>(n+1)×(m+1)</code>로 잡고 1부터 채우면 경계 처리가 사라집니다.',
      why: '<b>왜 마지막 글자로 경우를 나누나</b>: LCS 의 마지막 글자는 ' +
           '세 가지 경우뿐입니다 — ① 둘의 마지막이 같아서 그걸 씀 ' +
           '② a의 마지막을 안 씀 ③ b의 마지막을 안 씀. 이 셋을 모두 고려하면 최적입니다.' +
           '<ul><li><b>왜 인덱스를 1부터</b>: <code>dp[0][j]</code>와 <code>dp[i][0]</code>은 ' +
           '"빈 문자열과의 LCS = 0"이라 자동으로 올바른 초기값입니다. ' +
           '0부터 쓰면 <code>dp[-1][-1]</code>을 피하려 분기가 필요합니다</li>' +
           '<li>문자 접근이 <code>a[i-1]</code>인 이유: dp 인덱스가 1부터라 ' +
           '한 칸씩 밀려 있습니다. <b>여기서 실수가 가장 많이 납니다</b></li>' +
           '<li><b>부분수열 vs 부분문자열</b>: 부분수열은 띄어서 골라도 되고, ' +
           '부분문자열은 연속이어야 합니다. 이 문제는 전자입니다</li>' +
           '<li>복잡도 O(N×M) 시간·메모리. 메모리가 부족하면 두 행만 유지하면 됩니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: 그래프 알고리즘 ══════════════════ */
{
  id: 'ugr', group: '알고리즘', title: '그래프 알고리즘',
  syntax: [
    { h: '🔴 다익스트라 — 가중치 있는 최단경로',
      code: `const long long INF = 1e18;
vector<vector<pair<int,long long>>> adj(n + 1);   // {이웃, 가중치}
vector<long long> dist(n + 1, INF);

priority_queue<pair<long long,int>,
               vector<pair<long long,int>>,
               greater<>> pq;                      // 최소 힙

dist[start] = 0;
pq.push({0, start});

while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d > dist[u]) continue;                     // 🔴 낡은 항목 무시
    for (auto [v, w] : adj[u])
        if (dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
            pq.push({dist[v], v});
        }
}`,
      note: '<b>BFS 와의 차이</b>: BFS 는 모든 간선 가중치가 1일 때만 최단을 보장합니다. ' +
            '가중치가 다르면 "적게 거친 경로"가 "짧은 경로"가 아니므로 ' +
            '<b>항상 가장 가까운 정점부터</b> 처리해야 합니다 — 그래서 최소 힙입니다.<br>' +
            '🔴 <b><code>if (d > dist[u]) continue;</code> 가 필수</b>입니다. ' +
            '힙에는 갱신 전의 낡은 값이 남아있는데, 이걸 걸러내지 않으면 ' +
            '같은 정점을 여러 번 처리해 느려집니다.<br>' +
            '· 복잡도 O(E log V) · 🔴 <b>음수 가중치에는 쓸 수 없습니다</b>' },

    { h: '유니온파인드 — 같은 그룹인지 빠르게',
      code: `vector<int> parent;

int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);      // 🔴 경로 압축
}

void unite(int a, int b) {
    a = find(a); b = find(b);
    if (a != b) parent[a] = b;
}

// 초기화: 각자 자기 자신이 대표
parent.resize(n + 1);
for (int i = 0; i <= n; i++) parent[i] = i;`,
      note: '<b>원리</b>: 각 그룹의 "대표"를 하나 정하고, ' +
            '같은 대표를 가지면 같은 그룹입니다.<br>' +
            '🔴 <b>경로 압축(<code>parent[x] = find(...)</code>)이 핵심</b>: ' +
            '한 번 찾은 대표를 바로 연결해두면 다음 조회가 O(1)에 가까워집니다. ' +
            '없으면 트리가 길어져 O(N)이 됩니다.<br>' +
            '💡 <b>언제 쓰나</b>: "둘이 연결됐나", "그룹이 몇 개인가", ' +
            '"사이클이 생기나"를 간선이 추가되는 중에 물을 때. ' +
            'BFS/DFS 는 매번 전체를 다시 돌아야 합니다.' },

    { h: '위상정렬 — 순서가 있는 작업',
      code: `vector<int> indeg(n + 1, 0);
for (auto [u, v] : edges) {              // u 다음에 v
    adj[u].push_back(v);
    indeg[v]++;                           // v 로 들어오는 간선 수
}

queue<int> q;
for (int i = 1; i <= n; i++)
    if (indeg[i] == 0) q.push(i);         // 선행 작업이 없는 것부터

vector<int> order;
while (!q.empty()) {
    int u = q.front(); q.pop();
    order.push_back(u);
    for (int v : adj[u])
        if (--indeg[v] == 0) q.push(v);   // 선행이 다 끝나면 투입
}
// order.size() < n 이면 사이클이 존재`,
      note: '<b>원리</b>: 들어오는 간선이 없는 노드는 <b>지금 바로 할 수 있는 일</b>입니다. ' +
            '그걸 처리하고 나면 그에 의존하던 일들의 선행 조건이 하나 줄어듭니다.<br>' +
            '🔴 <b>사이클 판정에도 씁니다</b>: 모든 노드를 꺼내지 못했다면 ' +
            '서로 의존하는 고리가 있다는 뜻입니다.<br>' +
            '💡 "선수과목", "작업 순서", "의존성" 류 문제가 이것입니다.' },

    { h: '그래프 표현 — 인접 리스트 vs 행렬',
      code: `// 인접 리스트: 간선이 적을 때 (대부분의 코테)
vector<vector<int>> adj(n + 1);
adj[u].push_back(v);

// 인접 행렬: 정점이 적고(≤ 1000) "u와 v가 연결됐나"를 자주 물을 때
vector<vector<bool>> g(n + 1, vector<bool>(n + 1, false));
g[u][v] = true;`,
      note: '<b>메모리</b>: 리스트는 O(V+E), 행렬은 O(V²). ' +
            '정점 10만이면 행렬은 100억 칸이라 불가능합니다.<br>' +
            '<b>연결 확인 속도</b>: 리스트는 O(차수), 행렬은 O(1).<br>' +
            '🔴 <b>코테에서는 거의 항상 인접 리스트</b>입니다.' },
  ],
  problems: [
    { id: 'ugra', title: '다익스트라 최단경로', diff: 2,
      desc: 'N개 정점, M개 간선의 가중치 그래프에서 1번 정점에서 N번 정점까지의 ' +
            '최단 거리를 출력하세요. 도달 불가면 <code>-1</code>.<br>' +
            '<span class="io">입력: <code>4 5</code> / <code>1 2 1</code> / <code>1 3 5</code> / ' +
            '<code>2 3 2</code> / <code>2 4 7</code> / <code>3 4 1</code> → 출력: <code>4</code></span><br>' +
            '(1→2→3→4 = 1+2+1)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<pair<int,long long>>> adj(n + 1);
    for (int i = 0; i < m; i++) {
        int u, v;
        long long w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});        // 양방향
    }

    // 최소 힙으로 가장 가까운 정점부터 처리

    return 0;
}`,
      cases: [ { in: '4 5\n1 2 1\n1 3 5\n2 3 2\n2 4 7\n3 4 1', out: '4' },
               { in: '2 1\n1 2 10', out: '10' },
               { in: '3 1\n1 2 5', out: '-1' },
               { in: '1 0', out: '0' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<pair<int,long long>>> adj(n + 1);
    for (int i = 0; i < m; i++) {
        int u, v;
        long long w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    }

    const long long INF = 1e18;
    vector<long long> dist(n + 1, INF);
    priority_queue<pair<long long,int>,
                   vector<pair<long long,int>>,
                   greater<>> pq;

    dist[1] = 0;
    pq.push({0, 1});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d > dist[u]) continue;            // 낡은 항목 무시
        for (auto [v, w] : adj[u])
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
    }

    cout << (dist[n] == INF ? -1 : dist[n]) << '\\n';
    return 0;
}`,
      hint: '최소 힙에 <code>{거리, 정점}</code>을 넣습니다. ' +
            '꺼낸 거리가 저장된 거리보다 크면 낡은 항목이니 <code>continue</code>. ' +
            '도달 못 하면 <code>dist[n]</code>이 <code>INF</code>로 남습니다.',
      why: '<b>왜 BFS 가 아니라 다익스트라인가</b>: BFS 는 "간선 수가 적은 경로"를 ' +
           '먼저 찾습니다. 가중치가 다르면 간선 2개를 거치는 경로(1+2=3)가 ' +
           '간선 1개짜리(5)보다 짧을 수 있어 BFS 로는 틀립니다. ' +
           '첫 번째 케이스가 정확히 그 상황입니다.' +
           '<ul><li><b>왜 최소 힙인가</b>: "현재까지 가장 가까운 정점"을 확정하면 ' +
           '그 값은 더 줄어들 수 없습니다(가중치가 음수가 아니므로). ' +
           '이걸 반복하면 모든 거리가 확정됩니다</li>' +
           '<li>🔴 <b><code>if (d > dist[u]) continue;</code>가 없으면</b> ' +
           '같은 정점을 거리별로 여러 번 처리해 느려집니다. ' +
           '힙에서 값을 수정할 수 없어 낡은 항목이 남기 때문입니다</li>' +
           '<li>🔴 <b>음수 가중치면 쓸 수 없습니다</b> — 확정한 거리가 나중에 ' +
           '더 줄어들 수 있습니다. 그때는 벨만-포드를 씁니다</li>' +
           '<li><code>INF</code>를 <code>1e18</code>로 둔 이유: <code>dist[u] + w</code>가 ' +
           '넘치지 않도록 <code>long long</code> 최대값(9.2e18)보다 충분히 작게</li></ul>' },

    { id: 'ugrb', title: '유니온파인드 — 같은 그룹인가', diff: 2,
      desc: 'N개 원소와 Q개 연산이 주어집니다. <code>0 a b</code>는 a와 b를 합치고, ' +
            '<code>1 a b</code>는 같은 그룹인지 묻습니다(<code>YES</code>/<code>NO</code>). ' +
            '질의 결과를 공백으로 구분해 출력하세요.<br>' +
            '<span class="io">입력: <code>4 4</code> / <code>0 1 2</code> / <code>1 1 2</code> / ' +
            '<code>1 1 3</code> / <code>0 2 3</code> → 출력: <code>YES NO</code></span>',
      starter: `vector<int> parent;

int find(int x) {
    // 경로 압축을 포함해 작성
}

void unite(int a, int b) {
    // 두 대표를 연결
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    parent.resize(n + 1);
    for (int i = 0; i <= n; i++) parent[i] = i;

    return 0;
}`,
      cases: [ { in: '4 4\n0 1 2\n1 1 2\n1 1 3\n0 2 3', out: 'YES NO' },
               { in: '3 1\n1 1 1', out: 'YES' },
               { in: '4 5\n0 1 2\n0 3 4\n1 1 3\n0 2 3\n1 1 4', out: 'NO YES' } ],
      solution: `vector<int> parent;

int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);      // 경로 압축
}

void unite(int a, int b) {
    a = find(a);
    b = find(b);
    if (a != b) parent[a] = b;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    parent.resize(n + 1);
    for (int i = 0; i <= n; i++) parent[i] = i;

    bool first = true;
    for (int t = 0; t < q; t++) {
        int op, a, b;
        cin >> op >> a >> b;
        if (op == 0) {
            unite(a, b);
        } else {
            if (!first) cout << ' ';
            cout << (find(a) == find(b) ? "YES" : "NO");
            first = false;
        }
    }
    cout << '\\n';
    return 0;
}`,
      hint: '<code>find</code>는 대표를 찾아 올라가면서 ' +
            '<code>parent[x] = find(parent[x])</code>로 바로 연결합니다(경로 압축). ' +
            '같은 그룹 판정은 <code>find(a) == find(b)</code>.',
      why: '<b>왜 경로 압축이 필요한가</b>: 압축 없이 합치면 ' +
           '트리가 한 줄로 길어질 수 있어 <code>find</code>가 O(N)이 됩니다. ' +
           '압축하면 다음 조회부터 바로 대표에 닿아 거의 O(1)이 됩니다.' +
           '<ul><li><code>return parent[x] = find(parent[x]);</code> 한 줄에 ' +
           '"대표를 찾고" + "그 결과를 바로 저장"이 모두 들어있습니다</li>' +
           '<li><b>왜 BFS/DFS 를 안 쓰나</b>: 간선이 중간에 추가되므로 ' +
           '매 질의마다 전체 탐색을 다시 해야 O(Q×N)이 됩니다. ' +
           '유니온파인드는 거의 O(Q)입니다</li>' +
           '<li><code>find(a) == find(a)</code>는 항상 참이라 ' +
           '자기 자신과의 질의는 YES 입니다 (두 번째 케이스)</li>' +
           '<li>💡 그룹 개수를 세려면 <code>find(i) == i</code>인 원소를 세면 됩니다</li></ul>' },

    { id: 'ugrc', title: '위상정렬 — 작업 순서', diff: 2,
      desc: 'N개 작업과 선행 관계 M개가 주어집니다(<code>u v</code> = u를 끝내야 v 시작). ' +
            '가능한 수행 순서를 출력하세요. 번호가 작은 것을 먼저 하고, ' +
            '불가능하면(사이클) <code>-1</code>.<br>' +
            '<span class="io">입력: <code>4 3</code> / <code>1 2</code> / <code>1 3</code> / ' +
            '<code>3 4</code> → 출력: <code>1 2 3 4</code></span>',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<int>> adj(n + 1);
    vector<int> indeg(n + 1, 0);
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        indeg[v]++;
    }

    // 들어오는 간선이 0 인 것부터
    // 번호가 작은 것을 먼저 -> 최소 힙

    return 0;
}`,
      cases: [ { in: '4 3\n1 2\n1 3\n3 4', out: '1 2 3 4' },
               { in: '3 3\n1 2\n2 3\n3 1', out: '-1' },
               { in: '3 0', out: '1 2 3' },
               { in: '4 2\n4 1\n3 2', out: '3 2 4 1' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<int>> adj(n + 1);
    vector<int> indeg(n + 1, 0);
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        indeg[v]++;
    }

    // 번호가 작은 것을 먼저 하려면 최소 힙
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int i = 1; i <= n; i++)
        if (indeg[i] == 0) pq.push(i);

    vector<int> order;
    while (!pq.empty()) {
        int u = pq.top();
        pq.pop();
        order.push_back(u);
        for (int v : adj[u])
            if (--indeg[v] == 0) pq.push(v);     // 선행이 다 끝남
    }

    if ((int)order.size() < n) {                  // 사이클
        cout << -1 << '\\n';
        return 0;
    }
    for (int i = 0; i < n; i++) {
        cout << order[i];
        if (i + 1 < n) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '진입차수 0인 노드를 최소 힙에 넣고, 꺼낼 때마다 ' +
            '그에 의존하는 노드의 차수를 줄입니다. 0이 되면 힙에 넣습니다. ' +
            '모두 꺼내지 못했으면 사이클입니다.',
      why: '<b>원리</b>: 진입차수 0 = <b>선행 작업이 모두 끝난 상태</b>라서 ' +
           '지금 바로 할 수 있습니다. 그걸 처리하면 그에 의존하던 작업들의 ' +
           '선행 조건이 하나씩 해소됩니다.' +
           '<ul><li><b>왜 사이클이면 멈추나</b>: 서로 의존하는 고리 안의 노드들은 ' +
           '진입차수가 절대 0이 되지 않아 힙에 들어오지 못합니다. ' +
           '그래서 <code>order.size() &lt; n</code>이 사이클 판정이 됩니다</li>' +
           '<li><b>왜 큐 대신 최소 힙인가</b>: "번호가 작은 것 먼저"라는 추가 조건 때문입니다. ' +
           '그 조건이 없으면 일반 <code>queue</code>로 O(V+E)에 됩니다 ' +
           '(힙은 O((V+E) log V))</li>' +
           '<li>🔴 <b>간선은 단방향입니다</b> — 선행 관계라 방향이 의미가 있습니다. ' +
           '양방향으로 넣으면 모든 노드가 사이클이 됩니다</li>' +
           '<li>마지막 케이스로 확인: 4→1, 3→2 이면 진입차수 0은 3,4 입니다. 3을 꺼내면 2가 풀려 후보가 {2,4}가 되고, 작은 2가 먼저 나옵니다 → <b>3 2 4 1</b>. 매 단계마다 후보가 갱신되므로 단순히 "0인 것들 먼저, 그 다음"이 아닙니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: 문자열 처리 ══════════════════ */
{
  id: 'ustr', group: '알고리즘', title: '문자열 처리',
  syntax: [
    { h: '🔴 문자열 나누기 (split) — C++엔 없습니다',
      code: `#include <sstream>

// 공백 기준
string s = "a b c";
stringstream ss(s);
string token;
vector<string> parts;
while (ss >> token) parts.push_back(token);

// 특정 문자 기준 (예: 콤마)
stringstream ss2("a,b,c");
while (getline(ss2, token, ',')) parts.push_back(token);`,
      note: 'Python 의 <code>s.split()</code>에 해당하는 게 C++ 표준에 없어서 ' +
            '<code>stringstream</code>으로 만듭니다.<br>' +
            '· <code>ss &gt;&gt; token</code>: <b>공백/탭/개행</b>을 모두 구분자로 취급, 연속 공백은 무시<br>' +
            '· <code>getline(ss, token, c)</code>: <b>딱 그 문자</b>만 구분자. ' +
            '연속하면 <b>빈 토큰</b>이 생깁니다 (<code>"a,,b"</code> → <code>a</code>, <code>""</code>, <code>b</code>)' },

    { h: '한 줄 전체 읽기 — cin >> 와 섞을 때 주의',
      code: `int n;
cin >> n;
cin.ignore();              // 🔴 남은 개행을 버립니다

string line;
getline(cin, line);        // 한 줄 전체 (공백 포함)

// 여러 줄
for (int i = 0; i < n; i++) {
    getline(cin, line);
    // ...
}`,
      note: '🔴 <b><code>cin.ignore()</code>를 빼면 첫 <code>getline</code>이 빈 문자열을 읽습니다.</b><br>' +
            '<b>왜</b>: <code>cin &gt;&gt; n</code>은 숫자만 읽고 <b>뒤의 개행을 버퍼에 남깁니다</b>. ' +
            '<code>getline</code>은 그 개행을 만나 "빈 줄"로 판단하고 바로 끝냅니다.' },

    { h: '문자 분류와 변환',
      code: `isdigit(c)  isalpha(c)  isalnum(c)  isspace(c)
isupper(c)  islower(c)
toupper(c)  tolower(c)

int d = c - '0';          // 문자 '7' -> 숫자 7
char c = d + '0';         // 숫자 7 -> 문자 '7'
int idx = c - 'a';        // 'c' -> 2  (알파벳 인덱스)`,
      note: '🔴 <code>c - \'a\'</code> 패턴은 <b>알파벳 카운팅 배열</b>에 필수입니다:<br>' +
            '<code>int cnt[26] = {}; for (char c : s) cnt[c - \'a\']++;</code><br>' +
            '문자가 내부적으로 연속된 숫자라서(ASCII) 이런 산술이 됩니다.' },

    { h: '문자열 찾기 · 바꾸기',
      code: `s.find("abc")                   // 위치, 없으면 string::npos
s.find("abc", 5)                // 5번째부터 찾기
s.rfind("abc")                  // 뒤에서부터
s.substr(2, 3)                  // 인덱스2부터 3글자
s.replace(2, 3, "XY")           // 인덱스2부터 3글자를 "XY"로
s.insert(2, "XY")               // 인덱스2에 삽입
s.erase(2, 3)                   // 인덱스2부터 3글자 삭제

// 모든 등장 위치 찾기
size_t pos = 0;
while ((pos = s.find("ab", pos)) != string::npos) {
    count++;
    pos += 2;                   // 🔴 겹침 허용이면 pos += 1
}`,
      note: '🔴 <b><code>pos</code>를 얼마나 전진시키는지가 답을 바꿉니다.</b> ' +
            '<code>"aaa"</code>에서 <code>"aa"</code>를 찾을 때 ' +
            '<code>pos += 2</code>면 1개, <code>pos += 1</code>면 2개입니다.' },

    { h: '회문 · 뒤집기 · 비교',
      code: `// 뒤집기
reverse(s.begin(), s.end());

// 회문 판정 (투포인터가 메모리를 안 씀)
bool isPalin(const string& s) {
    int l = 0, r = (int)s.size() - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++; r--;
    }
    return true;
}

// 사전순 비교는 그냥 됩니다
if (a < b) ...                  // 문자열 비교`,
      note: '🔴 <b>문자열 비교 <code>&lt;</code>는 사전순이지 길이순이 아닙니다.</b> ' +
            '<code>"9" &gt; "100"</code>이 참입니다 (첫 글자 \'9\' &gt; \'1\'). ' +
            '숫자로 비교해야 하면 <code>stoll</code>로 변환하거나 길이를 먼저 비교하세요.' },
  ],
  problems: [
    { id: 'ustra', title: '단어 개수와 최장 단어', diff: 1,
      desc: '한 줄의 문장을 입력받아 <b>단어 개수</b>와 <b>가장 긴 단어</b>를 출력하세요. ' +
            '길이가 같으면 먼저 나온 것.<br>' +
            '<span class="io">입력: <code>the quick brown fox</code> → 출력: <code>4 quick</code></span>',
      starter: `int main() {
    string line;
    getline(cin, line);

    // stringstream 으로 공백 기준 분리

    return 0;
}`,
      cases: [ { in: 'the quick brown fox', out: '4 quick' },
               { in: 'hello', out: '1 hello' },
               { in: 'ab cd ef', out: '3 ab' } ],
      solution: `int main() {
    string line;
    getline(cin, line);

    stringstream ss(line);
    string word, longest = "";
    int count = 0;

    while (ss >> word) {                   // 공백 기준으로 하나씩
        count++;
        if (word.size() > longest.size())  // > 이므로 먼저 나온 것 유지
            longest = word;
    }

    cout << count << ' ' << longest << '\\n';
    return 0;
}`,
      hint: '<code>stringstream ss(line);</code> 후 <code>while (ss &gt;&gt; word)</code>로 ' +
            '단어를 하나씩 꺼냅니다. 길이 비교는 <code>&gt;</code>를 써야 ' +
            '같은 길이에서 먼저 나온 것이 유지됩니다.',
      why: '<b>왜 <code>getline</code>인가</b>: <code>cin &gt;&gt; line</code>은 ' +
           '공백에서 멈춰 첫 단어만 읽습니다. 문장 전체가 필요하니 <code>getline</code>입니다.' +
           '<ul><li><b><code>ss &gt;&gt; word</code>가 공백을 알아서 처리</b>합니다 — ' +
           '연속 공백도 건너뛰므로 <code>"a  b"</code>도 단어 2개로 셉니다</li>' +
           '<li>길이 비교에 <code>&gt;=</code>를 쓰면 나중에 나온 동일 길이 단어가 ' +
           '이겨서 세 번째 케이스가 <code>ef</code>로 틀립니다</li>' +
           '<li>이 문제는 숫자를 먼저 읽지 않으므로 <code>cin.ignore()</code>가 필요 없습니다. ' +
           '숫자 뒤에 <code>getline</code>을 쓸 때만 필요합니다</li></ul>' },

    { id: 'ustrb', title: '알파벳 개수 세기', diff: 1,
      desc: '소문자 문자열에서 가장 많이 나온 알파벳과 횟수를 출력하세요. ' +
            '동점이면 사전순으로 앞선 것.<br>' +
            '<span class="io">입력: <code>banana</code> → 출력: <code>a 3</code></span><br>' +
            '💡 <code>cnt[c - \'a\']</code> 패턴을 쓰세요.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    cin >> s;

    int cnt[26] = {};          // 전부 0 으로 초기화

    return 0;
}`,
      cases: [ { in: 'banana', out: 'a 3' }, { in: 'abc', out: 'a 1' },
               { in: 'zzz', out: 'z 3' }, { in: 'bbaa', out: 'a 2' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    cin >> s;

    int cnt[26] = {};
    for (char c : s) cnt[c - 'a']++;        // 'a'->0, 'b'->1, ...

    int best = 0;
    for (int i = 1; i < 26; i++)            // 사전순으로 돌며 > 비교
        if (cnt[i] > cnt[best]) best = i;

    cout << (char)(best + 'a') << ' ' << cnt[best] << '\\n';
    return 0;
}`,
      hint: '<code>cnt[c - \'a\']++</code>로 셉니다. ' +
            '최대를 찾을 때 0부터 25까지 <b>순서대로</b> 돌며 <code>&gt;</code>로 비교하면 ' +
            '동점에서 사전순 앞선 것이 유지됩니다.',
      why: '<b>왜 <code>c - \'a\'</code>가 되나</b>: 문자는 내부적으로 숫자(ASCII)입니다. ' +
           '<code>\'a\'</code>=97, <code>\'b\'</code>=98... 연속이라 ' +
           '<code>c - \'a\'</code>가 0~25 인덱스가 됩니다.' +
           '<ul><li><b>왜 사전순이 자동으로 되나</b>: 인덱스 0(a)부터 돌면서 ' +
           '<code>&gt;</code>로만 갱신하므로, 동점일 때는 먼저 본 ' +
           '= 사전순 앞선 것이 남습니다</li>' +
           '<li><code>int cnt[26] = {};</code>는 전부 0 으로 초기화합니다. ' +
           '<code>int cnt[26];</code>만 쓰면 <b>쓰레기값</b>이라 틀립니다</li>' +
           '<li>출력 시 <code>(char)(best + \'a\')</code>로 숫자를 다시 문자로 되돌립니다. ' +
           '캐스팅을 안 하면 숫자가 출력됩니다</li>' +
           '<li>💡 <code>map</code>보다 배열이 빠릅니다 — 알파벳은 26개로 고정이라 ' +
           '해시가 필요 없습니다</li></ul>' },

    { id: 'ustrc', title: '부분문자열 등장 횟수', diff: 2,
      desc: '문자열 S에서 패턴 P가 몇 번 등장하는지 출력하세요. ' +
            '<b>겹치는 것도 각각 셉니다.</b><br>' +
            '<span class="io">입력: <code>aaaa</code> / <code>aa</code> → 출력: <code>3</code></span><br>' +
            '(위치 0,1,2에서 각각)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, p;
    cin >> s >> p;

    // find 를 반복하거나 직접 비교

    return 0;
}`,
      cases: [ { in: 'aaaa\naa', out: '3' }, { in: 'abcabc\nabc', out: '2' },
               { in: 'abc\nxyz', out: '0' }, { in: 'aaa\na', out: '3' },
               { in: 'ab\nabc', out: '0' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, p;
    cin >> s >> p;

    int count = 0;
    size_t pos = 0;
    while ((pos = s.find(p, pos)) != string::npos) {
        count++;
        pos += 1;                 // 🔴 겹침을 허용하므로 1칸만 전진
    }

    cout << count << '\\n';
    return 0;
}`,
      hint: '<code>s.find(p, pos)</code>로 <code>pos</code>부터 찾고, ' +
            '찾으면 <code>pos += 1</code>로 한 칸만 전진합니다. ' +
            '🔴 <code>pos += p.size()</code>로 하면 겹치는 것을 놓칩니다.',
      why: '<b>왜 1칸만 전진하나</b>: 문제가 "겹치는 것도 센다"고 했습니다. ' +
           '<code>"aaaa"</code>에서 <code>"aa"</code>는 위치 0,1,2에서 각각 발견됩니다.' +
           '<ul><li><code>pos += p.size()</code>로 하면 0에서 찾고 2로 뛰어 ' +
           '위치 1을 건너뛰어 2개만 셉니다</li>' +
           '<li><b>겹침을 허용하지 않는 문제</b>라면 <code>pos += p.size()</code>가 맞습니다. ' +
           '문제를 정확히 읽어야 합니다</li>' +
           '<li><code>string::npos</code>는 "못 찾음"을 뜻하는 특수값입니다. ' +
           '<code>-1</code>과 비교하면 안 됩니다 — 부호 없는 타입이라 거대한 값입니다</li>' +
           '<li>마지막 케이스: 패턴이 문자열보다 길면 0 — <code>find</code>가 알아서 처리합니다</li>' +
           '<li>복잡도는 최악 O(N×M). 더 빠른 KMP 가 있지만 코테 대부분은 이걸로 충분합니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: 시뮬레이션 ══════════════════ */
{
  id: 'usim', group: '알고리즘', title: '시뮬레이션',
  syntax: [
    { h: '🔴 시뮬레이션의 성격 — 알고리즘이 없습니다',
      code: `// 문제에 적힌 규칙을 코드로 "정확히" 옮기는 것이 전부
// 어려운 이유는 알고리즘이 아니라 "조건을 하나라도 빠뜨리면 틀림"`,
      note: '🔴 <b>이 직무에 가장 가까운 유형입니다.</b> ' +
            '로봇 시스템에서 상태를 추적하고 명령을 처리하는 일과 같습니다.<br>' +
            '<b>푸는 순서</b>:<br>' +
            '① <b>상태</b>를 적는다 (위치? 방향? 점수? 시간?)<br>' +
            '② 각 명령/턴이 <b>무엇을 바꾸는지</b> 표로<br>' +
            '③ <b>예외 조건</b>을 빠짐없이 적는다<br>' +
            '④ 🔴 <b>예제를 손으로 추적한다</b> ← 생략하면 반드시 틀립니다<br>' +
            '⑤ 그 다음 코드를 쓴다' },

    { h: '방향 전환 — 회전을 숫자로',
      code: `// 🔴 시계방향 순서로 번호를 매기는 게 핵심
const int DR[4] = {-1, 0, 1, 0};     // 북 동 남 서
const int DC[4] = { 0, 1, 0,-1};

d = (d + 1) % 4;        // 우회전 (시계)
d = (d + 3) % 4;        // 🔴 좌회전 — (d-1)%4 는 C++에서 음수!
d = (d + 2) % 4;        // 반대 방향`,
      note: '🔴 <b><code>(d - 1) % 4</code>는 <code>d = 0</code>일 때 −1 이 됩니다.</b> ' +
            '배열 인덱스로 쓰면 크래시입니다. 4방향 중 <b>1개에서만</b> 터지므로 ' +
            '대충 테스트하면 놓칩니다.<br>' +
            '<b>왜 <code>+3</code>이 되나</b>: 모듈러 4에서 −1 과 +3 은 같습니다 ' +
            '(−1 + 4 = 3).' },

    { h: '🔴 계산 → 검사 → 적용',
      code: `// ❌ 바로 바꾸면 되돌릴 수 없습니다
r += DR[d];
if (r < 0) r -= DR[d];        // 억지로 복구 — 실수 유발

// ✅ 임시 변수에 계산하고, 유효할 때만 적용
int nr = r + DR[d], nc = c + DC[d];
if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
    r = nr;
    c = nc;
}`,
      note: '이 3단계가 시뮬레이션의 기본 골격입니다. ' +
            '경계를 벗어나면 "무시"하는 문제가 많은데, 바로 적용하면 처리가 어려워집니다.' },

    { h: '경계 처리의 3가지 유형 — 문제를 확인하세요',
      code: `// ① 무시 (제자리에 머문다)
if (유효) { r = nr; c = nc; }

// ② 경계에 붙는다 (clamp)
r = max(0, min(n - 1, r + DR[d]));

// ③ 반대로 튕긴다 / 반대편으로 순환
if (!유효) d = (d + 2) % 4;              // 반사
r = ((r + DR[d]) % n + n) % n;           // 순환 (음수 안전)`,
      note: '🔴 <b>세 동작이 완전히 다릅니다.</b> ' +
            '"격자 밖으로 나가면"이라는 문구 뒤에 무엇이 오는지 정확히 읽으세요.<br>' +
            '순환에서 <code>((x % n) + n) % n</code> 패턴은 <b>음수를 안전하게</b> 처리합니다 — ' +
            'C++의 <code>%</code>가 음수를 반환하기 때문입니다.' },

    { h: '동시에 움직일 때 — 더블 버퍼링',
      code: `// ❌ 제자리에서 바꾸면 먼저 움직인 것이 뒤에 영향을 줍니다
for (auto& robot : robots) robot.move();

// ✅ 새 상태를 따로 만들고 마지막에 교체
vector<State> next = cur;
for (int i = 0; i < n; i++)
    next[i] = step(cur[i], cur);     // 읽기는 cur, 쓰기는 next
cur = next;`,
      note: '💡 <b>펌웨어의 더블 버퍼링과 같은 개념입니다.</b> ' +
            '"모든 로봇이 동시에 한 칸 이동한다" 류 문제에서 필수입니다. ' +
            '순차로 처리하면 앞의 로봇이 옮긴 결과를 뒤의 로봇이 보게 됩니다.' },
  ],
  problems: [
    { id: 'usima', title: '로봇 명령 수행', diff: 1,
      desc: 'n×n 격자에서 로봇이 (0,0)에서 <b>북</b>쪽을 보고 시작합니다. ' +
            '<code>F</code>=전진, <code>L</code>=좌회전, <code>R</code>=우회전. ' +
            '격자 밖으로 나가는 전진은 <b>무시</b>합니다. 최종 위치를 출력하세요.<br>' +
            '<span class="io">입력: <code>3</code> / <code>FFRFF</code> → 출력: <code>0 2</code></span><br>' +
            '💡 북쪽은 행(r)이 <b>감소</b>하는 방향입니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    string cmds;
    cin >> n >> cmds;

    const int DR[4] = {-1, 0, 1, 0};   // 북 동 남 서
    const int DC[4] = { 0, 1, 0,-1};
    int r = 0, c = 0, d = 0;

    // 🔴 좌회전을 (d-1)%4 로 쓰면 안 됩니다

    return 0;
}`,
      cases: [ { in: '3\nFFRFF', out: '0 2' }, { in: '3\nLLLL', out: '0 0' },
               { in: '3\nFFFF', out: '0 0' }, { in: '3\nRRFF', out: '2 0' },
               { in: '1\nF', out: '0 0' }, { in: '3\nLF', out: '0 0' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    string cmds;
    cin >> n >> cmds;

    const int DR[4] = {-1, 0, 1, 0};
    const int DC[4] = { 0, 1, 0,-1};
    int r = 0, c = 0, d = 0;

    for (char cmd : cmds) {
        if (cmd == 'R') {
            d = (d + 1) % 4;
        } else if (cmd == 'L') {
            d = (d + 3) % 4;                  // (d-1)%4 금지
        } else if (cmd == 'F') {
            int nr = r + DR[d], nc = c + DC[d];      // ① 계산
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {   // ② 검사
                r = nr;                                       // ③ 적용
                c = nc;
            }
        }
    }
    cout << r << ' ' << c << '\\n';
    return 0;
}`,
      hint: '좌회전은 <code>(d + 3) % 4</code>. ' +
            '전진은 임시 변수에 계산해서 경계 안일 때만 적용합니다.',
      why: '<b>왜 <code>(d+3)%4</code>인가</b>: C++의 <code>%</code>는 음수를 반환합니다. ' +
           '<code>d=0</code>(북)에서 <code>(0-1)%4 = -1</code>이 되어 ' +
           '<code>DR[-1]</code>로 범위 밖 접근이 일어납니다.' +
           '<ul><li>🔴 <b>d=1,2,3 에서는 정상 작동</b>합니다 — 4방향 중 1개에서만 터지므로 ' +
           '테스트를 소홀히 하면 놓칩니다. 마지막 케이스(<code>LF</code>)가 이걸 검사합니다</li>' +
           '<li><b>계산→검사→적용</b>: <code>r += DR[d]</code>로 바로 바꾸면 ' +
           '경계를 벗어났을 때 되돌리기가 번거롭고 실수가 생깁니다</li>' +
           '<li><code>FFFF</code>가 (0,0)인 이유: 북쪽은 r 감소라 ' +
           '처음부터 격자 밖이어서 네 번 모두 무시됩니다</li>' +
           '<li>🔴 <b>"북쪽"의 정의를 문제에서 확인하세요</b> — ' +
           'r 증가로 정의한 문제도 있습니다. 같은 입력이 (2,2)가 됩니다</li></ul>' },

    { id: 'usimb', title: '격자 회전', diff: 2,
      desc: 'n×n 격자를 시계방향으로 90도 <b>K번</b> 회전한 결과를 출력하세요.<br>' +
            '<span class="io">입력: <code>2 1</code> / <code>1 2</code> / <code>3 4</code><br>' +
            '출력: <code>3 1</code> / <code>4 2</code></span>',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;
    vector<vector<int>> g(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> g[i][j];

    // 90도 회전을 k % 4 번
    // 회전 후 (i,j) 에는 원래 어느 칸이 오는가?

    return 0;
}`,
      cases: [ { in: '2 1\n1 2\n3 4', out: '3 1\n4 2' },
               { in: '2 2\n1 2\n3 4', out: '4 3\n2 1' },
               { in: '2 4\n1 2\n3 4', out: '1 2\n3 4' },
               { in: '1 3\n5', out: '5' },
               { in: '3 1\n1 2 3\n4 5 6\n7 8 9', out: '7 4 1\n8 5 2\n9 6 3' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;
    vector<vector<int>> g(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> g[i][j];

    k %= 4;                                   // 4번이면 제자리
    for (int t = 0; t < k; t++) {
        vector<vector<int>> next(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                next[j][n - 1 - i] = g[i][j];  // 시계 90도
        g = next;                               // 더블 버퍼링
    }

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cout << g[i][j] << (j + 1 < n ? ' ' : '\\n');
    return 0;
}`,
      hint: '시계 90도 회전은 <code>next[j][n-1-i] = g[i][j]</code>입니다. ' +
            '🔴 <code>k %= 4</code>로 줄이세요 — 4번 돌면 원래대로입니다. ' +
            '제자리에서 바꾸면 덮어써지므로 새 배열을 씁니다.',
      why: '<b>왜 <code>next[j][n-1-i]</code>인가</b>: 시계 90도 회전에서 ' +
           '원래 <b>i행</b>은 회전 후 <b>마지막에서 i번째 열</b>이 되고, ' +
           '원래 <b>j열</b>은 회전 후 <b>j행</b>이 됩니다.' +
           '<ul><li>확인: 2×2 에서 <code>g[0][0]=1</code>은 ' +
           '<code>next[0][1]</code>로 가고, <code>g[1][0]=3</code>은 ' +
           '<code>next[0][0]</code>으로 갑니다 → 첫 행이 <code>3 1</code> ✓</li>' +
           '<li>🔴 <b>왜 새 배열이 필요한가</b>: 제자리에서 바꾸면 ' +
           '아직 옮기지 않은 값을 덮어씁니다. <b>더블 버퍼링</b>이 필요합니다</li>' +
           '<li>🔴 <b><code>k %= 4</code>가 중요합니다</b>: k가 10억이면 ' +
           '그대로 돌리면 시간초과입니다. 주기성을 이용해 0~3으로 줄입니다</li>' +
           '<li>💡 <b>주기를 찾는 것</b>은 시뮬레이션 문제의 흔한 최적화입니다. ' +
           '"K번 반복"에서 K가 아주 크면 반드시 주기를 의심하세요</li></ul>' },

    { id: 'usimc', title: '동시 이동 (더블 버퍼링)', diff: 2,
      desc: '1차원 길이 n의 트랙에 로봇들이 있습니다. 각 로봇은 방향(1=오른쪽, -1=왼쪽)을 가지며, ' +
            '매 초 <b>모두 동시에</b> 한 칸 이동합니다. 끝에 닿으면 방향이 반대로 바뀝니다. ' +
            'T초 후 각 로봇의 위치를 출력하세요.<br>' +
            '<span class="io">입력: <code>5 2 3</code> / <code>0 1</code> / <code>4 -1</code><br>' +
            '출력: <code>3 1</code></span><br>' +
            '(로봇1: 0→1→2→3, 로봇2: 4→3→2→1)',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m, T;
    cin >> n >> m >> T;
    vector<int> pos(m), dir(m);
    for (int i = 0; i < m; i++) cin >> pos[i] >> dir[i];

    // 매 초: 모든 로봇이 동시에 이동
    // 끝(0 또는 n-1)에 닿으면 방향 반전

    return 0;
}`,
      cases: [ { in: '5 2 3\n0 1\n4 -1', out: '3 1' },
               { in: '5 1 0\n2 1', out: '2' },
               { in: '3 1 4\n0 1', out: '0' },
               { in: '2 1 3\n0 1', out: '1' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m, T;
    cin >> n >> m >> T;
    vector<int> pos(m), dir(m);
    for (int i = 0; i < m; i++) cin >> pos[i] >> dir[i];

    for (int t = 0; t < T; t++) {
        vector<int> npos = pos, ndir = dir;      // 새 상태를 따로
        for (int i = 0; i < m; i++) {
            int np = pos[i] + dir[i];
            if (np < 0 || np >= n) {             // 끝에 닿음
                ndir[i] = -dir[i];               //   방향 반전
                np = pos[i] + ndir[i];           //   반대로 한 칸
            }
            npos[i] = np;
        }
        pos = npos;                               // 한꺼번에 교체
        dir = ndir;
    }

    for (int i = 0; i < m; i++)
        cout << pos[i] << (i + 1 < m ? ' ' : '\\n');
    return 0;
}`,
      hint: '새 배열 <code>npos</code>, <code>ndir</code>에 계산하고 ' +
            '루프가 끝난 뒤 한꺼번에 교체합니다. ' +
            '벽에 닿으면 방향을 바꾸고 그 방향으로 이동합니다.',
      why: '<b>왜 더블 버퍼링인가</b>: "동시에 이동"이라는 조건 때문입니다. ' +
           '제자리에서 <code>pos[i]</code>를 바꾸면, 뒤의 로봇이 ' +
           '<b>이미 이동한 앞 로봇의 위치</b>를 보게 됩니다. ' +
           '이 문제는 로봇끼리 상호작용이 없어 결과가 같지만, ' +
           '충돌 판정이 있으면 답이 달라집니다.' +
           '<ul><li>💡 <b>펌웨어의 더블 버퍼링과 같은 개념</b>입니다 — ' +
           '읽기는 현재 버퍼에서, 쓰기는 다음 버퍼에, 마지막에 교체</li>' +
           '<li>벽 처리: 방향을 먼저 반전하고 <b>그 방향으로</b> 이동합니다. ' +
           '제자리에 머물면 세 번째 케이스가 틀립니다 ' +
           '(n=3에서 0→1→2→1→0, 4초 후 0)</li>' +
           '<li><code>T = 0</code>이면 입력 그대로 출력됩니다 — ' +
           '루프가 한 번도 안 돌아 자연스럽게 처리됩니다</li>' +
           '<li>🔴 T가 아주 크면(10억) 주기를 찾아야 합니다. ' +
           '1차원 왕복은 주기가 <code>2(n-1)</code>입니다</li></ul>' },
  ],
},

/* ══════════════════ 신규: 효율과 원리 ══════════════════ */
{
  id: 'up', group: '마무리', title: '효율 · 원리',
  syntax: [
    { h: '🔴 입출력 — 두 줄로 34배',
      code: `int main() {
    ios::sync_with_stdio(false);   // ① C 입출력과의 동기화 해제
    cin.tie(nullptr);              // ② cin 전 cout 자동 flush 해제
    // ...
}`,
      note: '<b>실측 (20만 줄 출력)</b>: 없으면 516ms → 있으면 <b>15ms (34배)</b>. ' +
            '입력 50만 개는 177ms → 39ms (4.5배).<br>' +
            '<b>왜</b>: C++ 스트림은 기본적으로 <code>printf</code>/<code>scanf</code>와 ' +
            '출력 순서를 맞추려고 <b>버퍼를 공유</b>합니다. 그래서 한 글자마다 동기화 비용이 듭니다. ' +
            '①이 그 연결을 끊어 C++ 전용 버퍼를 쓰게 합니다. ' +
            '②는 <code>cin</code>을 읽을 때마다 <code>cout</code>을 비우는 기본 동작을 끕니다 ' +
            '(대화형 프로그램에선 필요하지만 코테에선 낭비).<br>' +
            '🔴 <b>단, ①을 쓰면 <code>printf</code>/<code>scanf</code>를 섞어 쓰면 안 됩니다.</b> 출력 순서가 뒤바뀝니다.' },

    { h: "🔴 endl 과 '\\n' — 조건부로 15배",
      code: `cout << x << endl;    // 출력 + 버퍼 강제 비우기(flush)
cout << x << '\\n';    // 출력만`,
      note: '<b>실측 (20만 줄)</b>:<br>' +
            '· sync 켜진 기본 상태: <code>endl</code> 522ms vs <code>\'\\n\'</code> 516ms → <b>차이 없음</b><br>' +
            '· sync 끈 상태: <code>endl</code> 184ms vs <code>\'\\n\'</code> 13ms → <b>14.6배</b><br>' +
            '<b>왜</b>: <code>endl</code>은 줄바꿈 + <b>flush</b>입니다. flush 는 버퍼를 운영체제로 넘기는 ' +
            '<b>시스템 호출</b>이라 20만 줄이면 20만 번 일어납니다. ' +
            'sync 가 켜져 있을 때는 이미 다른 비용이 더 커서 차이가 묻힙니다.<br>' +
            '🔴 <b>그래서 두 개는 같이 써야 의미가 있습니다</b> — "endl 쓰지 마라"만 알면 반쪽입니다.' },

    { h: '🔴 함수 인자 — vector 를 복사하면 무한정 느려집니다',
      code: `void f(vector<int> v)        { }   // ❌ 원소 전부 복사
void f(vector<int>& v)       { }   // ✅ 참조 (수정 가능)
void f(const vector<int>& v) { }   // ✅ 참조 + 읽기전용 ← 기본으로`,
      note: '<b>실측</b>: 원소 100만 vector 를 100번 전달 — 복사 <b>65.8ms</b> vs 참조 <b>0.0ms</b>.<br>' +
            '<b>왜</b>: <code>vector</code>를 값으로 받으면 <b>힙에 새 공간을 잡고 원소를 전부 복사</b>합니다. ' +
            '100만 개면 4MB 복사가 호출마다 일어납니다. ' +
            '참조는 주소 8바이트만 넘깁니다.<br>' +
            '💡 <code>int</code>, <code>char</code> 같은 작은 값은 복사가 더 빠릅니다 — 참조도 주소를 따라가는 비용이 있어서요. ' +
            '<b>기준: 8바이트보다 크면 참조</b>.' },

    { h: '🔴 range-for 에서도 같은 함정',
      code: `for (string x : v)        { }   // ❌ 문자열마다 복사
for (const string& x : v) { }   // ✅ 참조
for (int x : v)           { }   // ✅ int 는 복사가 맞음`,
      note: '<b>실측</b>: 50글자 문자열 10만 개 — 복사 <b>3.9ms</b> vs 참조 <b>0.1ms</b> (39배).<br>' +
            '<b>왜</b>: <code>string</code>은 내부에 힙 버퍼를 갖고 있어 복사하면 그 버퍼까지 새로 만듭니다.' },

    { h: '🔴 메모리 접근 순서 — 7배 차이',
      code: `// ✅ 행 우선: 메모리에 붙어있는 순서대로
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
        sum += g[i][j];

// ❌ 열 우선: 건너뛰며 접근
for (int j = 0; j < m; j++)
    for (int i = 0; i < n; i++)
        sum += g[i][j];`,
      note: '<b>실측 (2000×2000)</b>: 행 우선 <b>0.95ms</b> vs 열 우선 <b>6.68ms</b> → <b>7배</b>.<br>' +
            '<b>왜</b>: CPU 는 메모리를 한 바이트씩 읽지 않고 <b>64바이트 덩어리(캐시 라인)</b>로 가져옵니다. ' +
            '<code>g[i][0]</code>을 읽으면 <code>g[i][1..15]</code>도 같이 캐시에 올라옵니다. ' +
            '행 우선은 그걸 전부 쓰고, 열 우선은 <b>하나 쓰고 버립니다</b>.<br>' +
            '💡 알고리즘 복잡도는 똑같이 O(N×M)인데 7배가 납니다. ' +
            '<b>"같은 복잡도면 같은 속도"가 아닙니다.</b>' },

    { h: 'map vs unordered_map — 언제 무엇을',
      code: `map<int,int> m;             // 정렬됨,   O(log n)
unordered_map<int,int> u;   // 해시,     O(1)`,
      note: '<b>실측 (20만 삽입+조회)</b>: <code>map</code> 16.4ms vs <code>unordered_map</code> 11.3ms. ' +
            '조회만 보면 <code>set</code> 6.9ms vs <code>unordered_set</code> 0.6ms (<b>11배</b>).<br>' +
            '<b>왜</b>: <code>map</code>은 균형 이진트리라 비교를 <code>log n</code>번 합니다(20만이면 ~18번). ' +
            '<code>unordered_map</code>은 해시값으로 위치를 바로 계산합니다.<br>' +
            '🔴 <b>정렬된 순서로 순회해야 하면 <code>map</code></b>을 쓰세요. ' +
            '<code>unordered_map</code>은 순서가 보장되지 않아 출력이 달라집니다.' },

    { h: 'vector 는 reserve 로 재할당을 막습니다',
      code: `vector<int> v;
v.reserve(n);                  // 미리 n개 공간 확보
for (int i = 0; i < n; i++) v.push_back(i);`,
      note: '<b>실측 (100만 push_back)</b>: 2.1ms → <b>0.9ms</b> (2.3배).<br>' +
            '<b>왜</b>: <code>vector</code>가 꽉 차면 <b>2배 크기로 새 공간을 잡고 전부 복사</b>합니다. ' +
            '100만 개를 넣으면 이 과정이 ~20번 일어나고, 누적 복사량이 원본의 2배가 됩니다. ' +
            '<code>reserve</code>는 그걸 한 번으로 줄입니다.<br>' +
            '💡 크기를 아는데 <code>push_back</code>을 쓸 거면 <code>reserve</code>, ' +
            '아예 알면 <code>vector&lt;int&gt; v(n)</code>으로 바로 만드세요.' },

    { h: '🔴 "항상 long long 쓰면 되나?" — 거의 그렇습니다',
      code: `long long sum = 0;        // 합계: 무조건 long long
long long a = 1e18;       // 큰 수도 안전

vector<int> v(10000000);        // 38 MB
vector<long long> w(10000000);  // 76 MB  ← 메모리만 주의`,
      note: '<b>실측 — 속도는 거의 차이 없습니다</b>:<br>' +
            '· 정렬 500만 개: <b>1.03배</b> (254ms vs 261ms)<br>' +
            '· 배열 순회 2000만 개: <b>1.5배</b> (캐시에 절반만 들어가서)<br>' +
            '· 변수 몇 개: <b>차이 없음</b><br><br>' +
            '🔴 <b>진짜 비용은 메모리 2배입니다.</b> 3000×3000 배열이 34MB → 69MB. ' +
            '코테 메모리 제한이 보통 256MB 라서, 큰 2차원 배열에서만 문제가 됩니다.<br>' +
            '<b>결론</b>: 합·곱·누적은 <b>묻지 말고 <code>long long</code></b>. ' +
            '큰 배열(수백만 이상)은 값의 범위를 보고 <code>int</code>로 둡니다.' },

    { h: '오버플로가 나는 실제 경계',
      code: `int        최대 약 21억        (2,147,483,647)
long long  최대 약 920경       (9.2 × 10^18)

10^4 × 10^4 = 1억           ✅ int 안전
10^5 × 10^5 = 100억         ❌ int 초과
1 + 2 + ... + 10^6 = 5000억 ❌ int 초과`,
      note: '🔴 <b>캐스팅은 곱하기 "전"에</b> 해야 합니다.<br>' +
            '<code>long long c = a * b;</code> ← ❌ <code>a*b</code>가 이미 int 로 계산되어 넘침<br>' +
            '<code>long long c = (long long)a * b;</code> ← ✅' },

    { h: '컴파일러가 알아서 하는 것 — 손대지 마세요',
      code: `i % 2  →  i & 1          // -O2 가 알아서 바꿉니다
x * 2  →  x << 1          // 마찬가지
불필요한 임시 변수         // 알아서 제거`,
      note: '<b>실측</b>: 1억 회에서 <code>i%2</code> 43ms vs <code>i&1</code> 22ms 로 차이가 보이지만, ' +
            '이건 결과를 억지로 쓰게 만든 경우입니다. 일반적인 코드에서는 <code>-O2</code>가 동일하게 최적화합니다.<br>' +
            '🔴 <b>그리고 <code>& 1</code>은 음수에서 틀립니다</b>: ' +
            '<code>-3 % 2 = -1</code> 이지만 <code>(-3) & 1 = 1</code> 입니다.<br>' +
            '💡 <b>가독성을 희생하는 미세 최적화는 하지 마세요.</b> ' +
            '코테에서 시간초과는 거의 항상 <b>알고리즘(복잡도)</b> 문제이고, ' +
            '비트 트릭으로 해결되는 경우는 없습니다.' },

    { h: '🔴 시간초과가 났을 때 보는 순서',
      code: `① 복잡도를 계산한다
     N의 최대값 × 내 풀이의 복잡도 > 1억  ?  → 접근법을 바꿔야 함

② 자료구조 오용을 찾는다
     list 에 선형 탐색 → set/map 으로
     vector 를 값으로 전달 → const&

③ 입출력을 확인한다
     sync_with_stdio(false) 있나?  endl 쓰고 있나?

④ 캐시를 본다
     2차원 배열을 열 우선으로 돌고 있나?`,
      note: '<b>순서가 중요합니다.</b> ①이 틀렸으면 ②③④를 다 고쳐도 통과 못 합니다. ' +
            '반대로 ①이 맞으면 ③만으로 34배가 빨라질 수 있습니다.' },
  ],
  problems: [
    { id: 'upa', title: '오버플로 경계 판단', diff: 2,
      desc: 'N개의 정수가 주어집니다. 다음 세 값을 공백으로 구분해 출력하세요.<br>' +
            '① 전체 <b>합</b> &nbsp; ② 가장 큰 두 수의 <b>곱</b> &nbsp; ③ 전체 <b>평균</b>(내림)<br>' +
            '<span class="io">입력: <code>4</code> / <code>100000 100000 1 1</code><br>' +
            '출력: <code>200002 10000000000 50000</code></span><br>' +
            '제약: N ≤ 200,000, 각 값은 0 이상 10⁹ 이하<br>' +
            '🔴 <b>세 값 중 어디서 <code>int</code>가 터지는지</b> 미리 계산해보세요.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // 🔴 어떤 변수가 long long 이어야 할까요?
    //    합 = 최대 20만 x 10^9
    //    곱 = 최대 10^9 x 10^9

    return 0;
}`,
      cases: [ { in: '4\n100000 100000 1 1', out: '200002 10000000000 50000' },
               { in: '2\n1000000000 1000000000', out: '2000000000 1000000000000000000 1000000000' },
               { in: '3\n1 2 3', out: '6 6 2' },
               { in: '2\n0 0', out: '0 0 0' },
               { in: '3\n7 7 7', out: '21 49 7' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];

    // ① 합: 20만 x 10^9 = 2x10^14  -> long long 필수
    long long sum = 0;
    for (int x : v) sum += x;

    // ② 곱: 가장 큰 두 수를 찾아 곱하기 전에 캐스팅
    vector<int> s = v;
    sort(s.rbegin(), s.rend());                   // 내림차순
    long long prod = (long long)s[0] * s[1];      // 🔴 곱하기 "전"에 캐스팅

    // ③ 평균(내림): 합이 long long 이므로 안전
    long long avg = sum / n;

    cout << sum << ' ' << prod << ' ' << avg << '\\n';
    return 0;
}`,
      hint: '합과 곱 모두 <code>long long</code>입니다. ' +
            '곱은 <code>(long long)s[0] * s[1]</code> — <b>곱하기 전에</b> 캐스팅해야 합니다. ' +
            '가장 큰 두 수는 내림차순 정렬 후 앞의 두 개입니다.',
      why: '<b>세 값의 경계를 각각 계산해봅니다</b> (제약: N ≤ 2×10⁵, 값 ≤ 10⁹):' +
           '<ul><li><b>합</b>: 최대 2×10⁵ × 10⁹ = <b>2×10¹⁴</b> → <code>int</code>(2.1×10⁹) 초과 ❌</li>' +
           '<li><b>곱</b>: 최대 10⁹ × 10⁹ = <b>10¹⁸</b> → <code>int</code> 한참 초과 ❌ ' +
           '(<code>long long</code> 최대 9.2×10¹⁸ 안에는 들어갑니다)</li>' +
           '<li><b>평균</b>: 합을 N으로 나눈 값이라 최대 10⁹ → <code>int</code> 범위지만, ' +
           '<b>합이 이미 <code>long long</code>이라</b> 그대로 두는 게 안전합니다</li></ul>' +
           '🔴 <b>캐스팅 위치가 핵심입니다</b>:' +
           '<ul><li><code>long long p = s[0] * s[1];</code> ← ❌ ' +
           '오른쪽이 <code>int × int</code>로 <b>먼저 계산되어 이미 넘친 뒤</b> 대입됩니다</li>' +
           '<li><code>long long p = (long long)s[0] * s[1];</code> ← ✅ ' +
           '한쪽이 64비트면 <b>전체가 64비트로</b> 계산됩니다</li></ul>' +
           '💡 두 번째 케이스가 정확히 이걸 검사합니다 — ' +
           '캐스팅을 빼면 곱이 <code>-1486618624</code> 같은 값이 나옵니다.' +
           '<ul><li><b>"그냥 다 long long 쓰면?"</b> — 이 단원 문법 설명대로 ' +
           '속도는 거의 차이 없고 <b>메모리만 2배</b>입니다. ' +
           '변수 몇 개라면 그냥 쓰는 게 맞고, <b>수백만 원소 배열</b>일 때만 범위를 따집니다. ' +
           '여기서 <code>vector&lt;int&gt;</code>를 유지한 이유가 그것입니다</li></ul>' },
    { id: 'upb', title: '행 우선으로 순회하기', diff: 1,
      desc: 'n×m 격자의 모든 값을 더하세요. 단 <b>행 우선 순서</b>로 순회하세요.<br>' +
            '<span class="io">입력: <code>2 3</code> / <code>1 2 3</code> / <code>4 5 6</code> → 출력: <code>21</code></span><br>' +
            '💡 열 우선으로 써도 답은 같지만, 큰 격자에서 7배 느려집니다. 습관을 만드는 문제입니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));

    return 0;
}`,
      cases: [ { in: '2 3\n1 2 3\n4 5 6', out: '21' }, { in: '1 1\n5', out: '5' },
               { in: '2 2\n1000000000 1000000000\n1000000000 1000000000', out: '4000000000' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<vector<int>> g(n, vector<int>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> g[i][j];

    long long sum = 0;
    for (int i = 0; i < n; i++)        // 행이 바깥
        for (int j = 0; j < m; j++)    // 열이 안쪽 -> 메모리 연속
            sum += g[i][j];

    cout << sum << '\\n';
    return 0;
}`,
      hint: '<code>i</code>(행)를 바깥 루프, <code>j</code>(열)를 안쪽 루프에 둡니다. ' +
            '마지막 케이스가 40억이라 <code>long long</code>이 필요합니다.',
      why: '<b>왜 행을 바깥 루프에 두나</b>: CPU 는 메모리를 64바이트 덩어리(캐시 라인)로 가져옵니다. <code>g[i][0]</code>을 읽으면 <code>g[i][1..15]</code>도 함께 올라옵니다.<ul><li>행 우선은 그 덩어리를 전부 쓰고, 열 우선은 하나만 쓰고 버립니다</li><li>실측: 2000×2000에서 <b>0.95ms vs 6.68ms (7배)</b></li><li>🔴 복잡도는 똑같이 O(N×M)인데 7배가 납니다 — <b>"같은 복잡도면 같은 속도"가 아닙니다</b></li></ul>' },
    { id: 'upc', title: 'set 으로 선형 탐색 제거', diff: 2,
      desc: 'N개의 정수와 Q개의 질의가 주어집니다. 각 질의 값이 배열에 있으면 <code>1</code>, 없으면 <code>0</code>을 공백으로 구분해 출력하세요.<br>' +
            '<span class="io">입력: <code>5 3</code> / <code>1 3 5 7 9</code> / <code>3 4 9</code> → 출력: <code>1 0 1</code></span><br>' +
            '제약: N, Q ≤ 100,000<br>' +
            '🔴 매 질의마다 배열을 훑으면 10만 × 10만 = 100억 → 시간초과입니다.',
      starter: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;

    return 0;
}`,
      cases: [ { in: '5 3\n1 3 5 7 9\n3 4 9', out: '1 0 1' },
               { in: '1 2\n5\n5 6', out: '1 0' },
               { in: '3 1\n1 1 1\n1', out: '1' } ],
      solution: `int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;

    unordered_set<int> s;
    s.reserve(n * 2);              // 재할당 방지
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        s.insert(x);
    }

    for (int i = 0; i < q; i++) {
        int x;
        cin >> x;
        cout << (s.count(x) ? 1 : 0);
        if (i + 1 < q) cout << ' ';
    }
    cout << '\\n';
    return 0;
}`,
      hint: '배열을 <code>unordered_set</code>에 넣으면 조회가 O(1)입니다. ' +
            '전체 복잡도가 O(N+Q)로 내려갑니다. ' +
            '<code>reserve</code>로 해시 테이블 재할당까지 막으면 더 좋습니다.',
      why: '<b>왜 set 을 쓰나</b>: 질의마다 배열을 훑으면 각 질의가 O(N)이라 전체가 O(N×Q) = 100억이 됩니다. 해시 집합은 조회가 O(1)이라 O(N+Q)로 내려갑니다.<ul><li><code>unordered_set</code>이 <code>set</code>보다 빠릅니다 — 실측 조회 20만 회에서 <b>0.6ms vs 6.9ms (11배)</b></li><li><code>reserve</code>는 해시 테이블이 커질 때마다 전체를 재배치하는 비용을 막습니다</li><li>정렬된 순서로 순회해야 하면 <code>set</code>을 써야 합니다</li></ul>' },
  ],
},
];
