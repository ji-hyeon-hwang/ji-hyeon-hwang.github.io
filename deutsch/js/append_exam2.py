import json
import re

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON
# Extract everything from { to the last }
start = content.find('{')
end = content.rfind('}')
json_text = content[start:end+1]
data = json.loads(json_text)

# Schreiben Teil 1 추가
s1_new = [
    {
        "id": "s1-9",
        "title_ko": "친구에게 약속 변경 알리기",
        "scenario_de": "Sie haben mit Ihrer Freundin Mia eine Verabredung, aber Sie können nicht kommen.\n- Sagen Sie, was los ist.\n- Schlagen Sie einen neuen Termin vor.\n- Entschuldigen Sie sich.",
        "scenario_ko": "친구 Mia와 약속이 있는데 갈 수 없습니다.\n- 무슨 일인지 말하세요.\n- 새 약속을 제안하세요.\n- 사과하세요.",
        "model_de": "Liebe Mia,\n\nes tut mir wirklich leid, aber ich kann heute Abend nicht kommen. Mein Bruder ist plötzlich krank geworden. Können wir uns am Samstag treffen? Sag mir bitte Bescheid!\n\nLiebe Grüße\nAnna",
        "model_ko": "친애하는 Mia,\n\n정말 미안한데 오늘 저녁에 못 가. 동생이 갑자기 아파서. 토요일에 만날 수 있을까? 알려줘!\n\n안부 전하며\nAnna",
        "word_count": 30,
        "tips_ko": ["사과 → 사유 → 대안 → 답장 요청", "sag mir Bescheid = 알려줘 (친구체)"],
        "variations": [{"de": "Meine Mutter ist im Krankenhaus.", "ko": "엄마가 병원에 있어.", "note": "다른 사유"}]
    },
    {
        "id": "s1-10",
        "title_ko": "친구에게 이사 도움 요청",
        "scenario_de": "Sie ziehen am Samstag um und brauchen Hilfe. Schreiben Sie Ihrem Freund Tim:\n- Wann ziehen Sie um?\n- Worum bitten Sie?\n- Was geben Sie zurück?",
        "scenario_ko": "토요일에 이사하는데 도움이 필요합니다. 친구 Tim에게 메일을 쓰세요.\n- 언제 이사하나요?\n- 뭘 부탁하나요?\n- 답례는?",
        "model_de": "Hallo Tim,\n\nich ziehe nächsten Samstag um. Könntest du mir bitte beim Tragen der Möbel helfen? Als Dankeschön lade ich dich danach zum Abendessen ein!\n\nLiebe Grüße\nJan",
        "model_ko": "안녕 Tim,\n\n다음 주 토요일에 이사해. 가구 옮기는 거 도와줄 수 있어? 답례로 저녁 사줄게!\n\n안부 전하며\nJan",
        "word_count": 28,
        "tips_ko": ["친구 부탁: Könntest du... ?", "보답 표현: als Dankeschön = 답례로"],
        "variations": [{"de": "beim Aufräumen helfen", "ko": "정리하는 거 돕기", "note": "다른 도움"}]
    },
    {
        "id": "s1-11",
        "title_ko": "교환학생에게 마중 약속",
        "scenario_de": "Ein Austauschstudent kommt aus Korea. Schreiben Sie ihm:\n- Begrüßen Sie ihn.\n- Wann holen Sie ihn vom Flughafen ab?\n- Was sollte er mitbringen?",
        "scenario_ko": "한국에서 교환학생이 옵니다.\n- 환영하세요.\n- 언제 마중 가나요?\n- 뭘 챙겨와야 하나요?",
        "model_de": "Lieber Minjun,\n\nherzlich willkommen in Deutschland! Ich hole dich am Sonntag um 14 Uhr vom Flughafen ab. Bring bitte warme Kleidung mit, es ist hier gerade kalt.\n\nLiebe Grüße\nThomas",
        "model_ko": "친애하는 민준,\n\n독일에 온 걸 환영해! 일요일 14시에 공항으로 마중 갈게. 따뜻한 옷 챙겨와, 여기 지금 추워.\n\n안부 전하며\nThomas",
        "word_count": 32,
        "tips_ko": ["abholen = 데리러 가다 (분리동사)", "herzlich willkommen = 환영"],
        "variations": [{"de": "Bring bitte einen Adapter mit.", "ko": "어댑터 챙겨와.", "note": "다른 준비물"}]
    },
    {
        "id": "s1-12",
        "title_ko": "친구 생일 축하 메시지",
        "scenario_de": "Ihr Freund Markus hat heute Geburtstag.\n- Gratulieren Sie ihm.\n- Wünschen Sie etwas Schönes.\n- Schlagen Sie ein Treffen vor.",
        "scenario_ko": "친구 Markus가 오늘 생일입니다.\n- 축하하세요.\n- 좋은 일을 기원하세요.\n- 만남을 제안하세요.",
        "model_de": "Lieber Markus,\n\nherzlichen Glückwunsch zum Geburtstag! Ich wünsche dir viel Glück und Gesundheit. Wollen wir uns am Wochenende treffen und etwas feiern?\n\nLiebe Grüße\nLisa",
        "model_ko": "친애하는 Markus,\n\n생일 진심으로 축하해! 행운과 건강을 빌어. 주말에 만나서 한잔 할까?\n\n안부 전하며\nLisa",
        "word_count": 27,
        "tips_ko": ["herzlichen Glückwunsch = 진심 축하", "wünschen + 3격 + 4격"],
        "variations": [{"de": "viel Erfolg im neuen Lebensjahr", "ko": "새해에 많은 성공", "note": "다른 기원"}]
    },
    {
        "id": "s1-13",
        "title_ko": "옆집 이웃에게 부탁",
        "scenario_de": "Sie fahren in den Urlaub. Bitten Sie Ihre Nachbarin Frau Wagner:\n- Wie lange sind Sie weg?\n- Worum bitten Sie?\n- Bieten Sie etwas an.",
        "scenario_ko": "휴가를 갑니다. 이웃 Wagner 여사에게 부탁하세요.\n- 얼마나 떠나 있나요?\n- 뭘 부탁하나요?\n- 답례를 제안하세요.",
        "model_de": "Liebe Frau Wagner,\n\nich fahre für zwei Wochen in den Urlaub. Könnten Sie bitte meine Pflanzen gießen? Ich bringe Ihnen gerne ein kleines Geschenk aus dem Urlaub mit.\n\nMit freundlichen Grüßen\nKim",
        "model_ko": "Wagner 여사님께,\n\n2주간 휴가를 갑니다. 식물에 물 좀 주실 수 있을까요? 휴가에서 작은 선물을 가져다 드릴게요.\n\n경의를 담아\nKim",
        "word_count": 30,
        "tips_ko": ["이웃 → 반격식", "기간 + 부탁 + 보답"],
        "variations": [{"de": "die Post abholen", "ko": "우편물 가져오기", "note": "다른 부탁"}]
    },
    {
        "id": "s1-14",
        "title_ko": "병원 예약 확인 / 변경 요청",
        "scenario_de": "Sie haben einen Termin beim Arzt, aber müssen ihn verschieben.\n- Welcher Termin?\n- Warum verschieben?\n- Wann passt es Ihnen?",
        "scenario_ko": "병원 예약이 있는데 변경해야 합니다.\n- 어떤 예약?\n- 왜 변경?\n- 언제 가능?",
        "model_de": "Sehr geehrte Damen und Herren,\n\nich habe einen Termin am Mittwoch um 9 Uhr. Leider muss ich arbeiten und kann nicht kommen. Geht es vielleicht am Freitagnachmittag?\n\nMit freundlichen Grüßen\nPark",
        "model_ko": "관계자분께,\n\n수요일 9시에 예약이 있습니다. 안타깝게도 일을 해야 해서 갈 수 없어요. 금요일 오후 가능할까요?\n\n경의를 담아\nPark",
        "word_count": 30,
        "tips_ko": ["기관 → 격식체", "verschieben = 미루다", "Geht es...? = 가능한가요?"],
        "variations": []
    },
    {
        "id": "s1-15",
        "title_ko": "동료와 점심 약속",
        "scenario_de": "Sie wollen mit Ihrem Kollegen Mittag essen gehen.\n- Wann?\n- Wo?\n- Was essen?",
        "scenario_ko": "동료와 점심을 먹으려고 합니다.\n- 언제?\n- 어디서?\n- 뭘 먹나요?",
        "model_de": "Hallo Markus,\n\nhast du heute Lust, zusammen zu Mittag zu essen? Wie wäre es um 12:30 Uhr im italienischen Restaurant nebenan? Ich habe Lust auf Pizza.\n\nLiebe Grüße\nTina",
        "model_ko": "안녕 Markus,\n\n오늘 같이 점심 먹을래? 옆 이탈리아 식당에서 12:30 어때? 피자 먹고 싶어.\n\n안부 전하며\nTina",
        "word_count": 28,
        "tips_ko": ["Lust haben auf + 4격 = ~ 먹고 싶다"],
        "variations": []
    }
]

