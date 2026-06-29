import json

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('{')
end = content.rfind('}')
data = json.loads(content[start:end+1])

# Sprechen Teil 1: 16 → 36
sp1_new = [
    {
        "id": "sp1-17", "keyword": "Geburtstag", "keyword_ko": "생일",
        "questions": [{"de": "Wann haben Sie Geburtstag?", "ko": "생일이 언제예요?"}, {"de": "Wie feiern Sie Ihren Geburtstag?", "ko": "생일을 어떻게 보내세요?"}],
        "answers": [{"de": "Mein Geburtstag ist am 12. Mai.", "ko": "제 생일은 5월 12일이에요."}, {"de": "Ich feiere mit meiner Familie.", "ko": "가족과 함께 보내요."}]
    },
    {
        "id": "sp1-18", "keyword": "Geschwister", "keyword_ko": "형제자매",
        "questions": [{"de": "Haben Sie Geschwister?", "ko": "형제자매 있어요?"}, {"de": "Wie viele Geschwister haben Sie?", "ko": "몇 명이에요?"}, {"de": "Was machen Ihre Geschwister?", "ko": "형제자매는 뭐 해요?"}],
        "answers": [{"de": "Ja, ich habe einen älteren Bruder.", "ko": "네, 형 한 명 있어요."}, {"de": "Ich habe zwei Schwestern.", "ko": "자매 둘이 있어요."}, {"de": "Mein Bruder ist Ingenieur.", "ko": "오빠는 엔지니어예요."}]
    },
    {
        "id": "sp1-19", "keyword": "Eltern", "keyword_ko": "부모님",
        "questions": [{"de": "Wo wohnen Ihre Eltern?", "ko": "부모님은 어디 사세요?"}, {"de": "Was machen Ihre Eltern beruflich?", "ko": "부모님은 무슨 일 해요?"}, {"de": "Wie oft sehen Sie Ihre Eltern?", "ko": "얼마나 자주 보세요?"}],
        "answers": [{"de": "Meine Eltern wohnen in Seoul.", "ko": "부모님은 서울에 사세요."}, {"de": "Mein Vater ist Arzt und meine Mutter Lehrerin.", "ko": "아버지는 의사, 어머니는 교사예요."}, {"de": "Einmal im Monat.", "ko": "한 달에 한 번이요."}]
    },
    {
        "id": "sp1-20", "keyword": "Großeltern", "keyword_ko": "조부모님",
        "questions": [{"de": "Leben Ihre Großeltern noch?", "ko": "조부모님 살아 계세요?"}, {"de": "Wo wohnen Ihre Großeltern?", "ko": "어디 사세요?"}],
        "answers": [{"de": "Ja, meine Großeltern leben in Busan.", "ko": "네, 부산에 사세요."}, {"de": "Meine Oma wohnt allein.", "ko": "할머니는 혼자 사세요."}]
    },
    {
        "id": "sp1-21", "keyword": "Sport", "keyword_ko": "운동",
        "questions": [{"de": "Welchen Sport machen Sie?", "ko": "어떤 운동 해요?"}, {"de": "Wie oft treiben Sie Sport?", "ko": "운동 얼마나 자주 해요?"}, {"de": "Wo machen Sie Sport?", "ko": "어디서 운동해요?"}],
        "answers": [{"de": "Ich gehe joggen und schwimmen.", "ko": "조깅하고 수영해요."}, {"de": "Dreimal pro Woche.", "ko": "주 3회요."}, {"de": "Im Fitnessstudio in der Nähe.", "ko": "근처 헬스장에서요."}]
    },
    {
        "id": "sp1-22", "keyword": "Lieblingsfarbe", "keyword_ko": "좋아하는 색",
        "questions": [{"de": "Was ist Ihre Lieblingsfarbe?", "ko": "좋아하는 색이 뭐예요?"}, {"de": "Warum mögen Sie diese Farbe?", "ko": "왜 그 색을 좋아해요?"}],
        "answers": [{"de": "Meine Lieblingsfarbe ist Blau.", "ko": "파란색이요."}, {"de": "Sie ist ruhig und schön.", "ko": "차분하고 예뻐요."}]
    },
    {
        "id": "sp1-23", "keyword": "Haustier", "keyword_ko": "반려동물",
        "questions": [{"de": "Haben Sie ein Haustier?", "ko": "반려동물 있어요?"}, {"de": "Mögen Sie Tiere?", "ko": "동물 좋아해요?"}],
        "answers": [{"de": "Ja, ich habe eine Katze.", "ko": "네, 고양이 있어요."}, {"de": "Ja, besonders Hunde.", "ko": "네, 특히 강아지요."}]
    },
    {
        "id": "sp1-24", "keyword": "Telefonnummer", "keyword_ko": "전화번호",
        "questions": [{"de": "Wie ist Ihre Telefonnummer?", "ko": "전화번호가 어떻게 되세요?"}, {"de": "Haben Sie ein Handy?", "ko": "휴대폰 있어요?"}],
        "answers": [{"de": "Meine Nummer ist 0176-1234567.", "ko": "0176-1234567이에요."}, {"de": "Ja, hier ist meine Nummer.", "ko": "네, 여기 제 번호예요."}]
    },
    {
        "id": "sp1-25", "keyword": "E-Mail", "keyword_ko": "이메일",
        "questions": [{"de": "Wie ist Ihre E-Mail-Adresse?", "ko": "이메일 주소가 뭐예요?"}, {"de": "Schreiben Sie oft E-Mails?", "ko": "이메일 자주 써요?"}],
        "answers": [{"de": "Meine E-Mail ist hwang@beispiel.de.", "ko": "hwang@beispiel.de 예요."}, {"de": "Ja, fast jeden Tag.", "ko": "네, 거의 매일이요."}]
    },
    {
        "id": "sp1-26", "keyword": "Land / Herkunft", "keyword_ko": "출신 국가",
        "questions": [{"de": "Aus welchem Land kommen Sie?", "ko": "어느 나라에서 왔어요?"}, {"de": "Was ist die Hauptstadt Ihres Landes?", "ko": "당신 나라의 수도는?"}],
        "answers": [{"de": "Ich komme aus Südkorea.", "ko": "한국에서 왔어요."}, {"de": "Die Hauptstadt heißt Seoul.", "ko": "서울이에요."}]
    },
    {
        "id": "sp1-27", "keyword": "Urlaub", "keyword_ko": "휴가",
        "questions": [{"de": "Wohin fahren Sie im Urlaub?", "ko": "휴가 어디로 가요?"}, {"de": "Was machen Sie im Urlaub?", "ko": "휴가에 뭐 해요?"}, {"de": "Wie lange ist Ihr Urlaub?", "ko": "휴가가 얼마나 돼요?"}],
        "answers": [{"de": "Dieses Jahr fahre ich nach Italien.", "ko": "올해는 이탈리아 가요."}, {"de": "Ich besichtige Sehenswürdigkeiten.", "ko": "관광 명소 봐요."}, {"de": "Drei Wochen.", "ko": "3주요."}]
    },
    {
        "id": "sp1-28", "keyword": "Wochenende", "keyword_ko": "주말",
        "questions": [{"de": "Was machen Sie am Wochenende?", "ko": "주말에 뭐 해요?"}, {"de": "Mit wem verbringen Sie das Wochenende?", "ko": "누구와 보내요?"}],
        "answers": [{"de": "Am Wochenende treffe ich Freunde.", "ko": "주말에 친구 만나요."}, {"de": "Meistens mit meiner Familie.", "ko": "주로 가족과요."}]
    },
    {
        "id": "sp1-29", "keyword": "Kleidung", "keyword_ko": "옷",
        "questions": [{"de": "Was tragen Sie heute?", "ko": "오늘 뭐 입었어요?"}, {"de": "Wo kaufen Sie Ihre Kleidung?", "ko": "옷은 어디서 사요?"}],
        "answers": [{"de": "Ich trage Jeans und einen Pullover.", "ko": "청바지랑 스웨터요."}, {"de": "Meistens online.", "ko": "주로 온라인이요."}]
    },
    {
        "id": "sp1-30", "keyword": "Geld", "keyword_ko": "돈",
        "questions": [{"de": "Sparen Sie Geld?", "ko": "돈 저축해요?"}, {"de": "Wofür geben Sie viel Geld aus?", "ko": "어디에 돈 많이 써요?"}],
        "answers": [{"de": "Ja, jeden Monat ein bisschen.", "ko": "네, 매달 조금씩이요."}, {"de": "Für Reisen.", "ko": "여행에요."}]
    },
    {
        "id": "sp1-31", "keyword": "Internet", "keyword_ko": "인터넷",
        "questions": [{"de": "Wie lange sind Sie pro Tag im Internet?", "ko": "하루에 인터넷 얼마나 해요?"}, {"de": "Was machen Sie im Internet?", "ko": "뭘 해요?"}],
        "answers": [{"de": "Ungefähr drei Stunden.", "ko": "약 3시간이요."}, {"de": "Ich schaue Videos und lese Nachrichten.", "ko": "동영상 보고 뉴스 읽어요."}]
    },
    {
        "id": "sp1-32", "keyword": "Verkehrsmittel", "keyword_ko": "교통수단",
        "questions": [{"de": "Wie kommen Sie zur Arbeit?", "ko": "어떻게 출근해요?"}, {"de": "Haben Sie ein Auto?", "ko": "차 있어요?"}],
        "answers": [{"de": "Ich fahre mit der U-Bahn.", "ko": "지하철 타요."}, {"de": "Nein, ich nehme den Bus.", "ko": "아니요, 버스 타요."}]
    },
    {
        "id": "sp1-33", "keyword": "Lieblingsbuch", "keyword_ko": "좋아하는 책",
        "questions": [{"de": "Lesen Sie gerne?", "ko": "책 읽는 거 좋아해요?"}, {"de": "Was ist Ihr Lieblingsbuch?", "ko": "좋아하는 책은?"}],
        "answers": [{"de": "Ja, sehr gerne.", "ko": "네, 정말 좋아해요."}, {"de": "Mein Lieblingsbuch ist 'Der kleine Prinz'.", "ko": "어린 왕자예요."}]
    },
    {
        "id": "sp1-34", "keyword": "Lieblingsfilm", "keyword_ko": "좋아하는 영화",
        "questions": [{"de": "Welche Filme sehen Sie gerne?", "ko": "어떤 영화 좋아해요?"}, {"de": "Was war Ihr letzter Film?", "ko": "마지막으로 본 영화는?"}],
        "answers": [{"de": "Ich mag Komödien.", "ko": "코미디 좋아해요."}, {"de": "Letzte Woche habe ich 'Parasite' gesehen.", "ko": "지난주에 기생충 봤어요."}]
    },
    {
        "id": "sp1-35", "keyword": "Schule / Studium", "keyword_ko": "학교 / 대학",
        "questions": [{"de": "Was studieren Sie?", "ko": "뭘 전공해요?"}, {"de": "Wann beenden Sie Ihr Studium?", "ko": "언제 졸업해요?"}],
        "answers": [{"de": "Ich studiere Informatik.", "ko": "정보학 전공이에요."}, {"de": "Nächstes Jahr.", "ko": "내년이요."}]
    },
    {
        "id": "sp1-36", "keyword": "Lieblingsessen", "keyword_ko": "좋아하는 음식",
        "questions": [{"de": "Was essen Sie am liebsten?", "ko": "가장 좋아하는 음식은?"}, {"de": "Kochen Sie selbst?", "ko": "직접 요리해요?"}],
        "answers": [{"de": "Mein Lieblingsessen ist Bibimbap.", "ko": "비빔밥이요."}, {"de": "Ja, fast jeden Tag.", "ko": "네, 거의 매일이요."}]
    },
    {
        "id": "sp1-37", "keyword": "Lieblingsgetränk", "keyword_ko": "좋아하는 음료",
        "questions": [{"de": "Was trinken Sie gerne?", "ko": "뭘 즐겨 마셔요?"}, {"de": "Trinken Sie Kaffee?", "ko": "커피 마셔요?"}],
        "answers": [{"de": "Ich trinke gerne Tee.", "ko": "차 즐겨 마셔요."}, {"de": "Ja, jeden Morgen einen Kaffee.", "ko": "네, 매일 아침 커피 한 잔이요."}]
    },
    {
        "id": "sp1-38", "keyword": "Lieblingsjahreszeit", "keyword_ko": "좋아하는 계절",
        "questions": [{"de": "Welche Jahreszeit mögen Sie am liebsten?", "ko": "어떤 계절 제일 좋아해요?"}, {"de": "Warum?", "ko": "왜요?"}],
        "answers": [{"de": "Ich mag den Herbst am liebsten.", "ko": "가을이 제일 좋아요."}, {"de": "Das Wetter ist angenehm.", "ko": "날씨가 좋아요."}]
    },
    {
        "id": "sp1-39", "keyword": "Lieblingsland", "keyword_ko": "좋아하는 나라",
        "questions": [{"de": "Welches Land möchten Sie besuchen?", "ko": "어느 나라 가보고 싶어요?"}, {"de": "Warum?", "ko": "왜요?"}],
        "answers": [{"de": "Ich möchte gerne Spanien besuchen.", "ko": "스페인에 가고 싶어요."}, {"de": "Es ist warm und das Essen ist lecker.", "ko": "따뜻하고 음식이 맛있어요."}]
    },
    {
        "id": "sp1-40", "keyword": "Stadt / Wohnort", "keyword_ko": "도시 / 거주지",
        "questions": [{"de": "In welcher Stadt wohnen Sie?", "ko": "어느 도시에 살아요?"}, {"de": "Gefällt es Ihnen dort?", "ko": "거기 마음에 들어요?"}],
        "answers": [{"de": "Ich wohne in Berlin.", "ko": "베를린에 살아요."}, {"de": "Ja, die Stadt ist sehr interessant.", "ko": "네, 도시가 흥미로워요."}]
    },
    {
        "id": "sp1-41", "keyword": "Restaurant", "keyword_ko": "식당",
        "questions": [{"de": "Gehen Sie oft ins Restaurant?", "ko": "식당에 자주 가요?"}, {"de": "Was ist Ihr Lieblingsrestaurant?", "ko": "좋아하는 식당은?"}],
        "answers": [{"de": "Einmal pro Woche.", "ko": "주 1회요."}, {"de": "Ein italienisches Restaurant in der Innenstadt.", "ko": "시내 이탈리아 식당이요."}]
    },
    {
        "id": "sp1-42", "keyword": "Café", "keyword_ko": "카페",
        "questions": [{"de": "Mögen Sie Cafés?", "ko": "카페 좋아해요?"}, {"de": "Was bestellen Sie meistens?", "ko": "주로 뭐 주문해요?"}],
        "answers": [{"de": "Ja, sehr gerne.", "ko": "네, 매우 좋아해요."}, {"de": "Einen Cappuccino und ein Stück Kuchen.", "ko": "카푸치노랑 케이크 한 조각이요."}]
    },
    {
        "id": "sp1-43", "keyword": "Einkaufen", "keyword_ko": "쇼핑",
        "questions": [{"de": "Wo kaufen Sie ein?", "ko": "어디서 장봐요?"}, {"de": "Wie oft gehen Sie einkaufen?", "ko": "장 얼마나 자주 봐요?"}],
        "answers": [{"de": "Ich kaufe im Supermarkt nebenan ein.", "ko": "옆 슈퍼에서요."}, {"de": "Zweimal pro Woche.", "ko": "주 2회요."}]
    },
    {
        "id": "sp1-44", "keyword": "Markt", "keyword_ko": "시장",
        "questions": [{"de": "Gehen Sie auf den Markt?", "ko": "시장에 가요?"}, {"de": "Was kaufen Sie auf dem Markt?", "ko": "시장에서 뭐 사요?"}],
        "answers": [{"de": "Ja, jeden Samstag.", "ko": "네, 매주 토요일이요."}, {"de": "Frisches Obst und Gemüse.", "ko": "신선한 과일과 채소요."}]
    },
    {
        "id": "sp1-45", "keyword": "Musik", "keyword_ko": "음악",
        "questions": [{"de": "Welche Musik hören Sie gerne?", "ko": "어떤 음악 좋아해요?"}, {"de": "Spielen Sie ein Instrument?", "ko": "악기 다뤄요?"}],
        "answers": [{"de": "Ich höre gerne Pop und K-Pop.", "ko": "팝과 K-Pop 좋아해요."}, {"de": "Ja, ich spiele Klavier.", "ko": "네, 피아노 쳐요."}]
    },
    {
        "id": "sp1-46", "keyword": "Hausarbeit", "keyword_ko": "집안일",
        "questions": [{"de": "Wer macht bei Ihnen die Hausarbeit?", "ko": "집안일은 누가 해요?"}, {"de": "Was machen Sie nicht gern?", "ko": "뭐 하기 싫어해요?"}],
        "answers": [{"de": "Ich mache alles selbst.", "ko": "다 직접 해요."}, {"de": "Ich putze nicht gerne.", "ko": "청소는 안 좋아해요."}]
    },
    {
        "id": "sp1-47", "keyword": "Computer", "keyword_ko": "컴퓨터",
        "questions": [{"de": "Wofür benutzen Sie den Computer?", "ko": "컴퓨터 뭐에 써요?"}, {"de": "Haben Sie einen Laptop?", "ko": "노트북 있어요?"}],
        "answers": [{"de": "Für die Arbeit und für Filme.", "ko": "일과 영화 보는 데요."}, {"de": "Ja, einen MacBook.", "ko": "네, 맥북이요."}]
    },
    {
        "id": "sp1-48", "keyword": "Garten", "keyword_ko": "정원",
        "questions": [{"de": "Haben Sie einen Garten?", "ko": "정원 있어요?"}, {"de": "Mögen Sie Pflanzen?", "ko": "식물 좋아해요?"}],
        "answers": [{"de": "Nein, aber einen Balkon.", "ko": "아뇨, 발코니는 있어요."}, {"de": "Ja, ich habe viele Zimmerpflanzen.", "ko": "네, 실내 식물 많아요."}]
    },
    {
        "id": "sp1-49", "keyword": "Fahrrad", "keyword_ko": "자전거",
        "questions": [{"de": "Fahren Sie Fahrrad?", "ko": "자전거 타요?"}, {"de": "Wohin fahren Sie damit?", "ko": "어디로 가요?"}],
        "answers": [{"de": "Ja, jeden Tag zur Arbeit.", "ko": "네, 매일 출근할 때요."}, {"de": "Zur Arbeit und in den Park.", "ko": "직장과 공원에요."}]
    },
    {
        "id": "sp1-50", "keyword": "Beruf der Eltern", "keyword_ko": "부모님 직업",
        "questions": [{"de": "Was machen Ihre Eltern beruflich?", "ko": "부모님 직업이 뭐예요?"}, {"de": "Arbeiten sie noch?", "ko": "아직 일하세요?"}],
        "answers": [{"de": "Mein Vater ist Lehrer, meine Mutter ist Krankenschwester.", "ko": "아빠는 교사, 엄마는 간호사예요."}, {"de": "Ja, beide arbeiten Vollzeit.", "ko": "네, 둘 다 전일제로 일하세요."}]
    }
]
data['sprechen']['parts'][0]['examples'].extend(sp1_new)

