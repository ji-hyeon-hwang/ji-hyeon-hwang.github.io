import json

with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'r', encoding='utf-8') as f:
    content = f.read()

prefix = 'const PRACTICE_DATA = '
data = json.loads(content[len(prefix):])
print(f"Before: {sum(sum(len(s['phrases']) for s in t['sections']) for t in data)} phrases")

# Find topics and add more phrase variations
def add_phrases(topic_id, section_title_de, new_phrases):
    for t in data:
        if t['id'] == topic_id:
            for s in t['sections']:
                if s['title_de'] == section_title_de:
                    s['phrases'].extend(new_phrases)
                    return True
    return False

# Email basics - more variations
add_phrases('email-basics', 'Einleitung — Grund des Schreibens', [
    {"de": "Vielen Dank für Ihre schnelle Antwort.", "ko": "빠른 답변 감사합니다.", "note": "감사 + 신속성 강조", "grammar": [{"word": "schnelle", "meaning": "빠른", "explain": "schnell의 형용사 어미 -e (여성 4격, Antwort)"}], "blank": None},
    {"de": "Ich freue mich, von Ihnen zu hören.", "ko": "연락 주셔서 기쁩니다.", "note": "답장에 대한 감사", "grammar": [{"word": "freue mich", "meaning": "기쁘다", "explain": "sich freuen"}, {"word": "zu hören", "meaning": "듣는 것", "explain": "zu + 동사원형 = 부정사구"}], "blank": None},
    {"de": "Ich wende mich an Sie, weil ich eine Bitte habe.", "ko": "부탁이 있어서 연락드립니다.", "note": "정식 요청 시작", "grammar": [{"word": "wende mich an", "meaning": "~에게 연락하다", "explain": "sich wenden an + 4격"}], "blank": None},
    {"de": "In Ihrer E-Mail vom 5. März schreiben Sie, dass...", "ko": "3월 5일자 메일에서 ~라고 쓰셨는데...", "note": "이전 메일 인용", "grammar": [{"word": "vom 5. März", "meaning": "3월 5일자의", "explain": "von + dem = vom + 서수 + 월"}, {"word": "dass", "meaning": "~라는 것을", "explain": "종속접속사. 동사가 끝으로"}], "blank": None}
])

# Termine - more variations
add_phrases('termine', 'Termin anfragen', [
    {"de": "Ich brauche einen Termin in der nächsten Woche.", "ko": "다음 주 안에 약속이 필요합니다.", "note": "기간 명시", "grammar": [{"word": "in der nächsten Woche", "meaning": "다음 주에", "explain": "in + 3격. die Woche → der + 형용사 어미 -en"}], "blank": None},
    {"de": "Wäre nächsten Montag um 9 Uhr möglich?", "ko": "다음 주 월요일 9시 가능할까요?", "note": "구체적 시간 + 정중 표현", "grammar": [{"word": "Wäre", "meaning": "~일까요", "explain": "sein 접속법2식"}, {"word": "nächsten Montag", "meaning": "다음 월요일", "explain": "4격 시간 표현. nächster Montag → nächsten Montag"}], "blank": None},
    {"de": "Geht es vielleicht auch am Vormittag?", "ko": "혹시 오전에도 가능한가요?", "note": "유연성 확인", "grammar": [{"word": "Geht es", "meaning": "가능한가요", "explain": "es geht = 가능하다"}, {"word": "am Vormittag", "meaning": "오전에", "explain": "an + dem = am"}], "blank": None}
])

add_phrases('termine', 'Termin vorschlagen', [
    {"de": "Wie wäre es mit Mittwoch um 16 Uhr?", "ko": "수요일 16시 어떨까요?", "note": "기본 패턴. 시간만 바꾸면 다양하게 응용 가능", "grammar": [{"word": "Wie wäre es mit", "meaning": "~은 어떨까", "explain": "mit + 3격"}], "blank": None},
    {"de": "Wie wäre es mit Donnerstag um 10 Uhr?", "ko": "목요일 10시 어떨까요?", "note": "같은 패턴 변형", "grammar": [{"word": "mit Donnerstag", "meaning": "목요일과", "explain": "mit + 요일"}], "blank": None},
    {"de": "Wie wäre es mit Freitagnachmittag?", "ko": "금요일 오후 어떨까요?", "note": "요일+시간대", "grammar": [{"word": "Freitagnachmittag", "meaning": "금요일 오후", "explain": "복합명사: Freitag + Nachmittag"}], "blank": None},
    {"de": "Passt es Ihnen am Dienstagvormittag?", "ko": "화요일 오전 괜찮으세요?", "note": "passen + Dat. 패턴", "grammar": [{"word": "Ihnen", "meaning": "당신에게", "explain": "Sie의 3격"}], "blank": None},
    {"de": "Hätten Sie am Samstag um 11 Uhr Zeit?", "ko": "토요일 11시에 시간 있으세요?", "note": "Hätten = haben 접속법2식", "grammar": [{"word": "Hätten", "meaning": "갖고 있을까요", "explain": "haben 접속법2식. 정중"}], "blank": None}
])

