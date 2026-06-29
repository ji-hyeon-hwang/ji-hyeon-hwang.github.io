# Goethe A2 시험 데이터 대폭 확장 (말하기 3배+, 쓰기 추가, 어휘 추가)
import re

js_content = open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam.js', 'r', encoding='utf-8').read()

# === Schreiben Teil 1 추가 시나리오 ===
schreiben_teil1_new = '''
          ,
          {
            "id": "s1-9",
            "title_ko": "친구에게 약속 변경 알리기",
            "scenario_de": "Sie haben mit Ihrer Freundin Mia eine Verabredung, aber Sie können nicht kommen.\\n- Sagen Sie, was los ist.\\n- Schlagen Sie einen neuen Termin vor.\\n- Entschuldigen Sie sich.",
            "scenario_ko": "친구 Mia와 약속이 있는데 갈 수 없습니다.\\n- 무슨 일인지 말하세요.\\n- 새 약속을 제안하세요.\\n- 사과하세요.",
            "model_de": "Liebe Mia,\\n\\nes tut mir wirklich leid, aber ich kann heute Abend nicht kommen. Mein Bruder ist plötzlich krank geworden. Können wir uns am Samstag treffen? Sag mir bitte Bescheid!\\n\\nLiebe Grüße\\nAnna",
            "model_ko": "친애하는 Mia,\\n\\n정말 미안한데 오늘 저녁에 못 가. 동생이 갑자기 아파서. 토요일에 만날 수 있을까? 알려줘!\\n\\n안부 전하며\\nAnna",
            "word_count": 30,
            "tips_ko": ["사과 → 사유 → 대안 → 답장 요청", "sag mir Bescheid = 알려줘 (친구체)"],
            "variations": [
              {"de": "Meine Mutter ist im Krankenhaus.", "ko": "엄마가 병원에 있어.", "note": "다른 사유"},
              {"de": "Geht es vielleicht nächste Woche?", "ko": "다음 주에 가능할까?", "note": "다른 대안"}
            ]
          },
          {
            "id": "s1-10",
            "title_ko": "선생님께 자리 변경 부탁",
            "scenario_de": "Sie können den Klassenraum nicht gut sehen. Schreiben Sie Ihrer Lehrerin Frau Becker.\\n- Sagen Sie das Problem.\\n- Was möchten Sie?\\n- Bedanken Sie sich.",
            "scenario_ko": "교실에서 잘 보이지 않습니다. Becker 선생님께 메일을 쓰세요.\\n- 문제를 말하세요.\\n- 무엇을 원하나요?\\n- 감사를 표하세요.",
            "model_de": "Sehr geehrte Frau Becker,\\n\\nleider kann ich von hinten die Tafel nicht gut sehen. Könnte ich vielleicht weiter vorne sitzen? Das wäre sehr nett. Vielen Dank im Voraus!\\n\\nMit freundlichen Grüßen\\nLukas",
            "model_ko": "Becker 선생님께,\\n\\n안타깝게도 뒤에서 칠판이 잘 안 보입니다. 좀 더 앞에 앉을 수 있을까요? 그럼 정말 좋겠어요. 미리 감사드립니다!\\n\\n경의를 담아\\nLukas",
            "word_count": 30,
            "tips_ko": ["격식체 (Sehr geehrte / Mit freundlichen Grüßen)", "im Voraus = 미리"],
            "variations": [
              {"de": "Ich höre die Lehrerin nicht gut.", "ko": "선생님 말씀이 잘 안 들려요.", "note": "다른 문제"}
            ]
          },
          {
            "id": "s1-11",
            "title_ko": "친구 도움 요청",
            "scenario_de": "Sie möchten umziehen und brauchen Hilfe. Schreiben Sie Ihrem Freund Tim.\\n- Wann ziehen Sie um?\\n- Was sollen Sie helfen?\\n- Versprechen Sie etwas zurück.",
            "scenario_ko": "이사를 가는데 도움이 필요합니다. 친구 Tim에게 메일을 쓰세요.\\n- 언제 이사하나요?\\n- 뭘 도와주길 원하나요?\\n- 답례로 무엇을 약속하나요?",
            "model_de": "Hallo Tim,\\n\\nich ziehe nächsten Samstag um. Könntest du mir bitte beim Tragen der Möbel helfen? Als Dankeschön lade ich dich danach zum Essen ein!\\n\\nLiebe Grüße\\nJan",
            "model_ko": "안녕 Tim,\\n\\n다음 주 토요일에 이사해. 가구 옮기는 거 도와줄 수 있어? 답례로 식사 대접할게!\\n\\n안부 전하며\\nJan",
            "word_count": 28,
            "tips_ko": ["친구 부탁: Könntest du... ?", "보답: als Dankeschön = 답례로"],
            "variations": [
              {"de": "beim Aufräumen helfen", "ko": "정리하는 거 돕기", "note": "다른 도움 종류"},
              {"de": "Ich kaufe dir ein Bier.", "ko": "맥주 하나 사줄게.", "note": "다른 보답"}
            ]
          },
          {
            "id": "s1-12",
            "title_ko": "교환학생에게 마중 약속",
            "scenario_de": "Ein Austauschstudent kommt aus Korea. Schreiben Sie ihm vor seiner Ankunft.\\n- Begrüßen Sie ihn.\\n- Wann holen Sie ihn vom Flughafen ab?\\n- Was sollte er mitbringen?",
            "scenario_ko": "한국에서 교환학생이 옵니다. 도착 전 메일을 쓰세요.\\n- 환영하세요.\\n- 언제 공항에 마중 갈 건가요?\\n- 뭘 챙겨와야 할까요?",
            "model_de": "Lieber Minjun,\\n\\nherzlich willkommen in Deutschland! Ich hole dich am Sonntag um 14 Uhr vom Flughafen ab. Bring bitte warme Kleidung mit, es ist hier gerade kalt.\\n\\nLiebe Grüße\\nThomas",
            "model_ko": "친애하는 민준,\\n\\n독일에 온 걸 환영해! 일요일 14시에 공항으로 마중 갈게. 따뜻한 옷 챙겨와, 여기 지금 추워.\\n\\n안부 전하며\\nThomas",
            "word_count": 32,
            "tips_ko": ["abholen = 데리러 가다 (분리동사)", "환영 표현: herzlich willkommen"],
            "variations": [
              {"de": "Bring bitte einen Adapter mit.", "ko": "어댑터 챙겨와.", "note": "다른 준비물"},
              {"de": "am Bahnhof abholen", "ko": "역에서 마중", "note": "다른 장소"}
            ]
          }
        ]
'''

