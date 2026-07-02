import { useState } from 'react'

/**
 * TaskForm — a controlled form.
 * The <input> value is driven by React state (`title`), so React is the
 * "single source of truth" for what's typed. This is the standard React
 * way to handle forms.
 */
function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()        // stop the browser from reloading the page
    const trimmed = title.trim()
    if (!trimmed) return          // ignore empty / whitespace-only tasks
    onAdd(trimmed)                // lift the value up to the parent (App)
    setTitle('')                  // clear the input after adding
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <button className="task-form__btn" type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
