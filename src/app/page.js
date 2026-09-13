import Image from 'next/image';
import { Chip } from '@/components/Ui';

const skills = [
  { label: 'Embedded & robotics', items: [
    { name: 'ESP32' }, { name: 'CAN / TWAI' }, { name: 'Hall sensors' },
    { name: 'Motor control' }, { name: 'Signal processing' }, { name: 'Arduino' }, { name: 'Socket.IO' },
  ]},
  { label: 'Validation & test', items: [
    { name: 'EMC / RF' }, { name: 'Wi-Fi 6E' }, { name: 'Bluetooth' }, { name: 'UWB' },
    { name: 'Spectrum analysis' }, { name: 'k6' }, { name: 'Linux' },
  ]},
  { label: 'Languages', items: [
    { name: 'C' }, { name: 'C++', icon: 'cplusplus' }, { name: 'Python', icon: 'python' },
    { name: 'Go', icon: 'go' }, { name: 'Java', icon: 'java' },
    { name: 'JavaScript', icon: 'javascript' }, { name: 'TypeScript', icon: 'typescript' }, { name: 'SQL' },
  ]},
  { label: 'Tools', items: [
    { name: 'Git', icon: 'git' }, { name: 'Docker', icon: 'docker' }, { name: 'PyTorch', icon: 'pytorch' },
    { name: 'FastAPI', icon: 'fastapi' }, { name: 'React', icon: 'react' },
    { name: 'Kafka', icon: 'apachekafka' }, { name: 'Redis', icon: 'redis' }, { name: 'MongoDB', icon: 'mongodb' },
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
          <p className="page-kicker">Firmware · Robotics · Validation · Test</p>
          <div className="hero-profile" style={{ marginTop: 10 }}>
            <div className="hero-photo">
              <Image
                src="/photo.jpg"
                alt="Trista Chen"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
                priority
                sizes="168px"
              />
            </div>
            <div className="hero-copy">
              <h1 className="page-title" style={{ margin: 0 }}>Yi-Chi Trista Chen</h1>
              <p className="page-sub" style={{ margin: '6px 0 0' }}>SJSU Software Engineering · May 2027</p>
            </div>
          </div>
          <div className="hero-bio" style={{ marginTop: 14 }}>
            <p>
              I work close to hardware: <span className="strong">ESP32 motor control over CAN</span>,{' '}
              <span className="strong">rover teleoperation</span>, and{' '}
              <span className="strong">EMC/RF validation</span> in a certification lab.
            </p>
            <p>
              Right now I am an associate test technician at <span className="accent">Element Materials Technology</span>.
              Before that I interned in firmware at Alef, built Mission Control software for SJSU Robotics, and deployed YOLOv8 on Ethos-U55 with Nuvoton.
            </p>
            <p>
              Open to <span className="strong">internships now</span> in embedded, firmware, validation, test, or robotics,
              and <span className="strong">new-grad roles after May 2027</span>.
            </p>
          </div>
          <div className="hero-actions" style={{ marginTop: 14 }}>
            <a className="btn-solid" href="mailto:yichichen229@gmail.com">Message</a>
            <a className="btn-outline" href="/Yi-Chi_Trista_Chen_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <a className="btn-outline" href="https://github.com/trista-chen-29" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-outline" href="https://linkedin.com/in/yichichen229" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="ios-group" style={{ margin: 0 }}>
          <div className="ios-group-label">Snapshot</div>
          <div className="ios-card">
            <div className="ios-row"><span className="label">GPA</span><span className="value accent">3.7</span></div>
            <div className="ios-row"><span className="label">Grad</span><span className="value">May 2027</span></div>
            <div className="ios-row stack">
              <span className="label">Seeking</span>
              <span className="value green">Internships now · New grad after May 2027</span>
            </div>
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
            <span className="value">Expected May 2027 · computer organization, assembly, OS, DSA, databases, ML for big data</span>
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
