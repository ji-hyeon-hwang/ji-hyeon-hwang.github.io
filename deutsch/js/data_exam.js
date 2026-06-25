// Goethe A2 실전 시험 시뮬레이션 데이터 (확장판)
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
            "id": "s1-1",
            "title_ko": "친구를 생일 파티에 초대하기",
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
            ],
            "variations": [
              {"de": "am Freitag, den 20. April", "ko": "4월 20일 금요일에", "note": "날짜 바꿔서 응용"},
              {"de": "im Restaurant 'Italia'", "ko": "이탈리아 식당에서", "note": "장소 변형"},
              {"de": "Kannst du etwas zu trinken mitbringen?", "ko": "마실 거 가져올 수 있어?", "note": "가져올 물건 변형"}
            ]
          },
          {
            "id": "s1-2",
            "title_ko": "선생님께 병가 알리기",
            "scenario_de": "Sie sind krank und können nicht zum Deutschkurs kommen. Schreiben Sie Ihrem Lehrer Herrn Müller.\n- Sagen Sie, dass Sie krank sind.\n- Wie lange können Sie nicht kommen?\n- Fragen Sie nach Hausaufgaben.",
            "scenario_ko": "당신은 아파서 독일어 수업에 갈 수 없습니다. 선생님 Müller씨에게 메일을 쓰세요.\n- 아프다고 말하세요.\n- 얼마나 못 가나요?\n- 숙제를 물어보세요.",
            "model_de": "Sehr geehrter Herr Müller,\n\nleider bin ich krank und kann diese Woche nicht zum Kurs kommen. Ich habe Fieber und muss zu Hause bleiben. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?\n\nVielen Dank!\nMit freundlichen Grüßen\nJihyeon",
            "model_ko": "Müller 선생님께,\n\n안타깝지만 아파서 이번 주에 수업에 갈 수 없습니다. 열이 있어서 집에 있어야 합니다. 숙제를 이메일로 보내주실 수 있나요?\n\n감사합니다!\n경의를 담아\n지현",
            "word_count": 35,
            "tips_ko": [
              "선생님 → 격식체 (Sehr geehrter Herr / Mit freundlichen Grüßen)",
              "사유 + 기간 + 요청 순서로",
              "정중한 부탁: Können Sie bitte... ?"
            ],
            "variations": [
              {"de": "Ich habe starke Kopfschmerzen.", "ko": "두통이 심해요.", "note": "다른 증상"},
              {"de": "Ich kann bis Freitag nicht kommen.", "ko": "금요일까지 못 가요.", "note": "기간 명시"},
              {"de": "Können Sie mir die Materialien geben, wenn ich zurück bin?", "ko": "돌아오면 자료를 받을 수 있을까요?", "note": "다른 요청 방식"}
            ]
          },
          {
            "id": "s1-3",
            "title_ko": "친구에게 새 직장 알리기",
            "scenario_de": "Sie haben einen neuen Job. Schreiben Sie Ihrem Freund Tom.\n- Was ist Ihr neuer Job?\n- Wann beginnen Sie?\n- Wo arbeiten Sie?",
            "scenario_ko": "새 직장을 구했습니다. 친구 Tom에게 편지하세요.\n- 새 직업은 무엇인가요?\n- 언제 시작하나요?\n- 어디서 일하나요?",
            "model_de": "Hallo Tom,\n\nich habe tolle Neuigkeiten! Ich arbeite ab nächstem Monat als Designer in einer kleinen Firma. Das Büro ist in der Stadtmitte von München. Lass uns bald treffen und feiern!\n\nLiebe Grüße\nMin",
            "model_ko": "안녕 Tom,\n\n좋은 소식이 있어! 다음 달부터 작은 회사에서 디자이너로 일하게 됐어. 사무실은 뮌헨 시내 중심에 있어. 곧 만나서 축하하자!\n\n안부 전하며\nMin",
            "word_count": 30,
            "tips_ko": [
              "친구 → 비격식 (Hallo + 이름)",
              "직업: arbeiten als + 직업 (관사 없이)",
              "시간: ab + 3격 (ab nächstem Monat)"
            ],
            "variations": [
              {"de": "Ich arbeite als Krankenschwester in einem Krankenhaus.", "ko": "병원에서 간호사로 일해요.", "note": "다른 직업"},
              {"de": "Ich beginne am ersten August.", "ko": "8월 1일에 시작해요.", "note": "구체적 시작일"}
            ]
          },
          {
            "id": "s1-4",
            "title_ko": "치과 예약 취소",
            "scenario_de": "Sie möchten einen Termin beim Zahnarzt absagen. Schreiben Sie an die Praxis.\n- Welcher Termin?\n- Warum sagen Sie ab?\n- Wollen Sie einen neuen Termin?",
            "scenario_ko": "치과 예약을 취소하려고 합니다. 진료소에 메일을 쓰세요.\n- 어떤 예약인가요?\n- 왜 취소하나요?\n- 새 예약을 원하나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nleider muss ich meinen Termin am Mittwoch um 10 Uhr absagen, weil ich beruflich verhindert bin. Können Sie mir bitte einen neuen Termin nächste Woche geben?\n\nVielen Dank\nMit freundlichen Grüßen\nKim",
            "model_ko": "관계자분께,\n\n안타깝지만 수요일 10시 예약을 취소해야 합니다. 업무 일정 때문에 갈 수 없습니다. 다음 주에 새 예약을 잡아주실 수 있나요?\n\n감사합니다\n경의를 담아\nKim",
            "word_count": 36,
            "tips_ko": [
              "기관 → Sehr geehrte Damen und Herren",
              "사유 설명: weil + 부문장 (동사 끝으로)",
              "대안 요청 포함"
            ],
            "variations": [
              {"de": "weil ich krank geworden bin", "ko": "병이 나서", "note": "다른 사유"},
              {"de": "weil mein Sohn krank ist", "ko": "아들이 아파서", "note": "가족 사유"}
            ]
          },
          {
            "id": "s1-5",
            "title_ko": "집 광고 보고 문의",
            "scenario_de": "Sie haben eine Wohnung in einer Anzeige gesehen. Schreiben Sie an den Vermieter.\n- Sie haben die Anzeige gelesen.\n- Möchten Sie die Wohnung besichtigen?\n- Wann haben Sie Zeit?",
            "scenario_ko": "광고에서 집을 봤습니다. 임대인에게 메일을 쓰세요.\n- 광고를 봤다고 알리세요.\n- 집을 보고 싶나요?\n- 언제 시간이 되나요?",
            "model_de": "Sehr geehrte Frau Schmidt,\n\nich habe Ihre Anzeige im Internet gelesen und interessiere mich für die Wohnung. Könnte ich die Wohnung besichtigen? Ich habe am Freitagnachmittag oder Samstagvormittag Zeit.\n\nMit freundlichen Grüßen\nLee",
            "model_ko": "Schmidt 여사님께,\n\n인터넷에서 광고를 보고 그 집에 관심이 있습니다. 집을 보러 갈 수 있을까요? 금요일 오후나 토요일 오전에 시간이 됩니다.\n\n경의를 담아\nLee",
            "word_count": 33,
            "tips_ko": [
              "광고 보고 연락: Ihre Anzeige + gelesen",
              "관심 표현: sich interessieren für + Akk.",
              "시간 옵션 2개 제시"
            ],
            "variations": [
              {"de": "Ich habe Ihre Anzeige in der Zeitung gelesen.", "ko": "신문에서 광고를 봤어요.", "note": "광고 매체 변형"}
            ]
          },
          {
            "id": "s1-6",
            "title_ko": "친구에게 영화 같이 보자고 제안",
            "scenario_de": "Sie möchten mit Ihrer Freundin ins Kino gehen.\n- Welcher Film?\n- Wann?\n- Wo treffen Sie sich?",
            "scenario_ko": "친구와 영화관에 가려고 합니다.\n- 어떤 영화?\n- 언제?\n- 어디서 만날까요?",
            "model_de": "Liebe Sara,\n\nhast du Lust, am Freitagabend ins Kino zu gehen? Es läuft ein neuer Liebesfilm. Der Film beginnt um 20 Uhr. Sollen wir uns um 19:30 Uhr vor dem Kino treffen?\n\nLiebe Grüße\nLena",
            "model_ko": "친애하는 Sara,\n\n금요일 저녁에 영화관 갈래? 새 로맨스 영화가 상영해. 영화는 20시에 시작해. 19시 30분에 영화관 앞에서 만날까?\n\n안부 전하며\nLena",
            "word_count": 32,
            "tips_ko": [
              "제안: Hast du Lust, ...zu...? = ~할 마음 있어?",
              "약속은 영화 시작 15-30분 전",
              "친구 → 비격식"
            ],
            "variations": [
              {"de": "Es läuft ein neuer Actionfilm.", "ko": "새 액션 영화 해.", "note": "다른 장르"},
              {"de": "am Samstagnachmittag", "ko": "토요일 오후에", "note": "다른 시간"}
            ]
          },
          {
            "id": "s1-7",
            "title_ko": "관광 안내소에 문의",
            "scenario_de": "Sie planen einen Urlaub in Berlin und brauchen Informationen.\n- Was möchten Sie wissen?\n- Wann fahren Sie?\n- Wie viele Personen sind Sie?",
            "scenario_ko": "베를린 여행을 계획 중이고 정보가 필요합니다.\n- 무엇을 알고 싶나요?\n- 언제 가나요?\n- 몇 명인가요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich plane einen Urlaub in Berlin im Juli. Können Sie mir bitte Informationen über die Sehenswürdigkeiten schicken? Wir sind eine Familie mit zwei Kindern.\n\nVielen Dank\nMit freundlichen Grüßen\nHan",
            "model_ko": "관계자분께,\n\n7월에 베를린 여행을 계획 중입니다. 관광 명소에 대한 정보를 보내주실 수 있나요? 우리는 아이 둘이 있는 가족입니다.\n\n감사합니다\n경의를 담아\nHan",
            "word_count": 30,
            "tips_ko": [
              "기관 → 격식체",
              "여행 계획 + 인원 정보 필수",
              "Können Sie ... schicken? = 정중한 정보 요청"
            ],
            "variations": [
              {"de": "im August", "ko": "8월에", "note": "다른 시기"},
              {"de": "Wir sind zu dritt.", "ko": "셋이에요.", "note": "다른 인원"}
            ]
          },
          {
            "id": "s1-8",
            "title_ko": "동료와 점심 약속",
            "scenario_de": "Sie wollen mit Ihrem Kollegen Markus zu Mittag essen.\n- Wann?\n- Wo?\n- Was wollen Sie essen?",
            "scenario_ko": "동료 Markus와 점심을 먹으려고 합니다.\n- 언제?\n- 어디서?\n- 뭘 먹을까요?",
            "model_de": "Hallo Markus,\n\nhast du heute Lust, zusammen zu Mittag zu essen? Wie wäre es um 12:30 Uhr im italienischen Restaurant nebenan? Ich habe Lust auf Pizza.\n\nLiebe Grüße\nTina",
            "model_ko": "안녕 Markus,\n\n오늘 같이 점심 먹을래? 옆에 이탈리아 식당에서 12시 30분 어때? 피자 먹고 싶어.\n\n안부 전하며\nTina",
            "word_count": 28,
            "tips_ko": [
              "동료 → 보통 비격식",
              "Lust haben auf + 4격 = ~ 먹고 싶다",
              "Wie wäre es + 시간/장소 = ~ 어때?"
            ],
            "variations": [
              {"de": "im neuen Café gegenüber", "ko": "건너편 새 카페에서", "note": "다른 장소"}
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
            "id": "s2-1",
            "title_ko": "결혼식 초대 답장",
            "scenario_de": "Ihre Freundin hat Sie zu einer Hochzeit eingeladen. Antworten Sie:\n- Bedanken Sie sich für die Einladung.\n- Sagen Sie, dass Sie kommen.\n- Fragen Sie, ob Sie etwas mitbringen sollen.",
            "scenario_ko": "친구가 결혼식에 초대했습니다. 답장하세요:\n- 초대에 감사하기\n- 간다고 말하기\n- 뭔가 가져갈지 묻기",
            "model_de": "Liebe Julia,\n\nvielen Dank für deine Einladung zu deiner Hochzeit! Ich freue mich sehr und komme natürlich gerne. Soll ich etwas mitbringen? Sag mir bitte Bescheid.\n\nIch freue mich auf den Tag!\nLiebe Grüße\nSarah",
            "model_ko": "친애하는 Julia,\n\n결혼식 초대 정말 고마워! 매우 기뻐서 당연히 갈게. 뭔가 가져가야 할까? 알려줘.\n\n그날을 기대할게!\n안부 전하며\nSarah",
            "word_count": 38,
            "tips_ko": [
              "친구 → 비격식",
              "감사 → 수락 → 질문 순",
              "Sag mir Bescheid = 알려줘"
            ],
            "variations": [
              {"de": "Vielen Dank für die Einladung zum Geburtstag!", "ko": "생일 초대 고마워!", "note": "다른 행사"},
              {"de": "Soll ich einen Blumenstrauß mitbringen?", "ko": "꽃다발 가져갈까?", "note": "구체적 제안"}
            ]
          },
          {
            "id": "s2-2",
            "title_ko": "온라인 쇼핑 교환 요청",
            "scenario_de": "Sie haben einen Wintermantel online gekauft, aber er ist zu klein. Schreiben Sie an den Online-Shop:\n- Was haben Sie gekauft?\n- Was ist das Problem?\n- Was möchten Sie tun (umtauschen/zurückgeben)?",
            "scenario_ko": "겨울 코트를 온라인으로 샀는데 너무 작습니다. 온라인 쇼핑몰에 메일을 쓰세요:\n- 무엇을 샀나요?\n- 무엇이 문제인가요?\n- 어떻게 하고 싶나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nletzte Woche habe ich bei Ihnen einen schwarzen Wintermantel in Größe M bestellt. Leider ist er mir zu klein. Ich möchte den Mantel gegen Größe L umtauschen. Können Sie mir bitte sagen, wie das geht?\n\nMit freundlichen Grüßen\nPark",
            "model_ko": "관계자분께,\n\n지난주에 검은색 겨울 코트 M사이즈를 주문했습니다. 안타깝게도 너무 작습니다. L사이즈로 교환하고 싶습니다. 어떻게 하면 되는지 알려주실 수 있나요?\n\n경의를 담아\nPark",
            "word_count": 42,
            "tips_ko": [
              "구매 사실 → 문제 → 요청 순",
              "사이즈 표현: in Größe M",
              "교환: umtauschen gegen + 4격"
            ],
            "variations": [
              {"de": "ein rotes Kleid in Größe S", "ko": "S사이즈 빨간 드레스", "note": "다른 옷"},
              {"de": "Leider ist die Farbe anders als auf dem Bild.", "ko": "안타깝게도 사진과 색이 달라요.", "note": "다른 문제"},
              {"de": "Ich möchte das Geld zurückbekommen.", "ko": "환불받고 싶어요.", "note": "환불 요청"}
            ]
          },
          {
            "id": "s2-3",
            "title_ko": "시민대학에 강좌 문의",
            "scenario_de": "Sie möchten in der Volkshochschule einen Yoga-Kurs machen. Schreiben Sie:\n- Sie interessieren sich für den Kurs.\n- Wann findet der Kurs statt?\n- Wie viel kostet er?",
            "scenario_ko": "시민대학에서 요가 수업을 듣고 싶습니다. 메일을 쓰세요:\n- 수업에 관심이 있다\n- 수업은 언제인가?\n- 비용은 얼마인가?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich habe Ihre Anzeige für den Yoga-Kurs gesehen und interessiere mich sehr dafür. Können Sie mir bitte sagen, wann der Kurs stattfindet und wie viel er kostet? Gibt es auch einen Kurs für Anfänger?\n\nVielen Dank\nMit freundlichen Grüßen\nChoi",
            "model_ko": "관계자분께,\n\n요가 수업 광고를 봤는데 매우 관심이 있습니다. 수업이 언제 열리고 비용이 얼마인지 알려주실 수 있나요? 초보자 수업도 있나요?\n\n감사합니다\n경의를 담아\nChoi",
            "word_count": 42,
            "tips_ko": [
              "관심 표현 + 질문 2개 묶기",
              "간접의문문: wann + 동사 끝",
              "추가 질문: Gibt es...?"
            ],
            "variations": [
              {"de": "den Deutschkurs", "ko": "독일어 강좌", "note": "다른 강좌"},
              {"de": "den Spanischkurs", "ko": "스페인어 강좌", "note": "다른 언어"}
            ]
          },
          {
            "id": "s2-4",
            "title_ko": "미용실 예약 변경",
            "scenario_de": "Sie haben einen Termin beim Friseur, aber Sie können nicht kommen. Schreiben Sie:\n- Welcher Termin?\n- Warum können Sie nicht?\n- Schlagen Sie einen neuen Termin vor.",
            "scenario_ko": "미용실 예약이 있는데 갈 수 없습니다. 메일을 쓰세요:\n- 어떤 예약인가요?\n- 왜 못 가나요?\n- 새 예약을 제안하세요.",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich habe einen Termin am Donnerstag um 14 Uhr bei Ihnen. Leider kann ich nicht kommen, weil ich an dem Tag arbeiten muss. Könnten wir den Termin auf Freitag um die gleiche Uhrzeit verschieben?\n\nVielen Dank\nMit freundlichen Grüßen\nWang",
            "model_ko": "관계자분께,\n\n목요일 14시에 예약이 있습니다. 안타깝지만 그날 일을 해야 해서 갈 수 없습니다. 같은 시간에 금요일로 미룰 수 있을까요?\n\n감사합니다\n경의를 담아\nWang",
            "word_count": 42,
            "tips_ko": [
              "기존 예약 명시 (요일 + 시간)",
              "사유 (weil + 부문장)",
              "대안 제안 (verschieben auf + 4격)"
            ],
            "variations": [
              {"de": "auf nächste Woche verschieben", "ko": "다음 주로 미루기", "note": "기간 단위 연기"}
            ]
          },
          {
            "id": "s2-5",
            "title_ko": "언어 교환 파트너 찾기",
            "scenario_de": "Sie sind neu in der Stadt und suchen einen Tandempartner. Schreiben Sie an einen Sprachlernverein:\n- Was suchen Sie?\n- Welche Sprache?\n- Wann haben Sie Zeit?",
            "scenario_ko": "도시에 새로 왔고 언어 교환 파트너를 찾고 있습니다.\n- 무엇을 찾나요?\n- 어떤 언어?\n- 언제 시간이 되나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich bin neu in Berlin und suche einen Tandempartner. Ich möchte Deutsch lernen und kann Koreanisch unterrichten. Ich habe abends und am Wochenende Zeit. Können Sie mir bitte helfen?\n\nVielen Dank\nMit freundlichen Grüßen\nJang",
            "model_ko": "관계자분께,\n\n베를린에 새로 왔고 언어 교환 파트너를 찾고 있습니다. 독일어를 배우고 싶고 한국어를 가르칠 수 있습니다. 저녁과 주말에 시간이 됩니다. 도와주실 수 있나요?\n\n감사합니다\n경의를 담아\nJang",
            "word_count": 38,
            "tips_ko": [
              "자기 상황 → 목적 → 가능 시간",
              "교환 제안: 배움 + 가르침",
              "abends / am Wochenende = 시간 표현"
            ],
            "variations": []
          },
          {
            "id": "s2-6",
            "title_ko": "친구 부탁 거절하며 사과",
            "scenario_de": "Ihre Freundin hat Sie gebeten, ihre Katze zu füttern, aber Sie können nicht.\n- Bedanken Sie sich für die Frage.\n- Erklären Sie, warum Sie nicht können.\n- Schlagen Sie eine Lösung vor.",
            "scenario_ko": "친구가 고양이 먹이 줄 것을 부탁했는데 못 합니다.\n- 부탁에 감사하기\n- 못 하는 이유 설명\n- 해결책 제안",
            "model_de": "Liebe Lisa,\n\ndanke, dass du mich gefragt hast! Leider bin ich nächste Woche auf einer Geschäftsreise und kann dir nicht helfen. Vielleicht kann meine Schwester die Katze füttern? Soll ich sie fragen?\n\nLiebe Grüße\nTina",
            "model_ko": "친애하는 Lisa,\n\n물어봐줘서 고마워! 안타깝지만 다음 주에 출장이 있어서 도와줄 수 없어. 우리 언니가 고양이 밥 줄 수 있을지도? 물어볼까?\n\n안부 전하며\nTina",
            "word_count": 36,
            "tips_ko": [
              "감사 → 사정 설명 → 대안 제시",
              "거절은 부드럽게 (Leider, Vielleicht)",
              "Soll ich...? = 내가 ~할까?"
            ],
            "variations": []
          },
          {
            "id": "s2-7",
            "title_ko": "은행 약속 잡기",
            "scenario_de": "Sie möchten ein Konto eröffnen. Schreiben Sie an die Bank:\n- Was wollen Sie?\n- Wann haben Sie Zeit?\n- Welche Unterlagen brauchen Sie?",
            "scenario_ko": "은행 계좌를 개설하고 싶습니다.\n- 무엇을 원하나요?\n- 언제 시간이 되나요?\n- 어떤 서류가 필요한가요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich möchte bei Ihrer Bank ein Konto eröffnen. Können Sie mir bitte einen Termin geben? Ich habe am Montag oder Dienstag Vormittag Zeit. Welche Unterlagen muss ich mitbringen?\n\nVielen Dank\nMit freundlichen Grüßen\nKim",
            "model_ko": "관계자분께,\n\n귀하의 은행에서 계좌를 개설하고 싶습니다. 약속을 잡아주실 수 있나요? 월요일이나 화요일 오전에 시간이 됩니다. 어떤 서류를 가져가야 하나요?\n\n감사합니다\n경의를 담아\nKim",
            "word_count": 38,
            "tips_ko": [
              "목적 → 시간 → 준비물 순",
              "Konto eröffnen = 계좌 개설",
              "Unterlagen = 서류 (항상 복수)"
            ],
            "variations": []
          },
          {
            "id": "s2-8",
            "title_ko": "이웃에게 파티 알리며 사과",
            "scenario_de": "Sie machen am Wochenende eine Party und wollen Ihren Nachbarn informieren:\n- Wann ist die Party?\n- Wie laut wird es?\n- Entschuldigen Sie sich für den Lärm.",
            "scenario_ko": "주말에 파티를 하는데 이웃에게 알리려고 합니다.\n- 언제인가요?\n- 얼마나 시끄러울까요?\n- 소음에 대해 사과하기",
            "model_de": "Liebe Frau Becker,\n\nich möchte Sie informieren, dass ich am Samstag eine kleine Geburtstagsparty mache. Es kann etwas lauter werden. Ich entschuldige mich schon im Voraus für den Lärm.\n\nMit freundlichen Grüßen\nLee",
            "model_ko": "Becker 여사님께,\n\n토요일에 작은 생일 파티를 한다는 걸 알려드립니다. 좀 시끄러울 수 있어요. 소음에 대해 미리 사과드립니다.\n\n경의를 담아\nLee",
            "word_count": 33,
            "tips_ko": [
              "이웃 → 반격식",
              "정보 전달 + 사과",
              "im Voraus = 미리"
            ],
            "variations": []
          },
          {
            "id": "s2-9",
            "title_ko": "호텔 예약 문의",
            "scenario_de": "Sie möchten ein Hotelzimmer in Hamburg reservieren. Schreiben Sie:\n- Wann kommen Sie?\n- Was für ein Zimmer?\n- Was möchten Sie wissen?",
            "scenario_ko": "함부르크 호텔을 예약하려고 합니다.\n- 언제 가나요?\n- 어떤 방?\n- 무엇을 알고 싶나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\nich möchte vom 10. bis 15. Mai ein Doppelzimmer mit Frühstück reservieren. Wie viel kostet das Zimmer pro Nacht? Gibt es einen kostenlosen Parkplatz?\n\nVielen Dank\nMit freundlichen Grüßen\nChoi",
            "model_ko": "관계자분께,\n\n5월 10일부터 15일까지 조식 포함 더블룸을 예약하고 싶습니다. 1박에 얼마인가요? 무료 주차장이 있나요?\n\n감사합니다\n경의를 담아\nChoi",
            "word_count": 32,
            "tips_ko": [
              "기간 (vom~bis), 방 종류 명시",
              "pro Nacht = 1박당",
              "kostenlos = 무료"
            ],
            "variations": []
          },
          {
            "id": "s2-10",
            "title_ko": "분실물 신고",
            "scenario_de": "Sie haben in der U-Bahn Ihre Tasche verloren. Schreiben Sie an das Fundbüro:\n- Was haben Sie verloren?\n- Wann und wo?\n- Was war in der Tasche?",
            "scenario_ko": "지하철에서 가방을 잃어버렸습니다. 분실물 사무소에 메일을 쓰세요.\n- 무엇을 잃어버렸나요?\n- 언제, 어디서?\n- 가방 안에 뭐가 있었나요?",
            "model_de": "Sehr geehrte Damen und Herren,\n\ngestern Morgen habe ich in der U-Bahn (Linie 6) meine schwarze Handtasche verloren. In der Tasche waren mein Geldbeutel und mein Handy. Haben Sie die Tasche gefunden?\n\nMit freundlichen Grüßen\nHan",
            "model_ko": "관계자분께,\n\n어제 아침에 지하철(6호선)에서 검은색 핸드백을 잃어버렸습니다. 가방 안에는 지갑과 핸드폰이 있었습니다. 가방을 찾으셨나요?\n\n경의를 담아\nHan",
            "word_count": 34,
            "tips_ko": [
              "시간 + 장소 + 색/특징 명시",
              "내용물 구체적으로",
              "haben verloren = 잃어버렸다 (현재완료)"
            ],
            "variations": []
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
            "id": "sp1-1",
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
            "id": "sp1-2",
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
            "id": "sp1-3",
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
            "id": "sp1-4",
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
            "id": "sp1-5",
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
            "id": "sp1-6",
            "keyword": "Sprachen",
            "keyword_ko": "언어",
            "questions": [
              {"de": "Welche Sprachen sprechen Sie?", "ko": "어떤 언어를 하세요?"},
              {"de": "Wie lange lernen Sie schon Deutsch?", "ko": "독일어를 얼마나 배우셨어요?"},
              {"de": "Warum lernen Sie Deutsch?", "ko": "왜 독일어를 배우세요?"}
            ],
            "answers": [
              {"de": "Ich spreche Koreanisch, Englisch und ein bisschen Deutsch.", "ko": "한국어, 영어, 그리고 독일어를 조금 해요."},
              {"de": "Ich lerne seit einem Jahr Deutsch.", "ko": "1년 전부터 독일어를 배우고 있어요."},
              {"de": "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", "ko": "독일에서 일하고 싶어서 독일어를 배워요."}
            ]
          },
          {
            "id": "sp1-7",
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
            "id": "sp1-8",
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
            "id": "sp1-9",
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
            "id": "sp1-10",
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
            "id": "sp1-11",
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
            "id": "sp1-12",
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
          },
          {
            "id": "sp1-13",
            "keyword": "Wohnung",
            "keyword_ko": "집",
            "questions": [
              {"de": "Wie groß ist Ihre Wohnung?", "ko": "집이 얼마나 커요?"},
              {"de": "In welchem Stock wohnen Sie?", "ko": "몇 층에 사세요?"},
              {"de": "Haben Sie einen Balkon?", "ko": "발코니 있어요?"}
            ],
            "answers": [
              {"de": "Meine Wohnung ist ungefähr 60 Quadratmeter.", "ko": "집은 약 60제곱미터예요."},
              {"de": "Ich wohne im dritten Stock.", "ko": "3층에 살아요."},
              {"de": "Ja, ich habe einen kleinen Balkon.", "ko": "네, 작은 발코니가 있어요."}
            ]
          },
          {
            "id": "sp1-14",
            "keyword": "Verkehrsmittel",
            "keyword_ko": "교통수단",
            "questions": [
              {"de": "Wie kommen Sie zur Arbeit?", "ko": "어떻게 출근하세요?"},
              {"de": "Haben Sie ein Auto?", "ko": "차 있으세요?"}
            ],
            "answers": [
              {"de": "Ich fahre mit der U-Bahn zur Arbeit.", "ko": "지하철로 출근해요."},
              {"de": "Nein, ich nehme immer den Bus.", "ko": "아니요, 항상 버스를 타요."}
            ]
          },
          {
            "id": "sp1-15",
            "keyword": "Einkaufen",
            "keyword_ko": "쇼핑",
            "questions": [
              {"de": "Wo kaufen Sie ein?", "ko": "어디서 장보세요?"},
              {"de": "Was kaufen Sie gerne?", "ko": "뭘 즐겨 사세요?"}
            ],
            "answers": [
              {"de": "Ich kaufe meistens im Supermarkt nebenan ein.", "ko": "보통 옆 슈퍼에서 장봐요."},
              {"de": "Ich kaufe gerne Bücher und Kleidung.", "ko": "책과 옷을 자주 사요."}
            ]
          },
          {
            "id": "sp1-16",
            "keyword": "Musik",
            "keyword_ko": "음악",
            "questions": [
              {"de": "Welche Musik hören Sie gerne?", "ko": "어떤 음악 좋아하세요?"},
              {"de": "Spielen Sie ein Instrument?", "ko": "악기 다루세요?"}
            ],
            "answers": [
              {"de": "Ich höre gerne Pop und Klassik.", "ko": "팝과 클래식을 좋아해요."},
              {"de": "Ja, ich spiele Klavier seit zehn Jahren.", "ko": "네, 10년째 피아노를 쳐요."}
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
            "id": "sp2-1",
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
            "id": "sp2-2",
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
            "id": "sp2-3",
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
            "id": "sp2-4",
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
            "id": "sp2-5",
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
          },
          {
            "id": "sp2-6",
            "topic_de": "Erzählen Sie über Ihren Beruf / Ihr Studium",
            "topic_ko": "당신의 직업 / 학업에 대해 이야기해보세요",
            "keywords": ["Beruf", "Arbeitsort", "Aufgaben", "Zufrieden?"],
            "keywords_ko": ["직업", "근무지", "업무", "만족도"],
            "model_de": "Ich arbeite als Krankenschwester in einem großen Krankenhaus in Seoul. Ich arbeite dort seit drei Jahren.\n\nDas Krankenhaus liegt im Zentrum der Stadt. Ich fahre jeden Tag mit der U-Bahn dorthin. Die Fahrt dauert ungefähr 30 Minuten.\n\nMeine Aufgaben sind vielfältig. Ich helfe den Patienten, gebe Medikamente und arbeite mit Ärzten zusammen. Manchmal arbeite ich auch nachts.\n\nIch bin mit meiner Arbeit sehr zufrieden, weil ich Menschen helfen kann. Die Kollegen sind nett und ich lerne jeden Tag etwas Neues. Nur die Schichtarbeit ist manchmal anstrengend.",
            "model_ko": "서울의 큰 병원에서 간호사로 일해요. 3년째 거기서 일하고 있습니다.\n\n병원은 시내 중심에 있어요. 매일 지하철로 출근합니다. 이동에 약 30분 걸려요.\n\n업무는 다양해요. 환자를 돕고, 약을 주고, 의사들과 함께 일합니다. 가끔은 야간 근무도 해요.\n\n일에 매우 만족하는데, 사람들을 도울 수 있기 때문이에요. 동료들이 친절하고 매일 새로운 걸 배워요. 다만 교대 근무가 가끔 힘들어요.",
            "tips_ko": [
              "직업: als + 직업 (관사 없이)",
              "기간: seit + 3격",
              "감정 평가 포함 (만족/불만족)"
            ]
          },
          {
            "id": "sp2-7",
            "topic_de": "Erzählen Sie über Ihre Stadt",
            "topic_ko": "당신이 사는 도시에 대해 이야기해보세요",
            "keywords": ["Lage", "Bevölkerung", "Sehenswürdigkeiten", "Was Sie mögen"],
            "keywords_ko": ["위치", "인구", "관광 명소", "마음에 드는 점"],
            "model_de": "Ich wohne in Seoul, der Hauptstadt von Südkorea. Die Stadt liegt im Nordwesten des Landes.\n\nIn Seoul leben ungefähr 10 Millionen Menschen. Es ist eine sehr große und moderne Stadt.\n\nEs gibt viele interessante Sehenswürdigkeiten, zum Beispiel den Gyeongbokgung-Palast, den N-Seoul-Tower und den Han-Fluss. Touristen besuchen die Stadt das ganze Jahr.\n\nIch mag Seoul, weil es hier immer etwas zu tun gibt. Das Essen ist sehr lecker und die öffentlichen Verkehrsmittel sind sehr gut. Manchmal ist die Stadt aber zu laut und zu voll.",
            "model_ko": "한국의 수도 서울에 살아요. 도시는 나라의 북서쪽에 있어요.\n\n서울에는 약 1천만 명이 살아요. 매우 크고 현대적인 도시입니다.\n\n흥미로운 관광 명소가 많아요, 예를 들어 경복궁, 남산 타워, 한강이요. 관광객들이 1년 내내 도시를 방문합니다.\n\n서울을 좋아해요, 항상 할 일이 있기 때문이에요. 음식이 정말 맛있고 대중교통이 매우 좋아요. 하지만 가끔 도시가 너무 시끄럽고 사람이 많아요.",
            "tips_ko": [
              "위치 표현: im Nordwesten / im Süden",
              "인구: ungefähr X Millionen",
              "장단점 균형있게"
            ]
          },
          {
            "id": "sp2-8",
            "topic_de": "Erzählen Sie über das Essen in Ihrem Land",
            "topic_ko": "당신 나라의 음식에 대해 이야기해보세요",
            "keywords": ["Typisches Essen", "Lieblingsessen", "Wann/wie isst man?", "Selbst kochen?"],
            "keywords_ko": ["전통 음식", "좋아하는 음식", "언제/어떻게 먹는지", "직접 요리?"],
            "model_de": "In Korea essen wir viel Reis und Gemüse. Typisch koreanisch sind zum Beispiel Kimchi und Bibimbap.\n\nMein Lieblingsessen ist Bulgogi mit Reis. Das ist Fleisch in einer süßen Soße. Es schmeckt sehr lecker.\n\nIn Korea essen wir normalerweise dreimal am Tag. Zum Frühstück essen wir oft Suppe oder Reis. Wir essen mit Stäbchen und Löffel.\n\nJa, ich koche oft zu Hause. Ich kann verschiedene koreanische Gerichte kochen. Manchmal koche ich auch für meine deutschen Freunde.",
            "model_ko": "한국에서는 쌀과 채소를 많이 먹어요. 대표적인 한국 음식은 김치와 비빔밥이에요.\n\n제 최애 음식은 불고기와 밥이에요. 달콤한 소스의 고기예요. 정말 맛있어요.\n\n한국에서는 보통 하루에 세 끼 먹어요. 아침에는 국이나 밥을 자주 먹어요. 젓가락과 숟가락으로 먹어요.\n\n네, 집에서 자주 요리해요. 다양한 한국 음식을 만들 수 있어요. 가끔 독일 친구들에게도 요리해줘요.",
            "tips_ko": [
              "Typisch + 형용사 = 대표적인 ~ 인",
              "schmecken = 맛이 나다",
              "Hilfsverben: oft/manchmal/normalerweise"
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
            "id": "sp3-1",
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
            "id": "sp3-2",
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
            "id": "sp3-3",
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
            "id": "sp3-4",
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
          },
          {
            "id": "sp3-5",
            "scenario_de": "Einen gemeinsamen Urlaub planen",
            "scenario_ko": "공동 휴가 계획",
            "dialogue": [
              {"speaker": "A", "de": "Sollen wir im Sommer zusammen Urlaub machen?", "ko": "여름에 같이 휴가 갈까?"},
              {"speaker": "B", "de": "Ja, gerne! Wohin möchtest du fahren?", "ko": "응, 좋아! 어디 가고 싶어?"},
              {"speaker": "A", "de": "Wie wäre es mit Spanien? Da ist es warm und es gibt schöne Strände.", "ko": "스페인 어때? 따뜻하고 예쁜 해변이 있어."},
              {"speaker": "B", "de": "Spanien klingt gut. Aber wann genau? Im Juli oder August?", "ko": "스페인 좋네. 근데 정확히 언제? 7월 아니면 8월?"},
              {"speaker": "A", "de": "Ich habe nur im August Urlaub. Geht das bei dir auch?", "ko": "나는 8월에만 휴가야. 너도 괜찮아?"},
              {"speaker": "B", "de": "Ja, August passt mir. Wie lange wollen wir bleiben?", "ko": "응, 8월 괜찮아. 얼마나 머물까?"},
              {"speaker": "A", "de": "Eine Woche reicht, denke ich. Sollen wir das Hotel zusammen buchen?", "ko": "일주일이면 충분할 것 같아. 호텔 같이 예약할까?"},
              {"speaker": "B", "de": "Ja, ich suche heute Abend ein paar Hotels und schicke dir Links.", "ko": "응, 오늘 저녁에 호텔 좀 알아보고 링크 보내줄게."}
            ],
            "tips_ko": [
              "여행 계획: 목적지 → 시기 → 기간 → 예약",
              "Wie wäre es mit + 3격 = ~은 어때?",
              "Geht das bei dir? = 너도 괜찮아?"
            ]
          },
          {
            "id": "sp3-6",
            "scenario_de": "Eine Lerngruppe organisieren",
            "scenario_ko": "학습 모임 조직",
            "dialogue": [
              {"speaker": "A", "de": "Sollen wir zusammen für die Prüfung lernen?", "ko": "시험 같이 공부할까?"},
              {"speaker": "B", "de": "Ja, das ist eine gute Idee! Wann treffen wir uns?", "ko": "응, 좋은 생각이야! 언제 만날까?"},
              {"speaker": "A", "de": "Wie wäre es zweimal pro Woche, immer dienstags und donnerstags?", "ko": "일주일에 두 번, 항상 화요일과 목요일 어때?"},
              {"speaker": "B", "de": "Dienstag passt mir nicht, ich arbeite bis 19 Uhr. Wie wäre es mittwochs?", "ko": "화요일은 안 돼, 19시까지 일해. 수요일은 어때?"},
              {"speaker": "A", "de": "Okay, dann mittwochs und donnerstags. Um wie viel Uhr?", "ko": "오케이, 그럼 수요일과 목요일. 몇 시에?"},
              {"speaker": "B", "de": "Um 18 Uhr? Bei mir zu Hause oder in der Bibliothek?", "ko": "18시 어때? 우리 집 아니면 도서관?"},
              {"speaker": "A", "de": "In der Bibliothek ist es ruhiger. Treffen wir uns dort.", "ko": "도서관이 더 조용해. 거기서 만나자."},
              {"speaker": "B", "de": "Gut, also Mittwoch und Donnerstag um 18 Uhr in der Bibliothek.", "ko": "좋아, 그럼 수목 18시에 도서관에서."}
            ],
            "tips_ko": [
              "빈도: zweimal pro Woche / immer + 요일s",
              "장소 선택 비교",
              "확정: also + 요일 + 시간 + 장소"
            ]
          },
          {
            "id": "sp3-7",
            "scenario_de": "Ein gemeinsames Abendessen planen",
            "scenario_ko": "공동 저녁식사 계획",
            "dialogue": [
              {"speaker": "A", "de": "Lass uns mal wieder zusammen essen gehen.", "ko": "다시 한번 같이 식사하러 가자."},
              {"speaker": "B", "de": "Ja, das wäre schön. Was für ein Restaurant?", "ko": "응, 좋겠다. 어떤 식당?"},
              {"speaker": "A", "de": "Wie wäre es mit dem neuen Italiener in der Stadtmitte?", "ko": "시내 중심에 새로 생긴 이탈리아 식당 어때?"},
              {"speaker": "B", "de": "Italienisch klingt gut. Wann?", "ko": "이탈리아 음식 좋네. 언제?"},
              {"speaker": "A", "de": "Was hältst du von Freitagabend um 19 Uhr?", "ko": "금요일 저녁 19시 어떻게 생각해?"},
              {"speaker": "B", "de": "Freitag bin ich beschäftigt. Geht Samstag auch?", "ko": "금요일은 바빠. 토요일도 돼?"},
              {"speaker": "A", "de": "Samstag um 19 Uhr ist super. Soll ich einen Tisch reservieren?", "ko": "토요일 19시 좋아. 자리 예약할까?"},
              {"speaker": "B", "de": "Ja, bitte. Reserviere für zwei Personen.", "ko": "응, 부탁해. 두 명으로 예약해."}
            ],
            "tips_ko": [
              "Was hältst du von + Dat. = ~을 어떻게 생각해?",
              "beschäftigt sein = 바쁘다",
              "예약 분담"
            ]
          },
          {
            "id": "sp3-8",
            "scenario_de": "Ein Sportprogramm zusammen machen",
            "scenario_ko": "운동 함께 하기",
            "dialogue": [
              {"speaker": "A", "de": "Möchtest du mit mir Sport machen? Ich will fitter werden.", "ko": "나랑 운동할래? 더 건강해지고 싶어."},
              {"speaker": "B", "de": "Sehr gerne! Was für Sport möchtest du machen?", "ko": "정말 좋아! 어떤 운동 하고 싶어?"},
              {"speaker": "A", "de": "Joggen wäre günstig. Wir brauchen kein Geld dafür.", "ko": "조깅이 좋겠어. 돈도 안 들어."},
              {"speaker": "B", "de": "Joggen mag ich nicht so. Wie wäre es mit Yoga im Park?", "ko": "조깅은 별로야. 공원에서 요가 어때?"},
              {"speaker": "A", "de": "Yoga ist auch gut. Wie oft pro Woche?", "ko": "요가도 좋아. 일주일에 몇 번?"},
              {"speaker": "B", "de": "Zweimal pro Woche, vielleicht montags und donnerstags morgens?", "ko": "일주일에 두 번, 월요일과 목요일 아침 어때?"},
              {"speaker": "A", "de": "Morgens ist gut. Um 7 Uhr vor dem Park?", "ko": "아침 좋아. 공원 앞에서 7시에?"},
              {"speaker": "B", "de": "Perfekt! Wir starten am Montag.", "ko": "완벽해! 월요일부터 시작하자."}
            ],
            "tips_ko": [
              "운동 선호 차이",
              "Wie oft pro Woche? = 주에 몇 번?",
              "확정 + 시작일"
            ]
          }
        ]
      }
    ]
  }
};
