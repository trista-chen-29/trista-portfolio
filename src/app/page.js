import Image from 'next/image';
import { Chip } from '@/components/Ui';

const skills = [
  { label: 'Languages', items: [
    { name: 'Python', icon: 'python' }, { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' }, { name: 'Go', icon: 'go' },
    { name: 'Java', icon: 'java' }, { name: 'C / C++', icon: 'cplusplus' }, { name: 'SQL' },
  ]},
  { label: 'Frontend', items: [
    { name: 'React', icon: 'react' }, { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind', icon: 'tailwindcss' }, { name: 'Socket.IO' }, { name: 'Vite', icon: 'vitejs' },
  ]},
  { label: 'Backend & data', items: [
    { name: 'FastAPI', icon: 'fastapi' }, { name: 'Node.js', icon: 'nodejs' },
    { name: 'Kafka', icon: 'apachekafka' }, { name: 'Redis', icon: 'redis' },
    { name: 'MongoDB', icon: 'mongodb' }, { name: 'MySQL', icon: 'mysql' }, { name: 'Docker', icon: 'docker' },
  ]},
  { label: 'Embedded & ML', items: [
    { name: 'ESP32' }, { name: 'CAN / TWAI' }, { name: 'YOLOv8' },
    { name: 'scikit-learn' }, { name: 'Ethos-U55' }, { name: 'Playwright' }, { name: 'k6' },
  ]},
];

const contacts = [
  { label: 'Email', value: 'yichichen229@gmail.com', href: 'mailto:yichichen229@gmail.com' },
  { label: 'LinkedIn', value: 'yichichen229', href: 'https://linkedin.com/in/yichichen229' },
  { label: 'GitHub', value: 'trista-chen-29', href: 'https://github.com/trista-chen-29' },
  { label: 'Phone', value: '(408) 549-6898', href: 'tel:4085496898' },
  { label: 'Location', value: 'San Jose, CA', href: null },
];

export default function AboutPage() {
  return (
    <div className="page">
      <section className="hero reveal">
        <div>
          <p className="page-kicker">Firmware · Robotics · Full-Stack · ML</p>
          <div className="hero-profile" style={{ marginTop: 10 }}>
            <div className="hero-photo">
              <Image src="/photo.jpg" alt="Trista Chen" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} priority sizes="168px" />
            </div>
            <div className="hero-copy">
              <h1 className="page-title" style={{ margin: 0 }}>Yi-Chi Trista Chen</h1>
              <p className="page-sub" style={{ margin: '6px 0 0' }}>SJSU Software Engineering ’27</p>
            </div>
          </div>
          <div className="hero-bio" style={{ marginTop: 14 }}>
            <p>
              I build systems that stay reliable when hardware, networks, or load get messy — from{' '}
              <span className="strong">CAN teleoperation</span> on a rover arm, to a{' '}
              <span className="strong">Kafka + Redis</span> registration platform for 1k+ users, to{' '}
              <span className="strong">ESP32 wheel calibration</span> after power loss.
            </p>
            <p>
              I am an associate test technician at <span className="accent">Element Materials Technology</span>, running EMC/RF validation. Before that I shipped work with SJSU Robotics, SCE Development, Alef, and Nuvoton.
            </p>
            <p>
              Outside of code: jogging, climbing, hoops, and a February 29 birthday — five real birthdays so far.
            </p>
          </div>
          <div className="hero-actions" style={{ marginTop: 14 }}>
            <a className="btn-solid" href="mailto:yichichen229@gmail.com">Message</a>
            <a className="btn-outline" href="/Yi-Chi_Chen_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <a className="btn-outline" href="https://github.com/trista-chen-29" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-outline" href="https://linkedin.com/in/yichichen229" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="ios-group" style={{ margin: 0 }}>
          <div className="ios-group-label">Snapshot</div>
          <div className="ios-card">
            <div className="ios-row"><span className="label">GPA</span><span className="value accent">3.71 / 4.0</span></div>
            <div className="ios-row"><span className="label">Grad</span><span className="value">May 2027</span></div>
            <div className="ios-row"><span className="label">Status</span><span className="value green">Open to internships</span></div>
          </div>
        </div>
      </section>

      {skills.map((group) => (
        <div className="ios-group" key={group.label}>
          <div className="ios-group-label">{group.label}</div>
          <div className="ios-card">
            <div className="chips">
              {group.items.map((item) => (
                <Chip key={item.name} icon={item.icon}>{item.name}</Chip>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="ios-group">
        <div className="ios-group-label">Education</div>
        <div className="ios-card">
          <div className="ios-row stack">
            <span className="label">B.S. Software Engineering · SJSU</span>
            <span className="value">Expected May 2027 · DSA, databases, OS, computer architecture, ML for big data</span>
          </div>
        </div>
      </div>

      <div className="ios-group">
        <div className="ios-group-label">Certification</div>
        <div className="ios-card">
          <div className="ios-row stack">
            <span className="label">Google Project Management</span>
            <span className="value">Jan – Mar 2026 · Agile, risk, stakeholders</span>
          </div>
        </div>
      </div>

      <div className="ios-group">
        <div className="ios-group-label">Contact</div>
        <div className="ios-card">
          {contacts.map((c) => (
            c.href ? (
              <a key={c.label} className="ios-row" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="label">{c.label}</span>
                <span className="value accent">{c.value}</span>
              </a>
            ) : (
              <div key={c.label} className="ios-row">
                <span className="label">{c.label}</span>
                <span className="value">{c.value}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
