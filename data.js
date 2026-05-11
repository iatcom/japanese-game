const studyData = {
    verbs: [
        { dict: "Kiku", kanji: "聞く", eng: "To listen", group: 1, stem: "kiki" },
        { dict: "Oyogu", kanji: "泳ぐ", eng: "To swim", group: 1, stem: "oyogi" },
        { dict: "Hanasu", kanji: "話す", eng: "To talk", group: 1, stem: "hanashi" },
        { dict: "Yomu", kanji: "読む", eng: "To read", group: 1, stem: "yomi" },
        { dict: "Shinu", kanji: "死ぬ", eng: "To die", group: 1, stem: "shini" },
        { dict: "Yobu", kanji: "呼ぶ", eng: "To call", group: 1, stem: "yobi" },
        { dict: "Iu", kanji: "言う", eng: "To say", group: 1, stem: "ii" },
        { dict: "Matsu", kanji: "待つ", eng: "To wait", group: 1, stem: "machi" },
        { dict: "Toru", kanji: "取る", eng: "To take", group: 1, stem: "tori" },
        { dict: "Katsu", kanji: "勝つ", eng: "To win", group: 1, stem: "kachi" },
        { dict: "Taberu", kanji: "食べる", eng: "To eat", group: 2, stem: "tabe" },
        { dict: "Neru", kanji: "寝る", eng: "To sleep", group: 2, stem: "ne" },
        { dict: "Miru", kanji: "見る", eng: "To see", group: 2, stem: "mi" },
        { dict: "Okiru", kanji: "起きる", eng: "To wake", group: 2, stem: "oki" },
        { dict: "Hashiru", kanji: "走る", eng: "To run", group: 1, stem: "hashiri" },
        { dict: "Kaeru", kanji: "帰る", eng: "To return", group: 1, stem: "kaeri" },
        { dict: "Suru", kanji: "する", eng: "To do", group: 3, stem: "shi" },
        { dict: "Kuru", kanji: "来る", eng: "To come", group: 3, stem: "ki" }
    ],
    adjectives_i: [
        { dict: "Takai", kanji: "高い", eng: "Expensive/High", stem: "taka" },
        { dict: "Yasui", kanji: "安い", eng: "Cheap", stem: "yasu" },
        { dict: "Oishii", kanji: "美味しい", eng: "Delicious", stem: "oishi" },
        { dict: "Samui", kanji: "寒い", eng: "Cold (Weather)", stem: "samu" }
    ],
    days_week: [
        { dict: "Getsuyoubi", kanji: "月曜日", eng: "Monday" },
        { dict: "Kayoubi", kanji: "火曜日", eng: "Tuesday" },
        { dict: "Suiyoubi", kanji: "水曜日", eng: "Wednesday" },
        { dict: "Mokuyoubi", kanji: "木曜日", eng: "Thursday" },
        { dict: "Kinyoubi", kanji: "金曜日", eng: "Friday" },
        { dict: "Doyoubi", kanji: "土曜日", eng: "Saturday" },
        { dict: "Nichiyoubi", kanji: "日曜日", eng: "Sunday" }
    ]
};

const tenses = {
    verbs: [
        { label: "Present (+masu)", suffix: "masu" },
        { label: "Neg Present (+masen)", suffix: "masen" },
        { label: "Past (+mashita)", suffix: "mashita" },
        { label: "Neg Past (+masen deshita)", suffix: "masen deshita" }
    ],
    adjectives_i: [
        { label: "Present (+desu)", suffix: "i desu" },
        { label: "Neg Present (+kunai)", suffix: "kunai desu" },
        { label: "Past (+katta)", suffix: "katta desu" },
        { label: "Neg Past (+kunakatta)", suffix: "kunakatta desu" }
    ]
};
