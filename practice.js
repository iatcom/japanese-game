// practice.js - Practice Mode Engine for JP Study Hub

const masteryStorageKey = 'jp_study_mastery_scores_v1';
let masteryScores = JSON.parse(localStorage.getItem(masteryStorageKey)) || {};

function initMasteryProfiles() {
    if (typeof studyData !== 'undefined') {
        Object.keys(studyData).forEach(catKey => {
            if (Array.isArray(studyData[catKey])) {
                studyData[catKey].forEach(item => {
                    item.uid = `${catKey}_${item.dict.toLowerCase().replace(/\s/g, '')}_${item.eng.toLowerCase().replace(/\s/g, '')}`;
                    if (masteryScores[item.uid] === undefined) {
                        masteryScores[item.uid] = 0;
                    }
                });
            }
        });
        localStorage.setItem(masteryStorageKey, JSON.stringify(masteryScores));
    }
}

const tenses = {
    verbs: [
        { baseLabel: "Present Positive", suffixLabel: "(+masu)", suffix: "masu" },
        { baseLabel: "Present Negative", suffixLabel: "(+masen)", suffix: "masen" },
        { baseLabel: "Past Positive", suffixLabel: "(+mashita)", suffix: "mashita" },
        { baseLabel: "Past Negative", suffixLabel: "(+masen deshita)", suffix: "masen_deshita" }
    ],
    adjectives: [
        { baseLabel: "Present Positive", suffixLabel: "(+idesu / +desu)", suffix: "idesu_or_desu" },
        { baseLabel: "Present Negative", suffixLabel: "(+kunaidesu / +janai desu)", suffix: "kunaidesu_or_janai" },
        { baseLabel: "Past Positive", suffixLabel: "(+kattadesu / +deshita)", suffix: "kattadesu_or_deshita" },
        { baseLabel: "Past Negative", suffixLabel: "(+kunakattadesu / +janakatta desu)", suffix: "kunakattadesu_or_janakatta" }
    ]
};

let gameType = 'combined', activeRoundType = 'combined', cat = 'all', score = 0, current;

// Safely attach Event Listeners after DOM elements render
document.addEventListener('DOMContentLoaded', () => {
    initMasteryProfiles();
    
    const userInputField = document.getElementById('user-input');
    if (userInputField) {
        userInputField.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                if (document.getElementById('submit-btn').style.display !== 'none') {
                    check();
                } else {
                    next();
                }
            }
        });
    }
    
    // Kickstart the first question loop
    next();
});

function setGameType(gt) {
    gameType = gt;
    const comboCatOption = document.getElementById('opt-combo-cat');
    if (comboCatOption) {
        if (gameType === 'conjugate') {
            comboCatOption.style.display = 'block';
            if (cat !== 'verbs' && cat !== 'adjectives' && cat !== 'verbs_and_adjectives') {
                cat = 'verbs_and_adjectives';
            }
        } else {
            comboCatOption.style.display = 'none';
            if (cat === 'verbs_and_adjectives') {
                cat = 'all';
            }
        }
    }
    updateUI();
    next();
}

function setCat(c) { 
    cat = c; 
    updateUI(); 
    next(); 
}

function updateUI() {
    if (!document.getElementById('game-select')) return;
    
    document.getElementById('game-select').value = gameType;
    document.getElementById('cat-select').value = cat;

    const catLabel = document.getElementById('cat-label');
    const catSelect = document.getElementById('cat-select');

    if (gameType === 'particles' || gameType === 'general-sentences') {
        if (catLabel) catLabel.style.display = 'none';
        if (catSelect) catSelect.style.display = 'none';
    } else {
        if (catLabel) catLabel.style.display = 'block';
        if (catSelect) catSelect.style.display = 'block';
    }
}

