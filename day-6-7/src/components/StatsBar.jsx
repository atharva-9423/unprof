/**
 * StatsBar — a "dumb"/presentational component. It receives numbers via
 * props and just displays them. Reusable and easy to test.
 */
function StatsBar({ total, completed }) {
  const pending = total - completed

  return (
    <div className="stats">
      <div className="stats__item stats__item--total">
        <span className="stats__num">{total}</span>
        <span className="stats__label">Total</span>
      </div>
      <div className="stats__item stats__item--done">
        <span className="stats__num">{completed}</span>
        <span className="stats__label">Completed</span>
      </div>
      <div className="stats__item stats__item--pending">
        <span className="stats__num">{pending}</span>
        <span className="stats__label">Pending</span>
      </div>
    </div>
  )
}

export default StatsBar
