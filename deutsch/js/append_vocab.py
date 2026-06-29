import re
import json

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam_vocab.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the array
start = content.find('[')
end = content.rfind(']')
data = json.loads(content[start:end+1])

new_categories = [
    {
        "category_de": "Familie & Verwandte (가족/친척)",
        "category_ko": "가족 / 친척 어휘",
        "items": [
            {"de": "die Mutter / die Mütter", "ko": "어머니 / 어머니들", "note": "Mama (구어)"},
            {"de": "der Vater / die Väter", "ko": "아버지", "note": "Papa (구어)"},
            {"de": "die Eltern (pl.)", "ko": "부모님", "note": "항상 복수"},
            {"de": "die Schwester / die Schwestern", "ko": "자매, 누나/언니/여동생", "note": "ältere/jüngere로 구분"},
            {"de": "der Bruder / die Brüder", "ko": "형제, 형/오빠/남동생", "note": ""},
            {"de": "die Geschwister (pl.)", "ko": "형제자매", "note": "항상 복수"},
            {"de": "die Großmutter / die Oma", "ko": "할머니", "note": "Oma = 구어"},
            {"de": "der Großvater / der Opa", "ko": "할아버지", "note": "Opa = 구어"},
            {"de": "die Großeltern (pl.)", "ko": "조부모님", "note": ""},
            {"de": "die Tante / die Tanten", "ko": "이모, 고모", "note": ""},
            {"de": "der Onkel / die Onkel", "ko": "삼촌, 이모부", "note": ""},
            {"de": "der Cousin / die Cousine", "ko": "사촌 (남/여)", "note": "프랑스어 차용어"},
            {"de": "der Neffe / die Nichte", "ko": "조카 (남/여)", "note": ""},
            {"de": "der Enkel / die Enkelin", "ko": "손자 / 손녀", "note": ""},
            {"de": "der Sohn / die Söhne", "ko": "아들", "note": ""},
            {"de": "die Tochter / die Töchter", "ko": "딸", "note": ""},
            {"de": "das Kind / die Kinder", "ko": "아이", "note": ""},
            {"de": "der Mann / die Männer", "ko": "남자 / 남편", "note": "Ehemann = 남편"},
            {"de": "die Frau / die Frauen", "ko": "여자 / 부인", "note": "Ehefrau = 아내"},
            {"de": "verheiratet / ledig / geschieden", "ko": "기혼 / 미혼 / 이혼", "note": "결혼 상태"},
            {"de": "der Freund / die Freundin", "ko": "남자친구 / 여자친구", "note": "친구 의미도 가능"},
            {"de": "der Verwandte / die Verwandten", "ko": "친척", "note": ""}
        ]
    },
    {
        "category_de": "Berufe (직업)",
        "category_ko": "직업 어휘",
        "items": [
            {"de": "der Arzt / die Ärztin", "ko": "의사 (남/여)", "note": ""},
            {"de": "der Lehrer / die Lehrerin", "ko": "선생님", "note": ""},
            {"de": "der Schüler / die Schülerin", "ko": "학생 (초중고)", "note": ""},
            {"de": "der Student / die Studentin", "ko": "대학생", "note": ""},
            {"de": "der Verkäufer / die Verkäuferin", "ko": "판매원", "note": ""},
            {"de": "der Krankenpfleger / die Krankenschwester", "ko": "간호사 (남/여)", "note": ""},
            {"de": "der Friseur / die Friseurin", "ko": "미용사", "note": ""},
            {"de": "der Kellner / die Kellnerin", "ko": "웨이터 / 웨이트리스", "note": ""},
            {"de": "der Koch / die Köchin", "ko": "요리사", "note": ""},
            {"de": "der Fahrer / die Fahrerin", "ko": "운전사", "note": ""},
            {"de": "der Polizist / die Polizistin", "ko": "경찰", "note": ""},
            {"de": "der Ingenieur / die Ingenieurin", "ko": "엔지니어", "note": ""},
            {"de": "der Architekt / die Architektin", "ko": "건축가", "note": ""},
            {"de": "der Programmierer / die Programmiererin", "ko": "프로그래머", "note": ""},
            {"de": "der Designer / die Designerin", "ko": "디자이너", "note": ""},
            {"de": "der Handwerker", "ko": "수공업자, 기술자", "note": "Tischler, Maurer 등"},
            {"de": "der Bäcker / die Bäckerin", "ko": "제빵사", "note": ""},
            {"de": "der Mechaniker", "ko": "정비사", "note": ""},
            {"de": "der Angestellte / die Angestellte", "ko": "사무원, 회사원", "note": ""},
            {"de": "der Hausmann / die Hausfrau", "ko": "남편/주부", "note": ""},
            {"de": "der Rentner / die Rentnerin", "ko": "연금 수령자, 은퇴자", "note": "in Rente sein"},
            {"de": "arbeitslos / arbeitslos sein", "ko": "실직한 / 실직 상태", "note": ""}
        ]
    },
    {
        "category_de": "Körperteile (신체)",
        "category_ko": "신체 부위",
        "items": [
            {"de": "der Kopf / die Köpfe", "ko": "머리", "note": ""},
            {"de": "das Gesicht / die Gesichter", "ko": "얼굴", "note": ""},
            {"de": "das Haar / die Haare", "ko": "머리카락", "note": "보통 복수"},
            {"de": "das Auge / die Augen", "ko": "눈", "note": ""},
            {"de": "die Nase / die Nasen", "ko": "코", "note": ""},
            {"de": "der Mund / die Münder", "ko": "입", "note": ""},
            {"de": "das Ohr / die Ohren", "ko": "귀", "note": ""},
            {"de": "der Zahn / die Zähne", "ko": "이, 치아", "note": ""},
            {"de": "der Hals / die Hälse", "ko": "목, 인후", "note": "Halsschmerzen = 목 통증"},
            {"de": "die Schulter / die Schultern", "ko": "어깨", "note": ""},
            {"de": "der Arm / die Arme", "ko": "팔", "note": ""},
            {"de": "die Hand / die Hände", "ko": "손", "note": ""},
            {"de": "der Finger / die Finger", "ko": "손가락", "note": ""},
            {"de": "die Brust / die Brüste", "ko": "가슴", "note": ""},
            {"de": "der Bauch / die Bäuche", "ko": "배", "note": "Bauchschmerzen = 복통"},
            {"de": "der Rücken / die Rücken", "ko": "등, 허리", "note": ""},
            {"de": "das Bein / die Beine", "ko": "다리", "note": ""},
            {"de": "das Knie / die Knie", "ko": "무릎", "note": ""},
            {"de": "der Fuß / die Füße", "ko": "발", "note": "zu Fuß = 도보로"},
            {"de": "die Zehe / die Zehen", "ko": "발가락", "note": ""},
            {"de": "das Herz / die Herzen", "ko": "심장, 마음", "note": ""},
            {"de": "die Haut", "ko": "피부", "note": ""}
        ]
    },
    {
        "category_de": "Krankheiten & Symptome (질병/증상)",
        "category_ko": "질병 / 증상",
        "items": [
            {"de": "krank / gesund", "ko": "아픈 / 건강한", "note": ""},
            {"de": "die Erkältung", "ko": "감기", "note": "eine Erkältung haben"},
            {"de": "die Grippe", "ko": "독감", "note": ""},
            {"de": "das Fieber", "ko": "열", "note": "Fieber haben"},
            {"de": "der Husten", "ko": "기침", "note": "Husten haben"},
            {"de": "der Schnupfen", "ko": "콧물, 코감기", "note": ""},
            {"de": "die Kopfschmerzen (pl.)", "ko": "두통", "note": "항상 복수"},
            {"de": "die Bauchschmerzen (pl.)", "ko": "복통", "note": "항상 복수"},
            {"de": "die Halsschmerzen (pl.)", "ko": "인후통", "note": ""},
            {"de": "die Zahnschmerzen (pl.)", "ko": "치통", "note": ""},
            {"de": "die Rückenschmerzen (pl.)", "ko": "허리 통증", "note": ""},
            {"de": "der Durchfall", "ko": "설사", "note": ""},
            {"de": "die Allergie", "ko": "알레르기", "note": "allergisch gegen + 4격"},
            {"de": "der Unfall", "ko": "사고", "note": ""},
            {"de": "die Verletzung", "ko": "부상", "note": ""},
            {"de": "wehtun + Dat.", "ko": "아프다", "note": "Mein Kopf tut weh."},
            {"de": "sich verletzen", "ko": "다치다", "note": "재귀동사"},
            {"de": "müde / erschöpft", "ko": "피곤한 / 지친", "note": ""},
            {"de": "schwindelig", "ko": "어지러운", "note": "Mir ist schwindelig."},
            {"de": "übel", "ko": "메스꺼운", "note": "Mir ist übel."},
            {"de": "das Medikament / die Medikamente", "ko": "약", "note": ""},
            {"de": "die Tablette / die Tabletten", "ko": "알약", "note": ""},
            {"de": "das Pflaster / die Pflaster", "ko": "반창고", "note": ""},
            {"de": "die Spritze", "ko": "주사", "note": "eine Spritze bekommen"},
            {"de": "untersuchen / die Untersuchung", "ko": "검진하다 / 검진", "note": ""},
            {"de": "die Versicherungskarte", "ko": "보험 카드", "note": ""}
        ]
    },
    {
        "category_de": "Lebensmittel & Essen (음식)",
        "category_ko": "음식 / 식료품",
        "items": [
            {"de": "das Brot / das Brötchen", "ko": "빵 / 작은 빵", "note": ""},
            {"de": "der Käse", "ko": "치즈", "note": ""},
            {"de": "die Butter", "ko": "버터", "note": ""},
            {"de": "die Milch", "ko": "우유", "note": ""},
            {"de": "das Ei / die Eier", "ko": "달걀", "note": ""},
            {"de": "das Fleisch / das Hähnchen / das Rindfleisch / das Schweinefleisch", "ko": "고기 / 닭 / 소 / 돼지", "note": ""},
            {"de": "die Wurst / die Würste", "ko": "소시지", "note": "독일 대표 음식"},
            {"de": "der Fisch / die Fische", "ko": "생선", "note": ""},
            {"de": "der Schinken", "ko": "햄", "note": ""},
            {"de": "das Obst", "ko": "과일 (집합명사)", "note": ""},
            {"de": "der Apfel / die Äpfel", "ko": "사과", "note": ""},
            {"de": "die Banane / die Bananen", "ko": "바나나", "note": ""},
            {"de": "die Orange / die Orangen", "ko": "오렌지", "note": ""},
            {"de": "die Birne / die Birnen", "ko": "배", "note": ""},
            {"de": "die Traube / die Trauben", "ko": "포도", "note": "보통 복수"},
            {"de": "die Erdbeere / die Erdbeeren", "ko": "딸기", "note": ""},
            {"de": "das Gemüse", "ko": "채소 (집합명사)", "note": ""},
            {"de": "die Tomate / die Tomaten", "ko": "토마토", "note": ""},
            {"de": "die Kartoffel / die Kartoffeln", "ko": "감자", "note": ""},
            {"de": "die Zwiebel / die Zwiebeln", "ko": "양파", "note": ""},
            {"de": "die Karotte / die Möhre", "ko": "당근", "note": ""},
            {"de": "die Gurke / die Gurken", "ko": "오이", "note": ""},
            {"de": "der Salat / die Salate", "ko": "샐러드, 양상추", "note": ""},
            {"de": "der Reis", "ko": "쌀, 밥", "note": ""},
            {"de": "die Nudel / die Nudeln", "ko": "면, 파스타", "note": ""},
            {"de": "das Salz / der Pfeffer / der Zucker", "ko": "소금 / 후추 / 설탕", "note": ""},
            {"de": "das Öl / der Essig", "ko": "기름 / 식초", "note": ""},
            {"de": "die Marmelade / die Schokolade / der Kuchen", "ko": "잼 / 초콜릿 / 케이크", "note": ""},
            {"de": "der Kaffee / der Tee / das Wasser", "ko": "커피 / 차 / 물", "note": ""},
            {"de": "der Saft / das Bier / der Wein", "ko": "주스 / 맥주 / 와인", "note": ""}
        ]
    },
    {
        "category_de": "Kleidung (옷)",
        "category_ko": "옷 / 의류",
        "items": [
            {"de": "das Hemd / die Hemden", "ko": "셔츠 (남방)", "note": ""},
            {"de": "die Bluse / die Blusen", "ko": "블라우스", "note": ""},
            {"de": "das T-Shirt / die T-Shirts", "ko": "티셔츠", "note": ""},
            {"de": "der Pullover / die Pullover", "ko": "스웨터", "note": "Pulli (구어)"},
            {"de": "die Hose / die Hosen", "ko": "바지", "note": ""},
            {"de": "die Jeans (pl.)", "ko": "청바지", "note": "항상 복수형"},
            {"de": "der Rock / die Röcke", "ko": "치마", "note": ""},
            {"de": "das Kleid / die Kleider", "ko": "드레스", "note": ""},
            {"de": "die Jacke / die Jacken", "ko": "재킷", "note": ""},
            {"de": "der Mantel / die Mäntel", "ko": "코트", "note": ""},
            {"de": "der Schal / die Schals", "ko": "목도리", "note": ""},
            {"de": "die Mütze / der Hut", "ko": "모자 (니트/펠트)", "note": ""},
            {"de": "die Handschuhe (pl.)", "ko": "장갑", "note": "보통 복수"},
            {"de": "der Schuh / die Schuhe", "ko": "신발", "note": "보통 복수"},
            {"de": "die Socke / die Socken", "ko": "양말", "note": ""},
            {"de": "die Strumpfhose", "ko": "스타킹", "note": ""},
            {"de": "die Brille", "ko": "안경", "note": "eine Brille tragen"},
            {"de": "die Uhr / die Uhren", "ko": "시계", "note": ""},
            {"de": "die Tasche / die Taschen", "ko": "가방", "note": "Handtasche = 핸드백"},
            {"de": "anziehen / ausziehen / umziehen", "ko": "입다 / 벗다 / 갈아입다", "note": "분리동사 + 재귀"},
            {"de": "tragen", "ko": "입고 있다 / 입다", "note": "tragen + 4격"},
            {"de": "die Größe / die Farbe", "ko": "사이즈 / 색상", "note": ""}
        ]
    },
    {
        "category_de": "Wetter & Jahreszeiten (날씨/계절)",
        "category_ko": "날씨 / 계절",
        "items": [
            {"de": "das Wetter", "ko": "날씨", "note": ""},
            {"de": "sonnig / wolkig / bewölkt", "ko": "맑은 / 구름 낀 / 흐린", "note": ""},
            {"de": "regnerisch / regnen", "ko": "비 오는 / 비 오다", "note": "Es regnet."},
            {"de": "schneien / der Schnee", "ko": "눈 오다 / 눈", "note": "Es schneit."},
            {"de": "windig / der Wind", "ko": "바람 부는 / 바람", "note": ""},
            {"de": "heiß / warm / kühl / kalt", "ko": "더운 / 따뜻한 / 시원한 / 추운", "note": ""},
            {"de": "die Sonne / scheinen", "ko": "태양 / 빛나다", "note": "Die Sonne scheint."},
            {"de": "die Wolke / die Wolken", "ko": "구름", "note": ""},
            {"de": "der Regen", "ko": "비", "note": ""},
            {"de": "der Sturm", "ko": "폭풍", "note": ""},
            {"de": "das Gewitter", "ko": "뇌우", "note": ""},
            {"de": "die Temperatur / Grad", "ko": "온도 / 도", "note": "30 Grad"},
            {"de": "der Frühling / der Sommer / der Herbst / der Winter", "ko": "봄 / 여름 / 가을 / 겨울", "note": "im + 계절"},
            {"de": "die Jahreszeit / die Jahreszeiten", "ko": "계절", "note": ""}
        ]
    },
    {
        "category_de": "Verkehrsmittel (교통수단)",
        "category_ko": "교통수단",
        "items": [
            {"de": "das Auto / die Autos", "ko": "자동차", "note": "mit dem Auto"},
            {"de": "der Bus / die Busse", "ko": "버스", "note": "mit dem Bus"},
            {"de": "die U-Bahn / die S-Bahn", "ko": "지하철 / 도시철도", "note": "mit der U-Bahn"},
            {"de": "die Straßenbahn", "ko": "트램", "note": ""},
            {"de": "der Zug / die Züge", "ko": "기차", "note": "mit dem Zug"},
            {"de": "das Flugzeug", "ko": "비행기", "note": "mit dem Flugzeug"},
            {"de": "das Fahrrad / die Fahrräder", "ko": "자전거", "note": "mit dem Fahrrad"},
            {"de": "das Motorrad", "ko": "오토바이", "note": ""},
            {"de": "das Taxi", "ko": "택시", "note": ""},
            {"de": "das Schiff", "ko": "배", "note": ""},
            {"de": "zu Fuß gehen", "ko": "걸어서 가다", "note": "관용표현"},
            {"de": "die Fahrkarte / das Ticket", "ko": "승차권 / 티켓", "note": ""},
            {"de": "der Bahnhof / der Flughafen", "ko": "기차역 / 공항", "note": ""},
            {"de": "die Haltestelle", "ko": "정류장", "note": ""},
            {"de": "das Gleis / der Bahnsteig", "ko": "선로 / 플랫폼", "note": ""},
            {"de": "abfahren / ankommen", "ko": "출발 / 도착하다", "note": "분리동사 + sein"},
            {"de": "umsteigen", "ko": "환승하다", "note": "분리동사 + sein"},
            {"de": "die Verspätung", "ko": "지연", "note": ""}
        ]
    },
    {
        "category_de": "Wohnung & Möbel (집/가구)",
        "category_ko": "집 / 가구",
        "items": [
            {"de": "die Wohnung / das Haus", "ko": "아파트 / 집", "note": ""},
            {"de": "das Zimmer / die Zimmer", "ko": "방", "note": ""},
            {"de": "das Wohnzimmer / das Schlafzimmer", "ko": "거실 / 침실", "note": ""},
            {"de": "die Küche / das Bad / das Badezimmer", "ko": "주방 / 욕실 / 욕실", "note": ""},
            {"de": "das Esszimmer / das Arbeitszimmer / das Gästezimmer", "ko": "식당방 / 서재 / 손님방", "note": ""},
            {"de": "der Flur / der Eingang", "ko": "현관, 복도 / 입구", "note": ""},
            {"de": "der Balkon / die Terrasse / der Garten", "ko": "발코니 / 테라스 / 정원", "note": ""},
            {"de": "der Keller / der Dachboden", "ko": "지하실 / 다락방", "note": ""},
            {"de": "der Stock / das Stockwerk / das Erdgeschoss", "ko": "층 / 층 / 1층(독일식)", "note": "EG=1층"},
            {"de": "der Tisch / der Stuhl", "ko": "테이블 / 의자", "note": ""},
            {"de": "das Bett / die Couch / das Sofa", "ko": "침대 / 소파", "note": ""},
            {"de": "der Schrank / das Regal", "ko": "옷장/장 / 책장", "note": ""},
            {"de": "der Spiegel / das Bild", "ko": "거울 / 그림", "note": ""},
            {"de": "die Lampe / das Licht", "ko": "램프 / 빛", "note": ""},
            {"de": "der Kühlschrank / der Herd / der Ofen", "ko": "냉장고 / 레인지 / 오븐", "note": ""},
            {"de": "die Waschmaschine / die Spülmaschine", "ko": "세탁기 / 식기세척기", "note": ""},
            {"de": "die Tür / das Fenster", "ko": "문 / 창문", "note": ""},
            {"de": "der Boden / die Decke / die Wand", "ko": "바닥 / 천장 / 벽", "note": ""},
            {"de": "die Miete / die Nebenkosten", "ko": "월세 / 관리비", "note": ""},
            {"de": "der Vermieter / der Mieter", "ko": "임대인 / 세입자", "note": ""},
            {"de": "umziehen / der Umzug", "ko": "이사가다 / 이사", "note": "sein 동사"}
        ]
    },
    {
        "category_de": "Stadt & Orte (도시/장소)",
        "category_ko": "도시 / 장소",
        "items": [
            {"de": "die Stadt / das Dorf", "ko": "도시 / 마을", "note": ""},
            {"de": "das Zentrum / die Innenstadt", "ko": "중심 / 시내 중심", "note": ""},
            {"de": "der Bahnhof / der Flughafen", "ko": "기차역 / 공항", "note": ""},
            {"de": "die Post / die Bank", "ko": "우체국 / 은행", "note": ""},
            {"de": "der Supermarkt / der Markt", "ko": "슈퍼마켓 / 시장", "note": ""},
            {"de": "das Kaufhaus / das Geschäft", "ko": "백화점 / 상점", "note": ""},
            {"de": "das Restaurant / das Café / die Bar", "ko": "식당 / 카페 / 바", "note": ""},
            {"de": "der Park / der Garten", "ko": "공원 / 정원", "note": ""},
            {"de": "die Schule / die Universität / die Bibliothek", "ko": "학교 / 대학 / 도서관", "note": ""},
            {"de": "das Krankenhaus / die Praxis / die Apotheke", "ko": "병원 / 진료소 / 약국", "note": ""},
            {"de": "das Kino / das Theater / das Museum", "ko": "영화관 / 극장 / 박물관", "note": ""},
            {"de": "die Kirche", "ko": "교회", "note": ""},
            {"de": "das Rathaus", "ko": "시청", "note": ""},
            {"de": "der Spielplatz", "ko": "놀이터", "note": ""},
            {"de": "der Zoo / der Tierpark", "ko": "동물원", "note": ""},
            {"de": "das Schwimmbad / das Hallenbad", "ko": "수영장 / 실내 수영장", "note": ""},
            {"de": "das Fitnessstudio", "ko": "헬스장", "note": ""},
            {"de": "das Stadion", "ko": "경기장", "note": ""},
            {"de": "der Strand / der Berg / der Wald / der See", "ko": "해변 / 산 / 숲 / 호수", "note": ""},
            {"de": "die Straße / die Kreuzung / die Ampel", "ko": "거리 / 교차로 / 신호등", "note": ""}
        ]
    },
    {
        "category_de": "Hobbys & Freizeit (취미/여가)",
        "category_ko": "취미 / 여가",
        "items": [
            {"de": "lesen / Bücher lesen", "ko": "읽다 / 책 읽기", "note": ""},
            {"de": "schreiben", "ko": "쓰다", "note": ""},
            {"de": "Musik hören", "ko": "음악 듣기", "note": ""},
            {"de": "Filme/Serien sehen / fernsehen", "ko": "영화/드라마 보기 / TV 보기", "note": "fernsehen = 분리"},
            {"de": "Sport machen / treiben", "ko": "운동하다", "note": ""},
            {"de": "joggen / laufen", "ko": "조깅하다 / 달리다", "note": ""},
            {"de": "schwimmen", "ko": "수영하다", "note": ""},
            {"de": "Fußball / Tennis / Basketball spielen", "ko": "축구 / 테니스 / 농구 하다", "note": "spielen + 종목"},
            {"de": "wandern / Spazieren gehen", "ko": "하이킹 / 산책하기", "note": ""},
            {"de": "Fahrrad fahren", "ko": "자전거 타기", "note": ""},
            {"de": "tanzen", "ko": "춤추다", "note": ""},
            {"de": "kochen / backen", "ko": "요리하다 / 굽다", "note": ""},
            {"de": "fotografieren / malen / zeichnen", "ko": "사진/그림 그리다", "note": ""},
            {"de": "ein Instrument spielen", "ko": "악기 다루다", "note": "Klavier / Gitarre 등"},
            {"de": "ins Kino / ins Theater / ins Konzert gehen", "ko": "영화/극장/콘서트 가다", "note": "ins = in das"},
            {"de": "Freunde treffen", "ko": "친구 만나기", "note": ""},
            {"de": "reisen", "ko": "여행하다", "note": ""},
            {"de": "shoppen / einkaufen", "ko": "쇼핑하기", "note": ""},
            {"de": "Computer spielen / Videospiele spielen", "ko": "컴퓨터/비디오 게임 하기", "note": ""},
            {"de": "sammeln", "ko": "수집하다", "note": "Briefmarken sammeln 등"},
            {"de": "stricken / nähen", "ko": "뜨개질 / 바느질", "note": ""},
            {"de": "Yoga machen / meditieren", "ko": "요가 / 명상하기", "note": ""}
        ]
    },
    {
        "category_de": "Schule & Studium (학교/학업)",
        "category_ko": "학교 / 학업",
        "items": [
            {"de": "die Schule / die Universität / die Hochschule", "ko": "학교 / 대학 / 단과대학", "note": ""},
            {"de": "die Grundschule / die Mittelschule / das Gymnasium", "ko": "초/중/인문계 고교", "note": "독일 학제"},
            {"de": "die Klasse / die Stunde", "ko": "학급 / 수업 시간", "note": ""},
            {"de": "der Schüler / die Schülerin", "ko": "학생 (초중고)", "note": ""},
            {"de": "der Student / die Studentin", "ko": "대학생", "note": ""},
            {"de": "der Lehrer / die Lehrerin", "ko": "교사", "note": ""},
            {"de": "der Professor / die Professorin", "ko": "교수", "note": ""},
            {"de": "das Fach / die Fächer", "ko": "과목", "note": ""},
            {"de": "Mathematik / Deutsch / Englisch / Geschichte", "ko": "수학 / 독어 / 영어 / 역사", "note": ""},
            {"de": "Physik / Chemie / Biologie", "ko": "물리 / 화학 / 생물", "note": ""},
            {"de": "die Hausaufgaben (pl.)", "ko": "숙제", "note": "항상 복수"},
            {"de": "die Prüfung / der Test", "ko": "시험", "note": ""},
            {"de": "die Note / die Noten", "ko": "성적", "note": "1=가장 좋음"},
            {"de": "die Ferien (pl.)", "ko": "방학", "note": "항상 복수 (학교)"},
            {"de": "das Zeugnis", "ko": "성적표 / 졸업증", "note": ""},
            {"de": "das Abitur", "ko": "고교 졸업시험", "note": "독일"},
            {"de": "das Studium", "ko": "대학 학업", "note": ""},
            {"de": "das Semester", "ko": "학기", "note": ""},
            {"de": "das Diplom / der Bachelor / der Master", "ko": "학위", "note": ""},
            {"de": "lernen / studieren / unterrichten", "ko": "배우다 / 대학 다니다 / 가르치다", "note": ""},
            {"de": "die Pause / die große Pause", "ko": "쉬는 시간 / 큰 쉬는 시간", "note": ""}
        ]
    },
    {
        "category_de": "Termin-Vokabular (시간표/약속 어휘)",
        "category_ko": "약속 / 시간표 어휘",
        "items": [
            {"de": "der Termin / die Verabredung", "ko": "약속", "note": "공식/사적"},
            {"de": "der Kalender / der Terminkalender", "ko": "달력 / 일정표", "note": ""},
            {"de": "frei sein / Zeit haben", "ko": "한가하다 / 시간 있다", "note": ""},
            {"de": "beschäftigt sein", "ko": "바쁘다", "note": ""},
            {"de": "belegt / besetzt", "ko": "차 있는 / 예약된", "note": ""},
            {"de": "Wann hast du Zeit?", "ko": "언제 시간 있어?", "note": ""},
            {"de": "Passt dir Montag?", "ko": "월요일 괜찮아?", "note": "passen + Dat."},
            {"de": "Wie wäre es mit ...?", "ko": "~ 어때?", "note": "mit + 3격"},
            {"de": "Sollen wir ... ?", "ko": "우리 ~할까?", "note": "제안"},
            {"de": "Treffen wir uns um ...", "ko": "~에 만나자", "note": "권유형"},
            {"de": "vereinbaren / planen / organisieren", "ko": "약속하다 / 계획하다 / 조직하다", "note": ""},
            {"de": "absagen / verschieben", "ko": "취소 / 미루다", "note": "둘 다 분리동사"},
            {"de": "bestätigen", "ko": "확인하다", "note": "비분리동사"},
            {"de": "vormittags / nachmittags / abends", "ko": "오전 / 오후 / 저녁", "note": "-s = 반복적"},
            {"de": "am Wochenende / unter der Woche", "ko": "주말에 / 평일에", "note": ""},
            {"de": "von 8 bis 17 Uhr", "ko": "8시부터 17시까지", "note": "von ... bis ..."},
            {"de": "ab Montag", "ko": "월요일부터", "note": "ab + 시점"},
            {"de": "Einverstanden! / Abgemacht!", "ko": "동의! / 약속!", "note": "확정 표현"}
        ]
    },
    {
        "category_de": "Geld & Bezahlen (돈/지불)",
        "category_ko": "돈 / 지불",
        "items": [
            {"de": "das Geld", "ko": "돈", "note": ""},
            {"de": "die Münze / der Schein", "ko": "동전 / 지폐", "note": ""},
            {"de": "der Euro / der Cent", "ko": "유로 / 센트", "note": ""},
            {"de": "die Bank / das Konto", "ko": "은행 / 계좌", "note": ""},
            {"de": "die EC-Karte / die Kreditkarte", "ko": "체크카드 / 신용카드", "note": ""},
            {"de": "bar / in bar / mit Karte", "ko": "현금으로 / 카드로", "note": ""},
            {"de": "bezahlen / zahlen", "ko": "지불하다 / 계산하다", "note": ""},
            {"de": "kosten", "ko": "비용이 들다", "note": "Wie viel kostet das?"},
            {"de": "der Preis / die Preise", "ko": "가격", "note": ""},
            {"de": "die Rechnung / der Kassenbon / die Quittung", "ko": "청구서 / 영수증 / 영수증", "note": ""},
            {"de": "sparen", "ko": "저축하다 / 아끼다", "note": ""},
            {"de": "ausgeben", "ko": "쓰다 (돈을)", "note": "분리동사: Geld ausgeben"},
            {"de": "verdienen", "ko": "벌다", "note": ""},
            {"de": "der Rabatt / die Ermäßigung", "ko": "할인", "note": ""},
            {"de": "teuer / billig / günstig / kostenlos", "ko": "비싼 / 싼 / 저렴한 / 무료", "note": ""},
            {"de": "überweisen / die Überweisung", "ko": "송금하다 / 송금", "note": ""}
        ]
    }
]

# Append
data.extend(new_categories)

# Save
js_out = 'const EXAM_VOCAB = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam_vocab.js', 'w', encoding='utf-8') as f:
    f.write(js_out)

print(f"Categories: {len(data)}")
total_items = sum(len(c['items']) for c in data)
print(f"Total items: {total_items}")
