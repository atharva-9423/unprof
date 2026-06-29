<div align="center">

# ✨ Modern To-Do Application

**A sleek, responsive, and minimalist task manager built with Vanilla JavaScript.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Status](https://img.shields.io/badge/Status-Complete-2EA043?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-None-E3000F?style=flat-square)
![Phase](https://img.shields.io/badge/Phase%201-Web%20Foundations%20Day%204-D4D4D4?style=flat-square&logoColor=black&labelColor=0A0A0A)

</div>

---

## 🎯 About The Project

This is a **Phase 1 – Web Foundations (Day 4)** assignment focused on mastering **DOM Manipulation** and modern **ES6+** JavaScript concepts. 

The application is a fully functional To-Do list wrapped in a beautiful, premium user interface. It features a modern two-column layout, soft color palettes, rounded corners, and a highly responsive design.

---

## ✨ Features

- 📝 **Add Tasks:** Quickly add items to your list.
- ✅ **Toggle Completion:** Mark tasks as done or pending with a single click.
- 🗑️ **Delete Tasks:** Remove unwanted tasks easily.
- 🔍 **Filter Views:** Effortlessly switch between *All*, *Pending*, and *Done* tasks.
- 📊 **Dynamic Stats:** Real-time counters for total, pending, and completed tasks.
- 📱 **Responsive UI:** A beautifully crafted, mobile-friendly card layout that scales perfectly.
- 📜 **Scrollable List:** Fixed-height container with a custom internal scrollbar for a seamless experience.

---

## 🎨 UI & Aesthetics

The design has been carefully refined to provide a premium feel:
- **Clean Card Layout:** Wrapped in a rounded container (`20px` radius) with a subtle border.
- **Typography:** Uses the **Archivo** font for a sharp, modern look.
- **Colors:** A soft off-white background (`#f0efed`) makes the crisp white card pop, accented with bold red and deep monochrome tones.
- **Two-Column Grid:** On desktop, a sidebar holds the title and stats, while the main panel handles the interactive list. It gracefully stacks on mobile devices.

---

## 🧠 ES6+ Concepts Demonstrated

This project strictly adheres to modern JavaScript standards. Here is how the requirements were met:

| Concept | Implementation Details |
|---|---|
| **DOM Selection** | Utilized `getElementById` and `querySelectorAll` for efficient element targeting. |
| **Event Handling** | Implemented `addEventListener` for form submissions and filter buttons, plus **Event Delegation** on the task list. |
| **Arrow Functions** | Used extensively (e.g., `const addTask = (text) => { ... }`) for concise syntax. |
| **Template Literals** | Dynamic HTML injection in `buildTaskRow()` using backticks and interpolation (`${text}`). |
| **Destructuring** | Extracted data cleanly: `const { id: taskId, ...rest } = task;` |
| **Spread Operator** | Appended items immutably: `tasks = [...tasks, newTask];` |
| **Rest Operator** | Kept object properties intact during state updates via `...rest`. |
| **Array `.map()`** | Mapped over the task array to toggle the `completed` status immutably. |
| **Array `.filter()`** | Filtered tasks for deletion and for specific list views (Pending/Done). |
| **Array `.find()`** | Looked up individual tasks before toggling them to ensure data integrity. |

---

## 🚀 How to Run

Because this project relies purely on native web technologies, no build step or package installation is required!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd day-4
   ```
3. **Open the app:**
   Double-click `index.html` to open it in your default web browser, or use a tool like VS Code Live Server.

---

## 📁 File Structure

```text
day-4/
├── index.html    # Semantic HTML structure & two-column layout
├── style.css     # CSS variables, Flexbox/Grid layout, and custom scrollbars
├── script.js     # State management, DOM manipulation, and ES6+ logic
└── README.md     # Project documentation
```

<br>
<div align="center">
  <i>Crafted with passion for clean code and beautiful design.</i>
</div>