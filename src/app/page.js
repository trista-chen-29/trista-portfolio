import Image from 'next/image';
import Interests from '@/components/Interests';
import ResumeActions from '@/components/ResumeActions';
import Skills from '@/components/Skills';

const contacts = [
  { label: 'Email', value: 'yichichen229@gmail.com', href: 'mailto:yichichen229@gmail.com' },
  { label: 'LinkedIn', value: 'yichichen229', href: 'https://linkedin.com/in/yichichen229' },
  { label: 'GitHub', value: 'trista-chen-29', href: 'https://github.com/trista-chen-29' },
  { label: 'Phone', value: '(408) 549-6898', href: 'tel:4085496898' },
  { label: 'Location', value: 'San Jose, CA', href: null },
];

function Crescent() {
  return (
    <svg className="kicker-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M14.5 3.2a8.2 8.2 0 1 0 6.2 13.6 6.4 6.4 0 1 1-6.2-13.6z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="page-kicker">
            <Crescent />
            Firmware · Robotics · Validation · Software
          </p>
          <div className="hero-profile">
            <div className="hero-photo">
              <Image
                src="/photo.jpg"
                alt="Portrait of Yi-Chi (Trista) Chen"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
                priority
                sizes="(min-width: 768px) 220px, 210px"
              />
            </div>
            <div className="hero-copy">
              <h1 className="page-title">Yi-Chi (Trista) Chen</h1>
              <p className="page-sub">SJSU Software Engineering</p>
              <ResumeActions />
            </div>
          </div>
          <div className="hero-bio">
            <p>
              I&apos;m Taiwanese and based in San Jose. I study software engineering at SJSU and graduate in May 2027.
            </p>
            <p>
              I&apos;m open to internships before graduation, and to new-grad roles afterward, in firmware, robotics, validation, and software.
            </p>
          </div>
          <p className="hero-now">
            Right now I do EMC and RF validation at{' '}
            <a href="https://www.element.com/" target="_blank" rel="noreferrer">Element Materials Technology</a>
            {' '}and serve as an officer at the{' '}
            <a href="https://sce.sjsu.edu/" target="_blank" rel="noreferrer">SJSU Software & Computer Engineering Society</a>.
          </p>
        </div>

        <aside className="snapshot" aria-label="At a glance">
          <h2 className="section-label">At a glance</h2>
          <div className="quiet-card">
            <div className="snap-row"><span>GPA</span><span>3.7</span></div>
            <div className="snap-row"><span>Grad</span><span>May 2027</span></div>
            <div className="snap-row stack">
              <span>Seeking</span>
              <span>Internships now · New grad after May 2027</span>
            </div>
          </div>
        </aside>
      </section>

      <Skills />

      <section className="block" aria-labelledby="school-heading">
        <h2 id="school-heading" className="section-label">School</h2>
        <div className="quiet-card">
          <div className="snap-row stack">
            <span>B.S. Software Engineering · SJSU</span>
            <span>May 2027 · algorithms, architecture, assembly, OS, databases, ML</span>
          </div>
        </div>
      </section>

      <Interests />

      <section className="block" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-label">Contact</h2>
        <div className="quiet-card">
          {contacts.map((item) => (
            item.href ? (
              <a
                key={item.label}
                className="snap-row"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <span className="linkish">{item.value}</span>
              </a>
            ) : (
              <div key={item.label} className="snap-row">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
}
