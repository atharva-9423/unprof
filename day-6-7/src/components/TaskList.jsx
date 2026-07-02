import TaskItem from './TaskItem'

/**
 * TaskList — renders the list of tasks.
 * Demonstrates:
 *  - CONDITIONAL RENDERING: shows an empty-state message when there are
 *    no tasks to display.
 *  - LIST RENDERING with KEYS: maps the array to <TaskItem> elements,
 *    each with a stable unique `key` so React can update efficiently.
 */
function TaskList({ tasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="tasklist__empty">
        {filter === 'all'
          ? 'No tasks yet — add your first one above! ✍️'
          : `No ${filter} tasks right now.`}
      </p>
    )
  }

  return (
    <ul className="tasklist">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
