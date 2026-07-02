import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import StatsBar from './components/StatsBar'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'

const STORAGE_KEY = 'taskflow.tasks'

/**
 * App — the single source of truth ("smart" / container component).
 * It owns all state and passes data + callbacks down to child
 * ("presentational") components via props.
 */
function App() {
  // ------------------------------------------------------------------
  // useState  — reactive state. When we call a setter, React re-renders.
  // The function passed to useState is a "lazy initializer": it runs
  // ONCE on first render, so we read localStorage only a single time.
  // ------------------------------------------------------------------
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('all') // 'all' | 'pending' | 'completed'

  // ------------------------------------------------------------------
  // useEffect — runs side effects AFTER render. The dependency array
  // [tasks] means: "re-run this whenever `tasks` changes." Here we keep
  // localStorage in sync so tasks survive a page refresh.
  // ------------------------------------------------------------------
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // ------------------------------------------------------------------
  // Actions — always update state immutably (return a NEW array),
  // using the functional updater `prev => ...` so we never work with
  // stale state.
  // ------------------------------------------------------------------
  function addTask(title) {
    const newTask = { id: Date.now(), title, completed: false }
    setTasks(prev => [newTask, ...prev])
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  // ------------------------------------------------------------------
  // Derived data — computed on every render from state. No extra state
  // needed for counts or the filtered list.
  // ------------------------------------------------------------------
  const completedCount = tasks.filter(task => task.completed).length

  const visibleTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true // 'all'
  })

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">TASK<mark>FLOW</mark></h1>
        <p className="app__subtitle">
          React task manager · useState · useEffect · Hooks
        </p>
      </header>

      <main className="app__card">
        <TaskForm onAdd={addTask} />
        <StatsBar total={tasks.length} completed={completedCount} />
        <FilterBar current={filter} onChange={setFilter} />
        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </main>

      <footer className="app__footer">
        Built with React + Vite · Web Dev Internship · Day 6 &amp; 7
      </footer>
    </div>
  )
}

export default App
