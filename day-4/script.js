let tasks = [];
let currentFilter = 'all';
let nextId = 1;

const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const formError = document.getElementById('formError');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const countTag = document.getElementById('countTag');
const filterButtons = document.querySelectorAll('.filter-btn');
const statsFooter = document.getElementById('stats');

const addTask = (text) => {
  const newTask = { id: nextId++, text, completed: false };
  tasks = [...tasks, newTask];
  render();
};

const toggleTask = (id) => {
  const targetTask = tasks.find((task) => task.id === id);
  if (!targetTask) return;

  tasks = tasks.map((task) => {
    const { id: taskId, ...rest } = task;
    return taskId === id ? { id: taskId, ...rest, completed: !rest.completed } : task;
  });
  render();
};

const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  render();
};

const getFilteredTasks = () => {
  if (currentFilter === 'pending') return tasks.filter((task) => !task.completed);
  if (currentFilter === 'completed') return tasks.filter((task) => task.completed);
  return tasks;
};

const buildTaskRow = ({ id, text, completed }) => `
  <li class="task-item ${completed ? 'completed' : ''}" data-id="${id}">
    <button class="task-marker ${completed ? 'checked' : ''}" data-action="toggle" data-id="${id}" type="button" aria-label="Toggle complete"></button>
    <span class="task-text">${text}</span>
    <button class="delete-btn" data-action="delete" data-id="${id}" type="button">Remove</button>
  </li>
`;

function render() {
  const visibleTasks = getFilteredTasks();

  taskList.innerHTML = visibleTasks.map(buildTaskRow).join('');
  emptyState.style.display = visibleTasks.length === 0 ? 'block' : 'none';

  countTag.textContent = String(tasks.length).padStart(2, '0');

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  statsFooter.innerHTML = `
    <span>Total <span class="stat-value">${tasks.length}</span></span>
    <span>Pending <span class="stat-value">${pendingCount}</span></span>
    <span>Done <span class="stat-value">${completedCount}</span></span>
  `;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (!text) {
    formError.textContent = 'Please enter a task before adding.';
    formError.classList.add('show');
    return;
  }

  formError.classList.remove('show');
  addTask(text);
  taskInput.value = '';
  taskInput.focus();
});

taskList.addEventListener('click', (event) => {
  const { action, id } = event.target.dataset;
  if (!action) return;

  const numericId = Number(id);
  if (action === 'toggle') toggleTask(numericId);
  if (action === 'delete') deleteTask(numericId);
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    render();
  });
});

render();