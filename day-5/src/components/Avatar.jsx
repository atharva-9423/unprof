/**
 * Avatar
 * Renders a large circular avatar with bold initials.
 * Fills the card-photo area when size matches it.
 */
function Avatar({ name, size = 160 }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="avatar-ring" style={{ width: size, height: size }}>
      <div className="avatar-inner">
        <span className="avatar-initials">{initials}</span>
      </div>
    </div>
  );
}

export default Avatar;