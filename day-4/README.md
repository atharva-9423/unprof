<div align="center">

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Tear-Off%20Calendar.png" alt="Calendar" width="120" height="120" />

# 🌟 Modern To-Do Application

*A premium, highly responsive, and minimalist task manager built purely with Vanilla JavaScript.*

<br/>

<!-- Tech Stack Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<!-- Status & Info Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=flat-square&logo=checkmark&logoColor=white" alt="Status" />
  <img src="https://img.shields.io/badge/Phase_1-Web_Foundations-8A2BE2?style=flat-square&logo=google-scholar&logoColor=white" alt="Phase 1" />
  <img src="https://img.shields.io/badge/Day_4-DOM_Manipulation-FF4500?style=flat-square&logo=javascript&logoColor=white" alt="Day 4" />
  <img src="https://img.shields.io/badge/Dependencies-None-critical?style=flat-square" alt="Zero Dependencies" />
</p>

---

</div>

## 📖 About The Project

This project represents the culmination of **Phase 1 – Web Foundations (Day 4)**. The objective was to master **DOM Manipulation** and integrate modern **ES6+ JavaScript** concepts. 

We didn't just meet the requirements; we wrapped them in a beautifully crafted, premium User Interface featuring soft color palettes, a two-column grid layout, and seamless interactions. 

<br/>

## 🚀 Key Features

<table>
  <tr>
    <td width="50%">
      <h3>📝 Add Tasks</h3>
      <p>Quickly add items to your list with a press of a button or the Enter key. No lag, instant feedback.</p>
    </td>
    <td width="50%">
      <h3>✅ Toggle Completion</h3>
      <p>Mark tasks as done or pending with a beautifully styled circular toggle. Instantly updates stats.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🗑️ Delete Tasks</h3>
      <p>Remove unwanted tasks easily. Clean state management ensures perfect sync.</p>
    </td>
    <td width="50%">
      <h3>🔍 Filter Views</h3>
      <p>Effortlessly switch between <b>All</b>, <b>Pending</b>, and <b>Done</b> tasks to stay focused.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📊 Dynamic Stats</h3>
      <p>Real-time counters for total, pending, and completed tasks keep you informed.</p>
    </td>
    <td width="50%">
      <h3>📱 Fully Responsive UI</h3>
      <p>A beautifully crafted card layout that scales perfectly across desktops, tablets, and mobiles.</p>
    </td>
  </tr>
</table>

<br/>

## 🎨 UI & Aesthetics Highlights

> *"Good design is obvious. Great design is transparent."*

- 🖼️ **Clean Card Layout:** Wrapped in a rounded container (`20px` radius) with a subtle, premium border.
- 🔤 **Typography:** Powered by **Archivo** for a sharp, modern, and highly legible look.
- 🎨 **Color Palette:** A soft off-white background (`#f0efed`) makes the crisp white card pop, accented with bold red and deep monochrome tones.
- 📐 **Two-Column Grid:** On desktop, a sidebar holds the title and stats. On mobile, it gracefully stacks.
- 📜 **Scrollable List:** Fixed-height container with a custom minimal scrollbar for a seamless experience.

<br/>

## 🧠 ES6+ Concepts Demonstrated

This project strictly adheres to modern JavaScript standards, completely satisfying the mentor's criteria:

| 🔹 Concept | 💡 Implementation Details |
| :--- | :--- |
| **DOM Selection** | `getElementById` & `querySelectorAll` for efficient targeting. |
| **Event Handling** | `addEventListener` and **Event Delegation** implemented on the task list. |
| **Arrow Functions** | Clean, concise syntax used everywhere (e.g., `const addTask = (text) => { ... }`). |
| **Template Literals** | Dynamic HTML injection using backticks and interpolation (`${text}`). |
| **Destructuring** | Extracted data cleanly: `const { id: taskId, ...rest } = task;` |
| **Spread Operator** | Immutably appended items: `tasks = [...tasks, newTask];` |
| **Rest Operator** | Kept object properties intact during state updates via `...rest`. |
| **Array `.map()`** | Mapped over the task array to toggle the `completed` status immutably. |
| **Array `.filter()`** | Filtered tasks for deletion and specific list views (Pending/Done). |
| **Array `.find()`** | Looked up individual tasks before toggling to ensure data integrity. |

<br/>

## ⚙️ How to Run

Because this project relies purely on native web technologies (Vanilla JS, HTML5, CSS3), there is **zero build step** and **no dependencies**.

<details>
<summary><b>🖱️ Click to reveal instructions</b></summary>
<br>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd day-4
   ```
3. **Open the app:**
   Double-click `index.html` to open it in your default web browser, or use an extension like VS Code Live Server.

</details>

<br/>

## 📂 File Structure

```text
📦 day-4
 ┣ 📜 index.html    # Semantic HTML structure & two-column layout
 ┣ 🎨 style.css     # CSS variables, Flexbox/Grid layout, and custom scrollbars
 ┣ ⚙️ script.js     # State management, DOM manipulation, and ES6+ logic
 ┗ 📖 README.md     # Project documentation
```

<br/>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0a0a0a&height=100&section=footer" width="100%"/>
  <br/><br/>
  <p><b>Crafted with passion for clean code and beautiful design.</b></p>
  <img src="https://img.shields.io/badge/Made_With-❤️-ff0000?style=for-the-badge" alt="Made with Love" />
</div>