# Einladung - variations
add_phrases('einladung', 'Einladung annehmen', [
    {"de": "Vielen Dank, ich komme sehr gerne!", "ko": "감사합니다, 기꺼이 갈게요!", "note": "기본 수락", "grammar": [], "blank": None},
    {"de": "Danke! Ich freue mich auf das Fest.", "ko": "고마워! 파티 기대돼.", "note": "기대 표현", "grammar": [{"word": "freue mich auf", "meaning": "기대하다", "explain": "sich freuen auf + 4격"}, {"word": "das Fest", "meaning": "파티/축제", "explain": "Fest(n) 4격"}], "blank": None},
    {"de": "Ich nehme die Einladung gerne an.", "ko": "초대를 기꺼이 받아들이겠습니다.", "note": "격식체 수락. annehmen = 받아들이다", "grammar": [{"word": "nehme ... an", "meaning": "받아들이다", "explain": "분리동사 an|nehmen"}], "blank": None},
    {"de": "Wann genau soll ich kommen?", "ko": "정확히 언제 갈까?", "note": "시간 재확인", "grammar": [{"word": "genau", "meaning": "정확히", "explain": "부사"}], "blank": None}
])

add_phrases('einladung', 'Einladung ablehnen', [
    {"de": "Vielen Dank, aber ich kann leider nicht.", "ko": "감사하지만 안타깝게도 못 가요.", "note": "간결한 거절", "grammar": [], "blank": None},
    {"de": "Schade, dass ich nicht dabei sein kann.", "ko": "함께하지 못해 아쉬워.", "note": "유감 표현", "grammar": [{"word": "dabei sein", "meaning": "함께하다", "explain": "dabei = 거기에 함께"}], "blank": None},
    {"de": "Ich muss leider absagen.", "ko": "안타깝지만 취소해야 해요.", "note": "공식적 거절", "grammar": [{"word": "absagen", "meaning": "취소하다", "explain": "분리동사. muss 뒤 원형"}], "blank": None}
])

# Beschwerde - variations
add_phrases('beschwerde', 'Problem beschreiben', [
    {"de": "Das Paket ist nicht angekommen.", "ko": "소포가 도착하지 않았어요.", "note": "배송 미도착", "grammar": [{"word": "ist ... angekommen", "meaning": "도착했다", "explain": "ankommen 현재완료 (sein 동사)"}], "blank": None},
    {"de": "Die Lieferung verspätet sich.", "ko": "배송이 지연되고 있어요.", "note": "지연 신고", "grammar": [{"word": "verspätet sich", "meaning": "지연되다", "explain": "sich verspäten"}], "blank": None},
    {"de": "Es gibt einen Fehler in der Rechnung.", "ko": "청구서에 오류가 있어요.", "note": "오류 신고", "grammar": [{"word": "Es gibt", "meaning": "~이 있다", "explain": "es gibt + 4격"}, {"word": "einen Fehler", "meaning": "오류 하나", "explain": "Fehler(m) 4격"}, {"word": "in der Rechnung", "meaning": "청구서에", "explain": "in + 3격"}], "blank": None}
])

# Wohnen - variations
add_phrases('wohnen', 'Wohnungssuche', [
    {"de": "Wie hoch ist die Miete?", "ko": "월세는 얼마인가요?", "note": "월세 문의", "grammar": [{"word": "Wie hoch", "meaning": "얼마나 높은", "explain": "wie + 형용사"}], "blank": None},
    {"de": "Wie groß ist die Wohnung?", "ko": "집은 얼마나 큰가요?", "note": "크기 문의", "grammar": [{"word": "Wie groß", "meaning": "얼마나 큰", "explain": "wie + 형용사"}], "blank": None},
    {"de": "Wann kann ich die Wohnung sehen?", "ko": "집을 언제 볼 수 있나요?", "note": "내방 시간 문의", "grammar": [{"word": "Wann", "meaning": "언제", "explain": "의문사"}], "blank": None},
    {"de": "Sind alle Möbel in der Wohnung?", "ko": "가구가 다 포함되어 있나요?", "note": "가구 포함 확인", "grammar": [{"word": "alle Möbel", "meaning": "모든 가구", "explain": "Möbel = 항상 복수"}], "blank": None}
])