# Sprechen Teil 2: 8 → 18
sp2_new = [
    {
        "id": "sp2-9",
        "topic_de": "Erzählen Sie über Ihren Sport",
        "topic_ko": "운동에 대해 이야기하세요",
        "keywords": ["Was?", "Wie oft?", "Wo?", "Mit wem?"],
        "keywords_ko": ["무엇?", "얼마나 자주?", "어디서?", "누구와?"],
        "model_de": "Ich treibe regelmäßig Sport. Mein Lieblingssport ist Joggen, aber ich gehe auch ins Fitnessstudio.\n\nIch laufe dreimal pro Woche, meistens morgens vor der Arbeit. Es macht mir viel Spaß.\n\nIch laufe im Park in meiner Nähe. Der Park ist groß und schön. Ins Fitnessstudio gehe ich nach der Arbeit.\n\nMeistens mache ich Sport allein. Aber am Wochenende spiele ich oft Tennis mit meinem Freund.",
        "model_ko": "규칙적으로 운동해요. 좋아하는 운동은 조깅이고, 헬스장도 가요.\n\n주 3회 달리는데 보통 출근 전 아침이에요. 정말 즐거워요.\n\n근처 공원에서 달려요. 공원이 크고 예뻐요. 헬스장은 퇴근 후에 가요.\n\n보통 혼자 해요. 하지만 주말에는 친구와 테니스 쳐요.",
        "tips_ko": ["빈도: dreimal pro Woche", "혼자/같이 둘 다 언급", "장소 + 시간"]
    },
    {
        "id": "sp2-10",
        "topic_de": "Erzählen Sie über Ihre Schulzeit",
        "topic_ko": "학창 시절을 이야기하세요",
        "keywords": ["Welche Schule?", "Lieblingsfächer", "Lehrer", "Freunde"],
        "keywords_ko": ["어떤 학교?", "좋아한 과목", "선생님", "친구"],
        "model_de": "Ich war von 2010 bis 2016 auf einer Mittelschule in Seoul. Es war eine öffentliche Schule mit etwa 800 Schülern.\n\nMeine Lieblingsfächer waren Englisch und Geschichte. Englisch hat mir Spaß gemacht. Geschichte war interessant.\n\nMeine Lehrer waren meistens nett. Besonders meine Englischlehrerin hat mich sehr motiviert.\n\nIch hatte viele gute Freunde. Mit meinen besten Freunden treffe ich mich noch heute manchmal.",
        "model_ko": "2010년부터 2016년까지 서울 중학교에 다녔어요. 800명 정도의 공립학교였어요.\n\n좋아한 과목은 영어와 역사예요. 영어는 재미있었고, 역사는 흥미로웠어요.\n\n선생님들은 대부분 친절했어요. 특히 영어 선생님이 격려해주셨어요.\n\n좋은 친구들이 많았어요. 지금도 가장 친한 친구들을 가끔 만나요.",
        "tips_ko": ["과거 시제 활용: war / hatte / hat... gemacht", "구체적 인물 묘사"]
    },
    {
        "id": "sp2-11",
        "topic_de": "Erzählen Sie über einen Geburtstag",
        "topic_ko": "생일에 대해 이야기하세요",
        "keywords": ["Wann?", "Wo?", "Mit wem?", "Geschenke"],
        "keywords_ko": ["언제?", "어디서?", "누구와?", "선물"],
        "model_de": "Mein letzter Geburtstag war am 12. Mai. Ich bin 28 Jahre alt geworden.\n\nIch habe meinen Geburtstag zu Hause gefeiert. Meine Wohnung ist nicht groß, aber für eine kleine Party perfekt.\n\nMeine Familie und meine besten Freunde sind gekommen. Insgesamt waren wir zehn Personen.\n\nIch habe viele Geschenke bekommen. Meine Eltern haben mir ein Buch geschenkt. Meine Freunde haben mir Schokolade gebracht.",
        "model_ko": "지난 생일은 5월 12일이었어요. 28살이 됐어요.\n\n집에서 보냈어요. 집이 크지 않지만 작은 파티에는 완벽해요.\n\n가족과 친한 친구들이 왔어요. 총 10명이었어요.\n\n선물을 많이 받았어요. 부모님은 책을, 친구들은 초콜릿을 줬어요.",
        "tips_ko": ["과거: 현재완료", "schenken + 3격 + 4격"]
    },
    {
        "id": "sp2-12",
        "topic_de": "Erzählen Sie über das Wetter / Jahreszeiten",
        "topic_ko": "날씨/계절에 대해",
        "keywords": ["Heute", "Lieblingsjahreszeit", "Aktivitäten", "Kleidung"],
        "keywords_ko": ["오늘", "좋아하는 계절", "활동", "옷"],
        "model_de": "Heute ist das Wetter schön. Es ist sonnig und etwa 22 Grad.\n\nMeine Lieblingsjahreszeit ist der Herbst. Im Herbst ist es nicht zu heiß und nicht zu kalt. Die Blätter sind sehr bunt.\n\nIm Herbst gehe ich gerne wandern oder mache lange Spaziergänge.\n\nIm Herbst trage ich eine Jacke und einen Schal. Im Sommer trage ich kurze Hosen.",
        "model_ko": "오늘 날씨 좋아요. 맑고 약 22도예요.\n\n가장 좋아하는 계절은 가을이에요. 가을은 너무 덥지도 춥지도 않아요. 잎이 형형색색이에요.\n\n가을에는 하이킹이나 긴 산책을 좋아해요.\n\n가을엔 재킷과 목도리, 여름엔 반바지를 입어요.",
        "tips_ko": ["계절: im + 계절", "옷: tragen + 4격"]
    },
    {
        "id": "sp2-13",
        "topic_de": "Erzählen Sie über das Einkaufen",
        "topic_ko": "쇼핑에 대해",
        "keywords": ["Wo?", "Wie oft?", "Was?", "Online?"],
        "keywords_ko": ["어디?", "얼마나 자주?", "무엇?", "온라인?"],
        "model_de": "Ich kaufe meistens im Supermarkt 'Rewe' ein. Er ist nur fünf Minuten zu Fuß.\n\nIch gehe zweimal pro Woche einkaufen. Am Samstag kaufe ich für die ganze Woche ein.\n\nIch kaufe vor allem Lebensmittel: Gemüse, Obst, Fleisch, Brot.\n\nFür Kleidung gehe ich in die Stadt. Aber Bücher und Elektronik kaufe ich meistens online.",
        "model_ko": "보통 'Rewe' 슈퍼에서 장봐요. 도보 5분 거리예요.\n\n주 2회 가요. 토요일에는 일주일 분량을 사요.\n\n주로 식료품을 사요: 채소, 과일, 고기, 빵이요.\n\n옷은 시내에 가서, 책과 전자제품은 온라인으로 사요.",
        "tips_ko": ["빈도 + 분류 + 이유"]
    },
    {
        "id": "sp2-14",
        "topic_de": "Erzählen Sie über das Kochen",
        "topic_ko": "요리에 대해",
        "keywords": ["Gerne?", "Was?", "Für wen?", "Wo lernen?"],
        "keywords_ko": ["좋아하는지", "무엇?", "누구를 위해?", "어디서 배워?"],
        "model_de": "Ja, ich koche sehr gerne. Es macht mir Spaß und ist gesund.\n\nAm liebsten koche ich koreanisches Essen wie Bibimbap oder Bulgogi. Ich probiere auch italienische Gerichte aus.\n\nIch koche meistens für mich allein. Am Wochenende koche ich für meine Freunde.\n\nDas Kochen habe ich von meiner Mutter gelernt. Neue Rezepte finde ich auf YouTube.",
        "model_ko": "네, 요리 정말 좋아해요. 재미있고 건강해요.\n\n한국 음식, 비빔밥이나 불고기를 가장 좋아해요. 이탈리아 음식도 해봐요.\n\n보통 혼자 먹을 거 해요. 주말엔 친구들 위해 해요.\n\n어머니께 배웠어요. 새 레시피는 유튜브에서 찾아요."
    },
    {
        "id": "sp2-15",
        "topic_de": "Erzählen Sie über Ihre Gesundheit",
        "topic_ko": "건강에 대해",
        "keywords": ["Gesund leben?", "Sport", "Essen", "Arzt"],
        "keywords_ko": ["건강한 생활?", "운동", "음식", "병원"],
        "model_de": "Ich versuche, gesund zu leben, aber es ist nicht immer einfach.\n\nFür den Sport gehe ich zweimal pro Woche ins Fitnessstudio. Außerdem fahre ich oft Fahrrad.\n\nBeim Essen achte ich auf viel Obst und Gemüse. Ich trinke viel Wasser.\n\nZum Arzt gehe ich nur, wenn ich krank bin. Einmal im Jahr mache ich eine Untersuchung.",
        "model_ko": "건강하게 살려고 노력해요. 쉽지는 않아요.\n\n운동은 주 2회 헬스장에 가요. 자전거도 자주 타요.\n\n음식은 과일과 채소를 많이 먹어요. 물 많이 마셔요.\n\n병원은 아플 때만 가요. 1년에 한 번 검진해요."
    },
    {
        "id": "sp2-16",
        "topic_de": "Erzählen Sie über Ihre Lieblingsmusik",
        "topic_ko": "좋아하는 음악에 대해",
        "keywords": ["Welche Musik?", "Wann hören?", "Konzert?", "Instrument?"],
        "keywords_ko": ["어떤 음악?", "언제?", "콘서트?", "악기?"],
        "model_de": "Ich höre sehr gerne Musik. Meine Lieblingsmusik ist Pop und K-Pop.\n\nIch höre Musik fast den ganzen Tag. Morgens, in der U-Bahn, beim Sport.\n\nIch war schon auf vielen Konzerten. Letztes Jahr habe ich BTS gesehen.\n\nIch spiele Klavier seit zehn Jahren. Jetzt übe ich nicht mehr oft.",
        "model_ko": "음악 정말 좋아해요. 좋아하는 건 팝과 K-Pop이에요.\n\n하루 종일 들어요. 아침, 지하철, 운동할 때요.\n\n콘서트 많이 갔어요. 작년에 BTS 봤어요.\n\n10년째 피아노 쳐요. 지금은 자주 연습 안 해요."
    },
    {
        "id": "sp2-17",
        "topic_de": "Erzählen Sie über Ihre Heimatstadt",
        "topic_ko": "고향에 대해",
        "keywords": ["Wo?", "Größe", "Was kann man machen?", "Was vermissen?"],
        "keywords_ko": ["어디?", "크기", "할 수 있는 것?", "그리운 것?"],
        "model_de": "Meine Heimatstadt ist Seoul, die Hauptstadt von Südkorea.\n\nSeoul ist sehr groß. Es leben ungefähr 10 Millionen Menschen dort.\n\nMan kann shoppen, in den Park gehen oder koreanisches Essen probieren. Es gibt viele Paläste.\n\nIch vermisse das Essen, meine Familie und die guten öffentlichen Verkehrsmittel.",
        "model_ko": "고향은 한국의 수도 서울이에요.\n\n서울은 매우 커요. 약 1천만 명이 살아요.\n\n쇼핑, 공원 가기, 한국 음식 먹기를 할 수 있어요. 궁궐도 많아요.\n\n음식, 가족, 좋은 대중교통이 그리워요."
    },
    {
        "id": "sp2-18",
        "topic_de": "Erzählen Sie über Ihren letzten Einkauf",
        "topic_ko": "최근 쇼핑한 것에 대해",
        "keywords": ["Was gekauft?", "Wo?", "Wie viel?", "Warum?"],
        "keywords_ko": ["뭘 샀어요?", "어디서?", "얼마?", "왜?"],
        "model_de": "Letzte Woche habe ich eine neue Jacke gekauft.\n\nIch habe sie in einem Kaufhaus in der Innenstadt gekauft. Das Kaufhaus heißt Karstadt.\n\nDie Jacke hat 120 Euro gekostet. Das war ein bisschen teuer, aber sie ist sehr warm.\n\nIch brauchte eine neue Jacke, weil meine alte zu klein war. Außerdem wird es bald kalt.",
        "model_ko": "지난주에 새 재킷을 샀어요.\n\n시내 백화점에서 샀어요. 카르슈타트라는 곳이에요.\n\n재킷은 120유로였어요. 좀 비쌌지만 매우 따뜻해요.\n\n옛날 재킷이 너무 작아져서 새로 필요했어요. 곧 추워지기도 하고요."
    },
    {
        "id": "sp2-19",
        "topic_de": "Erzählen Sie über das Wohnen",
        "topic_ko": "주거에 대해",
        "keywords": ["Allein/mit Familie?", "Stadt/Land?", "Zimmer", "Mit was?"],
        "keywords_ko": ["혼자/가족과?", "도시/시골?", "방", "함께 있는 것?"],
        "model_de": "Ich wohne allein in einer kleinen Wohnung.\n\nIch wohne in einer großen Stadt. Ich mag das Stadtleben, weil es immer viel zu tun gibt.\n\nMeine Wohnung hat ein Schlafzimmer, ein Wohnzimmer, eine Küche und ein Bad.\n\nIn meiner Wohnung habe ich viele Pflanzen und Bücher. Außerdem habe ich eine Katze, sie heißt Mimi.",
        "model_ko": "혼자 작은 아파트에 살아요.\n\n큰 도시에 살아요. 도시 생활이 좋아요, 할 일이 많거든요.\n\n집에 침실, 거실, 주방, 욕실이 있어요.\n\n집에 식물과 책이 많아요. 고양이도 있는데 이름은 Mimi예요."
    },
    {
        "id": "sp2-20",
        "topic_de": "Erzählen Sie über das Reisen",
        "topic_ko": "여행에 대해",
        "keywords": ["Reisen Sie gerne?", "Wohin?", "Wie?", "Allein/Gruppe?"],
        "keywords_ko": ["좋아해요?", "어디로?", "어떻게?", "혼자/단체?"],
        "model_de": "Ja, ich reise sehr gerne. Reisen ist eines meiner Hobbys.\n\nIch reise meistens innerhalb Europas. Ich war schon in Frankreich, Italien und Spanien.\n\nIch fahre gerne mit dem Zug, weil man dabei die Landschaft sehen kann.\n\nIch reise lieber mit Freunden. Aber manchmal mache ich auch Soloreisen, das ist auch schön.",
        "model_ko": "네, 여행 정말 좋아해요. 취미 중 하나예요.\n\n주로 유럽 안에서 여행해요. 프랑스, 이탈리아, 스페인에 가봤어요.\n\n기차를 좋아해요, 풍경을 볼 수 있어서요.\n\n친구들과 더 좋아해요. 가끔 혼자 여행도 해요, 그것도 좋아요."
    },
    {
        "id": "sp2-21",
        "topic_de": "Erzählen Sie über das Lernen",
        "topic_ko": "학습에 대해",
        "keywords": ["Was lernen?", "Wann?", "Wo?", "Schwierigkeiten?"],
        "keywords_ko": ["무엇?", "언제?", "어디서?", "어려움?"],
        "model_de": "Ich lerne gerade Deutsch. Ich besuche einen A2-Kurs.\n\nIch lerne jeden Tag eine Stunde, meistens abends nach der Arbeit.\n\nIch lerne zu Hause oder in der Bibliothek. In der Bibliothek ist es ruhiger.\n\nDie Grammatik finde ich schwierig, besonders die Fälle. Aber das Sprechen macht mir Spaß.",
        "model_ko": "지금 독일어 배워요. A2 강좌 들어요.\n\n매일 1시간씩, 보통 퇴근 후 저녁이에요.\n\n집이나 도서관에서요. 도서관이 더 조용해요.\n\n문법, 특히 격이 어려워요. 하지만 말하기는 재미있어요."
    },
    {
        "id": "sp2-22",
        "topic_de": "Erzählen Sie über eine Party",
        "topic_ko": "파티에 대해",
        "keywords": ["Welche Party?", "Wann?", "Wer war da?", "Was gemacht?"],
        "keywords_ko": ["어떤 파티?", "언제?", "누가 있었어?", "뭘 했어?"],
        "model_de": "Letzten Monat habe ich eine Silvesterparty besucht.\n\nDie Party war am 31. Dezember bei meinem besten Freund.\n\nEs waren ungefähr 15 Leute da, meistens Freunde von der Uni.\n\nWir haben gegessen, getanzt und um Mitternacht Sekt getrunken. Es war eine tolle Nacht.",
        "model_ko": "지난달에 신년 파티에 갔어요.\n\n12월 31일에 가장 친한 친구 집에서 했어요.\n\n약 15명 있었어요, 주로 대학 친구들이요.\n\n먹고, 춤추고, 자정에 샴페인 마셨어요. 멋진 밤이었어요."
    },
    {
        "id": "sp2-23",
        "topic_de": "Erzählen Sie über Internet/Social Media",
        "topic_ko": "인터넷/SNS에 대해",
        "keywords": ["Wie oft?", "Was?", "Welche Apps?", "Vor- und Nachteile"],
        "keywords_ko": ["얼마나 자주?", "무엇?", "어떤 앱?", "장단점"],
        "model_de": "Ich bin ungefähr drei Stunden pro Tag im Internet.\n\nIch lese Nachrichten, schaue Videos und chatte mit Freunden.\n\nIch benutze hauptsächlich Instagram und WhatsApp.\n\nDer Vorteil ist, dass man immer mit Freunden in Kontakt bleibt. Der Nachteil ist, dass man zu viel Zeit verliert.",
        "model_ko": "하루에 약 3시간 인터넷 해요.\n\n뉴스 읽고, 동영상 보고, 친구들과 채팅해요.\n\n주로 인스타그램과 왓츠앱 사용해요.\n\n장점은 친구와 연락이 잘 된다는 거예요. 단점은 시간을 너무 많이 쓴다는 거예요."
    },
    {
        "id": "sp2-24",
        "topic_de": "Erzählen Sie über Ihre Pläne",
        "topic_ko": "계획에 대해",
        "keywords": ["Wochenende", "Nächste Woche", "Nächstes Jahr", "Träume"],
        "keywords_ko": ["주말", "다음 주", "내년", "꿈"],
        "model_de": "Am Wochenende treffe ich Freunde und gehe ins Kino.\n\nNächste Woche habe ich eine wichtige Prüfung. Deshalb muss ich viel lernen.\n\nNächstes Jahr möchte ich nach Deutschland fahren und dort arbeiten.\n\nMein größter Traum ist es, eine eigene Firma zu gründen.",
        "model_ko": "주말에는 친구 만나고 영화 봐요.\n\n다음 주에 중요한 시험이 있어요. 그래서 공부 많이 해야 돼요.\n\n내년에는 독일에 가서 일하고 싶어요.\n\n가장 큰 꿈은 회사를 차리는 거예요."
    }
]
data['sprechen']['parts'][1]['examples'].extend(sp2_new)

# Save
js_out = 'const EXAM_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_exam.js', 'w', encoding='utf-8') as f:
    f.write(js_out)

print(f"Schreiben T1: {len(data['schreiben']['parts'][0]['examples'])}")
print(f"Schreiben T2: {len(data['schreiben']['parts'][1]['examples'])}")
print(f"Sprechen T1: {len(data['sprechen']['parts'][0]['examples'])}")
print(f"Sprechen T2: {len(data['sprechen']['parts'][1]['examples'])}")
print(f"Sprechen T3: {len(data['sprechen']['parts'][2]['examples'])}")
total = sum(len(p['examples']) for p in data['schreiben']['parts']) + sum(len(p['examples']) for p in data['sprechen']['parts'])
print(f"Total: {total}")
