<div align="center">

# 🟢 UnProf Profile Card — React

**A dark-mode worker profile card built with reusable React components.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Status](https://img.shields.io/badge/status-complete-C8FF4D?style=flat-square&labelColor=0B0E12)
![Phase](https://img.shields.io/badge/Phase%202-React%20Frontend%20Day%205-9B8CFF?style=flat-square&labelColor=0B0E12)

</div>

---

## ✨ Features

🟢 **4 reusable components** — `Avatar`, `SkillTag`, `ConnectButton`, `ProfileCard`
🔌 **Stateful Connect button** — toggles Connect / Connected via `useState`
📋 **Props-driven** — every card is built from a plain data object, nothing hardcoded
🎨 **Dark editorial UI** — neon-lime accent, glowing gradient avatar ring, zero gradients on backgrounds
📱 **Responsive grid** — cards reflow automatically on smaller screens

---

## 🔗 Live Preview

**[👉 View Live on Netlify](#)**
*(swap in your Netlify URL)*

---

## ▶️ Run It

```bash
git clone https://github.com/atharva-9423/unprof.git
cd unprof/day-5
npm install
npm run dev
```

---

## 📁 Project Structure

```
day-5/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # Renders a grid of ProfileCards
│   ├── index.css               # All styling
│   └── components/
│       ├── ProfileCard.jsx     # Composes Avatar + SkillTag + ConnectButton
│       ├── Avatar.jsx           # Reusable initials avatar with gradient ring
│       ├── SkillTag.jsx          # Reusable pill tag for one skill
│       └── ConnectButton.jsx      # Reusable button with its own useState
└── README.md
```

---

## 🧩 React Concepts Applied

| Concept | Where it's used |
|---|---|
| **JSX** | All four components are written declaratively with JSX |
| **Components** | Split into `Avatar`, `SkillTag`, `ConnectButton`, `ProfileCard` — each does one job |
| **Props** | `ProfileCard` receives `name`, `profession`, `location`, `skills`, `bio` from `App.jsx`; `SkillTag` receives a single `label` |
| **State (`useState`)** | `ConnectButton` holds its own `isConnected` boolean, independent per card |
| **Event handling** | `onClick` on `ConnectButton` triggers `handleClick`, which updates state |
| **Reusability** | `App.jsx` renders the same `ProfileCard` twice with different data — proving the component isn't hardcoded |
| **Lists & keys** | `workers.map()` in `App.jsx` and `skills.map()` in `ProfileCard.jsx`, both with proper `key` props |

---

## 🏗️ Data Flow

```
App.jsx (owns the workers array)
   │
   ├─ passes worker data as props →  ProfileCard.jsx
   │                                      │
   │                                      ├─ name, profession, location, bio → rendered directly
   │                                      ├─ skills array → mapped into <SkillTag label={skill} />
   │                                      └─ <ConnectButton /> → manages its OWN state internally
```

`ConnectButton` deliberately doesn't receive its connected status as a prop — it owns that state itself, to demonstrate that state lives wherever it's needed, not always at the top.

---

## 🎨 The Look

Dark editorial theme — near-black surface, a single neon-lime accent used for the eyebrow tag, profession text, and primary button. Avatar uses a conic-gradient ring (lime → violet) around a flat initials badge instead of a placeholder image. No background gradients — just a soft radial glow in the card corner.

---

<div align="center">

Built during **Phase 2 – React Frontend**, Day 5: *React Basics*

</div>