# === Schreiben Teil 2 추가 시나리오 ===
schreiben_teil2_new = '''
          ,
          {
            "id": "s2-11",
            "title_ko": "이사 후 가구 판매 광고 답장",
            "scenario_de": "Sie haben in einer Anzeige ein gebrauchtes Sofa gesehen. Antworten Sie:\\n- Sie interessieren sich für das Sofa.\\n- Stellen Sie zwei Fragen (Preis, Zustand).\\n- Wann können Sie es abholen?",
            "scenario_ko": "광고에서 중고 소파를 봤습니다. 답장하세요:\\n- 소파에 관심이 있다\\n- 두 가지 질문 (가격, 상태)\\n- 언제 가지러 갈 수 있나요?",
            "model_de": "Sehr geehrter Herr Wagner,\\n\\nich habe Ihre Anzeige gesehen und interessiere mich für das Sofa. Wie viel kostet es und in welchem Zustand ist es? Ich könnte am Samstagnachmittag vorbeikommen und das Sofa abholen.\\n\\nMit freundlichen Grüßen\\nKim",
            "model_ko": "Wagner 씨께,\\n\\n광고를 봤고 소파에 관심이 있습니다. 가격은 얼마이고 상태는 어떤가요? 토요일 오후에 가서 가져갈 수 있을 것 같습니다.\\n\\n경의를 담아\\nKim",
            "word_count": 38,
            "tips_ko": ["중고품 거래: in welchem Zustand = 어떤 상태", "abholen + vorbeikommen 자연스러운 조합"],
            "variations": [
              {"de": "ein gebrauchtes Fahrrad", "ko": "중고 자전거", "note": "다른 물건"}
            ]
          },
          {
            "id": "s2-12",
            "title_ko": "어학원 등록 정정",
            "scenario_de": "Sie haben sich für den A2-Kurs angemeldet, möchten aber zum B1-Kurs wechseln. Schreiben Sie:\\n- Was haben Sie gebucht?\\n- Warum möchten Sie wechseln?\\n- Was sollen sie tun?",
            "scenario_ko": "A2 강좌에 등록했는데 B1으로 바꾸고 싶습니다.\\n- 뭘 예약했나요?\\n- 왜 바꾸려고 하나요?\\n- 어떻게 처리하면 되나요?",
            "model_de": "Sehr geehrte Damen und Herren,\\n\\nich habe mich für den A2-Kurs ab Oktober angemeldet. Inzwischen habe ich aber die A2-Prüfung bestanden und möchte zum B1-Kurs wechseln. Können Sie mir bitte sagen, wie ich die Anmeldung ändern kann?\\n\\nMit freundlichen Grüßen\\nLee",
            "model_ko": "관계자분께,\\n\\n10월부터 시작하는 A2 강좌에 등록했습니다. 그런데 그동안 A2 시험에 합격해서 B1 강좌로 바꾸고 싶습니다. 등록을 어떻게 변경하면 되는지 알려주실 수 있나요?\\n\\n경의를 담아\\nLee",
            "word_count": 41,
            "tips_ko": ["sich anmelden für = 등록하다", "inzwischen = 그 사이에", "wechseln zu = ~로 바꾸다"],
            "variations": []
          },
          {
            "id": "s2-13",
            "title_ko": "선생님께 추천서 요청",
            "scenario_de": "Sie bewerben sich für ein Praktikum. Schreiben Sie Ihrer Lehrerin:\\n- Was machen Sie?\\n- Was möchten Sie von ihr?\\n- Bis wann brauchen Sie es?",
            "scenario_ko": "인턴십에 지원합니다. 선생님께 메일을 쓰세요.\\n- 무엇을 하나요?\\n- 선생님께 무엇을 부탁하나요?\\n- 언제까지 필요한가요?",
            "model_de": "Sehr geehrte Frau Schmidt,\\n\\nich bewerbe mich gerade für ein Praktikum bei Siemens. Könnten Sie mir bitte eine Empfehlung schreiben? Ich brauche das Schreiben bis nächsten Freitag. Vielen Dank im Voraus!\\n\\nMit freundlichen Grüßen\\nPark",
            "model_ko": "Schmidt 선생님께,\\n\\n지멘스에서 인턴십에 지원하고 있습니다. 추천서를 써주실 수 있을까요? 다음 주 금요일까지 필요합니다. 미리 감사드립니다!\\n\\n경의를 담아\\nPark",
            "word_count": 33,
            "tips_ko": ["사실 → 부탁 → 기한 → 감사 순서", "Empfehlung = 추천서"],
            "variations": []
          },
          {
            "id": "s2-14",
            "title_ko": "친구에게 어학연수 소식",
            "scenario_de": "Sie machen einen Sprachkurs in München. Schreiben Sie Ihrem Freund:\\n- Wo sind Sie?\\n- Wie gefällt es Ihnen?\\n- Was machen Sie am Wochenende?",
            "scenario_ko": "뮌헨에서 어학연수 중입니다. 친구에게 메일을 쓰세요.\\n- 어디 있나요?\\n- 마음에 드나요?\\n- 주말에 뭐 하나요?",
            "model_de": "Hallo Sam,\\n\\nich bin jetzt seit zwei Wochen in München und mache einen Deutschkurs. Die Stadt ist wunderschön und die Lehrer sind sehr nett. Am Wochenende fahre ich nach Salzburg!\\n\\nLiebe Grüße\\nJin",
            "model_ko": "안녕 Sam,\\n\\n뮌헨에 온 지 2주 됐고 독일어 강좌를 듣고 있어. 도시가 정말 예쁘고 선생님들도 친절해. 주말에 잘츠부르크에 가!\\n\\n안부 전하며\\nJin",
            "word_count": 34,
            "tips_ko": ["seit + 3격 = ~전부터 계속", "친구 → 비격식"],
            "variations": [
              {"de": "Wien", "ko": "비엔나", "note": "다른 여행지"},
              {"de": "Es ist ein bisschen schwierig.", "ko": "좀 어려워.", "note": "부정적 표현"}
            ]
          },
          {
            "id": "s2-15",
            "title_ko": "회사 식당에 알레르기 알리기",
            "scenario_de": "Sie haben eine Nuss-Allergie und essen in der Firmenkantine. Schreiben Sie:\\n- Welche Allergie?\\n- Was möchten Sie wissen?\\n- Bitten Sie um Information.",
            "scenario_ko": "회사 구내식당에서 식사하는데 견과류 알레르기가 있습니다.\\n- 어떤 알레르기?\\n- 무엇을 알고 싶나요?\\n- 정보를 요청하세요.",
            "model_de": "Sehr geehrte Damen und Herren,\\n\\nich arbeite bei Ihnen seit Mai und esse oft in der Kantine. Ich habe eine starke Nuss-Allergie. Können Sie mir bitte sagen, welche Gerichte Nüsse enthalten? Vielen Dank!\\n\\nMit freundlichen Grüßen\\nChen",
            "model_ko": "관계자분께,\\n\\n5월부터 여기서 일하면서 구내식당을 자주 이용합니다. 저는 견과류 알레르기가 심합니다. 어떤 음식에 견과류가 들어있는지 알려주실 수 있나요? 감사합니다!\\n\\n경의를 담아\\nChen",
            "word_count": 36,
            "tips_ko": ["enthalten = 포함하다", "Allergie gegen + 4격"],
            "variations": [
              {"de": "Laktose-Intoleranz", "ko": "유당 불내증", "note": "다른 식이 제한"},
              {"de": "vegetarisch", "ko": "채식", "note": "식이 종류"}
            ]
          },
          {
            "id": "s2-16",
            "title_ko": "헬스장 멤버십 해지",
            "scenario_de": "Sie möchten Ihr Fitnessstudio-Abo kündigen. Schreiben Sie:\\n- Welches Abo?\\n- Warum kündigen Sie?\\n- Bis wann gilt die Kündigung?",
            "scenario_ko": "헬스장 멤버십을 해지하려고 합니다.\\n- 어떤 멤버십?\\n- 왜 해지하나요?\\n- 언제까지 유효한가요?",
            "model_de": "Sehr geehrte Damen und Herren,\\n\\nich möchte meine Jahresmitgliedschaft (Vertragsnummer 12345) kündigen, weil ich in eine andere Stadt umziehe. Bitte bestätigen Sie, ab wann die Kündigung gültig ist.\\n\\nMit freundlichen Grüßen\\nMüller",
            "model_ko": "관계자분께,\\n\\n다른 도시로 이사하기 때문에 연간 멤버십(계약번호 12345)을 해지하고 싶습니다. 해지가 언제부터 유효한지 확인해주세요.\\n\\n경의를 담아\\nMüller",
            "word_count": 31,
            "tips_ko": ["kündigen = 해지하다", "Vertragsnummer = 계약번호", "gültig ab = ~부터 유효"],
            "variations": []
          },
          {
            "id": "s2-17",
            "title_ko": "공원 이용 시간 문의",
            "scenario_de": "Sie wollen mit Ihren Kindern in den Stadtpark gehen. Schreiben Sie an die Stadtverwaltung:\\n- Wann ist der Park geöffnet?\\n- Gibt es einen Spielplatz?\\n- Kostet der Eintritt?",
            "scenario_ko": "아이들과 시립공원에 가려고 합니다. 시청에 메일을 쓰세요.\\n- 공원은 언제 여나요?\\n- 놀이터가 있나요?\\n- 입장료가 있나요?",
            "model_de": "Sehr geehrte Damen und Herren,\\n\\nich möchte mit meinen Kindern den Stadtpark besuchen. Können Sie mir bitte sagen, wann der Park geöffnet ist? Gibt es einen Spielplatz für Kinder? Und kostet der Eintritt?\\n\\nVielen Dank\\nMit freundlichen Grüßen\\nKim",
            "model_ko": "관계자분께,\\n\\n아이들과 시립공원을 방문하고 싶습니다. 공원이 언제 여는지 알려주실 수 있나요? 어린이 놀이터가 있나요? 그리고 입장료가 있나요?\\n\\n감사합니다\\n경의를 담아\\nKim",
            "word_count": 38,
            "tips_ko": ["3가지 질문 깔끔하게 정리", "Eintritt = 입장료"],
            "variations": []
          }
        ]
'''