# Reisen - variations
add_phrases('reisen', 'Am Bahnhof', [
    {"de": "Wann fährt der nächste Zug nach Berlin?", "ko": "다음 베를린행 기차 언제 있나요?", "note": "다음 기차 문의", "grammar": [{"word": "der nächste Zug", "meaning": "다음 기차", "explain": "nah 최상급. 남성 1격 -e"}, {"word": "nach Berlin", "meaning": "베를린으로", "explain": "nach + 도시명"}], "blank": None},
    {"de": "Wann kommt der Zug in München an?", "ko": "기차가 뮌헨에 언제 도착하나요?", "note": "도착 시간 문의", "grammar": [{"word": "kommt ... an", "meaning": "도착하다", "explain": "분리동사 an|kommen"}], "blank": None},
    {"de": "Wie viel kostet eine Fahrkarte?", "ko": "표 한 장 얼마예요?", "note": "표 가격 문의", "grammar": [], "blank": None},
    {"de": "Gibt es eine Ermäßigung für Studenten?", "ko": "학생 할인 있나요?", "note": "할인 문의", "grammar": [{"word": "Ermäßigung", "meaning": "할인", "explain": "여성명사"}], "blank": None}
])

# Gesundheit - variations
add_phrases('gesundheit', 'Symptome beschreiben', [
    {"de": "Mein Bauch tut weh.", "ko": "배가 아파요.", "note": "wehtun 패턴", "grammar": [{"word": "Mein Bauch", "meaning": "내 배", "explain": "Bauch(m) 1격"}, {"word": "tut weh", "meaning": "아프다", "explain": "분리동사 weh|tun"}], "blank": None},
    {"de": "Meine Augen tun weh.", "ko": "눈이 아파요.", "note": "복수형 wehtun", "grammar": [{"word": "Meine Augen", "meaning": "나의 눈", "explain": "Auge(n) 복수 = Augen"}, {"word": "tun weh", "meaning": "아프다", "explain": "복수 주어 → tun"}], "blank": None},
    {"de": "Mir ist schwindelig.", "ko": "어지러워요.", "note": "Mir ist + 형용사 패턴", "grammar": [{"word": "Mir", "meaning": "나에게", "explain": "ich 3격"}, {"word": "schwindelig", "meaning": "어지러운", "explain": "형용사"}], "blank": None},
    {"de": "Mir ist heiß / kalt.", "ko": "더워요 / 추워요.", "note": "같은 패턴 변형", "grammar": [], "blank": None},
    {"de": "Ich fühle mich nicht gut.", "ko": "기분이 좋지 않아요.", "note": "전반적 컨디션 표현", "grammar": [{"word": "fühle mich", "meaning": "느끼다", "explain": "sich fühlen"}], "blank": None}
])

# Einkaufen - variations
add_phrases('einkaufen', 'Im Geschäft', [
    {"de": "Ich suche ein Geschenk für meine Mutter.", "ko": "어머니 선물을 찾고 있어요.", "note": "선물 찾기", "grammar": [{"word": "ein Geschenk", "meaning": "선물 하나", "explain": "Geschenk(n) 4격"}, {"word": "für meine Mutter", "meaning": "어머니를 위해", "explain": "für + 4격"}], "blank": None},
    {"de": "Haben Sie das auch in Größe S?", "ko": "S사이즈도 있나요?", "note": "다른 사이즈 문의", "grammar": [], "blank": None},
    {"de": "Wo finde ich die Damenkleidung?", "ko": "여성복 어디 있나요?", "note": "코너 위치 문의", "grammar": [{"word": "die Damenkleidung", "meaning": "여성복", "explain": "Damen + Kleidung(f)"}], "blank": None},
    {"de": "Ich nehme das.", "ko": "이걸로 할게요.", "note": "결정 표현", "grammar": [{"word": "nehme", "meaning": "사다, 고르다", "explain": "nehmen 1인칭. 쇼핑에서 '구매하다'"}], "blank": None},
    {"de": "Ich überlege noch.", "ko": "좀 더 생각해볼게요.", "note": "보류 표현", "grammar": [{"word": "überlege", "meaning": "생각하다", "explain": "überlegen 1인칭"}], "blank": None}
])

