import Avatar from './Avatar.jsx';
import SkillTag from './SkillTag.jsx';
import ConnectButton from './ConnectButton.jsx';

/**
 * ProfileCard
 * Composes Avatar, SkillTag, and ConnectButton into a profile card
 * tightly inspired by the Swiss / monochrome card reference design.
 *
 * Props: name, profession, location, bio, skills, projects, followers, imageUrl
 */
function ProfileCard({ name, profession, location, bio, skills, projects, followers, imageUrl }) {
  return (
    <article className="card">

      {/* ── Photo / Avatar area — fills top of card like the reference ── */}
      <div className="card-photo">
        {/* Role badge — top left */}
        <div className="badge-top-left">
          <span className="badge-dot" />
          {profession.split(' ')[0]}
        </div>

        {/* Rating badge — top right */}
        <div className="badge-top-right">
          4.8 <span className="badge-star">★</span>
        </div>

        <div className="card-photo-inner">
          {imageUrl ? (
            <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Avatar name={name} size={160} />
          )}
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="card-body">

        {/* Name + Profession */}
        <div className="card-identity">
          <h2 className="card-name">{name}</h2>
          <p className="card-profession">{profession} · {location}</p>
        </div>

        {/* Skills */}
        <div className="card-skills-area">
          <span className="skills-label">Skills</span>
          <div className="card-skills">
            {skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* Stats + Follow button row — mirrors the reference layout */}
        <div className="card-footer">
          <div className="card-stats">
            <div className="stat-item">
              <span className="stat-label">Projects</span>
              <span className="stat-value">{projects}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Location</span>
              <span className="stat-value">
                {location.split(',')[0].trim().toUpperCase()}
              </span>
            </div>
          </div>
          <ConnectButton />
        </div>

      </div>
    </article>
  );
}

export default ProfileCard;