data['schreiben']['parts'][0]['examples'].extend(s1_new)

# Schreiben Teil 2 추가
s2_new = [
    {
        "id": "s2-11",
        "title_ko": "중고 가구 광고 답장",
        "scenario_de": "Sie haben in einer Anzeige ein gebrauchtes Sofa gesehen.\n- Sie interessieren sich für das Sofa.\n- Stellen Sie zwei Fragen.\n- Wann können Sie es abholen?",
        "scenario_ko": "광고에서 중고 소파를 봤습니다.\n- 관심이 있다\n- 두 가지 질문\n- 언제 가지러 가나요?",
        "model_de": "Sehr geehrter Herr Wagner,\n\nich habe Ihre Anzeige gesehen und interessiere mich für das Sofa. Wie viel kostet es und in welchem Zustand ist es? Ich könnte am Samstagnachmittag vorbeikommen.\n\nMit freundlichen Grüßen\nKim",
        "model_ko": "Wagner 씨께,\n\n광고 보고 소파에 관심 있습니다. 가격은 얼마이고 상태는 어떤가요? 토요일 오후에 가러 갈 수 있을 것 같아요.\n\n경의를 담아\nKim",
        "word_count": 35,
        "tips_ko": ["in welchem Zustand = 어떤 상태", "abholen / vorbeikommen 함께 쓰기"],
        "variations": [{"de": "ein gebrauchtes Fahrrad", "ko": "중고 자전거", "note": "다른 물건"}]
    },
    {
        "id": "s2-12",
        "title_ko": "선생님께 추천서 요청",
        "scenario_de": "Sie bewerben sich für ein Praktikum. Schreiben Sie Ihrer Lehrerin:\n- Was machen Sie?\n- Was möchten Sie von ihr?\n- Bis wann brauchen Sie es?",
        "scenario_ko": "인턴십에 지원합니다. 선생님께 메일을 쓰세요.\n- 무엇을 하나요?\n- 부탁할 것은?\n- 언제까지 필요한가요?",
        "model_de": "Sehr geehrte Frau Schmidt,\n\nich bewerbe mich gerade für ein Praktikum bei Siemens. Könnten Sie mir bitte eine Empfehlung schreiben? Ich brauche das Schreiben bis nächsten Freitag.\n\nMit freundlichen Grüßen\nPark",
        "model_ko": "Schmidt 선생님께,\n\n지멘스 인턴십에 지원하고 있습니다. 추천서를 써주실 수 있을까요? 다음 주 금요일까지 필요합니다.\n\n경의를 담아\nPark",
        "word_count": 32,
        "tips_ko": ["Empfehlung = 추천서", "bis + 시점 = ~까지"],
        "variations": []
    },
    {
        "id": "s2-13",
        "title_ko": "친구에게 어학연수 소식",
        "scenario_de": "Sie machen einen Sprachkurs in München.\n- Wo sind Sie?\n- Wie gefällt es Ihnen?\n- Was machen Sie am Wochenende?",
        "scenario_ko": "뮌헨에서 어학연수 중입니다.\n- 어디?\n- 마음에 드는가?\n- 주말에 뭐 하나요?",
        "model_de": "Hallo Sam,\n\nich bin jetzt seit zwei Wochen in München und mache einen Deutschkurs. Die Stadt ist wunderschön und die Lehrer sind sehr nett. Am Wochenende fahre ich nach Salzburg!\n\nLiebe Grüße\nJin",
        "model_ko": "안녕 Sam,\n\n뮌헨에 온 지 2주 됐고 독일어 강좌를 듣고 있어. 도시가 정말 예쁘고 선생님들도 친절해. 주말에 잘츠부르크 가!\n\n안부 전하며\nJin",
        "word_count": 33,
        "tips_ko": ["seit + 3격 = ~ 전부터", "친구 → 비격식"],
        "variations": []
    },
    {
        "id": "s2-14",
        "title_ko": "회사 식당에 알레르기 알리기",
        "scenario_de": "Sie haben eine Nuss-Allergie. Schreiben Sie an die Kantine:\n- Welche Allergie?\n- Was möchten Sie wissen?\n- Bitten Sie um Information.",
        "scenario_ko": "견과류 알레르기가 있습니다. 구내식당에 메일을 쓰세요.\n- 어떤 알레르기?\n- 알고 싶은 것?\n- 정보 요청",
        "model_de": "Sehr geehrte Damen und Herren,\n\nich arbeite bei Ihnen und esse oft in der Kantine. Ich habe eine starke Nuss-Allergie. Können Sie mir bitte sagen, welche Gerichte Nüsse enthalten?\n\nMit freundlichen Grüßen\nChen",
        "model_ko": "관계자분께,\n\n여기서 일하면서 구내식당을 자주 이용합니다. 견과류 알레르기가 심합니다. 어떤 음식에 견과류가 들어있는지 알려주세요.\n\n경의를 담아\nChen",
        "word_count": 33,
        "tips_ko": ["Allergie gegen + 4격", "enthalten = 포함하다"],
        "variations": [{"de": "Laktose-Intoleranz", "ko": "유당 불내증", "note": "다른 식이 제한"}]
    },
    {
        "id": "s2-15",
        "title_ko": "헬스장 멤버십 해지",
        "scenario_de": "Sie möchten Ihr Fitnessstudio-Abo kündigen.\n- Welches Abo?\n- Warum kündigen?\n- Ab wann?",
        "scenario_ko": "헬스장 멤버십을 해지합니다.\n- 어떤 멤버십?\n- 왜 해지?\n- 언제부터?",
        "model_de": "Sehr geehrte Damen und Herren,\n\nich möchte meine Jahresmitgliedschaft kündigen, weil ich in eine andere Stadt umziehe. Bitte bestätigen Sie mir, ab wann die Kündigung gültig ist.\n\nMit freundlichen Grüßen\nMüller",
        "model_ko": "관계자분께,\n\n다른 도시로 이사해서 연간 멤버십을 해지하고 싶습니다. 해지가 언제부터 유효한지 확인해주세요.\n\n경의를 담아\nMüller",
        "word_count": 30,
        "tips_ko": ["kündigen = 해지하다", "gültig ab = ~부터 유효"],
        "variations": []
    },
    {
        "id": "s2-16",
        "title_ko": "여행사 환불 요청",
        "scenario_de": "Sie haben einen Flug gebucht, aber der Flug wurde abgesagt.\n- Wann sollten Sie fliegen?\n- Was möchten Sie?\n- Wie schnell?",
        "scenario_ko": "비행기를 예약했는데 결항됐습니다.\n- 언제 비행 예정?\n- 무엇을 원하나요?\n- 얼마나 빨리?",
        "model_de": "Sehr geehrte Damen und Herren,\n\nich hatte am 5. Juli einen Flug nach Berlin gebucht. Der Flug wurde leider abgesagt. Ich möchte das Geld zurückbekommen. Können Sie mir die Erstattung so schnell wie möglich überweisen?\n\nMit freundlichen Grüßen\nLee",
        "model_ko": "관계자분께,\n\n7월 5일 베를린행 비행기를 예약했습니다. 안타깝게도 결항됐어요. 환불받고 싶습니다. 가능한 빨리 송금해주실 수 있나요?\n\n경의를 담아\nLee",
        "word_count": 39,
        "tips_ko": ["abgesagt = 취소된", "Erstattung = 환불", "überweisen = 송금하다"],
        "variations": []
    },
    {
        "id": "s2-17",
        "title_ko": "공원 이용 시간 문의",
        "scenario_de": "Sie wollen mit Ihren Kindern in den Stadtpark gehen. Schreiben Sie an die Stadtverwaltung.\n- Wann ist offen?\n- Gibt es Spielplatz?\n- Kostet Eintritt?",
        "scenario_ko": "아이들과 시립공원에 가려고 합니다.\n- 운영시간?\n- 놀이터 있나요?\n- 입장료?",
        "model_de": "Sehr geehrte Damen und Herren,\n\nich möchte mit meinen Kindern den Stadtpark besuchen. Wann ist der Park geöffnet? Gibt es einen Spielplatz für Kinder? Kostet der Eintritt etwas?\n\nMit freundlichen Grüßen\nKim",
        "model_ko": "관계자분께,\n\n아이들과 시립공원에 가고 싶습니다. 운영시간은 어떻게 되나요? 어린이 놀이터가 있나요? 입장료가 있나요?\n\n경의를 담아\nKim",
        "word_count": 32,
        "tips_ko": ["3가지 질문 깔끔하게", "Eintritt = 입장료"],
        "variations": []
    },
    {
        "id": "s2-18",
        "title_ko": "이웃에게 파티 알리며 사과",
        "scenario_de": "Sie machen am Wochenende eine Party. Schreiben Sie Ihrem Nachbarn:\n- Wann?\n- Wie laut?\n- Entschuldigen Sie sich.",
        "scenario_ko": "주말에 파티를 합니다.\n- 언제?\n- 얼마나 시끄럽나요?\n- 사과",
        "model_de": "Liebe Frau Becker,\n\nich möchte Sie informieren, dass ich am Samstag eine kleine Geburtstagsparty mache. Es kann etwas lauter werden. Ich entschuldige mich schon im Voraus für den Lärm.\n\nMit freundlichen Grüßen\nLee",
        "model_ko": "Becker 여사님께,\n\n토요일에 작은 생일 파티를 한다는 걸 알려드립니다. 좀 시끄러울 수 있어요. 소음에 대해 미리 사과드립니다.\n\n경의를 담아\nLee",
        "word_count": 33,
        "tips_ko": ["이웃 → 반격식", "im Voraus = 미리"],
        "variations": []
    },
    {
        "id": "s2-19",
        "title_ko": "분실물 신고",
        "scenario_de": "Sie haben in der U-Bahn Ihre Tasche verloren.\n- Was verloren?\n- Wann und wo?\n- Was war drin?",
        "scenario_ko": "지하철에서 가방을 잃어버렸습니다.\n- 무엇을?\n- 언제 어디서?\n- 안에 뭐가?",
        "model_de": "Sehr geehrte Damen und Herren,\n\ngestern Morgen habe ich in der U-Bahn (Linie 6) meine schwarze Handtasche verloren. In der Tasche waren mein Geldbeutel und mein Handy. Haben Sie sie gefunden?\n\nMit freundlichen Grüßen\nHan",
        "model_ko": "관계자분께,\n\n어제 아침 지하철 6호선에서 검은색 핸드백을 잃어버렸습니다. 가방 안에 지갑과 핸드폰이 있었습니다. 찾으셨나요?\n\n경의를 담아\nHan",
        "word_count": 34,
        "tips_ko": ["색/특징 + 위치 + 내용물", "verloren = 잃어버렸다 (현재완료 P.P.)"],
        "variations": []
    }
]