function getCorrectAnswer() {
    if (activeRoundType === 'particles' || activeRoundType === 'general-sentences') {
        return current.solution;
    }
    if (activeRoundType === 'en-jp') {
        return current.dict;
    } else if (activeRoundType === 'jp-en') {
        return current.eng;
    } else {
        // Conjugation Mode Multi-Variant Generation
        if (current.group) {
            const stem = current.stem || "";
            if (current.activeTense.suffix === 'masu') return `${stem}masu`;
            if (current.activeTense.suffix === 'masen') return `${stem}masen`;
            if (current.activeTense.suffix === 'mashita') return `${stem}mashita`;
            if (current.activeTense.suffix === 'masen_deshita') return `${stem}masen deshita / ${stem}masendeshita`;
        } else if (current.type) {
            const stem = current.stem || "";
            const dict = current.dict || "";
            
            if (current.type === 'i') {
                if (current.activeTense.suffix === 'idesu_or_desu') {
                    return `${stem}idesu / ${stem}i desu / ${dict} desu`;
                }
                if (current.activeTense.suffix === 'kunaidesu_or_janai') {
                    return `${stem}kunaidesu / ${stem}kunai desu`;
                }
                if (current.activeTense.suffix === 'kattadesu_or_deshita') {
                    return `${stem}kattadesu / ${stem}katta desu`;
                }
                if (current.activeTense.suffix === 'kunakattadesu_or_janakatta') {
                    return `${stem}kunakattadesu / ${stem}kunakatta desu`;
                }
            } else { // Na-Adjectives
                if (current.activeTense.suffix === 'idesu_or_desu') {
                    return `${dict} desu / ${dict}desu`;
                }
                if (current.activeTense.suffix === 'kunaidesu_or_janai') {
                    return `${dict} janai desu / ${dict} janaidesu / ${dict} dewa arimasen`;
                }
                if (current.activeTense.suffix === 'kattadesu_or_deshita') {
                    return `${dict} deshita / ${dict}deshita`;
                }
                if (current.activeTense.suffix === 'kunakattadesu_or_janakatta') {
                    return `${dict} janakatta desu / ${dict} janakattadesu / ${dict} dewa arimasen deshita`;
                }
            }
        }
        return current.eng;
    }
}

function next() {
    document.getElementById('feedback').innerText = "";
    document.getElementById('user-input').value = "";
    document.getElementById('user-input').disabled = false;
    document.getElementById('submit-btn').style.display = "block";
    document.getElementById('reveal-btn').style.display = "block";
    document.getElementById('next-btn').style.display = "none";

    const display = document.getElementById('w-main');
    const sub = document.getElementById('w-sub');
    const task = document.getElementById('task');

    // Handle Particle Game Type
    if (gameType === 'particles') {
        activeRoundType = 'particles';
        const sourcePool = window.particleData || [];
        current = sourcePool[Math.floor(Math.random() * sourcePool.length)];
        
        document.getElementById('word-stats').innerText = `Particles Tracker`;
        display.innerText = current.sentence;
        sub.innerText = current.translation;
        task.innerHTML = `Identify the missing particle! Hint: <strong>${current.hint}</strong>`;
        updateUI();
        return;
    }

    // Handle General Sentences Game Type
    if (gameType === 'general-sentences') {
        activeRoundType = 'general-sentences';
        const sourcePool = window.generalSentencesData || [];
        current = sourcePool[Math.floor(Math.random() * sourcePool.length)];
        
        document.getElementById('word-stats').innerText = `Phrases Tracker`;
        display.innerText = current.sentence;
        sub.innerText = current.translation;
        task.innerHTML = `Complete the essential phrase! Hint: <strong>${current.hint}</strong>`;
        updateUI();
        return;
    }

    // Handle Standard Vocabulary Database Categories
    let pool = [];
    if (typeof studyData !== 'undefined') {
        if (cat === 'all') {
            pool = [
                ...(studyData.verbs || []),
                ...(studyData.adjectives || []),
                ...(studyData.time || []),
                ...(studyData.vocab || []),
                ...(studyData.classifiers || []),
                ...(studyData.kanji || []),
                ...(studyData.katakana || [])
            ];
        } else if (cat === 'verbs_and_adjectives') {
            pool = [...(studyData.verbs || []), ...(studyData.adjectives || [])];
        } else {
            pool = studyData[cat] || [];
        }
    }

    if (!pool || pool.length === 0) {
        display.innerText = "Empty Data Pool";
        sub.innerText = "Check data.js or selection";
        return;
    }
    
    current = pool[Math.floor(Math.random() * pool.length)];

    if (gameType === 'combined') {
        let options = ['en-jp', 'jp-en'];
        if (current.group || current.type) {
            options.push('conjugate');
        }
        activeRoundType = options[Math.floor(Math.random() * options.length)];
    } else {
        activeRoundType = gameType;
    }

    let curScore = masteryScores[current.uid] || 0;
    document.getElementById('word-stats').innerText = `Mastery: ${curScore}/10`;

    if (activeRoundType === 'en-jp') {
        display.innerText = current.eng;
        sub.innerText = "Translate to Japanese";
        task.innerHTML = "Type the <strong>Romaji / Dictionary Form</strong>";
    } else if (activeRoundType === 'jp-en') {
        display.innerText = current.kanji || current.dict;
        sub.innerText = current.dict;
        task.innerHTML = "Type the <strong>English</strong> meaning";
    } else {
        display.innerText = current.kanji || current.dict;
        sub.innerText = `${current.dict} (${current.eng})`;
        
        let tPool = current.group ? tenses.verbs : (current.type ? tenses.adjectives : []);
        if (tPool.length > 0) {
            current.activeTense = tPool[Math.floor(Math.random() * tPool.length)];
            task.innerHTML = `Conjugate to: <strong>${current.activeTense.baseLabel} ${current.activeTense.suffixLabel}</strong>`;
        } else {
            task.innerHTML = "<em>Conjugation template error. Skip layout.</em>";
        }
    }
    updateUI();
}

