import { Chip } from './Ui';

const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'C', icon: 'c' }, { name: 'C++', icon: 'cplusplus' },
      { name: 'Python', icon: 'python' }, { name: 'Go', icon: 'go' },
      { name: 'Java', icon: 'java' }, { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' }, { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Assembly' }, { name: 'SQL' },
      { name: 'HTML', icon: 'html5' }, { name: 'CSS', icon: 'css3' },
    ],
  },
  {
    label: 'Embedded & firmware',
    items: [
      { name: 'ESP32' }, { name: 'CAN / TWAI' }, { name: 'UART' }, { name: 'USB' },
      { name: 'Hall sensors' }, { name: 'Motor control' }, { name: 'Ethos-U55' }, { name: 'Arduino' },
    ],
  },
  {
    label: 'Backend & data',
    items: [
      { name: 'FastAPI', icon: 'fastapi' }, { name: 'Gin' },
      { name: 'Kafka', icon: 'apachekafka' }, { name: 'Redis', icon: 'redis' },
      { name: 'MongoDB', icon: 'mongodb' }, { name: 'MySQL', icon: 'mysql' },
      { name: 'SQLite', icon: 'sqlite' }, { name: 'Pydantic' }, { name: 'JWT' },
      { name: 'React', icon: 'react' }, { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodejs' }, { name: 'Express', icon: 'express' },
      { name: 'Electron', icon: 'electron' }, { name: 'Vite', icon: 'vitejs' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'JDBC' }, { name: 'JSP' }, { name: 'JavaFX' }, { name: 'Maven', icon: 'maven' },
      { name: 'Docker', icon: 'docker' }, { name: 'Socket.IO', icon: 'socketio' },
    ],
  },
  {
    label: 'ML, validation & tools',
    items: [
      { name: 'PyTorch', icon: 'pytorch' }, { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'pandas', icon: 'pandas' }, { name: 'Jupyter', icon: 'jupyter' },
      { name: 'YOLOv8' }, { name: 'Whisper' }, { name: 'RedisVL' }, { name: 'uAgents' },
      { name: 'EMC / RF' }, { name: 'Wi-Fi 6E' }, { name: 'Bluetooth' }, { name: 'UWB' },
      { name: 'k6' }, { name: 'Playwright' }, { name: 'pytest' }, { name: 'Vitest' },
      { name: 'Linux', icon: 'linux' }, { name: 'GitHub Actions' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="block" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-label">Toolkit</h2>
      <div className="quiet-card toolkit-card">
        {groups.map((group) => (
          <div key={group.label}>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item.name}><Chip icon={item.icon}>{item.name}</Chip></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
