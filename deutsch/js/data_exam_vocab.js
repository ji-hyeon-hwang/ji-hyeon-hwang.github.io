const EXAM_VOCAB = [
  {
    "category_de": "Anrede & Schluss (이메일 인사/마무리)",
    "category_ko": "이메일 인사 / 마무리",
    "items": [
      {
        "de": "Sehr geehrte Frau ...,",
        "ko": "~여사님께,",
        "note": "여성 격식체 시작"
      },
      {
        "de": "Sehr geehrter Herr ...,",
        "ko": "~씨께, (남성)",
        "note": "남성 격식체 시작"
      },
      {
        "de": "Sehr geehrte Damen und Herren,",
        "ko": "관계자 분께,",
        "note": "수신인 모를 때 (기관)"
      },
      {
        "de": "Liebe ...,",
        "ko": "친애하는 ~ (여),",
        "note": "비격식 여성"
      },
      {
        "de": "Lieber ...,",
        "ko": "친애하는 ~ (남),",
        "note": "비격식 남성"
      },
      {
        "de": "Hallo ...,",
        "ko": "안녕 ~,",
        "note": "친한 사이"
      },
      {
        "de": "Mit freundlichen Grüßen",
        "ko": "경의를 담아",
        "note": "격식체 마무리 (쉼표 없음)"
      },
      {
        "de": "Viele Grüße",
        "ko": "안부 전합니다",
        "note": "반격식 마무리"
      },
      {
        "de": "Liebe Grüße",
        "ko": "다정한 안부를",
        "note": "친구에게 마무리"
      },
      {
        "de": "Bis bald!",
        "ko": "곧 봐!",
        "note": "친구에게"
      }
    ]
  },
  {
    "category_de": "Zeit & Datum (시간/날짜)",
    "category_ko": "시간 / 날짜 표현",
    "items": [
      {
        "de": "am Montag / Dienstag / ...",
        "ko": "월요일에 / 화요일에",
        "note": "am + 요일 (요일 앞에 항상 am)"
      },
      {
        "de": "um 15 Uhr / um halb drei",
        "ko": "15시에 / 2시 30분에",
        "note": "um + 시각. halb drei = 2:30!"
      },
      {
        "de": "am Vormittag / am Nachmittag / am Abend",
        "ko": "오전에 / 오후에 / 저녁에",
        "note": "am + 시간대"
      },
      {
        "de": "in der Nacht / um Mitternacht",
        "ko": "밤중에 / 자정에",
        "note": "Nacht는 in der 사용"
      },
      {
        "de": "am 15. März",
        "ko": "3월 15일에",
        "note": "am + 서수 + 월"
      },
      {
        "de": "vom 5. bis zum 8. Mai",
        "ko": "5월 5일부터 8일까지",
        "note": "vom~bis zum + 서수"
      },
      {
        "de": "morgens / mittags / abends / nachts",
        "ko": "아침에 / 정오에 / 저녁에 / 밤에",
        "note": "-s 어미 = 반복적"
      },
      {
        "de": "heute / morgen / übermorgen / gestern",
        "ko": "오늘 / 내일 / 모레 / 어제",
        "note": "전치사 없이 사용"
      },
      {
        "de": "diese Woche / nächste Woche / letzte Woche",
        "ko": "이번 주 / 다음 주 / 지난 주",
        "note": "관사 없이"
      },
      {
        "de": "vor zwei Tagen / in drei Tagen",
        "ko": "이틀 전 / 사흘 후",
        "note": "vor/in + 3격"
      },
      {
        "de": "seit zwei Monaten",
        "ko": "두 달 전부터",
        "note": "seit + 3격 (과거~현재 계속)"
      },
      {
        "de": "von ... bis ...",
        "ko": "~부터 ~까지",
        "note": "범위 표현"
      },
      {
        "de": "ab nächster Woche",
        "ko": "다음 주부터",
        "note": "ab + 3격"
      },
      {
        "de": "im Januar / Februar / ...",
        "ko": "1월에 / 2월에",
        "note": "im + 월"
      },
      {
        "de": "im Frühling / Sommer / Herbst / Winter",
        "ko": "봄에 / 여름에 / 가을에 / 겨울에",
        "note": "im + 계절"
      }
    ]
  },
  {
    "category_de": "Fragewörter (의문사)",
    "category_ko": "의문사",
    "items": [
      {
        "de": "wer",
        "ko": "누가 (1격)",
        "note": "Wer ist das?"
      },
      {
        "de": "wen",
        "ko": "누구를 (4격)",
        "note": "Wen kennst du?"
      },
      {
        "de": "wem",
        "ko": "누구에게 (3격)",
        "note": "Wem hilfst du?"
      },
      {
        "de": "was",
        "ko": "무엇",
        "note": "Was machst du?"
      },
      {
        "de": "wo",
        "ko": "어디서 (위치)",
        "note": "Wo wohnst du?"
      },
      {
        "de": "wohin",
        "ko": "어디로 (방향)",
        "note": "Wohin gehst du?"
      },
      {
        "de": "woher",
        "ko": "어디서 (출신)",
        "note": "Woher kommst du?"
      },
      {
        "de": "wann",
        "ko": "언제",
        "note": "Wann beginnt es?"
      },
      {
        "de": "wie",
        "ko": "어떻게",
        "note": "Wie geht es dir?"
      },
      {
        "de": "wie viel",
        "ko": "얼마나 (가격/양)",
        "note": "Wie viel kostet das?"
      },
      {
        "de": "wie viele",
        "ko": "몇 개",
        "note": "Wie viele Bücher?"
      },
      {
        "de": "wie lange",
        "ko": "얼마나 오래",
        "note": "Wie lange dauert das?"
      },
      {
        "de": "wie oft",
        "ko": "얼마나 자주",
        "note": "Wie oft trainierst du?"
      },
      {
        "de": "warum",
        "ko": "왜",
        "note": "Warum bist du müde?"
      },
      {
        "de": "welcher / welche / welches",
        "ko": "어느",
        "note": "성/격에 따라 변화"
      }
    ]
  },
  {
    "category_de": "Modalverben (화법조동사)",
    "category_ko": "화법조동사",
    "items": [
      {
        "de": "können → kann/kannst/kann",
        "ko": "~할 수 있다",
        "note": "능력/가능"
      },
      {
        "de": "müssen → muss/musst/muss",
        "ko": "~해야 한다",
        "note": "의무"
      },
      {
        "de": "dürfen → darf/darfst/darf",
        "ko": "~해도 된다",
        "note": "허가"
      },
      {
        "de": "sollen → soll/sollst/soll",
        "ko": "~해야 한다 (남의 의견)",
        "note": "지시/조언"
      },
      {
        "de": "wollen → will/willst/will",
        "ko": "~하고 싶다",
        "note": "강한 의지"
      },
      {
        "de": "möchten → möchte/möchtest/möchte",
        "ko": "~하고 싶다",
        "note": "정중한 표현"
      },
      {
        "de": "könnten (Konj.II)",
        "ko": "~할 수 있을까요",
        "note": "매우 정중"
      },
      {
        "de": "möchten (Konj.II 형태)",
        "ko": "~하고 싶다",
        "note": "정중함의 기본"
      },
      {
        "de": "würde + Inf.",
        "ko": "~할 텐데",
        "note": "정중한 가정"
      }
    ]
  },
  {
    "category_de": "Wichtige Präpositionen (주요 전치사)",
    "category_ko": "주요 전치사 (지배격)",
    "items": [
      {
        "de": "mit + Dat.",
        "ko": "~와 함께 / ~로",
        "note": "mit dem Bus / mit Freunden"
      },
      {
        "de": "bei + Dat.",
        "ko": "~에서 / ~에게",
        "note": "bei der Arbeit / beim Arzt"
      },
      {
        "de": "von + Dat.",
        "ko": "~에서 / ~의",
        "note": "von Berlin / vom Bahnhof"
      },
      {
        "de": "zu + Dat.",
        "ko": "~로 / ~에게",
        "note": "zur Arbeit / zum Arzt"
      },
      {
        "de": "aus + Dat.",
        "ko": "~에서 (출신)",
        "note": "aus Deutschland"
      },
      {
        "de": "nach + Dat.",
        "ko": "~후 / ~로 (도시)",
        "note": "nach der Arbeit / nach Berlin"
      },
      {
        "de": "seit + Dat.",
        "ko": "~이래로",
        "note": "seit zwei Jahren"
      },
      {
        "de": "gegenüber + Dat.",
        "ko": "건너편에",
        "note": "gegenüber der Bank"
      },
      {
        "de": "für + Akk.",
        "ko": "~을 위해 / ~에 대해",
        "note": "für dich / für die Party"
      },
      {
        "de": "ohne + Akk.",
        "ko": "~없이",
        "note": "ohne Milch"
      },
      {
        "de": "gegen + Akk.",
        "ko": "~에 대항 / ~에 대해",
        "note": "gegen Kopfschmerzen"
      },
      {
        "de": "um + Akk.",
        "ko": "~시에 / ~을 둘러",
        "note": "um 8 Uhr"
      },
      {
        "de": "durch + Akk.",
        "ko": "~을 통해",
        "note": "durch den Park"
      },
      {
        "de": "in + Dat./Akk.",
        "ko": "~에 (위치/방향)",
        "note": "in der Stadt(위치) / in die Stadt(방향)"
      },
      {
        "de": "an + Dat./Akk.",
        "ko": "~에 (접촉)",
        "note": "an der Wand / an die Wand"
      },
      {
        "de": "auf + Dat./Akk.",
        "ko": "~위에",
        "note": "auf dem Tisch / auf den Tisch"
      },
      {
        "de": "wegen + Gen.",
        "ko": "~ 때문에",
        "note": "wegen des Regens"
      },
      {
        "de": "während + Gen.",
        "ko": "~하는 동안",
        "note": "während der Pause"
      }
    ]
  },
  {
    "category_de": "Häufige Konjunktionen (자주 쓰는 접속사)",
    "category_ko": "자주 쓰는 접속사",
    "items": [
      {
        "de": "und",
        "ko": "그리고",
        "note": "등위, 어순 변화 없음"
      },
      {
        "de": "aber",
        "ko": "그러나",
        "note": "등위"
      },
      {
        "de": "oder",
        "ko": "또는",
        "note": "등위"
      },
      {
        "de": "denn",
        "ko": "왜냐하면",
        "note": "등위 (어순 변화 없음)"
      },
      {
        "de": "weil",
        "ko": "~때문에",
        "note": "종속 → 동사 끝으로"
      },
      {
        "de": "dass",
        "ko": "~라는 것을",
        "note": "종속 → 동사 끝으로"
      },
      {
        "de": "wenn",
        "ko": "만약 ~하면 / ~할 때",
        "note": "종속 → 동사 끝으로"
      },
      {
        "de": "als",
        "ko": "~했을 때 (과거 단일)",
        "note": "종속 → 동사 끝으로"
      },
      {
        "de": "obwohl",
        "ko": "~임에도 불구하고",
        "note": "종속 → 동사 끝으로"
      },
      {
        "de": "damit",
        "ko": "~하기 위해",
        "note": "종속 → 동사 끝으로"
      },
      {
        "de": "trotzdem",
        "ko": "그럼에도 불구하고",
        "note": "부사, 도치 일으킴"
      },
      {
        "de": "deshalb / deswegen",
        "ko": "그러므로",
        "note": "부사, 도치 일으킴"
      },
      {
        "de": "dann",
        "ko": "그러고 나서",
        "note": "부사, 도치 일으킴"
      },
      {
        "de": "außerdem",
        "ko": "게다가",
        "note": "부사, 도치 일으킴"
      }
    ]
  },
  {
    "category_de": "Wohnen Wortschatz (주거 어휘)",
    "category_ko": "주거 어휘",
    "items": [
      {
        "de": "die Wohnung / das Haus / das Zimmer",
        "ko": "아파트 / 집 / 방",
        "note": "기본"
      },
      {
        "de": "das Wohnzimmer / das Schlafzimmer / das Bad / die Küche",
        "ko": "거실 / 침실 / 욕실 / 주방",
        "note": "방 종류"
      },
      {
        "de": "der Balkon / der Garten / der Keller",
        "ko": "발코니 / 정원 / 지하실",
        "note": "기타 공간"
      },
      {
        "de": "die Miete / die Nebenkosten / die Kaution",
        "ko": "월세 / 관리비 / 보증금",
        "note": "임대 비용"
      },
      {
        "de": "warm / kalt (Miete)",
        "ko": "관리비 포함 / 미포함",
        "note": "Warmmiete / Kaltmiete"
      },
      {
        "de": "der Vermieter / der Mieter",
        "ko": "임대인 / 세입자",
        "note": "임대 관계"
      },
      {
        "de": "der Stock / das Stockwerk / das Erdgeschoss",
        "ko": "층 / 층 / 1층",
        "note": "EG = 1층, 1. Stock = 2층"
      },
      {
        "de": "die Möbel (pl.)",
        "ko": "가구",
        "note": "항상 복수"
      },
      {
        "de": "möbliert / unmöbliert",
        "ko": "가구 포함 / 미포함",
        "note": "임대 광고 어휘"
      },
      {
        "de": "die Heizung",
        "ko": "난방",
        "note": "die Heizung funktioniert nicht"
      },
      {
        "de": "umziehen",
        "ko": "이사하다",
        "note": "분리동사. sein 동사 (현재완료)"
      }
    ]
  },
  {
    "category_de": "Arbeit Wortschatz (직장 어휘)",
    "category_ko": "직장 어휘",
    "items": [
      {
        "de": "der Beruf / die Arbeit / die Stelle",
        "ko": "직업 / 일 / 자리(직장)",
        "note": "기본"
      },
      {
        "de": "arbeiten als + 직업 (관사 없이)",
        "ko": "~로 일하다",
        "note": "Ich arbeite als Lehrerin."
      },
      {
        "de": "der Chef / die Chefin",
        "ko": "상사 (남/여)",
        "note": "Mein Chef ist nett."
      },
      {
        "de": "der Kollege / die Kollegin / die Kollegen",
        "ko": "동료 (남/여/복수)",
        "note": "약변화 명사"
      },
      {
        "de": "die Vollzeitstelle / die Teilzeitstelle",
        "ko": "정규직 / 시간제",
        "note": "고용 형태"
      },
      {
        "de": "der Lebenslauf / die Bewerbung",
        "ko": "이력서 / 지원서",
        "note": "구직 서류"
      },
      {
        "de": "sich bewerben für + 4격",
        "ko": "~에 지원하다",
        "note": "재귀동사"
      },
      {
        "de": "das Gehalt / der Lohn",
        "ko": "월급 / 임금",
        "note": "Gehalt = 월급, Lohn = 시급/일급"
      },
      {
        "de": "die Arbeitszeit / die Pause",
        "ko": "근무시간 / 휴식",
        "note": "Arbeitszeit ist von 9 bis 17 Uhr."
      },
      {
        "de": "der Urlaub / die Ferien",
        "ko": "휴가 / 방학",
        "note": "Urlaub = 직장 휴가"
      },
      {
        "de": "der Termin / der Vertrag",
        "ko": "약속 / 계약",
        "note": "einen Termin haben"
      },
      {
        "de": "kündigen / die Kündigung",
        "ko": "해고/해지하다 / 해고",
        "note": "den Vertrag kündigen"
      },
      {
        "de": "die Krankmeldung",
        "ko": "병가 진단서",
        "note": "vom Arzt"
      },
      {
        "de": "in Rente gehen",
        "ko": "은퇴하다",
        "note": "Mein Vater geht in Rente."
      }
    ]
  },
  {
    "category_de": "Gesundheit Wortschatz (건강 어휘)",
    "category_ko": "건강 어휘",
    "items": [
      {
        "de": "der Arzt / die Ärztin",
        "ko": "의사 (남/여)",
        "note": "der Hausarzt = 주치의"
      },
      {
        "de": "die Praxis / das Krankenhaus",
        "ko": "진료소 / 병원",
        "note": "Praxis = 개인 진료소"
      },
      {
        "de": "der Termin / die Sprechstunde",
        "ko": "예약 / 진료시간",
        "note": "einen Termin vereinbaren"
      },
      {
        "de": "die Krankenkasse / die Versicherung",
        "ko": "건강보험 / 보험",
        "note": "독일 의료체계"
      },
      {
        "de": "krank / gesund",
        "ko": "아픈 / 건강한",
        "note": "Ich bin krank."
      },
      {
        "de": "die Schmerzen (pl.)",
        "ko": "통증",
        "note": "Kopfschmerzen / Bauchschmerzen / Zahnschmerzen"
      },
      {
        "de": "wehtun + Dat.",
        "ko": "~가 아프다",
        "note": "Mein Kopf tut mir weh. (분리동사)"
      },
      {
        "de": "das Fieber / der Husten / der Schnupfen",
        "ko": "열 / 기침 / 콧물",
        "note": "감기 증상"
      },
      {
        "de": "die Erkältung / die Grippe",
        "ko": "감기 / 독감",
        "note": "eine Erkältung haben"
      },
      {
        "de": "die Tabletten / die Medikamente",
        "ko": "알약 / 약",
        "note": "Tabletten nehmen"
      },
      {
        "de": "die Apotheke",
        "ko": "약국",
        "note": "in die Apotheke gehen"
      },
      {
        "de": "das Rezept",
        "ko": "처방전 / 레시피",
        "note": "rezeptpflichtig = 처방 필요"
      },
      {
        "de": "untersuchen",
        "ko": "검진하다",
        "note": "Der Arzt untersucht mich."
      },
      {
        "de": "gesund werden",
        "ko": "낫다",
        "note": "Ich werde bald gesund."
      }
    ]
  },
  {
    "category_de": "Einkaufen Wortschatz (쇼핑 어휘)",
    "category_ko": "쇼핑 어휘",
    "items": [
      {
        "de": "der Supermarkt / das Geschäft / das Kaufhaus",
        "ko": "슈퍼 / 상점 / 백화점",
        "note": "쇼핑 장소"
      },
      {
        "de": "die Größe / die Farbe",
        "ko": "사이즈 / 색상",
        "note": "in Größe M / in welcher Farbe?"
      },
      {
        "de": "der Preis / kosten / billig / teuer",
        "ko": "가격 / 비용이 들다 / 싼 / 비싼",
        "note": "Wie viel kostet das?"
      },
      {
        "de": "günstig / preiswert",
        "ko": "저렴한 / 가성비 좋은",
        "note": "billig보다 긍정적"
      },
      {
        "de": "der Rabatt / der Sonderpreis",
        "ko": "할인 / 특가",
        "note": "im Angebot = 세일 중"
      },
      {
        "de": "die Kasse / die Rechnung / der Kassenbon",
        "ko": "계산대 / 청구서 / 영수증",
        "note": "an der Kasse bezahlen"
      },
      {
        "de": "mit Karte / bar bezahlen",
        "ko": "카드로 / 현금으로 결제",
        "note": "결제 방법"
      },
      {
        "de": "umtauschen / zurückgeben / die Rückerstattung",
        "ko": "교환 / 반품 / 환불",
        "note": "분리동사"
      },
      {
        "de": "die Reklamation / die Beschwerde",
        "ko": "불만 신고",
        "note": "eine Beschwerde einreichen"
      },
      {
        "de": "online bestellen / die Lieferung",
        "ko": "온라인 주문 / 배송",
        "note": "im Internet bestellen"
      },
      {
        "de": "der Verkäufer / die Verkäuferin",
        "ko": "판매원 (남/여)",
        "note": "직업"
      }
    ]
  },
  {
    "category_de": "Reisen Wortschatz (여행 어휘)",
    "category_ko": "여행 어휘",
    "items": [
      {
        "de": "der Bahnhof / der Flughafen / die Haltestelle",
        "ko": "기차역 / 공항 / 정류장",
        "note": "교통 장소"
      },
      {
        "de": "die Fahrkarte / das Ticket",
        "ko": "승차권 / 티켓",
        "note": "eine Fahrkarte kaufen"
      },
      {
        "de": "hin und zurück / einfach",
        "ko": "왕복 / 편도",
        "note": "Eine Fahrkarte hin und zurück, bitte."
      },
      {
        "de": "die Verspätung",
        "ko": "지연",
        "note": "Der Zug hat 20 Min. Verspätung."
      },
      {
        "de": "umsteigen",
        "ko": "환승하다",
        "note": "분리동사. Ich muss in Frankfurt umsteigen."
      },
      {
        "de": "abfahren / ankommen",
        "ko": "출발하다 / 도착하다",
        "note": "분리동사 + sein 동사"
      },
      {
        "de": "das Gleis",
        "ko": "플랫폼",
        "note": "Von welchem Gleis?"
      },
      {
        "de": "das Hotel / die Pension / die Jugendherberge",
        "ko": "호텔 / 펜션 / 유스호스텔",
        "note": "숙박 종류"
      },
      {
        "de": "ein Zimmer reservieren / buchen",
        "ko": "방 예약하다",
        "note": "Ich möchte ein Zimmer reservieren."
      },
      {
        "de": "das Einzelzimmer / das Doppelzimmer",
        "ko": "싱글룸 / 더블룸",
        "note": "객실 종류"
      },
      {
        "de": "die Halbpension / die Vollpension",
        "ko": "조식+석식 / 3식",
        "note": "패키지"
      },
      {
        "de": "der Koffer / das Gepäck",
        "ko": "여행가방 / 짐",
        "note": "Mein Koffer ist schwer."
      },
      {
        "de": "der Reisepass / der Personalausweis",
        "ko": "여권 / 신분증",
        "note": "여행 필수품"
      },
      {
        "de": "die Sehenswürdigkeit",
        "ko": "관광 명소",
        "note": "Sehenswürdigkeiten besuchen"
      }
    ]
  },
  {
    "category_de": "Essen Wortschatz (음식 어휘)",
    "category_ko": "음식 어휘",
    "items": [
      {
        "de": "das Frühstück / das Mittagessen / das Abendessen",
        "ko": "아침 / 점심 / 저녁식사",
        "note": "Zum Frühstück esse ich..."
      },
      {
        "de": "der Hunger / der Durst",
        "ko": "배고픔 / 갈증",
        "note": "Ich habe Hunger."
      },
      {
        "de": "das Brot / das Brötchen / der Käse",
        "ko": "빵 / 작은 빵 / 치즈",
        "note": "독일 아침"
      },
      {
        "de": "das Fleisch / der Fisch / das Gemüse / das Obst",
        "ko": "고기 / 생선 / 채소 / 과일",
        "note": "기본 식품군"
      },
      {
        "de": "die Vorspeise / das Hauptgericht / der Nachtisch",
        "ko": "전채 / 본식 / 후식",
        "note": "식당 코스"
      },
      {
        "de": "die Speisekarte / das Menü",
        "ko": "메뉴판 / 메뉴",
        "note": "Die Speisekarte, bitte."
      },
      {
        "de": "bestellen / empfehlen",
        "ko": "주문하다 / 추천하다",
        "note": "Was empfehlen Sie?"
      },
      {
        "de": "zahlen / die Rechnung",
        "ko": "지불하다 / 계산서",
        "note": "Die Rechnung, bitte!"
      },
      {
        "de": "zusammen / getrennt",
        "ko": "함께 / 따로 (결제)",
        "note": "종업원의 질문"
      },
      {
        "de": "schmecken + Dat.",
        "ko": "맛있다 / 입맛에 맞다",
        "note": "Das schmeckt mir."
      },
      {
        "de": "Vegetarier / Veganer",
        "ko": "채식주의자 / 비건",
        "note": "Ich bin Vegetarier."
      },
      {
        "de": "allergisch gegen + 4격",
        "ko": "~에 알레르기가 있는",
        "note": "Ich bin allergisch gegen Nüsse."
      }
    ]
  },
  {
    "category_de": "Häufige Adjektive (자주 쓰는 형용사)",
    "category_ko": "자주 쓰는 형용사",
    "items": [
      {
        "de": "gut / schlecht",
        "ko": "좋은 / 나쁜",
        "note": "기본"
      },
      {
        "de": "groß / klein",
        "ko": "큰 / 작은",
        "note": "크기"
      },
      {
        "de": "neu / alt",
        "ko": "새로운 / 오래된",
        "note": "상태/나이"
      },
      {
        "de": "jung / alt",
        "ko": "젊은 / 늙은",
        "note": "사람 나이"
      },
      {
        "de": "schön / hässlich",
        "ko": "예쁜 / 못생긴",
        "note": "외모"
      },
      {
        "de": "teuer / billig / günstig",
        "ko": "비싼 / 싼 / 저렴한",
        "note": "가격"
      },
      {
        "de": "schnell / langsam",
        "ko": "빠른 / 느린",
        "note": "속도"
      },
      {
        "de": "einfach / schwierig",
        "ko": "쉬운 / 어려운",
        "note": "난이도"
      },
      {
        "de": "interessant / langweilig",
        "ko": "흥미로운 / 지루한",
        "note": "감정"
      },
      {
        "de": "wichtig / unwichtig",
        "ko": "중요한 / 안 중요한",
        "note": "중요도"
      },
      {
        "de": "möglich / unmöglich",
        "ko": "가능한 / 불가능한",
        "note": "가능성"
      },
      {
        "de": "frei / besetzt",
        "ko": "비어있는 / 차있는",
        "note": "자리"
      },
      {
        "de": "geöffnet / geschlossen",
        "ko": "열린 / 닫힌",
        "note": "영업"
      },
      {
        "de": "krank / gesund / müde",
        "ko": "아픈 / 건강한 / 피곤한",
        "note": "건강 상태"
      },
      {
        "de": "froh / traurig / wütend",
        "ko": "기쁜 / 슬픈 / 화난",
        "note": "감정"
      },
      {
        "de": "ruhig / laut",
        "ko": "조용한 / 시끄러운",
        "note": "소리"
      },
      {
        "de": "sauber / schmutzig",
        "ko": "깨끗한 / 더러운",
        "note": "청결"
      },
      {
        "de": "warm / kalt / heiß",
        "ko": "따뜻한 / 추운 / 뜨거운",
        "note": "온도"
      },
      {
        "de": "lecker / scharf / süß / salzig",
        "ko": "맛있는 / 매운 / 단 / 짠",
        "note": "맛"
      }
    ]
  },
  {
    "category_de": "Wichtige Verben (시험 빈출 동사)",
    "category_ko": "시험 빈출 동사",
    "items": [
      {
        "de": "haben / sein / werden",
        "ko": "가지다 / 이다 / 되다",
        "note": "최기본 동사"
      },
      {
        "de": "machen / tun",
        "ko": "하다",
        "note": "Was machst du?"
      },
      {
        "de": "gehen / kommen / fahren",
        "ko": "가다 / 오다 / (타고) 가다",
        "note": "이동 (sein 동사)"
      },
      {
        "de": "sehen / hören / sprechen",
        "ko": "보다 / 듣다 / 말하다",
        "note": "감각"
      },
      {
        "de": "essen / trinken / kochen",
        "ko": "먹다 / 마시다 / 요리하다",
        "note": "음식"
      },
      {
        "de": "kaufen / verkaufen / bezahlen",
        "ko": "사다 / 팔다 / 지불하다",
        "note": "쇼핑"
      },
      {
        "de": "arbeiten / lernen / studieren",
        "ko": "일하다 / 배우다 / 대학공부하다",
        "note": "활동"
      },
      {
        "de": "wohnen / leben",
        "ko": "살다 / 생활하다",
        "note": "wohnen = 거주, leben = 생활"
      },
      {
        "de": "schlafen / aufwachen / aufstehen",
        "ko": "자다 / 깨다 / 일어나다",
        "note": "분리동사 포함"
      },
      {
        "de": "anfangen / beginnen / aufhören",
        "ko": "시작하다 / 시작하다 / 끝내다",
        "note": "anfangen은 분리동사"
      },
      {
        "de": "treffen / besuchen / kennenlernen",
        "ko": "만나다 / 방문하다 / 알게되다",
        "note": "sich treffen = 만나다(재귀)"
      },
      {
        "de": "anrufen / schreiben / antworten",
        "ko": "전화하다 / 쓰다 / 답하다",
        "note": "소통"
      },
      {
        "de": "helfen + Dat.",
        "ko": "돕다",
        "note": "Ich helfe dir."
      },
      {
        "de": "danken + Dat. für + Akk.",
        "ko": "감사하다",
        "note": "Ich danke dir für die Hilfe."
      },
      {
        "de": "passen + Dat.",
        "ko": "맞다",
        "note": "Das passt mir."
      },
      {
        "de": "gefallen + Dat.",
        "ko": "마음에 들다",
        "note": "Das gefällt mir."
      },
      {
        "de": "gehören + Dat.",
        "ko": "~의 것이다",
        "note": "Das gehört mir."
      },
      {
        "de": "geben + Dat. + Akk.",
        "ko": "주다",
        "note": "Ich gebe dir das Buch."
      },
      {
        "de": "bringen / holen / nehmen",
        "ko": "가져오다 / 가져오다 / 잡다",
        "note": "이동 동사"
      },
      {
        "de": "wissen / kennen",
        "ko": "알다 (사실) / 알다 (사람/사물)",
        "note": "Ich weiß das. / Ich kenne ihn."
      },
      {
        "de": "denken / glauben / meinen",
        "ko": "생각하다 / 믿다 / 의견이다",
        "note": "의견"
      },
      {
        "de": "möchten / wollen / mögen",
        "ko": "~하고싶다 / 원하다 / 좋아하다",
        "note": "선호"
      }
    ]
  },
  {
    "category_de": "Häufige Reflexivverben (재귀동사)",
    "category_ko": "자주 쓰는 재귀동사",
    "items": [
      {
        "de": "sich freuen auf/über + Akk.",
        "ko": "기대하다 / 기뻐하다",
        "note": "auf = 미래 일, über = 과거 일"
      },
      {
        "de": "sich interessieren für + Akk.",
        "ko": "~에 관심있다",
        "note": "Ich interessiere mich für Musik."
      },
      {
        "de": "sich treffen",
        "ko": "만나다",
        "note": "Wir treffen uns um 18 Uhr."
      },
      {
        "de": "sich erinnern an + Akk.",
        "ko": "기억하다",
        "note": "Ich erinnere mich an dich."
      },
      {
        "de": "sich entscheiden",
        "ko": "결정하다",
        "note": "Ich entscheide mich für..."
      },
      {
        "de": "sich entschuldigen",
        "ko": "사과하다",
        "note": "Ich entschuldige mich."
      },
      {
        "de": "sich anmelden / abmelden",
        "ko": "등록하다 / 해지하다",
        "note": "분리동사 + 재귀"
      },
      {
        "de": "sich bewerben für + Akk.",
        "ko": "지원하다",
        "note": "구직"
      },
      {
        "de": "sich vorbereiten auf + Akk.",
        "ko": "준비하다",
        "note": "분리동사 + 재귀"
      },
      {
        "de": "sich anziehen / ausziehen",
        "ko": "옷 입다 / 벗다",
        "note": "분리동사 + 재귀"
      },
      {
        "de": "sich waschen / duschen",
        "ko": "씻다 / 샤워하다",
        "note": "Ich dusche mich."
      },
      {
        "de": "sich beeilen",
        "ko": "서두르다",
        "note": "Beeil dich!"
      },
      {
        "de": "sich erholen",
        "ko": "쉬다, 회복하다",
        "note": "im Urlaub"
      },
      {
        "de": "sich fühlen",
        "ko": "느끼다",
        "note": "Wie fühlst du dich?"
      },
      {
        "de": "sich vorstellen",
        "ko": "자기소개하다 / 상상하다",
        "note": "Ich stelle mich vor."
      }
    ]
  },
  {
    "category_de": "Häufige Trennbare Verben (자주 쓰는 분리동사)",
    "category_ko": "자주 쓰는 분리동사",
    "items": [
      {
        "de": "aufstehen",
        "ko": "일어나다",
        "note": "Ich stehe um 7 auf."
      },
      {
        "de": "anfangen / aufhören",
        "ko": "시작하다 / 끝내다",
        "note": "Der Kurs fängt um 9 an."
      },
      {
        "de": "anrufen",
        "ko": "전화하다",
        "note": "Ich rufe dich an."
      },
      {
        "de": "einkaufen",
        "ko": "쇼핑하다",
        "note": "Ich gehe einkaufen."
      },
      {
        "de": "einladen",
        "ko": "초대하다",
        "note": "Ich lade dich ein."
      },
      {
        "de": "abholen",
        "ko": "데려오다",
        "note": "Ich hole dich vom Bahnhof ab."
      },
      {
        "de": "mitbringen",
        "ko": "가져오다",
        "note": "Bring etwas zu trinken mit."
      },
      {
        "de": "mitkommen",
        "ko": "같이 오다",
        "note": "Kommst du mit?"
      },
      {
        "de": "ausgehen",
        "ko": "외출하다",
        "note": "Wir gehen heute Abend aus."
      },
      {
        "de": "vorbereiten",
        "ko": "준비하다",
        "note": "Ich bereite das Essen vor."
      },
      {
        "de": "vorhaben",
        "ko": "계획하다",
        "note": "Was hast du heute vor?"
      },
      {
        "de": "vorschlagen",
        "ko": "제안하다",
        "note": "Ich schlage Freitag vor."
      },
      {
        "de": "vorstellen (sich)",
        "ko": "소개하다 (재귀)",
        "note": "Ich stelle mich vor."
      },
      {
        "de": "ankommen / abfahren",
        "ko": "도착 / 출발하다",
        "note": "교통 (sein 동사)"
      },
      {
        "de": "umsteigen",
        "ko": "환승하다",
        "note": "Ich steige in Frankfurt um."
      },
      {
        "de": "stattfinden",
        "ko": "개최되다",
        "note": "Die Party findet am Samstag statt."
      },
      {
        "de": "fernsehen",
        "ko": "TV 보다",
        "note": "Ich sehe abends fern."
      },
      {
        "de": "aufmachen / zumachen",
        "ko": "열다 / 닫다",
        "note": "Mach das Fenster auf!"
      },
      {
        "de": "anziehen / ausziehen",
        "ko": "옷 입다 / 벗다",
        "note": "재귀로 자주 사용"
      },
      {
        "de": "weggehen / zurückkommen",
        "ko": "떠나다 / 돌아오다",
        "note": "Wann kommst du zurück?"
      }
    ]
  },
  {
    "category_de": "Familie & Verwandte (가족/친척)",
    "category_ko": "가족 / 친척 어휘",
    "items": [
      {
        "de": "die Mutter / die Mütter",
        "ko": "어머니 / 어머니들",
        "note": "Mama (구어)"
      },
      {
        "de": "der Vater / die Väter",
        "ko": "아버지",
        "note": "Papa (구어)"
      },
      {
        "de": "die Eltern (pl.)",
        "ko": "부모님",
        "note": "항상 복수"
      },
      {
        "de": "die Schwester / die Schwestern",
        "ko": "자매, 누나/언니/여동생",
        "note": "ältere/jüngere로 구분"
      },
      {
        "de": "der Bruder / die Brüder",
        "ko": "형제, 형/오빠/남동생",
        "note": ""
      },
      {
        "de": "die Geschwister (pl.)",
        "ko": "형제자매",
        "note": "항상 복수"
      },
      {
        "de": "die Großmutter / die Oma",
        "ko": "할머니",
        "note": "Oma = 구어"
      },
      {
        "de": "der Großvater / der Opa",
        "ko": "할아버지",
        "note": "Opa = 구어"
      },
      {
        "de": "die Großeltern (pl.)",
        "ko": "조부모님",
        "note": ""
      },
      {
        "de": "die Tante / die Tanten",
        "ko": "이모, 고모",
        "note": ""
      },
      {
        "de": "der Onkel / die Onkel",
        "ko": "삼촌, 이모부",
        "note": ""
      },
      {
        "de": "der Cousin / die Cousine",
        "ko": "사촌 (남/여)",
        "note": "프랑스어 차용어"
      },
      {
        "de": "der Neffe / die Nichte",
        "ko": "조카 (남/여)",
        "note": ""
      },
      {
        "de": "der Enkel / die Enkelin",
        "ko": "손자 / 손녀",
        "note": ""
      },
      {
        "de": "der Sohn / die Söhne",
        "ko": "아들",
        "note": ""
      },
      {
        "de": "die Tochter / die Töchter",
        "ko": "딸",
        "note": ""
      },
      {
        "de": "das Kind / die Kinder",
        "ko": "아이",
        "note": ""
      },
      {
        "de": "der Mann / die Männer",
        "ko": "남자 / 남편",
        "note": "Ehemann = 남편"
      },
      {
        "de": "die Frau / die Frauen",
        "ko": "여자 / 부인",
        "note": "Ehefrau = 아내"
      },
      {
        "de": "verheiratet / ledig / geschieden",
        "ko": "기혼 / 미혼 / 이혼",
        "note": "결혼 상태"
      },
      {
        "de": "der Freund / die Freundin",
        "ko": "남자친구 / 여자친구",
        "note": "친구 의미도 가능"
      },
      {
        "de": "der Verwandte / die Verwandten",
        "ko": "친척",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Berufe (직업)",
    "category_ko": "직업 어휘",
    "items": [
      {
        "de": "der Arzt / die Ärztin",
        "ko": "의사 (남/여)",
        "note": ""
      },
      {
        "de": "der Lehrer / die Lehrerin",
        "ko": "선생님",
        "note": ""
      },
      {
        "de": "der Schüler / die Schülerin",
        "ko": "학생 (초중고)",
        "note": ""
      },
      {
        "de": "der Student / die Studentin",
        "ko": "대학생",
        "note": ""
      },
      {
        "de": "der Verkäufer / die Verkäuferin",
        "ko": "판매원",
        "note": ""
      },
      {
        "de": "der Krankenpfleger / die Krankenschwester",
        "ko": "간호사 (남/여)",
        "note": ""
      },
      {
        "de": "der Friseur / die Friseurin",
        "ko": "미용사",
        "note": ""
      },
      {
        "de": "der Kellner / die Kellnerin",
        "ko": "웨이터 / 웨이트리스",
        "note": ""
      },
      {
        "de": "der Koch / die Köchin",
        "ko": "요리사",
        "note": ""
      },
      {
        "de": "der Fahrer / die Fahrerin",
        "ko": "운전사",
        "note": ""
      },
      {
        "de": "der Polizist / die Polizistin",
        "ko": "경찰",
        "note": ""
      },
      {
        "de": "der Ingenieur / die Ingenieurin",
        "ko": "엔지니어",
        "note": ""
      },
      {
        "de": "der Architekt / die Architektin",
        "ko": "건축가",
        "note": ""
      },
      {
        "de": "der Programmierer / die Programmiererin",
        "ko": "프로그래머",
        "note": ""
      },
      {
        "de": "der Designer / die Designerin",
        "ko": "디자이너",
        "note": ""
      },
      {
        "de": "der Handwerker",
        "ko": "수공업자, 기술자",
        "note": "Tischler, Maurer 등"
      },
      {
        "de": "der Bäcker / die Bäckerin",
        "ko": "제빵사",
        "note": ""
      },
      {
        "de": "der Mechaniker",
        "ko": "정비사",
        "note": ""
      },
      {
        "de": "der Angestellte / die Angestellte",
        "ko": "사무원, 회사원",
        "note": ""
      },
      {
        "de": "der Hausmann / die Hausfrau",
        "ko": "남편/주부",
        "note": ""
      },
      {
        "de": "der Rentner / die Rentnerin",
        "ko": "연금 수령자, 은퇴자",
        "note": "in Rente sein"
      },
      {
        "de": "arbeitslos / arbeitslos sein",
        "ko": "실직한 / 실직 상태",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Körperteile (신체)",
    "category_ko": "신체 부위",
    "items": [
      {
        "de": "der Kopf / die Köpfe",
        "ko": "머리",
        "note": ""
      },
      {
        "de": "das Gesicht / die Gesichter",
        "ko": "얼굴",
        "note": ""
      },
      {
        "de": "das Haar / die Haare",
        "ko": "머리카락",
        "note": "보통 복수"
      },
      {
        "de": "das Auge / die Augen",
        "ko": "눈",
        "note": ""
      },
      {
        "de": "die Nase / die Nasen",
        "ko": "코",
        "note": ""
      },
      {
        "de": "der Mund / die Münder",
        "ko": "입",
        "note": ""
      },
      {
        "de": "das Ohr / die Ohren",
        "ko": "귀",
        "note": ""
      },
      {
        "de": "der Zahn / die Zähne",
        "ko": "이, 치아",
        "note": ""
      },
      {
        "de": "der Hals / die Hälse",
        "ko": "목, 인후",
        "note": "Halsschmerzen = 목 통증"
      },
      {
        "de": "die Schulter / die Schultern",
        "ko": "어깨",
        "note": ""
      },
      {
        "de": "der Arm / die Arme",
        "ko": "팔",
        "note": ""
      },
      {
        "de": "die Hand / die Hände",
        "ko": "손",
        "note": ""
      },
      {
        "de": "der Finger / die Finger",
        "ko": "손가락",
        "note": ""
      },
      {
        "de": "die Brust / die Brüste",
        "ko": "가슴",
        "note": ""
      },
      {
        "de": "der Bauch / die Bäuche",
        "ko": "배",
        "note": "Bauchschmerzen = 복통"
      },
      {
        "de": "der Rücken / die Rücken",
        "ko": "등, 허리",
        "note": ""
      },
      {
        "de": "das Bein / die Beine",
        "ko": "다리",
        "note": ""
      },
      {
        "de": "das Knie / die Knie",
        "ko": "무릎",
        "note": ""
      },
      {
        "de": "der Fuß / die Füße",
        "ko": "발",
        "note": "zu Fuß = 도보로"
      },
      {
        "de": "die Zehe / die Zehen",
        "ko": "발가락",
        "note": ""
      },
      {
        "de": "das Herz / die Herzen",
        "ko": "심장, 마음",
        "note": ""
      },
      {
        "de": "die Haut",
        "ko": "피부",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Krankheiten & Symptome (질병/증상)",
    "category_ko": "질병 / 증상",
    "items": [
      {
        "de": "krank / gesund",
        "ko": "아픈 / 건강한",
        "note": ""
      },
      {
        "de": "die Erkältung",
        "ko": "감기",
        "note": "eine Erkältung haben"
      },
      {
        "de": "die Grippe",
        "ko": "독감",
        "note": ""
      },
      {
        "de": "das Fieber",
        "ko": "열",
        "note": "Fieber haben"
      },
      {
        "de": "der Husten",
        "ko": "기침",
        "note": "Husten haben"
      },
      {
        "de": "der Schnupfen",
        "ko": "콧물, 코감기",
        "note": ""
      },
      {
        "de": "die Kopfschmerzen (pl.)",
        "ko": "두통",
        "note": "항상 복수"
      },
      {
        "de": "die Bauchschmerzen (pl.)",
        "ko": "복통",
        "note": "항상 복수"
      },
      {
        "de": "die Halsschmerzen (pl.)",
        "ko": "인후통",
        "note": ""
      },
      {
        "de": "die Zahnschmerzen (pl.)",
        "ko": "치통",
        "note": ""
      },
      {
        "de": "die Rückenschmerzen (pl.)",
        "ko": "허리 통증",
        "note": ""
      },
      {
        "de": "der Durchfall",
        "ko": "설사",
        "note": ""
      },
      {
        "de": "die Allergie",
        "ko": "알레르기",
        "note": "allergisch gegen + 4격"
      },
      {
        "de": "der Unfall",
        "ko": "사고",
        "note": ""
      },
      {
        "de": "die Verletzung",
        "ko": "부상",
        "note": ""
      },
      {
        "de": "wehtun + Dat.",
        "ko": "아프다",
        "note": "Mein Kopf tut weh."
      },
      {
        "de": "sich verletzen",
        "ko": "다치다",
        "note": "재귀동사"
      },
      {
        "de": "müde / erschöpft",
        "ko": "피곤한 / 지친",
        "note": ""
      },
      {
        "de": "schwindelig",
        "ko": "어지러운",
        "note": "Mir ist schwindelig."
      },
      {
        "de": "übel",
        "ko": "메스꺼운",
        "note": "Mir ist übel."
      },
      {
        "de": "das Medikament / die Medikamente",
        "ko": "약",
        "note": ""
      },
      {
        "de": "die Tablette / die Tabletten",
        "ko": "알약",
        "note": ""
      },
      {
        "de": "das Pflaster / die Pflaster",
        "ko": "반창고",
        "note": ""
      },
      {
        "de": "die Spritze",
        "ko": "주사",
        "note": "eine Spritze bekommen"
      },
      {
        "de": "untersuchen / die Untersuchung",
        "ko": "검진하다 / 검진",
        "note": ""
      },
      {
        "de": "die Versicherungskarte",
        "ko": "보험 카드",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Lebensmittel & Essen (음식)",
    "category_ko": "음식 / 식료품",
    "items": [
      {
        "de": "das Brot / das Brötchen",
        "ko": "빵 / 작은 빵",
        "note": ""
      },
      {
        "de": "der Käse",
        "ko": "치즈",
        "note": ""
      },
      {
        "de": "die Butter",
        "ko": "버터",
        "note": ""
      },
      {
        "de": "die Milch",
        "ko": "우유",
        "note": ""
      },
      {
        "de": "das Ei / die Eier",
        "ko": "달걀",
        "note": ""
      },
      {
        "de": "das Fleisch / das Hähnchen / das Rindfleisch / das Schweinefleisch",
        "ko": "고기 / 닭 / 소 / 돼지",
        "note": ""
      },
      {
        "de": "die Wurst / die Würste",
        "ko": "소시지",
        "note": "독일 대표 음식"
      },
      {
        "de": "der Fisch / die Fische",
        "ko": "생선",
        "note": ""
      },
      {
        "de": "der Schinken",
        "ko": "햄",
        "note": ""
      },
      {
        "de": "das Obst",
        "ko": "과일 (집합명사)",
        "note": ""
      },
      {
        "de": "der Apfel / die Äpfel",
        "ko": "사과",
        "note": ""
      },
      {
        "de": "die Banane / die Bananen",
        "ko": "바나나",
        "note": ""
      },
      {
        "de": "die Orange / die Orangen",
        "ko": "오렌지",
        "note": ""
      },
      {
        "de": "die Birne / die Birnen",
        "ko": "배",
        "note": ""
      },
      {
        "de": "die Traube / die Trauben",
        "ko": "포도",
        "note": "보통 복수"
      },
      {
        "de": "die Erdbeere / die Erdbeeren",
        "ko": "딸기",
        "note": ""
      },
      {
        "de": "das Gemüse",
        "ko": "채소 (집합명사)",
        "note": ""
      },
      {
        "de": "die Tomate / die Tomaten",
        "ko": "토마토",
        "note": ""
      },
      {
        "de": "die Kartoffel / die Kartoffeln",
        "ko": "감자",
        "note": ""
      },
      {
        "de": "die Zwiebel / die Zwiebeln",
        "ko": "양파",
        "note": ""
      },
      {
        "de": "die Karotte / die Möhre",
        "ko": "당근",
        "note": ""
      },
      {
        "de": "die Gurke / die Gurken",
        "ko": "오이",
        "note": ""
      },
      {
        "de": "der Salat / die Salate",
        "ko": "샐러드, 양상추",
        "note": ""
      },
      {
        "de": "der Reis",
        "ko": "쌀, 밥",
        "note": ""
      },
      {
        "de": "die Nudel / die Nudeln",
        "ko": "면, 파스타",
        "note": ""
      },
      {
        "de": "das Salz / der Pfeffer / der Zucker",
        "ko": "소금 / 후추 / 설탕",
        "note": ""
      },
      {
        "de": "das Öl / der Essig",
        "ko": "기름 / 식초",
        "note": ""
      },
      {
        "de": "die Marmelade / die Schokolade / der Kuchen",
        "ko": "잼 / 초콜릿 / 케이크",
        "note": ""
      },
      {
        "de": "der Kaffee / der Tee / das Wasser",
        "ko": "커피 / 차 / 물",
        "note": ""
      },
      {
        "de": "der Saft / das Bier / der Wein",
        "ko": "주스 / 맥주 / 와인",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Kleidung (옷)",
    "category_ko": "옷 / 의류",
    "items": [
      {
        "de": "das Hemd / die Hemden",
        "ko": "셔츠 (남방)",
        "note": ""
      },
      {
        "de": "die Bluse / die Blusen",
        "ko": "블라우스",
        "note": ""
      },
      {
        "de": "das T-Shirt / die T-Shirts",
        "ko": "티셔츠",
        "note": ""
      },
      {
        "de": "der Pullover / die Pullover",
        "ko": "스웨터",
        "note": "Pulli (구어)"
      },
      {
        "de": "die Hose / die Hosen",
        "ko": "바지",
        "note": ""
      },
      {
        "de": "die Jeans (pl.)",
        "ko": "청바지",
        "note": "항상 복수형"
      },
      {
        "de": "der Rock / die Röcke",
        "ko": "치마",
        "note": ""
      },
      {
        "de": "das Kleid / die Kleider",
        "ko": "드레스",
        "note": ""
      },
      {
        "de": "die Jacke / die Jacken",
        "ko": "재킷",
        "note": ""
      },
      {
        "de": "der Mantel / die Mäntel",
        "ko": "코트",
        "note": ""
      },
      {
        "de": "der Schal / die Schals",
        "ko": "목도리",
        "note": ""
      },
      {
        "de": "die Mütze / der Hut",
        "ko": "모자 (니트/펠트)",
        "note": ""
      },
      {
        "de": "die Handschuhe (pl.)",
        "ko": "장갑",
        "note": "보통 복수"
      },
      {
        "de": "der Schuh / die Schuhe",
        "ko": "신발",
        "note": "보통 복수"
      },
      {
        "de": "die Socke / die Socken",
        "ko": "양말",
        "note": ""
      },
      {
        "de": "die Strumpfhose",
        "ko": "스타킹",
        "note": ""
      },
      {
        "de": "die Brille",
        "ko": "안경",
        "note": "eine Brille tragen"
      },
      {
        "de": "die Uhr / die Uhren",
        "ko": "시계",
        "note": ""
      },
      {
        "de": "die Tasche / die Taschen",
        "ko": "가방",
        "note": "Handtasche = 핸드백"
      },
      {
        "de": "anziehen / ausziehen / umziehen",
        "ko": "입다 / 벗다 / 갈아입다",
        "note": "분리동사 + 재귀"
      },
      {
        "de": "tragen",
        "ko": "입고 있다 / 입다",
        "note": "tragen + 4격"
      },
      {
        "de": "die Größe / die Farbe",
        "ko": "사이즈 / 색상",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Wetter & Jahreszeiten (날씨/계절)",
    "category_ko": "날씨 / 계절",
    "items": [
      {
        "de": "das Wetter",
        "ko": "날씨",
        "note": ""
      },
      {
        "de": "sonnig / wolkig / bewölkt",
        "ko": "맑은 / 구름 낀 / 흐린",
        "note": ""
      },
      {
        "de": "regnerisch / regnen",
        "ko": "비 오는 / 비 오다",
        "note": "Es regnet."
      },
      {
        "de": "schneien / der Schnee",
        "ko": "눈 오다 / 눈",
        "note": "Es schneit."
      },
      {
        "de": "windig / der Wind",
        "ko": "바람 부는 / 바람",
        "note": ""
      },
      {
        "de": "heiß / warm / kühl / kalt",
        "ko": "더운 / 따뜻한 / 시원한 / 추운",
        "note": ""
      },
      {
        "de": "die Sonne / scheinen",
        "ko": "태양 / 빛나다",
        "note": "Die Sonne scheint."
      },
      {
        "de": "die Wolke / die Wolken",
        "ko": "구름",
        "note": ""
      },
      {
        "de": "der Regen",
        "ko": "비",
        "note": ""
      },
      {
        "de": "der Sturm",
        "ko": "폭풍",
        "note": ""
      },
      {
        "de": "das Gewitter",
        "ko": "뇌우",
        "note": ""
      },
      {
        "de": "die Temperatur / Grad",
        "ko": "온도 / 도",
        "note": "30 Grad"
      },
      {
        "de": "der Frühling / der Sommer / der Herbst / der Winter",
        "ko": "봄 / 여름 / 가을 / 겨울",
        "note": "im + 계절"
      },
      {
        "de": "die Jahreszeit / die Jahreszeiten",
        "ko": "계절",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Verkehrsmittel (교통수단)",
    "category_ko": "교통수단",
    "items": [
      {
        "de": "das Auto / die Autos",
        "ko": "자동차",
        "note": "mit dem Auto"
      },
      {
        "de": "der Bus / die Busse",
        "ko": "버스",
        "note": "mit dem Bus"
      },
      {
        "de": "die U-Bahn / die S-Bahn",
        "ko": "지하철 / 도시철도",
        "note": "mit der U-Bahn"
      },
      {
        "de": "die Straßenbahn",
        "ko": "트램",
        "note": ""
      },
      {
        "de": "der Zug / die Züge",
        "ko": "기차",
        "note": "mit dem Zug"
      },
      {
        "de": "das Flugzeug",
        "ko": "비행기",
        "note": "mit dem Flugzeug"
      },
      {
        "de": "das Fahrrad / die Fahrräder",
        "ko": "자전거",
        "note": "mit dem Fahrrad"
      },
      {
        "de": "das Motorrad",
        "ko": "오토바이",
        "note": ""
      },
      {
        "de": "das Taxi",
        "ko": "택시",
        "note": ""
      },
      {
        "de": "das Schiff",
        "ko": "배",
        "note": ""
      },
      {
        "de": "zu Fuß gehen",
        "ko": "걸어서 가다",
        "note": "관용표현"
      },
      {
        "de": "die Fahrkarte / das Ticket",
        "ko": "승차권 / 티켓",
        "note": ""
      },
      {
        "de": "der Bahnhof / der Flughafen",
        "ko": "기차역 / 공항",
        "note": ""
      },
      {
        "de": "die Haltestelle",
        "ko": "정류장",
        "note": ""
      },
      {
        "de": "das Gleis / der Bahnsteig",
        "ko": "선로 / 플랫폼",
        "note": ""
      },
      {
        "de": "abfahren / ankommen",
        "ko": "출발 / 도착하다",
        "note": "분리동사 + sein"
      },
      {
        "de": "umsteigen",
        "ko": "환승하다",
        "note": "분리동사 + sein"
      },
      {
        "de": "die Verspätung",
        "ko": "지연",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Wohnung & Möbel (집/가구)",
    "category_ko": "집 / 가구",
    "items": [
      {
        "de": "die Wohnung / das Haus",
        "ko": "아파트 / 집",
        "note": ""
      },
      {
        "de": "das Zimmer / die Zimmer",
        "ko": "방",
        "note": ""
      },
      {
        "de": "das Wohnzimmer / das Schlafzimmer",
        "ko": "거실 / 침실",
        "note": ""
      },
      {
        "de": "die Küche / das Bad / das Badezimmer",
        "ko": "주방 / 욕실 / 욕실",
        "note": ""
      },
      {
        "de": "das Esszimmer / das Arbeitszimmer / das Gästezimmer",
        "ko": "식당방 / 서재 / 손님방",
        "note": ""
      },
      {
        "de": "der Flur / der Eingang",
        "ko": "현관, 복도 / 입구",
        "note": ""
      },
      {
        "de": "der Balkon / die Terrasse / der Garten",
        "ko": "발코니 / 테라스 / 정원",
        "note": ""
      },
      {
        "de": "der Keller / der Dachboden",
        "ko": "지하실 / 다락방",
        "note": ""
      },
      {
        "de": "der Stock / das Stockwerk / das Erdgeschoss",
        "ko": "층 / 층 / 1층(독일식)",
        "note": "EG=1층"
      },
      {
        "de": "der Tisch / der Stuhl",
        "ko": "테이블 / 의자",
        "note": ""
      },
      {
        "de": "das Bett / die Couch / das Sofa",
        "ko": "침대 / 소파",
        "note": ""
      },
      {
        "de": "der Schrank / das Regal",
        "ko": "옷장/장 / 책장",
        "note": ""
      },
      {
        "de": "der Spiegel / das Bild",
        "ko": "거울 / 그림",
        "note": ""
      },
      {
        "de": "die Lampe / das Licht",
        "ko": "램프 / 빛",
        "note": ""
      },
      {
        "de": "der Kühlschrank / der Herd / der Ofen",
        "ko": "냉장고 / 레인지 / 오븐",
        "note": ""
      },
      {
        "de": "die Waschmaschine / die Spülmaschine",
        "ko": "세탁기 / 식기세척기",
        "note": ""
      },
      {
        "de": "die Tür / das Fenster",
        "ko": "문 / 창문",
        "note": ""
      },
      {
        "de": "der Boden / die Decke / die Wand",
        "ko": "바닥 / 천장 / 벽",
        "note": ""
      },
      {
        "de": "die Miete / die Nebenkosten",
        "ko": "월세 / 관리비",
        "note": ""
      },
      {
        "de": "der Vermieter / der Mieter",
        "ko": "임대인 / 세입자",
        "note": ""
      },
      {
        "de": "umziehen / der Umzug",
        "ko": "이사가다 / 이사",
        "note": "sein 동사"
      }
    ]
  },
  {
    "category_de": "Stadt & Orte (도시/장소)",
    "category_ko": "도시 / 장소",
    "items": [
      {
        "de": "die Stadt / das Dorf",
        "ko": "도시 / 마을",
        "note": ""
      },
      {
        "de": "das Zentrum / die Innenstadt",
        "ko": "중심 / 시내 중심",
        "note": ""
      },
      {
        "de": "der Bahnhof / der Flughafen",
        "ko": "기차역 / 공항",
        "note": ""
      },
      {
        "de": "die Post / die Bank",
        "ko": "우체국 / 은행",
        "note": ""
      },
      {
        "de": "der Supermarkt / der Markt",
        "ko": "슈퍼마켓 / 시장",
        "note": ""
      },
      {
        "de": "das Kaufhaus / das Geschäft",
        "ko": "백화점 / 상점",
        "note": ""
      },
      {
        "de": "das Restaurant / das Café / die Bar",
        "ko": "식당 / 카페 / 바",
        "note": ""
      },
      {
        "de": "der Park / der Garten",
        "ko": "공원 / 정원",
        "note": ""
      },
      {
        "de": "die Schule / die Universität / die Bibliothek",
        "ko": "학교 / 대학 / 도서관",
        "note": ""
      },
      {
        "de": "das Krankenhaus / die Praxis / die Apotheke",
        "ko": "병원 / 진료소 / 약국",
        "note": ""
      },
      {
        "de": "das Kino / das Theater / das Museum",
        "ko": "영화관 / 극장 / 박물관",
        "note": ""
      },
      {
        "de": "die Kirche",
        "ko": "교회",
        "note": ""
      },
      {
        "de": "das Rathaus",
        "ko": "시청",
        "note": ""
      },
      {
        "de": "der Spielplatz",
        "ko": "놀이터",
        "note": ""
      },
      {
        "de": "der Zoo / der Tierpark",
        "ko": "동물원",
        "note": ""
      },
      {
        "de": "das Schwimmbad / das Hallenbad",
        "ko": "수영장 / 실내 수영장",
        "note": ""
      },
      {
        "de": "das Fitnessstudio",
        "ko": "헬스장",
        "note": ""
      },
      {
        "de": "das Stadion",
        "ko": "경기장",
        "note": ""
      },
      {
        "de": "der Strand / der Berg / der Wald / der See",
        "ko": "해변 / 산 / 숲 / 호수",
        "note": ""
      },
      {
        "de": "die Straße / die Kreuzung / die Ampel",
        "ko": "거리 / 교차로 / 신호등",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Hobbys & Freizeit (취미/여가)",
    "category_ko": "취미 / 여가",
    "items": [
      {
        "de": "lesen / Bücher lesen",
        "ko": "읽다 / 책 읽기",
        "note": ""
      },
      {
        "de": "schreiben",
        "ko": "쓰다",
        "note": ""
      },
      {
        "de": "Musik hören",
        "ko": "음악 듣기",
        "note": ""
      },
      {
        "de": "Filme/Serien sehen / fernsehen",
        "ko": "영화/드라마 보기 / TV 보기",
        "note": "fernsehen = 분리"
      },
      {
        "de": "Sport machen / treiben",
        "ko": "운동하다",
        "note": ""
      },
      {
        "de": "joggen / laufen",
        "ko": "조깅하다 / 달리다",
        "note": ""
      },
      {
        "de": "schwimmen",
        "ko": "수영하다",
        "note": ""
      },
      {
        "de": "Fußball / Tennis / Basketball spielen",
        "ko": "축구 / 테니스 / 농구 하다",
        "note": "spielen + 종목"
      },
      {
        "de": "wandern / Spazieren gehen",
        "ko": "하이킹 / 산책하기",
        "note": ""
      },
      {
        "de": "Fahrrad fahren",
        "ko": "자전거 타기",
        "note": ""
      },
      {
        "de": "tanzen",
        "ko": "춤추다",
        "note": ""
      },
      {
        "de": "kochen / backen",
        "ko": "요리하다 / 굽다",
        "note": ""
      },
      {
        "de": "fotografieren / malen / zeichnen",
        "ko": "사진/그림 그리다",
        "note": ""
      },
      {
        "de": "ein Instrument spielen",
        "ko": "악기 다루다",
        "note": "Klavier / Gitarre 등"
      },
      {
        "de": "ins Kino / ins Theater / ins Konzert gehen",
        "ko": "영화/극장/콘서트 가다",
        "note": "ins = in das"
      },
      {
        "de": "Freunde treffen",
        "ko": "친구 만나기",
        "note": ""
      },
      {
        "de": "reisen",
        "ko": "여행하다",
        "note": ""
      },
      {
        "de": "shoppen / einkaufen",
        "ko": "쇼핑하기",
        "note": ""
      },
      {
        "de": "Computer spielen / Videospiele spielen",
        "ko": "컴퓨터/비디오 게임 하기",
        "note": ""
      },
      {
        "de": "sammeln",
        "ko": "수집하다",
        "note": "Briefmarken sammeln 등"
      },
      {
        "de": "stricken / nähen",
        "ko": "뜨개질 / 바느질",
        "note": ""
      },
      {
        "de": "Yoga machen / meditieren",
        "ko": "요가 / 명상하기",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Schule & Studium (학교/학업)",
    "category_ko": "학교 / 학업",
    "items": [
      {
        "de": "die Schule / die Universität / die Hochschule",
        "ko": "학교 / 대학 / 단과대학",
        "note": ""
      },
      {
        "de": "die Grundschule / die Mittelschule / das Gymnasium",
        "ko": "초/중/인문계 고교",
        "note": "독일 학제"
      },
      {
        "de": "die Klasse / die Stunde",
        "ko": "학급 / 수업 시간",
        "note": ""
      },
      {
        "de": "der Schüler / die Schülerin",
        "ko": "학생 (초중고)",
        "note": ""
      },
      {
        "de": "der Student / die Studentin",
        "ko": "대학생",
        "note": ""
      },
      {
        "de": "der Lehrer / die Lehrerin",
        "ko": "교사",
        "note": ""
      },
      {
        "de": "der Professor / die Professorin",
        "ko": "교수",
        "note": ""
      },
      {
        "de": "das Fach / die Fächer",
        "ko": "과목",
        "note": ""
      },
      {
        "de": "Mathematik / Deutsch / Englisch / Geschichte",
        "ko": "수학 / 독어 / 영어 / 역사",
        "note": ""
      },
      {
        "de": "Physik / Chemie / Biologie",
        "ko": "물리 / 화학 / 생물",
        "note": ""
      },
      {
        "de": "die Hausaufgaben (pl.)",
        "ko": "숙제",
        "note": "항상 복수"
      },
      {
        "de": "die Prüfung / der Test",
        "ko": "시험",
        "note": ""
      },
      {
        "de": "die Note / die Noten",
        "ko": "성적",
        "note": "1=가장 좋음"
      },
      {
        "de": "die Ferien (pl.)",
        "ko": "방학",
        "note": "항상 복수 (학교)"
      },
      {
        "de": "das Zeugnis",
        "ko": "성적표 / 졸업증",
        "note": ""
      },
      {
        "de": "das Abitur",
        "ko": "고교 졸업시험",
        "note": "독일"
      },
      {
        "de": "das Studium",
        "ko": "대학 학업",
        "note": ""
      },
      {
        "de": "das Semester",
        "ko": "학기",
        "note": ""
      },
      {
        "de": "das Diplom / der Bachelor / der Master",
        "ko": "학위",
        "note": ""
      },
      {
        "de": "lernen / studieren / unterrichten",
        "ko": "배우다 / 대학 다니다 / 가르치다",
        "note": ""
      },
      {
        "de": "die Pause / die große Pause",
        "ko": "쉬는 시간 / 큰 쉬는 시간",
        "note": ""
      }
    ]
  },
  {
    "category_de": "Termin-Vokabular (시간표/약속 어휘)",
    "category_ko": "약속 / 시간표 어휘",
    "items": [
      {
        "de": "der Termin / die Verabredung",
        "ko": "약속",
        "note": "공식/사적"
      },
      {
        "de": "der Kalender / der Terminkalender",
        "ko": "달력 / 일정표",
        "note": ""
      },
      {
        "de": "frei sein / Zeit haben",
        "ko": "한가하다 / 시간 있다",
        "note": ""
      },
      {
        "de": "beschäftigt sein",
        "ko": "바쁘다",
        "note": ""
      },
      {
        "de": "belegt / besetzt",
        "ko": "차 있는 / 예약된",
        "note": ""
      },
      {
        "de": "Wann hast du Zeit?",
        "ko": "언제 시간 있어?",
        "note": ""
      },
      {
        "de": "Passt dir Montag?",
        "ko": "월요일 괜찮아?",
        "note": "passen + Dat."
      },
      {
        "de": "Wie wäre es mit ...?",
        "ko": "~ 어때?",
        "note": "mit + 3격"
      },
      {
        "de": "Sollen wir ... ?",
        "ko": "우리 ~할까?",
        "note": "제안"
      },
      {
        "de": "Treffen wir uns um ...",
        "ko": "~에 만나자",
        "note": "권유형"
      },
      {
        "de": "vereinbaren / planen / organisieren",
        "ko": "약속하다 / 계획하다 / 조직하다",
        "note": ""
      },
      {
        "de": "absagen / verschieben",
        "ko": "취소 / 미루다",
        "note": "둘 다 분리동사"
      },
      {
        "de": "bestätigen",
        "ko": "확인하다",
        "note": "비분리동사"
      },
      {
        "de": "vormittags / nachmittags / abends",
        "ko": "오전 / 오후 / 저녁",
        "note": "-s = 반복적"
      },
      {
        "de": "am Wochenende / unter der Woche",
        "ko": "주말에 / 평일에",
        "note": ""
      },
      {
        "de": "von 8 bis 17 Uhr",
        "ko": "8시부터 17시까지",
        "note": "von ... bis ..."
      },
      {
        "de": "ab Montag",
        "ko": "월요일부터",
        "note": "ab + 시점"
      },
      {
        "de": "Einverstanden! / Abgemacht!",
        "ko": "동의! / 약속!",
        "note": "확정 표현"
      }
    ]
  },
  {
    "category_de": "Geld & Bezahlen (돈/지불)",
    "category_ko": "돈 / 지불",
    "items": [
      {
        "de": "das Geld",
        "ko": "돈",
        "note": ""
      },
      {
        "de": "die Münze / der Schein",
        "ko": "동전 / 지폐",
        "note": ""
      },
      {
        "de": "der Euro / der Cent",
        "ko": "유로 / 센트",
        "note": ""
      },
      {
        "de": "die Bank / das Konto",
        "ko": "은행 / 계좌",
        "note": ""
      },
      {
        "de": "die EC-Karte / die Kreditkarte",
        "ko": "체크카드 / 신용카드",
        "note": ""
      },
      {
        "de": "bar / in bar / mit Karte",
        "ko": "현금으로 / 카드로",
        "note": ""
      },
      {
        "de": "bezahlen / zahlen",
        "ko": "지불하다 / 계산하다",
        "note": ""
      },
      {
        "de": "kosten",
        "ko": "비용이 들다",
        "note": "Wie viel kostet das?"
      },
      {
        "de": "der Preis / die Preise",
        "ko": "가격",
        "note": ""
      },
      {
        "de": "die Rechnung / der Kassenbon / die Quittung",
        "ko": "청구서 / 영수증 / 영수증",
        "note": ""
      },
      {
        "de": "sparen",
        "ko": "저축하다 / 아끼다",
        "note": ""
      },
      {
        "de": "ausgeben",
        "ko": "쓰다 (돈을)",
        "note": "분리동사: Geld ausgeben"
      },
      {
        "de": "verdienen",
        "ko": "벌다",
        "note": ""
      },
      {
        "de": "der Rabatt / die Ermäßigung",
        "ko": "할인",
        "note": ""
      },
      {
        "de": "teuer / billig / günstig / kostenlos",
        "ko": "비싼 / 싼 / 저렴한 / 무료",
        "note": ""
      },
      {
        "de": "überweisen / die Überweisung",
        "ko": "송금하다 / 송금",
        "note": ""
      }
    ]
  }
];