data['schreiben']['parts'][1]['examples'].extend(s2_new)

# Sprechen Teil 3 추가 - 스케줄표 시나리오로 확장
sp3_new = [
    {
        "id": "sp3-9",
        "scenario_de": "Sie wollen mit Ihrem Partner einen Geburtstag für einen Freund organisieren. Vergleichen Sie Ihre Terminkalender.",
        "scenario_ko": "친구 생일 파티를 함께 준비합니다. 시간표를 비교하세요.",
        "schedule_a": {
            "title": "Ihr Terminkalender (Partner A)",
            "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
            "slots": [
                {"time": "Vormittag", "items": ["Arbeit", "Arbeit", "Arbeit", "Arbeit", "Arbeit", "frei", "frei"]},
                {"time": "Nachmittag", "items": ["Arbeit", "Arzttermin", "Arbeit", "Arbeit", "Arbeit", "Einkaufen", "frei"]},
                {"time": "Abend", "items": ["frei", "frei", "Sportkurs", "frei", "Kino", "frei", "frei"]}
            ]
        },
        "schedule_b": {
            "title": "Partner B's Kalender (für Übung)",
            "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
            "slots": [
                {"time": "Vormittag", "items": ["Uni", "Uni", "frei", "Uni", "Uni", "frei", "frei"]},
                {"time": "Nachmittag", "items": ["frei", "Uni", "frei", "Uni", "frei", "Freunde", "frei"]},
                {"time": "Abend", "items": ["Lernen", "frei", "frei", "Lernen", "Disco", "frei", "frei"]}
            ]
        },
        "dialogue": [
            {"speaker": "A", "de": "Hallo, lass uns einen Termin für Patricks Geburtstag finden.", "ko": "안녕, Patrick 생일 파티 할 시간 잡자."},
            {"speaker": "B", "de": "Ja, gerne. Wann hast du Zeit?", "ko": "응, 좋아. 너 언제 시간 있어?"},
            {"speaker": "A", "de": "Ich bin von Montag bis Freitag bis 17 Uhr arbeiten. Wie wäre es am Wochenende?", "ko": "월요일부터 금요일까지 17시까지 일해. 주말은 어때?"},
            {"speaker": "B", "de": "Samstag treffe ich mich am Nachmittag mit Freunden. Aber Sonntag bin ich den ganzen Tag frei.", "ko": "토요일 오후에는 친구들 만나. 일요일은 하루 종일 한가해."},
            {"speaker": "A", "de": "Sonntag passt mir auch! Vormittag, Nachmittag oder Abend?", "ko": "일요일 나도 좋아! 오전, 오후, 저녁 중에?"},
            {"speaker": "B", "de": "Sonntag Nachmittag wäre toll. Sagen wir um 15 Uhr?", "ko": "일요일 오후가 좋겠어. 15시 어때?"},
            {"speaker": "A", "de": "Perfekt. Wo treffen wir uns? Bei mir zu Hause?", "ko": "완벽해. 어디서 만날까? 우리 집?"},
            {"speaker": "B", "de": "Ja, bei dir ist gut. Ich bringe einen Kuchen mit.", "ko": "응, 너네 집 좋아. 케이크 가져갈게."}
        ],
        "tips_ko": ["시간표 비교 → 공통 시간 찾기", "역할 분담: ich bringe ... mit", "확정: Wo + 시간 명시"]
    },
    {
        "id": "sp3-10",
        "scenario_de": "Sie wollen einen gemeinsamen Sprachkurs besuchen. Welcher Tag passt beiden?",
        "scenario_ko": "함께 어학 강좌를 듣고 싶습니다. 두 사람 모두 맞는 요일은?",
        "schedule_a": {
            "title": "Partner A: Kurs-Optionen / Sie",
            "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
            "slots": [
                {"time": "18-20 Uhr", "items": ["belegt", "frei", "belegt", "frei", "frei"]}
            ]
        },
        "schedule_b": {
            "title": "Partner B: Kurs-Optionen",
            "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
            "slots": [
                {"time": "18-20 Uhr", "items": ["frei", "frei", "frei", "belegt", "Sport"]}
            ]
        },
        "dialogue": [
            {"speaker": "A", "de": "Hast du Lust, mit mir einen Spanischkurs zu machen?", "ko": "나랑 같이 스페인어 강좌 들을래?"},
            {"speaker": "B", "de": "Ja, gute Idee! Wann findet der Kurs statt?", "ko": "응, 좋은 생각이야! 강좌가 언제 있어?"},
            {"speaker": "A", "de": "Es gibt Kurse von Montag bis Freitag, immer 18 bis 20 Uhr.", "ko": "월요일부터 금요일까지, 매번 18시부터 20시까지 강좌가 있어."},
            {"speaker": "B", "de": "Am Montag kann ich nicht, ich gehe ins Fitnessstudio.", "ko": "월요일은 안 돼, 헬스장 가."},
            {"speaker": "A", "de": "Montag und Mittwoch passen mir auch nicht. Ich habe Termine.", "ko": "월요일과 수요일은 나도 안 돼. 약속이 있어."},
            {"speaker": "B", "de": "Wie wäre es am Dienstag? Da habe ich Zeit.", "ko": "화요일은 어때? 시간 있어."},
            {"speaker": "A", "de": "Dienstag passt mir auch sehr gut. Sollen wir uns anmelden?", "ko": "화요일 나도 좋아. 등록할까?"},
            {"speaker": "B", "de": "Ja, melden wir uns morgen zusammen an.", "ko": "응, 내일 같이 등록하자."}
        ],
        "tips_ko": ["요일별 가용 시간 확인", "Wie wäre es am + 요일?", "anmelden = 등록하다"]
    },
    {
        "id": "sp3-11",
        "scenario_de": "Sie planen ein Picknick im Park. Wann und wo?",
        "scenario_ko": "공원에서 피크닉 계획을 세웁니다. 언제, 어디서?",
        "dialogue": [
            {"speaker": "A", "de": "Lass uns am Wochenende ein Picknick machen!", "ko": "주말에 피크닉 가자!"},
            {"speaker": "B", "de": "Tolle Idee! In welchem Park?", "ko": "좋은 생각이야! 어느 공원에서?"},
            {"speaker": "A", "de": "Wie wäre es im Englischen Garten? Da ist es schön.", "ko": "영국 정원 어때? 예뻐."},
            {"speaker": "B", "de": "Ja, perfekt. Samstag oder Sonntag?", "ko": "응, 좋아. 토요일 아니면 일요일?"},
            {"speaker": "A", "de": "Samstag muss ich arbeiten. Sonntag wäre besser.", "ko": "토요일은 일해야 해. 일요일이 더 나아."},
            {"speaker": "B", "de": "Sonntag passt mir auch. Was bringen wir mit?", "ko": "일요일 나도 좋아. 뭘 가져갈까?"},
            {"speaker": "A", "de": "Ich bringe Sandwiches und Obst. Was bringst du?", "ko": "샌드위치와 과일 가져갈게. 너는?"},
            {"speaker": "B", "de": "Ich bringe Getränke und eine Decke. Bis Sonntag um 12 Uhr!", "ko": "음료랑 돗자리 가져갈게. 일요일 12시에 봐!"}
        ],
        "tips_ko": ["피크닉 어휘: Decke (돗자리), Sandwiches, Obst", "역할 분담", "공통 가용 시간 찾기"]
    },
    {
        "id": "sp3-12",
        "scenario_de": "Sie planen einen Restaurantbesuch zum Jahrestag.",
        "scenario_ko": "기념일에 식당 가는 계획을 세웁니다.",
        "dialogue": [
            {"speaker": "A", "de": "Unser Jahrestag ist nächste Woche. Lass uns essen gehen!", "ko": "우리 기념일이 다음 주야. 식사하러 가자!"},
            {"speaker": "B", "de": "Ja, gerne. Welches Restaurant magst du?", "ko": "응, 좋아. 어떤 식당 좋아?"},
            {"speaker": "A", "de": "Wie wäre es mit dem italienischen Restaurant in der Innenstadt?", "ko": "시내 이탈리아 식당 어때?"},
            {"speaker": "B", "de": "Italienisch ist immer gut. Wann genau?", "ko": "이탈리아 음식 항상 좋지. 정확히 언제?"},
            {"speaker": "A", "de": "Unser Jahrestag ist Donnerstag. Aber dort ist es unter der Woche sehr voll.", "ko": "기념일이 목요일이야. 근데 평일에 사람 많아."},
            {"speaker": "B", "de": "Dann gehen wir am Freitagabend. Ich rufe an und reserviere.", "ko": "그럼 금요일 저녁에 가자. 내가 전화해서 예약할게."},
            {"speaker": "A", "de": "Super. Um 19 Uhr passt mir.", "ko": "좋아. 19시 괜찮아."},
            {"speaker": "B", "de": "Okay, Freitag 19 Uhr im Italiener. Ich freue mich!", "ko": "오케이, 금요일 19시 이탈리아 식당. 기대돼!"}
        ],
        "tips_ko": ["문제 발견 → 대안 제시 흐름", "예약 분담", "기념일 어휘: Jahrestag"]
    },
    {
        "id": "sp3-13",
        "scenario_de": "Sie wollen zusammen für die Prüfung lernen. Wann treffen Sie sich?",
        "scenario_ko": "함께 시험 공부합니다. 언제 만날까요?",
        "schedule_a": {
            "title": "Partner A: Wochenplan",
            "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
            "slots": [
                {"time": "Abend", "items": ["Sport", "frei", "frei", "Arbeit", "frei"]}
            ]
        },
        "schedule_b": {
            "title": "Partner B: Wochenplan",
            "days": ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
            "slots": [
                {"time": "Abend", "items": ["frei", "Musikkurs", "frei", "frei", "Termin"]}
            ]
        },
        "dialogue": [
            {"speaker": "A", "de": "Die Prüfung ist nächste Woche. Sollen wir zusammen lernen?", "ko": "시험이 다음 주야. 같이 공부할까?"},
            {"speaker": "B", "de": "Sehr gerne. Wann hast du Zeit?", "ko": "정말 좋아. 너 언제 시간 있어?"},
            {"speaker": "A", "de": "Montag habe ich Sport. Dienstag, Mittwoch und Freitag bin ich frei.", "ko": "월요일은 운동해. 화요일, 수요일, 금요일은 한가해."},
            {"speaker": "B", "de": "Dienstag habe ich Musikkurs. Mittwoch wäre gut.", "ko": "화요일은 음악 수업 있어. 수요일이 좋겠어."},
            {"speaker": "A", "de": "Mittwoch passt mir auch. Um wie viel Uhr?", "ko": "수요일 나도 좋아. 몇 시?"},
            {"speaker": "B", "de": "Um 18 Uhr in der Bibliothek?", "ko": "18시 도서관 어때?"},
            {"speaker": "A", "de": "Perfekt. Bringst du dein Lehrbuch mit?", "ko": "완벽해. 교재 가져올래?"},
            {"speaker": "B", "de": "Ja klar. Bis Mittwoch um 18 Uhr in der Bibliothek!", "ko": "당연하지. 수요일 18시 도서관에서 봐!"}
        ],
        "tips_ko": ["스케줄 비교 → 공통 시간 찾기", "장소: in der Bibliothek (3격)", "준비물 확인"]
    },
    {
        "id": "sp3-14",
        "scenario_de": "Sie wollen einen Tagesausflug machen. Wohin und wie?",
        "scenario_ko": "당일치기 여행을 가려고 합니다. 어디로, 어떻게?",
        "dialogue": [
            {"speaker": "A", "de": "Wollen wir einen Tagesausflug machen?", "ko": "당일치기 여행 갈까?"},
            {"speaker": "B", "de": "Sehr gerne! Wohin möchtest du fahren?", "ko": "정말 좋아! 어디로 가고 싶어?"},
            {"speaker": "A", "de": "Wie wäre es mit dem Schwarzwald? Da kann man wunderbar wandern.", "ko": "흑림 어때? 거기서 하이킹하기 좋아."},
            {"speaker": "B", "de": "Wandern ist mir zu anstrengend. Wie wäre es mit Heidelberg? Die Altstadt ist schön.", "ko": "하이킹은 너무 힘들어. 하이델베르크 어때? 구시가지가 예뻐."},
            {"speaker": "A", "de": "Heidelberg klingt gut. Wann fahren wir?", "ko": "하이델베르크 좋네. 언제 가?"},
            {"speaker": "B", "de": "Wie wäre es am Sonntag? Da haben wir den ganzen Tag.", "ko": "일요일 어때? 하루 종일이야."},
            {"speaker": "A", "de": "Sonntag passt. Mit dem Zug oder mit dem Auto?", "ko": "일요일 좋아. 기차로 갈까 차로 갈까?"},
            {"speaker": "B", "de": "Mit dem Zug ist entspannter. Treffen wir uns um 8 Uhr am Bahnhof.", "ko": "기차가 더 편해. 8시에 역에서 봐."}
        ],
        "tips_ko": ["선호 차이 → 협상", "교통수단 비교", "장소 + 시간 확정"]
    },
    {
        "id": "sp3-15",
        "scenario_de": "Sie organisieren ein Treffen mit alten Schulfreunden.",
        "scenario_ko": "옛 학교 친구들과 동창회를 계획합니다.",
        "dialogue": [
            {"speaker": "A", "de": "Wir sollten mal wieder die alten Schulfreunde treffen.", "ko": "옛 학교 친구들 다시 만나야 해."},
            {"speaker": "B", "de": "Stimmt! Wie viele Leute laden wir ein?", "ko": "맞아! 몇 명 초대할까?"},
            {"speaker": "A", "de": "Ungefähr zehn. Wo könnten wir uns treffen?", "ko": "약 10명. 어디서 만날까?"},
            {"speaker": "B", "de": "Bei mir zu Hause ist es zu klein. Vielleicht im Restaurant?", "ko": "우리 집은 너무 작아. 식당은 어때?"},
            {"speaker": "A", "de": "Gute Idee. Wir können das italienische Restaurant reservieren.", "ko": "좋은 생각이야. 이탈리아 식당 예약하면 돼."},
            {"speaker": "B", "de": "Wann? Im November haben viele Geburtstag.", "ko": "언제? 11월에 많은 사람들 생일이야."},
            {"speaker": "A", "de": "Dann im Dezember. Ich schicke heute eine Nachricht in unsere Gruppe.", "ko": "그럼 12월에. 오늘 그룹에 메시지 보낼게."},
            {"speaker": "B", "de": "Super. Und ich rufe morgen das Restaurant an.", "ko": "좋아. 그리고 내일 식당에 전화할게."}
        ],
        "tips_ko": ["인원 + 장소 + 시기 결정", "역할 분담", "Stimmt = 맞아"]
    },
    {
        "id": "sp3-16",
        "scenario_de": "Sie wollen sich gemeinsam einen Hund anschaffen. Was müssen Sie besprechen?",
        "scenario_ko": "함께 강아지를 키우려고 합니다. 무엇을 의논해야 할까요?",
        "dialogue": [
            {"speaker": "A", "de": "Sollen wir uns einen Hund anschaffen?", "ko": "강아지 키울까?"},
            {"speaker": "B", "de": "Ja, das wäre schön! Aber wer kümmert sich tagsüber um ihn?", "ko": "응, 좋겠다! 근데 낮에 누가 돌봐?"},
            {"speaker": "A", "de": "Ich arbeite von zu Hause. Ich kann ihn tagsüber haben.", "ko": "나는 재택근무 해. 낮에 봐줄 수 있어."},
            {"speaker": "B", "de": "Perfekt. Und wer geht morgens und abends mit ihm spazieren?", "ko": "완벽해. 아침저녁 산책은 누가 해?"},
            {"speaker": "A", "de": "Morgens kannst du gehen, abends gehe ich.", "ko": "아침에는 네가, 저녁에는 내가."},
            {"speaker": "B", "de": "Einverstanden. Und welche Rasse möchtest du?", "ko": "동의해. 어떤 종 원해?"},
            {"speaker": "A", "de": "Vielleicht einen kleinen Hund, weil unsere Wohnung nicht so groß ist.", "ko": "작은 강아지, 우리 집이 별로 크지 않으니까."},
            {"speaker": "B", "de": "Okay, lass uns nächste Woche zum Tierheim gehen.", "ko": "좋아, 다음 주에 동물 보호소 가자."}
        ],
        "tips_ko": ["일상 분담 협상", "Tierheim = 동물 보호소", "Rasse = (동물) 품종"]
    }
]

data['sprechen']['parts'][2]['examples'].extend(sp3_new)

# Save
js_out = 'const EXAM_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam.js', 'w', encoding='utf-8') as f:
    f.write(js_out)

s1 = len(data['schreiben']['parts'][0]['examples'])
s2 = len(data['schreiben']['parts'][1]['examples'])
sp1 = len(data['sprechen']['parts'][0]['examples'])
sp2 = len(data['sprechen']['parts'][1]['examples'])
sp3 = len(data['sprechen']['parts'][2]['examples'])
print(f"Schreiben T1: {s1}, T2: {s2}")
print(f"Sprechen T1: {sp1}, T2: {sp2}, T3: {sp3}")
print(f"Total: {s1+s2+sp1+sp2+sp3}")