# === Sprechen Teil 1 추가 키워드 ===
sprechen_teil1_new = '''
          ,
          {
            "id": "sp1-17",
            "keyword": "Geburtstag",
            "keyword_ko": "생일",
            "questions": [
              {"de": "Wann haben Sie Geburtstag?", "ko": "생일이 언제예요?"},
              {"de": "Wie feiern Sie Ihren Geburtstag?", "ko": "생일을 어떻게 축하하세요?"},
              {"de": "Was wünschen Sie sich zum Geburtstag?", "ko": "생일 선물로 뭘 원하세요?"}
            ],
            "answers": [
              {"de": "Mein Geburtstag ist am 12. Mai.", "ko": "제 생일은 5월 12일이에요."},
              {"de": "Ich feiere meistens mit der Familie.", "ko": "보통 가족과 함께 보내요."},
              {"de": "Ich wünsche mir ein neues Buch.", "ko": "새 책을 받고 싶어요."}
            ]
          },
          {
            "id": "sp1-18",
            "keyword": "Geschwister",
            "keyword_ko": "형제자매",
            "questions": [
              {"de": "Haben Sie Geschwister?", "ko": "형제자매가 있어요?"},
              {"de": "Wie viele Geschwister haben Sie?", "ko": "몇 명이에요?"},
              {"de": "Was machen Ihre Geschwister?", "ko": "형제자매는 뭘 하나요?"}
            ],
            "answers": [
              {"de": "Ja, ich habe einen älteren Bruder.", "ko": "네, 형이 한 명 있어요."},
              {"de": "Ich habe zwei Schwestern, eine ältere und eine jüngere.", "ko": "언니 한 명, 동생 한 명이 있어요."},
              {"de": "Meine Schwester studiert Medizin und mein Bruder ist Ingenieur.", "ko": "언니는 의학을 공부하고 오빠는 엔지니어예요."}
            ]
          },
          {
            "id": "sp1-19",
            "keyword": "Eltern",
            "keyword_ko": "부모님",
            "questions": [
              {"de": "Wo wohnen Ihre Eltern?", "ko": "부모님은 어디 사세요?"},
              {"de": "Was machen Ihre Eltern beruflich?", "ko": "부모님은 무슨 일을 하세요?"},
              {"de": "Wie oft sehen Sie Ihre Eltern?", "ko": "부모님을 얼마나 자주 보세요?"}
            ],
            "answers": [
              {"de": "Meine Eltern wohnen in Seoul.", "ko": "부모님은 서울에 사세요."},
              {"de": "Mein Vater ist Arzt und meine Mutter Hausfrau.", "ko": "아버지는 의사이고 어머니는 주부예요."},
              {"de": "Ich besuche sie einmal im Monat.", "ko": "한 달에 한 번 뵈러 가요."}
            ]
          },
          {
            "id": "sp1-20",
            "keyword": "Großeltern",
            "keyword_ko": "조부모님",
            "questions": [
              {"de": "Leben Ihre Großeltern noch?", "ko": "조부모님이 아직 살아 계세요?"},
              {"de": "Wo wohnen Ihre Großeltern?", "ko": "조부모님은 어디 사세요?"}
            ],
            "answers": [
              {"de": "Ja, meine Großeltern leben in Daegu.", "ko": "네, 대구에 사세요."},
              {"de": "Meine Oma wohnt allein, mein Opa ist leider gestorben.", "ko": "할머니는 혼자 사시고, 할아버지는 돌아가셨어요."}
            ]
          },
          {
            "id": "sp1-21",
            "keyword": "Sport",
            "keyword_ko": "운동",
            "questions": [
              {"de": "Welchen Sport machen Sie?", "ko": "어떤 운동을 하세요?"},
              {"de": "Wie oft treiben Sie Sport?", "ko": "운동을 얼마나 자주 하세요?"},
              {"de": "Wo machen Sie Sport?", "ko": "어디서 운동하세요?"}
            ],
            "answers": [
              {"de": "Ich gehe gerne joggen und schwimmen.", "ko": "조깅과 수영을 좋아해요."},
              {"de": "Dreimal pro Woche.", "ko": "일주일에 세 번이요."},
              {"de": "Im Fitnessstudio in meiner Nähe.", "ko": "근처 헬스장에서요."}
            ]
          },
          {
            "id": "sp1-22",
            "keyword": "Lieblingsfarbe",
            "keyword_ko": "좋아하는 색",
            "questions": [
              {"de": "Was ist Ihre Lieblingsfarbe?", "ko": "좋아하는 색이 뭐예요?"},
              {"de": "Warum mögen Sie diese Farbe?", "ko": "왜 그 색을 좋아하세요?"}
            ],
            "answers": [
              {"de": "Meine Lieblingsfarbe ist Blau.", "ko": "제일 좋아하는 색은 파란색이에요."},
              {"de": "Weil sie ruhig und schön ist.", "ko": "차분하고 예쁘니까요."}
            ]
          },
          {
            "id": "sp1-23",
            "keyword": "Lieblingstier",
            "keyword_ko": "좋아하는 동물",
            "questions": [
              {"de": "Haben Sie ein Haustier?", "ko": "반려동물 있어요?"},
              {"de": "Was ist Ihr Lieblingstier?", "ko": "제일 좋아하는 동물은?"}
            ],
            "answers": [
              {"de": "Ja, ich habe eine Katze.", "ko": "네, 고양이 한 마리 있어요."},
              {"de": "Ich mag Hunde am liebsten.", "ko": "강아지를 제일 좋아해요."}
            ]
          },
          {
            "id": "sp1-24",
            "keyword": "Telefonnummer",
            "keyword_ko": "전화번호",
            "questions": [
              {"de": "Wie ist Ihre Telefonnummer?", "ko": "전화번호가 어떻게 되세요?"},
              {"de": "Haben Sie ein Handy?", "ko": "휴대폰 있으세요?"}
            ],
            "answers": [
              {"de": "Meine Nummer ist 0176-1234567.", "ko": "제 번호는 0176-1234567이에요."},
              {"de": "Ja, hier ist meine Nummer.", "ko": "네, 여기 제 번호예요."}
            ]
          },
          {
            "id": "sp1-25",
            "keyword": "E-Mail",
            "keyword_ko": "이메일",
            "questions": [
              {"de": "Wie ist Ihre E-Mail-Adresse?", "ko": "이메일 주소가 어떻게 되세요?"},
              {"de": "Schreiben Sie oft E-Mails?", "ko": "이메일 자주 쓰세요?"}
            ],
            "answers": [
              {"de": "Meine E-Mail ist hwang@beispiel.de.", "ko": "이메일은 hwang@beispiel.de 예요."},
              {"de": "Ja, fast jeden Tag.", "ko": "네, 거의 매일이요."}
            ]
          },
          {
            "id": "sp1-26",
            "keyword": "Land",
            "keyword_ko": "나라",
            "questions": [
              {"de": "Aus welchem Land kommen Sie?", "ko": "어느 나라에서 오셨어요?"},
              {"de": "Wie heißt die Hauptstadt Ihres Landes?", "ko": "당신 나라의 수도는?"}
            ],
            "answers": [
              {"de": "Ich komme aus Südkorea.", "ko": "한국에서 왔어요."},
              {"de": "Die Hauptstadt heißt Seoul.", "ko": "수도는 서울이에요."}
            ]
          },
          {
            "id": "sp1-27",
            "keyword": "Urlaub",
            "keyword_ko": "휴가",
            "questions": [
              {"de": "Wohin fahren Sie im Urlaub?", "ko": "휴가 어디로 가세요?"},
              {"de": "Was machen Sie im Urlaub?", "ko": "휴가에 뭐 하세요?"},
              {"de": "Wie lange ist Ihr Urlaub?", "ko": "휴가 기간은 얼마나 되나요?"}
            ],
            "answers": [
              {"de": "Dieses Jahr fahre ich nach Italien.", "ko": "올해는 이탈리아에 가요."},
              {"de": "Ich gehe schwimmen und besichtige Sehenswürdigkeiten.", "ko": "수영하고 관광 명소를 봐요."},
              {"de": "Ich habe drei Wochen Urlaub.", "ko": "3주 휴가예요."}
            ]
          },
          {
            "id": "sp1-28",
            "keyword": "Tagesablauf",
            "keyword_ko": "하루 일과",
            "questions": [
              {"de": "Was machen Sie nach der Arbeit?", "ko": "퇴근 후에 뭐 하세요?"},
              {"de": "Wann gehen Sie ins Bett?", "ko": "몇 시에 자요?"}
            ],
            "answers": [
              {"de": "Nach der Arbeit gehe ich ins Fitnessstudio.", "ko": "퇴근 후에 헬스장에 가요."},
              {"de": "Normalerweise gegen 23 Uhr.", "ko": "보통 23시쯤이요."}
            ]
          },
          {
            "id": "sp1-29",
            "keyword": "Kleidung",
            "keyword_ko": "옷",
            "questions": [
              {"de": "Was tragen Sie heute?", "ko": "오늘 뭐 입었어요?"},
              {"de": "Wo kaufen Sie Ihre Kleidung?", "ko": "옷은 어디서 사세요?"}
            ],
            "answers": [
              {"de": "Ich trage Jeans und einen blauen Pullover.", "ko": "청바지와 파란 스웨터를 입었어요."},
              {"de": "Ich kaufe meistens im Internet.", "ko": "보통 인터넷에서 사요."}
            ]
          },
          {
            "id": "sp1-30",
            "keyword": "Geld",
            "keyword_ko": "돈",
            "questions": [
              {"de": "Sparen Sie Geld?", "ko": "돈을 저축하세요?"},
              {"de": "Wofür geben Sie viel Geld aus?", "ko": "어디에 돈을 많이 쓰세요?"}
            ],
            "answers": [
              {"de": "Ja, jeden Monat ein bisschen.", "ko": "네, 매달 조금씩이요."},
              {"de": "Ich gebe viel Geld für Reisen aus.", "ko": "여행에 돈을 많이 써요."}
            ]
          },
          {
            "id": "sp1-31",
            "keyword": "Internet",
            "keyword_ko": "인터넷",
            "questions": [
              {"de": "Wie lange sind Sie pro Tag im Internet?", "ko": "하루에 인터넷을 얼마나 쓰세요?"},
              {"de": "Was machen Sie im Internet?", "ko": "인터넷에서 뭘 하세요?"}
            ],
            "answers": [
              {"de": "Ungefähr drei Stunden pro Tag.", "ko": "하루에 약 3시간이요."},
              {"de": "Ich schaue Videos und lese Nachrichten.", "ko": "동영상 보고 뉴스 읽어요."}
            ]
          },
          {
            "id": "sp1-32",
            "keyword": "Wochenende",
            "keyword_ko": "주말",
            "questions": [
              {"de": "Was machen Sie am Wochenende?", "ko": "주말에 뭐 하세요?"},
              {"de": "Mit wem verbringen Sie das Wochenende?", "ko": "주말을 누구와 보내세요?"}
            ],
            "answers": [
              {"de": "Am Wochenende treffe ich Freunde oder lese.", "ko": "주말에 친구를 만나거나 책을 읽어요."},
              {"de": "Meistens mit meiner Familie.", "ko": "주로 가족과 함께요."}
            ]
          },
          {
            "id": "sp1-33",
            "keyword": "Lieblingsbuch",
            "keyword_ko": "좋아하는 책",
            "questions": [
              {"de": "Lesen Sie gerne Bücher?", "ko": "책 읽는 거 좋아하세요?"},
              {"de": "Was ist Ihr Lieblingsbuch?", "ko": "가장 좋아하는 책은?"}
            ],
            "answers": [
              {"de": "Ja, ich lese sehr gerne.", "ko": "네, 정말 좋아해요."},
              {"de": "Mein Lieblingsbuch ist 'Der kleine Prinz'.", "ko": "어린 왕자예요."}
            ]
          },
          {
            "id": "sp1-34",
            "keyword": "Lieblingsfilm",
            "keyword_ko": "좋아하는 영화",
            "questions": [
              {"de": "Welche Filme sehen Sie gerne?", "ko": "어떤 영화 좋아하세요?"},
              {"de": "Was war Ihr letzter Film?", "ko": "마지막으로 본 영화는?"}
            ],
            "answers": [
              {"de": "Ich mag Komödien und Liebesfilme.", "ko": "코미디와 로맨스 영화를 좋아해요."},
              {"de": "Letzte Woche habe ich 'Parasite' gesehen.", "ko": "지난주에 기생충을 봤어요."}
            ]
          },
          {
            "id": "sp1-35",
            "keyword": "Schule/Studium",
            "keyword_ko": "학교/대학",
            "questions": [
              {"de": "Was studieren Sie?", "ko": "뭘 공부하세요?"},
              {"de": "Wann beendet Ihr Studium?", "ko": "학업을 언제 마치나요?"}
            ],
            "answers": [
              {"de": "Ich studiere Informatik.", "ko": "정보학을 공부해요."},
              {"de": "Ich beende mein Studium nächstes Jahr.", "ko": "내년에 마쳐요."}
            ]
          },
          {
            "id": "sp1-36",
            "keyword": "Lieblingsessen",
            "keyword_ko": "좋아하는 음식",
            "questions": [
              {"de": "Was essen Sie am liebsten?", "ko": "가장 좋아하는 음식이 뭐예요?"},
              {"de": "Kochen Sie selbst?", "ko": "직접 요리하세요?"}
            ],
            "answers": [
              {"de": "Mein Lieblingsessen ist Pasta.", "ko": "파스타를 가장 좋아해요."},
              {"de": "Ja, ich koche fast jeden Tag.", "ko": "네, 거의 매일 요리해요."}
            ]
          }
        ]
'''

