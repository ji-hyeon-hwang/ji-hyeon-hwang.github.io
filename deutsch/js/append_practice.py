import json

# Read current file
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON part
prefix = 'const PRACTICE_DATA = '
json_str = content[len(prefix):]

# Parse existing data
data = json.loads(json_str)
print(f"Current topics: {len(data)}, phrases: {sum(sum(len(s['phrases']) for s in t['sections']) for t in data)}")

new_topics_json = r'''
[
  {
    "id": "tagesablauf",
    "topic_de": "Tagesablauf",
    "topic_ko": "\uc77c\uacfc \uc124\uba85",
    "description_ko": "Sprechen Teil 2 \ub300\ube44. \ud558\ub8e8 \uc77c\uacfc\ub97c \uc2dc\uac04\uc21c\uc73c\ub85c \uc124\uba85\ud558\uae30.",
    "sections": [
      {
        "title_de": "Morgenroutine",
        "title_ko": "\uc544\uce68 \ub8e8\ud2f4",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich stehe jeden Morgen um 7 Uhr auf.", "ko": "\ub9e4\uc77c \uc544\uce68 7\uc2dc\uc5d0 \uc77c\uc5b4\ub0a9\ub2c8\ub2e4.", "note": "\ubd84\ub9ac\ub3d9\uc0ac aufstehen", "grammar": [{"word": "stehe ... auf", "meaning": "\uc77c\uc5b4\ub098\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac auf|stehen"}, {"word": "jeden Morgen", "meaning": "\ub9e4\uc77c \uc544\uce68", "explain": "jeder + Morgen(m) 4\uaca9"}, {"word": "um 7 Uhr", "meaning": "7\uc2dc\uc5d0", "explain": "um + \uc2dc\uac01"}], "blank": {"word": "auf", "position": "Ich stehe jeden Morgen um 7 Uhr ___.", "options": ["auf", "an", "ein", "aus"], "hint": "aufstehen\uc758 \ubd84\ub9ac \uc804\ucca0\uc740?"}},
          {"de": "Dann dusche ich mich und ziehe mich an.", "ko": "\uadf8\ub9ac\uace0 \uc0e4\uc6cc\ud558\uace0 \uc637\uc744 \uc785\uc2b5\ub2c8\ub2e4.", "note": "\uc7ac\uadc0\ub3d9\uc0ac \uc5f0\uc18d \uc0ac\uc6a9", "grammar": [{"word": "dusche mich", "meaning": "\uc0e4\uc6cc\ud558\ub2e4", "explain": "sich duschen. mich = \uc7ac\uadc0\ub300\uba85\uc0ac 4\uaca9"}, {"word": "ziehe mich an", "meaning": "\uc637\uc744 \uc785\ub2e4", "explain": "sich anziehen. \ubd84\ub9ac\ub3d9\uc0ac + \uc7ac\uadc0"}], "blank": {"word": "mich", "position": "Dann dusche ich ___ und ziehe ___ an.", "options": ["mich", "mir", "sich", "dich"], "hint": "ich\uc758 \uc7ac\uadc0\ub300\uba85\uc0ac 4\uaca9\uc740?"}},
          {"de": "Zum Fr\u00fchst\u00fcck esse ich meistens Brot mit K\u00e4se.", "ko": "\uc544\uce68\uc73c\ub85c \ubcf4\ud1b5 \uce58\uc988\ub97c \uacb8\ub4e4\uc778 \ube75\uc744 \uba39\uc2b5\ub2c8\ub2e4.", "note": "\uc2dd\uc0ac \ud45c\ud604", "grammar": [{"word": "Zum Fr\u00fchst\u00fcck", "meaning": "\uc544\uce68\uc2dd\uc0ac\ub85c", "explain": "zu + dem = zum. Fr\u00fchst\u00fcck(n) 3\uaca9"}, {"word": "meistens", "meaning": "\ub300\ubd80\ubd84", "explain": "\ube48\ub3c4 \ubd80\uc0ac"}, {"word": "mit K\u00e4se", "meaning": "\uce58\uc988\uc640 \ud568\uaed8", "explain": "mit + 3\uaca9"}], "blank": null},
          {"de": "Um halb acht verlasse ich das Haus.", "ko": "7\uc2dc 30\ubd84\uc5d0 \uc9d1\uc744 \ub098\uc12d\ub2c8\ub2e4.", "note": "halb acht = 7:30", "grammar": [{"word": "halb acht", "meaning": "7\uc2dc 30\ubd84", "explain": "halb + \uc22b\uc790 = \uadf8 \uc2dc\uac01\uc758 30\ubd84 \uc804"}, {"word": "verlasse", "meaning": "\ub5a0\ub098\ub2e4", "explain": "verlassen 1\uc778\uce6d"}, {"word": "das Haus", "meaning": "\uc9d1\uc744", "explain": "Haus(n) 4\uaca9"}], "blank": null}
        ]
      },
      {
        "title_de": "Arbeit / Schule",
        "title_ko": "\uc9c1\uc7a5 / \ud559\uad50",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich fahre mit der U-Bahn zur Arbeit.", "ko": "\uc9c0\ud558\ucca0\ub85c \ucd9c\uadfc\ud569\ub2c8\ub2e4.", "note": "\ucd9c\uadfc \uc218\ub2e8", "grammar": [{"word": "mit der U-Bahn", "meaning": "\uc9c0\ud558\ucca0\ub85c", "explain": "mit + 3\uaca9. die U-Bahn \u2192 der(3\uaca9)"}, {"word": "zur Arbeit", "meaning": "\uc9c1\uc7a5\uc73c\ub85c", "explain": "zu + der = zur. Arbeit(f) 3\uaca9"}], "blank": {"word": "mit", "position": "Ich fahre ___ der U-Bahn zur Arbeit.", "options": ["mit", "von", "bei", "zu"], "hint": "\uad50\ud1b5\uc218\ub2e8 \uc55e \uc804\uce58\uc0ac\ub294?"}},
          {"de": "Ich arbeite von 9 bis 18 Uhr.", "ko": "9\uc2dc\ubd80\ud130 18\uc2dc\uae4c\uc9c0 \uc77c\ud569\ub2c8\ub2e4.", "note": "\uadfc\ubb34 \uc2dc\uac04", "grammar": [{"word": "von 9 bis 18 Uhr", "meaning": "9\uc2dc\ubd80\ud130 18\uc2dc\uae4c\uc9c0", "explain": "von ... bis ... = ~\ubd80\ud130 ~\uae4c\uc9c0"}], "blank": null},
          {"de": "In der Mittagspause esse ich in der Kantine.", "ko": "\uc810\uc2ec\uc2dc\uac04\uc5d0 \uad6c\ub0b4\uc2dd\ub2f9\uc5d0\uc11c \uba39\uc2b5\ub2c8\ub2e4.", "note": "\uc810\uc2ec \ub8e8\ud2f4", "grammar": [{"word": "In der Mittagspause", "meaning": "\uc810\uc2ec\uc2dc\uac04\uc5d0", "explain": "in + 3\uaca9. die Mittagspause \u2192 der(3\uaca9)"}], "blank": null},
          {"de": "Nach der Arbeit gehe ich manchmal einkaufen.", "ko": "\ud1f4\uadfc \ud6c4 \uac00\ub054 \uc7a5\uc744 \ubd05\ub2c8\ub2e4.", "note": "\ud1f4\uadfc \ud6c4 \ud65c\ub3d9", "grammar": [{"word": "Nach der Arbeit", "meaning": "\uc77c \ud6c4\uc5d0", "explain": "nach + 3\uaca9. die Arbeit \u2192 der Arbeit"}, {"word": "einkaufen", "meaning": "\uc7a5\ubcf4\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac. gehen + \ub3d9\uc0ac\uc6d0\ud615"}], "blank": {"word": "Nach", "position": "___ der Arbeit gehe ich manchmal einkaufen.", "options": ["Nach", "Vor", "Bei", "Von"], "hint": "'~\ud6c4\uc5d0' \uc804\uce58\uc0ac\ub294?"}}
        ]
      },
      {
        "title_de": "Abend & Wochenende",
        "title_ko": "\uc800\ub141 & \uc8fc\ub9d0",
        "skill": "sprechen",
        "phrases": [
          {"de": "Abends koche ich meistens selbst.", "ko": "\uc800\ub141\uc5d0\ub294 \ubcf4\ud1b5 \uc9c1\uc811 \uc694\ub9ac\ud569\ub2c8\ub2e4.", "note": "\uc800\ub141 \ub8e8\ud2f4", "grammar": [{"word": "Abends", "meaning": "\uc800\ub141\uc5d0", "explain": "\ubd80\uc0ac. -s = \ubc18\ubcf5\uc801"}, {"word": "selbst", "meaning": "\uc9c1\uc811", "explain": "\ubd80\uc0ac"}], "blank": null},
          {"de": "Am Wochenende schlafe ich gerne l\u00e4nger.", "ko": "\uc8fc\ub9d0\uc5d0\ub294 \uc880 \ub354 \uc790\ub294 \uac78 \uc88b\uc544\ud574\uc694.", "note": "\uc8fc\ub9d0 \ub8e8\ud2f4", "grammar": [{"word": "Am Wochenende", "meaning": "\uc8fc\ub9d0\uc5d0", "explain": "an + dem = am"}, {"word": "l\u00e4nger", "meaning": "\ub354 \uc624\ub798", "explain": "lang\uc758 \ube44\uad50\uae09"}], "blank": null},
          {"de": "Sonntags treffe ich mich oft mit Freunden.", "ko": "\uc77c\uc694\uc77c\ub9c8\ub2e4 \uce5c\uad6c\ub4e4\uc744 \uc790\uc8fc \ub9cc\ub0a9\ub2c8\ub2e4.", "note": "\uc8fc\ub9d0 \uc0ac\uad50", "grammar": [{"word": "Sonntags", "meaning": "\uc77c\uc694\uc77c\ub9c8\ub2e4", "explain": "-s = \ubc18\ubcf5"}, {"word": "treffe mich", "meaning": "\ub9cc\ub098\ub2e4", "explain": "sich treffen. \uc7ac\uadc0\ub3d9\uc0ac"}, {"word": "mit Freunden", "meaning": "\uce5c\uad6c\ub4e4\uacfc", "explain": "mit + 3\uaca9 \ubcf5\uc218. Freund \u2192 Freunden"}], "blank": {"word": "mit", "position": "Ich treffe mich oft ___ Freunden.", "options": ["mit", "von", "bei", "zu"], "hint": "'~\uc640 \ud568\uaed8' \uc804\uce58\uc0ac\ub294?"}}
        ]
      }
    ]
  },
  {
    "id": "wohnen",
    "topic_de": "Wohnen",
    "topic_ko": "\uc8fc\uac70",
    "description_ko": "\uc9d1 \uad6c\ud558\uae30, \uc9d1 \ubb18\uc0ac, \uc774\uc6c3 \ubb38\uc81c. Schreiben & Sprechen \ubaa8\ub450.",
    "sections": [
      {
        "title_de": "Wohnung beschreiben",
        "title_ko": "\uc9d1 \ubb18\uc0ac",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich wohne in einer Zweizimmerwohnung im dritten Stock.", "ko": "3\uce35 \ud22c\ub8f8 \uc544\ud30c\ud2b8\uc5d0 \uc0b4\uc544\uc694.", "note": "\uc8fc\uac70 \ud615\ud0dc", "grammar": [{"word": "in einer Zweizimmerwohnung", "meaning": "\ud22c\ub8f8\uc5d0", "explain": "in + 3\uaca9. eine \u2192 einer(\uc5ec\uc131 3\uaca9)"}, {"word": "im dritten Stock", "meaning": "3\uce35\uc5d0", "explain": "in + dem = im. dritt \u2192 dritten(3\uaca9 \uc11c\uc218)"}], "blank": null},
          {"de": "Die Wohnung hat eine K\u00fcche, ein Bad und einen Balkon.", "ko": "\uc544\ud30c\ud2b8\uc5d0\ub294 \uc8fc\ubc29, \uc695\uc2e4, \ubc1c\ucf54\ub2c8\uac00 \uc788\uc5b4\uc694.", "note": "\ubc29 \uad6c\uc131", "grammar": [{"word": "eine K\u00fcche", "meaning": "\uc8fc\ubc29", "explain": "K\u00fcche(f) 4\uaca9"}, {"word": "ein Bad", "meaning": "\uc695\uc2e4", "explain": "Bad(n) 4\uaca9"}, {"word": "einen Balkon", "meaning": "\ubc1c\ucf54\ub2c8", "explain": "Balkon(m) 4\uaca9. einen = \ub0a8\uc131 4\uaca9"}], "blank": {"word": "einen", "position": "Die Wohnung hat ___ Balkon.", "options": ["einen", "ein", "eine", "einem"], "hint": "\ub0a8\uc131 4\uaca9 \ubd80\uc815\uad00\uc0ac\ub294?"}},
          {"de": "Die Miete betr\u00e4gt 650 Euro warm.", "ko": "\uad00\ub9ac\ube44 \ud3ec\ud568 \uc6d4\uc138\ub294 650\uc720\ub85c\uc785\ub2c8\ub2e4.", "note": "warm = \uad00\ub9ac\ube44 \ud3ec\ud568", "grammar": [{"word": "betr\u00e4gt", "meaning": "~\uc774\ub2e4(\uae08\uc561)", "explain": "betragen 3\uc778\uce6d"}, {"word": "warm", "meaning": "\uad00\ub9ac\ube44 \ud3ec\ud568", "explain": "Warmmiete \u2194 Kaltmiete"}], "blank": null}
        ]
      },
      {
        "title_de": "Wohnungssuche",
        "title_ko": "\uc9d1 \uad6c\ud558\uae30",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich suche eine Wohnung in der Stadtmitte.", "ko": "\uc2dc\ub0b4 \uc911\uc2ec\uc5d0 \uc788\ub294 \uc9d1\uc744 \ucc3e\uace0 \uc788\uc2b5\ub2c8\ub2e4.", "note": "\uc9d1 \uad6c\ud558\uae30 \uc774\uba54\uc77c", "grammar": [{"word": "in der Stadtmitte", "meaning": "\uc2dc\ub0b4 \uc911\uc2ec\uc5d0", "explain": "in + 3\uaca9. die Stadtmitte \u2192 der(3\uaca9)"}], "blank": null},
          {"de": "Ist die Wohnung noch frei?", "ko": "\uadf8 \uc9d1 \uc544\uc9c1 \ube44\uc5b4 \uc788\ub098\uc694?", "note": "\uacf5\uc2e4 \ud655\uc778", "grammar": [{"word": "noch", "meaning": "\uc544\uc9c1", "explain": "\ubd80\uc0ac"}, {"word": "frei", "meaning": "\ube44\uc5b4\uc788\ub294", "explain": "\ud615\uc6a9\uc0ac"}], "blank": null},
          {"de": "Kann ich die Wohnung besichtigen?", "ko": "\uc9d1\uc744 \ubcfc \uc218 \uc788\uc744\uae4c\uc694?", "note": "\ub0b4\ubc29 \uc694\uccad", "grammar": [{"word": "besichtigen", "meaning": "\ubc29\ubb38\ud558\uc5ec \ubcf4\ub2e4", "explain": "\ube44\ubd84\ub9ac\ub3d9\uc0ac. k\u00f6nnen \ub4a4 \uc6d0\ud615"}], "blank": null},
          {"de": "Sind Haustiere erlaubt?", "ko": "\ubc18\ub824\ub3d9\ubb3c \ud5c8\uc6a9\ub418\ub098\uc694?", "note": "\uc785\uc8fc \uc870\uac74", "grammar": [{"word": "Haustiere", "meaning": "\ubc18\ub824\ub3d9\ubb3c\ub4e4", "explain": "Haustier(n) \ubcf5\uc218"}, {"word": "erlaubt", "meaning": "\ud5c8\uc6a9\ub41c", "explain": "erlauben\uc758 \uacfc\uac70\ubd84\uc0ac. \uc218\ub3d9\ud0dc"}], "blank": null}
        ]
      },
      {
        "title_de": "Probleme in der Wohnung",
        "title_ko": "\uc9d1 \ubb38\uc81c",
        "skill": "schreiben",
        "phrases": [
          {"de": "In meiner Wohnung ist die Heizung kaputt.", "ko": "\uc6b0\ub9ac \uc9d1 \ub09c\ubc29\uc774 \uace0\uc7a5\ub0ac\uc2b5\ub2c8\ub2e4.", "note": "\uace0\uc7a5 \uc2e0\uace0", "grammar": [{"word": "In meiner Wohnung", "meaning": "\uc6b0\ub9ac \uc9d1\uc5d0", "explain": "in + 3\uaca9. meine Wohnung(f) \u2192 meiner"}, {"word": "kaputt", "meaning": "\uace0\uc7a5\ub09c", "explain": "\ud615\uc6a9\uc0ac"}], "blank": null},
          {"de": "Mein Nachbar macht nachts sehr viel L\u00e4rm.", "ko": "\uc774\uc6c3\uc774 \ubc24\uc5d0 \uc18c\uc74c\uc774 \ub108\ubb34 \uc2ec\ud569\ub2c8\ub2e4.", "note": "\uc18c\uc74c \ubd88\ub9cc", "grammar": [{"word": "nachts", "meaning": "\ubc24\uc5d0", "explain": "-s = \ubc18\ubcf5\uc801 \uc2dc\uac04"}, {"word": "L\u00e4rm", "meaning": "\uc18c\uc74c", "explain": "\ub0a8\uc131\uba85\uc0ac"}], "blank": null},
          {"de": "K\u00f6nnten Sie bitte einen Handwerker schicken?", "ko": "\uc218\ub9ac\uae30\uc0ac\ub97c \ubcf4\ub0b4\uc8fc\uc2e4 \uc218 \uc788\uc744\uae4c\uc694?", "note": "\uc218\ub9ac \uc694\uccad", "grammar": [{"word": "K\u00f6nnten", "meaning": "~\ud574\uc8fc\uc2e4 \uc218 \uc788\uc744\uae4c\uc694", "explain": "k\u00f6nnen\uc758 \uc811\uc18d\ubc952\uc2dd"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "arbeit",
    "topic_de": "Arbeit & Beruf",
    "topic_ko": "\uc9c1\uc7a5 / \uc9c1\uc5c5",
    "description_ko": "\uc9c1\uc7a5 \uc0dd\ud65c, \uad6c\uc9c1, \uc5c5\ubb34 \uad00\ub828 \ud45c\ud604.",
    "sections": [
      {
        "title_de": "\u00dcber den Beruf sprechen",
        "title_ko": "\uc9c1\uc5c5\uc5d0 \ub300\ud574 \ub9d0\ud558\uae30",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich arbeite als Krankenschwester in einem Krankenhaus.", "ko": "\ubcd1\uc6d0\uc5d0\uc11c \uac04\ud638\uc0ac\ub85c \uc77c\ud569\ub2c8\ub2e4.", "note": "\uc9c1\uc5c5 \uc124\uba85", "grammar": [{"word": "als", "meaning": "~\ub85c\uc11c", "explain": "\uc9c1\uc5c5 \uc55e\uc5d0. \uad00\uc0ac \uc5c6\uc774"}, {"word": "in einem Krankenhaus", "meaning": "\ubcd1\uc6d0\uc5d0\uc11c", "explain": "in + 3\uaca9. ein Krankenhaus(n) \u2192 einem"}], "blank": null},
          {"de": "Ich bin mit meiner Arbeit zufrieden.", "ko": "\uc77c\uc5d0 \ub9cc\uc871\ud569\ub2c8\ub2e4.", "note": "\uc9c1\uc5c5 \ub9cc\uc871\ub3c4", "grammar": [{"word": "mit meiner Arbeit", "meaning": "\ub098\uc758 \uc77c\uc5d0", "explain": "mit + 3\uaca9. zufrieden mit + Dat."}], "blank": null}
        ]
      },
      {
        "title_de": "Bewerbung",
        "title_ko": "\uc785\uc0ac \uc9c0\uc6d0",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich m\u00f6chte mich f\u00fcr die Stelle als Verk\u00e4ufer bewerben.", "ko": "\ud310\ub9e4\uc6d0 \uc790\ub9ac\uc5d0 \uc9c0\uc6d0\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.", "note": "\uc785\uc0ac \uc9c0\uc6d0 \uc774\uba54\uc77c", "grammar": [{"word": "mich ... bewerben", "meaning": "\uc9c0\uc6d0\ud558\ub2e4", "explain": "sich bewerben f\u00fcr + 4\uaca9"}, {"word": "f\u00fcr die Stelle", "meaning": "\uadf8 \uc790\ub9ac\uc5d0", "explain": "f\u00fcr + 4\uaca9"}, {"word": "als Verk\u00e4ufer", "meaning": "\ud310\ub9e4\uc6d0\uc73c\ub85c", "explain": "als + \uc9c1\uc5c5. \uad00\uc0ac \uc5c6\uc774"}], "blank": {"word": "f\u00fcr", "position": "Ich m\u00f6chte mich ___ die Stelle bewerben.", "options": ["f\u00fcr", "um", "auf", "an"], "hint": "sich bewerben + ? + Akk."}},
          {"de": "Im Anhang finden Sie meinen Lebenslauf.", "ko": "\ucca8\ubd80\ud30c\uc77c\uc5d0 \uc774\ub825\uc11c\uac00 \uc788\uc2b5\ub2c8\ub2e4.", "note": "\uc774\ub825\uc11c \ucca8\ubd80", "grammar": [{"word": "Im Anhang", "meaning": "\ucca8\ubd80\uc5d0", "explain": "in + dem = im"}, {"word": "meinen Lebenslauf", "meaning": "\ub098\uc758 \uc774\ub825\uc11c\ub97c", "explain": "Lebenslauf(m) 4\uaca9. mein \u2192 meinen"}], "blank": null}
        ]
      },
      {
        "title_de": "Krankmeldung",
        "title_ko": "\ubcd1\uac00 \uc2e0\uace0",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich bin leider krank und kann heute nicht zur Arbeit kommen.", "ko": "\uc548\ud0c0\uae4d\uc9c0\ub9cc \uc544\ud30c\uc11c \uc624\ub298 \ucd9c\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", "note": "\ubcd1\uac00 \uc774\uba54\uc77c", "grammar": [{"word": "zur Arbeit", "meaning": "\uc9c1\uc7a5\uc5d0", "explain": "zu + der = zur"}], "blank": null},
          {"de": "Ich komme voraussichtlich am Mittwoch wieder.", "ko": "\uc218\uc694\uc77c\uc5d0 \ubcf5\uadc0\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.", "note": "\ubcf5\uadc0 \uc608\uc815\uc77c", "grammar": [{"word": "voraussichtlich", "meaning": "\uc608\uc0c1\ucee8\ub300", "explain": "\ubd80\uc0ac"}, {"word": "am Mittwoch", "meaning": "\uc218\uc694\uc77c\uc5d0", "explain": "am + \uc694\uc77c"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "einkaufen",
    "topic_de": "Einkaufen",
    "topic_ko": "\uc1fc\ud551",
    "description_ko": "\uc0c1\uc810\uc5d0\uc11c \ubb3c\uac74 \uc0ac\uae30. \uac00\uaca9, \uad50\ud658, \ud658\ubd88.",
    "sections": [
      {
        "title_de": "Im Gesch\u00e4ft",
        "title_ko": "\uc0c1\uc810\uc5d0\uc11c",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich suche einen Wintermantel in Gr\u00f6\u00dfe M.", "ko": "M\uc0ac\uc774\uc988 \uaca8\uc6b8 \ucf54\ud2b8\ub97c \ucc3e\uace0 \uc788\uc5b4\uc694.", "note": "\ubb3c\uac74 \ucc3e\uae30", "grammar": [{"word": "einen Wintermantel", "meaning": "\uaca8\uc6b8 \ucf54\ud2b8", "explain": "Wintermantel(m) 4\uaca9"}, {"word": "in Gr\u00f6\u00dfe M", "meaning": "M\uc0ac\uc774\uc988", "explain": "in + Gr\u00f6\u00dfe. \uc0ac\uc774\uc988 \ud45c\ud604"}], "blank": null},
          {"de": "Haben Sie das auch in einer anderen Farbe?", "ko": "\ub2e4\ub978 \uc0c9\uc0c1\ub3c4 \uc788\ub098\uc694?", "note": "\uc0c9\uc0c1 \ubb38\uc758", "grammar": [{"word": "in einer anderen Farbe", "meaning": "\ub2e4\ub978 \uc0c9\uc73c\ub85c", "explain": "in + 3\uaca9. eine Farbe(f) \u2192 einer + anderen"}], "blank": null},
          {"de": "Wie viel kostet das?", "ko": "\uc774\uac70 \uc5bc\ub9c8\uc608\uc694?", "note": "\uac00\uaca9 \ubb38\uc758", "grammar": [{"word": "Wie viel", "meaning": "\uc5bc\ub9c8\ub098", "explain": "\uc758\ubb38\uc0ac"}], "blank": null},
          {"de": "Das ist mir zu teuer.", "ko": "\ub108\ubb34 \ube44\uc2f8\uc694.", "note": "\uac00\uaca9 \ud611\uc0c1", "grammar": [{"word": "mir", "meaning": "\ub098\uc5d0\uac8c\ub294", "explain": "3\uaca9. '\ub098\uc5d0\uac8c\ub294 \ub108\ubb34 \ube44\uc2f8\ub2e4'"}, {"word": "zu teuer", "meaning": "\ub108\ubb34 \ube44\uc2fc", "explain": "zu + \ud615\uc6a9\uc0ac = \ub108\ubb34 ~\ud55c"}], "blank": null},
          {"de": "Kann ich mit Karte bezahlen?", "ko": "\uce74\ub4dc\ub85c \uacb0\uc81c\ud560 \uc218 \uc788\ub098\uc694?", "note": "\uacb0\uc81c \ubc29\ubc95", "grammar": [{"word": "mit Karte", "meaning": "\uce74\ub4dc\ub85c", "explain": "mit + 3\uaca9(\uc218\ub2e8)"}], "blank": null}
        ]
      },
      {
        "title_de": "Umtausch",
        "title_ko": "\uad50\ud658 / \ubc18\ud488",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich m\u00f6chte diesen Pullover umtauschen.", "ko": "\uc774 \uc2a4\uc6e8\ud130\ub97c \uad50\ud658\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.", "note": "\uad50\ud658 \uc694\uccad", "grammar": [{"word": "diesen Pullover", "meaning": "\uc774 \uc2a4\uc6e8\ud130\ub97c", "explain": "dies + Pullover(m) 4\uaca9 \u2192 diesen"}, {"word": "umtauschen", "meaning": "\uad50\ud658\ud558\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac. m\u00f6chte \ub4a4 \uc6d0\ud615"}], "blank": null},
          {"de": "Kann ich mein Geld zur\u00fcckbekommen?", "ko": "\ud658\ubd88\ubc1b\uc744 \uc218 \uc788\ub098\uc694?", "note": "\ud658\ubd88 \uc694\uccad", "grammar": [{"word": "zur\u00fcckbekommen", "meaning": "\ub3cc\ub824\ubc1b\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac(zur\u00fcck|bekommen)"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "gesundheit",
    "topic_de": "Gesundheit",
    "topic_ko": "\uac74\uac15 / \ubcd1\uc6d0",
    "description_ko": "\uc99d\uc0c1 \uc124\uba85, \ubcd1\uc6d0 \ubc29\ubb38, \uc57d\uad6d \uc774\uc6a9.",
    "sections": [
      {
        "title_de": "Symptome beschreiben",
        "title_ko": "\uc99d\uc0c1 \uc124\uba85",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich habe starke Kopfschmerzen.", "ko": "\uc2ec\ud55c \ub450\ud1b5\uc774 \uc788\uc5b4\uc694.", "note": "\uc99d\uc0c1 \ud45c\ud604", "grammar": [{"word": "starke", "meaning": "\uc2ec\ud55c", "explain": "stark \ubcf5\uc218 \uc5b4\ubbf8 -e"}, {"word": "Kopfschmerzen", "meaning": "\ub450\ud1b5", "explain": "\ud56d\uc0c1 \ubcf5\uc218"}], "blank": null},
          {"de": "Mir ist schlecht.", "ko": "\uc18d\uc774 \uc548 \uc88b\uc544\uc694.", "note": "\uad6c\uc5ed\uac10", "grammar": [{"word": "Mir", "meaning": "\ub098\uc5d0\uac8c", "explain": "ich\uc758 3\uaca9. \uac10\uac01 \ud45c\ud604: Mir ist + \ud615\uc6a9\uc0ac"}], "blank": null},
          {"de": "Ich habe seit drei Tagen Husten und Schnupfen.", "ko": "3\uc77c\uc9f8 \uae30\uce68\uacfc \ucf67\ubb3c\uc774 \uc788\uc5b4\uc694.", "note": "\uac10\uae30 \uc99d\uc0c1", "grammar": [{"word": "seit drei Tagen", "meaning": "3\uc77c \uc804\ubd80\ud130", "explain": "seit + 3\uaca9. Tag(m) \u2192 Tagen(\ubcf5\uc218 3\uaca9)"}], "blank": {"word": "seit", "position": "Ich habe ___ drei Tagen Husten.", "options": ["seit", "vor", "ab", "f\u00fcr"], "hint": "'~\uc804\ubd80\ud130 \uacc4\uc18d' \uc804\uce58\uc0ac\ub294?"}},
          {"de": "Mein R\u00fccken tut mir weh.", "ko": "\ud5c8\ub9ac\uac00 \uc544\ud30c\uc694.", "note": "wehtun + Dat.", "grammar": [{"word": "tut ... weh", "meaning": "\uc544\ud504\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac weh|tun + 3\uaca9"}], "blank": null},
          {"de": "Ich habe Fieber, ungef\u00e4hr 38 Grad.", "ko": "\uc5f4\uc774 \uc788\uc5b4\uc694, \ub300\ub7b5 38\ub3c4.", "note": "\uccb4\uc628 \uc804\ub2ec", "grammar": [{"word": "Fieber", "meaning": "\uc5f4", "explain": "\uc911\uc131\uba85\uc0ac. \uad00\uc0ac \uc5c6\uc774"}], "blank": null}
        ]
      },
      {
        "title_de": "Beim Arzt",
        "title_ko": "\ubcd1\uc6d0\uc5d0\uc11c",
        "skill": "sprechen",
        "phrases": [
          {"de": "Ich brauche einen Termin beim Hausarzt.", "ko": "\uc8fc\uce58\uc758\uc5d0\uac8c \uc608\uc57d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.", "note": "\uc9c4\ub8cc \uc608\uc57d", "grammar": [{"word": "beim Hausarzt", "meaning": "\uc8fc\uce58\uc758\uc5d0\uac8c", "explain": "bei + dem = beim"}], "blank": null},
          {"de": "Sie sollten drei Tage im Bett bleiben.", "ko": "3\uc77c\uac04 \uce68\ub300\uc5d0 \ub204\uc6cc \uacc4\uc154\uc57c \ud569\ub2c8\ub2e4.", "note": "\uc758\uc0ac \uc9c0\uc2dc", "grammar": [{"word": "sollten", "meaning": "~\ud574\uc57c \ud569\ub2c8\ub2e4", "explain": "sollen\uc758 \uc811\uc18d\ubc952\uc2dd. \ubd80\ub4dc\ub7ec\uc6b4 \uc870\uc5b8"}, {"word": "im Bett", "meaning": "\uce68\ub300\uc5d0\uc11c", "explain": "in + dem = im. 3\uaca9(\uc704\uce58)"}], "blank": null}
        ]
      },
      {
        "title_de": "In der Apotheke",
        "title_ko": "\uc57d\uad6d\uc5d0\uc11c",
        "skill": "sprechen",
        "phrases": [
          {"de": "Haben Sie etwas gegen Kopfschmerzen?", "ko": "\ub450\ud1b5\uc57d \uc788\ub098\uc694?", "note": "\uc57d \uc694\uccad", "grammar": [{"word": "etwas gegen", "meaning": "~\uc5d0 \ud6a8\uacfc \uc788\ub294 \uac83", "explain": "gegen + 4\uaca9"}], "blank": null},
          {"de": "Nehmen Sie die Tabletten dreimal t\u00e4glich.", "ko": "\uc57d\uc744 \ud558\ub8e8 \uc138 \ubc88 \ubcf5\uc6a9\ud558\uc138\uc694.", "note": "\ubcf5\uc6a9 \uc9c0\uc2dc", "grammar": [{"word": "dreimal", "meaning": "\uc138 \ubc88", "explain": "drei + -mal = \ud69f\uc218"}, {"word": "t\u00e4glich", "meaning": "\ub9e4\uc77c", "explain": "\ubd80\uc0ac"}], "blank": null}
        ]
      }
    ]
  },
  {
    "id": "reisen",
    "topic_de": "Reisen & Verkehr",
    "topic_ko": "\uc5ec\ud589 / \uad50\ud1b5",
    "description_ko": "\ud638\ud154 \uc608\uc57d, \uad50\ud1b5\uc218\ub2e8, \uc5ec\ud589 \uacc4\ud68d.",
    "sections": [
      {
        "title_de": "Hotel buchen",
        "title_ko": "\ud638\ud154 \uc608\uc57d",
        "skill": "schreiben",
        "phrases": [
          {"de": "Ich m\u00f6chte ein Einzelzimmer vom 5. bis zum 8. Mai reservieren.", "ko": "5\uc6d4 5\uc77c\ubd80\ud130 8\uc77c\uae4c\uc9c0 \uc2f1\uae00\ub8f8\uc744 \uc608\uc57d\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.", "note": "\ud638\ud154 \uc608\uc57d \uc774\uba54\uc77c", "grammar": [{"word": "ein Einzelzimmer", "meaning": "\uc2f1\uae00\ub8f8", "explain": "Einzelzimmer(n) 4\uaca9"}, {"word": "vom 5. bis zum 8.", "meaning": "5\uc77c\ubd80\ud130 8\uc77c\uae4c\uc9c0", "explain": "von+dem=vom, bis zu+dem=zum. \uc11c\uc218+3\uaca9"}], "blank": {"word": "vom", "position": "Ich m\u00f6chte ein Zimmer ___ 5. bis zum 8. Mai reservieren.", "options": ["vom", "am", "im", "von dem"], "hint": "von + dem\uc758 \ucd95\uc57d\ud615\uc740?"}},
          {"de": "Ist Fr\u00fchst\u00fcck im Preis inbegriffen?", "ko": "\uc870\uc2dd\uc774 \uac00\uaca9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub098\uc694?", "note": "\ud3ec\ud568 \uc0ac\ud56d \ud655\uc778", "grammar": [{"word": "im Preis", "meaning": "\uac00\uaca9\uc5d0", "explain": "in + dem = im"}, {"word": "inbegriffen", "meaning": "\ud3ec\ud568\ub41c", "explain": "\uacfc\uac70\ubd84\uc0ac"}], "blank": null},
          {"de": "Wie komme ich vom Bahnhof zum Hotel?", "ko": "\uc5ed\uc5d0\uc11c \ud638\ud154\uae4c\uc9c0 \uc5b4\ub5bb\uac8c \uac00\ub098\uc694?", "note": "\uae38 \ubb38\uc758", "grammar": [{"word": "vom Bahnhof", "meaning": "\uc5ed\uc5d0\uc11c", "explain": "von + dem = vom"}, {"word": "zum Hotel", "meaning": "\ud638\ud154\uae4c\uc9c0", "explain": "zu + dem = zum"}], "blank": null}
        ]
      },
      {
        "title_de": "Am Bahnhof",
        "title_ko": "\uc5ed\uc5d0\uc11c",
        "skill": "sprechen",
        "phrases": [
          {"de": "Eine Fahrkarte nach M\u00fcnchen, hin und zur\u00fcck, bitte.", "ko": "\ubf48\ud5e8 \uac00\ub294 \uc655\ubcf5 \uc2b9\ucc28\uad8c \uc8fc\uc138\uc694.", "note": "\ud45c \uad6c\ub9e4", "grammar": [{"word": "nach M\u00fcnchen", "meaning": "\ubf48\ud5e8\uc73c\ub85c", "explain": "nach + \ub3c4\uc2dc\uba85(\uad00\uc0ac \uc5c6\uc774)"}, {"word": "hin und zur\u00fcck", "meaning": "\uc655\ubcf5", "explain": "\uad00\uc6a9\ud45c\ud604"}], "blank": null},
          {"de": "Von welchem Gleis f\u00e4hrt der Zug ab?", "ko": "\ubaa7 \ubc88 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ucd9c\ubc1c\ud558\ub098\uc694?", "note": "\ud50c\ub7ab\ud3fc \ud655\uc778", "grammar": [{"word": "Von welchem Gleis", "meaning": "\uc5b4\ub290 \ud50c\ub7ab\ud3fc\uc5d0\uc11c", "explain": "von + 3\uaca9. welches Gleis(n) \u2192 welchem"}, {"word": "f\u00e4hrt ... ab", "meaning": "\ucd9c\ubc1c\ud558\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac ab|fahren"}], "blank": null},
          {"de": "Muss ich umsteigen?", "ko": "\ud658\uc2b9\ud574\uc57c \ud558\ub098\uc694?", "note": "\ud658\uc2b9 \ud655\uc778", "grammar": [{"word": "umsteigen", "meaning": "\ud658\uc2b9\ud558\ub2e4", "explain": "\ubd84\ub9ac\ub3d9\uc0ac. m\u00fcssen \ub4a4 \uc6d0\ud615"}], "blank": null},
          {"de": "Entschuldigung, wie komme ich zum Rathaus?", "ko": "\uc2e4\ub840\ud569\ub2c8\ub2e4, \uc2dc\uccad\uc5d0 \uc5b4\ub5bb\uac8c \uac00\ub098\uc694?", "note": "\uae38 \ubb3b\uae30", "grammar": [{"word": "zum Rathaus", "meaning": "\uc2dc\uccad\uc73c\ub85c", "explain": "zu + dem = zum"}], "blank": null}
        ]
      }
    ]
  }
]
'''

new_topics = __import__('json').loads(new_topics_json)

# Append
data.extend(new_topics)

# Write back as JS
with open('d:/ji-hyeon-hwang.github.io/deutsch/js/data_practice.js', 'w', encoding='utf-8') as f:
    f.write('const PRACTICE_DATA = ')
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Total topics: {len(data)}")
total_phrases = sum(sum(len(s['phrases']) for s in t['sections']) for t in data)
print(f"Total phrases: {total_phrases}")
