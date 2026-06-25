import json

# Read current file, remove closing ]
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove trailing ] and whitespace
content = content.rstrip()
if content.endswith(']'):
    content = content[:-1].rstrip()

# Add comma after last topic, then new topics
new_topics = [
  {
    "id": "tagesablauf",
    "topic_de": "Tagesablauf",
    "topic_ko": "일과 설명",
    "description_ko": "Sprechen Teil 2 대비. 하루 일과를 시간순으로 설명하기.",
    "sections": [
      {
        "title_de": "Morgenroutine",
        "title_ko": "아침 루틴",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich stehe jeden Morgen um 7 Uhr auf.", "ko": "매일 아침 7시에 일어납니다.", "note": "분리동사 aufstehen", "grammar": [{"word": "stehe ... auf", "meaning": "일어나다", "explain": "분리동사 auf|stehen. 현재형에서 분리"}, {"word": "jeden Morgen", "meaning": "매일 아침", "explain": "jeder(매) + Morgen(m) 4격 시간표현"}, {"word": "um 7 Uhr", "meaning": "7시에", "explain": "um + 시각"}], "blank": {"word": "auf", "position": "Ich stehe jeden Morgen um 7 Uhr ___.", "options": ["auf", "an", "ein", "aus"], "hint": "aufstehen의 분리 전철은?"}},
          {"de": "Dann dusche ich mich und ziehe mich an.", "ko": "그리고 샤워하고 옷을 입습니다.", "note": "재귀동사 연속 사용", "grammar": [{"word": "dusche mich", "meaning": "샤워하다", "explain": "sich duschen. mich = 재귀대명사 4격"}, {"word": "ziehe mich an", "meaning": "옷을 입다", "explain": "sich anziehen. 분리동사 + 재귀"}], "blank": {"word": "mich", "position": "Dann dusche ich ___ und ziehe ___ an.", "options": ["mich", "mir", "sich", "dich"], "hint": "ich의 재귀대명사 4격은?"}},
          {"de": "Zum Frühstück esse ich meistens Brot mit Käse.", "ko": "아침으로 보통 치즈를 곁들인 빵을 먹습니다.", "note": "식사 표현", "grammar": [{"word": "Zum Frühstück", "meaning": "아침식사로", "explain": "zu + dem = zum. Frühstück(n) 3격"}, {"word": "meistens", "meaning": "대부분, 보통", "explain": "빈도 부사"}, {"word": "mit Käse", "meaning": "치즈와 함께", "explain": "mit + 3격"}], "blank": null},
          {"de": "Ich trinke morgens immer eine Tasse Kaffee.", "ko": "아침에 항상 커피 한 잔을 마십니다.", "note": "아침 습관", "grammar": [{"word": "morgens", "meaning": "아침에", "explain": "부사. -s 어미 = 반복적 시간"}, {"word": "immer", "meaning": "항상", "explain": "빈도 부사"}, {"word": "eine Tasse Kaffee", "meaning": "커피 한 잔", "explain": "수량 표현. Tasse(f) + 무관사 Kaffee"}], "blank": null},
          {"de": "Um halb acht verlasse ich das Haus.", "ko": "7시 30분에 집을 나섭니다.", "note": "halb acht = 7:30 주의!", "grammar": [{"word": "halb acht", "meaning": "7시 30분", "explain": "halb + 숫자 = 그 시각의 30분 전! halb 8 = 7:30"}, {"word": "verlasse", "meaning": "떠나다", "explain": "verlassen(떠나다)의 1인칭. 4격 목적어"}, {"word": "das Haus", "meaning": "집을", "explain": "Haus(n) 4격"}], "blank": null}
        ]
      },
      {
        "title_de": "Arbeit / Schule",
        "title_ko": "직장 / 학교",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich fahre mit der U-Bahn zur Arbeit.", "ko": "지하철로 출근합니다.", "note": "출근 수단", "grammar": [{"word": "mit der U-Bahn", "meaning": "지하철로", "explain": "mit + 3격. die U-Bahn → der U-Bahn(3격)"}, {"word": "zur Arbeit", "meaning": "직장으로", "explain": "zu + der = zur. Arbeit(f) 3격"}], "blank": {"word": "mit", "position": "Ich fahre ___ der U-Bahn zur Arbeit.", "options": ["mit", "von", "bei", "zu"], "hint": "교통수단 앞에 쓰는 전치사는?"}},
          {"de": "Die Fahrt dauert ungefähr 30 Minuten.", "ko": "이동에 약 30분 걸립니다.", "note": "소요 시간 표현", "grammar": [{"word": "Die Fahrt", "meaning": "이동, 통근", "explain": "여성명사 1격(주어)"}, {"word": "dauert", "meaning": "걸리다, 지속하다", "explain": "dauern의 3인칭"}, {"word": "ungefähr", "meaning": "대략, 약", "explain": "부사"}], "blank": null},
          {"de": "Ich arbeite von 9 bis 18 Uhr.", "ko": "9시부터 18시까지 일합니다.", "note": "근무 시간", "grammar": [{"word": "von 9 bis 18 Uhr", "meaning": "9시부터 18시까지", "explain": "von ... bis ... = ~부터 ~까지"}], "blank": null},
          {"de": "In der Mittagspause esse ich in der Kantine.", "ko": "점심��간에 구내식당에서 먹습니다.", "note": "점심 루틴", "grammar": [{"word": "In der Mittagspause", "meaning": "점심시간에", "explain": "in + 3격. die Mittagspause → der(3격)"}, {"word": "in der Kantine", "meaning": "구내식당에서", "explain": "in + 3격(위치). die Kantine → der(3격)"}], "blank": null},
          {"de": "Nach der Arbeit gehe ich manchmal einkaufen.", "ko": "퇴근 후 가끔 장을 봅니다.", "note": "퇴근 후 활동", "grammar": [{"word": "Nach der Arbeit", "meaning": "일 후에", "explain": "nach + 3격. die Arbeit → der Arbeit"}, {"word": "manchmal", "meaning": "가끔", "explain": "빈도 부사"}, {"word": "einkaufen", "meaning": "장보다", "explain": "분리동사. gehen + 동사원형 = ~하러 가다"}], "blank": {"word": "Nach", "position": "___ der Arbeit gehe ich manchmal einkaufen.", "options": ["Nach", "Vor", "Bei", "Von"], "hint": "'~후에'를 뜻하는 전치사는?"}}
        ]
      },
      {
        "title_de": "Abend & Wochenende",
        "title_ko": "저녁 & 주말",
        "skill": "sprechen",
        "phrases": [
          {"de": "Abends koche ich meistens selbst.", "ko": "저녁에는 보통 직접 요리합니다.", "note": "저녁 루틴", "grammar": [{"word": "Abends", "meaning": "저녁에", "explain": "부사. -s 어미 = 반복적"}, {"word": "koche", "meaning": "요리하다", "explain": "부사가 앞 → 동사(koche) 두 번째(도치)"}, {"word": "selbst", "meaning": "직접, 스스로", "explain": "부사"}], "blank": null},
          {"de": "Nach dem Abendessen sehe ich fern oder lese ein Buch.", "ko": "저녁 식사 후 TV를 보거나 책을 읽습니다.", "note": "저녁 여가", "grammar": [{"word": "Nach dem Abendessen", "meaning": "저녁 식사 후", "explain": "nach + 3격. das Abendessen → dem(3격)"}, {"word": "sehe ... fern", "meaning": "TV를 보다", "explain": "분리동사 fern|sehen"}, {"word": "oder", "meaning": "또는", "explain": "등위접속사"}], "blank": null},
          {"de": "Am Wochenende schlafe ich gerne länger.", "ko": "주말에는 좀 더 자는 걸 좋아해요.", "note": "주말 루틴", "grammar": [{"word": "Am Wochenende", "meaning": "주말에", "explain": "an + dem = am. Wochenende(n)"}, {"word": "länger", "meaning": "더 오래", "explain": "lang(길다)의 비교급"}], "blank": null},
          {"de": "Samstags räume ich die Wohnung auf.", "ko": "토요일마다 집을 정리합니다.", "note": "주말 집안일", "grammar": [{"word": "Samstags", "meaning": "토요일마다", "explain": "-s 어미 = 매주 반복"}, {"word": "räume ... auf", "meaning": "정리하다", "explain": "분리동사 auf|räumen"}], "blank": null},
          {"de": "Ich gehe um 23 Uhr ins Bett.", "ko": "23시에 잠자리에 듭니다.", "note": "취침", "grammar": [{"word": "ins Bett", "meaning": "침대로", "explain": "in + das = ins. 방향(4격)"}], "blank": null},
          {"de": "Sonntags treffe ich mich oft mit Freunden.", "ko": "일요일마다 친구들을 자주 만납니다.", "note": "주말 사교", "grammar": [{"word": "Sonntags", "meaning": "일요일마다", "explain": "-s = 반복"}, {"word": "treffe mich", "meaning": "만나다", "explain": "sich treffen. 재귀동사"}, {"word": "mit Freunden", "meaning": "친구들과", "explain": "mit + 3격 복수. Freund → Freunden"}], "blank": {"word": "mit", "position": "Ich treffe mich oft ___ Freunden.", "options": ["mit", "von", "bei", "zu"], "hint": "'~와 함께'를 뜻하는 전치사는?"}}
        ]
      }
    ]
  },
  {
    "id": "wohnen",
    "topic_de": "Wohnen",
    "topic_ko": "주거",
    "description_ko": "집 구하기, 집 묘사, 이웃 문제. Schreiben & Sprechen 모두 출제.",
    "sections": [
      {
        "title_de": "Wohnung beschreiben",
        "title_ko": "집 묘사",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich wohne in einer Zweizimmerwohnung im dritten Stock.", "ko": "3층에 있는 투룸 아파트에 살아요.", "note": "주거 형태 설명", "grammar": [{"word": "in einer Zweizimmerwohnung", "meaning": "투룸 아파트에", "explain": "in + 3격. eine → einer(여성 3격)"}, {"word": "im dritten Stock", "meaning": "3층에", "explain": "in + dem = im. dritt → dritten(3격 서수)"}], "blank": null},
          {"de": "Die Wohnung hat eine Küche, ein Bad und einen Balkon.", "ko": "아파트에는 주방, 욕실, 발코니가 있어요.", "note": "방 구성", "grammar": [{"word": "eine Küche", "meaning": "주방 하나", "explain": "Küche(f) 4격. hat + 4격"}, {"word": "ein Bad", "meaning": "욕실 하나", "explain": "Bad(n) 4격"}, {"word": "einen Balkon", "meaning": "발코니 하나", "explain": "Balkon(m) 4격. einen = 남성 4격"}], "blank": {"word": "einen", "position": "Die Wohnung hat ___ Balkon.", "options": ["einen", "ein", "eine", "einem"], "hint": "남성 4격 부정관사는?"}},
          {"de": "Die Miete beträgt 650 Euro warm.", "ko": "관리비 포함 월세는 650유로입니다.", "note": "월세 표현. warm = 관리비 포함", "grammar": [{"word": "beträgt", "meaning": "~이다 (금액)", "explain": "betragen(금액이 ~이다)의 3인칭"}, {"word": "warm", "meaning": "관리비 포함", "explain": "부사. Warmmiete(관리비 포함) ↔ Kaltmiete(미포함)"}], "blank": null},
          {"de": "Die Wohnung liegt in der Nähe vom Bahnhof.", "ko": "아파트가 역 근처에 있어요.", "note": "위치 설명", "grammar": [{"word": "liegt", "meaning": "위치하다", "explain": "liegen(놓여 있다)의 3인칭"}, {"word": "in der Nähe", "meaning": "근처에", "explain": "관용표현. Nähe(f) 3격"}, {"word": "vom Bahnhof", "meaning": "역으로부터", "explain": "von + dem = vom. Bahnhof(m) 3격"}], "blank": null}
        ]
      },
      {
        "title_de": "Wohnungssuche",
        "title_ko": "집 구하기",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich suche eine Wohnung in der Stadtmitte.", "ko": "시내 중심에 있는 집을 찾고 있습니다.", "note": "집 구하기 이메일", "grammar": [{"word": "suche", "meaning": "찾다", "explain": "suchen의 1인칭"}, {"word": "in der Stadtmitte", "meaning": "시내 중심에", "explain": "in + 3격. die Stadtmitte → der(3격)"}], "blank": null},
          {"de": "Ist die Wohnung noch frei?", "ko": "그 집 아직 비어 있나요?", "note": "공실 확인", "grammar": [{"word": "noch", "meaning": "아직", "explain": "부사"}, {"word": "frei", "meaning": "비어있는", "explain": "형용사"}], "blank": null},
          {"de": "Kann ich die Wohnung besichtigen?", "ko": "집을 볼 수 있을까요?", "note": "내방 요청", "grammar": [{"word": "besichtigen", "meaning": "방문하여 보다, 견학하다", "explain": "비분리동사. können 뒤 원형"}], "blank": null},
          {"de": "Ab wann ist die Wohnung frei?", "ko": "집이 언제부터 비나요?", "note": "입주 가능일 문의", "grammar": [{"word": "Ab wann", "meaning": "언제부터", "explain": "ab(~부터) + wann(언제). 의문사 조합"}], "blank": null},
          {"de": "Sind Haustiere erlaubt?", "ko": "반려동물 허용되나요?", "note": "입주 조건 확인", "grammar": [{"word": "Haustiere", "meaning": "반려동물들", "explain": "Haustier(n)의 복수"}, {"word": "erlaubt", "meaning": "허용된", "explain": "erlauben(허용하다)의 과거분사. 수동태"}], "blank": null}
        ]
      },
      {
        "title_de": "Probleme in der Wohnung",
        "title_ko": "집 문제",
        "skill": "schreiben",
        "phrases": [
          {"de": "In meiner Wohnung ist die Heizung kaputt.", "ko": "우리 집 난방이 고장났습니다.", "note": "고장 신고", "grammar": [{"word": "In meiner Wohnung", "meaning": "우리 집에", "explain": "in + 3격. meine Wohnung(f) → meiner"}, {"word": "die Heizung", "meaning": "난방", "explain": "여성명사 1격(주어)"}, {"word": "kaputt", "meaning": "고장난", "explain": "형용사. 상태 보어"}], "blank": null},
          {"de": "Das Wasser im Bad läuft nicht.", "ko": "욕실 물이 나오지 않습니다.", "note": "수도 문제", "grammar": [{"word": "im Bad", "meaning": "욕실에서", "explain": "in + dem = im. Bad(n) 3격"}, {"word": "läuft nicht", "meaning": "흐르지 않다", "explain": "laufen(흐르다)의 3인칭 + 부정"}], "blank": null},
          {"de": "Mein Nachbar macht nachts sehr viel Lärm.", "ko": "이웃이 밤에 소음이 너무 심합니다.", "note": "소음 불만", "grammar": [{"word": "Mein Nachbar", "meaning": "내 이웃", "explain": "Nachbar(m) 1격(주어)"}, {"word": "nachts", "meaning": "밤에", "explain": "부사. -s = 반복적 시간"}, {"word": "Lärm", "meaning": "소음", "explain": "남성명사. viel Lärm = 많은 소음"}], "blank": null},
          {"de": "Könnten Sie bitte einen Handwerker schicken?", "ko": "수리기사를 보내주실 수 있을까요?", "note": "수리 요청", "grammar": [{"word": "Könnten", "meaning": "~해주실 수 있을까요", "explain": "können의 접속법2식"}, {"word": "einen Handwerker", "meaning": "수리기사 한 명", "explain": "Handwerker(m) 4격"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "arbeit",
    "topic_de": "Arbeit & Beruf",
    "topic_ko": "직장 / 직업",
    "description_ko": "직장 생활, 구직, 업무 관련 표현. Sprechen & Schreiben 모두.",
    "sections": [
      {
        "title_de": "Über den Beruf sprechen",
        "title_ko": "직업에 대해 말하기",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich arbeite als Krankenschwester in einem Krankenhaus.", "ko": "병원에서 간호사로 일합니다.", "note": "직업 설명", "grammar": [{"word": "als", "meaning": "~로서", "explain": "직업 앞에. 관사 없이"}, {"word": "in einem Krankenhaus", "meaning": "병원에서", "explain": "in + 3격. ein Krankenhaus(n) → einem"}], "blank": null},
          {"de": "Meine Arbeitszeit ist von 8 bis 17 Uhr.", "ko": "근무시간은 8시부터 17시까지입니다.", "note": "근무시간", "grammar": [{"word": "Meine Arbeitszeit", "meaning": "나의 근무시간", "explain": "Arbeitszeit(f). Meine = 여성 1격"}, {"word": "von ... bis ...", "meaning": "~부터 ~까지", "explain": "시간 범위"}], "blank": null},
          {"de": "Ich habe eine Vollzeitstelle.", "ko": "정규직입니다.", "note": "고용 형태", "grammar": [{"word": "eine Vollzeitstelle", "meaning": "정규직 자리", "explain": "Vollzeitstelle(f) 4격. ↔ Teilzeitstelle(시간제)"}], "blank": null},
          {"de": "Ich bin mit meiner Arbeit zufrieden.", "ko": "일에 만족합니다.", "note": "직업 만족도", "grammar": [{"word": "mit meiner Arbeit", "meaning": "나의 일에", "explain": "mit + 3격. meine Arbeit(f) → meiner"}, {"word": "zufrieden", "meaning": "만족한", "explain": "형용사. zufrieden mit + Dat."}], "blank": null}
        ]
      },
      {
        "title_de": "Bewerbung & Jobsuche",
        "title_ko": "지원 & 구직",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich möchte mich für die Stelle als Verkäufer bewerben.", "ko": "판매원 자리에 지원하고 싶습니다.", "note": "입사 지원 이메일", "grammar": [{"word": "mich ... bewerben", "meaning": "지원하다", "explain": "sich bewerben für + 4격. 재귀동사"}, {"word": "für die Stelle", "meaning": "그 자리에", "explain": "für + 4격. Stelle(f)"}, {"word": "als Verkäufer", "meaning": "판매원으로", "explain": "als + 직업. 관사 없이"}], "blank": {"word": "für", "position": "Ich möchte mich ___ die Stelle bewerben.", "options": ["für", "um", "auf", "an"], "hint": "sich bewerben + ? + Akk."}},
          {"de": "Ich habe Erfahrung im Bereich Kundenservice.", "ko": "고객 서비스 분야에 경험이 있습니다.", "note": "경력 소개", "grammar": [{"word": "Erfahrung", "meaning": "경험", "explain": "여성명사. 관사 없이 '경험이 있다'"}, {"word": "im Bereich", "meaning": "~분야에서", "explain": "in + dem = im. Bereich(m) 3격"}], "blank": null},
          {"de": "Wann könnte ich mit der Arbeit anfangen?", "ko": "언제부터 일을 시작할 수 있을까요?", "note": "시작일 문의", "grammar": [{"word": "könnte", "meaning": "~할 수 있을까", "explain": "können의 접속법2식. 정중함"}, {"word": "mit der Arbeit", "meaning": "일을", "explain": "mit + 3격. die Arbeit → der Arbeit"}, {"word": "anfangen", "meaning": "시작하다", "explain": "분리동사(an|fangen). könnte 뒤 원형"}], "blank": null},
          {"de": "Im Anhang finden Sie meinen Lebenslauf.", "ko": "첨부파일에 이력서가 있습니다.", "note": "이력서 첨부 안내", "grammar": [{"word": "Im Anhang", "meaning": "첨부파일에", "explain": "in + dem = im. Anhang(m) 3격"}, {"word": "finden Sie", "meaning": "찾으실 수 있습니다", "explain": "격식체. 부사(Im Anhang) 맨 앞 → 도치"}, {"word": "meinen Lebenslauf", "meaning": "나의 이력서를", "explain": "Lebenslauf(m) 4격. mein → meinen"}], "blank": null}
        ]
      },
      {
        "title_de": "Krankmeldung",
        "title_ko": "병가 신고",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich bin leider krank und kann heute nicht zur Arbeit kommen.", "ko": "안타깝지만 아파서 오늘 출근할 수 없습니다.", "note": "병가 이메일", "grammar": [{"word": "krank", "meaning": "아픈", "explain": "형용사. 상태 보어"}, {"word": "zur Arbeit", "meaning": "직장에", "explain": "zu + der = zur. Arbeit(f) 3격"}], "blank": null},
          {"de": "Der Arzt hat mir eine Krankmeldung gegeben.", "ko": "의사가 진단서를 줬습니다.", "note": "진단서 제출", "grammar": [{"word": "mir", "meaning": "나에게", "explain": "ich의 3격. geben + Dat. + Akk."}, {"word": "eine Krankmeldung", "meaning": "진단서", "explain": "여성명사 4격"}, {"word": "gegeben", "meaning": "준", "explain": "geben의 과거분사. hat + P.P."}], "blank": null},
          {"de": "Ich komme voraussichtlich am Mittwoch wieder.", "ko": "수요일에 복귀할 예정입니다.", "note": "복귀 예정일", "grammar": [{"word": "voraussichtlich", "meaning": "예상컨대", "explain": "부사"}, {"word": "am Mittwoch", "meaning": "수요일에", "explain": "am + 요일"}, {"word": "wieder", "meaning": "다시", "explain": "부사"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "einkaufen",
    "topic_de": "Einkaufen",
    "topic_ko": "쇼핑",
    "description_ko": "상점, 시장에서 물건 사기. 가격, 교환, 환불 표현.",
    "sections": [
      {
        "title_de": "Im Geschäft",
        "title_ko": "상점에서",
        "skill": "sprechen",
        "phrases": [
          {"de": "Kann ich Ihnen helfen?", "ko": "도와드릴까요?", "note": "점원의 인사. 시험에서 이 질문에 답해야 할 수 있음", "grammar": [{"word": "Ihnen", "meaning": "당신에게", "explain": "Sie의 3격. helfen + Dat."}], "blank": null},
          {"de": "Ich suche einen Wintermantel in Größe M.", "ko": "M사이즈 겨울 코트를 찾고 있어요.", "note": "물건 찾기", "grammar": [{"word": "einen Wintermantel", "meaning": "겨울 코트 하나", "explain": "Wintermantel(m) 4격"}, {"word": "in Größe M", "meaning": "M사이즈로", "explain": "in + Größe. 사이즈 표현"}], "blank": null},
          {"de": "Haben Sie das auch in einer anderen Farbe?", "ko": "다른 색상도 있나요?", "note": "색상 문의", "grammar": [{"word": "in einer anderen Farbe", "meaning": "다른 색으로", "explain": "in + 3격. eine Farbe(f) → einer + anderen(-en 어미)"}], "blank": null},
          {"de": "Wie viel kostet das?", "ko": "이거 얼마예요?", "note": "가격 문의", "grammar": [{"word": "Wie viel", "meaning": "얼마나", "explain": "의문사. 가격/양을 묻는다"}, {"word": "kostet", "meaning": "비용이 ~이다", "explain": "kosten의 3인칭"}], "blank": null},
          {"de": "Das ist mir zu teuer. Gibt es etwas Günstigeres?", "ko": "너무 비싸요. 더 저렴한 거 있나요?", "note": "가격 협상", "grammar": [{"word": "mir", "meaning": "나에게는", "explain": "3격. '나에게는 너무 비싸다'"}, {"word": "zu teuer", "meaning": "너무 비싼", "explain": "zu + 형용사 = 너무 ~한"}, {"word": "Günstigeres", "meaning": "더 저렴한 것", "explain": "günstig의 비교급 + 명사화(-es)"}], "blank": null},
          {"de": "Kann ich mit Karte bezahlen?", "ko": "카드로 결제할 수 있나요?", "note": "결제 방법 확인", "grammar": [{"word": "mit Karte", "meaning": "카드로", "explain": "mit + 3격(수단). 관사 생략 가능"}, {"word": "bezahlen", "meaning": "결제하다", "explain": "können 뒤 원형"}], "blank": null}
        ]
      },
      {
        "title_de": "Umtausch & Reklamation",
        "title_ko": "교환 & 반품",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich möchte diesen Pullover umtauschen.", "ko": "이 스웨터를 교환하고 싶습니다.", "note": "교환 요청", "grammar": [{"word": "diesen Pullover", "meaning": "이 스웨터를", "explain": "dies + Pullover(m) 4격 → diesen"}, {"word": "umtauschen", "meaning": "교환하다", "explain": "분리동사. möchte 뒤 원형"}], "blank": null},
          {"de": "Ich habe den Kassenbon dabei.", "ko": "영수증을 가지고 왔습니다.", "note": "영수증 제시", "grammar": [{"word": "den Kassenbon", "meaning": "영수증을", "explain": "Kassenbon(m) 4격"}, {"word": "dabei", "meaning": "가지고 있는", "explain": "부사. '지금 갖고 있다'"}], "blank": null},
          {"de": "Der Pullover hat ein Loch.", "ko": "스웨터에 구멍이 있어요.", "note": "불량 사유 설명", "grammar": [{"word": "ein Loch", "meaning": "구멍 하나", "explain": "Loch(n) 4격"}], "blank": null},
          {"de": "Kann ich mein Geld zurückbekommen?", "ko": "환불받을 수 있나요?", "note": "환불 요청", "grammar": [{"word": "mein Geld", "meaning": "내 돈", "explain": "Geld(n) 4격"}, {"word": "zurückbekommen", "meaning": "돌려받다", "explain": "분리동사(zurück|bekommen). können 뒤 원형"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "gesundheit",
    "topic_de": "Gesundheit",
    "topic_ko": "건강 / 병원",
    "description_ko": "증상 설명, 병원 방문, 약국 이용. Sprechen에서 자주 출제.",
    "sections": [
      {
        "title_de": "Symptome beschreiben",
        "title_ko": "증상 설명",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich habe starke Kopfschmerzen.", "ko": "심한 두통이 있어요.", "note": "증상 표현", "grammar": [{"word": "starke", "meaning": "심한", "explain": "stark의 형용사 복수 어미 -e (무관사)"}, {"word": "Kopfschmerzen", "meaning": "두통", "explain": "복합명사. Kopf(머리) + Schmerzen(통증, 항상 복수)"}], "blank": null},
          {"de": "Mir ist schlecht.", "ko": "속이 안 좋아요 / 메스꺼워요.", "note": "구역감 표현", "grammar": [{"word": "Mir", "meaning": "나에게", "explain": "ich의 3격. 감각/상태 표현: Mir ist + 형용사"}, {"word": "schlecht", "meaning": "나쁜, 안 좋은", "explain": "형용사. '메스꺼운' 의미도"}], "blank": null},
          {"de": "Ich habe seit drei Tagen Husten und Schnupfen.", "ko": "3일째 기침과 콧물이 있어요.", "note": "감기 증상", "grammar": [{"word": "seit drei Tagen", "meaning": "3일 전부터", "explain": "seit + 3격. Tag(m) → Tagen(복수 3격)"}, {"word": "Husten", "meaning": "기침", "explain": "남성명사"}, {"word": "Schnupfen", "meaning": "콧물, 코감기", "explain": "남성명사"}], "blank": {"word": "seit", "position": "Ich habe ___ drei Tagen Husten.", "options": ["seit", "vor", "ab", "für"], "hint": "'~전부터 계속'의 전치사는?"}},
          {"de": "Mein Rücken tut mir weh.", "ko": "허리가 아파요.", "note": "통증 표현: wehtun + Dat.", "grammar": [{"word": "Mein Rücken", "meaning": "내 등/허리", "explain": "Rücken(m) 1격(주어)"}, {"word": "tut ... weh", "meaning": "아프다", "explain": "분리동사 weh|tun + 3격. mir = 나에게"}], "blank": null},
          {"de": "Ich bin allergisch gegen Nüsse.", "ko": "견과류 알레르기가 있어요.", "note": "알레르기 표현", "grammar": [{"word": "allergisch gegen", "meaning": "~에 알레르기가 있는", "explain": "gegen + 4격"}], "blank": null},
          {"de": "Ich habe Fieber, ungefähr 38 Grad.", "ko": "열이 있어요, 대략 38도요.", "note": "체온 전달", "grammar": [{"word": "Fieber", "meaning": "열", "explain": "중성명사. 관사 없이 '열이 있다'"}, {"word": "ungefähr", "meaning": "대략", "explain": "부사"}, {"word": "Grad", "meaning": "도", "explain": "온도 단위"}], "blank": null}
        ]
      },
      {
        "title_de": "Beim Arzt",
        "title_ko": "병원에서",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich brauche einen Termin beim Hausarzt.", "ko": "주치의에게 예약이 필요합니다.", "note": "진료 예약", "grammar": [{"word": "beim Hausarzt", "meaning": "주치의에게", "explain": "bei + dem = beim. Hausarzt(m) 3격"}], "blank": null},
          {"de": "Nehmen Sie regelmäßig Medikamente?", "ko": "정기적으로 약을 복용하시나요?", "note": "의사 질문 (답변 준비)", "grammar": [{"word": "regelmäßig", "meaning": "정기적으로", "explain": "부사"}, {"word": "Medikamente", "meaning": "약들", "explain": "Medikament(n) 복수"}], "blank": null},
          {"de": "Sie sollten drei Tage im Bett bleiben.", "ko": "3일간 침대에 누워 계셔야 합니다.", "note": "의사 지시", "grammar": [{"word": "sollten", "meaning": "~해야 합니다", "explain": "sollen의 접속법2식. 부드러운 조언"}, {"word": "im Bett", "meaning": "침대에서", "explain": "in + dem = im. Bett(n) 3격(위치)"}, {"word": "bleiben", "meaning": "머무르다", "explain": "sollten 뒤 원형"}], "blank": null},
          {"de": "Ich bin gegen Grippe geimpft.", "ko": "독감 예방접종을 맞았어요.", "note": "예방접종 표현", "grammar": [{"word": "gegen Grippe", "meaning": "독감에 대해", "explain": "gegen + 4격"}, {"word": "geimpft", "meaning": "접종받은", "explain": "impfen(접종하다)의 과거분사. bin + P.P. = 수동/상태"}], "blank": null}
        ]
      },
      {
        "title_de": "In der Apotheke",
        "title_ko": "약국에서",
        "skill": "sprechen",
        "phrases": [
          {"de": "Haben Sie etwas gegen Kopfschmerzen?", "ko": "두통약 있나요?", "note": "약 요청", "grammar": [{"word": "etwas gegen", "meaning": "~에 효과 있는 것", "explain": "gegen + 4격. '~에 대항하는 것'"}, {"word": "Kopfschmerzen", "meaning": "두통", "explain": "항상 복수"}], "blank": null},
          {"de": "Nehmen Sie die Tabletten dreimal täglich.", "ko": "약을 하루 세 번 복용하세요.", "note": "복용 지시", "grammar": [{"word": "die Tabletten", "meaning": "알약들을", "explain": "Tablette(f) 복수 4격"}, {"word": "dreimal", "meaning": "세 번", "explain": "drei + -mal = 횟수"}, {"word": "täglich", "meaning": "매일", "explain": "부사. '하루에'"}], "blank": null},
          {"de": "Ist das Medikament rezeptpflichtig?", "ko": "이 약은 처방전이 필요한가요?", "note": "처방전 여부 확인", "grammar": [{"word": "rezeptpflichtig", "meaning": "처방전이 필요한", "explain": "Rezept(처방전) + pflichtig(의무적인)"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "reisen",
    "topic_de": "Reisen & Verkehr",
    "topic_ko": "여행 / 교통",
    "description_ko": "호텔 예약, 교통수단, 여행 계획. Schreiben & Sprechen 모두 자주 출제.",
    "sections": [
      {
        "title_de": "Hotel buchen",
        "title_ko": "호텔 예약",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich möchte ein Einzelzimmer vom 5. bis zum 8. Mai reservieren.", "ko": "5월 5일부터 8일까지 싱글룸을 예약하고 싶습니다.", "note": "호텔 예약 이메일", "grammar": [{"word": "ein Einzelzimmer", "meaning": "싱글룸 하나", "explain": "Einzelzimmer(n) 4격"}, {"word": "vom 5. bis zum 8.", "meaning": "5일부터 8일까지", "explain": "von + dem = vom, bis zu + dem = zum. 서수 + 3격"}, {"word": "reservieren", "meaning": "예약하다", "explain": "möchte 뒤 원형"}], "blank": {"word": "vom", "position": "Ich möchte ein Zimmer ___ 5. bis zum 8. Mai reservieren.", "options": ["vom", "am", "im", "von dem"], "hint": "von + dem의 축약형은?"}},
          {"de": "Ist Frühstück im Preis inbegriffen?", "ko": "조식이 가격에 포함되어 있나요?", "note": "포함 사항 확인", "grammar": [{"word": "im Preis", "meaning": "가격에", "explain": "in + dem = im. Preis(m) 3격"}, {"word": "inbegriffen", "meaning": "포함된", "explain": "과거분사. '포함되어 있는'"}], "blank": null},
          {"de": "Gibt es einen Parkplatz?", "ko": "주차장이 있나요?", "note": "시설 문의", "grammar": [{"word": "Gibt es", "meaning": "~이 있다", "explain": "es gibt + 4격. 존재 표현"}, {"word": "einen Parkplatz", "meaning": "주차장 하나", "explain": "Parkplatz(m) 4격"}], "blank": null},
          {"de": "Wie komme ich vom Bahnhof zum Hotel?", "ko": "역에서 호텔까지 어떻게 가나요?", "note": "길 문의", "grammar": [{"word": "Wie", "meaning": "어떻게", "explain": "의문사"}, {"word": "vom Bahnhof", "meaning": "역에서", "explain": "von + dem = vom"}, {"word": "zum Hotel", "meaning": "호텔까지", "explain": "zu + dem = zum"}], "blank": null}
        ]
      },
      {
        "title_de": "Am Bahnhof / Flughafen",
        "title_ko": "역 / 공항에서",
        "skill": "sprechen",
        "phrases": [
          {"de": "Eine Fahrkarte nach München, hin und zurück, bitte.", "ko": "뮌헨 가는 왕복 승차권 주세요.", "note": "표 구매", "grammar": [{"word": "Eine Fahrkarte", "meaning": "승차권 하나", "explain": "Fahrkarte(f) 4격"}, {"word": "nach München", "meaning": "뮌헨으로", "explain": "nach + 도시명 (관사 없이)"}, {"word": "hin und zurück", "meaning": "왕복", "explain": "관용표현. hin(가는 것) + zurück(돌아오는 것)"}], "blank": null},
          {"de": "Von welchem Gleis fährt der Zug ab?", "ko": "기차가 몇 번 플랫폼에서 출발하나요?", "note": "플랫폼 확인", "grammar": [{"word": "Von welchem Gleis", "meaning": "어느 플랫폼에서", "explain": "von + 3격. welches Gleis(n) → welchem(3격)"}, {"word": "fährt ... ab", "meaning": "출발하다", "explain": "분리동사 ab|fahren"}], "blank": null},
          {"de": "Muss ich umsteigen?", "ko": "환승해야 하나요?", "note": "환승 확인", "grammar": [{"word": "umsteigen", "meaning": "환승하다", "explain": "분리동사(um|steigen). müssen 뒤 원형"}], "blank": null},
          {"de": "Der Zug hat 20 Minuten Verspätung.", "ko": "기차가 20분 지연되고 있어요.", "note": "지연 안내 이해", "grammar": [{"word": "Verspätung", "meaning": "지연", "explain": "여성명사. '20분의 지연을 가지다'"}], "blank": null},
          {"de": "Wo kann ich mein Gepäck aufgeben?", "ko": "짐을 어디서 부칠 수 있나요?", "note": "수화물 접수", "grammar": [{"word": "mein Gepäck", "meaning": "내 짐", "explain": "Gepäck(n) 4격"}, {"word": "aufgeben", "meaning": "부치다, 맡기다", "explain": "분리동사(auf|geben). können 뒤 원형"}], "blank": null}
        ]
      },
      {
        "title_de": "Unterwegs",
        "title_ko": "이동 중",
        "skill": "sprechen",
        "phrases": [
          {"de": "Entschuldigung, wie komme ich zum Rathaus?", "ko": "실례합니다, 시청에 어떻게 가나요?", "note": "길 묻기", "grammar": [{"word": "wie", "meaning": "어떻게", "explain": "의문사"}, {"word": "zum Rathaus", "meaning": "시청으로", "explain": "zu + dem = zum. Rathaus(n) 3격"}], "blank": null},
          {"de": "Ist es weit von hier?", "ko": "여기서 머나요?", "note": "거리 확인", "grammar": [{"word": "weit", "meaning": "먼", "explain": "형용사"}, {"word": "von hier", "meaning": "여기서부터", "explain": "von + 장소"}], "blank": null},
          {"de": "Kann man zu Fuß gehen?", "ko": "걸어갈 수 있나요?", "note": "도보 가능 여부", "grammar": [{"word": "man", "meaning": "사람들이(일반)", "explain": "비인칭 대명사. 일반적 상황"}, {"word": "zu Fuß", "meaning": "도보로", "explain": "관용표현. zu + Fuß(m)"}], "blank": null}
        ]
      }
    ]
  }
]

# Write back
content_new = content + ',\n'
for i, topic in enumerate(new_topics):
    content_new += '  ' + json.dumps(topic, ensure_ascii=False, indent=2).replace('\n', '\n  ')
    if i < len(new_topics) - 1:
        content_new += ','
    content_new += '\n'
content_new += ']'

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'w', encoding='utf-8') as f:
    f.write(content_new)

print(f"Added {len(new_topics)} topics")
