// sentences.js - Sentence and Phrase Database for JP Study Hub

const particleData = [
    { sentence: "Kyou [?] samui desu.", solution: "wa", translation: "As for today, it is cold.", hint: "Topic marker" },
    { sentence: "Watashi wa ringo [?] tabemasu.", solution: "wo", translation: "I eat an apple.", hint: "Direct object marker" },
    { sentence: "Ame [?] furimasu.", solution: "ga", translation: "Rain falls.", hint: "Subject marker (uncontrollable natural phenomenon)" },
    { sentence: "Nihon [?] imasu.", solution: "ni", translation: "I am in Japan.", hint: "Static existence marker" },
    { sentence: "Hashi [?] tabemasu.", solution: "de", translation: "Eat using chopsticks.", hint: "Means / tool descriptor" },
    { sentence: "Pen [?] kami.", solution: "to", translation: "A pen and a piece of paper.", hint: "Exhaustive noun linker" },
    { sentence: "Kare [?] sensei desu.", solution: "mo", translation: "He is also a teacher.", hint: "Inclusionary parallel (also/too)" },
    { sentence: "Anata [?] kuruma.", solution: "no", translation: "Your car.", hint: "Possession connector" },
    { sentence: "Kore desu [?]?", solution: "ka", translation: "Is it this one?", hint: "Question identifier" },
    { sentence: "Ii tenki desu [?].", solution: "ne", translation: "Beautiful weather, isn't it?", hint: "Seeking agreement confirmation" },
    { sentence: "Ashita gakkou [?] ikimasu.", solution: "ni", translation: "I will go to school tomorrow.", hint: "Destination / Direction marker" },
    { sentence: "Koen [?] sanpo shimasu.", solution: "wo", translation: "I take a walk in the park.", hint: "Space/route through which movement occurs" },
    { sentence: "Basu [?] uchi ni kaerimasu.", solution: "de", translation: "I go home by bus.", hint: "Method or means of transportation" },
    { sentence: "Terebi [?] mimasen.", solution: "wa", translation: "As for TV, I don't watch it.", hint: "Contrastive topic marker (often used in negative context)" },
    { sentence: "Inu [?] neko ga suki desu.", solution: "to", translation: "I like dogs and cats.", hint: "Complete/exhaustive list connector" },
    { sentence: "Koen ni inu [?] imasu.", solution: "ga", translation: "There is a dog in the park.", hint: "Subject marker for existence statements" },
    { sentence: "Hachiji [?] kuji made benkyou shimasu.", solution: "kara", translation: "I study from 8 o'clock to 9 o'clock.", hint: "Starting point descriptor (from)" },
    { sentence: "Shinjuku kara Shibuya [?] arukimasu.", solution: "made", translation: "I walk from Shinjuku to Shibuya.", hint: "Ending point descriptor (until/up to)" },
    { sentence: "Watashi wa tomodachi [?] aimashita.", solution: "ni", translation: "I met my friend.", hint: "Target of interactive verbs (like meet/marry)" },
    { sentence: "Kore wa nihongo [?] nan desu ka.", solution: "de", translation: "What is this in Japanese?", hint: "Language or medium attribute tool" }
];

const generalSentencesData = [
    { sentence: "Hajimemashite. Doozo [?] yoroshiku.", solution: "yoroshiku", translation: "Nice to meet you. Please be kind to me.", hint: "Standard self-introduction greeting phrase" },
    { sentence: "Kore wa [?] desu ka.", solution: "ikura", translation: "How much is this?", hint: "Survival shopping term meaning 'how much'" },
    { sentence: "Toire wa [?] desu ka.", solution: "doko", translation: "Where is the toilet?", hint: "Direction query meaning 'where'" },
    { sentence: "O-genki [?] ka.", solution: "desu", translation: "Are you healthy / How are you?", hint: "Polite status copula verb" },
    { sentence: "Sumimasen, nihongo ga [?].", solution: "wakarimasen", translation: "Excuse me, I do not understand Japanese.", hint: "Negative potential verb for 'do not understand'" },
    { sentence: "Mizu wa [?], onegaishimasu.", solution: "kudasai", translation: "Water, please.", hint: "Phrase used to politely request an item" }
];

window.particleData = particleData;
window.generalSentencesData = generalSentencesData;
