import Image from 'next/image';
import { SectionLabel, BtnSolid, BtnOutline, Divider, ContactLink, SkillRow } from '@/components/Ui';

const skills = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', hi: false,  icon: 'javascript' },
      { name: 'Python',     hi: false,  icon: 'python' },
      { name: 'Java',       hi: false,  icon: 'java' },
      { name: 'SQL',        hi: false,  icon: null },
      { name: 'C++',        hi: false, icon: 'cplusplus' },
      { name: 'Go',         hi: false, icon: 'go' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React',       hi: false,  icon: 'react' },
      { name: 'Tailwind',    hi: false,  icon: 'tailwindcss' },
      { name: 'Socket.IO',   hi: false, icon: null },
      { name: 'MUI',         hi: false, icon: null },
      { name: 'Vite',        hi: false, icon: 'vitejs' },
      { name: 'JavaFX',      hi: false, icon: 'java' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',   hi: false,  icon: 'nodejs' },
      { name: 'Express',   hi: false,  icon: 'express' },
      { name: 'Django',    hi: false,  icon: 'django' },
      { name: 'FastAPI',   hi: false, icon: 'fastapi' },
      { name: 'Gin',       hi: false, icon: 'go' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL',      hi: false,  icon: 'mysql' },
      { name: 'PostgreSQL', hi: false,  icon: 'postgresql' },
      { name: 'SQLite',     hi: false, icon: 'sqlite' },
      { name: 'MongoDB',    hi: false, icon: 'mongodb' },
      { name: 'Redis',      hi: false, icon: 'redis' },
    ],
  },
  {
    label: 'AI / ML',
    items: [
      { name: 'TensorFlow Lite', hi: false,  icon: 'tensorflow' },
      { name: 'CNN',             hi: false, icon: null },
      { name: 'Edge AI',         hi: false, icon: null },
      { name: 'INT8 Quant.',     hi: false, icon: null },
      { name: 'NLP',             hi: false, icon: null },
    ],
  },
  {
    label: 'Testing / QA',
    items: [
      { name: 'Selenium',  hi: false,  icon: 'selenium' },
      { name: 'Postman',   hi: false,  icon: null },
      { name: 'JMeter',    hi: false, icon: null },
      { name: 'Jest',      hi: false, icon: 'jest' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git',    hi: false,  icon: 'git' },
      { name: 'Docker', hi: false, icon: 'docker' },
      { name: 'Maven',  hi: false, icon: 'maven' },
      { name: 'Kafka',  hi: false, icon: 'apachekafka' },
    ],
  },
];

const contacts = [
  { icon: '✉',  text: 'yichichen229@gmail.com',       href: 'mailto:yichichen229@gmail.com' },
  { icon: 'in', text: 'linkedin.com/in/yichichen229', href: 'https://linkedin.com/in/yichichen229' },
  { icon: 'gh', text: 'github.com/trista-chen-29',    href: 'https://github.com/trista-chen-29' },
  { icon: '📍', text: 'Sunnyvale, CA',                href: null },
  { icon: '📞', text: '(408) 549-6898',               href: 'tel:4085496898' },
];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2.5rem 5rem' }}>

      {/* ── Hero: Photo + Name + Bio ── */}
      <div className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'start',
        paddingBottom: '3rem',
        borderBottom: '1px solid var(--border)',
        marginBottom: '3rem',
      }}>
        {/* Left: name + bio + cta */}
        <div>
          <SectionLabel>Full-Stack · AI/ML · QA Engineering</SectionLabel>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
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
            SJSU Software Engineering &apos;27 · Sunnyvale, CA
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '560px' }}>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              I build systems that{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>hold up under pressure</strong>
              {' '}— 9 production APIs at a live startup, a real-time health indicator on a Mars rover controller, and an AI agent that turns messy meeting notes into execution-ready action plans at a hackathon.
            </p>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              I work across the full stack — React frontends, Django & Express backends, relational databases — and I&apos;m deepening into{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>ML engineering and QA</span>
              {' '}through an industry-led Edge AI project with Nuvoton and robotics systems work at SJSU.
            </p>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              I&apos;m drawn to problems where{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>clarity meets complexity</strong>
              : clean API design, reliable data pipelines, and interfaces that surface what matters without clutter.
            </p>
            <p style={{ fontSize: '.97rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              Outside of code, I&apos;m usually jogging, rock climbing, shooting hoops, or tidying something that probably didn&apos;t need tidying. Also:{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>I was born on February 29</span>
              {' '}— so technically I&apos;ve only had 5 real birthdays. Make of that what you will.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <BtnSolid href="mailto:yichichen229@gmail.com">Get in Touch</BtnSolid>
            <BtnOutline href="https://github.com/trista-chen-29" target="_blank">GitHub ↗</BtnOutline>
            <BtnOutline href="https://linkedin.com/in/yichichen229" target="_blank">LinkedIn ↗</BtnOutline>
          </div>
        </div>

        {/* Right: Photo + quick stats beneath */}
        <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          {/* Photo — portrait rectangle */}
          <div style={{
            width: '300px', height: '380px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--bg2)',
            flexShrink: 0,
            position: 'relative',
          }}>
            <Image
              src="/photo.jpg"
              alt="Trista Chen"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              priority
            />
          </div>

          {/* Mini stats strip */}
          <div style={{
            width: '300px',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '8px', overflow: 'hidden',
            boxShadow: 'var(--shadow)',
          }}>
            {[
              { k: 'GPA',    v: '3.71 / 4.0',     accent: true  },
              { k: 'Grad',   v: 'May 2027',        accent: false },
              { k: 'Status', v: '● Open to roles', green: true   },
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

      {/* ── Skills: line by line ── */}
      <div className="reveal delay-2">
        <SectionLabel>Technical Skills</SectionLabel>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {skills.map(({ label, items }) => (
            <SkillRow key={label} label={label} items={items} />
          ))}
        </div>
      </div>

      <Divider />

      {/* ── Certifications ── */}
      <div className="reveal delay-2">
        <SectionLabel>Certifications</SectionLabel>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '110px 1fr auto',
            alignItems: 'start',
            gap: '1.5rem',
            padding: '.85rem 0',
          }}>
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
                6-course program covering project lifecycle, Agile & Scrum, risk management, stakeholder communication, and data-driven decision making. Relevant to planning and coordinating multi-phase software projects.
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
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '8px', padding: '2.5rem',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '3rem', alignItems: 'center',
          boxShadow: 'var(--shadow)',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: '2.2rem',
              fontWeight: 400, lineHeight: 1.2, marginBottom: '.75rem',
            }}>
              Let&apos;s build something{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>worth shipping.</em>
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Open to internship and new grad roles in software engineering, full-stack, or ML/QA. My inbox is always open.
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