# === Sprechen Teil 2 추가 주제 ===
sprechen_teil2_new = '''
          ,
          {
            "id": "sp2-9",
            "topic_de": "Erzählen Sie über Ihren Sport",
            "topic_ko": "당신의 운동에 대해 이야기해보세요",
            "keywords": ["Was?", "Wie oft?", "Wo?", "Mit wem?"],
            "keywords_ko": ["무엇?", "얼마나 자주?", "어디서?", "누구와?"],
            "model_de": "Ich treibe regelmäßig Sport. Mein Lieblingssport ist Joggen, aber ich gehe auch ins Fitnessstudio.\\n\\nIch laufe dreimal pro Woche, meistens morgens vor der Arbeit. Es macht mir sehr viel Spaß.\\n\\nIch laufe im Park in meiner Nähe. Der Park ist groß und schön, und es gibt viele Bäume. Ins Fitnessstudio gehe ich nach der Arbeit, das ist nur fünf Minuten von meiner Wohnung entfernt.\\n\\nMeistens mache ich Sport allein, weil ich morgens schon früh aufstehe. Aber am Wochenende spiele ich oft Tennis mit meinem Freund.",
            "model_ko": "저는 규칙적으로 운동해요. 가장 좋아하는 운동은 조깅이고 헬스장도 가요.\\n\\n일주일에 세 번 달리는데, 보통 출근 전 아침에요. 정말 재미있어요.\\n\\n근처 공원에서 달려요. 공원이 크고 예쁘고 나무가 많아요. 헬스장은 퇴근 후에 가는데 집에서 5분 거리예요.\\n\\n보통 혼자 운동해요, 아침 일찍 일어나서요. 하지만 주말에는 친구와 테니스를 자주 쳐요.",
            "tips_ko": ["빈도 표현: dreimal pro Woche / regelmäßig", "이유 + 부가 설명", "혼자/같이 둘 다 언급"]
          },
          {
            "id": "sp2-10",
            "topic_de": "Erzählen Sie über Ihre Schulzeit",
            "topic_ko": "당신의 학창 시절에 대해 이야기해보세요",
            "keywords": ["Welche Schule?", "Lieblingsfächer", "Lehrer", "Freunde"],
            "keywords_ko": ["어떤 학교?", "좋아하는 과목", "선생님", "친구들"],
            "model_de": "Ich war von 2010 bis 2016 auf einer Mittelschule in Seoul. Es war eine öffentliche Schule mit ungefähr 800 Schülern.\\n\\nMeine Lieblingsfächer waren Englisch und Geschichte. Englisch hat mir Spaß gemacht, weil ich gerne mit ausländischen Freunden gesprochen habe. Geschichte war interessant.\\n\\nMeine Lehrer waren meistens nett. Besonders meine Englischlehrerin hat mich sehr motiviert. Sie war geduldig und immer freundlich.\\n\\nIch hatte viele gute Freunde in der Schule. Mit meinen besten Freunden treffe ich mich noch heute manchmal. Wir gehen zusammen essen oder sehen Filme.",
            "model_ko": "저는 2010년부터 2016년까지 서울의 중학교에 다녔어요. 약 800명의 학생이 있는 공립학교였어요.\\n\\n좋아하는 과목은 영어와 역사였어요. 영어는 외국 친구들과 대화하는 게 즐거워서 재미있었어요. 역사는 흥미로웠어요.\\n\\n선생님들은 대부분 친절하셨어요. 특히 영어 선생님이 저를 많이 격려해주셨어요. 인내심 있고 항상 친절하셨어요.\\n\\n학교에 좋은 친구가 많았어요. 가장 친한 친구들과는 지금도 가끔 만나요. 같이 식사하거나 영화를 봐요.",
            "tips_ko": ["과거형: war / hatte / hat... gemacht (현재완료)", "이유: weil + 부문장", "구체적 인물 묘사"]
          },
          {
            "id": "sp2-11",
            "topic_de": "Erzählen Sie über einen Geburtstag",
            "topic_ko": "생일에 대해 이야기해보세요",
            "keywords": ["Wann?", "Wo?", "Mit wem?", "Geschenke"],
            "keywords_ko": ["언제?", "어디서?", "누구와?", "선물"],
            "model_de": "Mein letzter Geburtstag war am 12. Mai. Ich bin 28 Jahre alt geworden.\\n\\nIch habe meinen Geburtstag zu Hause gefeiert. Meine Wohnung ist nicht so groß, aber für eine kleine Party perfekt. Ich habe selbst gekocht und einen Kuchen gebacken.\\n\\nMeine Familie und meine besten Freunde sind gekommen. Insgesamt waren wir zehn Personen. Es war sehr schön, alle wiederzusehen.\\n\\nIch habe viele schöne Geschenke bekommen. Meine Eltern haben mir ein Buch geschenkt, und meine Freunde haben mir Schokolade und Blumen gebracht. Mein Bruder hat mir eine Uhr geschenkt.",
            "model_ko": "지난 생일은 5월 12일이었어요. 28살이 됐어요.\\n\\n생일을 집에서 보냈어요. 제 집이 크지는 않지만 작은 파티에는 완벽해요. 직접 요리하고 케이크도 구웠어요.\\n\\n가족과 친한 친구들이 왔어요. 총 10명이었어요. 다들 다시 보니 정말 좋았어요.\\n\\n좋은 선물을 많이 받았어요. 부모님은 책을 선물해 주셨고, 친구들은 초콜릿과 꽃을 가져왔어요. 형은 시계를 선물해 줬어요.",
            "tips_ko": ["과거 시제 (현재완료) 활용", "geworden = werden 과거분사", "schenken + 3격 + 4격"]
          },
          {
            "id": "sp2-12",
            "topic_de": "Erzählen Sie über das Wetter heute / die Jahreszeiten",
            "topic_ko": "오늘 날씨 / 계절에 대해 이야기해보세요",
            "keywords": ["Heute", "Lieblingsjahreszeit", "Aktivitäten", "Was tragen?"],
            "keywords_ko": ["오늘", "좋아하는 계절", "활동", "옷차림"],
            "model_de": "Heute ist das Wetter sehr schön. Es ist sonnig und ungefähr 22 Grad. Manchmal gibt es einen leichten Wind.\\n\\nMeine Lieblingsjahreszeit ist der Herbst. Im Herbst ist das Wetter nicht zu heiß und nicht zu kalt. Außerdem sind die Blätter sehr bunt.\\n\\nIm Herbst gehe ich oft wandern. Ich mag auch lange Spaziergänge im Park. Manchmal trinke ich draußen einen warmen Tee.\\n\\nIm Herbst trage ich meistens eine Jacke und einen Schal. Im Sommer trage ich kurze Hosen und T-Shirts. Im Winter brauche ich einen warmen Mantel.",
            "model_ko": "오늘 날씨가 정말 좋아요. 맑고 약 22도예요. 가끔 가벼운 바람이 불어요.\\n\\n제가 가장 좋아하는 계절은 가을이에요. 가을은 너무 덥지도 너무 춥지도 않아요. 게다가 잎이 형형색색이에요.\\n\\n가을에는 자주 하이킹을 가요. 공원에서 긴 산책도 좋아해요. 가끔 밖에서 따뜻한 차를 마셔요.\\n\\n가을에는 보통 재킷과 목도리를 해요. 여름에는 반바지와 티셔츠를 입어요. 겨울에는 따뜻한 코트가 필요해요.",
            "tips_ko": ["날씨 표현: sonnig, bewölkt, regnerisch", "Im + 계절 = ~에는", "옷: tragen + 4격"]
          },
          {
            "id": "sp2-13",
            "topic_de": "Erzählen Sie über das Einkaufen",
            "topic_ko": "쇼핑에 대해 이야기해보세요",
            "keywords": ["Wo?", "Wie oft?", "Was?", "Online oder im Laden?"],
            "keywords_ko": ["어디서?", "얼마나 자주?", "무엇?", "온라인 vs 매장?"],
            "model_de": "Ich kaufe meistens im Supermarkt in meiner Nähe ein. Es heißt 'Rewe' und ist nur fünf Minuten zu Fuß.\\n\\nIch gehe ungefähr zweimal pro Woche einkaufen. Am Samstag kaufe ich für die ganze Woche ein, und unter der Woche kaufe ich nur frische Sachen wie Brot oder Milch.\\n\\nIch kaufe vor allem Lebensmittel: Gemüse, Obst, Fleisch, Brot. Manchmal kaufe ich auch Putzmittel oder Toilettenpapier.\\n\\nFür Kleidung gehe ich gerne in die Stadt. Aber Elektronik und Bücher kaufe ich meistens online, weil es billiger ist und ich die Sachen nach Hause bringen kann.",
            "model_ko": "보통 집 근처 슈퍼에서 장봐요. 'Rewe'라는 곳이고 도보 5분 거리예요.\\n\\n일주일에 두 번쯤 장보러 가요. 토요일에는 한 주 분량을 사고, 평일에는 빵이나 우유 같은 신선한 것만 사요.\\n\\n주로 식료품을 사요: 채소, 과일, 고기, 빵이요. 가끔 청소용품이나 휴지도 사요.\\n\\n옷은 시내에 가서 사요. 하지만 전자제품과 책은 보통 온라인으로 사요, 더 싸고 집까지 배송되니까요.",
            "tips_ko": ["빈도: zweimal pro Woche / am Samstag", "구분: Lebensmittel / Kleidung / Elektronik", "이유: weil + 부문장"]
          },
          {
            "id": "sp2-14",
            "topic_de": "Erzählen Sie über das Kochen",
            "topic_ko": "요리에 대해 이야기해보세요",
            "keywords": ["Kochen Sie gerne?", "Was?", "Für wen?", "Wo lernen?"],
            "keywords_ko": ["요리 좋아해요?", "무엇?", "누구를 위해?", "어디서 배워?"],
            "model_de": "Ja, ich koche sehr gerne. Es macht mir Spaß und es ist auch gesund.\\n\\nIch koche viele verschiedene Sachen. Am liebsten koche ich koreanisches Essen, zum Beispiel Bibimbap oder Bulgogi. Aber ich probiere auch oft italienische Gerichte aus.\\n\\nIch koche meistens für mich allein, weil ich allein wohne. Am Wochenende koche ich manchmal für meine Freunde oder meine Familie. Das macht mir besonders viel Spaß.\\n\\nIch habe das Kochen von meiner Mutter gelernt. Wenn ich neue Rezepte ausprobieren möchte, schaue ich Videos auf YouTube oder lese Kochbücher.",
            "model_ko": "네, 요리를 정말 좋아해요. 재미있고 건강에도 좋아요.\\n\\n다양한 음식을 만들어요. 가장 좋아하는 건 한국 음식이에요, 예를 들어 비빔밥이나 불고기요. 이탈리아 요리도 자주 시도해 봐요.\\n\\n보통 혼자 먹으려고 해요, 혼자 살아서요. 주말에는 가끔 친구나 가족을 위해 요리해요. 그게 특히 즐거워요.\\n\\n요리는 어머니께 배웠어요. 새 레시피를 시도하고 싶을 때는 유튜브 영상을 보거나 요리책을 봐요.",
            "tips_ko": ["좋아하는 정도 표현: gerne / am liebsten / besonders", "다국적 요리 비교", "학습 방법 다양화"]
          },
          {
            "id": "sp2-15",
            "topic_de": "Erzählen Sie über Ihre Gesundheit",
            "topic_ko": "건강에 대해 이야기해보세요",
            "keywords": ["Gesund leben?", "Sport", "Essen", "Arzt"],
            "keywords_ko": ["건강하게 살기?", "운동", "음식", "병원"],
            "model_de": "Ich versuche, gesund zu leben, aber es ist nicht immer einfach.\\n\\nFür den Sport gehe ich zweimal pro Woche ins Fitnessstudio. Außerdem fahre ich oft mit dem Fahrrad statt mit dem Auto. Das ist gut für die Gesundheit.\\n\\nBeim Essen achte ich darauf, viel Obst und Gemüse zu essen. Ich trinke wenig Alkohol und viel Wasser. Aber manchmal esse ich auch Süßigkeiten, das ist schwer zu vermeiden.\\n\\nZum Arzt gehe ich nur, wenn ich krank bin. Einmal im Jahr mache ich eine Routineuntersuchung. Zum Glück bin ich meistens gesund.",
            "model_ko": "건강하게 살려고 노력하지만 항상 쉽지는 않아요.\\n\\n운동은 일주일에 두 번 헬스장에 가요. 또한 차 대신 자전거를 자주 타요. 건강에 좋아요.\\n\\n음식은 과일과 채소를 많이 먹으려고 신경 써요. 술은 적게, 물은 많이 마셔요. 하지만 가끔 단 것도 먹어요, 그건 피하기 어려워요.\\n\\n병원은 아플 때만 가요. 1년에 한 번 정기검진을 받아요. 다행히 보통은 건강해요.",
            "tips_ko": ["건강 어휘: gesund / krank / Sport / Arzt", "achten auf + 4격 = ~에 신경 쓰다", "Zum Glück = 다행히"]
          },
          {
            "id": "sp2-16",
            "topic_de": "Erzählen Sie über Ihre Lieblingsmusik",
            "topic_ko": "좋아하는 음악에 대해 이야기해보세요",
            "keywords": ["Welche Musik?", "Wann hören?", "Konzert?", "Instrument?"],
            "keywords_ko": ["어떤 음악?", "언제 듣나요?", "콘서트?", "악기?"],
            "model_de": "Ich höre sehr gerne Musik. Meine Lieblingsmusik ist Pop und K-Pop, aber ich höre auch manchmal klassische Musik.\\n\\nIch höre Musik fast den ganzen Tag. Morgens beim Frühstück, in der U-Bahn, beim Sport und auch beim Lernen. Musik macht mich glücklich.\\n\\nIch war schon auf vielen Konzerten. Letztes Jahr habe ich BTS in Berlin gesehen. Das Konzert war fantastisch und ich werde es nie vergessen.\\n\\nIch spiele auch Klavier seit zehn Jahren. Mein Vater hat mich als Kind zum Klavierunterricht gebracht. Jetzt übe ich nicht mehr so oft, aber ich spiele manchmal zu Hause für mich allein.",
            "model_ko": "음악 듣는 걸 정말 좋아해요. 좋아하는 음악은 팝과 K-Pop인데, 가끔 클래식도 들어요.\\n\\n거의 하루 종일 음악을 들어요. 아침에 밥 먹으면서, 지하철에서, 운동할 때, 공부할 때도요. 음악이 저를 행복하게 해요.\\n\\n콘서트도 많이 갔어요. 작년에 베를린에서 BTS를 봤어요. 콘서트가 환상적이었고 절대 잊지 못할 거예요.\\n\\n10년째 피아노도 쳐요. 아버지가 어렸을 때 피아노 레슨에 데려가셨어요. 지금은 자주 연습은 안 하지만 가끔 집에서 혼자 쳐요.",
            "tips_ko": ["좋아하는 정도: gerne / fast den ganzen Tag", "악기: spielen + 악기 (관사 없이)", "감정: macht mich glücklich"]
          },
          {
            "id": "sp2-17",
            "topic_de": "Erzählen Sie über das Fernsehen",
            "topic_ko": "TV 시청에 대해 이야기해보세요",
            "keywords": ["Wie oft?", "Was?", "Wo?", "Lieblings-Serie/-Sendung?"],
            "keywords_ko": ["얼마나 자주?", "무엇을?", "어디서?", "좋아하는 프로그램?"],
            "model_de": "Ich sehe nicht so viel fern. Vielleicht eine Stunde pro Tag, meistens am Abend.\\n\\nIch schaue gerne Nachrichten, Dokumentationen und manchmal Komödien. Filme schaue ich lieber am Wochenende, weil sie länger sind.\\n\\nNormalerweise sehe ich zu Hause im Wohnzimmer fern. Aber manchmal sehe ich auch Serien auf meinem Handy in der U-Bahn.\\n\\nMeine Lieblingsserie ist 'Crash Landing on You'. Es ist eine koreanische Serie über eine Frau, die nach Nordkorea fliegt. Die Geschichte ist sehr interessant und romantisch.",
            "model_ko": "TV를 그렇게 많이 보지는 않아요. 하루에 1시간 정도, 주로 저녁에요.\\n\\n뉴스, 다큐멘터리, 가끔 코미디를 즐겨 봐요. 영화는 주말에 더 보는데, 길어서요.\\n\\n보통 집 거실에서 TV를 봐요. 하지만 가끔 지하철에서 핸드폰으로 드라마를 봐요.\\n\\n가장 좋아하는 드라마는 '사랑의 불시착'이에요. 북한으로 비행기를 타고 간 여자에 관한 한국 드라마예요. 이야기가 정말 흥미롭고 로맨틱해요.",
            "tips_ko": ["빈도: eine Stunde pro Tag", "장르 다양하게", "구체적 작품 + 줄거리 한 문장"]
          },
          {
            "id": "sp2-18",
            "topic_de": "Erzählen Sie über Ihre Heimatstadt",
            "topic_ko": "고향에 대해 이야기해보세요",
            "keywords": ["Wo?", "Größe", "Was kann man machen?", "Was vermissen Sie?"],
            "keywords_ko": ["어디?", "크기", "뭘 할 수 있나요?", "그리운 것?"],
            "model_de": "Meine Heimatstadt ist Seoul, die Hauptstadt von Südkorea. Sie liegt im Nordwesten des Landes, in der Nähe von der Grenze zu Nordkorea.\\n\\nSeoul ist sehr groß. Es leben ungefähr 10 Millionen Menschen dort, und mit der Umgebung sogar 25 Millionen. Es ist eine sehr moderne Stadt mit vielen Hochhäusern.\\n\\nIn Seoul kann man viele interessante Sachen machen. Man kann shoppen, ins Kino gehen, in den Park gehen oder leckeres koreanisches Essen probieren. Es gibt auch viele historische Paläste.\\n\\nIch vermisse besonders das Essen, meine Familie und meine Freunde. Außerdem fehlt mir das schnelle Internet und die guten öffentlichen Verkehrsmittel.",
            "model_ko": "제 고향은 한국의 수도 서울이에요. 나라의 북서쪽, 북한과의 국경 근처에 있어요.\\n\\n서울은 매우 커요. 약 1천만 명이 살고, 주변까지 합치면 2500만 명이에요. 고층 빌딩이 많은 현대적인 도시예요.\\n\\n서울에서는 흥미로운 걸 많이 할 수 있어요. 쇼핑, 영화, 공원, 맛있는 한국 음식을 먹을 수 있어요. 역사적인 궁궐도 많아요.\\n\\n특히 음식, 가족, 친구들이 그리워요. 빠른 인터넷과 좋은 대중교통도 그립습니다.",
            "tips_ko": ["위치: liegt im + 방향 (3격)", "vermissen + 4격 / fehlen + 3격 (둘 다 그립다)", "man kann + 동사원형 = ~할 수 있다 (일반)"]
          }
        ]
'''

