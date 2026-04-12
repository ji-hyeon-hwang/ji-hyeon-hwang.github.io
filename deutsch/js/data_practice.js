const PRACTICE_DATA = [
  {
    "id": "email-basics",
    "topic_de": "E-Mail Grundlagen",
    "topic_ko": "이메일 기본",
    "description_ko": "Goethe A2 Schreiben 대비. 이메일의 인사, 시작, 본문, 마무리 표현.",
    "sections": [
      {
        "title_de": "Anrede — Formal",
        "title_ko": "인사 — 격식체",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Sehr geehrte Frau Schmidt,",
            "ko": "슈미트 여사님께,",
            "note": "여성에게 보내는 격식체. 성(Nachname) 사용",
            "grammar": [
              {
                "word": "Sehr geehrte",
                "meaning": "매우 존경하는",
                "explain": "geehrt(존경받는)의 형용사 어미. 여성(Frau) → -e 어미"
              },
              {
                "word": "Frau",
                "meaning": "여사, ~씨(여성)",
                "explain": "여성 호칭. 결혼 여부 무관하게 사용"
              }
            ],
            "blank": null
          },
          {
            "de": "Sehr geehrter Herr Müller,",
            "ko": "뮐러 씨께,",
            "note": "남성에게 보내는 격식체",
            "grammar": [
              {
                "word": "geehrter",
                "meaning": "존경하는",
                "explain": "남성(Herr) → -er 어미 (1격 남성 강변화)"
              },
              {
                "word": "Herr",
                "meaning": "~씨(남성)",
                "explain": "남성 호칭"
              }
            ],
            "blank": null
          },
          {
            "de": "Sehr geehrte Damen und Herren,",
            "ko": "신사 숙녀 여러분께,",
            "note": "수신인 모를 때. 가장 격식적",
            "grammar": [
              {
                "word": "Damen",
                "meaning": "여성분들",
                "explain": "Dame(여성)의 복수형"
              },
              {
                "word": "Herren",
                "meaning": "남성분들",
                "explain": "Herr(남성)의 복수형"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Anrede — Informal",
        "title_ko": "인사 — 비격식체",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Liebe Anna,",
            "ko": "친애하는 ��나에게,",
            "note": "여성 친구/지인에게",
            "grammar": [
              {
                "word": "Liebe",
                "meaning": "친애하는",
                "explain": "lieb(사랑하는)의 여성형 어미 -e"
              }
            ],
            "blank": null
          },
          {
            "de": "Lieber Tom,",
            "ko": "친애하는 톰에게,",
            "note": "남성 친구/지인에게",
            "grammar": [
              {
                "word": "Lieber",
                "meaning": "친애하는",
                "explain": "lieb의 남성형 어미 -er (1격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Hallo Frau Meier,",
            "ko": "안녕하세요, 마이어 씨,",
            "note": "반격식. 아는 사람에게",
            "grammar": [],
            "blank": null
          },
          {
            "de": "Hallo zusammen,",
            "ko": "여러분 안녕,",
            "note": "여러 명에게 보낼 때",
            "grammar": [
              {
                "word": "zusammen",
                "meaning": "함께, 다 같이",
                "explain": "부사. '모두에게'의 의미로 사용"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Einleitung — Grund des Schreibens",
        "title_ko": "시작 — 이메일 쓰는 이유",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich schreibe Ihnen, weil ich eine Frage habe.",
            "ko": "질문이 있어서 메일 드립니다.",
            "note": "격식체. 가장 기본적인 이메일 시작",
            "grammar": [
              {
                "word": "Ihnen",
                "meaning": "당신에게",
                "explain": "Sie(당신)의 3격(Dativ). schreiben + Dat."
              },
              {
                "word": "weil",
                "meaning": "~때문에",
                "explain": "종속접속사. 부문장 동사(habe)가 끝으로"
              }
            ],
            "blank": {
              "word": "Ihnen",
              "position": "Ich schreibe ___, weil ich eine Frage habe.",
              "options": [
                "Ihnen",
                "Sie",
                "Ihr",
                "dir"
              ],
              "hint": "Sie의 3격은?"
            }
          },
          {
            "de": "Vielen Dank für Ihre Antwort.",
            "ko": "답변 감사합니다.",
            "note": "답장할 때 시작 표현",
            "grammar": [
              {
                "word": "Vielen Dank",
                "meaning": "대단히 감사",
                "explain": "viel(많은)의 4격 형태 + Dank(감사)"
              },
              {
                "word": "für",
                "meaning": "~에 대해",
                "explain": "전치사 + 4격(Akkusativ)"
              },
              {
                "word": "Ihre Antwort",
                "meaning": "당신의 답변",
                "explain": "Ihr(당신의) + Antwort(f). 4격이지만 여성명사는 형태 동일"
              }
            ],
            "blank": {
              "word": "für",
              "position": "Vielen Dank ___ Ihre Antwort.",
              "options": [
                "für",
                "über",
                "mit",
                "von"
              ],
              "hint": "감사의 대상에 쓰는 전치사는?"
            }
          },
          {
            "de": "Ich habe Ihre Anzeige gelesen und interessiere mich für die Wohnung.",
            "ko": "광고를 보고 그 집에 관심이 있어서요.",
            "note": "집/물건 광고에 답장할 때",
            "grammar": [
              {
                "word": "Ihre Anzeige",
                "meaning": "당신의 광고",
                "explain": "Ihr(당신의) + Anzeige(f, 광고)"
              },
              {
                "word": "gelesen",
                "meaning": "읽었다",
                "explain": "lesen(읽다)의 과거분사. haben + P.P. = 현재완료"
              },
              {
                "word": "interessiere mich für",
                "meaning": "~에 관심이 있다",
                "explain": "sich interessieren für + 4격. 재귀동사"
              }
            ],
            "blank": {
              "word": "für",
              "position": "Ich interessiere mich ___ die Wohnung.",
              "options": [
                "für",
                "an",
                "über",
                "auf"
              ],
              "hint": "sich interessieren + ? + Akk."
            }
          },
          {
            "de": "Ich schreibe dir, weil ich dich zu meiner Party einladen möchte.",
            "ko": "내 파티에 너를 초대하고 싶어서 편지해.",
            "note": "비격식. 초대 이메일",
            "grammar": [
              {
                "word": "dir",
                "meaning": "너에게",
                "explain": "du(너)의 3격(Dativ)"
              },
              {
                "word": "dich",
                "meaning": "너를",
                "explain": "du의 4격(Akkusativ)"
              },
              {
                "word": "einladen",
                "meaning": "초대하다",
                "explain": "분리동사(ein|laden). möchte 뒤에서 원형으로 문장 끝"
              },
              {
                "word": "möchte",
                "meaning": "~하고 싶다",
                "explain": "화법조동사. 본동사(einladen)는 문장 끝 원형"
              }
            ],
            "blank": {
              "word": "einladen",
              "position": "Ich möchte dich zu meiner Party ___.",
              "options": [
                "einladen",
                "eingeladen",
                "lade ein",
                "einlädt"
              ],
              "hint": "möchte 뒤에 동사 원형"
            }
          },
          {
            "de": "Danke für die Einladung!",
            "ko": "초대해줘서 고마워!",
            "note": "초대에 답장할 때 첫 문장",
            "grammar": [
              {
                "word": "für",
                "meaning": "~에 대해",
                "explain": "전치사 + 4격"
              },
              {
                "word": "die Einladung",
                "meaning": "초대",
                "explain": "여성명사. für + 4격이지만 여성은 형태 동일"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich möchte mich für den Deutschkurs anmelden.",
            "ko": "독일어 강좌에 등록하고 싶습니다.",
            "note": "강좌 등록 문의 이메일",
            "grammar": [
              {
                "word": "mich",
                "meaning": "나 자신을",
                "explain": "재귀대명사 4격. sich anmelden = 등록하다"
              },
              {
                "word": "für den Deutschkurs",
                "meaning": "독일어 강좌에",
                "explain": "für + 4격. der Kurs → den Kurs"
              },
              {
                "word": "anmelden",
                "meaning": "등록하다",
                "explain": "분리동사(an|melden). möchte 뒤 원형"
              }
            ],
            "blank": {
              "word": "den",
              "position": "Ich möchte mich für ___ Deutschkurs anmelden.",
              "options": [
                "den",
                "dem",
                "der",
                "das"
              ],
              "hint": "für + ? (남성 4격)"
            }
          },
          {
            "de": "Ich habe eine Bitte.",
            "ko": "부탁이 하나 있습니다.",
            "note": "요청 이메일 시작",
            "grammar": [
              {
                "word": "eine Bitte",
                "meaning": "하나의 부탁",
                "explain": "Bitte(f, 부탁). eine = 부정관사 여성 4격"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Hauptteil — Informationen geben/fragen",
        "title_ko": "본문 — 정보 전달/요청",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Können Sie mir bitte sagen, wann der Kurs beginnt?",
            "ko": "강좌가 언제 시작하는지 알려주실 수 있나요?",
            "note": "간접의문문으로 정중하게 묻기",
            "grammar": [
              {
                "word": "Können",
                "meaning": "~할 수 있다",
                "explain": "화법조동사. 의문문 → 동사가 맨 앞"
              },
              {
                "word": "mir",
                "meaning": "나에게",
                "explain": "ich의 3격(Dativ)"
              },
              {
                "word": "wann",
                "meaning": "언제",
                "explain": "의문사. 간접의문문에서 부문장 접속사 역할 → 동사(beginnt)가 끝으로"
              },
              {
                "word": "der Kurs",
                "meaning": "강좌",
                "explain": "남성명사 1격(주어)"
              }
            ],
            "blank": {
              "word": "wann",
              "position": "Können Sie mir sagen, ___ der Kurs beginnt?",
              "options": [
                "wann",
                "wenn",
                "als",
                "ob"
              ],
              "hint": "'언제'를 뜻하는 의문사는?"
            }
          },
          {
            "de": "Ich möchte gerne wissen, wie viel der Kurs kostet.",
            "ko": "강좌 비용이 얼마인지 알고 싶습니다.",
            "note": "비용 문의",
            "grammar": [
              {
                "word": "gerne",
                "meaning": "기꺼이",
                "explain": "부사. möchte를 더 정중하게"
              },
              {
                "word": "wissen",
                "meaning": "알다",
                "explain": "möchte 뒤 원형"
              },
              {
                "word": "wie viel",
                "meaning": "얼마나",
                "explain": "의문사. 간접의문문 → 동사(kostet)가 끝으로"
              }
            ],
            "blank": {
              "word": "wie viel",
              "position": "Ich möchte wissen, ___ der Kurs kostet.",
              "options": [
                "wie viel",
                "was",
                "wie",
                "wann"
              ],
              "hint": "'얼마'를 묻는 의문사는?"
            }
          },
          {
            "de": "Ich komme aus Südkorea und lerne seit zwei Monaten Deutsch.",
            "ko": "저는 한국에서 왔고 두 달째 독일어를 배우고 있습니다.",
            "note": "자기소개 겸 배경 설명",
            "grammar": [
              {
                "word": "aus",
                "meaning": "~에서(출신)",
                "explain": "전치사 + 3격. 출신 국가"
              },
              {
                "word": "seit",
                "meaning": "~이래로",
                "explain": "전치사 + 3격. 시간 표현"
              },
              {
                "word": "zwei Monaten",
                "meaning": "두 달",
                "explain": "Monat(m)의 3격 복수. seit + Dat."
              }
            ],
            "blank": {
              "word": "seit",
              "position": "Ich lerne ___ zwei Monaten Deutsch.",
              "options": [
                "seit",
                "vor",
                "für",
                "ab"
              ],
              "hint": "'~이래로 계속'을 뜻하는 전치사는?"
            }
          },
          {
            "de": "Könnten Sie mir bitte Informationen über den Kurs schicken?",
            "ko": "강좌에 대한 정보를 보내주실 수 있을까요?",
            "note": "Konjunktiv II로 더 정중한 요청",
            "grammar": [
              {
                "word": "Könnten",
                "meaning": "~할 수 있으시겠습니까",
                "explain": "können의 접속법2식(Konj.II). 더 정중한 표현"
              },
              {
                "word": "über den Kurs",
                "meaning": "강좌에 대한",
                "explain": "über + 4격. der Kurs → den Kurs"
              },
              {
                "word": "schicken",
                "meaning": "보내다",
                "explain": "본동사. 조동사 뒤 → 문장 끝 원형"
              }
            ],
            "blank": {
              "word": "über",
              "position": "Könnten Sie mir Informationen ___ den Kurs schicken?",
              "options": [
                "über",
                "für",
                "von",
                "mit"
              ],
              "hint": "'~에 대한' 정보를 요청할 때 쓰는 전치사는?"
            }
          },
          {
            "de": "Leider kann ich am Montag nicht kommen.",
            "ko": "안타깝지만 월요일에 갈 수 없습니다.",
            "note": "불가능 사유 전달",
            "grammar": [
              {
                "word": "Leider",
                "meaning": "안타깝게도",
                "explain": "부사. 문장 맨 앞에 오면 동사(kann)가 두 번째로"
              },
              {
                "word": "am Montag",
                "meaning": "월요일에",
                "explain": "an + dem = am. 요일 앞에 am 사용"
              },
              {
                "word": "nicht",
                "meaning": "~않다",
                "explain": "부정어. kommen 앞에 위치"
              }
            ],
            "blank": {
              "word": "am",
              "position": "Leider kann ich ___ Montag nicht kommen.",
              "options": [
                "am",
                "im",
                "um",
                "an dem"
              ],
              "hint": "요일 앞에 쓰는 전치사+관사 축약형은?"
            }
          },
          {
            "de": "Ich würde mich freuen, wenn Sie mir antworten.",
            "ko": "답장해주시면 기쁘겠습니다.",
            "note": "정중한 마무리 전 표현",
            "grammar": [
              {
                "word": "würde",
                "meaning": "~할 텐데",
                "explain": "werden의 접속법2식. 정중한 표현"
              },
              {
                "word": "mich freuen",
                "meaning": "기쁘다",
                "explain": "sich freuen = 기뻐하다. 재귀대명사 4격"
              },
              {
                "word": "wenn",
                "meaning": "만약 ~하면",
                "explain": "조건 접속사. 부문장 동사(antworten)가 끝으로"
              }
            ],
            "blank": {
              "word": "wenn",
              "position": "Ich würde mich freuen, ___ Sie mir antworten.",
              "options": [
                "wenn",
                "weil",
                "dass",
                "ob"
              ],
              "hint": "'만약 ~하면'을 뜻하는 접속사는?"
            }
          }
        ]
      },
      {
        "title_de": "Schluss — Abschluss & Grußformel",
        "title_ko": "마무리 — 끝인사",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Mit freundlichen Grüßen",
            "ko": "경의를 담아 (가장 격식적)",
            "note": "공식 이메일 마무리. 쉼표 안 씀",
            "grammar": [
              {
                "word": "Mit",
                "meaning": "~와 함께",
                "explain": "전치사 + 3격"
              },
              {
                "word": "freundlichen",
                "meaning": "친절한",
                "explain": "형용사 3격 복수 어미 -en"
              },
              {
                "word": "Grüßen",
                "meaning": "인사들",
                "explain": "Gruß(m)의 3격 복수"
              }
            ],
            "blank": null
          },
          {
            "de": "Viele Grüße",
            "ko": "안부 전합니다",
            "note": "반격식. 아는 사람에게",
            "grammar": [
              {
                "word": "Viele",
                "meaning": "많은",
                "explain": "4격 복수"
              },
              {
                "word": "Grüße",
                "meaning": "인사들",
                "explain": "Gruß의 복수형"
              }
            ],
            "blank": null
          },
          {
            "de": "Liebe Grüße",
            "ko": "다정한 안부를 (비격식)",
            "note": "친한 사람에게",
            "grammar": [],
            "blank": null
          },
          {
            "de": "Bis bald!",
            "ko": "곧 만나!",
            "note": "매우 비격식. 친구에게",
            "grammar": [
              {
                "word": "Bis",
                "meaning": "~까지",
                "explain": "전치사"
              },
              {
                "word": "bald",
                "meaning": "곧",
                "explain": "부사"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich freue mich auf Ihre Antwort.",
            "ko": "답장 기다리겠습니다.",
            "note": "마무리 직전 문장. 격식체",
            "grammar": [
              {
                "word": "freue mich auf",
                "meaning": "~을 기대하다",
                "explain": "sich freuen auf + 4격 = 미래의 일을 기대"
              },
              {
                "word": "Ihre Antwort",
                "meaning": "당신의 답변",
                "explain": "Ihr(당신의) + Antwort(f, 답변). 4격"
              }
            ],
            "blank": {
              "word": "auf",
              "position": "Ich freue mich ___ Ihre Antwort.",
              "options": [
                "auf",
                "über",
                "für",
                "an"
              ],
              "hint": "sich freuen ___ = 미래의 일을 기대하다"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "termine",
    "topic_de": "Termine vereinbaren",
    "topic_ko": "약속 잡기",
    "description_ko": "병원, 미용실, 관공서 등 약속 요청/제안/확인/변경. 시간과 날짜 표현 포함.",
    "sections": [
      {
        "title_de": "Termin anfragen",
        "title_ko": "약속 요청",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich möchte einen Termin vereinbaren.",
            "ko": "약속을 잡고 싶습니다.",
            "note": "가장 기본적인 약속 요청 표현",
            "grammar": [
              {
                "word": "einen Termin",
                "meaning": "하나의 약속",
                "explain": "Termin(m). einen = 남성 4격 부정관사"
              },
              {
                "word": "vereinbaren",
                "meaning": "약속하다, 잡다",
                "explain": "möchte 뒤 원형"
              }
            ],
            "blank": {
              "word": "einen",
              "position": "Ich möchte ___ Termin vereinbaren.",
              "options": [
                "einen",
                "einem",
                "einer",
                "ein"
              ],
              "hint": "남성명사 4격 부정관사는?"
            }
          },
          {
            "de": "Ich hätte gerne einen Termin bei Dr. Schmidt.",
            "ko": "슈미트 박사에게 예약하고 싶습니다.",
            "note": "병원 예약. hätte = haben의 Konj.II",
            "grammar": [
              {
                "word": "hätte",
                "meaning": "갖고 싶다",
                "explain": "haben의 접속법2식. 정중한 표현"
              },
              {
                "word": "gerne",
                "meaning": "기꺼이",
                "explain": "부사. 요청을 부드럽게"
              },
              {
                "word": "bei",
                "meaning": "~에게서",
                "explain": "전치사 + 3격. 사람/장소 앞에"
              }
            ],
            "blank": {
              "word": "bei",
              "position": "Ich hätte gerne einen Termin ___ Dr. Schmidt.",
              "options": [
                "bei",
                "mit",
                "zu",
                "von"
              ],
              "hint": "의사에게 예약할 때 쓰는 전치사는?"
            }
          },
          {
            "de": "Haben Sie diese Woche noch einen freien Termin?",
            "ko": "이번 주에 빈 시간이 있으신가요?",
            "note": "빈 시간 문의",
            "grammar": [
              {
                "word": "diese Woche",
                "meaning": "이번 주",
                "explain": "dies-(이) + Woche(f). 4격 시간표현(관사 없이)"
              },
              {
                "word": "noch",
                "meaning": "아직, 혹시",
                "explain": "부사. '혹시 남아있는' 뉘앙스"
              },
              {
                "word": "freien",
                "meaning": "비어있는",
                "explain": "frei의 형용사 어미. einen + 형용사 → -en"
              }
            ],
            "blank": null
          },
          {
            "de": "Wann haben Sie Zeit?",
            "ko": "언제 시간이 되세요?",
            "note": "상대 시간 문의",
            "grammar": [
              {
                "word": "Wann",
                "meaning": "언제",
                "explain": "의문사. 시간을 묻는다"
              },
              {
                "word": "Zeit",
                "meaning": "시간",
                "explain": "여성명사. 관사 없이 '시간이 있다'"
              }
            ],
            "blank": null
          },
          {
            "de": "Kann ich morgen um 10 Uhr kommen?",
            "ko": "내일 10시에 갈 수 있을까요?",
            "note": "구체적 시간 제안",
            "grammar": [
              {
                "word": "morgen",
                "meaning": "내일",
                "explain": "부사. 전치사 없이 사용"
              },
              {
                "word": "um 10 Uhr",
                "meaning": "10시에",
                "explain": "um + 시각. 정확한 시간 표현"
              }
            ],
            "blank": {
              "word": "um",
              "position": "Kann ich morgen ___ 10 Uhr kommen?",
              "options": [
                "um",
                "am",
                "in",
                "an"
              ],
              "hint": "시각 앞에 쓰는 전치사는?"
            }
          }
        ]
      },
      {
        "title_de": "Termin vorschlagen",
        "title_ko": "시간 제안",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Wie wäre es am Dienstag um 14 Uhr?",
            "ko": "화요일 14시는 어때요?",
            "note": "시간 제안 표현",
            "grammar": [
              {
                "word": "Wie wäre es",
                "meaning": "어떨까요",
                "explain": "sein의 접속법2식(wäre). 정중한 제안"
              },
              {
                "word": "am Dienstag",
                "meaning": "화요일에",
                "explain": "an + dem = am. 요일 앞에 am"
              },
              {
                "word": "um 14 Uhr",
                "meaning": "14시에",
                "explain": "um + 시각"
              }
            ],
            "blank": {
              "word": "am",
              "position": "Wie wäre es ___ Dienstag um 14 Uhr?",
              "options": [
                "am",
                "im",
                "um",
                "an"
              ],
              "hint": "요일 앞 전치사+관사 축약은?"
            }
          },
          {
            "de": "Passt Ihnen Donnerstag um 9 Uhr?",
            "ko": "목요일 9시 괜찮으세요?",
            "note": "passen + Dativ = ~에게 맞다",
            "grammar": [
              {
                "word": "Passt",
                "meaning": "맞다, 괜찮다",
                "explain": "passen(맞다). 3격 목적어를 취함"
              },
              {
                "word": "Ihnen",
                "meaning": "당신에게",
                "explain": "Sie의 3격(Dativ)"
              }
            ],
            "blank": {
              "word": "Ihnen",
              "position": "Passt ___ Donnerstag um 9 Uhr?",
              "options": [
                "Ihnen",
                "Sie",
                "Ihr",
                "dir"
              ],
              "hint": "Sie의 3격은?"
            }
          },
          {
            "de": "Ich habe am Freitagnachmittag Zeit.",
            "ko": "금요일 오후에 시간이 있어요.",
            "note": "자신의 가능 시간 알려주기",
            "grammar": [
              {
                "word": "am Freitagnachmittag",
                "meaning": "금요일 오후에",
                "explain": "am + 요일+시간대. 합성어로 한 단어"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich kann nur vormittags.",
            "ko": "오전에만 가능해요.",
            "note": "시간 제한 표현",
            "grammar": [
              {
                "word": "nur",
                "meaning": "오직, ~만",
                "explain": "부사. 제한"
              },
              {
                "word": "vormittags",
                "meaning": "오전에",
                "explain": "부사. 시간대 표현. -s 어미 = 반복적"
              }
            ],
            "blank": null
          },
          {
            "de": "Von Montag bis Mittwoch bin ich nicht da.",
            "ko": "월요일부터 수요일까지 저는 없습니다.",
            "note": "부재 기간 표현",
            "grammar": [
              {
                "word": "Von ... bis ...",
                "meaning": "~부터 ~까지",
                "explain": "기간 표현. 요일에는 관사 없이"
              },
              {
                "word": "bin ich nicht da",
                "meaning": "나는 없다",
                "explain": "부사(Von~)가 맨 앞 → 동사(bin)가 두 번째(도치)"
              }
            ],
            "blank": {
              "word": "bis",
              "position": "Von Montag ___ Mittwoch bin ich nicht da.",
              "options": [
                "bis",
                "nach",
                "zu",
                "um"
              ],
              "hint": "'~까지'를 뜻하는 전치사는?"
            }
          }
        ]
      },
      {
        "title_de": "Termin bestätigen",
        "title_ko": "약속 확인",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ja, das passt mir gut.",
            "ko": "네, 그 시간 괜찮아요.",
            "note": "약속 수락",
            "grammar": [
              {
                "word": "passt",
                "meaning": "맞다",
                "explain": "passen + 3격"
              },
              {
                "word": "mir",
                "meaning": "나에게",
                "explain": "ich의 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Dann treffen wir uns am Samstag um 15 Uhr.",
            "ko": "그럼 토요일 15시에 만나요.",
            "note": "약속 확정",
            "grammar": [
              {
                "word": "treffen uns",
                "meaning": "우리가 만나다",
                "explain": "sich treffen = 만나다. uns = 재귀대명사 4격"
              },
              {
                "word": "am Samstag",
                "meaning": "토요일에",
                "explain": "am + 요일"
              },
              {
                "word": "um 15 Uhr",
                "meaning": "15시에",
                "explain": "um + 시각"
              }
            ],
            "blank": {
              "word": "uns",
              "position": "Dann treffen wir ___ am Samstag um 15 Uhr.",
              "options": [
                "uns",
                "sich",
                "euch",
                "mich"
              ],
              "hint": "wir의 재귀대명사는?"
            }
          },
          {
            "de": "Alles klar, ich komme um 10 Uhr.",
            "ko": "알겠어요, 10시에 갈게요.",
            "note": "확인 + 시간 명시",
            "grammar": [
              {
                "word": "Alles klar",
                "meaning": "다 알겠다",
                "explain": "관용 표현. '확인했다'는 의미"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bestätige den Termin am 15. März um 11 Uhr.",
            "ko": "3월 15일 11시 약속을 확인합니다.",
            "note": "격식체 확인",
            "grammar": [
              {
                "word": "bestätige",
                "meaning": "확인하다",
                "explain": "bestätigen의 1인칭 현재형"
              },
              {
                "word": "den Termin",
                "meaning": "그 약속을",
                "explain": "Termin(m)의 4격. den = 남성 4격 정관사"
              },
              {
                "word": "am 15. März",
                "meaning": "3월 15일에",
                "explain": "am + 날짜. 날짜 앞에 am 사용"
              }
            ],
            "blank": {
              "word": "den",
              "position": "Ich bestätige ___ Termin am 15. März.",
              "options": [
                "den",
                "dem",
                "der",
                "das"
              ],
              "hint": "남성 4격 정관사는?"
            }
          }
        ]
      },
      {
        "title_de": "Termin absagen / verschieben",
        "title_ko": "약속 취소 / 변경",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Leider muss ich den Termin absagen.",
            "ko": "안타깝지만 약속을 취소해야 합니다.",
            "note": "약속 취소",
            "grammar": [
              {
                "word": "muss",
                "meaning": "~해야 한다",
                "explain": "화법조동사 müssen의 1인칭"
              },
              {
                "word": "den Termin",
                "meaning": "그 약속을",
                "explain": "남성 4격"
              },
              {
                "word": "absagen",
                "meaning": "취소하다",
                "explain": "분리동사(ab|sagen). müssen 뒤 원형"
              }
            ],
            "blank": {
              "word": "absagen",
              "position": "Leider muss ich den Termin ___.",
              "options": [
                "absagen",
                "abgesagt",
                "sage ab",
                "absagte"
              ],
              "hint": "müssen 뒤에는 동사 ?"
            }
          },
          {
            "de": "Können wir den Termin auf nächste Woche verschieben?",
            "ko": "약속을 다음 주로 미룰 수 있을까요?",
            "note": "약속 변경 요청",
            "grammar": [
              {
                "word": "auf nächste Woche",
                "meaning": "다음 주로",
                "explain": "verschieben auf + 4격 = ~로 미루다"
              },
              {
                "word": "verschieben",
                "meaning": "미루다, 연기하다",
                "explain": "비분리동사. können 뒤 원형"
              }
            ],
            "blank": {
              "word": "auf",
              "position": "Können wir den Termin ___ nächste Woche verschieben?",
              "options": [
                "auf",
                "an",
                "in",
                "nach"
              ],
              "hint": "verschieben + ? = ~로 미루다"
            }
          },
          {
            "de": "Es tut mir leid, aber ich bin an dem Tag leider verhindert.",
            "ko": "죄송하지만 그날은 사정이 있어서요.",
            "note": "정중한 거절 사유",
            "grammar": [
              {
                "word": "Es tut mir leid",
                "meaning": "죄송합니다",
                "explain": "관용표현. mir = 3격"
              },
              {
                "word": "an dem Tag",
                "meaning": "그날에",
                "explain": "an + 3격. dem = 남성/중성 3격 정관사"
              },
              {
                "word": "verhindert",
                "meaning": "사정이 있는",
                "explain": "형용사/과거분사. '참석이 불가능한'"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich habe leider schon einen anderen Termin.",
            "ko": "안타깝지만 이미 다른 약속이 있어요.",
            "note": "이미 약속이 있을 때",
            "grammar": [
              {
                "word": "schon",
                "meaning": "이미",
                "explain": "부사"
              },
              {
                "word": "einen anderen Termin",
                "meaning": "다른 약속 하나",
                "explain": "einen(남성4격) + anderen(다른, 형용사 -en 어미)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Uhrzeit & Datum",
        "title_ko": "시간 / 날짜 표현",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Es ist Viertel nach drei.",
            "ko": "3시 15분이에요.",
            "note": "시간 표현: 15분 지남",
            "grammar": [
              {
                "word": "Viertel",
                "meaning": "15분(4분의 1)",
                "explain": "중성명사. 시간에서 1/4 = 15분"
              },
              {
                "word": "nach",
                "meaning": "~후, 지나서",
                "explain": "전치사. 시각 표현에서 '~시 지나서'"
              }
            ],
            "blank": null
          },
          {
            "de": "Es ist halb vier.",
            "ko": "3시 30분이에요.",
            "note": "주의! halb vier = 4시 반이 아님. 3시 반",
            "grammar": [
              {
                "word": "halb",
                "meaning": "반",
                "explain": "독일어에서 halb + 숫자 = 그 시각의 30분 전"
              }
            ],
            "blank": null
          },
          {
            "de": "Der Termin ist am fünfzehnten März.",
            "ko": "약속은 3월 15일입니다.",
            "note": "날짜: 서수 + -ten/-sten 어미",
            "grammar": [
              {
                "word": "am fünfzehnten",
                "meaning": "15일에",
                "explain": "am + 서수(ordinal). fünfzehn → fünfzehnten (3격)"
              },
              {
                "word": "März",
                "meaning": "3월",
                "explain": "달(Monat)은 관사 ���이"
              }
            ],
            "blank": null
          },
          {
            "de": "Wir treffen uns um halb zwei.",
            "ko": "1시 30분에 만나요.",
            "note": "halb zwei = 1:30 (2시의 반)",
            "grammar": [
              {
                "word": "um",
                "meaning": "~시에",
                "explain": "정확한 시각 앞에"
              },
              {
                "word": "halb zwei",
                "meaning": "1시 30분",
                "explain": "2시의 '반' = 1:30"
              }
            ],
            "blank": null
          },
          {
            "de": "Der Laden öffnet von 9 bis 18 Uhr.",
            "ko": "가게는 9시부터 18시까지 열어요.",
            "note": "영업시간 표현",
            "grammar": [
              {
                "word": "von ... bis ...",
                "meaning": "~부터 ~까지",
                "explain": "시간 범위 표현"
              },
              {
                "word": "öffnet",
                "meaning": "연다, 영업하다",
                "explain": "öffnen(열다)의 3인칭 단수"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin vom ersten bis zum dritten April im Urlaub.",
            "ko": "4월 1일부터 3일까지 휴가입니다.",
            "note": "기간 표현: vom(von+dem) ~ bis zum(bis+zu+dem)",
            "grammar": [
              {
                "word": "vom ersten",
                "meaning": "1일부터",
                "explain": "von + dem = vom. erst → ersten (3격 서수)"
              },
              {
                "word": "bis zum dritten",
                "meaning": "3일까지",
                "explain": "bis zu + dem = bis zum. dritt → dritten"
              },
              {
                "word": "im Urlaub",
                "meaning": "휴가 중",
                "explain": "in + dem = im. 상태 표현"
              }
            ],
            "blank": {
              "word": "vom",
              "position": "Ich bin ___ ersten bis zum dritten April im Urlaub.",
              "options": [
                "vom",
                "von",
                "am",
                "im"
              ],
              "hint": "von + dem의 축약형은?"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "einladung",
    "topic_de": "Einladungen",
    "topic_ko": "초대 수락 / 거절",
    "description_ko": "파티, 생일, 행사 등 초대에 답장하기. 수락, 거절, 대안 제시.",
    "sections": [
      {
        "title_de": "Einladung annehmen",
        "title_ko": "초대 수락",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Vielen Dank für die Einladung! Ich komme sehr gerne.",
            "ko": "초대 감사합니다! 기꺼이 갈게요.",
            "note": "가장 일반적인 수락",
            "grammar": [
              {
                "word": "für die Einladung",
                "meaning": "초대에 대해",
                "explain": "für + 4격. die Einladung(f) → 4격 동일"
              },
              {
                "word": "gerne",
                "meaning": "기꺼이",
                "explain": "부사. sehr gerne = 매우 기꺼이"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich freue mich schon auf die Party!",
            "ko": "파티가 벌써 기대돼!",
            "note": "비격식. 기대 표현",
            "grammar": [
              {
                "word": "freue mich auf",
                "meaning": "~을 기대하다",
                "explain": "sich freuen auf + 4격 = 앞으로 있을 일을 기대"
              },
              {
                "word": "schon",
                "meaning": "벌써",
                "explain": "부사. 기대감 강조"
              },
              {
                "word": "die Party",
                "meaning": "파티",
                "explain": "4격. auf + Akk."
              }
            ],
            "blank": {
              "word": "auf",
              "position": "Ich freue mich schon ___ die Party!",
              "options": [
                "auf",
                "über",
                "für",
                "an"
              ],
              "hint": "sich freuen ___ + Akk. = 기대하다"
            }
          },
          {
            "de": "Ja, ich bin dabei!",
            "ko": "응, 나도 갈게!",
            "note": "매우 비격식. 친구에게",
            "grammar": [
              {
                "word": "dabei",
                "meaning": "거기에 함께",
                "explain": "da(거기) + bei(~에). '참여한다'는 의미"
              }
            ],
            "blank": null
          },
          {
            "de": "Soll ich etwas mitbringen?",
            "ko": "뭘 좀 가져갈까?",
            "note": "파티에 뭘 가져갈지 묻기",
            "grammar": [
              {
                "word": "Soll",
                "meaning": "~할까?",
                "explain": "sollen(~해야 하다). 제안/의무를 물을 때"
              },
              {
                "word": "etwas",
                "meaning": "무언가",
                "explain": "부정대명사"
              },
              {
                "word": "mitbringen",
                "meaning": "가져오다",
                "explain": "분리동사(mit|bringen). soll 뒤 원형"
              }
            ],
            "blank": {
              "word": "mitbringen",
              "position": "Soll ich etwas ___?",
              "options": [
                "mitbringen",
                "mitgebracht",
                "bringe mit",
                "mitbringt"
              ],
              "hint": "soll 뒤에는 동사 ?"
            }
          },
          {
            "de": "Ich bringe einen Kuchen mit.",
            "ko": "케이크를 가져갈게.",
            "note": "가져갈 것 알려주기",
            "grammar": [
              {
                "word": "bringe ... mit",
                "meaning": "가져가다",
                "explain": "분리동사 mitbringen. 현재형에서 분리: bringe + mit"
              },
              {
                "word": "einen Kuchen",
                "meaning": "케이크 하나를",
                "explain": "Kuchen(m) 4격. einen = 남성 4격"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Einladung ablehnen",
        "title_ko": "초대 거절",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Danke für die Einladung, aber leider kann ich nicht kommen.",
            "ko": "초대 고마워, 하지만 안타깝게도 갈 수 없어.",
            "note": "정중한 거절의 기본 형태",
            "grammar": [
              {
                "word": "aber",
                "meaning": "하지만",
                "explain": "등위접속사. 앞뒤 문장 연결"
              },
              {
                "word": "leider",
                "meaning": "안타깝게도",
                "explain": "부사"
              },
              {
                "word": "kann ... nicht",
                "meaning": "~할 수 없다",
                "explain": "können + nicht. 부정"
              }
            ],
            "blank": null
          },
          {
            "de": "Es tut mir wirklich leid, aber ich habe an dem Tag schon etwas vor.",
            "ko": "정말 죄송하지만 그날 이미 약속이 있어요.",
            "note": "사유 설명 포함 거절",
            "grammar": [
              {
                "word": "an dem Tag",
                "meaning": "그날에",
                "explain": "an + 3격. dem = 남성 3격 정관사"
              },
              {
                "word": "habe ... vor",
                "meaning": "계획이 있다",
                "explain": "분리동사 vorhaben. '계획이 있다'"
              }
            ],
            "blank": {
              "word": "vor",
              "position": "Ich habe an dem Tag schon etwas ___.",
              "options": [
                "vor",
                "an",
                "auf",
                "mit"
              ],
              "hint": "vorhaben(계획이 있다)의 분리 전철은?"
            }
          },
          {
            "de": "Ich muss leider arbeiten.",
            "ko": "안타깝게도 일을 해야 해.",
            "note": "업무 사유",
            "grammar": [
              {
                "word": "muss",
                "meaning": "~해야 한다",
                "explain": "müssen의 1인칭"
              },
              {
                "word": "arbeiten",
                "meaning": "일하다",
                "explain": "muss 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin leider nicht in der Stadt.",
            "ko": "안타깝게도 도시에 없을 거야.",
            "note": "부재 사유",
            "grammar": [
              {
                "word": "in der Stadt",
                "meaning": "도시에",
                "explain": "in + 3격(위치). die Stadt → der Stadt(3격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Schade, dass ich nicht kommen kann!",
            "ko": "못 가서 아쉽다!",
            "note": "유감 표현",
            "grammar": [
              {
                "word": "Schade",
                "meaning": "아쉽다",
                "explain": "형용사/감탄사"
              },
              {
                "word": "dass",
                "meaning": "~라는 것이",
                "explain": "종속접속사. 동사(kann)가 문장 끝으로"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Gegenvorschlag",
        "title_ko": "대안 제시",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Können wir uns vielleicht an einem anderen Tag treffen?",
            "ko": "혹시 다른 날 만날 수 있을까?",
            "note": "대안 날짜 요청",
            "grammar": [
              {
                "word": "uns",
                "meaning": "우리를/우리끼리",
                "explain": "재귀대명사. sich treffen = 만나다"
              },
              {
                "word": "vielleicht",
                "meaning": "혹시, 아마",
                "explain": "부사. 요청을 부드럽게"
              },
              {
                "word": "an einem anderen Tag",
                "meaning": "다른 날에",
                "explain": "an + 3격. einem(남성3격) + anderen(다른) + Tag(m)"
              }
            ],
            "blank": {
              "word": "einem",
              "position": "Können wir uns an ___ anderen Tag treffen?",
              "options": [
                "einem",
                "einen",
                "einer",
                "ein"
              ],
              "hint": "an + 남성 3격 부정관사는?"
            }
          },
          {
            "de": "Wie wäre es nächste Woche?",
            "ko": "다음 주는 어때?",
            "note": "대안 시간 제안",
            "grammar": [
              {
                "word": "Wie wäre es",
                "meaning": "어떨까요",
                "explain": "wäre = sein의 접속법2식. 정중한 제안"
              }
            ],
            "blank": null
          },
          {
            "de": "Vielleicht können wir uns danach treffen?",
            "ko": "그 이후에 만날 수 있을까?",
            "note": "이후 시간 제안",
            "grammar": [
              {
                "word": "danach",
                "meaning": "그 후에",
                "explain": "부사. da(그것) + nach(후에)"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "beschwerde",
    "topic_de": "Beschwerden & Bitten",
    "topic_ko": "불만 / 요청",
    "description_ko": "상품 불량, 서비스 불만, 정중한 요청 표현. Schreiben Teil 2에 자주 출제.",
    "sections": [
      {
        "title_de": "Problem beschreiben",
        "title_ko": "문제 설명",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich habe ein Problem mit meiner Bestellung.",
            "ko": "주문에 문제가 있습니다.",
            "note": "불만 이메일 시작",
            "grammar": [
              {
                "word": "ein Problem",
                "meaning": "문제 하나",
                "explain": "Problem(n). ein = 중성 4격"
              },
              {
                "word": "mit meiner Bestellung",
                "meaning": "나의 주문에",
                "explain": "mit + 3격. meine Bestellung(f) → meiner(3격)"
              }
            ],
            "blank": {
              "word": "meiner",
              "position": "Ich habe ein Problem mit ___ Bestellung.",
              "options": [
                "meiner",
                "meine",
                "meinem",
                "meinen"
              ],
              "hint": "mit + 여성 3격 소유관사는?"
            }
          },
          {
            "de": "Das Produkt ist leider kaputt angekommen.",
            "ko": "안타깝게도 제품이 파손된 상태로 도착했습니다.",
            "note": "파손 신고",
            "grammar": [
              {
                "word": "kaputt",
                "meaning": "고장난, 파손된",
                "explain": "형용사. 상태 보어"
              },
              {
                "word": "angekommen",
                "meaning": "도착한",
                "explain": "ankommen(도착하다)의 과거분사. ist + P.P. = 현재완료(sein 동사)"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich habe das falsche Produkt bekommen.",
            "ko": "잘못된 제품을 받았습니다.",
            "note": "오배송 신고",
            "grammar": [
              {
                "word": "das falsche Produkt",
                "meaning": "잘못된 제품",
                "explain": "das + falsche(형용사 -e 어미) + Produkt(n)"
              },
              {
                "word": "bekommen",
                "meaning": "받다",
                "explain": "habe + P.P.(bekommen) = 현재완료"
              }
            ],
            "blank": null
          },
          {
            "de": "Die Rechnung stimmt nicht.",
            "ko": "청구서가 맞지 않습니다.",
            "note": "금액 오류",
            "grammar": [
              {
                "word": "Die Rechnung",
                "meaning": "청구서",
                "explain": "여성명사 1격(주어)"
              },
              {
                "word": "stimmt nicht",
                "meaning": "맞지 않다",
                "explain": "stimmen(맞다) + nicht(부정)"
              }
            ],
            "blank": null
          },
          {
            "de": "Die Waschmaschine funktioniert nicht mehr.",
            "ko": "세탁기가 더 이상 작동하지 않습니다.",
            "note": "기기 고장 신고",
            "grammar": [
              {
                "word": "funktioniert",
                "meaning": "작동하다",
                "explain": "funktionieren의 3인칭"
              },
              {
                "word": "nicht mehr",
                "meaning": "더 이상 ~않다",
                "explain": "부정 + mehr. '예전에는 됐지만 이제 안 됨'"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Lösung fordern / bitten",
        "title_ko": "해결 요청",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich möchte das Produkt umtauschen.",
            "ko": "제품을 교환하고 싶습니다.",
            "note": "교환 요청",
            "grammar": [
              {
                "word": "umtauschen",
                "meaning": "교환하다",
                "explain": "분리동사(um|tauschen). möchte 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Können Sie mir bitte das Geld zurückgeben?",
            "ko": "돈을 환불해주실 수 있나요?",
            "note": "환불 요청",
            "grammar": [
              {
                "word": "das Geld",
                "meaning": "돈을",
                "explain": "Geld(n) 4격"
              },
              {
                "word": "zurückgeben",
                "meaning": "돌려주다",
                "explain": "분리동사(zurück|geben). können 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bitte Sie, das Problem so schnell wie möglich zu lösen.",
            "ko": "가능한 한 빨리 문제를 해결해주시길 부탁드립니다.",
            "note": "격식체 해결 촉구",
            "grammar": [
              {
                "word": "bitte",
                "meaning": "부탁하다",
                "explain": "bitten + Akk. + zu + Inf."
              },
              {
                "word": "so schnell wie möglich",
                "meaning": "가능한 한 빨리",
                "explain": "관용표현. so ... wie möglich = as ... as possible"
              },
              {
                "word": "zu lösen",
                "meaning": "해결하는 것을",
                "explain": "zu + 동사원형 = 부정사구"
              }
            ],
            "blank": {
              "word": "zu",
              "position": "Ich bitte Sie, das Problem ___ lösen.",
              "options": [
                "zu",
                "um",
                "für",
                "von"
              ],
              "hint": "bitten + Akk. + ? + Infinitiv"
            }
          },
          {
            "de": "Könnten Sie bitte einen Techniker schicken?",
            "ko": "기술자를 보내주실 수 있을까요?",
            "note": "수리 요청",
            "grammar": [
              {
                "word": "Könnten",
                "meaning": "~해주실 수 있을까요",
                "explain": "können의 접속법2식. 가장 정중한 요청"
              },
              {
                "word": "einen Techniker",
                "meaning": "기술자 한 명을",
                "explain": "Techniker(m) 4격. einen = 남성 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich erwarte Ihre Antwort bis zum Ende der Woche.",
            "ko": "이번 주 말까지 답변을 기다리겠습니다.",
            "note": "기한 명시",
            "grammar": [
              {
                "word": "erwarte",
                "meaning": "기대하다",
                "explain": "erwarten의 1인칭"
              },
              {
                "word": "bis zum Ende",
                "meaning": "끝까지",
                "explain": "bis zu + 3격. zum = zu + dem"
              },
              {
                "word": "der Woche",
                "meaning": "그 주의",
                "explain": "Woche(f)의 2격(Genitiv)"
              }
            ],
            "blank": {
              "word": "zum",
              "position": "Ich erwarte Ihre Antwort bis ___ Ende der Woche.",
              "options": [
                "zum",
                "zur",
                "zu",
                "am"
              ],
              "hint": "bis zu + dem의 축약형은?"
            }
          }
        ]
      },
      {
        "title_de": "Höfliche Bitten",
        "title_ko": "정중한 부탁",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Könnten Sie mir bitte helfen?",
            "ko": "도와주실 수 있으세요?",
            "note": "가장 정중한 도움 요청",
            "grammar": [
              {
                "word": "Könnten",
                "meaning": "~할 수 있으시겠습니까",
                "explain": "können의 접속법2식"
              },
              {
                "word": "mir",
                "meaning": "나에게",
                "explain": "ich의 3격. helfen + Dat."
              }
            ],
            "blank": null
          },
          {
            "de": "Würden Sie mir bitte die Tür aufhalten?",
            "ko": "문을 잡아주시겠어요?",
            "note": "würden + Infinitiv = 정중한 요청",
            "grammar": [
              {
                "word": "Würden",
                "meaning": "~해주시겠습니까",
                "explain": "werden의 접속법2식. 정중한 요청"
              },
              {
                "word": "aufhalten",
                "meaning": "잡아두다, 열어두다",
                "explain": "분리동사(auf|halten). würden 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Darf ich Sie etwas fragen?",
            "ko": "뭐 좀 여쭤봐도 될까요?",
            "note": "허락 구하기",
            "grammar": [
              {
                "word": "Darf",
                "meaning": "~해도 되다",
                "explain": "dürfen(허가)의 1인칭"
              },
              {
                "word": "Sie",
                "meaning": "당신에게",
                "explain": "여기서는 4격(목적어). fragen + Akk."
              },
              {
                "word": "etwas",
                "meaning": "무언가를",
                "explain": "부정대명사"
              }
            ],
            "blank": null
          },
          {
            "de": "Wäre es möglich, den Termin zu ändern?",
            "ko": "약속을 변경하는 게 가능할까요?",
            "note": "매우 정중한 요청",
            "grammar": [
              {
                "word": "Wäre",
                "meaning": "~일까요",
                "explain": "sein의 접속법2식"
              },
              {
                "word": "möglich",
                "meaning": "가능한",
                "explain": "형용사"
              },
              {
                "word": "zu ändern",
                "meaning": "변경하는 것",
                "explain": "zu + 동사원형 = 부정사구"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich hätte gerne eine Auskunft.",
            "ko": "정보를 얻고 싶습니다.",
            "note": "정보 요청 (관광안내소, 역 등)",
            "grammar": [
              {
                "word": "hätte gerne",
                "meaning": "갖고 싶다",
                "explain": "haben의 접속법2식 + gerne. 매우 정중"
              },
              {
                "word": "eine Auskunft",
                "meaning": "정보 하나",
                "explain": "Auskunft(f) 4격"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "selbstvorstellung",
    "topic_de": "Selbstvorstellung",
    "topic_ko": "자기소개",
    "description_ko": "Sprechen Teil 1 & 2 대비. 이름, 출신, 가족, 직업, 취미 등 자기소개 표현.",
    "sections": [
      {
        "title_de": "Name & Herkunft",
        "title_ko": "이름 & 출신",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich heiße Jihyeon und komme aus Südkorea.",
            "ko": "저는 지현이고 한국에서 왔습니다.",
            "note": "기본 자기소개",
            "grammar": [
              {
                "word": "heiße",
                "meaning": "이름이 ~이다",
                "explain": "heißen의 1인칭"
              },
              {
                "word": "komme aus",
                "meaning": "~에서 오다, ~출신이다",
                "explain": "kommen aus + 3격. 출신 국가"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin 26 Jahre alt.",
            "ko": "저는 26살입니다.",
            "note": "나이 표현",
            "grammar": [
              {
                "word": "Jahre alt",
                "meaning": "~살",
                "explain": "Jahr(n, 해)의 복수 + alt(늙은). 나이 표현 관용구"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich wohne seit drei Monaten in Berlin.",
            "ko": "3개월 전부터 베를린에 살고 있어요.",
            "note": "거주 기간 표현",
            "grammar": [
              {
                "word": "seit",
                "meaning": "~이래로",
                "explain": "전치사 + 3격. 과거~현재 계속"
              },
              {
                "word": "drei Monaten",
                "meaning": "3개월",
                "explain": "Monat(m) 3격 복수 -en"
              },
              {
                "word": "in Berlin",
                "meaning": "베를린에",
                "explain": "in + 3격(위치)"
              }
            ],
            "blank": {
              "word": "seit",
              "position": "Ich wohne ___ drei Monaten in Berlin.",
              "options": [
                "seit",
                "vor",
                "ab",
                "für"
              ],
              "hint": "'~이래로 계속'의 전치사는?"
            }
          },
          {
            "de": "Ich komme ursprünglich aus Seoul, aber jetzt lebe ich in München.",
            "ko": "원래 서울 출신인데 지금은 뮌헨에 살아요.",
            "note": "출신지 + 현재 거주지",
            "grammar": [
              {
                "word": "ursprünglich",
                "meaning": "원래",
                "explain": "부사"
              },
              {
                "word": "aber",
                "meaning": "하지만",
                "explain": "등위접속사"
              },
              {
                "word": "jetzt",
                "meaning": "지금",
                "explain": "부사"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Familie",
        "title_ko": "가족",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich bin ledig.",
            "ko": "저는 미혼입니다.",
            "note": "결혼 여부",
            "grammar": [
              {
                "word": "ledig",
                "meaning": "미혼의",
                "explain": "형용사. 상태 보어"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin verheiratet und habe zwei Kinder.",
            "ko": "결혼했고 아이가 둘 있습니다.",
            "note": "가족 구성 소개",
            "grammar": [
              {
                "word": "verheiratet",
                "meaning": "결혼한",
                "explain": "형용사/과거분사"
              },
              {
                "word": "zwei Kinder",
                "meaning": "두 명의 아이",
                "explain": "Kind(n) 복수 = Kinder"
              }
            ],
            "blank": null
          },
          {
            "de": "Meine Schwester studiert Medizin in Hamburg.",
            "ko": "누나/언니는 함부르크에서 의학을 공부합니다.",
            "note": "가족 소개",
            "grammar": [
              {
                "word": "Meine Schwester",
                "meaning": "나의 자매",
                "explain": "mein + Schwester(f) → Meine(1격 여성)"
              },
              {
                "word": "studiert",
                "meaning": "대학에서 공부하다",
                "explain": "studieren의 3인칭"
              },
              {
                "word": "Medizin",
                "meaning": "의학",
                "explain": "학과명은 관사 없이"
              }
            ],
            "blank": null
          },
          {
            "de": "Meine Eltern leben in Korea.",
            "ko": "부모님은 한국에 살고 계십니다.",
            "note": "부모 소개",
            "grammar": [
              {
                "word": "Meine Eltern",
                "meaning": "나의 부모님",
                "explain": "Eltern = 항상 복수. mein → Meine(복수)"
              },
              {
                "word": "leben",
                "meaning": "살다",
                "explain": "leben의 복수형 (Eltern = 복수 주어)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Beruf & Ausbildung",
        "title_ko": "직업 & 학력",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich arbeite als Ingenieur bei einer Firma in Seoul.",
            "ko": "서울의 한 회사에서 엔지니어로 일합니다.",
            "note": "직업 소개",
            "grammar": [
              {
                "word": "als",
                "meaning": "~로서",
                "explain": "전치사. 직업 앞에. 관사 없이"
              },
              {
                "word": "bei einer Firma",
                "meaning": "한 회사에���",
                "explain": "bei + 3격. eine Firma(f) → einer Firma"
              }
            ],
            "blank": {
              "word": "als",
              "position": "Ich arbeite ___ Ingenieur.",
              "options": [
                "als",
                "wie",
                "für",
                "bei"
              ],
              "hint": "직업 앞에 쓰는 전치사는?"
            }
          },
          {
            "de": "Ich bin Student und studiere Informatik.",
            "ko": "저는 학생이고 정보학을 전공합니다.",
            "note": "학생 소개",
            "grammar": [
              {
                "word": "Student",
                "meaning": "대학생",
                "explain": "남성명사. 관사 없이 직업/신분 표현"
              },
              {
                "word": "Informatik",
                "meaning": "정보학, 컴퓨터과학",
                "explain": "학과명. 관사 없이"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich suche gerade eine neue Arbeitsstelle.",
            "ko": "지금 새 직장을 찾고 있습니다.",
            "note": "구직 중",
            "grammar": [
              {
                "word": "gerade",
                "meaning": "지금, 방금",
                "explain": "부사. 현재 진행 강조"
              },
              {
                "word": "eine neue Arbeitsstelle",
                "meaning": "새 직장 하나",
                "explain": "Arbeitsstelle(f) 4격. eine + neue(-e 어미)"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich habe mein Studium letztes Jahr abgeschlossen.",
            "ko": "작년에 학업을 마쳤습니다.",
            "note": "학업 완료",
            "grammar": [
              {
                "word": "mein Studium",
                "meaning": "나의 학업",
                "explain": "Studium(n). 4격 = 형태 동일"
              },
              {
                "word": "letztes Jahr",
                "meaning": "작년",
                "explain": "시간 표현. 전치사 없이 4격"
              },
              {
                "word": "abgeschlossen",
                "meaning": "끝냈다",
                "explain": "abschließen(완료하다)의 과거분사. habe + P.P."
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Hobbys & Interessen",
        "title_ko": "취미 & 관심사",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "In meiner Freizeit lese ich gerne Bücher.",
            "ko": "여가 시간에 책 읽는 걸 좋아합니다.",
            "note": "취미 소개 기본형",
            "grammar": [
              {
                "word": "In meiner Freizeit",
                "meaning": "나의 여가 시간에",
                "explain": "in + 3격. meine Freizeit(f) → meiner(3격)"
              },
              {
                "word": "lese",
                "meaning": "읽다",
                "explain": "lesen의 1인칭. 부사(In~)가 앞 → 동사 두 번째(도치)"
              },
              {
                "word": "gerne",
                "meaning": "즐겨",
                "explain": "부사. '좋아한다'는 의미"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich interessiere mich sehr für Musik.",
            "ko": "음악에 관심이 많습니다.",
            "note": "관심사 표현",
            "grammar": [
              {
                "word": "interessiere mich für",
                "meaning": "~에 관심이 있다",
                "explain": "sich interessieren für + 4격. 재귀동사"
              }
            ],
            "blank": {
              "word": "für",
              "position": "Ich interessiere mich ___ Musik.",
              "options": [
                "für",
                "an",
                "über",
                "auf"
              ],
              "hint": "sich interessieren + ? + Akk."
            }
          },
          {
            "de": "Am Wochenende gehe ich oft wandern.",
            "ko": "주말에 자주 하이킹을 갑니다.",
            "note": "주말 활동",
            "grammar": [
              {
                "word": "Am Wochenende",
                "meaning": "주말에",
                "explain": "an + dem = am + Wochenende(n)"
              },
              {
                "word": "gehe ... wandern",
                "meaning": "하이킹하러 가다",
                "explain": "gehen + 동사원형 = ~하러 가다"
              },
              {
                "word": "oft",
                "meaning": "자주",
                "explain": "빈도 부사"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich spiele seit fünf Jahren Klavier.",
            "ko": "5년째 피아노를 치고 있습니다.",
            "note": "오래 해온 취미",
            "grammar": [
              {
                "word": "seit fünf Jahren",
                "meaning": "5년 전부터",
                "explain": "seit + 3격. Jahr(n) → Jahren(복수 3격)"
              },
              {
                "word": "Klavier",
                "meaning": "피아노",
                "explain": "악기명. 관사 없이 spielen + 악기"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich koche gerne und probiere neue Rezepte aus.",
            "ko": "요리하는 걸 좋아하고 새 레시피를 시도합니다.",
            "note": "요리 취미",
            "grammar": [
              {
                "word": "koche",
                "meaning": "요리하다",
                "explain": "kochen의 1인칭"
              },
              {
                "word": "probiere ... aus",
                "meaning": "시도해보다",
                "explain": "분리동사 ausprobieren. 현재형에서 분리"
              },
              {
                "word": "neue Rezepte",
                "meaning": "새 레시피들",
                "explain": "Rezept(n) 복수 = Rezepte. neue = 복수 형용사 -e 어미"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Deutsch lernen",
        "title_ko": "독일어 학습",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
            "ko": "독일에서 일하고 싶어서 독일어를 배웁니다.",
            "note": "학습 동기 설명",
            "grammar": [
              {
                "word": "weil",
                "meaning": "~때문에",
                "explain": "종속접속사. 동사(möchte)가 문장 끝"
              },
              {
                "word": "in Deutschland",
                "meaning": "독일에서",
                "explain": "in + 3격(위치)"
              },
              {
                "word": "arbeiten möchte",
                "meaning": "일하고 싶다",
                "explain": "möchte(원하다) + 동사원형. weil-문에서 조동사가 맨 끝"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich besuche einen Deutschkurs an der Volkshochschule.",
            "ko": "시민대학에서 독일어 강좌를 듣고 있습니다.",
            "note": "강좌 수강",
            "grammar": [
              {
                "word": "besuche",
                "meaning": "다니다, 수강하다",
                "explain": "besuchen의 1인칭"
              },
              {
                "word": "einen Deutschkurs",
                "meaning": "독일어 강좌를",
                "explain": "Deutschkurs(m) 4격"
              },
              {
                "word": "an der Volkshochschule",
                "meaning": "시민대학에서",
                "explain": "an + 3격. die VHS → der VHS(3격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Deutsch ist manchmal schwierig, aber es macht mir Spaß.",
            "ko": "독일어는 가끔 어렵지만 재미있어요.",
            "note": "학습 소감",
            "grammar": [
              {
                "word": "manchmal",
                "meaning": "가끔",
                "explain": "빈도 부사"
              },
              {
                "word": "macht mir Spaß",
                "meaning": "나에게 재미를 준다",
                "explain": "Spaß machen + 3격. mir = ich의 3격"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
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
          {
            "de": "Ich stehe jeden Morgen um 7 Uhr auf.",
            "ko": "매일 아침 7시에 일어납니다.",
            "note": "분리동사 aufstehen",
            "grammar": [
              {
                "word": "stehe ... auf",
                "meaning": "일어나다",
                "explain": "분리동사 auf|stehen"
              },
              {
                "word": "jeden Morgen",
                "meaning": "매일 아침",
                "explain": "jeder + Morgen(m) 4격"
              },
              {
                "word": "um 7 Uhr",
                "meaning": "7시에",
                "explain": "um + 시각"
              }
            ],
            "blank": {
              "word": "auf",
              "position": "Ich stehe jeden Morgen um 7 Uhr ___.",
              "options": [
                "auf",
                "an",
                "ein",
                "aus"
              ],
              "hint": "aufstehen의 분리 전철은?"
            }
          },
          {
            "de": "Dann dusche ich mich und ziehe mich an.",
            "ko": "그리고 샤워하고 옷을 입습니다.",
            "note": "재귀동사 연속 사용",
            "grammar": [
              {
                "word": "dusche mich",
                "meaning": "샤워하다",
                "explain": "sich duschen. mich = 재귀대명사 4격"
              },
              {
                "word": "ziehe mich an",
                "meaning": "옷을 입다",
                "explain": "sich anziehen. 분리동사 + 재귀"
              }
            ],
            "blank": {
              "word": "mich",
              "position": "Dann dusche ich ___ und ziehe ___ an.",
              "options": [
                "mich",
                "mir",
                "sich",
                "dich"
              ],
              "hint": "ich의 재귀대명사 4격은?"
            }
          },
          {
            "de": "Zum Frühstück esse ich meistens Brot mit Käse.",
            "ko": "아침으로 보통 치즈를 겸들인 빵을 먹습니다.",
            "note": "식사 표현",
            "grammar": [
              {
                "word": "Zum Frühstück",
                "meaning": "아침식사로",
                "explain": "zu + dem = zum. Frühstück(n) 3격"
              },
              {
                "word": "meistens",
                "meaning": "대부분",
                "explain": "빈도 부사"
              },
              {
                "word": "mit Käse",
                "meaning": "치즈와 함께",
                "explain": "mit + 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Um halb acht verlasse ich das Haus.",
            "ko": "7시 30분에 집을 나섭니다.",
            "note": "halb acht = 7:30",
            "grammar": [
              {
                "word": "halb acht",
                "meaning": "7시 30분",
                "explain": "halb + 숫자 = 그 시각의 30분 전"
              },
              {
                "word": "verlasse",
                "meaning": "떠나다",
                "explain": "verlassen 1인칭"
              },
              {
                "word": "das Haus",
                "meaning": "집을",
                "explain": "Haus(n) 4격"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Arbeit / Schule",
        "title_ko": "직장 / 학교",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich fahre mit der U-Bahn zur Arbeit.",
            "ko": "지하철로 출근합니다.",
            "note": "출근 수단",
            "grammar": [
              {
                "word": "mit der U-Bahn",
                "meaning": "지하철로",
                "explain": "mit + 3격. die U-Bahn → der(3격)"
              },
              {
                "word": "zur Arbeit",
                "meaning": "직장으로",
                "explain": "zu + der = zur. Arbeit(f) 3격"
              }
            ],
            "blank": {
              "word": "mit",
              "position": "Ich fahre ___ der U-Bahn zur Arbeit.",
              "options": [
                "mit",
                "von",
                "bei",
                "zu"
              ],
              "hint": "교통수단 앞 전치사는?"
            }
          },
          {
            "de": "Ich arbeite von 9 bis 18 Uhr.",
            "ko": "9시부터 18시까지 일합니다.",
            "note": "근무 시간",
            "grammar": [
              {
                "word": "von 9 bis 18 Uhr",
                "meaning": "9시부터 18시까지",
                "explain": "von ... bis ... = ~부터 ~까지"
              }
            ],
            "blank": null
          },
          {
            "de": "In der Mittagspause esse ich in der Kantine.",
            "ko": "점심시간에 구내식당에서 먹습니다.",
            "note": "점심 루틴",
            "grammar": [
              {
                "word": "In der Mittagspause",
                "meaning": "점심시간에",
                "explain": "in + 3격. die Mittagspause → der(3격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Nach der Arbeit gehe ich manchmal einkaufen.",
            "ko": "퇴근 후 가끔 장을 봅니다.",
            "note": "퇴근 후 활동",
            "grammar": [
              {
                "word": "Nach der Arbeit",
                "meaning": "일 후에",
                "explain": "nach + 3격. die Arbeit → der Arbeit"
              },
              {
                "word": "einkaufen",
                "meaning": "장보다",
                "explain": "분리동사. gehen + 동사원형"
              }
            ],
            "blank": {
              "word": "Nach",
              "position": "___ der Arbeit gehe ich manchmal einkaufen.",
              "options": [
                "Nach",
                "Vor",
                "Bei",
                "Von"
              ],
              "hint": "'~후에' 전치사는?"
            }
          }
        ]
      },
      {
        "title_de": "Abend & Wochenende",
        "title_ko": "저녁 & 주말",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Abends koche ich meistens selbst.",
            "ko": "저녁에는 보통 직접 요리합니다.",
            "note": "저녁 루틴",
            "grammar": [
              {
                "word": "Abends",
                "meaning": "저녁에",
                "explain": "부사. -s = 반복적"
              },
              {
                "word": "selbst",
                "meaning": "직접",
                "explain": "부사"
              }
            ],
            "blank": null
          },
          {
            "de": "Am Wochenende schlafe ich gerne länger.",
            "ko": "주말에는 좀 더 자는 걸 좋아해요.",
            "note": "주말 루틴",
            "grammar": [
              {
                "word": "Am Wochenende",
                "meaning": "주말에",
                "explain": "an + dem = am"
              },
              {
                "word": "länger",
                "meaning": "더 오래",
                "explain": "lang의 비교급"
              }
            ],
            "blank": null
          },
          {
            "de": "Sonntags treffe ich mich oft mit Freunden.",
            "ko": "일요일마다 친구들을 자주 만납니다.",
            "note": "주말 사교",
            "grammar": [
              {
                "word": "Sonntags",
                "meaning": "일요일마다",
                "explain": "-s = 반복"
              },
              {
                "word": "treffe mich",
                "meaning": "만나다",
                "explain": "sich treffen. 재귀동사"
              },
              {
                "word": "mit Freunden",
                "meaning": "친구들과",
                "explain": "mit + 3격 복수. Freund → Freunden"
              }
            ],
            "blank": {
              "word": "mit",
              "position": "Ich treffe mich oft ___ Freunden.",
              "options": [
                "mit",
                "von",
                "bei",
                "zu"
              ],
              "hint": "'~와 함께' 전치사는?"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "wohnen",
    "topic_de": "Wohnen",
    "topic_ko": "주거",
    "description_ko": "집 구하기, 집 묘사, 이웃 문제. Schreiben & Sprechen 모두.",
    "sections": [
      {
        "title_de": "Wohnung beschreiben",
        "title_ko": "집 묘사",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich wohne in einer Zweizimmerwohnung im dritten Stock.",
            "ko": "3층 투룸 아파트에 살아요.",
            "note": "주거 형태",
            "grammar": [
              {
                "word": "in einer Zweizimmerwohnung",
                "meaning": "투룸에",
                "explain": "in + 3격. eine → einer(여성 3격)"
              },
              {
                "word": "im dritten Stock",
                "meaning": "3층에",
                "explain": "in + dem = im. dritt → dritten(3격 서수)"
              }
            ],
            "blank": null
          },
          {
            "de": "Die Wohnung hat eine Küche, ein Bad und einen Balkon.",
            "ko": "아파트에는 주방, 욕실, 발코니가 있어요.",
            "note": "방 구성",
            "grammar": [
              {
                "word": "eine Küche",
                "meaning": "주방",
                "explain": "Küche(f) 4격"
              },
              {
                "word": "ein Bad",
                "meaning": "욕실",
                "explain": "Bad(n) 4격"
              },
              {
                "word": "einen Balkon",
                "meaning": "발코니",
                "explain": "Balkon(m) 4격. einen = 남성 4격"
              }
            ],
            "blank": {
              "word": "einen",
              "position": "Die Wohnung hat ___ Balkon.",
              "options": [
                "einen",
                "ein",
                "eine",
                "einem"
              ],
              "hint": "남성 4격 부정관사는?"
            }
          },
          {
            "de": "Die Miete beträgt 650 Euro warm.",
            "ko": "관리비 포함 월세는 650유로입니다.",
            "note": "warm = 관리비 포함",
            "grammar": [
              {
                "word": "beträgt",
                "meaning": "~이다(금액)",
                "explain": "betragen 3인칭"
              },
              {
                "word": "warm",
                "meaning": "관리비 포함",
                "explain": "Warmmiete ↔ Kaltmiete"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Wohnungssuche",
        "title_ko": "집 구하기",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich suche eine Wohnung in der Stadtmitte.",
            "ko": "시내 중심에 있는 집을 찾고 있습니다.",
            "note": "집 구하기 이메일",
            "grammar": [
              {
                "word": "in der Stadtmitte",
                "meaning": "시내 중심에",
                "explain": "in + 3격. die Stadtmitte → der(3격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Ist die Wohnung noch frei?",
            "ko": "그 집 아직 비어 있나요?",
            "note": "공실 확인",
            "grammar": [
              {
                "word": "noch",
                "meaning": "아직",
                "explain": "부사"
              },
              {
                "word": "frei",
                "meaning": "비어있는",
                "explain": "형용사"
              }
            ],
            "blank": null
          },
          {
            "de": "Kann ich die Wohnung besichtigen?",
            "ko": "집을 볼 수 있을까요?",
            "note": "내방 요청",
            "grammar": [
              {
                "word": "besichtigen",
                "meaning": "방문하여 보다",
                "explain": "비분리동사. können 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Sind Haustiere erlaubt?",
            "ko": "반려동물 허용되나요?",
            "note": "입주 조건",
            "grammar": [
              {
                "word": "Haustiere",
                "meaning": "반려동물들",
                "explain": "Haustier(n) 복수"
              },
              {
                "word": "erlaubt",
                "meaning": "허용된",
                "explain": "erlauben의 과거분사. 수동태"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Probleme in der Wohnung",
        "title_ko": "집 문제",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "In meiner Wohnung ist die Heizung kaputt.",
            "ko": "우리 집 난방이 고장났습니다.",
            "note": "고장 신고",
            "grammar": [
              {
                "word": "In meiner Wohnung",
                "meaning": "우리 집에",
                "explain": "in + 3격. meine Wohnung(f) → meiner"
              },
              {
                "word": "kaputt",
                "meaning": "고장난",
                "explain": "형용사"
              }
            ],
            "blank": null
          },
          {
            "de": "Mein Nachbar macht nachts sehr viel Lärm.",
            "ko": "이웃이 밤에 소음이 너무 심합니다.",
            "note": "소음 불만",
            "grammar": [
              {
                "word": "nachts",
                "meaning": "밤에",
                "explain": "-s = 반복적 시간"
              },
              {
                "word": "Lärm",
                "meaning": "소음",
                "explain": "남성명사"
              }
            ],
            "blank": null
          },
          {
            "de": "Könnten Sie bitte einen Handwerker schicken?",
            "ko": "수리기사를 보내주실 수 있을까요?",
            "note": "수리 요청",
            "grammar": [
              {
                "word": "Könnten",
                "meaning": "~해주실 수 있을까요",
                "explain": "können의 접속법2식"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "arbeit",
    "topic_de": "Arbeit & Beruf",
    "topic_ko": "직장 / 직업",
    "description_ko": "직장 생활, 구직, 업무 관련 표현.",
    "sections": [
      {
        "title_de": "Über den Beruf sprechen",
        "title_ko": "직업에 대해 말하기",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich arbeite als Krankenschwester in einem Krankenhaus.",
            "ko": "병원에서 간호사로 일합니다.",
            "note": "직업 설명",
            "grammar": [
              {
                "word": "als",
                "meaning": "~로서",
                "explain": "직업 앞에. 관사 없이"
              },
              {
                "word": "in einem Krankenhaus",
                "meaning": "병원에서",
                "explain": "in + 3격. ein Krankenhaus(n) → einem"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin mit meiner Arbeit zufrieden.",
            "ko": "일에 만족합니다.",
            "note": "직업 만족도",
            "grammar": [
              {
                "word": "mit meiner Arbeit",
                "meaning": "나의 일에",
                "explain": "mit + 3격. zufrieden mit + Dat."
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Bewerbung",
        "title_ko": "입사 지원",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich möchte mich für die Stelle als Verkäufer bewerben.",
            "ko": "판매원 자리에 지원하고 싶습니다.",
            "note": "입사 지원 이메일",
            "grammar": [
              {
                "word": "mich ... bewerben",
                "meaning": "지원하다",
                "explain": "sich bewerben für + 4격"
              },
              {
                "word": "für die Stelle",
                "meaning": "그 자리에",
                "explain": "für + 4격"
              },
              {
                "word": "als Verkäufer",
                "meaning": "판매원으로",
                "explain": "als + 직업. 관사 없이"
              }
            ],
            "blank": {
              "word": "für",
              "position": "Ich möchte mich ___ die Stelle bewerben.",
              "options": [
                "für",
                "um",
                "auf",
                "an"
              ],
              "hint": "sich bewerben + ? + Akk."
            }
          },
          {
            "de": "Im Anhang finden Sie meinen Lebenslauf.",
            "ko": "첨부파일에 이력서가 있습니다.",
            "note": "이력서 첨부",
            "grammar": [
              {
                "word": "Im Anhang",
                "meaning": "첨부에",
                "explain": "in + dem = im"
              },
              {
                "word": "meinen Lebenslauf",
                "meaning": "나의 이력서를",
                "explain": "Lebenslauf(m) 4격. mein → meinen"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Krankmeldung",
        "title_ko": "병가 신고",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich bin leider krank und kann heute nicht zur Arbeit kommen.",
            "ko": "안타깍지만 아파서 오늘 출근할 수 없습니다.",
            "note": "병가 이메일",
            "grammar": [
              {
                "word": "zur Arbeit",
                "meaning": "직장에",
                "explain": "zu + der = zur"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich komme voraussichtlich am Mittwoch wieder.",
            "ko": "수요일에 복귀할 예정입니다.",
            "note": "복귀 예정일",
            "grammar": [
              {
                "word": "voraussichtlich",
                "meaning": "예상컨대",
                "explain": "부사"
              },
              {
                "word": "am Mittwoch",
                "meaning": "수요일에",
                "explain": "am + 요일"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "einkaufen",
    "topic_de": "Einkaufen",
    "topic_ko": "쇼핑",
    "description_ko": "상점에서 물건 사기. 가격, 교환, 환불.",
    "sections": [
      {
        "title_de": "Im Geschäft",
        "title_ko": "상점에서",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich suche einen Wintermantel in Größe M.",
            "ko": "M사이즈 겨울 코트를 찾고 있어요.",
            "note": "물건 찾기",
            "grammar": [
              {
                "word": "einen Wintermantel",
                "meaning": "겨울 코트",
                "explain": "Wintermantel(m) 4격"
              },
              {
                "word": "in Größe M",
                "meaning": "M사이즈",
                "explain": "in + Größe. 사이즈 표현"
              }
            ],
            "blank": null
          },
          {
            "de": "Haben Sie das auch in einer anderen Farbe?",
            "ko": "다른 색상도 있나요?",
            "note": "색상 문의",
            "grammar": [
              {
                "word": "in einer anderen Farbe",
                "meaning": "다른 색으로",
                "explain": "in + 3격. eine Farbe(f) → einer + anderen"
              }
            ],
            "blank": null
          },
          {
            "de": "Wie viel kostet das?",
            "ko": "이거 얼마예요?",
            "note": "가격 문의",
            "grammar": [
              {
                "word": "Wie viel",
                "meaning": "얼마나",
                "explain": "의문사"
              }
            ],
            "blank": null
          },
          {
            "de": "Das ist mir zu teuer.",
            "ko": "너무 비싸요.",
            "note": "가격 협상",
            "grammar": [
              {
                "word": "mir",
                "meaning": "나에게는",
                "explain": "3격. '나에게는 너무 비싸다'"
              },
              {
                "word": "zu teuer",
                "meaning": "너무 비싼",
                "explain": "zu + 형용사 = 너무 ~한"
              }
            ],
            "blank": null
          },
          {
            "de": "Kann ich mit Karte bezahlen?",
            "ko": "카드로 결제할 수 있나요?",
            "note": "결제 방법",
            "grammar": [
              {
                "word": "mit Karte",
                "meaning": "카드로",
                "explain": "mit + 3격(수단)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Umtausch",
        "title_ko": "교환 / 반품",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich möchte diesen Pullover umtauschen.",
            "ko": "이 스웨터를 교환하고 싶습니다.",
            "note": "교환 요청",
            "grammar": [
              {
                "word": "diesen Pullover",
                "meaning": "이 스웨터를",
                "explain": "dies + Pullover(m) 4격 → diesen"
              },
              {
                "word": "umtauschen",
                "meaning": "교환하다",
                "explain": "분리동사. möchte 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Kann ich mein Geld zurückbekommen?",
            "ko": "환불받을 수 있나요?",
            "note": "환불 요청",
            "grammar": [
              {
                "word": "zurückbekommen",
                "meaning": "돌려받다",
                "explain": "분리동사(zurück|bekommen)"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "gesundheit",
    "topic_de": "Gesundheit",
    "topic_ko": "건강 / 병원",
    "description_ko": "증상 설명, 병원 방문, 약국 이용.",
    "sections": [
      {
        "title_de": "Symptome beschreiben",
        "title_ko": "증상 설명",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich habe starke Kopfschmerzen.",
            "ko": "심한 두통이 있어요.",
            "note": "증상 표현",
            "grammar": [
              {
                "word": "starke",
                "meaning": "심한",
                "explain": "stark 복수 어미 -e"
              },
              {
                "word": "Kopfschmerzen",
                "meaning": "두통",
                "explain": "항상 복수"
              }
            ],
            "blank": null
          },
          {
            "de": "Mir ist schlecht.",
            "ko": "속이 안 좋아요.",
            "note": "구역감",
            "grammar": [
              {
                "word": "Mir",
                "meaning": "나에게",
                "explain": "ich의 3격. 감각 표현: Mir ist + 형용사"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich habe seit drei Tagen Husten und Schnupfen.",
            "ko": "3일째 기침과 콧물이 있어요.",
            "note": "감기 증상",
            "grammar": [
              {
                "word": "seit drei Tagen",
                "meaning": "3일 전부터",
                "explain": "seit + 3격. Tag(m) → Tagen(복수 3격)"
              }
            ],
            "blank": {
              "word": "seit",
              "position": "Ich habe ___ drei Tagen Husten.",
              "options": [
                "seit",
                "vor",
                "ab",
                "für"
              ],
              "hint": "'~전부터 계속' 전치사는?"
            }
          },
          {
            "de": "Mein Rücken tut mir weh.",
            "ko": "허리가 아파요.",
            "note": "wehtun + Dat.",
            "grammar": [
              {
                "word": "tut ... weh",
                "meaning": "아프다",
                "explain": "분리동사 weh|tun + 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich habe Fieber, ungefähr 38 Grad.",
            "ko": "열이 있어요, 대략 38도.",
            "note": "체온 전달",
            "grammar": [
              {
                "word": "Fieber",
                "meaning": "열",
                "explain": "중성명사. 관사 없이"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Beim Arzt",
        "title_ko": "병원에서",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich brauche einen Termin beim Hausarzt.",
            "ko": "주치의에게 예약이 필요합니다.",
            "note": "진료 예약",
            "grammar": [
              {
                "word": "beim Hausarzt",
                "meaning": "주치의에게",
                "explain": "bei + dem = beim"
              }
            ],
            "blank": null
          },
          {
            "de": "Sie sollten drei Tage im Bett bleiben.",
            "ko": "3일간 침대에 누워 계셔야 합니다.",
            "note": "의사 지시",
            "grammar": [
              {
                "word": "sollten",
                "meaning": "~해야 합니다",
                "explain": "sollen의 접속법2식. 부드러운 조언"
              },
              {
                "word": "im Bett",
                "meaning": "침대에서",
                "explain": "in + dem = im. 3격(위치)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "In der Apotheke",
        "title_ko": "약국에서",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Haben Sie etwas gegen Kopfschmerzen?",
            "ko": "두통약 있나요?",
            "note": "약 요청",
            "grammar": [
              {
                "word": "etwas gegen",
                "meaning": "~에 효과 있는 것",
                "explain": "gegen + 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Nehmen Sie die Tabletten dreimal täglich.",
            "ko": "약을 하루 세 번 복용하세요.",
            "note": "복용 지시",
            "grammar": [
              {
                "word": "dreimal",
                "meaning": "세 번",
                "explain": "drei + -mal = 횟수"
              },
              {
                "word": "täglich",
                "meaning": "매일",
                "explain": "부사"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "reisen",
    "topic_de": "Reisen & Verkehr",
    "topic_ko": "여행 / 교통",
    "description_ko": "호텔 예약, 교통수단, 여행 계획.",
    "sections": [
      {
        "title_de": "Hotel buchen",
        "title_ko": "호텔 예약",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich möchte ein Einzelzimmer vom 5. bis zum 8. Mai reservieren.",
            "ko": "5월 5일부터 8일까지 싱글룸을 예약하고 싶습니다.",
            "note": "호텔 예약 이메일",
            "grammar": [
              {
                "word": "ein Einzelzimmer",
                "meaning": "싱글룸",
                "explain": "Einzelzimmer(n) 4격"
              },
              {
                "word": "vom 5. bis zum 8.",
                "meaning": "5일부터 8일까지",
                "explain": "von+dem=vom, bis zu+dem=zum. 서수+3격"
              }
            ],
            "blank": {
              "word": "vom",
              "position": "Ich möchte ein Zimmer ___ 5. bis zum 8. Mai reservieren.",
              "options": [
                "vom",
                "am",
                "im",
                "von dem"
              ],
              "hint": "von + dem의 축약형은?"
            }
          },
          {
            "de": "Ist Frühstück im Preis inbegriffen?",
            "ko": "조식이 가격에 포함되어 있나요?",
            "note": "포함 사항 확인",
            "grammar": [
              {
                "word": "im Preis",
                "meaning": "가격에",
                "explain": "in + dem = im"
              },
              {
                "word": "inbegriffen",
                "meaning": "포함된",
                "explain": "과거분사"
              }
            ],
            "blank": null
          },
          {
            "de": "Wie komme ich vom Bahnhof zum Hotel?",
            "ko": "역에서 호텔까지 어떻게 가나요?",
            "note": "길 문의",
            "grammar": [
              {
                "word": "vom Bahnhof",
                "meaning": "역에서",
                "explain": "von + dem = vom"
              },
              {
                "word": "zum Hotel",
                "meaning": "호텔까지",
                "explain": "zu + dem = zum"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Am Bahnhof",
        "title_ko": "역에서",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Eine Fahrkarte nach München, hin und zurück, bitte.",
            "ko": "뽈헨 가는 왕복 승차권 주세요.",
            "note": "표 구매",
            "grammar": [
              {
                "word": "nach München",
                "meaning": "뽈헨으로",
                "explain": "nach + 도시명(관사 없이)"
              },
              {
                "word": "hin und zurück",
                "meaning": "왕복",
                "explain": "관용표현"
              }
            ],
            "blank": null
          },
          {
            "de": "Von welchem Gleis fährt der Zug ab?",
            "ko": "몧 번 플랫폼에서 출발하나요?",
            "note": "플랫폼 확인",
            "grammar": [
              {
                "word": "Von welchem Gleis",
                "meaning": "어느 플랫폼에서",
                "explain": "von + 3격. welches Gleis(n) → welchem"
              },
              {
                "word": "fährt ... ab",
                "meaning": "출발하다",
                "explain": "분리동사 ab|fahren"
              }
            ],
            "blank": null
          },
          {
            "de": "Muss ich umsteigen?",
            "ko": "환승해야 하나요?",
            "note": "환승 확인",
            "grammar": [
              {
                "word": "umsteigen",
                "meaning": "환승하다",
                "explain": "분리동사. müssen 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Entschuldigung, wie komme ich zum Rathaus?",
            "ko": "실례합니다, 시청에 어떻게 가나요?",
            "note": "길 묻기",
            "grammar": [
              {
                "word": "zum Rathaus",
                "meaning": "시청으로",
                "explain": "zu + dem = zum"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "essen",
    "topic_de": "Essen & Trinken",
    "topic_ko": "음식 / 음료",
    "description_ko": "식당에서 주문, 음식 선호도 표현, 음식 묘사.",
    "sections": [
      {
        "title_de": "Im Restaurant bestellen",
        "title_ko": "식당에서 주문",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Einen Tisch für zwei Personen, bitte.",
            "ko": "두 명 자리 부탁드립니다.",
            "note": "식당 입장",
            "grammar": [
              {
                "word": "Einen Tisch",
                "meaning": "테이블 하나를",
                "explain": "Tisch(m) 4격"
              },
              {
                "word": "für zwei Personen",
                "meaning": "두 명을 위해",
                "explain": "für + 4격. Person(f) 복수"
              }
            ],
            "blank": null
          },
          {
            "de": "Was können Sie empfehlen?",
            "ko": "뭘 추천해주시겠어요?",
            "note": "메뉴 추천 요청",
            "grammar": [
              {
                "word": "Was",
                "meaning": "무엇을",
                "explain": "의문사"
              },
              {
                "word": "empfehlen",
                "meaning": "추천하다",
                "explain": "können 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich hätte gerne das Schnitzel mit Pommes.",
            "ko": "슈니첼과 감자튀김 주세요.",
            "note": "주문 표현",
            "grammar": [
              {
                "word": "hätte gerne",
                "meaning": "갖고 싶다",
                "explain": "haben의 접속법2식. 정중한 주문"
              },
              {
                "word": "das Schnitzel",
                "meaning": "슈니첼을",
                "explain": "Schnitzel(n) 4격"
              },
              {
                "word": "mit Pommes",
                "meaning": "감자튀김과 함께",
                "explain": "mit + 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Könnte ich bitte die Speisekarte haben?",
            "ko": "메뉴판 좀 주시겠어요?",
            "note": "메뉴판 요청",
            "grammar": [
              {
                "word": "Könnte",
                "meaning": "~할 수 있을까요",
                "explain": "können의 접속법2식"
              },
              {
                "word": "die Speisekarte",
                "meaning": "메뉴판을",
                "explain": "Speisekarte(f) 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Zum Trinken nehme ich ein Mineralwasser.",
            "ko": "음료는 미네랄워터로 할게요.",
            "note": "음료 주문",
            "grammar": [
              {
                "word": "Zum Trinken",
                "meaning": "마실 것으로",
                "explain": "zu + dem = zum + 명사화 동사"
              },
              {
                "word": "ein Mineralwasser",
                "meaning": "미네랄워터 하나",
                "explain": "Mineralwasser(n) 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Die Rechnung, bitte!",
            "ko": "계산서 주세요!",
            "note": "계산 요청",
            "grammar": [
              {
                "word": "Die Rechnung",
                "meaning": "계산서",
                "explain": "여성명사 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Zusammen oder getrennt?",
            "ko": "같이 계산하세요, 따로 계산하세요?",
            "note": "종업원의 질문",
            "grammar": [
              {
                "word": "zusammen",
                "meaning": "같이",
                "explain": "부사"
              },
              {
                "word": "getrennt",
                "meaning": "따로",
                "explain": "trennen(나누다)의 과거분사 → 부사적"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Geschmack & Vorlieben",
        "title_ko": "맛 / 선호도",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Das schmeckt wirklich gut!",
            "ko": "정말 맛있어요!",
            "note": "맛 평가",
            "grammar": [
              {
                "word": "schmeckt",
                "meaning": "맛이 나다",
                "explain": "schmecken의 3인칭. 음식 주어"
              },
              {
                "word": "wirklich",
                "meaning": "정말로",
                "explain": "부사"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich esse gerne italienisches Essen.",
            "ko": "이탈리아 음식 먹는 걸 좋아해요.",
            "note": "음식 선호도",
            "grammar": [
              {
                "word": "italienisches Essen",
                "meaning": "이탈리아 음식",
                "explain": "italienisch + Essen(n). 무관사 중성 4격 → -es 어미"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin Vegetarier.",
            "ko": "저는 채식주의자입니다.",
            "note": "식습관",
            "grammar": [
              {
                "word": "Vegetarier",
                "meaning": "채식주의자",
                "explain": "남성명사. 직업/신분 → 관사 없이"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich esse kein Fleisch und keine Meeresfrüchte.",
            "ko": "고기와 해산물은 안 먹어요.",
            "note": "못 먹는 것",
            "grammar": [
              {
                "word": "kein Fleisch",
                "meaning": "고기 안 먹음",
                "explain": "Fleisch(n) 4격. kein = 중성 4격"
              },
              {
                "word": "keine Meeresfrüchte",
                "meaning": "해산물 안 먹음",
                "explain": "복수 4격. keine"
              }
            ],
            "blank": null
          },
          {
            "de": "Mein Lieblingsgericht ist Bibimbap.",
            "ko": "제가 제일 좋아하는 음식은 비빔밥이에요.",
            "note": "최애 음식",
            "grammar": [
              {
                "word": "Mein Lieblingsgericht",
                "meaning": "내가 가장 좋아하는 음식",
                "explain": "Lieblings- + Gericht(n). 1격 주어"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Essen zubereiten",
        "title_ko": "요리",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich koche am liebsten koreanisches Essen.",
            "ko": "한국 음식 요리하는 걸 가장 좋아해요.",
            "note": "요리 선호",
            "grammar": [
              {
                "word": "am liebsten",
                "meaning": "가장 즐겨",
                "explain": "gern의 최상급"
              },
              {
                "word": "koreanisches Essen",
                "meaning": "한국 음식",
                "explain": "koreanisch + Essen(n) 4격. 무관사 -es 어미"
              }
            ],
            "blank": null
          },
          {
            "de": "Zum Frühstück esse ich meistens Brot.",
            "ko": "아침에는 보통 빵을 먹어요.",
            "note": "아침 식사",
            "grammar": [
              {
                "word": "Zum Frühstück",
                "meaning": "아침식사로",
                "explain": "zu + dem = zum. Frühstück(n) 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich trinke keinen Alkohol.",
            "ko": "술은 안 마셔요.",
            "note": "음료 제한",
            "grammar": [
              {
                "word": "keinen Alkohol",
                "meaning": "술 안 마심",
                "explain": "Alkohol(m) 4격. kein → keinen"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "freizeit",
    "topic_de": "Freizeit & Hobbys",
    "topic_ko": "여가 / 취미",
    "description_ko": "취미, 여가 활동, 스포츠. Sprechen Teil 1, 2에 자주 출제.",
    "sections": [
      {
        "title_de": "Hobbys",
        "title_ko": "취미",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Was machst du gerne in deiner Freizeit?",
            "ko": "여가 시간에 뭐 하는 걸 좋아해?",
            "note": "Sprechen Teil 1 카드 질문",
            "grammar": [
              {
                "word": "in deiner Freizeit",
                "meaning": "너의 여가 시간에",
                "explain": "in + 3격. deine Freizeit(f) → deiner"
              }
            ],
            "blank": null
          },
          {
            "de": "In meiner Freizeit lese ich gerne Bücher.",
            "ko": "여가 시간에 책 읽는 걸 좋아해요.",
            "note": "기본 답변 형태",
            "grammar": [
              {
                "word": "In meiner Freizeit",
                "meaning": "내 여가 시간에",
                "explain": "in + 3격"
              },
              {
                "word": "Bücher",
                "meaning": "책들",
                "explain": "Buch(n) 복수 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Mein Hobby ist Fotografieren.",
            "ko": "제 취미는 사진 찍는 거예요.",
            "note": "취미 정의",
            "grammar": [
              {
                "word": "Fotografieren",
                "meaning": "사진 찍기",
                "explain": "동사원형 명사화 → 중성"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich spiele seit zehn Jahren Gitarre.",
            "ko": "10년째 기타를 치고 있어요.",
            "note": "기간 포함 취미",
            "grammar": [
              {
                "word": "seit zehn Jahren",
                "meaning": "10년 전부터",
                "explain": "seit + 3격. Jahr(n) → Jahren(복수3격)"
              },
              {
                "word": "Gitarre",
                "meaning": "기타",
                "explain": "악기는 관사 없이 spielen + 악기"
              }
            ],
            "blank": {
              "word": "seit",
              "position": "Ich spiele ___ zehn Jahren Gitarre.",
              "options": [
                "seit",
                "vor",
                "für",
                "ab"
              ],
              "hint": "'~년 전부터 계속'의 전치사는?"
            }
          },
          {
            "de": "Ich interessiere mich für klassische Musik.",
            "ko": "클래식 음악에 관심이 있어요.",
            "note": "관심사",
            "grammar": [
              {
                "word": "interessiere mich für",
                "meaning": "~에 관심이 있다",
                "explain": "sich interessieren für + 4격"
              },
              {
                "word": "klassische Musik",
                "meaning": "클래식 음악",
                "explain": "klassisch + Musik(f). 무관사 4격 여성 = -e"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Sport",
        "title_ko": "스포츠",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich treibe regelmäßig Sport.",
            "ko": "규칙적으로 운동해요.",
            "note": "운동 습관",
            "grammar": [
              {
                "word": "treibe ... Sport",
                "meaning": "운동하다",
                "explain": "Sport treiben = 관용구"
              },
              {
                "word": "regelmäßig",
                "meaning": "규칙적으로",
                "explain": "부사"
              }
            ],
            "blank": null
          },
          {
            "de": "Zweimal pro Woche gehe ich ins Fitnessstudio.",
            "ko": "일주일에 두 번 헬스장에 가요.",
            "note": "운동 빈도",
            "grammar": [
              {
                "word": "Zweimal pro Woche",
                "meaning": "일주일에 두 번",
                "explain": "pro + 4격 = ~당"
              },
              {
                "word": "ins Fitnessstudio",
                "meaning": "헬스장으로",
                "explain": "in + das = ins. 방향(4격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich spiele am Wochenende Fußball mit Freunden.",
            "ko": "주말에 친구들과 축구해요.",
            "note": "주말 스포츠",
            "grammar": [
              {
                "word": "am Wochenende",
                "meaning": "주말에",
                "explain": "an + dem = am"
              },
              {
                "word": "mit Freunden",
                "meaning": "친구들과",
                "explain": "mit + 3격 복수"
              }
            ],
            "blank": null
          },
          {
            "de": "Im Sommer schwimme ich oft im See.",
            "ko": "여름에는 호수에서 자주 수영해요.",
            "note": "계절 운동",
            "grammar": [
              {
                "word": "Im Sommer",
                "meaning": "여름에",
                "explain": "in + dem = im. 계절 앞"
              },
              {
                "word": "im See",
                "meaning": "호수에서",
                "explain": "in + dem = im. See(m) 3격(위치)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Ausgehen",
        "title_ko": "외출 / 나들이",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich gehe gerne ins Kino.",
            "ko": "영화관 가는 걸 좋아해요.",
            "note": "영화 보기",
            "grammar": [
              {
                "word": "ins Kino",
                "meaning": "영화관으로",
                "explain": "in + das = ins. 방향(4격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Am Wochenende treffe ich mich mit Freunden.",
            "ko": "주말에 친구들을 만나요.",
            "note": "주말 약속",
            "grammar": [
              {
                "word": "treffe mich",
                "meaning": "만나다",
                "explain": "sich treffen"
              },
              {
                "word": "mit Freunden",
                "meaning": "친구들과",
                "explain": "mit + 3격 복수"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich war gestern im Konzert.",
            "ko": "어제 콘서트에 갔었어요.",
            "note": "과거 외출",
            "grammar": [
              {
                "word": "war",
                "meaning": "있었다",
                "explain": "sein의 과거형"
              },
              {
                "word": "im Konzert",
                "meaning": "콘서트에",
                "explain": "in + dem = im. Konzert(n) 3격"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "familie",
    "topic_de": "Familie & Freunde",
    "topic_ko": "가족 / 친구",
    "description_ko": "가족 구성원 소개, 친구 관계, 관계 표현.",
    "sections": [
      {
        "title_de": "Familienmitglieder",
        "title_ko": "가족 구성원",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich habe eine Schwester und zwei Brüder.",
            "ko": "여자 형제 하나와 남자 형제 둘이 있어요.",
            "note": "형제자매 소개",
            "grammar": [
              {
                "word": "eine Schwester",
                "meaning": "자매 한 명",
                "explain": "Schwester(f) 4격"
              },
              {
                "word": "zwei Brüder",
                "meaning": "형제 두 명",
                "explain": "Bruder(m) 복수 = Brüder"
              }
            ],
            "blank": null
          },
          {
            "de": "Meine Eltern leben in Seoul.",
            "ko": "부모님은 서울에 사세요.",
            "note": "부모 거주지",
            "grammar": [
              {
                "word": "Meine Eltern",
                "meaning": "나의 부모님",
                "explain": "Eltern = 항상 복수"
              },
              {
                "word": "in Seoul",
                "meaning": "서울에",
                "explain": "in + 3격(위치)"
              }
            ],
            "blank": null
          },
          {
            "de": "Meine Großeltern sind schon in Rente.",
            "ko": "조부모님은 이미 은퇴하셨어요.",
            "note": "조부모 상태",
            "grammar": [
              {
                "word": "Großeltern",
                "meaning": "조부모",
                "explain": "항상 복수"
              },
              {
                "word": "in Rente",
                "meaning": "은퇴한",
                "explain": "관용표현. Rente(f) = 연금"
              }
            ],
            "blank": null
          },
          {
            "de": "Mein Vater arbeitet als Lehrer.",
            "ko": "아버지는 교사로 일하세요.",
            "note": "부모 직업",
            "grammar": [
              {
                "word": "als Lehrer",
                "meaning": "교사로",
                "explain": "als + 직업. 관사 없이"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Beziehungen",
        "title_ko": "관계",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich verstehe mich gut mit meinen Geschwistern.",
            "ko": "형제자매와 사이가 좋아요.",
            "note": "관계 표현",
            "grammar": [
              {
                "word": "verstehe mich",
                "meaning": "사이좋게 지내다",
                "explain": "sich verstehen mit + 3격"
              },
              {
                "word": "mit meinen Geschwistern",
                "meaning": "형제자매와",
                "explain": "mit + 3격 복수. Geschwister(복수) → Geschwistern"
              }
            ],
            "blank": null
          },
          {
            "de": "Meine beste Freundin heißt Anna.",
            "ko": "내 가장 친한 친구는 안나예요.",
            "note": "친구 소개",
            "grammar": [
              {
                "word": "Meine beste Freundin",
                "meaning": "나의 가장 친한 친구(여)",
                "explain": "Freundin(f). best의 최상급 어미 -e"
              }
            ],
            "blank": null
          },
          {
            "de": "Wir kennen uns seit der Schulzeit.",
            "ko": "학창 시절부터 알고 지냈어요.",
            "note": "오래된 관계",
            "grammar": [
              {
                "word": "kennen uns",
                "meaning": "서로 알다",
                "explain": "sich kennen. 재귀동사"
              },
              {
                "word": "seit der Schulzeit",
                "meaning": "학창 시절부터",
                "explain": "seit + 3격. die Schulzeit → der(3격)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Aktivitäten mit Familie/Freunden",
        "title_ko": "가족 / 친구와 활동",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Einmal im Monat besuche ich meine Eltern.",
            "ko": "한 달에 한 번 부모님을 뵈러 가요.",
            "note": "가족 방문",
            "grammar": [
              {
                "word": "Einmal im Monat",
                "meaning": "한 달에 한 번",
                "explain": "im Monat = ~월에. 빈도"
              },
              {
                "word": "meine Eltern",
                "meaning": "나의 부모님",
                "explain": "복수 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Am Wochenende grillen wir oft im Garten.",
            "ko": "주말에 자주 정원에서 바비큐해요.",
            "note": "가족 활동",
            "grammar": [
              {
                "word": "grillen",
                "meaning": "바비큐하다",
                "explain": "wir 주어 → grillen 복수형"
              },
              {
                "word": "im Garten",
                "meaning": "정원에서",
                "explain": "in + dem = im"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich rufe meine Mutter jeden Sonntag an.",
            "ko": "매주 일요일 어머니께 전화해요.",
            "note": "연락 습관",
            "grammar": [
              {
                "word": "rufe ... an",
                "meaning": "전화하다",
                "explain": "분리동사 an|rufen"
              },
              {
                "word": "jeden Sonntag",
                "meaning": "매주 일요일",
                "explain": "jeder + Sonntag(m) 4격 시간"
              }
            ],
            "blank": {
              "word": "an",
              "position": "Ich rufe meine Mutter jeden Sonntag ___.",
              "options": [
                "an",
                "auf",
                "ein",
                "zu"
              ],
              "hint": "anrufen의 분리 전철은?"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "weg",
    "topic_de": "Wegbeschreibung",
    "topic_ko": "길 안내",
    "description_ko": "길 묻고 답하기. Sprechen & Schreiben 모두.",
    "sections": [
      {
        "title_de": "Nach dem Weg fragen",
        "title_ko": "길 묻기",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Entschuldigung, wie komme ich zum Bahnhof?",
            "ko": "실례합니다, 역에 어떻게 가나요?",
            "note": "기본 길 묻기",
            "grammar": [
              {
                "word": "wie",
                "meaning": "어떻게",
                "explain": "의문사"
              },
              {
                "word": "zum Bahnhof",
                "meaning": "역으로",
                "explain": "zu + dem = zum. Bahnhof(m) 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Wo ist die nächste U-Bahn-Station?",
            "ko": "가장 가까운 지하철역이 어디인가요?",
            "note": "위치 묻기",
            "grammar": [
              {
                "word": "Wo",
                "meaning": "어디",
                "explain": "의문사"
              },
              {
                "word": "die nächste",
                "meaning": "가장 가까운",
                "explain": "nah(가까운)의 최상급. 여성 1격 -e"
              }
            ],
            "blank": null
          },
          {
            "de": "Wie weit ist es bis zum Stadtzentrum?",
            "ko": "시내 중심까지 얼마나 멀어요?",
            "note": "거리 묻기",
            "grammar": [
              {
                "word": "Wie weit",
                "meaning": "얼마나 먼",
                "explain": "wie + 형용사"
              },
              {
                "word": "bis zum",
                "meaning": "~까지",
                "explain": "bis + zu + dem = bis zum"
              }
            ],
            "blank": null
          },
          {
            "de": "Ist es weit zu Fuß?",
            "ko": "걸어서 먼가요?",
            "note": "도보 거리 확인",
            "grammar": [
              {
                "word": "zu Fuß",
                "meaning": "걸어서",
                "explain": "관용표현. zu + Fuß(m)"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Weg erklären",
        "title_ko": "길 설명",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Gehen Sie geradeaus bis zur Ampel.",
            "ko": "신호등까지 직진하세요.",
            "note": "직진 지시",
            "grammar": [
              {
                "word": "Gehen Sie",
                "meaning": "가세요",
                "explain": "명령문. Sie 형태"
              },
              {
                "word": "geradeaus",
                "meaning": "직진",
                "explain": "부사"
              },
              {
                "word": "bis zur Ampel",
                "meaning": "신호등까지",
                "explain": "bis + zu + der = bis zur. Ampel(f)"
              }
            ],
            "blank": null
          },
          {
            "de": "An der Kreuzung biegen Sie links ab.",
            "ko": "교차로에서 왼쪽으로 꺾으세요.",
            "note": "방향 전환",
            "grammar": [
              {
                "word": "An der Kreuzung",
                "meaning": "교차로에서",
                "explain": "an + 3격. die Kreuzung → der"
              },
              {
                "word": "biegen Sie ... ab",
                "meaning": "꺾으세요",
                "explain": "분리동사 ab|biegen + 명령문"
              },
              {
                "word": "links",
                "meaning": "왼쪽으로",
                "explain": "부사"
              }
            ],
            "blank": {
              "word": "ab",
              "position": "An der Kreuzung biegen Sie links ___.",
              "options": [
                "ab",
                "auf",
                "an",
                "ein"
              ],
              "hint": "abbiegen의 분리 전철은?"
            }
          },
          {
            "de": "Nach ungefähr 200 Metern sehen Sie das Gebäude.",
            "ko": "약 200미터 후에 건물이 보입니다.",
            "note": "거리 + 결과",
            "grammar": [
              {
                "word": "Nach ungefähr 200 Metern",
                "meaning": "약 200미터 후에",
                "explain": "nach + 3격. Meter(m) 복수 → Metern"
              },
              {
                "word": "sehen Sie",
                "meaning": "보일 것입니다",
                "explain": "도치 (Nach~ 앞)"
              }
            ],
            "blank": null
          },
          {
            "de": "Das Rathaus ist auf der rechten Seite.",
            "ko": "시청은 오른쪽에 있어요.",
            "note": "위치 설명",
            "grammar": [
              {
                "word": "auf der rechten Seite",
                "meaning": "오른쪽에",
                "explain": "auf + 3격. die Seite → der. recht 어미 -en"
              }
            ],
            "blank": null
          },
          {
            "de": "Die Post ist gegenüber der Bank.",
            "ko": "우체국은 은행 건너편에 있어요.",
            "note": "건너편 표현",
            "grammar": [
              {
                "word": "gegenüber",
                "meaning": "건너편에",
                "explain": "전치사 + 3격"
              },
              {
                "word": "der Bank",
                "meaning": "은행의",
                "explain": "die Bank → der(3격)"
              }
            ],
            "blank": {
              "word": "gegenüber",
              "position": "Die Post ist ___ der Bank.",
              "options": [
                "gegenüber",
                "neben",
                "bei",
                "an"
              ],
              "hint": "'건너편에'를 뜻하는 전치사는?"
            }
          },
          {
            "de": "Es ist ungefähr 10 Minuten zu Fuß.",
            "ko": "걸어서 약 10분이에요.",
            "note": "소요 시간",
            "grammar": [
              {
                "word": "ungefähr",
                "meaning": "대략",
                "explain": "부사"
              },
              {
                "word": "zu Fuß",
                "meaning": "걸어서",
                "explain": "관용표현"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "wetter",
    "topic_de": "Wetter & Jahreszeiten",
    "topic_ko": "날씨 / 계절",
    "description_ko": "날씨 묘사, 계절 표현, 날씨별 활동.",
    "sections": [
      {
        "title_de": "Wetter beschreiben",
        "title_ko": "날씨 묘사",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Heute ist das Wetter sehr schön.",
            "ko": "오늘 날씨 정말 좋네요.",
            "note": "기본 날씨 표현",
            "grammar": [
              {
                "word": "das Wetter",
                "meaning": "날씨",
                "explain": "중성명사 1격"
              }
            ],
            "blank": null
          },
          {
            "de": "Es regnet stark.",
            "ko": "비가 많이 와요.",
            "note": "비 표현",
            "grammar": [
              {
                "word": "Es regnet",
                "meaning": "비가 온다",
                "explain": "비인칭 주어 es + regnen"
              },
              {
                "word": "stark",
                "meaning": "많이, 세게",
                "explain": "부사"
              }
            ],
            "blank": null
          },
          {
            "de": "Morgen soll es sonnig werden.",
            "ko": "내일은 맑을 거래요.",
            "note": "일기예보",
            "grammar": [
              {
                "word": "soll ... werden",
                "meaning": "~이 될 거라고 한다",
                "explain": "sollen = 소문/예보"
              },
              {
                "word": "sonnig",
                "meaning": "맑은",
                "explain": "형용사"
              }
            ],
            "blank": null
          },
          {
            "de": "Im Winter ist es sehr kalt und es schneit oft.",
            "ko": "겨울에는 매우 춥고 눈이 자주 와요.",
            "note": "계절 날씨",
            "grammar": [
              {
                "word": "Im Winter",
                "meaning": "겨울에",
                "explain": "in + dem = im"
              },
              {
                "word": "Es schneit",
                "meaning": "눈이 온다",
                "explain": "비인칭 주어 es"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Jahreszeiten & Aktivitäten",
        "title_ko": "계절 / 활동",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Meine Lieblingsjahreszeit ist der Frühling.",
            "ko": "제가 가장 좋아하는 계절은 봄이에요.",
            "note": "계절 선호도",
            "grammar": [
              {
                "word": "Meine Lieblingsjahreszeit",
                "meaning": "내가 가장 좋아하는 계절",
                "explain": "Lieblings- + Jahreszeit(f)"
              },
              {
                "word": "der Frühling",
                "meaning": "봄",
                "explain": "남성명사"
              }
            ],
            "blank": null
          },
          {
            "de": "Im Sommer fahre ich gerne ans Meer.",
            "ko": "여름에는 바다에 가는 걸 좋아해요.",
            "note": "여름 활동",
            "grammar": [
              {
                "word": "ans Meer",
                "meaning": "바다로",
                "explain": "an + das = ans. 방향(4격)"
              }
            ],
            "blank": null
          },
          {
            "de": "Im Herbst sind die Blätter bunt.",
            "ko": "가을에는 잎이 형형색색이에요.",
            "note": "가을 풍경",
            "grammar": [
              {
                "word": "Im Herbst",
                "meaning": "가을에",
                "explain": "in + dem = im"
              },
              {
                "word": "die Blätter",
                "meaning": "잎들",
                "explain": "Blatt(n) 복수 = Blätter"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "bildung",
    "topic_de": "Ausbildung & Lernen",
    "topic_ko": "교육 / 학습",
    "description_ko": "학교, 대학, 어학 학습 관련 표현.",
    "sections": [
      {
        "title_de": "Schule & Studium",
        "title_ko": "학교 / 대학",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich habe mein Abitur letztes Jahr gemacht.",
            "ko": "작년에 고등학교 졸업시험을 봤어요.",
            "note": "고교 졸업",
            "grammar": [
              {
                "word": "mein Abitur",
                "meaning": "나의 졸업시험",
                "explain": "Abitur(n) = 독일 고교 졸업시험"
              },
              {
                "word": "letztes Jahr",
                "meaning": "작년",
                "explain": "시간 표현. 4격 무관사"
              },
              {
                "word": "gemacht",
                "meaning": "했다",
                "explain": "machen 과거분사. 현재완료"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich studiere Informatik an der TU München.",
            "ko": "뮌헨 공대에서 정보학을 전공합니다.",
            "note": "대학 소개",
            "grammar": [
              {
                "word": "Informatik",
                "meaning": "정보학",
                "explain": "학과 관사 없이"
              },
              {
                "word": "an der TU München",
                "meaning": "뮌헨 공대에서",
                "explain": "an + 3격. die TU → der"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich bin im dritten Semester.",
            "ko": "3학기입니다.",
            "note": "학기 표현",
            "grammar": [
              {
                "word": "im dritten Semester",
                "meaning": "3학기에",
                "explain": "in + dem = im. dritt + Semester(n) 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Mein Lieblingsfach ist Mathematik.",
            "ko": "제가 가장 좋아하는 과목은 수학이에요.",
            "note": "좋아하는 과목",
            "grammar": [
              {
                "word": "Mein Lieblingsfach",
                "meaning": "내 최애 과목",
                "explain": "Fach(n) 1격"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Sprache lernen",
        "title_ko": "언어 학습",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich lerne seit einem Jahr Deutsch.",
            "ko": "1년째 독일어를 배우고 있어요.",
            "note": "학습 기간",
            "grammar": [
              {
                "word": "seit einem Jahr",
                "meaning": "1년 전부터",
                "explain": "seit + 3격. ein Jahr(n) → einem Jahr"
              }
            ],
            "blank": {
              "word": "einem",
              "position": "Ich lerne seit ___ Jahr Deutsch.",
              "options": [
                "einem",
                "einen",
                "einer",
                "ein"
              ],
              "hint": "seit + 중성 3격 부정관사는?"
            }
          },
          {
            "de": "Ich möchte die Goethe A2 Prüfung bestehen.",
            "ko": "괴테 A2 시험에 합격하고 싶어요.",
            "note": "시험 목표",
            "grammar": [
              {
                "word": "die Goethe A2 Prüfung",
                "meaning": "괴테 A2 시험을",
                "explain": "Prüfung(f) 4격"
              },
              {
                "word": "bestehen",
                "meaning": "합격하다",
                "explain": "möchte 뒤 원형"
              }
            ],
            "blank": null
          },
          {
            "de": "Deutsch ist eine schwere Sprache, aber ich gebe nicht auf.",
            "ko": "독일어는 어려운 언어이지만 포기하지 않아요.",
            "note": "학습 동기",
            "grammar": [
              {
                "word": "eine schwere Sprache",
                "meaning": "어려운 언어",
                "explain": "Sprache(f). eine + 형용사 -e"
              },
              {
                "word": "gebe ... auf",
                "meaning": "포기하다",
                "explain": "분리동사 auf|geben"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich lerne am liebsten mit Filmen und Büchern.",
            "ko": "영화와 책으로 공부하는 걸 가장 좋아해요.",
            "note": "학습 방법",
            "grammar": [
              {
                "word": "am liebsten",
                "meaning": "가장 즐겨",
                "explain": "gern 최상급"
              },
              {
                "word": "mit Filmen und Büchern",
                "meaning": "영화와 책으로",
                "explain": "mit + 3격 복수. Film → Filmen, Buch → Büchern"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "feiertage",
    "topic_de": "Feiertage & Feste",
    "topic_ko": "공휴일 / 축제",
    "description_ko": "명절, 생일, 축제 등 행사 관련 표현.",
    "sections": [
      {
        "title_de": "Feste feiern",
        "title_ko": "축제 / 기념일",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Wann hast du Geburtstag?",
            "ko": "생일이 언제야?",
            "note": "생일 묻기",
            "grammar": [
              {
                "word": "Wann",
                "meaning": "언제",
                "explain": "의문사"
              },
              {
                "word": "hast ... Geburtstag",
                "meaning": "생일이 있다",
                "explain": "haben + Geburtstag"
              }
            ],
            "blank": null
          },
          {
            "de": "Mein Geburtstag ist am 15. Juni.",
            "ko": "제 생일은 6월 15일이에요.",
            "note": "생일 답변",
            "grammar": [
              {
                "word": "am 15. Juni",
                "meaning": "6월 15일에",
                "explain": "am + 서수 날짜"
              }
            ],
            "blank": null
          },
          {
            "de": "Zu Weihnachten essen wir mit der Familie.",
            "ko": "크리스마스에는 가족과 식사해요.",
            "note": "크리스마스 전통",
            "grammar": [
              {
                "word": "Zu Weihnachten",
                "meaning": "크리스마스에",
                "explain": "zu + 축제명"
              },
              {
                "word": "mit der Familie",
                "meaning": "가족과",
                "explain": "mit + 3격. die Familie → der"
              }
            ],
            "blank": null
          },
          {
            "de": "Silvester feiern wir mit Freunden.",
            "ko": "새해 전야는 친구들과 보내요.",
            "note": "신년 전통",
            "grammar": [
              {
                "word": "Silvester",
                "meaning": "새해 전야",
                "explain": "관사 없이"
              },
              {
                "word": "mit Freunden",
                "meaning": "친구들과",
                "explain": "mit + 3격 복수"
              }
            ],
            "blank": null
          },
          {
            "de": "Herzlichen Glückwunsch zum Geburtstag!",
            "ko": "생일 축하합니다!",
            "note": "축하 표현",
            "grammar": [
              {
                "word": "Herzlichen Glückwunsch",
                "meaning": "진심 축하",
                "explain": "Glückwunsch(m) 4격. herzlich 어미 -en"
              },
              {
                "word": "zum Geburtstag",
                "meaning": "생일을 맞아",
                "explain": "zu + dem = zum"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Einladung zur Feier",
        "title_ko": "행사 초대",
        "skill": "schreiben",
        "phrases": [
          {
            "de": "Ich lade dich zu meiner Geburtstagsparty ein.",
            "ko": "내 생일 파티에 초대할게.",
            "note": "초대 문장",
            "grammar": [
              {
                "word": "lade ... ein",
                "meaning": "초대하다",
                "explain": "분리동사 ein|laden"
              },
              {
                "word": "zu meiner Geburtstagsparty",
                "meaning": "내 생일 파티에",
                "explain": "zu + 3격. meine Party(f) → meiner"
              }
            ],
            "blank": null
          },
          {
            "de": "Die Party findet am Samstag um 19 Uhr statt.",
            "ko": "파티는 토요일 19시에 열려요.",
            "note": "행사 시간",
            "grammar": [
              {
                "word": "findet ... statt",
                "meaning": "개최되다",
                "explain": "분리동사 statt|finden"
              },
              {
                "word": "am Samstag",
                "meaning": "토요일에",
                "explain": "am + 요일"
              }
            ],
            "blank": {
              "word": "statt",
              "position": "Die Party findet am Samstag ___.",
              "options": [
                "statt",
                "an",
                "ein",
                "auf"
              ],
              "hint": "stattfinden의 분리 전철은?"
            }
          },
          {
            "de": "Kannst du kommen?",
            "ko": "올 수 있어?",
            "note": "참석 확인",
            "grammar": [
              {
                "word": "Kannst",
                "meaning": "~할 수 있다",
                "explain": "können 2인칭"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "planung",
    "topic_de": "Zusammen planen",
    "topic_ko": "함께 계획하기",
    "description_ko": "Sprechen Teil 3 대비. 파트너와 약속/계획 협상.",
    "sections": [
      {
        "title_de": "Vorschläge machen",
        "title_ko": "제안하기",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Wir sollten zusammen ein Geschenk kaufen.",
            "ko": "우리 같이 선물을 사는 게 좋겠어.",
            "note": "제안 시작",
            "grammar": [
              {
                "word": "sollten",
                "meaning": "~하는 게 좋다",
                "explain": "sollen 접속법2식. 제안"
              },
              {
                "word": "ein Geschenk",
                "meaning": "선물 하나",
                "explain": "Geschenk(n) 4격"
              }
            ],
            "blank": null
          },
          {
            "de": "Wie wäre es mit einem Kinobesuch?",
            "ko": "영화 관람은 어때?",
            "note": "활동 제안",
            "grammar": [
              {
                "word": "Wie wäre es",
                "meaning": "어떨까",
                "explain": "wäre = sein 접속법2식"
              },
              {
                "word": "mit einem Kinobesuch",
                "meaning": "영화 관람과 함께",
                "explain": "mit + 3격. ein Kinobesuch(m) → einem"
              }
            ],
            "blank": null
          },
          {
            "de": "Wir könnten zusammen kochen.",
            "ko": "우리 같이 요리할 수도 있어.",
            "note": "제안형",
            "grammar": [
              {
                "word": "könnten",
                "meaning": "~할 수 있을 것이다",
                "explain": "können 접속법2식. 부드러운 제안"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich schlage vor, dass wir am Freitag gehen.",
            "ko": "금요일에 가는 걸 제안해.",
            "note": "명시적 제안",
            "grammar": [
              {
                "word": "schlage vor",
                "meaning": "제안하다",
                "explain": "분리동사 vor|schlagen"
              },
              {
                "word": "dass",
                "meaning": "~라는 것을",
                "explain": "종속접속사. 동사(gehen) 끝으로"
              },
              {
                "word": "am Freitag",
                "meaning": "금요일에",
                "explain": "am + 요일"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Zustimmen",
        "title_ko": "동의하기",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Das ist eine gute Idee!",
            "ko": "좋은 생각이야!",
            "note": "긍정 반응",
            "grammar": [
              {
                "word": "eine gute Idee",
                "meaning": "좋은 아이디어",
                "explain": "Idee(f) 1격. eine + gute"
              }
            ],
            "blank": null
          },
          {
            "de": "Einverstanden!",
            "ko": "동의해!",
            "note": "간단한 동의",
            "grammar": [
              {
                "word": "Einverstanden",
                "meaning": "동의하는",
                "explain": "과거분사. einverstanden sein = 동의하다"
              }
            ],
            "blank": null
          },
          {
            "de": "Ja, das passt mir gut.",
            "ko": "응, 그게 나한테 맞아.",
            "note": "시간 동의",
            "grammar": [
              {
                "word": "passt mir",
                "meaning": "나에게 맞다",
                "explain": "passen + 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Gerne! Das machen wir so.",
            "ko": "좋아! 그렇게 하자.",
            "note": "열정적 동의",
            "grammar": [
              {
                "word": "Gerne",
                "meaning": "기꺼이",
                "explain": "부사"
              },
              {
                "word": "Das machen wir so",
                "meaning": "그렇게 하자",
                "explain": "Das = 4격. 도치"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Ablehnen",
        "title_ko": "거절하기",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Das finde ich nicht so gut.",
            "ko": "그건 별로인 거 같아.",
            "note": "소극적 거절",
            "grammar": [
              {
                "word": "finde",
                "meaning": "생각하다",
                "explain": "finden = ~라고 생각하다"
              },
              {
                "word": "nicht so gut",
                "meaning": "그렇게 좋지 않은",
                "explain": "완곡한 부정"
              }
            ],
            "blank": null
          },
          {
            "de": "Da bin ich leider nicht frei.",
            "ko": "그때는 안타깝지만 시간이 없어.",
            "note": "시간 거절",
            "grammar": [
              {
                "word": "Da",
                "meaning": "그때에",
                "explain": "부사. 시간 지시"
              },
              {
                "word": "nicht frei",
                "meaning": "시간 없는",
                "explain": "frei(비어있는)의 부정"
              }
            ],
            "blank": null
          },
          {
            "de": "Hast du einen anderen Vorschlag?",
            "ko": "다른 제안 있어?",
            "note": "대안 요청",
            "grammar": [
              {
                "word": "einen anderen Vorschlag",
                "meaning": "다른 제안",
                "explain": "Vorschlag(m) 4격"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Kompromiss finden",
        "title_ko": "타협점 찾기",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Wie wäre es, wenn wir uns in der Mitte treffen?",
            "ko": "중간쯤에서 만나는 건 어때?",
            "note": "절충안",
            "grammar": [
              {
                "word": "wenn",
                "meaning": "만약 ~하면",
                "explain": "종속접속사"
              },
              {
                "word": "uns ... treffen",
                "meaning": "서로 만나다",
                "explain": "sich treffen"
              },
              {
                "word": "in der Mitte",
                "meaning": "중간에",
                "explain": "in + 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Gut, dann machen wir es am Samstag statt am Freitag.",
            "ko": "그럼 금요일 대신 토요일로 하자.",
            "note": "조건부 동의",
            "grammar": [
              {
                "word": "statt",
                "meaning": "~대신",
                "explain": "전치사 + 2격 또는 관사 생략"
              }
            ],
            "blank": null
          },
          {
            "de": "Treffen wir uns also um 14 Uhr.",
            "ko": "그럼 14시에 만나자.",
            "note": "결론",
            "grammar": [
              {
                "word": "Treffen wir uns",
                "meaning": "만나자",
                "explain": "권유 형태. 1인칭 복수 동사가 맨 앞"
              },
              {
                "word": "also",
                "meaning": "그러니",
                "explain": "부사"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  },
  {
    "id": "informationen",
    "topic_de": "Informationen erfragen",
    "topic_ko": "정보 문의",
    "description_ko": "관광안내소, 역, 공공기관 등에서 정보 묻기.",
    "sections": [
      {
        "title_de": "Allgemeine Fragen",
        "title_ko": "일반 질문",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Könnten Sie mir bitte helfen?",
            "ko": "도와주실 수 있으세요?",
            "note": "도움 요청",
            "grammar": [
              {
                "word": "Könnten",
                "meaning": "~해주실 수 있을까요",
                "explain": "können 접속법2식"
              },
              {
                "word": "mir",
                "meaning": "나에게",
                "explain": "helfen + 3격"
              }
            ],
            "blank": null
          },
          {
            "de": "Können Sie mir sagen, wo die Toilette ist?",
            "ko": "화장실이 어디 있는지 알려주실 수 있나요?",
            "note": "위치 묻기 (간접의문문)",
            "grammar": [
              {
                "word": "wo",
                "meaning": "어디",
                "explain": "의문사. 간접의문문 → 동사 끝으로"
              },
              {
                "word": "die Toilette",
                "meaning": "화장실",
                "explain": "여성명사 1격(부문장 주어)"
              },
              {
                "word": "ist",
                "meaning": "이다",
                "explain": "sein. 부문장 끝"
              }
            ],
            "blank": {
              "word": "wo",
              "position": "Können Sie mir sagen, ___ die Toilette ist?",
              "options": [
                "wo",
                "wann",
                "wie",
                "was"
              ],
              "hint": "'어디'를 묻는 의문사는?"
            }
          },
          {
            "de": "Wissen Sie, wann der Zug ankommt?",
            "ko": "기차가 언제 도착하는지 아세요?",
            "note": "시간 묻기 (간접의문문)",
            "grammar": [
              {
                "word": "wann",
                "meaning": "언제",
                "explain": "의문사"
              },
              {
                "word": "ankommt",
                "meaning": "도착하다",
                "explain": "ankommen의 3인칭. 간접의문문 → 끝"
              }
            ],
            "blank": null
          },
          {
            "de": "Gibt es hier in der Nähe einen Supermarkt?",
            "ko": "이 근처에 슈퍼마켓이 있나요?",
            "note": "근처 시설 문의",
            "grammar": [
              {
                "word": "Gibt es",
                "meaning": "~이 있다",
                "explain": "es gibt + 4격"
              },
              {
                "word": "in der Nähe",
                "meaning": "근처에",
                "explain": "관용표현"
              },
              {
                "word": "einen Supermarkt",
                "meaning": "슈퍼마켓 하나",
                "explain": "Supermarkt(m) 4격"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Öffnungszeiten & Preise",
        "title_ko": "영업시간 / 가격",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Wann haben Sie geöffnet?",
            "ko": "언제 영업하세요?",
            "note": "영업시간 문의",
            "grammar": [
              {
                "word": "geöffnet",
                "meaning": "열린",
                "explain": "öffnen 과거분사. haben + P.P."
              }
            ],
            "blank": null
          },
          {
            "de": "Wie viel kostet der Eintritt?",
            "ko": "입장료가 얼마예요?",
            "note": "입장료 문의",
            "grammar": [
              {
                "word": "Wie viel",
                "meaning": "얼마",
                "explain": "의문사"
              },
              {
                "word": "der Eintritt",
                "meaning": "입장료",
                "explain": "남성명사 1격(주어)"
              }
            ],
            "blank": null
          },
          {
            "de": "Gibt es eine Ermäßigung für Studenten?",
            "ko": "학생 할인이 있나요?",
            "note": "할인 문의",
            "grammar": [
              {
                "word": "eine Ermäßigung",
                "meaning": "할인",
                "explain": "Ermäßigung(f) 4격"
              },
              {
                "word": "für Studenten",
                "meaning": "학생을 위한",
                "explain": "für + 4격 복수"
              }
            ],
            "blank": null
          }
        ]
      },
      {
        "title_de": "Reservierungen",
        "title_ko": "예약",
        "skill": "sprechen",
        "phrases": [
          {
            "de": "Ich möchte einen Tisch für heute Abend reservieren.",
            "ko": "오늘 저녁 자리를 예약하고 싶어요.",
            "note": "식당 예약",
            "grammar": [
              {
                "word": "einen Tisch",
                "meaning": "테이블",
                "explain": "Tisch(m) 4격"
              },
              {
                "word": "für heute Abend",
                "meaning": "오늘 저녁을 위해",
                "explain": "für + 4격. heute Abend = 부사구"
              }
            ],
            "blank": null
          },
          {
            "de": "Haben Sie noch ein Zimmer frei?",
            "ko": "아직 방 하나 비어 있나요?",
            "note": "호텔 공실 확인",
            "grammar": [
              {
                "word": "ein Zimmer",
                "meaning": "방 하나",
                "explain": "Zimmer(n) 4격"
              },
              {
                "word": "frei",
                "meaning": "비어있는",
                "explain": "형용사. 술어"
              }
            ],
            "blank": null
          },
          {
            "de": "Ich möchte meine Reservierung bestätigen.",
            "ko": "예약을 확인하고 싶습니다.",
            "note": "예약 확인",
            "grammar": [
              {
                "word": "meine Reservierung",
                "meaning": "나의 예약",
                "explain": "Reservierung(f) 4격"
              },
              {
                "word": "bestätigen",
                "meaning": "확인하다",
                "explain": "möchte 뒤 원형"
              }
            ],
            "blank": null
          }
        ]
      }
    ]
  }
]