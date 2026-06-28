<div align="center">

# 📒 Student Management System

**A neobrutalist gradebook — thin borders, hard shadows, zero gradients.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Status](https://img.shields.io/badge/status-complete-A8E6A3?style=flat-square)
![No Frameworks](https://img.shields.io/badge/frameworks-none-FFD23F?style=flat-square)
![Phase](https://img.shields.io/badge/Phase%201-Web%20Foundations%20Day%203-8ECAE6?style=flat-square)

</div>

---

## ✨ Features

🟡 **Add** students with name, roll number & marks for 3 subjects
🟢 **Auto-calculate** average marks
✅ **Pass / Fail** status chip (threshold: 40 average)
🗑️ **Remove** any student from the record
⚠️ **Validates** empty fields, out-of-range marks & duplicate rolls
📱 **Responsive** — table folds into bordered cards on mobile

---

## 🔗 Live Preview

**[👉 View Live on Netlify](#)**
*(swap in your Netlify URL)*

---

## ▶️ Run It

**Step 1** — Clone the repository:
```bash
git clone https://github.com/atharva-9423/unprof.git
cd day-3
```

**Step 2** — Open in your browser:
```bash
# Windows
start index.html

# Mac
open index.html
```

Or just double-click `index.html` — no server needed!

No dependencies. No build step. Just open it.

---

## 🎨 The Look

| | |
|---|---|
| **Borders** | 2px solid black, everywhere |
| **Shadows** | Hard offset, no blur — compress on click |
| **Color** | Flat yellow / mint / red / sky blue — no gradients |
| **Corners** | Rounded (10–14px) against the sharp shadows |
| **Type** | Space Grotesk (headings) + Inter (body) |

---

## 🧩 JS Concepts Used

| Concept | Used for |
|---|---|
| Arrays of objects | `students = [{ name, roll, marks }]` |
| `.reduce()` | Calculating the average |
| `.forEach()` / `.some()` | Rendering rows / duplicate-roll check |
| Event delegation | Handling Remove clicks on dynamic rows |
| Template literals | Building each table row |

---

## 📁 Files

```
day-3/
├── index.html   → structure
├── style.css     → neobrutalist styling
├── script.js      → all logic
└── README.md
```

---

<div align="center">

Built during **Phase 1 – Web Foundations**, Day 3 — *JavaScript Fundamentals*

</div>