# Insert Schreiben Teil 1 new items - find end of Teil 1 examples array
# Pattern: "id": "s1-8" ... } ] (end of Teil 1)
js_content = js_content.replace(
    '"variations": []\n          }\n        ]\n      },\n      {\n        "part": "Teil 2",\n        "title_de": "E-Mail / Brief',
    '"variations": []\n          }' + schreiben_teil1_new + '\n      },\n      {\n        "part": "Teil 2",\n        "title_de": "E-Mail / Brief',
    1
)

# Insert Schreiben Teil 2 new items
js_content = js_content.replace(
    '"haben verloren = 잃어버렸다 (현재완료)"\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  "sprechen"',
    '"haben verloren = 잃어버렸다 (현재완료)"\n            ]\n          }' + schreiben_teil2_new + '\n      }\n    ]\n  },\n  "sprechen"',
    1
)

# Insert Sprechen Teil 1 new items
js_content = js_content.replace(
    '"Spielen Sie ein Instrument?"',
    '"Spielen Sie ein Instrument?"',
    1
)
# Find the end of Teil 1 examples
old_t1_end = '''"de": "Ja, ich spiele Klavier seit zehn Jahren.", "ko": "네, 10년째 피아노를 쳐요."}
            ]
          }
        ]
      },
      {
        "part": "Teil 2"'''

