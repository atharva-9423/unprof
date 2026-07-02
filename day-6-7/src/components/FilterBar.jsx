// The three filter options — defined once, outside the component,
// so the array isn't recreated on every render.
const FILTERS = ['all', 'pending', 'completed']

/**
 * FilterBar — renders a button per filter by mapping over a list.
 * Each button gets a unique `key` (React needs keys for list items).
 * The active button is highlighted via CONDITIONAL class names.
 */
function FilterBar({ current, onChange }) {
  return (
    <div className="filters">
      {FILTERS.map(option => (
        <button
          key={option}
          className={
            'filters__btn' + (current === option ? ' filters__btn--active' : '')
          }
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
