// ── State ──────────────────────────────────────────────
// Each student is an object stored inside the `students` array.
const students = [];

const PASS_THRESHOLD = 40; // average marks needed to pass

// ── DOM References ─────────────────────────────────────
const form = document.getElementById('studentForm');
const nameInput = document.getElementById('nameInput');
const rollInput = document.getElementById('rollInput');
const mark1Input = document.getElementById('mark1Input');
const mark2Input = document.getElementById('mark2Input');
const mark3Input = document.getElementById('mark3Input');
const formError = document.getElementById('formError');
const tableBody = document.getElementById('studentTableBody');
const emptyState = document.getElementById('emptyState');
const countTag = document.getElementById('countTag');
const table = document.getElementById('studentTable');

// ── Helper: calculate average marks ────────────────────
function calculateAverage(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

// ── Helper: determine pass/fail status ─────────────────
function getStatus(average) {
  return average >= PASS_THRESHOLD ? 'Pass' : 'Fail';
}

// ── Validate form input before adding a student ────────
function validateInput(name, roll, marks) {
  if (!name || !roll) {
    return 'Name and roll number are required.';
  }
  for (const mark of marks) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Marks must be numbers between 0 and 100.';
    }
  }
  if (students.some((s) => s.roll === roll)) {
    return `Roll number ${roll} already exists.`;
  }
  return null;
}

// ── Render the table from the students array ───────────
function renderTable() {
  tableBody.innerHTML = '';

  if (students.length === 0) {
    table.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    table.style.display = '';
    emptyState.style.display = 'none';
  }

  students.forEach((student, index) => {
    const average = calculateAverage(student.marks);
    const status = getStatus(average);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td data-label="Roll">${student.roll}</td>
      <td data-label="Name" class="student-name">${student.name}</td>
      <td data-label="Average" class="num">${average.toFixed(1)}</td>
      <td data-label="Status">
        <span class="status-chip ${status === 'Pass' ? 'pass' : 'fail'}">${status}</span>
      </td>
      <td data-label="">
        <button class="remove-btn" data-index="${index}" type="button">Remove</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  countTag.textContent = `${students.length} student${students.length === 1 ? '' : 's'}`;
}

// ── Handle form submission: add a new student ──────────
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const roll = rollInput.value.trim();
  const marks = [mark1Input.value, mark2Input.value, mark3Input.value].map(Number);

  const error = validateInput(name, roll, marks);
  if (error) {
    formError.textContent = error;
    formError.classList.add('show');
    return;
  }

  formError.classList.remove('show');

  students.push({ name, roll, marks });
  renderTable();
  form.reset();
  nameInput.focus();
});

// ── Handle remove button clicks (event delegation) ─────
tableBody.addEventListener('click', function (event) {
  if (event.target.matches('.remove-btn')) {
    const index = Number(event.target.dataset.index);
    students.splice(index, 1);
    renderTable();
  }
});

// ── Initial render ──────────────────────────────────────
renderTable();