new_t1_end = '''"de": "Ja, ich spiele Klavier seit zehn Jahren.", "ko": "네, 10년째 피아노를 쳐요."}
            ]
          }''' + sprechen_teil1_new + '''
      },
      {
        "part": "Teil 2"'''
js_content = js_content.replace(old_t1_end, new_t1_end, 1)

# Insert Sprechen Teil 2 new items - find end of Teil 2
old_t2_end = '''"man kann + 동사원형 (일반)"
            ]
          }
        ]
      },
      {
        "part": "Teil 3"'''

# But our last Teil 2 example ends with different tip. Let me find a unique marker.
# Last Teil 2 item is sp2-8 with tip "Hilfsverben: oft/manchmal/normalerweise"
old_t2_end_actual = '''"Hilfsverben: oft/manchmal/normalerweise"
            ]
          }
        ]
      },
      {
        "part": "Teil 3"'''

new_t2_end_actual = '''"Hilfsverben: oft/manchmal/normalerweise"
            ]
          }''' + sprechen_teil2_new + '''
      },
      {
        "part": "Teil 3"'''

js_content = js_content.replace(old_t2_end_actual, new_t2_end_actual, 1)

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

# Verify
import json
# Extract JS object
match = re.search(r'const EXAM_DATA = (.*);', js_content, re.DOTALL)
if match:
    try:
        data = json.loads(match.group(1).rstrip(';'))
        s1 = len(data['schreiben']['parts'][0]['examples'])
        s2 = len(data['schreiben']['parts'][1]['examples'])
        sp1 = len(data['sprechen']['parts'][0]['examples'])
        sp2 = len(data['sprechen']['parts'][1]['examples'])
        sp3 = len(data['sprechen']['parts'][2]['examples'])
        print(f"Schreiben T1: {s1}, T2: {s2}")
        print(f"Sprechen T1: {sp1}, T2: {sp2}, T3: {sp3}")
        print(f"Total: {s1+s2+sp1+sp2+sp3}")
    except Exception as e:
        print(f"Parse error: {e}")
else:
    print("Could not extract data")
