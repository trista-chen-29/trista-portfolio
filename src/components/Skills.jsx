'use client';

import { useId, useRef, useState } from 'react';
import { Chip } from './Ui';

const preview = [
  { label: 'Firmware', items: 'C, C++, ESP32, Arduino, Hall sensors' },
  { label: 'Robotics', items: 'CAN / TWAI, UART, Python, Socket.IO' },
  { label: 'Validation', items: 'EMC / RF, Wi-Fi 6E, k6, Playwright' },
  { label: 'Software', items: 'Python, TypeScript, React, Go, FastAPI' },
];

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
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef(null);

  return (
    <section
      className="block"
      aria-labelledby="skills-heading"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <h2 id="skills-heading" className="section-label">Toolkit</h2>
      <dl className="skill-preview">
        {preview.map((row) => (
          <div key={row.label} className="skill-row">
            <dt>{row.label}</dt>
            <dd>{row.items}</dd>
          </div>
        ))}
      </dl>
      <button
        ref={buttonRef}
        type="button"
        className="btn-outline toolkit-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Explore my toolkit</span>
        <span className="interest-mark" aria-hidden="true">
          {open ? (
            <svg viewBox="0 0 24 24"><path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          )}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-label="Full toolkit"
        className={open ? 'interest-panel open' : 'interest-panel'}
        inert={!open}
        aria-hidden={!open}
      >
        <div className="interest-panel-inner">
          <div className="toolkit">
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
        </div>
      </div>
    </section>
  );
}
