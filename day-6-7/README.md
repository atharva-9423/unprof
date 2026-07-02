<!-- Replace YOUR_USERNAME (and demo link, if you deploy it) before pushing -->

<div align="center">

# ✅ TaskFlow — React Task Manager

### Add, complete, filter and track tasks — built with React Hooks.

<em>Phase 2 · React Frontend · Days 6 &amp; 7 — Web Development Internship</em>

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Hooks](https://img.shields.io/badge/React-Hooks-BFE8D4?labelColor=1A1A1A)
![License](https://img.shields.io/badge/License-MIT-CDE6F7?labelColor=1A1A1A)

</div>

---

## **[View Live Demo](https://to-do-v2.netlify.app)**

## ✨ Features

- ➕ **Add tasks** through a controlled form
- ✅ **Mark tasks complete** with a checkbox
- 🗑️ **Delete tasks**
- 📊 **Live counts** — total, completed & pending
- 🔍 **Filter** tasks: All / Pending / Completed
- 💾 **Persists** across refresh (localStorage via `useEffect`)
- 📱 **Responsive**, reusable components

## 🧩 React Concepts Demonstrated

| Concept | Where | What it does |
|---|---|---|
| `useState` | `App`, `TaskForm` | Reactive state for tasks, filter & the input field |
| `useEffect` | `App` | Saves tasks to `localStorage` whenever they change |
| Conditional rendering | `TaskList`, `TaskItem` | Empty-state message; strike-through for done tasks |
| Lists & keys | `TaskList`, `FilterBar` | `.map()` with a stable unique `key` |
| Forms | `TaskForm` | Controlled input + submit handling |
| Component reusability | all of `components/` | Small, single-purpose, prop-driven components |

## 📁 Project Structure

```
react_task_manager/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # entry point — mounts <App/>
    ├── App.jsx             # owns all state + actions (container)
    ├── index.css           # flat pastel styling
    └── components/
        ├── TaskForm.jsx    # controlled add-task form
        ├── StatsBar.jsx    # total / completed / pending counts
        ├── FilterBar.jsx   # All / Pending / Completed buttons
        ├── TaskList.jsx    # list rendering + empty state
        └── TaskItem.jsx    # a single task row
```

## 🧠 Data Flow (one-way)

```
        state lives in App
        ────────────────────────────►  props (data down)
App ──► TaskForm / StatsBar / FilterBar / TaskList ──► TaskItem
   ◄──  callbacks (events up): addTask, toggleTask, deleteTask
```

React's golden rule: **data flows down** via props, **events flow up** via callbacks.

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open the printed URL (http://localhost:5173)

# 3. Build for production (optional)
npm run build
npm run preview
```

## 🛠️ Tech Stack

**React 18** · **Vite** · Vanilla CSS · localStorage

---

<div align="center">
<sub>Built during Day 6 &amp; 7 of my Web Development internship · Functional components + Hooks, no shortcuts.</sub>
</div>
