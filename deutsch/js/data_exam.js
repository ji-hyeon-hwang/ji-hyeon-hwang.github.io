// Goethe A2 실전 시험 시뮬레이션 데이터
const EXAM_DATA = {
  "schreiben": {
    "title_de": "Schreiben",
    "title_ko": "쓰기",
    "parts": [
      {
        "part": "Teil 1",
        "title_de": "Kurze Nachricht (20–30 Wörter)",
        "title_ko": "짧은 메시지 (20-30단어)",
        "description_ko": "친구/지인에게 보내는 짧은 메시지. 3가지 포인트를 모두 답변해야 함.",
        "examples": [
          {
            "scenario_de": "Sie haben Geburtstag und möchten Ihre Freundin Anna zu Ihrer Party einladen.\n- Wann ist die Party?\n- Wo findet die Party statt?\n- Was soll Anna mitbringen?",
            "scenario_ko": "당신은 생일이고 친구 Anna를 파티에 초대하고 싶습니다.\n- 파티는 언제인가요?\n- 어디서 열리나요?\n- Anna가 뭘 가져와야 하나요?",
            "model_de": "Liebe Anna,\n\nam Samstag, den 15. März, feiere ich meinen Geburtstag. Die Party findet bei mir zu Hause um 19 Uhr statt. Kannst du bitte einen Salat mitbringen? Ich freue mich auf dich!\n\nLiebe Grüße\nMaria",
            "model_ko": "친애하는 Anna에게,\n\n3월 15일 토요일에 내 생일 파티를 해. 파티는 우리 집에서 19시에 열려. 샐러드 좀 가져올 수 있어? 너 보는 거 기대돼!\n\n안부 전하며\n마리아",
            "word_count": 28,
            "tips_ko": [
              "Anrede: Liebe/Lieber + 이름 (비격식)",
              "3가지 포인트(언제/어디서/무엇)를 모두 다루기",
              "마무리: Liebe Grüße + 본인 이름",
              "단어 수 20-30 엄수"
            ]
          },
          {
            "scenario_de": "Sie sind krank und können nicht zum Deutschkurs kommen. Schreiben Sie Ihrem Lehrer Herrn Müller.\n- Sagen Sie, dass Sie krank sind.\n- Wie lange können Sie nicht kommen?\n- Fragen Sie nach Hausaufgaben.",
            "scenario_ko": "당신은 아파서 독일어 수업에 갈 수 없습니다. 선생님 Müller씨에게 메일을 쓰세요.\n- 아프다고 말하세요.\n- 얼마나 못 가나요?\n- 숙제를 물어보세요.",
            "model_de": "Sehr geehrter Herr Müller,\n\nleider bin ich krank und kann diese Woche nicht zum Kurs kommen. Ich habe Fieber und muss zu Hause bleiben. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?\n\nVielen Dank!\nMit freundlichen Grüßen\nJihyeon",
            "model_ko": "Müller 선생님께,\n\n안타깝지만 아파서 이번 주에 수업에 갈 수 없습니다. 열이 있어서 집에 있어야 합니다. 숙제를 이메일로 보내주실 수 있나요?\n\n감사합니다!\n경의를 담아\n지현",
            "word_count": 35,
            "tips_ko": [
              "선생님 → 격식체 (Sehr geehrter Herr / Mit freundlichen Grüßen)",
              "사유 + 기간 + 요청 순서로",
              "정중한 부탁: Können Sie bitte... ?"
            ]
          },
          {
            "scenario_de": "Sie haben einen neuen Job. Schreiben Sie Ihrem Freund Tom.\n- Was ist Ihr neuer Job?\n- Wann beginnen Sie?\n- Wo arbeiten Sie?",
            "scenario_ko": "새 직장을 구했습니다. 친구 Tom에게 편지하세요.\n- 새 직업은 무엇인가요?\n- 언제 시작하나요?\n- 어디서 일하나요?",
            "model_de": "Hallo Tom,\n\nich habe tolle Neuigkeiten! Ich arbeite ab nächstem Monat als Designer in einer kleinen Firma. Das Büro ist in der Stadtmitte von München. Lass uns bald treffen und feiern!\n\nLiebe Grüße\nMin",
            "model_ko": "안녕 Tom,\n\n좋은 소식이 있어! 다음 달부터 작은 회사에서 디자이너로 일하게 됐어. 사무실은 뮌헨 시내 중심에 있어. 곧 만나서 축하하자!\n\n안부 전하며\nMin",
            "word_count": 30,
            "tips_ko": [
              "친구 → 비격식 (Hallo + 이름)",
              "직업: arbeiten als + 직업 (관사 없이)",
              "시간: ab + 3격 (ab nächstem Monat)"
            ]
          },
          {
            "scenario_de": "Sie möchten einen Termin beim Zahnarzt absagen. Schreiben Sie an die Praxis.\n- Welcher Termin?\n- Warum sagen Sie ab?\n- Wollen Sie einen neuen Termin?",
            "scenario_ko": "치과 예약을 취소하려고 합니다. 진료소에 메일을 쓰세요.\n- 어떤 예약인가요?\n- 왜 취소하나요?\n- 새 예약을 원하나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nleider muss ich meinen Termin am Mittwoch um 10 Uhr absagen, weil ich beruflich verhindert bin. Können Sie mir bitte einen neuen Termin nächste Woche geben?\n\nVielen Dank\nMit freundlichen Grüßen\nKim",
            "model_ko": "관계자분께,\n\n안타깝지만 수요일 10시 예약을 취소해야 합니다. 업무 일정 때문에 갈 수 없습니다. 다음 주에 새 예약을 잡아주실 수 있나요?\n\n감사합니다\n경의를 담아\nKim",
            "word_count": 36,
            "tips_ko": [
              "기관 → Sehr geehrte Damen und Herren",
              "사유 설명: weil + 부문장 (동사 끝으로)",
              "대안 요청 포함"
            ]
          },
          {
            "scenario_de": "Sie haben eine Wohnung in einer Anzeige gesehen. Schreiben Sie an den Vermieter.\n- Sie haben die Anzeige gelesen.\n- Möchten Sie die Wohnung besichtigen?\n- Wann haben Sie Zeit?",
            "scenario_ko": "광고에서 집을 봤습니다. 임대인에게 메일을 쓰세요.\n- 광고를 봤다고 알리세요.\n- 집을 보고 싶나요?\n- 언제 시간이 되나요?",
            "model_de": "Sehr geehrte Frau Schmidt,\n\nich habe Ihre Anzeige im Internet gelesen und interessiere mich für die Wohnung. Könnte ich die Wohnung besichtigen? Ich habe am Freitagnachmittag oder Samstagvormittag Zeit.\n\nMit freundlichen Grüßen\nLee",
            "model_ko": "Schmidt 여사님께,\n\n인터넷에서 광고를 보고 그 집에 관심이 있습니다. 집을 보러 갈 수 있을까요? 금요일 오후나 토요일 오전에 시간이 됩니다.\n\n경의를 담아\nLee",
            "word_count": 33,
            "tips_ko": [
              "광고 보고 연락: Ihre Anzeige + gelesen",
              "관심 표현: sich interessieren für + Akk.",
              "시간 옵션 2개 제시"
            ]
          }
        ]
      },
      {
        "part": "Teil 2",
        "title_de": "E-Mail / Brief (30–40 Wörter)",
        "title_ko": "이메일 / 편지 (30-40단어)",
        "description_ko": "주어진 상황에 대한 응답 이메일/편지. 격식체 또는 비격식체.",
        "examples": [
          {
            "scenario_de": "Ihre Freundin hat Sie zu einer Hochzeit eingeladen. Antworten Sie:\n- Bedanken Sie sich für die Einladung.\n- Sagen Sie, dass Sie kommen.\n- Fragen Sie, ob Sie etwas mitbringen sollen.",
            "scenario_ko": "친구가 결혼식에 초대했습니다. 답장하세요:\n- 초대에 감사하기\n- 간다고 말하기\n- 뭔가 가져갈지 묻기",
            "model_de": "Liebe Julia,\n\nvielen Dank für deine Einladung zu deiner Hochzeit! Ich freue mich sehr und komme natürlich gerne. Soll ich etwas mitbringen? Sag mir bitte Bescheid.\n\nIch freue mich auf den Tag!\nLiebe Grüße\nSarah",
            "model_ko": "친애하는 Julia,\n\n결혼식 초대 정말 고마워! 매우 기뻐서 당연히 갈게. 뭔가 가져가야 할까? 알려줘.\n\n그날을 기대할게!\n안부 전하며\nSarah",
            "word_count": 38,
            "tips_ko": [
              "친구 → 비격식",
              "감사 → 수락 → 질문 순",
              "Sag mir Bescheid = 알려줘"
            ]
          },
          {
            "scenario_de": "Sie haben einen Wintermantel online gekauft, aber er ist zu klein. Schreiben Sie an den Online-Shop:\n- Was haben Sie gekauft?\n- Was ist das Problem?\n- Was möchten Sie tun (umtauschen/zurückgeben)?",
            "scenario_ko": "겨울 코트를 온라인으로 샀는데 너무 작습니다. 온라인 쇼핑몰에 메일을 쓰세요:\n- 무엇을 샀나요?\n- 무엇이 문제인가요?\n- 어떻게 하고 싶나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nletzte Woche habe ich bei Ihnen einen schwarzen Wintermantel in Größe M bestellt. Leider ist er mir zu klein. Ich möchte den Mantel gegen Größe L umtauschen. Können Sie mir bitte sagen, wie das geht?\n\nMit freundlichen Grüßen\nPark",
            "model_ko": "관계자분께,\n\n지난주에 검은색 겨울 코트 M사이즈를 주문했습니다. 안타깝게도 너무 작습니다. L사이즈로 교환하고 싶습니다. 어떻게 하면 되는지 알려주실 수 있나요?\n\n경의를 담아\nPark",
            "word_count": 42,
            "tips_ko": [
              "구매 사실 → 문제 → 요청 순",
              "사이즈 표현: in Größe M",
              "교환: umtauschen gegen + 4격"
            ]
          },
          {
            "scenario_de": "Sie möchten in der Volkshochschule einen Yoga-Kurs machen. Schreiben Sie:\n- Sie interessieren sich für den Kurs.\n- Wann findet der Kurs statt?\n- Wie viel kostet er?",
            "scenario_ko": "시민대학에서 요가 수업을 듣고 싶습니다. 메일을 쓰세요:\n- 수업에 관심이 있다\n- 수업은 언제인가?\n- 비용은 얼마인가?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich habe Ihre Anzeige für den Yoga-Kurs gesehen und interessiere mich sehr dafür. Können Sie mir bitte sagen, wann der Kurs stattfindet und wie viel er kostet? Gibt es auch einen Kurs für Anfänger?\n\nVielen Dank\nMit freundlichen Grüßen\nChoi",
            "model_ko": "관계자분께,\n\n요가 수업 광고를 봤는데 매우 관심이 있습니다. 수업이 언제 열리고 비용이 얼마인지 알려주실 수 있나요? 초보자 수업도 있나요?\n\n감사합니다\n경의를 담아\nChoi",
            "word_count": 42,
            "tips_ko": [
              "관심 표현 + 질문 2개 묶기",
              "간접의문문: wann + 동사 끝",
              "추가 질문: Gibt es...?"
            ]
          },
          {
            "scenario_de": "Sie haben einen Termin beim Friseur, aber Sie können nicht kommen. Schreiben Sie:\n- Welcher Termin?\n- Warum können Sie nicht?\n- Schlagen Sie einen neuen Termin vor.",
            "scenario_ko": "미용실 예약이 있는데 갈 수 없습니다. 메일을 쓰세요:\n- 어떤 예약인가요?\n- 왜 못 가나요?\n- 새 예약을 제안하세요.",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich habe einen Termin am Donnerstag um 14 Uhr bei Ihnen. Leider kann ich nicht kommen, weil ich an dem Tag arbeiten muss. Könnten wir den Termin auf Freitag um die gleiche Uhrzeit verschieben?\n\nVielen Dank\nMit freundlichen Grüßen\nWang",
            "model_ko": "관계자분께,\n\n목요일 14시에 예약이 있습니다. 안타깝지만 그날 일을 해야 해서 갈 수 없습니다. 같은 시간에 금요일로 미룰 수 있을까요?\n\n감사합니다\n경의를 담아\nWang",
            "word_count": 42,
            "tips_ko": [
              "기존 예약 명시 (요일 + 시간)",
              "사유 (weil + 부문장)",
              "대안 제안 (verschieben auf + 4격)"
            ]
          },
          {
            "scenario_de": "Sie sind neu in der Stadt und suchen einen Tandempartner (Sprachpartner). Schreiben Sie an einen Sprachlernverein:\n- Was suchen Sie?\n- Welche Sprache?\n- Wann haben Sie Zeit?",
            "scenario_ko": "도시에 새로 왔고 언어 교환 파트너를 찾고 있습니다. 어학 동호회에 메일을 쓰세요:\n- 무엇을 찾나요?\n- 어떤 언어?\n- 언제 시간이 되나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich bin neu in Berlin und suche einen Tandempartner. Ich möchte Deutsch lernen und kann Koreanisch unterrichten. Ich habe abends und am Wochenende Zeit. Können Sie mir bitte helfen?\n\nVielen Dank\nMit freundlichen Grüßen\nJang",
            "model_ko": "관계자분께,\n\n베를린에 새로 왔고 언어 교환 파트너를 찾고 있습니다. 독일어를 배우고 싶고 한국어를 가르칠 수 있습니다. 저녁과 주말에 시간이 됩니다. 도와주실 수 있나요?\n\n감사합니다\n경의를 담아\nJang",
            "word_count": 38,
            "tips_ko": [
              "자기 상황 → 목적 → 가능 시간",
              "교환 제안: 배움 + 가르침",
              "abends / am Wochenende = 시간 표현"
            ]
          }
        ]
      }
    ]
  },
  "sprechen": {
    "title_de": "Sprechen",
    "title_ko": "말하기",
    "parts": [
      {
        "part": "Teil 1",
        "title_de": "Fragen zur Person stellen und beantworten",
        "title_ko": "자기 정보 질문/답변 (4개 카드)",
        "description_ko": "4개 키워드 카드를 보고 파트너에게 질문하고 답변. 각 키워드당 1개 질문 + 답변.",
        "examples": [
          {
            "keyword": "Name",
            "keyword_ko": "이름",
            "questions": [
              {"de": "Wie heißen Sie?", "ko": "이름이 어떻게 되세요?"},
              {"de": "Wie ist Ihr Name?", "ko": "성함이 어떻게 되시나요?"},
              {"de": "Wie schreibt man Ihren Namen?", "ko": "이름은 어떻게 쓰나요?"}
            ],
            "answers": [
              {"de": "Ich heiße Hwang Jihyeon.", "ko": "저는 황지현입니다."},
              {"de": "Mein Name ist Jihyeon Hwang.", "ko": "제 이름은 지현 황입니다."},
              {"de": "Mein Name ist J-I-H-Y-E-O-N.", "ko": "제 이름은 J-I-H-Y-E-O-N 입니다."}
            ]
          },
          {
            "keyword": "Wohnort",
            "keyword_ko": "거주지",
            "questions": [
              {"de": "Wo wohnen Sie?", "ko": "어디 사세요?"},
              {"de": "Woher kommen Sie?", "ko": "어디서 오셨나요?"},
              {"de": "Wie lange wohnen Sie schon in Berlin?", "ko": "베를린에 얼마나 사셨어요?"}
            ],
            "answers": [
              {"de": "Ich wohne in Berlin.", "ko": "베를린에 살아요."},
              {"de": "Ich komme aus Südkorea, aber jetzt wohne ich in München.", "ko": "한국 출신이지만 지금은 뮌헨에 살아요."},
              {"de": "Ich wohne seit zwei Jahren in Berlin.", "ko": "베를린에 2년째 살고 있어요."}
            ]
          },
          {
            "keyword": "Alter",
            "keyword_ko": "나이",
            "questions": [
              {"de": "Wie alt sind Sie?", "ko": "몇 살이세요?"},
              {"de": "Wann sind Sie geboren?", "ko": "언제 태어나셨어요?"}
            ],
            "answers": [
              {"de": "Ich bin 28 Jahre alt.", "ko": "28살입니다."},
              {"de": "Ich bin am 15. März 1996 geboren.", "ko": "1996년 3월 15일에 태어났어요."}
            ]
          },
          {
            "keyword": "Beruf",
            "keyword_ko": "직업",
            "questions": [
              {"de": "Was machen Sie beruflich?", "ko": "직업이 무엇인가요?"},
              {"de": "Was sind Sie von Beruf?", "ko": "무슨 일을 하세요?"},
              {"de": "Wo arbeiten Sie?", "ko": "어디서 일하세요?"}
            ],
            "answers": [
              {"de": "Ich bin Ingenieurin.", "ko": "저는 엔지니어입니다."},
              {"de": "Ich arbeite als Lehrerin in einer Schule.", "ko": "학교에서 교사로 일합니다."},
              {"de": "Ich studiere noch. Ich studiere Informatik.", "ko": "아직 학생입니다. 정보학을 공부해요."}
            ]
          },
          {
            "keyword": "Familie",
            "keyword_ko": "가족",
            "questions": [
              {"de": "Haben Sie Geschwister?", "ko": "형제자매가 있나요?"},
              {"de": "Sind Sie verheiratet?", "ko": "결혼하셨나요?"},
              {"de": "Haben Sie Kinder?", "ko": "자녀가 있으세요?"}
            ],
            "answers": [
              {"de": "Ja, ich habe eine Schwester und einen Bruder.", "ko": "네, 자매 하나, 형제 하나 있어요."},
              {"de": "Nein, ich bin ledig.", "ko": "아니요, 미혼입니다."},
              {"de": "Ja, ich habe zwei Kinder, einen Sohn und eine Tochter.", "ko": "네, 아이가 둘 있어요, 아들 하나, 딸 하나요."}
            ]
          },
          {
            "keyword": "Sprachen",
            "keyword_ko": "언어",
            "questions": [
              {"de": "Welche Sprachen sprechen Sie?", "ko": "어떤 언어를 하세요?"},
              {"de": "Wie lange lernen Sie schon Deutsch?", "ko": "독일어를 얼마나 배우셨어요?"}
            ],
            "answers": [
              {"de": "Ich spreche Koreanisch, Englisch und ein bisschen Deutsch.", "ko": "한국어, 영어, 그리고 독일어를 조금 해요."},
              {"de": "Ich lerne seit einem Jahr Deutsch.", "ko": "1년 전부터 독일어를 배우고 있어요."}
            ]
          },
          {
            "keyword": "Hobbys",
            "keyword_ko": "취미",
            "questions": [
              {"de": "Was machen Sie gerne in Ihrer Freizeit?", "ko": "여가 시간에 뭘 하세요?"},
              {"de": "Was sind Ihre Hobbys?", "ko": "취미가 무엇인가요?"},
              {"de": "Treiben Sie Sport?", "ko": "운동하세요?"}
            ],
            "answers": [
              {"de": "Ich lese gerne und höre Musik.", "ko": "책 읽기와 음악 듣기를 좋아해요."},
              {"de": "Meine Hobbys sind Fotografieren und Kochen.", "ko": "취미는 사진 찍기와 요리입니다."},
              {"de": "Ja, ich gehe zweimal pro Woche schwimmen.", "ko": "네, 일주일에 두 번 수영하러 가요."}
            ]
          },
          {
            "keyword": "Essen",
            "keyword_ko": "음식",
            "questions": [
              {"de": "Was essen Sie gerne?", "ko": "뭘 즐겨 드세요?"},
              {"de": "Können Sie kochen?", "ko": "요리할 수 있나요?"},
              {"de": "Was ist Ihr Lieblingsessen?", "ko": "제일 좋아하는 음식이 뭐예요?"}
            ],
            "answers": [
              {"de": "Ich esse gerne italienisches Essen, besonders Pizza.", "ko": "이탈리아 음식, 특히 피자를 좋아해요."},
              {"de": "Ja, ich koche gerne, besonders koreanisches Essen.", "ko": "네, 요리를 좋아해요, 특히 한국 음식이요."},
              {"de": "Mein Lieblingsessen ist Bibimbap.", "ko": "제일 좋아하는 음식은 비빔밥이에요."}
            ]
          },
          {
            "keyword": "Reisen",
            "keyword_ko": "여행",
            "questions": [
              {"de": "Reisen Sie gerne?", "ko": "여행 좋아하세요?"},
              {"de": "Wohin möchten Sie reisen?", "ko": "어디로 여행 가고 싶으세요?"},
              {"de": "Wo waren Sie schon im Urlaub?", "ko": "어디서 휴가 보낸 적 있어요?"}
            ],
            "answers": [
              {"de": "Ja, ich reise sehr gerne.", "ko": "네, 여행 정말 좋아해요."},
              {"de": "Ich möchte gerne nach Italien reisen.", "ko": "이탈리아에 가보고 싶어요."},
              {"de": "Ich war schon in Frankreich und Spanien.", "ko": "프랑스와 스페인에 가봤어요."}
            ]
          },
          {
            "keyword": "Tagesablauf",
            "keyword_ko": "하루 일과",
            "questions": [
              {"de": "Wann stehen Sie morgens auf?", "ko": "아침에 몇 시에 일어나세요?"},
              {"de": "Was machen Sie abends?", "ko": "저녁에 뭘 하세요?"}
            ],
            "answers": [
              {"de": "Ich stehe um 7 Uhr auf.", "ko": "7시에 일어나요."},
              {"de": "Abends koche ich und sehe fern.", "ko": "저녁에는 요리하고 TV를 봐요."}
            ]
          },
          {
            "keyword": "Wetter",
            "keyword_ko": "날씨",
            "questions": [
              {"de": "Wie ist das Wetter heute?", "ko": "오늘 날씨 어때요?"},
              {"de": "Welche Jahreszeit mögen Sie am liebsten?", "ko": "어떤 계절 제일 좋아하세요?"}
            ],
            "answers": [
              {"de": "Heute ist es sonnig und warm.", "ko": "오늘은 맑고 따뜻해요."},
              {"de": "Ich mag den Frühling am liebsten.", "ko": "봄을 제일 좋아해요."}
            ]
          },
          {
            "keyword": "Schule",
            "keyword_ko": "학교",
            "questions": [
              {"de": "Welche Fächer mögen Sie?", "ko": "어떤 과목을 좋아하세요?"},
              {"de": "In welche Schule gehen Sie?", "ko": "어느 학교에 다니세요?"}
            ],
            "answers": [
              {"de": "Ich mag Mathe und Englisch.", "ko": "수학과 영어를 좋아해요."},
              {"de": "Ich gehe in die VHS für den Deutschkurs.", "ko": "시민대학에서 독일어 수업을 들어요."}
            ]
          }
        ]
      },
      {
        "part": "Teil 2",
        "title_de": "Über ein Thema sprechen (mit 4 Stichpunkten)",
        "title_ko": "주제에 대해 말하기 (4개 키워드)",
        "description_ko": "주어진 주제 + 4개 키워드로 3-4분간 자기 경험을 설명. 모든 키워드를 다뤄야 함.",
        "examples": [
          {
            "topic_de": "Erzählen Sie über Ihren Tagesablauf",
            "topic_ko": "당신의 하루 일과를 이야기해보세요",
            "keywords": ["aufstehen", "Arbeit/Schule", "Freizeit", "Schlafen"],
            "keywords_ko": ["일어나기", "직장/학교", "여가", "잠자기"],
            "model_de": "Ich stehe normalerweise um 7 Uhr auf. Dann dusche ich mich und frühstücke. Zum Frühstück esse ich Brot mit Käse und trinke Kaffee.\n\nUm 8 Uhr fahre ich mit der U-Bahn zur Arbeit. Ich arbeite als Designer in einer kleinen Firma. Meine Arbeit beginnt um 9 Uhr und endet um 18 Uhr. In der Mittagspause esse ich meistens in der Kantine.\n\nNach der Arbeit habe ich Freizeit. Ich gehe oft ins Fitnessstudio oder treffe mich mit Freunden. Manchmal koche ich auch zu Hause und sehe einen Film.\n\nUm 23 Uhr gehe ich ins Bett. Vor dem Schlafen lese ich noch ein bisschen.",
            "model_ko": "보통 7시에 일어납니다. 그리고 샤워하고 아침을 먹어요. 아침으로는 빵에 치즈를 곁들여 먹고 커피를 마십니다.\n\n8시에 지하철로 출근합니다. 작은 회사에서 디자이너로 일해요. 일은 9시에 시작해서 18시에 끝납니다. 점심시간에는 보통 구내식당에서 먹습니다.\n\n퇴근 후에는 여가 시간이에요. 자주 헬스장에 가거나 친구들을 만납니다. 가끔 집에서 요리하고 영화를 봐요.\n\n23시에 잠자리에 듭니다. 자기 전에 책을 좀 읽어요.",
            "tips_ko": [
              "각 키워드당 3-4문장",
              "시간 표현 자주 사용 (um, am, von...bis)",
              "연결어 사용: dann, danach, nach + Dat., manchmal, oft",
              "현재형이 기본"
            ]
          },
          {
            "topic_de": "Erzählen Sie über Ihre Familie",
            "topic_ko": "당신의 가족에 대해 이야기해보세요",
            "keywords": ["Mitglieder", "Beruf", "Wohnort", "Aktivitäten zusammen"],
            "keywords_ko": ["가족 구성원", "직업", "거주지", "함께 하는 활동"],
            "model_de": "Meine Familie ist nicht so groß. Wir sind vier Personen: meine Eltern, meine Schwester und ich. Ich habe auch einen Hund, er heißt Max.\n\nMein Vater ist Lehrer und meine Mutter arbeitet als Krankenschwester. Meine Schwester ist 22 Jahre alt und studiert Medizin.\n\nMeine Eltern leben in Seoul. Meine Schwester wohnt in Busan, weil sie dort studiert. Ich wohne jetzt in Deutschland, aber ich besuche meine Familie einmal im Jahr.\n\nWenn wir zusammen sind, kochen und essen wir gerne. Wir machen auch oft Ausflüge oder gehen wandern. Im Sommer fahren wir manchmal ans Meer.",
            "model_ko": "우리 가족은 그렇게 크지 않아요. 네 명입니다: 부모님, 여동생, 그리고 저. 강아지도 있는데 이름은 Max예요.\n\n아버지는 선생님이고, 어머니는 간호사로 일하세요. 여동생은 22살이고 의학을 공부합니다.\n\n부모님은 서울에 사세요. 여동생은 부산에 사는데 그곳에서 공부하기 때문이에요. 저는 지금 독일에 살지만 1년에 한 번 가족을 방문합니다.\n\n같이 있을 때는 요리하고 먹는 걸 좋아해요. 외출하거나 하이킹도 자주 갑니다. 여름에는 가끔 바다에 가요.",
            "tips_ko": [
              "각 가족 구성원 한두 문장씩 묘사",
              "직업: arbeiten als / sein + 직업",
              "관계 표현: weil, wenn (부문장 동사 끝)",
              "활동: zusammen + 동사"
            ]
          },
          {
            "topic_de": "Erzählen Sie über Ihre Wohnung",
            "topic_ko": "당신의 집에 대해 이야기해보세요",
            "keywords": ["Größe", "Zimmer", "Lage", "Was Sie mögen"],
            "keywords_ko": ["크기", "방", "위치", "마음에 드는 점"],
            "model_de": "Ich wohne in einer schönen Zweizimmerwohnung. Die Wohnung ist ungefähr 60 Quadratmeter groß. Das ist nicht sehr groß, aber für mich allein perfekt.\n\nIn der Wohnung gibt es ein Schlafzimmer, ein Wohnzimmer, eine Küche und ein Bad. Es gibt auch einen kleinen Balkon, wo ich Pflanzen habe.\n\nMeine Wohnung liegt im Zentrum von Berlin. Die U-Bahn-Station ist nur fünf Minuten zu Fuß. Es gibt viele Geschäfte und Restaurants in der Nähe.\n\nIch mag meine Wohnung sehr, weil sie hell und ruhig ist. Vom Balkon kann ich Bäume sehen. Außerdem habe ich nette Nachbarn.",
            "model_ko": "예쁜 투룸 아파트에 살아요. 약 60제곱미터입니다. 그렇게 크지는 않지만 혼자 살기엔 완벽해요.\n\n집에는 침실, 거실, 주방, 욕실이 있습니다. 작은 발코니도 있어서 식물을 키워요.\n\n제 집은 베를린 중심에 있어요. 지하철역은 도보 5분 거리입니다. 근처에 상점과 식당이 많아요.\n\n집을 매우 좋아하는데 밝고 조용하기 때문이에요. 발코니에서 나무들을 볼 수 있어요. 게다가 친절한 이웃이 있습니다.",
            "tips_ko": [
              "Es gibt + 4격 = ~이 있다",
              "weil 사용해서 이유 설명",
              "전치사 정확히: in der Nähe, vom Balkon",
              "Außerdem = 게다가 (연결어)"
            ]
          },
          {
            "topic_de": "Erzählen Sie über Ihren letzten Urlaub",
            "topic_ko": "최근 휴가에 대해 이야기해보세요",
            "keywords": ["Wohin", "Mit wem", "Aktivitäten", "Wetter"],
            "keywords_ko": ["어디로", "누구와", "활동", "날씨"],
            "model_de": "Letzten Sommer war ich in Italien im Urlaub. Genauer gesagt, in Rom. Es war meine erste Reise nach Italien und ich war sehr gespannt.\n\nIch bin mit meiner besten Freundin gefahren. Wir kennen uns seit der Schulzeit und reisen oft zusammen.\n\nIn Rom haben wir viele Sehenswürdigkeiten besucht, zum Beispiel das Kolosseum und den Vatikan. Wir haben auch viel italienisches Essen probiert, besonders Pizza und Pasta. Abends sind wir oft spazieren gegangen.\n\nDas Wetter war fantastisch. Es war warm und sonnig, ungefähr 28 Grad. Es hat nur an einem Tag geregnet. Es war ein wunderschöner Urlaub und ich möchte bald wieder hinfahren.",
            "model_ko": "지난 여름에 이탈리아로 휴가를 갔어요. 정확히는 로마요. 이탈리아 첫 여행이라 매우 기대됐어요.\n\n가장 친한 친구와 갔어요. 학창 시절부터 알고 지냈고 자주 같이 여행해요.\n\n로마에서 많은 관광 명소를 방문했어요, 예를 들어 콜로세움과 바티칸이요. 이탈리아 음식도 많이 먹어봤어요, 특히 피자와 파스타요. 저녁에는 자주 산책했어요.\n\n날씨는 환상적이었어요. 따뜻하고 맑았고, 약 28도였어요. 단 하루만 비가 왔어요. 정말 멋진 휴가였고 곧 다시 가고 싶어요.",
            "tips_ko": [
              "과거 시제: 현재완료 (haben/sein + P.P.)",
              "여행 동사는 sein (gefahren, gegangen)",
              "구체적 예시: zum Beispiel",
              "감정 표현: war gespannt, war fantastisch"
            ]
          },
          {
            "topic_de": "Erzählen Sie über Ihre Hobbys",
            "topic_ko": "당신의 취미에 대해 이야기해보세요",
            "keywords": ["Welche Hobbys", "Wie oft", "Mit wem", "Warum"],
            "keywords_ko": ["어떤 취미", "얼마나 자주", "누구와", "왜"],
            "model_de": "Ich habe verschiedene Hobbys, aber meine zwei Lieblingshobbys sind Lesen und Sport machen.\n\nIch lese fast jeden Tag, meistens abends vor dem Schlafen. Ich lese gerne Romane und manchmal auch Bücher über Geschichte.\n\nFür den Sport gehe ich dreimal pro Woche ins Fitnessstudio. Manchmal gehe ich auch joggen oder schwimmen. Am Wochenende spiele ich mit Freunden Fußball.\n\nIch mache meine Hobbys meistens allein, aber Sport mache ich gerne mit Freunden. Es macht mehr Spaß zusammen.\n\nIch mag meine Hobbys, weil sie mir helfen, Stress abzubauen. Nach einem langen Arbeitstag kann ich mich gut entspannen.",
            "model_ko": "여러 취미가 있지만 가장 좋아하는 두 가지는 독서와 운동이에요.\n\n거의 매일 책을 읽어요, 주로 잠자기 전 저녁에요. 소설을 좋아하고 가끔 역사 책도 읽어요.\n\n운동은 일주일에 세 번 헬스장에 가요. 가끔 조깅이나 수영도 해요. 주말에는 친구들과 축구를 합니다.\n\n취미는 보통 혼자 하지만 운동은 친구들과 하는 걸 좋아해요. 같이 하면 더 재미있어요.\n\n취미를 좋아하는 이유는 스트레스 해소에 도움이 되기 때문이에요. 긴 근무일 후에 잘 쉴 수 있어요.",
            "tips_ko": [
              "다양한 빈도 표현: fast jeden Tag, dreimal pro Woche, manchmal",
              "이유 (warum): weil + 부문장",
              "감정: Es macht Spaß, Ich mag"
            ]
          }
        ]
      },
      {
        "part": "Teil 3",
        "title_de": "Etwas zusammen planen",
        "title_ko": "함께 계획하기 (파트너 대화)",
        "description_ko": "파트너와 일정/계획 협의. 카드의 정보로 약속 시간/장소 정하기.",
        "examples": [
          {
            "scenario_de": "Ein gemeinsames Geschenk für einen Freund kaufen",
            "scenario_ko": "친구를 위한 공동 선물 사러 가기",
            "dialogue": [
              {"speaker": "A", "de": "Du, unser Freund Markus hat bald Geburtstag. Wir sollten ihm zusammen ein Geschenk kaufen.", "ko": "있잖아, 우리 친구 Markus 생일이 곧이야. 같이 선물 사야 할 것 같은데."},
              {"speaker": "B", "de": "Gute Idee! Was meinst du, was sollen wir kaufen?", "ko": "좋은 생각이야! 뭘 사면 좋을까?"},
              {"speaker": "A", "de": "Er liest gerne. Wie wäre es mit einem Buch?", "ko": "걔 책 읽는 거 좋아하잖아. 책 어때?"},
              {"speaker": "B", "de": "Ja, das ist eine gute Idee. Wann können wir einkaufen gehen?", "ko": "응, 좋은 생각이야. 언제 사러 갈 수 있을까?"},
              {"speaker": "A", "de": "Hast du am Samstag Zeit?", "ko": "토요일에 시간 있어?"},
              {"speaker": "B", "de": "Samstag passt mir leider nicht, ich arbeite. Wie wäre es am Freitag nach der Arbeit?", "ko": "토요일은 안타깝지만 안 돼, 일해. 금요일 퇴근 후는 어때?"},
              {"speaker": "A", "de": "Ja, das passt mir gut. Treffen wir uns um 18 Uhr vor dem Buchladen?", "ko": "응, 좋아. 서점 앞에서 18시에 만날까?"},
              {"speaker": "B", "de": "Perfekt! Also Freitag um 18 Uhr vor dem Buchladen.", "ko": "완벽해! 그럼 금요일 18시에 서점 앞에서 보자."}
            ],
            "tips_ko": [
              "제안 → 동의 → 시간 협상 → 확정 순서",
              "거절 시 사유 + 대안 제시 필수",
              "마지막에 반드시 확정 정리 (요일+시간+장소)",
              "passen + Dat. = ~에게 맞다"
            ]
          },
          {
            "scenario_de": "Einen Ausflug am Wochenende planen",
            "scenario_ko": "주말 나들이 계획",
            "dialogue": [
              {"speaker": "A", "de": "Lass uns am Wochenende einen Ausflug machen. Was hast du Lust zu tun?", "ko": "주말에 나들이 가자. 뭐 하고 싶어?"},
              {"speaker": "B", "de": "Ich möchte gerne wandern gehen. Im Wald wäre es schön.", "ko": "하이킹 가고 싶어. 숲이 좋겠어."},
              {"speaker": "A", "de": "Wandern ist mir zu anstrengend. Wie wäre es mit einem Picknick im Park?", "ko": "하이킹은 너무 힘들어. 공원에서 피크닉 어때?"},
              {"speaker": "B", "de": "Okay, das ist auch gut. Sollen wir Samstag oder Sonntag gehen?", "ko": "오케이, 그것도 좋아. 토요일이나 일요일 중 언제 갈까?"},
              {"speaker": "A", "de": "Sonntag wäre besser. Samstag muss ich einkaufen.", "ko": "일요일이 더 좋겠어. 토요일은 장 봐야 해."},
              {"speaker": "B", "de": "Dann Sonntag. Um wie viel Uhr?", "ko": "그럼 일요일. 몇 시에?"},
              {"speaker": "A", "de": "Sagen wir um 12 Uhr? Ich bringe das Essen mit.", "ko": "12시에 어때? 음식은 내가 가져갈게."},
              {"speaker": "B", "de": "Super! Ich bringe Getränke mit. Bis Sonntag!", "ko": "좋아! 음료는 내가 가져갈게. 일요일에 봐!"}
            ],
            "tips_ko": [
              "선호 차이 → 절충안 찾기",
              "역할 분담 (음식/음료 등)",
              "Wie wäre es mit + Dat. = ~은 어때?",
              "Sagen wir um... = ~에 하자"
            ]
          },
          {
            "scenario_de": "Zusammen einen Geburtstag feiern",
            "scenario_ko": "함께 생일 파티 열기",
            "dialogue": [
              {"speaker": "A", "de": "Unsere Kollegin Lisa hat nächste Woche Geburtstag. Wollen wir eine kleine Party im Büro machen?", "ko": "동료 Lisa 다음 주에 생일이야. 사무실에서 작은 파티 할까?"},
              {"speaker": "B", "de": "Ja, das ist eine schöne Idee! Wann sollen wir feiern?", "ko": "응, 좋은 생각이야! 언제 할까?"},
              {"speaker": "A", "de": "Ihr Geburtstag ist am Mittwoch. Wir könnten in der Mittagspause feiern.", "ko": "수요일이 생일이야. 점심시간에 할 수 있어."},
              {"speaker": "B", "de": "Gut. Was sollen wir besorgen? Ich kann einen Kuchen backen.", "ko": "좋아. 뭘 준비할까? 내가 케이크 구울 수 있어."},
              {"speaker": "A", "de": "Super, dann kümmere ich mich um die Getränke und Dekoration.", "ko": "좋아, 그럼 음료랑 장식은 내가 맡을게."},
              {"speaker": "B", "de": "Und wer schreibt eine Karte für sie?", "ko": "카드는 누가 쓸까?"},
              {"speaker": "A", "de": "Ich schreibe die Karte und alle unterschreiben dann.", "ko": "내가 카드 쓸게, 그리고 모두 서명하자."},
              {"speaker": "B", "de": "Perfekt! Bis Mittwoch in der Mittagspause.", "ko": "완벽해! 수요일 점심시간에 보자."}
            ],
            "tips_ko": [
              "역할 분담 표현: Ich kümmere mich um + 4격",
              "ich kann + 동사원형 = ~할 수 있다",
              "wollen wir + 동사원형 = 우리 ~할까?"
            ]
          },
          {
            "scenario_de": "Einen Kinobesuch organisieren",
            "scenario_ko": "영화 보러 가기 계획",
            "dialogue": [
              {"speaker": "A", "de": "Hast du Lust, am Wochenende ins Kino zu gehen?", "ko": "주말에 영화 보러 갈래?"},
              {"speaker": "B", "de": "Ja, gerne! Welchen Film möchtest du sehen?", "ko": "응, 좋아! 어떤 영화 보고 싶어?"},
              {"speaker": "A", "de": "Es gibt einen neuen Action-Film. Magst du Action?", "ko": "새로운 액션 영화 있어. 액션 좋아해?"},
              {"speaker": "B", "de": "Action ist nicht so mein Geschmack. Können wir vielleicht eine Komödie sehen?", "ko": "액션은 별로야. 코미디 볼까?"},
              {"speaker": "A", "de": "Okay, das geht auch. Samstag oder Sonntag?", "ko": "오케이, 그것도 좋아. 토요일 아니면 일요일?"},
              {"speaker": "B", "de": "Samstagabend wäre gut. Um 20 Uhr?", "ko": "토요일 저녁이 좋겠어. 20시에?"},
              {"speaker": "A", "de": "Ja, 20 Uhr passt mir. Sollen wir uns vor dem Kino treffen?", "ko": "응, 20시 괜찮아. 영화관 앞에서 만날까?"},
              {"speaker": "B", "de": "Ja, gerne. Bis Samstag um 19:45 vor dem Kino.", "ko": "응, 좋아. 토요일 19:45에 영화관 앞에서 봐."}
            ],
            "tips_ko": [
              "Hast du Lust zu + 동사원형 = ~할 마음 있어?",
              "장르 선호 차이 → 협상",
              "약속은 영화 시작 15분 전이 자연스러움"
            ]
          }
        ]
      }
    ]
  }
};
