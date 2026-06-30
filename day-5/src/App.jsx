import ProfileCard from './components/ProfileCard.jsx';
import atharvaImg from './atharva.png';
import ribbonImg from './ribbon.png';

// Worker data — props flow down to ProfileCard → Avatar / SkillTag / ConnectButton
const workers = [
  {
    name: 'Atharva Phatangare',
    profession: 'Python & AI Developer',
    location: 'Pune',
    bio: 'Building expertise in Python and AI, exploring RAG pipelines and full-stack development.',
    skills: ['Python', 'React', 'NLP', 'JavaScript', 'FastAPI'],
    projects: 18,
    followers: 420,
    imageUrl: atharvaImg,
  },
];

function App() {
  return (
    <main className="page">
      {/* ── Ribbon ── */}
      <img src={ribbonImg} className="lanyard-ribbon" alt="" />
      
      {/* ── Header ── */}
      <header className="page-header">
        <div className="header-left">
          <span className="eyebrow">UnProf — Worker Directory</span>
          <h1>
            Worker<br />
            <span className="accent-word">Profiles.</span>
          </h1>
        </div>
        <div className="header-right">
          <p className="page-subtitle">
            Building expertise in Python and AI, exploring RAG pipelines and full-stack development.
          </p>
        </div>
      </header>

      {/* ── Cards ── */}
      <div className="card-grid">
        {workers.map((worker) => (
          <ProfileCard key={worker.name} {...worker} />
        ))}
      </div>

      {/* ── Footer strip ── */}
      <footer className="page-footer">
        <div className="footer-accent" />
      </footer>
    </main>
  );
}

export default App;