# Arbeit - variations
add_phrases('arbeit', 'Über den Beruf sprechen', [
    {"de": "Ich arbeite in Teilzeit.", "ko": "시간제로 일해요.", "note": "고용 형태", "grammar": [{"word": "in Teilzeit", "meaning": "시간제로", "explain": "in + 명사"}], "blank": None},
    {"de": "Ich bin gerade arbeitslos und suche eine Stelle.", "ko": "현재 실직 상태이고 일자리를 찾고 있어요.", "note": "구직 중", "grammar": [{"word": "gerade", "meaning": "지금", "explain": "부사"}, {"word": "arbeitslos", "meaning": "실직한", "explain": "형용사"}], "blank": None},
    {"de": "Meine Kollegen sind sehr nett.", "ko": "동료들이 정말 친절해요.", "note": "동료 묘사", "grammar": [{"word": "Meine Kollegen", "meaning": "나의 동료들", "explain": "Kollege(m) 복수"}], "blank": None}
])

# Familie - variations
add_phrases('familie', 'Familienmitglieder', [
    {"de": "Ich bin ein Einzelkind.", "ko": "외동이에요.", "note": "외동 표현", "grammar": [{"word": "ein Einzelkind", "meaning": "외동", "explain": "Einzelkind(n)"}], "blank": None},
    {"de": "Mein älterer Bruder lebt in Tokio.", "ko": "형은 도쿄에 살아요.", "note": "형/오빠 표현", "grammar": [{"word": "Mein älterer Bruder", "meaning": "나의 형", "explain": "alt의 비교급 + Bruder(m)"}], "blank": None},
    {"de": "Meine jüngere Schwester ist noch in der Schule.", "ko": "여동생은 아직 학교 다녀요.", "note": "동생 표현", "grammar": [{"word": "Meine jüngere Schwester", "meaning": "나의 여동생", "explain": "jung 비교급"}, {"word": "in der Schule", "meaning": "학교에", "explain": "in + 3격"}], "blank": None}
])

# Add a new section to selbstvorstellung
for t in data:
    if t['id'] == 'selbstvorstellung':
        t['sections'].append({
            "title_de": "Wo waren Sie schon?",
            "title_ko": "어디 가본 적 있는지",
            "skill": "sprechen",
            "phrases": [
                {"de": "Ich war schon in Deutschland, Frankreich und Italien.", "ko": "독일, 프랑스, 이탈리아에 가본 적 있어요.", "note": "여행 경험", "grammar": [{"word": "war", "meaning": "있었다", "explain": "sein 과거형"}, {"word": "schon", "meaning": "이미", "explain": "부사. 경험 강조"}], "blank": None},
                {"de": "Ich habe noch nie in Japan gewohnt.", "ko": "일본에 산 적은 없어요.", "note": "부정 경험", "grammar": [{"word": "noch nie", "meaning": "아직 한 번도 안", "explain": "부정 강조"}, {"word": "gewohnt", "meaning": "살았다", "explain": "wohnen 과거분사. haben + P.P."}], "blank": None},
                {"de": "Letzten Sommer war ich in Spanien.", "ko": "지난 여름에 스페인에 갔었어요.", "note": "구체적 시기", "grammar": [{"word": "Letzten Sommer", "meaning": "지난 여름", "explain": "4격 시간 표현. der → den + 형용사 -en"}], "blank": None}
            ]
        })
        break

# Add more topics to Practice topic counts
# Tagesablauf - more variations
add_phrases('tagesablauf', 'Morgenroutine', [
    {"de": "Normalerweise stehe ich gegen 7 Uhr auf.", "ko": "보통 7시쯤 일어나요.", "note": "대략적 시간. gegen = ~경", "grammar": [{"word": "Normalerweise", "meaning": "보통", "explain": "부사. 문장 앞 → 도치"}, {"word": "gegen 7 Uhr", "meaning": "7시경", "explain": "gegen + 시각 = 대략"}], "blank": None},
    {"de": "Am Wochenende stehe ich später auf, so um 9 oder 10 Uhr.", "ko": "주말에는 9시나 10시쯤 더 늦게 일어나요.", "note": "주말 루틴 비교", "grammar": [{"word": "später", "meaning": "더 늦게", "explain": "spät 비교급"}, {"word": "so um", "meaning": "~쯤", "explain": "대략"}], "blank": None}
])

# Save
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'w', encoding='utf-8') as f:
    f.write('const PRACTICE_DATA = ')
    json.dump(data, f, ensure_ascii=False, indent=2)

total = sum(sum(len(s['phrases']) for s in t['sections']) for t in data)
print(f"After: {total} phrases")
print(f"Topics: {len(data)}")
