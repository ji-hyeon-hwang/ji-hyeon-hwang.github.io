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
      hint: '<code>cout &lt;&lt; a + b &lt;&lt; \'\\n\';</code>' },

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
      hint: '<code>long long</code>으로 받으면 됩니다. <code>int</code>로 받으면 10^10이 범위를 넘어 1410065408 같은 값이 나옵니다.' },
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
      hint: '🔴 C++에서 <code>-3 % 2 == -1</code> 입니다 (Python은 1). 그래서 <code>n % 2 == 1</code>로 검사하면 음수에서 틀립니다. <code>n % 2 == 0</code> 으로 짝수를 검사하세요.' },

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
      hint: '네 조건을 <code>&&</code>로 묶습니다: <code>r &gt;= 0 && r &lt; n && c &gt;= 0 && c &lt; n</code>. 인덱스는 0부터 n-1까지입니다.' },
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
      hint: 'N=100만이면 합은 약 5000억입니다. <code>int</code>(21억)를 넘으니 <code>long long</code>이 필요합니다.' },

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
    { id: 'pfa', title: '최대공약수 함수', diff: 1,
      desc: '두 수의 최대공약수를 구하는 함수를 만들어 호출하세요.<br>' +
            '<span class="io">입력: <code>12 18</code> → 출력: <code>6</code></span><br>' +
            '💡 유클리드 호제법: <code>gcd(a,b) = gcd(b, a%b)</code>, <code>b가 0이면 a</code>',
      starter: `int gcd(int a, int b) {
    // 여기에 작성

}

int main() {
    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << '\\n';
    return 0;
}`,
      cases: [ { in: '12 18', out: '6' }, { in: '7 13', out: '1' },
               { in: '100 10', out: '10' }, { in: '5 5', out: '5' } ],
      solution: `int gcd(int a, int b) {
    while (b != 0) {
        int t = a % b;
        a = b;
        b = t;
    }
    return a;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << '\\n';
    return 0;
}`,
      hint: '반복문 버전: <code>b</code>가 0이 아닐 동안 <code>(a,b) → (b, a%b)</code> 로 바꿉니다. ' +
            '재귀로도 됩니다: <code>return b == 0 ? a : gcd(b, a % b);</code>' },

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
      hint: '임시 변수에 하나를 담아두고 교환합니다. 참고로 표준 <code>swap(a, b)</code> 가 이미 있어서 코테에서는 그걸 쓰면 됩니다.' },

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
            '<code>const</code> 라서 함수 안에서 <code>v</code> 를 수정하려 하면 컴파일 에러가 납니다 — 한 번 해보세요.' },
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
    { h: '순회',
      code: `for (int x : v) cout << x;        // 값 복사 (읽기만)
for (int& x : v) x *= 2;          // 🔴 참조 — 수정하려면 &
for (int i = 0; i < (int)v.size(); i++) ...`,
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
      hint: '<code>*max_element(v.begin(), v.end())</code> — 앞의 <code>*</code>를 빼먹지 마세요 (반복자를 반환하므로). 합은 <code>accumulate(..., 0LL)</code>.' },

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
      hint: '그냥 실행 버튼을 눌러보세요. <code>size()</code>가 부호 없는 64비트라 <code>0-1</code>이 최대값으로 돌아갑니다. 이게 루프 조건에서 무한루프를 만드는 원인입니다.' },
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
      hint: '🔴 <code>char&amp; c</code> — 참조로 받아야 원본이 바뀝니다. <code>char c</code>로 받으면 복사라 안 바뀝니다.' },
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
      hint: '람다에서 if로 1순위(점수)를 먼저 비교하고, 같을 때만 2순위(이름)로 내려갑니다. 🔴 <code>&gt;=</code>를 쓰지 마세요.' },
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
      hint: '🔴 두 단계입니다. ① <code>cnt[x]++</code>로 세기 ② <b>원본 순서로</b> 순회하며 최대 찾기. map을 순회하면 "먼저 나온 것" 보장이 깨집니다. 그리고 <code>&gt;=</code>가 아니라 <code>&gt;</code>를 써야 합니다.' },

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
            '<b>기록은 확인 후에</b> — 먼저 넣으면 <code>[4], target=8</code>에서 자기 자신과 짝지어 틀립니다.' },
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
      hint: '🔴 <code>q.front()</code>로 저장하고 <code>q.pop()</code>으로 제거합니다. <code>q.pop()</code>이 값을 반환할 거라 생각하면 컴파일 에러가 납니다.' },

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
            '그리고 1×1 격자는 시작이 곧 목표라 답이 0입니다.' },

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
      hint: '바깥 2중 루프로 "아직 안 본 땅"을 찾고, 찾으면 BFS로 그 섬 전체를 방문 처리합니다. <b>BFS 한 번 = 섬 하나</b>입니다.' },
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
            '20! 이 <code>int</code> 범위를 한참 넘으니 <code>long long</code> 이어야 하고, 곱하기 전에 캐스팅합니다.' },

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
            '메모 없이 돌리면 같은 값을 수십억 번 다시 계산합니다 — 이게 DP 의 출발점입니다.' },
  ],
},
];