function check() {
    // 1. Clean up user answer: clean duplicate spaces, trim, lowercase
    let user = document.getElementById('user-input').value.toLowerCase().trim().replace(/\s+/g, ' ');
    
    // Helper function to strip out standard English infinitive markers safely
    const stripToPrefix = (str) => str.startsWith('to ') ? str.substring(3).trim() : str;
    
    user = stripToPrefix(user);

    // 2. Grab raw correct definitions template string
    const rawCorrect = getCorrectAnswer();
    
    // 3. Process accepted answer variations cleanly splitting on '/'
    const acceptedAnswers = rawCorrect.split('/').map(ans => {
        let normalized = ans.toLowerCase().trim().replace(/\s+/g, ' ');
        return stripToPrefix(normalized);
    });

    const fb = document.getElementById('feedback');
    
    // 4. Validate matches securely across all processed definitions
    if (acceptedAnswers.includes(user)) {
        fb.innerText = "Correct! ✨"; fb.style.color = "#2ecc71"; 
        score++;
        if (current.uid && masteryScores[current.uid] !== undefined) {
            masteryScores[current.uid] = Math.min(10, masteryScores[current.uid] + 1);
            localStorage.setItem(masteryStorageKey, JSON.stringify(masteryScores));
        }
    } else {
        fb.innerText = `Oops! Correct answer: ${rawCorrect}`; fb.style.color = "#e74c3c";
        if (current.uid && masteryScores[current.uid] !== undefined) {
            masteryScores[current.uid] = Math.max(0, masteryScores[current.uid] - 1);
            localStorage.setItem(masteryStorageKey, JSON.stringify(masteryScores));
        }
    }
    document.getElementById('score').innerText = `Session Score: ${score}`;
    document.getElementById('user-input').disabled = true;
    document.getElementById('submit-btn').style.display = "none";
    document.getElementById('reveal-btn').style.display = "none";
    document.getElementById('next-btn').style.display = "block";
    document.getElementById('next-btn').focus();
}

function reveal() {
    const fb = document.getElementById('feedback');
    fb.innerText = `The answer is: ${getCorrectAnswer()}`;
    fb.style.color = "var(--accent-color)";
    document.getElementById('submit-btn').style.display = "none";
    document.getElementById('reveal-btn').style.display = "none";
    document.getElementById('next-btn').style.display = "block";
    document.getElementById('user-input').disabled = true;
    document.getElementById('next-btn').focus();
}
