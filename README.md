📖 JP Study Hub
An interactive, responsive, and lightweight web application designed to help users master Japanese vocabulary, grammar, conjugation, particles, and essential phrases. The app saves learning progress locally and features dynamic gamified practice sessions.
📂 Project Structure
The project is organized into modular files, cleanly separating content (databases) from core presentation (HTML/CSS) and game engines (JavaScript):
jp-study-hub/
│
├── vocabulary.html       # Vocabulary browser and reference interface
├── grammar.html          # Grammar reference and rules interface
├── practice.html         # Interactive gameplay & quiz dashboard
│
├── style.css             # Main stylesheet (responsive & mobile-friendly)
│
├── data.js               # Database: Verbs, Adjectives, Time, Vocab, Classifiers
├── sentences.js          # Database: Particles & General Phrases
└── practice.js           # Core Game Engine: Handles game loops, scoring, & mastery

🛠️ File Descriptions
1. View & Interface Layer
 * vocabulary.html: Browse and review vocabulary items organized by categories such as verbs, adjectives, time expressions, and classifiers.
 * grammar.html: A dedicated guide explaining Japanese sentence structures, verb types, conjugation rules, and basic mechanics.
 * practice.html: The gaming center. Integrates custom drop-down selectors to switch game modes (Vocabulary translation, Conjugation, Particle fill-in, and General Phrases) on the fly.
2. Database Layer
 * data.js: Contains structured dictionary entries for single words. Items are configured with attributes like raw dictionary form (dict), kanji, English translations (eng), conjugation properties (group for verbs, type for adjectives), and root stems (stem).
 * sentences.js: Houses context-rich sentences split into:
   * particleData: Sentences missing a specific grammatical particle. Targeted slots are replaced with [?].
   * generalSentencesData: Vital conversational phrases configured for interactive practice.
3. Logic & State Layer
 * practice.js: The brains of the practice module. It processes user inputs, validates spelling (ignoring spacing/casing mismatches), manages active session scoring, dynamically generates target tenses, and updates individual word progress.
 * style.css: Provides a modern, responsive layout optimized for mobile screens (with standard Apple notch/safe-area spacing configuration).
🎮 Game Modes
JP Study Hub provides five distinct practice modules to test your skills:
| Mode | Source | Objective |
|---|---|---|
| English → JP | data.js | Translate the English prompt into Romaji or Dictionary-form Japanese. |
| JP → English | data.js | Read the Japanese Kanji/Romaji and write the English meaning. |
| Conjugation | data.js | Conjugate verbs and adjectives into target positive/negative or present/past tenses. |
| Particles Practice | sentences.js | Identify the correct particle (wa, ga, wo, ni, de, etc.) to complete the sentence. |
| General Phrases | sentences.js | Complete crucial situational expressions (e.g., shopping, directions, greetings). |
| Combined Challenge | Mixed | Automatically cycles through random prompt types for a true test of proficiency. |
💾 State & Progress Tracking
The application uses Local Storage (localStorage) to persist individual word mastery profiles across browser refreshes:
 * Each correct answer increases that item's Mastery Score by +1 (capped at 10).
 * Each incorrect answer decreases that item's Mastery Score by -1 (bottoming out at 0).
 * Your active session score is displayed dynamically in the session HUD.
🚀 Getting Started
Local Setup
 * Clone or download this repository to your computer.
 * Ensure all files (practice.html, data.js, sentences.js, practice.js, and style.css) reside together in the same directory.
 * Simply double-click practice.html (or run it via a local development server like VS Code's Live Server) to start learning!
