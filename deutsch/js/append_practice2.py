import json

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'r', encoding='utf-8') as f:
    content = f.read()

prefix = 'const PRACTICE_DATA = '
data = json.loads(content[len(prefix):])
print(f"Current: {len(data)} topics, {sum(sum(len(s['phrases']) for s in t['sections']) for t in data)} phrases")

new_topics = [
    {
        "id": "essen",
        "topic_de": "Essen & Trinken",
        "topic_ko": "음식 / 음료",
        "description_ko": "식당에서 주문, 음식 선호도 표현, 음식 묘사.",
        "sections": [
            {
                "title_de": "Im Restaurant bestellen",
                "title_ko": "식당에서 주문",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Einen Tisch für zwei Personen, bitte.", "ko": "두 명 자리 부탁드립니다.", "note": "식당 입장", "grammar": [{"word": "Einen Tisch", "meaning": "테이블 하나를", "explain": "Tisch(m) 4격"}, {"word": "für zwei Personen", "meaning": "두 명을 위해", "explain": "für + 4격. Person(f) 복수"}], "blank": None},
                    {"de": "Was können Sie empfehlen?", "ko": "뭘 추천해주시겠어요?", "note": "메뉴 추천 요청", "grammar": [{"word": "Was", "meaning": "무엇을", "explain": "의문사"}, {"word": "empfehlen", "meaning": "추천하다", "explain": "können 뒤 원형"}], "blank": None},
                    {"de": "Ich hätte gerne das Schnitzel mit Pommes.", "ko": "슈니첼과 감자튀김 주세요.", "note": "주문 표현", "grammar": [{"word": "hätte gerne", "meaning": "갖고 싶다", "explain": "haben의 접속법2식. 정중한 주문"}, {"word": "das Schnitzel", "meaning": "슈니첼을", "explain": "Schnitzel(n) 4격"}, {"word": "mit Pommes", "meaning": "감자튀김과 함께", "explain": "mit + 3격"}], "blank": None},
                    {"de": "Könnte ich bitte die Speisekarte haben?", "ko": "메뉴판 좀 주시겠어요?", "note": "메뉴판 요청", "grammar": [{"word": "Könnte", "meaning": "~할 수 있을까요", "explain": "können의 접속법2식"}, {"word": "die Speisekarte", "meaning": "메뉴판을", "explain": "Speisekarte(f) 4격"}], "blank": None},
                    {"de": "Zum Trinken nehme ich ein Mineralwasser.", "ko": "음료는 미네랄워터로 할게요.", "note": "음료 주문", "grammar": [{"word": "Zum Trinken", "meaning": "마실 것으로", "explain": "zu + dem = zum + 명사화 동사"}, {"word": "ein Mineralwasser", "meaning": "미네랄워터 하나", "explain": "Mineralwasser(n) 4격"}], "blank": None},
                    {"de": "Die Rechnung, bitte!", "ko": "계산서 주세요!", "note": "계산 요청", "grammar": [{"word": "Die Rechnung", "meaning": "계산서", "explain": "여성명사 4격"}], "blank": None},
                    {"de": "Zusammen oder getrennt?", "ko": "같이 계산하세요, 따로 계산하세요?", "note": "종업원의 질문", "grammar": [{"word": "zusammen", "meaning": "같이", "explain": "부사"}, {"word": "getrennt", "meaning": "따로", "explain": "trennen(나누다)의 과거분사 → 부사적"}], "blank": None}
                ]
            },
            {
                "title_de": "Geschmack & Vorlieben",
                "title_ko": "맛 / 선호도",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Das schmeckt wirklich gut!", "ko": "정말 맛있어요!", "note": "맛 평가", "grammar": [{"word": "schmeckt", "meaning": "맛이 나다", "explain": "schmecken의 3인칭. 음식 주어"}, {"word": "wirklich", "meaning": "정말로", "explain": "부사"}], "blank": None},
                    {"de": "Ich esse gerne italienisches Essen.", "ko": "이탈리아 음식 먹는 걸 좋아해요.", "note": "음식 선호도", "grammar": [{"word": "italienisches Essen", "meaning": "이탈리아 음식", "explain": "italienisch + Essen(n). 무관사 중성 4격 → -es 어미"}], "blank": None},
                    {"de": "Ich bin Vegetarier.", "ko": "저는 채식주의자입니다.", "note": "식습관", "grammar": [{"word": "Vegetarier", "meaning": "채식주의자", "explain": "남성명사. 직업/신분 → 관사 없이"}], "blank": None},
                    {"de": "Ich esse kein Fleisch und keine Meeresfrüchte.", "ko": "고기와 해산물은 안 먹어요.", "note": "못 먹는 것", "grammar": [{"word": "kein Fleisch", "meaning": "고기 안 먹음", "explain": "Fleisch(n) 4격. kein = 중성 4격"}, {"word": "keine Meeresfrüchte", "meaning": "해산물 안 먹음", "explain": "복수 4격. keine"}], "blank": None},
                    {"de": "Mein Lieblingsgericht ist Bibimbap.", "ko": "제가 제일 좋아하는 음식은 비빔밥이에요.", "note": "최애 음식", "grammar": [{"word": "Mein Lieblingsgericht", "meaning": "내가 가장 좋아하는 음식", "explain": "Lieblings- + Gericht(n). 1격 주어"}], "blank": None}
                ]
            },
            {
                "title_de": "Essen zubereiten",
                "title_ko": "요리",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich koche am liebsten koreanisches Essen.", "ko": "한국 음식 요리하는 걸 가장 좋아해요.", "note": "요리 선호", "grammar": [{"word": "am liebsten", "meaning": "가장 즐겨", "explain": "gern의 최상급"}, {"word": "koreanisches Essen", "meaning": "한국 음식", "explain": "koreanisch + Essen(n) 4격. 무관사 -es 어미"}], "blank": None},
                    {"de": "Zum Frühstück esse ich meistens Brot.", "ko": "아침에는 보통 빵을 먹어요.", "note": "아침 식사", "grammar": [{"word": "Zum Frühstück", "meaning": "아침식사로", "explain": "zu + dem = zum. Frühstück(n) 3격"}], "blank": None},
                    {"de": "Ich trinke keinen Alkohol.", "ko": "술은 안 마셔요.", "note": "음료 제한", "grammar": [{"word": "keinen Alkohol", "meaning": "술 안 마심", "explain": "Alkohol(m) 4격. kein → keinen"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "freizeit",
        "topic_de": "Freizeit & Hobbys",
        "topic_ko": "여가 / 취미",
        "description_ko": "취미, 여가 활동, 스포츠. Sprechen Teil 1, 2에 자주 출제.",
        "sections": [
            {
                "title_de": "Hobbys",
                "title_ko": "취미",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Was machst du gerne in deiner Freizeit?", "ko": "여가 시간에 뭐 하는 걸 좋아해?", "note": "Sprechen Teil 1 카드 질문", "grammar": [{"word": "in deiner Freizeit", "meaning": "너의 여가 시간에", "explain": "in + 3격. deine Freizeit(f) → deiner"}], "blank": None},
                    {"de": "In meiner Freizeit lese ich gerne Bücher.", "ko": "여가 시간에 책 읽는 걸 좋아해요.", "note": "기본 답변 형태", "grammar": [{"word": "In meiner Freizeit", "meaning": "내 여가 시간에", "explain": "in + 3격"}, {"word": "Bücher", "meaning": "책들", "explain": "Buch(n) 복수 4격"}], "blank": None},
                    {"de": "Mein Hobby ist Fotografieren.", "ko": "제 취미는 사진 찍는 거예요.", "note": "취미 정의", "grammar": [{"word": "Fotografieren", "meaning": "사진 찍기", "explain": "동사원형 명사화 → 중성"}], "blank": None},
                    {"de": "Ich spiele seit zehn Jahren Gitarre.", "ko": "10년째 기타를 치고 있어요.", "note": "기간 포함 취미", "grammar": [{"word": "seit zehn Jahren", "meaning": "10년 전부터", "explain": "seit + 3격. Jahr(n) → Jahren(복수3격)"}, {"word": "Gitarre", "meaning": "기타", "explain": "악기는 관사 없이 spielen + 악기"}], "blank": {"word": "seit", "position": "Ich spiele ___ zehn Jahren Gitarre.", "options": ["seit", "vor", "für", "ab"], "hint": "'~년 전부터 계속'의 전치사는?"}},
                    {"de": "Ich interessiere mich für klassische Musik.", "ko": "클래식 음악에 관심이 있어요.", "note": "관심사", "grammar": [{"word": "interessiere mich für", "meaning": "~에 관심이 있다", "explain": "sich interessieren für + 4격"}, {"word": "klassische Musik", "meaning": "클래식 음악", "explain": "klassisch + Musik(f). 무관사 4격 여성 = -e"}], "blank": None}
                ]
            },
            {
                "title_de": "Sport",
                "title_ko": "스포츠",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich treibe regelmäßig Sport.", "ko": "규칙적으로 운동해요.", "note": "운동 습관", "grammar": [{"word": "treibe ... Sport", "meaning": "운동하다", "explain": "Sport treiben = 관용구"}, {"word": "regelmäßig", "meaning": "규칙적으로", "explain": "부사"}], "blank": None},
                    {"de": "Zweimal pro Woche gehe ich ins Fitnessstudio.", "ko": "일주일에 두 번 헬스장에 가요.", "note": "운동 빈도", "grammar": [{"word": "Zweimal pro Woche", "meaning": "일주일에 두 번", "explain": "pro + 4격 = ~당"}, {"word": "ins Fitnessstudio", "meaning": "헬스장으로", "explain": "in + das = ins. 방향(4격)"}], "blank": None},
                    {"de": "Ich spiele am Wochenende Fußball mit Freunden.", "ko": "주말에 친구들과 축구해요.", "note": "주말 스포츠", "grammar": [{"word": "am Wochenende", "meaning": "주말에", "explain": "an + dem = am"}, {"word": "mit Freunden", "meaning": "친구들과", "explain": "mit + 3격 복수"}], "blank": None},
                    {"de": "Im Sommer schwimme ich oft im See.", "ko": "여름에는 호수에서 자주 수영해요.", "note": "계절 운동", "grammar": [{"word": "Im Sommer", "meaning": "여름에", "explain": "in + dem = im. 계절 앞"}, {"word": "im See", "meaning": "호수에서", "explain": "in + dem = im. See(m) 3격(위치)"}], "blank": None}
                ]
            },
            {
                "title_de": "Ausgehen",
                "title_ko": "외출 / 나들이",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich gehe gerne ins Kino.", "ko": "영화관 가는 걸 좋아해요.", "note": "영화 보기", "grammar": [{"word": "ins Kino", "meaning": "영화관으로", "explain": "in + das = ins. 방향(4격)"}], "blank": None},
                    {"de": "Am Wochenende treffe ich mich mit Freunden.", "ko": "주말에 친구들을 만나요.", "note": "주말 약속", "grammar": [{"word": "treffe mich", "meaning": "만나다", "explain": "sich treffen"}, {"word": "mit Freunden", "meaning": "친구들과", "explain": "mit + 3격 복수"}], "blank": None},
                    {"de": "Ich war gestern im Konzert.", "ko": "어제 콘서트에 갔었어요.", "note": "과거 외출", "grammar": [{"word": "war", "meaning": "있었다", "explain": "sein의 과거형"}, {"word": "im Konzert", "meaning": "콘서트에", "explain": "in + dem = im. Konzert(n) 3격"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "familie",
        "topic_de": "Familie & Freunde",
        "topic_ko": "가족 / 친구",
        "description_ko": "가족 구성원 소개, 친구 관계, 관계 표현.",
        "sections": [
            {
                "title_de": "Familienmitglieder",
                "title_ko": "가족 구성원",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich habe eine Schwester und zwei Brüder.", "ko": "여자 형제 하나와 남자 형제 둘이 있어요.", "note": "형제자매 소개", "grammar": [{"word": "eine Schwester", "meaning": "자매 한 명", "explain": "Schwester(f) 4격"}, {"word": "zwei Brüder", "meaning": "형제 두 명", "explain": "Bruder(m) 복수 = Brüder"}], "blank": None},
                    {"de": "Meine Eltern leben in Seoul.", "ko": "부모님은 서울에 사세요.", "note": "부모 거주지", "grammar": [{"word": "Meine Eltern", "meaning": "나의 부모님", "explain": "Eltern = 항상 복수"}, {"word": "in Seoul", "meaning": "서울에", "explain": "in + 3격(위치)"}], "blank": None},
                    {"de": "Meine Großeltern sind schon in Rente.", "ko": "조부모님은 이미 은퇴하셨어요.", "note": "조부모 상태", "grammar": [{"word": "Großeltern", "meaning": "조부모", "explain": "항상 복수"}, {"word": "in Rente", "meaning": "은퇴한", "explain": "관용표현. Rente(f) = 연금"}], "blank": None},
                    {"de": "Mein Vater arbeitet als Lehrer.", "ko": "아버지는 교사로 일하세요.", "note": "부모 직업", "grammar": [{"word": "als Lehrer", "meaning": "교사로", "explain": "als + 직업. 관사 없이"}], "blank": None}
                ]
            },
            {
                "title_de": "Beziehungen",
                "title_ko": "관계",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich verstehe mich gut mit meinen Geschwistern.", "ko": "형제자매와 사이가 좋아요.", "note": "관계 표현", "grammar": [{"word": "verstehe mich", "meaning": "사이좋게 지내다", "explain": "sich verstehen mit + 3격"}, {"word": "mit meinen Geschwistern", "meaning": "형제자매와", "explain": "mit + 3격 복수. Geschwister(복수) → Geschwistern"}], "blank": None},
                    {"de": "Meine beste Freundin heißt Anna.", "ko": "내 가장 친한 친구는 안나예요.", "note": "친구 소개", "grammar": [{"word": "Meine beste Freundin", "meaning": "나의 가장 친한 친구(여)", "explain": "Freundin(f). best의 최상급 어미 -e"}], "blank": None},
                    {"de": "Wir kennen uns seit der Schulzeit.", "ko": "학창 시절부터 알고 지냈어요.", "note": "오래된 관계", "grammar": [{"word": "kennen uns", "meaning": "서로 알다", "explain": "sich kennen. 재귀동사"}, {"word": "seit der Schulzeit", "meaning": "학창 시절부터", "explain": "seit + 3격. die Schulzeit → der(3격)"}], "blank": None}
                ]
            },
            {
                "title_de": "Aktivitäten mit Familie/Freunden",
                "title_ko": "가족 / 친구와 활동",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Einmal im Monat besuche ich meine Eltern.", "ko": "한 달에 한 번 부모님을 뵈러 가요.", "note": "가족 방문", "grammar": [{"word": "Einmal im Monat", "meaning": "한 달에 한 번", "explain": "im Monat = ~월에. 빈도"}, {"word": "meine Eltern", "meaning": "나의 부모님", "explain": "복수 4격"}], "blank": None},
                    {"de": "Am Wochenende grillen wir oft im Garten.", "ko": "주말에 자주 정원에서 바비큐해요.", "note": "가족 활동", "grammar": [{"word": "grillen", "meaning": "바비큐하다", "explain": "wir 주어 → grillen 복수형"}, {"word": "im Garten", "meaning": "정원에서", "explain": "in + dem = im"}], "blank": None},
                    {"de": "Ich rufe meine Mutter jeden Sonntag an.", "ko": "매주 일요일 어머니께 전화해요.", "note": "연락 습관", "grammar": [{"word": "rufe ... an", "meaning": "전화하다", "explain": "분리동사 an|rufen"}, {"word": "jeden Sonntag", "meaning": "매주 일요일", "explain": "jeder + Sonntag(m) 4격 시간"}], "blank": {"word": "an", "position": "Ich rufe meine Mutter jeden Sonntag ___.", "options": ["an", "auf", "ein", "zu"], "hint": "anrufen의 분리 전철은?"}}
                ]
            }
        ]
    },
    {
        "id": "weg",
        "topic_de": "Wegbeschreibung",
        "topic_ko": "길 안내",
        "description_ko": "길 묻고 답하기. Sprechen & Schreiben 모두.",
        "sections": [
            {
                "title_de": "Nach dem Weg fragen",
                "title_ko": "길 묻기",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Entschuldigung, wie komme ich zum Bahnhof?", "ko": "실례합니다, 역에 어떻게 가나요?", "note": "기본 길 묻기", "grammar": [{"word": "wie", "meaning": "어떻게", "explain": "의문사"}, {"word": "zum Bahnhof", "meaning": "역으로", "explain": "zu + dem = zum. Bahnhof(m) 3격"}], "blank": None},
                    {"de": "Wo ist die nächste U-Bahn-Station?", "ko": "가장 가까운 지하철역이 어디인가요?", "note": "위치 묻기", "grammar": [{"word": "Wo", "meaning": "어디", "explain": "의문사"}, {"word": "die nächste", "meaning": "가장 가까운", "explain": "nah(가까운)의 최상급. 여성 1격 -e"}], "blank": None},
                    {"de": "Wie weit ist es bis zum Stadtzentrum?", "ko": "시내 중심까지 얼마나 멀어요?", "note": "거리 묻기", "grammar": [{"word": "Wie weit", "meaning": "얼마나 먼", "explain": "wie + 형용사"}, {"word": "bis zum", "meaning": "~까지", "explain": "bis + zu + dem = bis zum"}], "blank": None},
                    {"de": "Ist es weit zu Fuß?", "ko": "걸어서 먼가요?", "note": "도보 거리 확인", "grammar": [{"word": "zu Fuß", "meaning": "걸어서", "explain": "관용표현. zu + Fuß(m)"}], "blank": None}
                ]
            },
            {
                "title_de": "Weg erklären",
                "title_ko": "길 설명",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Gehen Sie geradeaus bis zur Ampel.", "ko": "신호등까지 직진하세요.", "note": "직진 지시", "grammar": [{"word": "Gehen Sie", "meaning": "가세요", "explain": "명령문. Sie 형태"}, {"word": "geradeaus", "meaning": "직진", "explain": "부사"}, {"word": "bis zur Ampel", "meaning": "신호등까지", "explain": "bis + zu + der = bis zur. Ampel(f)"}], "blank": None},
                    {"de": "An der Kreuzung biegen Sie links ab.", "ko": "교차로에서 왼쪽으로 꺾으세요.", "note": "방향 전환", "grammar": [{"word": "An der Kreuzung", "meaning": "교차로에서", "explain": "an + 3격. die Kreuzung → der"}, {"word": "biegen Sie ... ab", "meaning": "꺾으세요", "explain": "분리동사 ab|biegen + 명령문"}, {"word": "links", "meaning": "왼쪽으로", "explain": "부사"}], "blank": {"word": "ab", "position": "An der Kreuzung biegen Sie links ___.", "options": ["ab", "auf", "an", "ein"], "hint": "abbiegen의 분리 전철은?"}},
                    {"de": "Nach ungefähr 200 Metern sehen Sie das Gebäude.", "ko": "약 200미터 후에 건물이 보입니다.", "note": "거리 + 결과", "grammar": [{"word": "Nach ungefähr 200 Metern", "meaning": "약 200미터 후에", "explain": "nach + 3격. Meter(m) 복수 → Metern"}, {"word": "sehen Sie", "meaning": "보일 것입니다", "explain": "도치 (Nach~ 앞)"}], "blank": None},
                    {"de": "Das Rathaus ist auf der rechten Seite.", "ko": "시청은 오른쪽에 있어요.", "note": "위치 설명", "grammar": [{"word": "auf der rechten Seite", "meaning": "오른쪽에", "explain": "auf + 3격. die Seite → der. recht 어미 -en"}], "blank": None},
                    {"de": "Die Post ist gegenüber der Bank.", "ko": "우체국은 은행 건너편에 있어요.", "note": "건너편 표현", "grammar": [{"word": "gegenüber", "meaning": "건너편에", "explain": "전치사 + 3격"}, {"word": "der Bank", "meaning": "은행의", "explain": "die Bank → der(3격)"}], "blank": {"word": "gegenüber", "position": "Die Post ist ___ der Bank.", "options": ["gegenüber", "neben", "bei", "an"], "hint": "'건너편에'를 뜻하는 전치사는?"}},
                    {"de": "Es ist ungefähr 10 Minuten zu Fuß.", "ko": "걸어서 약 10분이에요.", "note": "소요 시간", "grammar": [{"word": "ungefähr", "meaning": "대략", "explain": "부사"}, {"word": "zu Fuß", "meaning": "걸어서", "explain": "관용표현"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "wetter",
        "topic_de": "Wetter & Jahreszeiten",
        "topic_ko": "날씨 / 계절",
        "description_ko": "날씨 묘사, 계절 표현, 날씨별 활동.",
        "sections": [
            {
                "title_de": "Wetter beschreiben",
                "title_ko": "날씨 묘사",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Heute ist das Wetter sehr schön.", "ko": "오늘 날씨 정말 좋네요.", "note": "기본 날씨 표현", "grammar": [{"word": "das Wetter", "meaning": "날씨", "explain": "중성명사 1격"}], "blank": None},
                    {"de": "Es regnet stark.", "ko": "비가 많이 와요.", "note": "비 표현", "grammar": [{"word": "Es regnet", "meaning": "비가 온다", "explain": "비인칭 주어 es + regnen"}, {"word": "stark", "meaning": "많이, 세게", "explain": "부사"}], "blank": None},
                    {"de": "Morgen soll es sonnig werden.", "ko": "내일은 맑을 거래요.", "note": "일기예보", "grammar": [{"word": "soll ... werden", "meaning": "~이 될 거라고 한다", "explain": "sollen = 소문/예보"}, {"word": "sonnig", "meaning": "맑은", "explain": "형용사"}], "blank": None},
                    {"de": "Im Winter ist es sehr kalt und es schneit oft.", "ko": "겨울에는 매우 춥고 눈이 자주 와요.", "note": "계절 날씨", "grammar": [{"word": "Im Winter", "meaning": "겨울에", "explain": "in + dem = im"}, {"word": "Es schneit", "meaning": "눈이 온다", "explain": "비인칭 주어 es"}], "blank": None}
                ]
            },
            {
                "title_de": "Jahreszeiten & Aktivitäten",
                "title_ko": "계절 / 활동",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Meine Lieblingsjahreszeit ist der Frühling.", "ko": "제가 가장 좋아하는 계절은 봄이에요.", "note": "계절 선호도", "grammar": [{"word": "Meine Lieblingsjahreszeit", "meaning": "내가 가장 좋아하는 계절", "explain": "Lieblings- + Jahreszeit(f)"}, {"word": "der Frühling", "meaning": "봄", "explain": "남성명사"}], "blank": None},
                    {"de": "Im Sommer fahre ich gerne ans Meer.", "ko": "여름에는 바다에 가는 걸 좋아해요.", "note": "여름 활동", "grammar": [{"word": "ans Meer", "meaning": "바다로", "explain": "an + das = ans. 방향(4격)"}], "blank": None},
                    {"de": "Im Herbst sind die Blätter bunt.", "ko": "가을에는 잎이 형형색색이에요.", "note": "가을 풍경", "grammar": [{"word": "Im Herbst", "meaning": "가을에", "explain": "in + dem = im"}, {"word": "die Blätter", "meaning": "잎들", "explain": "Blatt(n) 복수 = Blätter"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "bildung",
        "topic_de": "Ausbildung & Lernen",
        "topic_ko": "교육 / 학습",
        "description_ko": "학교, 대학, 어학 학습 관련 표현.",
        "sections": [
            {
                "title_de": "Schule & Studium",
                "title_ko": "학교 / 대학",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich habe mein Abitur letztes Jahr gemacht.", "ko": "작년에 고등학교 졸업시험을 봤어요.", "note": "고교 졸업", "grammar": [{"word": "mein Abitur", "meaning": "나의 졸업시험", "explain": "Abitur(n) = 독일 고교 졸업시험"}, {"word": "letztes Jahr", "meaning": "작년", "explain": "시간 표현. 4격 무관사"}, {"word": "gemacht", "meaning": "했다", "explain": "machen 과거분사. 현재완료"}], "blank": None},
                    {"de": "Ich studiere Informatik an der TU München.", "ko": "뮌헨 공대에서 정보학을 전공합니다.", "note": "대학 소개", "grammar": [{"word": "Informatik", "meaning": "정보학", "explain": "학과 관사 없이"}, {"word": "an der TU München", "meaning": "뮌헨 공대에서", "explain": "an + 3격. die TU → der"}], "blank": None},
                    {"de": "Ich bin im dritten Semester.", "ko": "3학기입니다.", "note": "학기 표현", "grammar": [{"word": "im dritten Semester", "meaning": "3학기에", "explain": "in + dem = im. dritt + Semester(n) 3격"}], "blank": None},
                    {"de": "Mein Lieblingsfach ist Mathematik.", "ko": "제가 가장 좋아하는 과목은 수학이에요.", "note": "좋아하는 과목", "grammar": [{"word": "Mein Lieblingsfach", "meaning": "내 최애 과목", "explain": "Fach(n) 1격"}], "blank": None}
                ]
            },
            {
                "title_de": "Sprache lernen",
                "title_ko": "언어 학습",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich lerne seit einem Jahr Deutsch.", "ko": "1년째 독일어를 배우고 있어요.", "note": "학습 기간", "grammar": [{"word": "seit einem Jahr", "meaning": "1년 전부터", "explain": "seit + 3격. ein Jahr(n) → einem Jahr"}], "blank": {"word": "einem", "position": "Ich lerne seit ___ Jahr Deutsch.", "options": ["einem", "einen", "einer", "ein"], "hint": "seit + 중성 3격 부정관사는?"}},
                    {"de": "Ich möchte die Goethe A2 Prüfung bestehen.", "ko": "괴테 A2 시험에 합격하고 싶어요.", "note": "시험 목표", "grammar": [{"word": "die Goethe A2 Prüfung", "meaning": "괴테 A2 시험을", "explain": "Prüfung(f) 4격"}, {"word": "bestehen", "meaning": "합격하다", "explain": "möchte 뒤 원형"}], "blank": None},
                    {"de": "Deutsch ist eine schwere Sprache, aber ich gebe nicht auf.", "ko": "독일어는 어려운 언어이지만 포기하지 않아요.", "note": "학습 동기", "grammar": [{"word": "eine schwere Sprache", "meaning": "어려운 언어", "explain": "Sprache(f). eine + 형용사 -e"}, {"word": "gebe ... auf", "meaning": "포기하다", "explain": "분리동사 auf|geben"}], "blank": None},
                    {"de": "Ich lerne am liebsten mit Filmen und Büchern.", "ko": "영화와 책으로 공부하는 걸 가장 좋아해요.", "note": "학습 방법", "grammar": [{"word": "am liebsten", "meaning": "가장 즐겨", "explain": "gern 최상급"}, {"word": "mit Filmen und Büchern", "meaning": "영화와 책으로", "explain": "mit + 3격 복수. Film → Filmen, Buch → Büchern"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "feiertage",
        "topic_de": "Feiertage & Feste",
        "topic_ko": "공휴일 / 축제",
        "description_ko": "명절, 생일, 축제 등 행사 관련 표현.",
        "sections": [
            {
                "title_de": "Feste feiern",
                "title_ko": "축제 / 기념일",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Wann hast du Geburtstag?", "ko": "생일이 언제야?", "note": "생일 묻기", "grammar": [{"word": "Wann", "meaning": "언제", "explain": "의문사"}, {"word": "hast ... Geburtstag", "meaning": "생일이 있다", "explain": "haben + Geburtstag"}], "blank": None},
                    {"de": "Mein Geburtstag ist am 15. Juni.", "ko": "제 생일은 6월 15일이에요.", "note": "생일 답변", "grammar": [{"word": "am 15. Juni", "meaning": "6월 15일에", "explain": "am + 서수 날짜"}], "blank": None},
                    {"de": "Zu Weihnachten essen wir mit der Familie.", "ko": "크리스마스에는 가족과 식사해요.", "note": "크리스마스 전통", "grammar": [{"word": "Zu Weihnachten", "meaning": "크리스마스에", "explain": "zu + 축제명"}, {"word": "mit der Familie", "meaning": "가족과", "explain": "mit + 3격. die Familie → der"}], "blank": None},
                    {"de": "Silvester feiern wir mit Freunden.", "ko": "새해 전야는 친구들과 보내요.", "note": "신년 전통", "grammar": [{"word": "Silvester", "meaning": "새해 전야", "explain": "관사 없이"}, {"word": "mit Freunden", "meaning": "친구들과", "explain": "mit + 3격 복수"}], "blank": None},
                    {"de": "Herzlichen Glückwunsch zum Geburtstag!", "ko": "생일 축하합니다!", "note": "축하 표현", "grammar": [{"word": "Herzlichen Glückwunsch", "meaning": "진심 축하", "explain": "Glückwunsch(m) 4격. herzlich 어미 -en"}, {"word": "zum Geburtstag", "meaning": "생일을 맞아", "explain": "zu + dem = zum"}], "blank": None}
                ]
            },
            {
                "title_de": "Einladung zur Feier",
                "title_ko": "행사 초대",
                "skill": "schreiben",
                "phrases": [
                    {"de": "Ich lade dich zu meiner Geburtstagsparty ein.", "ko": "내 생일 파티에 초대할게.", "note": "초대 문장", "grammar": [{"word": "lade ... ein", "meaning": "초대하다", "explain": "분리동사 ein|laden"}, {"word": "zu meiner Geburtstagsparty", "meaning": "내 생일 파티에", "explain": "zu + 3격. meine Party(f) → meiner"}], "blank": None},
                    {"de": "Die Party findet am Samstag um 19 Uhr statt.", "ko": "파티는 토요일 19시에 열려요.", "note": "행사 시간", "grammar": [{"word": "findet ... statt", "meaning": "개최되다", "explain": "분리동사 statt|finden"}, {"word": "am Samstag", "meaning": "토요일에", "explain": "am + 요일"}], "blank": {"word": "statt", "position": "Die Party findet am Samstag ___.", "options": ["statt", "an", "ein", "auf"], "hint": "stattfinden의 분리 전철은?"}},
                    {"de": "Kannst du kommen?", "ko": "올 수 있어?", "note": "참석 확인", "grammar": [{"word": "Kannst", "meaning": "~할 수 있다", "explain": "können 2인칭"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "planung",
        "topic_de": "Zusammen planen",
        "topic_ko": "함께 계획하기",
        "description_ko": "Sprechen Teil 3 대비. 파트너와 약속/계획 협상.",
        "sections": [
            {
                "title_de": "Vorschläge machen",
                "title_ko": "제안하기",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Wir sollten zusammen ein Geschenk kaufen.", "ko": "우리 같이 선물을 사는 게 좋겠어.", "note": "제안 시작", "grammar": [{"word": "sollten", "meaning": "~하는 게 좋다", "explain": "sollen 접속법2식. 제안"}, {"word": "ein Geschenk", "meaning": "선물 하나", "explain": "Geschenk(n) 4격"}], "blank": None},
                    {"de": "Wie wäre es mit einem Kinobesuch?", "ko": "영화 관람은 어때?", "note": "활동 제안", "grammar": [{"word": "Wie wäre es", "meaning": "어떨까", "explain": "wäre = sein 접속법2식"}, {"word": "mit einem Kinobesuch", "meaning": "영화 관람과 함께", "explain": "mit + 3격. ein Kinobesuch(m) → einem"}], "blank": None},
                    {"de": "Wir könnten zusammen kochen.", "ko": "우리 같이 요리할 수도 있어.", "note": "제안형", "grammar": [{"word": "könnten", "meaning": "~할 수 있을 것이다", "explain": "können 접속법2식. 부드러운 제안"}], "blank": None},
                    {"de": "Ich schlage vor, dass wir am Freitag gehen.", "ko": "금요일에 가는 걸 제안해.", "note": "명시적 제안", "grammar": [{"word": "schlage vor", "meaning": "제안하다", "explain": "분리동사 vor|schlagen"}, {"word": "dass", "meaning": "~라는 것을", "explain": "종속접속사. 동사(gehen) 끝으로"}, {"word": "am Freitag", "meaning": "금요일에", "explain": "am + 요일"}], "blank": None}
                ]
            },
            {
                "title_de": "Zustimmen",
                "title_ko": "동의하기",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Das ist eine gute Idee!", "ko": "좋은 생각이야!", "note": "긍정 반응", "grammar": [{"word": "eine gute Idee", "meaning": "좋은 아이디어", "explain": "Idee(f) 1격. eine + gute"}], "blank": None},
                    {"de": "Einverstanden!", "ko": "동의해!", "note": "간단한 동의", "grammar": [{"word": "Einverstanden", "meaning": "동의하는", "explain": "과거분사. einverstanden sein = 동의하다"}], "blank": None},
                    {"de": "Ja, das passt mir gut.", "ko": "응, 그게 나한테 맞아.", "note": "시간 동의", "grammar": [{"word": "passt mir", "meaning": "나에게 맞다", "explain": "passen + 3격"}], "blank": None},
                    {"de": "Gerne! Das machen wir so.", "ko": "좋아! 그렇게 하자.", "note": "열정적 동의", "grammar": [{"word": "Gerne", "meaning": "기꺼이", "explain": "부사"}, {"word": "Das machen wir so", "meaning": "그렇게 하자", "explain": "Das = 4격. 도치"}], "blank": None}
                ]
            },
            {
                "title_de": "Ablehnen",
                "title_ko": "거절하기",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Das finde ich nicht so gut.", "ko": "그건 별로인 거 같아.", "note": "소극적 거절", "grammar": [{"word": "finde", "meaning": "생각하다", "explain": "finden = ~라고 생각하다"}, {"word": "nicht so gut", "meaning": "그렇게 좋지 않은", "explain": "완곡한 부정"}], "blank": None},
                    {"de": "Da bin ich leider nicht frei.", "ko": "그때는 안타깝지만 시간이 없어.", "note": "시간 거절", "grammar": [{"word": "Da", "meaning": "그때에", "explain": "부사. 시간 지시"}, {"word": "nicht frei", "meaning": "시간 없는", "explain": "frei(비어있는)의 부정"}], "blank": None},
                    {"de": "Hast du einen anderen Vorschlag?", "ko": "다른 제안 있어?", "note": "대안 요청", "grammar": [{"word": "einen anderen Vorschlag", "meaning": "다른 제안", "explain": "Vorschlag(m) 4격"}], "blank": None}
                ]
            },
            {
                "title_de": "Kompromiss finden",
                "title_ko": "타협점 찾기",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Wie wäre es, wenn wir uns in der Mitte treffen?", "ko": "중간쯤에서 만나는 건 어때?", "note": "절충안", "grammar": [{"word": "wenn", "meaning": "만약 ~하면", "explain": "종속접속사"}, {"word": "uns ... treffen", "meaning": "서로 만나다", "explain": "sich treffen"}, {"word": "in der Mitte", "meaning": "중간에", "explain": "in + 3격"}], "blank": None},
                    {"de": "Gut, dann machen wir es am Samstag statt am Freitag.", "ko": "그럼 금요일 대신 토요일로 하자.", "note": "조건부 동의", "grammar": [{"word": "statt", "meaning": "~대신", "explain": "전치사 + 2격 또는 관사 생략"}], "blank": None},
                    {"de": "Treffen wir uns also um 14 Uhr.", "ko": "그럼 14시에 만나자.", "note": "결론", "grammar": [{"word": "Treffen wir uns", "meaning": "만나자", "explain": "권유 형태. 1인칭 복수 동사가 맨 앞"}, {"word": "also", "meaning": "그러니", "explain": "부사"}], "blank": None}
                ]
            }
        ]
    },
    {
        "id": "informationen",
        "topic_de": "Informationen erfragen",
        "topic_ko": "정보 문의",
        "description_ko": "관광안내소, 역, 공공기관 등에서 정보 묻기.",
        "sections": [
            {
                "title_de": "Allgemeine Fragen",
                "title_ko": "일반 질문",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Könnten Sie mir bitte helfen?", "ko": "도와주실 수 있으세요?", "note": "도움 요청", "grammar": [{"word": "Könnten", "meaning": "~해주실 수 있을까요", "explain": "können 접속법2식"}, {"word": "mir", "meaning": "나에게", "explain": "helfen + 3격"}], "blank": None},
                    {"de": "Können Sie mir sagen, wo die Toilette ist?", "ko": "화장실이 어디 있는지 알려주실 수 있나요?", "note": "위치 묻기 (간접의문문)", "grammar": [{"word": "wo", "meaning": "어디", "explain": "의문사. 간접의문문 → 동사 끝으로"}, {"word": "die Toilette", "meaning": "화장실", "explain": "여성명사 1격(부문장 주어)"}, {"word": "ist", "meaning": "이다", "explain": "sein. 부문장 끝"}], "blank": {"word": "wo", "position": "Können Sie mir sagen, ___ die Toilette ist?", "options": ["wo", "wann", "wie", "was"], "hint": "'어디'를 묻는 의문사는?"}},
                    {"de": "Wissen Sie, wann der Zug ankommt?", "ko": "기차가 언제 도착하는지 아세요?", "note": "시간 묻기 (간접의문문)", "grammar": [{"word": "wann", "meaning": "언제", "explain": "의문사"}, {"word": "ankommt", "meaning": "도착하다", "explain": "ankommen의 3인칭. 간접의문문 → 끝"}], "blank": None},
                    {"de": "Gibt es hier in der Nähe einen Supermarkt?", "ko": "이 근처에 슈퍼마켓이 있나요?", "note": "근처 시설 문의", "grammar": [{"word": "Gibt es", "meaning": "~이 있다", "explain": "es gibt + 4격"}, {"word": "in der Nähe", "meaning": "근처에", "explain": "관용표현"}, {"word": "einen Supermarkt", "meaning": "슈퍼마켓 하나", "explain": "Supermarkt(m) 4격"}], "blank": None}
                ]
            },
            {
                "title_de": "Öffnungszeiten & Preise",
                "title_ko": "영업시간 / 가격",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Wann haben Sie geöffnet?", "ko": "언제 영업하세요?", "note": "영업시간 문의", "grammar": [{"word": "geöffnet", "meaning": "열린", "explain": "öffnen 과거분사. haben + P.P."}], "blank": None},
                    {"de": "Wie viel kostet der Eintritt?", "ko": "입장료가 얼마예요?", "note": "입장료 문의", "grammar": [{"word": "Wie viel", "meaning": "얼마", "explain": "의문사"}, {"word": "der Eintritt", "meaning": "입장료", "explain": "남성명사 1격(주어)"}], "blank": None},
                    {"de": "Gibt es eine Ermäßigung für Studenten?", "ko": "학생 할인이 있나요?", "note": "할인 문의", "grammar": [{"word": "eine Ermäßigung", "meaning": "할인", "explain": "Ermäßigung(f) 4격"}, {"word": "für Studenten", "meaning": "학생을 위한", "explain": "für + 4격 복수"}], "blank": None}
                ]
            },
            {
                "title_de": "Reservierungen",
                "title_ko": "예약",
                "skill": "sprechen",
                "phrases": [
                    {"de": "Ich möchte einen Tisch für heute Abend reservieren.", "ko": "오늘 저녁 자리를 예약하고 싶어요.", "note": "식당 예약", "grammar": [{"word": "einen Tisch", "meaning": "테이블", "explain": "Tisch(m) 4격"}, {"word": "für heute Abend", "meaning": "오늘 저녁을 위해", "explain": "für + 4격. heute Abend = 부사구"}], "blank": None},
                    {"de": "Haben Sie noch ein Zimmer frei?", "ko": "아직 방 하나 비어 있나요?", "note": "호텔 공실 확인", "grammar": [{"word": "ein Zimmer", "meaning": "방 하나", "explain": "Zimmer(n) 4격"}, {"word": "frei", "meaning": "비어있는", "explain": "형용사. 술어"}], "blank": None},
                    {"de": "Ich möchte meine Reservierung bestätigen.", "ko": "예약을 확인하고 싶습니다.", "note": "예약 확인", "grammar": [{"word": "meine Reservierung", "meaning": "나의 예약", "explain": "Reservierung(f) 4격"}, {"word": "bestätigen", "meaning": "확인하다", "explain": "möchte 뒤 원형"}], "blank": None}
                ]
            }
        ]
    }
]

data.extend(new_topics)

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'w', encoding='utf-8') as f:
    f.write('const PRACTICE_DATA = ')
    json.dump(data, f, ensure_ascii=False, indent=2)

total_phrases = sum(sum(len(s['phrases']) for s in t['sections']) for t in data)
print(f"Now: {len(data)} topics, {total_phrases} phrases")
