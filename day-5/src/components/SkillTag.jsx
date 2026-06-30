/**
 * SkillTag
 * Minimal flat chip — no border, just background.
 * Receives `label` via props, zero internal state.
 */
function SkillTag({ label }) {
  return <span className="skill-tag">{label}</span>;
}

export default SkillTag;