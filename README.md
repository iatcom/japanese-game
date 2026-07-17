# 🇯🇵 JP Study Hub

Welcome to **JP Study Hub**, a modular, mobile-responsive web application designed for learning Japanese vocabulary, grammar, and sentence structures.

## 🏛️ Application Architecture

The project is structured as a **Single-Hub / Multi-Module web application** (a master template with dedicated micro-apps):

* **`index.html` (The Master Hub)**: The centralized entrance hall of the application. It redirects users seamlessly to each specialized micro-app while maintaining a unified responsive aesthetic.
* **`style.css` (The Global Engine)**: Hosts the centralized CSS custom properties (`--primary-color`, `--card-bg`, etc.), handles cross-device dynamic typography scaling, and forces smooth kinetic scrolling over wide tables on mobile screens.
* **`data.js` (The Unified Database)**: A global dictionary of Japanese verbs, adjectives, time expressions, and core vocabulary. All data-driven micro-apps hook directly into this file to read content dynamically.
* **Micro-Apps**:
    * `vocabulary.html`: A searchable database categorized by parts of speech with automated list item indexing and a contextual "Add Word" link pointing back to Git.
    * `grammar.html`: A high-yield reference guide presenting syntax rules, dynamic particle cheat sheets, and relative temporal alignments (timeline matrix).
    * `practice.html`: An interactive trainer supporting English-to-Japanese translation, Japanese-to-English translation, active verb/adjective conjugation drills, and custom cloze-deletion (fill-in-the-blank) particle exercises.

---

## 🛠️ Global Data Structure (`data.js`)

The dataset inside `data.js` is structured as a single global object, `studyData`. When contributing new items, adhere to the following schema definitions:

### Verbs Group Structure
```javascript
{ 
  dict: "Iku",       // Romaji Dictionary form
  kanji: "行く",     // Kanji written variant
  eng: "Go",         // English meaning
  group: 1,          // Group (1, 2, or 3)
  stem: "iki"        // Conjugation stem
}
