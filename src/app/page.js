import Image from 'next/image';
import { SectionLabel, BtnSolid, BtnOutline, Divider, ContactLink, SkillRow } from '@/components/Ui';

const skills = [
  {
    label: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Go', icon: 'go' },
      { name: 'Java', icon: 'java' },
      { name: 'C / C++', icon: 'cplusplus' },
      { name: 'SQL', icon: null },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'Socket.IO', icon: null },
      { name: 'Vite', icon: 'vitejs' },
      { name: 'JavaFX', icon: 'java' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Gin', icon: 'go' },
      { name: 'Django', icon: 'django' },
    ],
  },
  {
    label: 'Data / Infra',
    items: [
      { name: 'Kafka', icon: 'apachekafka' },
      { name: 'Redis', icon: 'redis' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Docker', icon: 'docker' },
    ],
  },
  {
    label: 'Embedded',
    items: [
      { name: 'ESP32', icon: null },
      { name: 'CAN / TWAI', icon: null },
      { name: 'Hall sensors', icon: null },
      { name: 'Motor control', icon: null },
      { name: 'Arduino', icon: null },
    ],
  },
  {
    label: 'AI / ML',
    items: [
      { name: 'YOLOv8', icon: null },
      { name: 'scikit-learn', icon: null },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'Edge AI', icon: null },
      { name: 'Ethos-U55', icon: null },
    ],
  },
  {
    label: 'Testing',
    items: [
      { name: 'k6', icon: null },
      { name: 'Postman', icon: null },
      { name: 'JMeter', icon: null },
      { name: 'Playwright', icon: null },
      { name: 'Git', icon: 'git' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
];

const contacts = [
  { icon: '✉', text: 'yichichen229@gmail.com', href: 'mailto:yichichen229@gmail.com' },
  { icon: 'in', text: 'linkedin.com/in/yichichen229', href: 'https://linkedin.com/in/yichichen229' },
  { icon: 'gh', text: 'github.com/trista-chen-29', href: 'https://github.com/trista-chen-29' },
  { icon: '📍', text: 'San Jose, CA', href: null },
  { icon: '📞', text: '(408) 549-6898', href: 'tel:4085496898' },
];

export default function AboutPage() {
  return (
    <div className="page">
      <div className="hero-grid reveal">
        <div className="hero-copy">
          <SectionLabel>Firmware · Robotics · Full-Stack · ML</SectionLabel>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 8vw, 5rem)',
            fontWeight: 400, lineHeight: 1.05,
            marginBottom: '1rem', letterSpacing: '-.01em',
          }}>
            Yi-Chi{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Trista</em>{' '}Chen
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '.8rem', color: 'var(--text2)',
            letterSpacing: '.06em', marginBottom: '2rem',
          }}>
            SJSU Software Engineering ’27 · San Jose, CA
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '560px' }}>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              I build systems that stay reliable when the hardware, the network, or the load gets messy — from{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>CAN teleoperation</strong> on a rover arm,
              to a{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Kafka + Redis registration platform</strong> that held 1k+ concurrent users,
              to{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>ESP32 wheel calibration</strong> that recovers zero after power loss.
            </p>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              Right now I am an associate test technician at{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Element Materials Technology</span>,
              running EMC/RF validation across Wi-Fi, Bluetooth, UWB, and 802.15.4. Before that I shipped software with SJSU Robotics, SCE Development, Alef, and an industry-led YOLOv8 project with Nuvoton.
            </p>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              I like work where{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>clarity meets complexity</strong>:
              command/ACK recovery on lossy links, race-free waitlists, schema-checked ML APIs, and UIs that show commanded vs. actual state.
            </p>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              Outside of code I am usually jogging, rock climbing, shooting hoops, or tidying something that probably did not need tidying. Also:{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>I was born on February 29</span>
              {' '}— so technically I have only had 5 real birthdays.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <BtnSolid href="mailto:yichichen229@gmail.com">Get in Touch</BtnSolid>
            <BtnOutline href="/Yi-Chi_Chen_Resume.pdf" target="_blank">Resume ↗</BtnOutline>
            <BtnOutline href="https://github.com/trista-chen-29" target="_blank">GitHub ↗</BtnOutline>
            <BtnOutline href="https://linkedin.com/in/yichichen229" target="_blank">LinkedIn ↗</BtnOutline>
          </div>
        </div>

        <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div className="hero-photo">
            <Image
              src="/photo.jpg"
              alt="Trista Chen"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              priority
            />
          </div>
          <div className="hero-stats" style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '8px', overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}>
            {[
              { k: 'GPA', v: '3.71 / 4.0', accent: true },
              { k: 'Grad', v: 'May 2027', accent: false },
              { k: 'Status', v: '● Open to internships', green: true },
            ].map(({ k, v, accent, green }, i, arr) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '.6rem 1rem',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--text3)' }}>{k}</span>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '.72rem', fontWeight: 500,
                  color: green ? '#4ade80' : accent ? 'var(--accent)' : 'var(--text)',
                }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reveal delay-2">
        <SectionLabel>Technical Skills</SectionLabel>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {skills.map(({ label, items }) => (
            <SkillRow key={label} label={label} items={items} />
          ))}
        </div>
      </div>

      <Divider />

      <div className="reveal delay-2">
        <SectionLabel>Education</SectionLabel>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <div className="cert-row">
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '.67rem', fontWeight: 500,
              letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)',
              paddingTop: '.15rem',
            }}>
              SJSU
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
              <span style={{ fontSize: '.9rem', fontWeight: 500, color: 'var(--text)' }}>
                B.S. in Software Engineering
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                Data Structures & Algorithms · Database Systems · Machine Learning for Big Data · Operating Systems · Computer Organization & Architecture · Assembly
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--accent)',
              whiteSpace: 'nowrap', paddingTop: '.15rem',
            }}>
              Expected May 2027
            </span>
          </div>
        </div>
      </div>

      <Divider />

      <div className="reveal delay-2">
        <SectionLabel>Certifications</SectionLabel>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <div className="cert-row">
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '.67rem', fontWeight: 500,
              letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)',
              paddingTop: '.15rem',
            }}>
              Google
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
              <span style={{ fontSize: '.9rem', fontWeight: 500, color: 'var(--text)' }}>
                Google Project Management Certificate
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                Project lifecycle, Agile & Scrum, risk management, stakeholder communication, and data-driven decision making.
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--accent)',
              whiteSpace: 'nowrap', paddingTop: '.15rem',
            }}>
              Jan – Mar 2026
            </span>
          </div>
        </div>
      </div>

      <Divider />
      <div className="reveal delay-3">
        <SectionLabel>Contact</SectionLabel>
        <div className="contact-grid">
          <div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(1.7rem, 5vw, 2.2rem)',
              fontWeight: 400, lineHeight: 1.2, marginBottom: '.75rem',
            }}>
              Let&apos;s build something{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>worth shipping.</em>
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Open to internships in software, firmware, robotics, and ML engineering. Inbox is always open.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <BtnSolid href="mailto:yichichen229@gmail.com">Send an Email</BtnSolid>
              <BtnOutline href="https://linkedin.com/in/yichichen229" target="_blank">LinkedIn ↗</BtnOutline>
            </div>
          </div>
          <div>
            {contacts.map(({ icon, text, href }) => (
              <ContactLink key={text} icon={icon} text={text} href={href} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
