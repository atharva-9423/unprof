/**
 * TaskItem — one row. A reusable presentational component.
 * It reports user actions upward by calling the `onToggle` / `onDelete`
 * callbacks it received as props (data flows down, events flow up).
 */
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={'task' + (task.completed ? ' task--done' : '')}>
      <label className="task__main">
        <input
          type="checkbox"
          className="task__check"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task__title">{task.title}</span>
      </label>

      <button
        className="task__delete"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
