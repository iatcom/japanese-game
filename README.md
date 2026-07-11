# 📖 JP Study Hub

An interactive, responsive, and mobile-optimized Japanese Language learning application built with vanilla web technologies. The app operates as an adaptive digital study deck, containing a dynamic vocabulary engine, grammatical blueprints, and a gamified practicing portal designed to accelerate retention via spaced-repetition logic.

---

## 🛠️ Architectural Blueprint

The application uses an decoupled, front-end-only architecture split cleanly between **Data State Layers** and a **Declarative Rendering Engine**. 

┌────────────────────────────────────────────────────────┐
│                        DATA.JS                         │
│  (Centralized Global Dictionary Data Model Structure)  │
└───────────────────────────┬────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────┐
│                       INDEX.HTML                       │
│  (Dynamic Unified App Layer & Core Logical Runtime)   │
├────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────┐  │
│  │ 1. Routing & Tab View Manager                     │  │
│  │    Handles layout state between top three tiers  │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 2. Game Type Controller                          │  │
│  │    Intercepts and routes challenge types          │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ 3. Weighted Spaced-Repetition System Engine      │  │
│  │    Biases item delivery dynamically via:         │  │
│  │    Weight = 0.5 ^ MasteryScore                   │  │
│  └──────────────────────────────────────────────────┘  │
└───────────────────────────┬────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────┐
│                  LOCALSTORAGE PROFILE                  │
│    (Persistent unique mastery metadata profile arrays) │
└────────────────────────────────────────────────────────┘
