const studyData = {
    verbs: [
        // Group 1
        { dict: "Kiku", kanji: "聞く", eng: "Listen", group: 1, stem: "kiki" },
        { dict: "Oyogu", kanji: "泳ぐ", eng: "Swim", group: 1, stem: "oyogi" },
        { dict: "Hanasu", kanji: "話す", eng: "Talk", group: 1, stem: "hanashi" },
        { dict: "Yomu", kanji: "読む", eng: "Read", group: 1, stem: "yomi" },
        { dict: "Shinu", kanji: "死ぬ", eng: "Die", group: 1, stem: "shini" },
        { dict: "Yobu", kanji: "呼ぶ", eng: "Call", group: 1, stem: "yobi" },
        { dict: "Iu", kanji: "言う", eng: "Say", group: 1, stem: "ii" },
        { dict: "Matsu", kanji: "待つ", eng: "Wait", group: 1, stem: "machi" },
        { dict: "Toru", kanji: "取る", eng: "Take", group: 1, stem: "tori" },
        { dict: "Katsu", kanji: "勝つ", eng: "Win", group: 1, stem: "kachi" },
        { dict: "Au", kanji: "会う", eng: "Meet", group: 1, stem: "ai" },
        { dict: "Iku", kanji: "行く", eng: "Go", group: 1, stem: "iki" },
        { dict: "Nomu", kanji: "飲む", eng: "Drink", group: 1, stem: "nomi" },
        { dict: "Warau", kanji: "笑う", eng: "Laugh", group: 1, stem: "warai" },
        { dict: "Naku", kanji: "泣く", eng: "Cry", group: 1, stem: "naki" },
        { dict: "Odoru", kanji: "踊る", eng: "Dance", group: 1, stem: "odori" },
        // Group 2
        { dict: "Taberu", kanji: "食べる", eng: "Eat", group: 2, stem: "tabe" },
        { dict: "Neru", kanji: "寝る", eng: "Sleep", group: 2, stem: "ne" },
        { dict: "Miru", kanji: "見る", eng: "See", group: 2, stem: "mi" },
        { dict: "Okiru", kanji: "起きる", eng: "Wake", group: 2, stem: "oki" },
        { dict: "Oshieru", kanji: "教える", eng: "Teach", group: 2, stem: "oshie" },
        // Group 3 & Compounds
        { dict: "Suru", kanji: "する", eng: "Do", group: 3, stem: "shi" },
        { dict: "Kuru", kanji: "来る", eng: "Come", group: 3, stem: "ki" },
        { dict: "Benkyou suru", kanji: "勉強する", eng: "Study", group: 3, stem: "benkyoushi" },
        { dict: "Unten suru", kanji: "運転する", eng: "Drive", group: 3, stem: "untenshi" }
    ],
    adjectives: [
        { dict: "Oishii", kanji: "美味しい", eng: "Delicious", type: "i", stem: "oishi" },
        { dict: "Takai", kanji: "高い", eng: "Expensive", type: "i", stem: "taka" },
        { dict: "Yasui", kanji: "安い", eng: "Cheap", type: "i", stem: "yasu" },
        { dict: "Samui", kanji: "寒い", eng: "Cold", type: "i", stem: "samu" },
        { dict: "Kirei", kanji: "綺麗", eng: "Pretty", type: "na" },
        { dict: "Shizuka", kanji: "静か", eng: "Quiet", type: "na" },
        { dict: "Genki", kanji: "元気", eng: "Healthy", type: "na" }
    ],
    time: [
        // Days of the week
        { dict: "Getsuyoubi", kanji: "月曜日", eng: "Monday" },
        { dict: "Kayoubi", kanji: "火曜日", eng: "Tuesday" },
        { dict: "Suiyoubi", kanji: "水曜日", eng: "Wednesday" },
        { dict: "Mokuyoubi", kanji: "木曜日", eng: "Thursday" },
        { dict: "Kinyoubi", kanji: "金曜日", eng: "Friday" },
        { dict: "Douyoubi", kanji: "土曜日", eng: "Saturday" },
        { dict: "Nichiyoubi", kanji: "日曜日", eng: "Sunday" },
        // Days of the month
        { dict: "Tsuitachi", kanji: "1日", eng: "1st" },
        { dict: "Futsuka", kanji: "2日", eng: "2nd" },
        { dict: "Mikka", kanji: "3日", eng: "3rd" },
        { dict: "Yokka", kanji: "4日", eng: "4th" },
        { dict: "Itsuka", kanji: "5日", eng: "5th" },
        { dict: "Muika", kanji: "6日", eng: "6th" },
        { dict: "Nanoka", kanji: "7日", eng: "7th" },
        { dict: "Youka", kanji: "8日", eng: "8th" },
        { dict: "Kokonoka", kanji: "9日", eng: "9th" },
        { dict: "Touka", kanji: "10日", eng: "10th" },
        // Months
        { dict: "Ichigatsu", kanji: "1月", eng: "January" },
        { dict: "Nigatsu", kanji: "2月", eng: "February" },
        { dict: "Sangatsu", kanji: "3月", eng: "March" },
        { dict: "Shigatsu", kanji: "4月", eng: "April" },
        { dict: "Gogatsu", kanji: "5月", eng: "May" },
        { dict: "Rokugatsu", kanji: "6月", eng: "June" },
        { dict: "Shichigatsu", kanji: "7月", eng: "July" },
        { dict: "Hachigatsu", kanji: "8月", eng: "August" },
        { dict: "Kugatsu", kanji: "9月", eng: "September" },
        { dict: "Juugatsu", kanji: "10月", eng: "October" },
        { dict: "Juuichigatsu", kanji: "11月", eng: "November" },
        { dict: "Juunigatsu", kanji: "12月", eng: "December" },
        // Relative Time Terms
        { dict: "Kyou", kanji: "今日", eng: "Today" },
        { dict: "Kinou", kanji: "昨日", eng: "Yesterday" },
        { dict: "Ashita", kanji: "明日", eng: "Tomorrow" },
        { dict: "Mainichi", kanji: "毎日", eng: "Every day" },
        { dict: "Itsumo", kanji: "いつも", eng: "Always" }
    ]
};

const tenses = {
    verbs: [
        { label: "Present Positive (+masu)", suffix: "masu" },
        { label: "Present Negative (+masen)", suffix: "masen" },
        { label: "Past Positive (+mashita)", suffix: "mashita" },
        { label: "Past Negative (+masen deshita)", suffix: "masen deshita" }
    ],
    adjectives: [
        { label: "Present Positive", type: "i", suffix: "idesu" },
        { label: "Present Negative", type: "i", suffix: "kunaidesu" },
        { label: "Present Positive", type: "na", suffix: "desu" },
        { label: "Present Negative", type: "na", suffix: "janai desu" }
    ]
};
