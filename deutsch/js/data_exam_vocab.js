// Goethe A2 시험 빈출 단어/표현
const EXAM_VOCAB = [
  {
    "category_de": "Anrede & Schluss (이메일 인사/마무리)",
    "category_ko": "이메일 인사 / 마무리",
    "items": [
      {"de": "Sehr geehrte Frau ...,", "ko": "~여사님께,", "note": "여성 격식체 시작"},
      {"de": "Sehr geehrter Herr ...,", "ko": "~씨께, (남성)", "note": "남성 격식체 시작"},
      {"de": "Sehr geehrte Damen und Herren,", "ko": "관계자 분께,", "note": "수신인 모를 때 (기관)"},
      {"de": "Liebe ...,", "ko": "친애하는 ~ (여),", "note": "비격식 여성"},
      {"de": "Lieber ...,", "ko": "친애하는 ~ (남),", "note": "비격식 남성"},
      {"de": "Hallo ...,", "ko": "안녕 ~,", "note": "친한 사이"},
      {"de": "Mit freundlichen Grüßen", "ko": "경의를 담아", "note": "격식체 마무리 (쉼표 없음)"},
      {"de": "Viele Grüße", "ko": "안부 전합니다", "note": "반격식 마무리"},
      {"de": "Liebe Grüße", "ko": "다정한 안부를", "note": "친구에게 마무리"},
      {"de": "Bis bald!", "ko": "곧 봐!", "note": "친구에게"}
    ]
  },
  {
    "category_de": "Zeit & Datum (시간/날짜)",
    "category_ko": "시간 / 날짜 표현",
    "items": [
      {"de": "am Montag / Dienstag / ...", "ko": "월요일에 / 화요일에", "note": "am + 요일 (요일 앞에 항상 am)"},
      {"de": "um 15 Uhr / um halb drei", "ko": "15시에 / 2시 30분에", "note": "um + 시각. halb drei = 2:30!"},
      {"de": "am Vormittag / am Nachmittag / am Abend", "ko": "오전에 / 오후에 / 저녁에", "note": "am + 시간대"},
      {"de": "in der Nacht / um Mitternacht", "ko": "밤중에 / 자정에", "note": "Nacht는 in der 사용"},
      {"de": "am 15. März", "ko": "3월 15일에", "note": "am + 서수 + 월"},
      {"de": "vom 5. bis zum 8. Mai", "ko": "5월 5일부터 8일까지", "note": "vom~bis zum + 서수"},
      {"de": "morgens / mittags / abends / nachts", "ko": "아침에 / 정오에 / 저녁에 / 밤에", "note": "-s 어미 = 반복적"},
      {"de": "heute / morgen / übermorgen / gestern", "ko": "오늘 / 내일 / 모레 / 어제", "note": "전치사 없이 사용"},
      {"de": "diese Woche / nächste Woche / letzte Woche", "ko": "이번 주 / 다음 주 / 지난 주", "note": "관사 없이"},
      {"de": "vor zwei Tagen / in drei Tagen", "ko": "이틀 전 / 사흘 후", "note": "vor/in + 3격"},
      {"de": "seit zwei Monaten", "ko": "두 달 전부터", "note": "seit + 3격 (과거~현재 계속)"},
      {"de": "von ... bis ...", "ko": "~부터 ~까지", "note": "범위 표현"},
      {"de": "ab nächster Woche", "ko": "다음 주부터", "note": "ab + 3격"},
      {"de": "im Januar / Februar / ...", "ko": "1월에 / 2월에", "note": "im + 월"},
      {"de": "im Frühling / Sommer / Herbst / Winter", "ko": "봄에 / 여름에 / 가을에 / 겨울에", "note": "im + 계절"}
    ]
  },
  {
    "category_de": "Fragewörter (의문사)",
    "category_ko": "의문사",
    "items": [
      {"de": "wer", "ko": "누가 (1격)", "note": "Wer ist das?"},
      {"de": "wen", "ko": "누구를 (4격)", "note": "Wen kennst du?"},
      {"de": "wem", "ko": "누구에게 (3격)", "note": "Wem hilfst du?"},
      {"de": "was", "ko": "무엇", "note": "Was machst du?"},
      {"de": "wo", "ko": "어디서 (위치)", "note": "Wo wohnst du?"},
      {"de": "wohin", "ko": "어디로 (방향)", "note": "Wohin gehst du?"},
      {"de": "woher", "ko": "어디서 (출신)", "note": "Woher kommst du?"},
      {"de": "wann", "ko": "언제", "note": "Wann beginnt es?"},
      {"de": "wie", "ko": "어떻게", "note": "Wie geht es dir?"},
      {"de": "wie viel", "ko": "얼마나 (가격/양)", "note": "Wie viel kostet das?"},
      {"de": "wie viele", "ko": "몇 개", "note": "Wie viele Bücher?"},
      {"de": "wie lange", "ko": "얼마나 오래", "note": "Wie lange dauert das?"},
      {"de": "wie oft", "ko": "얼마나 자주", "note": "Wie oft trainierst du?"},
      {"de": "warum", "ko": "왜", "note": "Warum bist du müde?"},
      {"de": "welcher / welche / welches", "ko": "어느", "note": "성/격에 따라 변화"}
    ]
  },
  {
    "category_de": "Modalverben (화법조동사)",
    "category_ko": "화법조동사",
    "items": [
      {"de": "können → kann/kannst/kann", "ko": "~할 수 있다", "note": "능력/가능"},
      {"de": "müssen → muss/musst/muss", "ko": "~해야 한다", "note": "의무"},
      {"de": "dürfen → darf/darfst/darf", "ko": "~해도 된다", "note": "허가"},
      {"de": "sollen → soll/sollst/soll", "ko": "~해야 한다 (남의 의견)", "note": "지시/조언"},
      {"de": "wollen → will/willst/will", "ko": "~하고 싶다", "note": "강한 의지"},
      {"de": "möchten → möchte/möchtest/möchte", "ko": "~하고 싶다", "note": "정중한 표현"},
      {"de": "könnten (Konj.II)", "ko": "~할 수 있을까요", "note": "매우 정중"},
      {"de": "möchten (Konj.II 형태)", "ko": "~하고 싶다", "note": "정중함의 기본"},
      {"de": "würde + Inf.", "ko": "~할 텐데", "note": "정중한 가정"}
    ]
  },
  {
    "category_de": "Wichtige Präpositionen (주요 전치사)",
    "category_ko": "주요 전치사 (지배격)",
    "items": [
      {"de": "mit + Dat.", "ko": "~와 함께 / ~로", "note": "mit dem Bus / mit Freunden"},
      {"de": "bei + Dat.", "ko": "~에서 / ~에게", "note": "bei der Arbeit / beim Arzt"},
      {"de": "von + Dat.", "ko": "~에서 / ~의", "note": "von Berlin / vom Bahnhof"},
      {"de": "zu + Dat.", "ko": "~로 / ~에게", "note": "zur Arbeit / zum Arzt"},
      {"de": "aus + Dat.", "ko": "~에서 (출신)", "note": "aus Deutschland"},
      {"de": "nach + Dat.", "ko": "~후 / ~로 (도시)", "note": "nach der Arbeit / nach Berlin"},
      {"de": "seit + Dat.", "ko": "~이래로", "note": "seit zwei Jahren"},
      {"de": "gegenüber + Dat.", "ko": "건너편에", "note": "gegenüber der Bank"},
      {"de": "für + Akk.", "ko": "~을 위해 / ~에 대해", "note": "für dich / für die Party"},
      {"de": "ohne + Akk.", "ko": "~없이", "note": "ohne Milch"},
      {"de": "gegen + Akk.", "ko": "~에 대항 / ~에 대해", "note": "gegen Kopfschmerzen"},
      {"de": "um + Akk.", "ko": "~시에 / ~을 둘러", "note": "um 8 Uhr"},
      {"de": "durch + Akk.", "ko": "~을 통해", "note": "durch den Park"},
      {"de": "in + Dat./Akk.", "ko": "~에 (위치/방향)", "note": "in der Stadt(위치) / in die Stadt(방향)"},
      {"de": "an + Dat./Akk.", "ko": "~에 (접촉)", "note": "an der Wand / an die Wand"},
      {"de": "auf + Dat./Akk.", "ko": "~위에", "note": "auf dem Tisch / auf den Tisch"},
      {"de": "wegen + Gen.", "ko": "~ 때문에", "note": "wegen des Regens"},
      {"de": "während + Gen.", "ko": "~하는 동안", "note": "während der Pause"}
    ]
  },
  {
    "category_de": "Häufige Konjunktionen (자주 쓰는 접속사)",
    "category_ko": "자주 쓰는 접속사",
    "items": [
      {"de": "und", "ko": "그리고", "note": "등위, 어순 변화 없음"},
      {"de": "aber", "ko": "그러나", "note": "등위"},
      {"de": "oder", "ko": "또는", "note": "등위"},
      {"de": "denn", "ko": "왜냐하면", "note": "등위 (어순 변화 없음)"},
      {"de": "weil", "ko": "~때문에", "note": "종속 → 동사 끝으로"},
      {"de": "dass", "ko": "~라는 것을", "note": "종속 → 동사 끝으로"},
      {"de": "wenn", "ko": "만약 ~하면 / ~할 때", "note": "종속 → 동사 끝으로"},
      {"de": "als", "ko": "~했을 때 (과거 단일)", "note": "종속 → 동사 끝으로"},
      {"de": "obwohl", "ko": "~임에도 불구하고", "note": "종속 → 동사 끝으로"},
      {"de": "damit", "ko": "~하기 위해", "note": "종속 → 동사 끝으로"},
      {"de": "trotzdem", "ko": "그럼에도 불구하고", "note": "부사, 도치 일으킴"},
      {"de": "deshalb / deswegen", "ko": "그러므로", "note": "부사, 도치 일으킴"},
      {"de": "dann", "ko": "그러고 나서", "note": "부사, 도치 일으킴"},
      {"de": "außerdem", "ko": "게다가", "note": "부사, 도치 일으킴"}
    ]
  },
  {
    "category_de": "Wohnen Wortschatz (주거 어휘)",
    "category_ko": "주거 어휘",
    "items": [
      {"de": "die Wohnung / das Haus / das Zimmer", "ko": "아파트 / 집 / 방", "note": "기본"},
      {"de": "das Wohnzimmer / das Schlafzimmer / das Bad / die Küche", "ko": "거실 / 침실 / 욕실 / 주방", "note": "방 종류"},
      {"de": "der Balkon / der Garten / der Keller", "ko": "발코니 / 정원 / 지하실", "note": "기타 공간"},
      {"de": "die Miete / die Nebenkosten / die Kaution", "ko": "월세 / 관리비 / 보증금", "note": "임대 비용"},
      {"de": "warm / kalt (Miete)", "ko": "관리비 포함 / 미포함", "note": "Warmmiete / Kaltmiete"},
      {"de": "der Vermieter / der Mieter", "ko": "임대인 / 세입자", "note": "임대 관계"},
      {"de": "der Stock / das Stockwerk / das Erdgeschoss", "ko": "층 / 층 / 1층", "note": "EG = 1층, 1. Stock = 2층"},
      {"de": "die Möbel (pl.)", "ko": "가구", "note": "항상 복수"},
      {"de": "möbliert / unmöbliert", "ko": "가구 포함 / 미포함", "note": "임대 광고 어휘"},
      {"de": "die Heizung", "ko": "난방", "note": "die Heizung funktioniert nicht"},
      {"de": "umziehen", "ko": "이사하다", "note": "분리동사. sein 동사 (현재완료)"}
    ]
  },
  {
    "category_de": "Arbeit Wortschatz (직장 어휘)",
    "category_ko": "직장 어휘",
    "items": [
      {"de": "der Beruf / die Arbeit / die Stelle", "ko": "직업 / 일 / 자리(직장)", "note": "기본"},
      {"de": "arbeiten als + 직업 (관사 없이)", "ko": "~로 일하다", "note": "Ich arbeite als Lehrerin."},
      {"de": "der Chef / die Chefin", "ko": "상사 (남/여)", "note": "Mein Chef ist nett."},
      {"de": "der Kollege / die Kollegin / die Kollegen", "ko": "동료 (남/여/복수)", "note": "약변화 명사"},
      {"de": "die Vollzeitstelle / die Teilzeitstelle", "ko": "정규직 / 시간제", "note": "고용 형태"},
      {"de": "der Lebenslauf / die Bewerbung", "ko": "이력서 / 지원서", "note": "구직 서류"},
      {"de": "sich bewerben für + 4격", "ko": "~에 지원하다", "note": "재귀동사"},
      {"de": "das Gehalt / der Lohn", "ko": "월급 / 임금", "note": "Gehalt = 월급, Lohn = 시급/일급"},
      {"de": "die Arbeitszeit / die Pause", "ko": "근무시간 / 휴식", "note": "Arbeitszeit ist von 9 bis 17 Uhr."},
      {"de": "der Urlaub / die Ferien", "ko": "휴가 / 방학", "note": "Urlaub = 직장 휴가"},
      {"de": "der Termin / der Vertrag", "ko": "약속 / 계약", "note": "einen Termin haben"},
      {"de": "kündigen / die Kündigung", "ko": "해고/해지하다 / 해고", "note": "den Vertrag kündigen"},
      {"de": "die Krankmeldung", "ko": "병가 진단서", "note": "vom Arzt"},
      {"de": "in Rente gehen", "ko": "은퇴하다", "note": "Mein Vater geht in Rente."}
    ]
  },
  {
    "category_de": "Gesundheit Wortschatz (건강 어휘)",
    "category_ko": "건강 어휘",
    "items": [
      {"de": "der Arzt / die Ärztin", "ko": "의사 (남/여)", "note": "der Hausarzt = 주치의"},
      {"de": "die Praxis / das Krankenhaus", "ko": "진료소 / 병원", "note": "Praxis = 개인 진료소"},
      {"de": "der Termin / die Sprechstunde", "ko": "예약 / 진료시간", "note": "einen Termin vereinbaren"},
      {"de": "die Krankenkasse / die Versicherung", "ko": "건강보험 / 보험", "note": "독일 의료체계"},
      {"de": "krank / gesund", "ko": "아픈 / 건강한", "note": "Ich bin krank."},
      {"de": "die Schmerzen (pl.)", "ko": "통증", "note": "Kopfschmerzen / Bauchschmerzen / Zahnschmerzen"},
      {"de": "wehtun + Dat.", "ko": "~가 아프다", "note": "Mein Kopf tut mir weh. (분리동사)"},
      {"de": "das Fieber / der Husten / der Schnupfen", "ko": "열 / 기침 / 콧물", "note": "감기 증상"},
      {"de": "die Erkältung / die Grippe", "ko": "감기 / 독감", "note": "eine Erkältung haben"},
      {"de": "die Tabletten / die Medikamente", "ko": "알약 / 약", "note": "Tabletten nehmen"},
      {"de": "die Apotheke", "ko": "약국", "note": "in die Apotheke gehen"},
      {"de": "das Rezept", "ko": "처방전 / 레시피", "note": "rezeptpflichtig = 처방 필요"},
      {"de": "untersuchen", "ko": "검진하다", "note": "Der Arzt untersucht mich."},
      {"de": "gesund werden", "ko": "낫다", "note": "Ich werde bald gesund."}
    ]
  },
  {
    "category_de": "Einkaufen Wortschatz (쇼핑 어휘)",
    "category_ko": "쇼핑 어휘",
    "items": [
      {"de": "der Supermarkt / das Geschäft / das Kaufhaus", "ko": "슈퍼 / 상점 / 백화점", "note": "쇼핑 장소"},
      {"de": "die Größe / die Farbe", "ko": "사이즈 / 색상", "note": "in Größe M / in welcher Farbe?"},
      {"de": "der Preis / kosten / billig / teuer", "ko": "가격 / 비용이 들다 / 싼 / 비싼", "note": "Wie viel kostet das?"},
      {"de": "günstig / preiswert", "ko": "저렴한 / 가성비 좋은", "note": "billig보다 긍정적"},
      {"de": "der Rabatt / der Sonderpreis", "ko": "할인 / 특가", "note": "im Angebot = 세일 중"},
      {"de": "die Kasse / die Rechnung / der Kassenbon", "ko": "계산대 / 청구서 / 영수증", "note": "an der Kasse bezahlen"},
      {"de": "mit Karte / bar bezahlen", "ko": "카드로 / 현금으로 결제", "note": "결제 방법"},
      {"de": "umtauschen / zurückgeben / die Rückerstattung", "ko": "교환 / 반품 / 환불", "note": "분리동사"},
      {"de": "die Reklamation / die Beschwerde", "ko": "불만 신고", "note": "eine Beschwerde einreichen"},
      {"de": "online bestellen / die Lieferung", "ko": "온라인 주문 / 배송", "note": "im Internet bestellen"},
      {"de": "der Verkäufer / die Verkäuferin", "ko": "판매원 (남/여)", "note": "직업"}
    ]
  },
  {
    "category_de": "Reisen Wortschatz (여행 어휘)",
    "category_ko": "여행 어휘",
    "items": [
      {"de": "der Bahnhof / der Flughafen / die Haltestelle", "ko": "기차역 / 공항 / 정류장", "note": "교통 장소"},
      {"de": "die Fahrkarte / das Ticket", "ko": "승차권 / 티켓", "note": "eine Fahrkarte kaufen"},
      {"de": "hin und zurück / einfach", "ko": "왕복 / 편도", "note": "Eine Fahrkarte hin und zurück, bitte."},
      {"de": "die Verspätung", "ko": "지연", "note": "Der Zug hat 20 Min. Verspätung."},
      {"de": "umsteigen", "ko": "환승하다", "note": "분리동사. Ich muss in Frankfurt umsteigen."},
      {"de": "abfahren / ankommen", "ko": "출발하다 / 도착하다", "note": "분리동사 + sein 동사"},
      {"de": "das Gleis", "ko": "플랫폼", "note": "Von welchem Gleis?"},
      {"de": "das Hotel / die Pension / die Jugendherberge", "ko": "호텔 / 펜션 / 유스호스텔", "note": "숙박 종류"},
      {"de": "ein Zimmer reservieren / buchen", "ko": "방 예약하다", "note": "Ich möchte ein Zimmer reservieren."},
      {"de": "das Einzelzimmer / das Doppelzimmer", "ko": "싱글룸 / 더블룸", "note": "객실 종류"},
      {"de": "die Halbpension / die Vollpension", "ko": "조식+석식 / 3식", "note": "패키지"},
      {"de": "der Koffer / das Gepäck", "ko": "여행가방 / 짐", "note": "Mein Koffer ist schwer."},
      {"de": "der Reisepass / der Personalausweis", "ko": "여권 / 신분증", "note": "여행 필수품"},
      {"de": "die Sehenswürdigkeit", "ko": "관광 명소", "note": "Sehenswürdigkeiten besuchen"}
    ]
  },
  {
    "category_de": "Essen Wortschatz (음식 어휘)",
    "category_ko": "음식 어휘",
    "items": [
      {"de": "das Frühstück / das Mittagessen / das Abendessen", "ko": "아침 / 점심 / 저녁식사", "note": "Zum Frühstück esse ich..."},
      {"de": "der Hunger / der Durst", "ko": "배고픔 / 갈증", "note": "Ich habe Hunger."},
      {"de": "das Brot / das Brötchen / der Käse", "ko": "빵 / 작은 빵 / 치즈", "note": "독일 아침"},
      {"de": "das Fleisch / der Fisch / das Gemüse / das Obst", "ko": "고기 / 생선 / 채소 / 과일", "note": "기본 식품군"},
      {"de": "die Vorspeise / das Hauptgericht / der Nachtisch", "ko": "전채 / 본식 / 후식", "note": "식당 코스"},
      {"de": "die Speisekarte / das Menü", "ko": "메뉴판 / 메뉴", "note": "Die Speisekarte, bitte."},
      {"de": "bestellen / empfehlen", "ko": "주문하다 / 추천하다", "note": "Was empfehlen Sie?"},
      {"de": "zahlen / die Rechnung", "ko": "지불하다 / 계산서", "note": "Die Rechnung, bitte!"},
      {"de": "zusammen / getrennt", "ko": "함께 / 따로 (결제)", "note": "종업원의 질문"},
      {"de": "schmecken + Dat.", "ko": "맛있다 / 입맛에 맞다", "note": "Das schmeckt mir."},
      {"de": "Vegetarier / Veganer", "ko": "채식주의자 / 비건", "note": "Ich bin Vegetarier."},
      {"de": "allergisch gegen + 4격", "ko": "~에 알레르기가 있는", "note": "Ich bin allergisch gegen Nüsse."}
    ]
  },
  {
    "category_de": "Häufige Adjektive (자주 쓰는 형용사)",
    "category_ko": "자주 쓰는 형용사",
    "items": [
      {"de": "gut / schlecht", "ko": "좋은 / 나쁜", "note": "기본"},
      {"de": "groß / klein", "ko": "큰 / 작은", "note": "크기"},
      {"de": "neu / alt", "ko": "새로운 / 오래된", "note": "상태/나이"},
      {"de": "jung / alt", "ko": "젊은 / 늙은", "note": "사람 나이"},
      {"de": "schön / hässlich", "ko": "예쁜 / 못생긴", "note": "외모"},
      {"de": "teuer / billig / günstig", "ko": "비싼 / 싼 / 저렴한", "note": "가격"},
      {"de": "schnell / langsam", "ko": "빠른 / 느린", "note": "속도"},
      {"de": "einfach / schwierig", "ko": "쉬운 / 어려운", "note": "난이도"},
      {"de": "interessant / langweilig", "ko": "흥미로운 / 지루한", "note": "감정"},
      {"de": "wichtig / unwichtig", "ko": "중요한 / 안 중요한", "note": "중요도"},
      {"de": "möglich / unmöglich", "ko": "가능한 / 불가능한", "note": "가능성"},
      {"de": "frei / besetzt", "ko": "비어있는 / 차있는", "note": "자리"},
      {"de": "geöffnet / geschlossen", "ko": "열린 / 닫힌", "note": "영업"},
      {"de": "krank / gesund / müde", "ko": "아픈 / 건강한 / 피곤한", "note": "건강 상태"},
      {"de": "froh / traurig / wütend", "ko": "기쁜 / 슬픈 / 화난", "note": "감정"},
      {"de": "ruhig / laut", "ko": "조용한 / 시끄러운", "note": "소리"},
      {"de": "sauber / schmutzig", "ko": "깨끗한 / 더러운", "note": "청결"},
      {"de": "warm / kalt / heiß", "ko": "따뜻한 / 추운 / 뜨거운", "note": "온도"},
      {"de": "lecker / scharf / süß / salzig", "ko": "맛있는 / 매운 / 단 / 짠", "note": "맛"}
    ]
  },
  {
    "category_de": "Wichtige Verben (시험 빈출 동사)",
    "category_ko": "시험 빈출 동사",
    "items": [
      {"de": "haben / sein / werden", "ko": "가지다 / 이다 / 되다", "note": "최기본 동사"},
      {"de": "machen / tun", "ko": "하다", "note": "Was machst du?"},
      {"de": "gehen / kommen / fahren", "ko": "가다 / 오다 / (타고) 가다", "note": "이동 (sein 동사)"},
      {"de": "sehen / hören / sprechen", "ko": "보다 / 듣다 / 말하다", "note": "감각"},
      {"de": "essen / trinken / kochen", "ko": "먹다 / 마시다 / 요리하다", "note": "음식"},
      {"de": "kaufen / verkaufen / bezahlen", "ko": "사다 / 팔다 / 지불하다", "note": "쇼핑"},
      {"de": "arbeiten / lernen / studieren", "ko": "일하다 / 배우다 / 대학공부하다", "note": "활동"},
      {"de": "wohnen / leben", "ko": "살다 / 생활하다", "note": "wohnen = 거주, leben = 생활"},
      {"de": "schlafen / aufwachen / aufstehen", "ko": "자다 / 깨다 / 일어나다", "note": "분리동사 포함"},
      {"de": "anfangen / beginnen / aufhören", "ko": "시작하다 / 시작하다 / 끝내다", "note": "anfangen은 분리동사"},
      {"de": "treffen / besuchen / kennenlernen", "ko": "만나다 / 방문하다 / 알게되다", "note": "sich treffen = 만나다(재귀)"},
      {"de": "anrufen / schreiben / antworten", "ko": "전화하다 / 쓰다 / 답하다", "note": "소통"},
      {"de": "helfen + Dat.", "ko": "돕다", "note": "Ich helfe dir."},
      {"de": "danken + Dat. für + Akk.", "ko": "감사하다", "note": "Ich danke dir für die Hilfe."},
      {"de": "passen + Dat.", "ko": "맞다", "note": "Das passt mir."},
      {"de": "gefallen + Dat.", "ko": "마음에 들다", "note": "Das gefällt mir."},
      {"de": "gehören + Dat.", "ko": "~의 것이다", "note": "Das gehört mir."},
      {"de": "geben + Dat. + Akk.", "ko": "주다", "note": "Ich gebe dir das Buch."},
      {"de": "bringen / holen / nehmen", "ko": "가져오다 / 가져오다 / 잡다", "note": "이동 동사"},
      {"de": "wissen / kennen", "ko": "알다 (사실) / 알다 (사람/사물)", "note": "Ich weiß das. / Ich kenne ihn."},
      {"de": "denken / glauben / meinen", "ko": "생각하다 / 믿다 / 의견이다", "note": "의견"},
      {"de": "möchten / wollen / mögen", "ko": "~하고싶다 / 원하다 / 좋아하다", "note": "선호"}
    ]
  },
  {
    "category_de": "Häufige Reflexivverben (재귀동사)",
    "category_ko": "자주 쓰는 재귀동사",
    "items": [
      {"de": "sich freuen auf/über + Akk.", "ko": "기대하다 / 기뻐하다", "note": "auf = 미래 일, über = 과거 일"},
      {"de": "sich interessieren für + Akk.", "ko": "~에 관심있다", "note": "Ich interessiere mich für Musik."},
      {"de": "sich treffen", "ko": "만나다", "note": "Wir treffen uns um 18 Uhr."},
      {"de": "sich erinnern an + Akk.", "ko": "기억하다", "note": "Ich erinnere mich an dich."},
      {"de": "sich entscheiden", "ko": "결정하다", "note": "Ich entscheide mich für..."},
      {"de": "sich entschuldigen", "ko": "사과하다", "note": "Ich entschuldige mich."},
      {"de": "sich anmelden / abmelden", "ko": "등록하다 / 해지하다", "note": "분리동사 + 재귀"},
      {"de": "sich bewerben für + Akk.", "ko": "지원하다", "note": "구직"},
      {"de": "sich vorbereiten auf + Akk.", "ko": "준비하다", "note": "분리동사 + 재귀"},
      {"de": "sich anziehen / ausziehen", "ko": "옷 입다 / 벗다", "note": "분리동사 + 재귀"},
      {"de": "sich waschen / duschen", "ko": "씻다 / 샤워하다", "note": "Ich dusche mich."},
      {"de": "sich beeilen", "ko": "서두르다", "note": "Beeil dich!"},
      {"de": "sich erholen", "ko": "쉬다, 회복하다", "note": "im Urlaub"},
      {"de": "sich fühlen", "ko": "느끼다", "note": "Wie fühlst du dich?"},
      {"de": "sich vorstellen", "ko": "자기소개하다 / 상상하다", "note": "Ich stelle mich vor."}
    ]
  },
  {
    "category_de": "Häufige Trennbare Verben (자주 쓰는 분리동사)",
    "category_ko": "자주 쓰는 분리동사",
    "items": [
      {"de": "aufstehen", "ko": "일어나다", "note": "Ich stehe um 7 auf."},
      {"de": "anfangen / aufhören", "ko": "시작하다 / 끝내다", "note": "Der Kurs fängt um 9 an."},
      {"de": "anrufen", "ko": "전화하다", "note": "Ich rufe dich an."},
      {"de": "einkaufen", "ko": "쇼핑하다", "note": "Ich gehe einkaufen."},
      {"de": "einladen", "ko": "초대하다", "note": "Ich lade dich ein."},
      {"de": "abholen", "ko": "데려오다", "note": "Ich hole dich vom Bahnhof ab."},
      {"de": "mitbringen", "ko": "가져오다", "note": "Bring etwas zu trinken mit."},
      {"de": "mitkommen", "ko": "같이 오다", "note": "Kommst du mit?"},
      {"de": "ausgehen", "ko": "외출하다", "note": "Wir gehen heute Abend aus."},
      {"de": "vorbereiten", "ko": "준비하다", "note": "Ich bereite das Essen vor."},
      {"de": "vorhaben", "ko": "계획하다", "note": "Was hast du heute vor?"},
      {"de": "vorschlagen", "ko": "제안하다", "note": "Ich schlage Freitag vor."},
      {"de": "vorstellen (sich)", "ko": "소개하다 (재귀)", "note": "Ich stelle mich vor."},
      {"de": "ankommen / abfahren", "ko": "도착 / 출발하다", "note": "교통 (sein 동사)"},
      {"de": "umsteigen", "ko": "환승하다", "note": "Ich steige in Frankfurt um."},
      {"de": "stattfinden", "ko": "개최되다", "note": "Die Party findet am Samstag statt."},
      {"de": "fernsehen", "ko": "TV 보다", "note": "Ich sehe abends fern."},
      {"de": "aufmachen / zumachen", "ko": "열다 / 닫다", "note": "Mach das Fenster auf!"},
      {"de": "anziehen / ausziehen", "ko": "옷 입다 / 벗다", "note": "재귀로 자주 사용"},
      {"de": "weggehen / zurückkommen", "ko": "떠나다 / 돌아오다", "note": "Wann kommst du zurück?"}
    ]
  }
];
