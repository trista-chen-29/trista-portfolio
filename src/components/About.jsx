const facts = [
  {
    title: 'Rock climbing',
    text: "Parked on V1+. This semester's assignment is V2.",
    icon: ClimbIcon,
  },
  {
    title: 'Karaoke',
    text: 'Mandarin and English. ROSÉ is next.',
    icon: MicIcon,
  },
  {
    title: 'Mahjong',
    text: 'Five years. Losers do push-ups.',
    icon: TileIcon,
  },
  {
    title: 'Food',
    text: 'Scallion pancake, malatang, pho, tom yum, and a matcha somewhere in between.',
    icon: BowlIcon,
  },
];

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-title">About</h2>
      <div className="about-copy">
        <p>I&apos;m Taiwanese and based in San Jose.</p>
        <p>
          I study software engineering at SJSU — algorithms, architecture, assembly, operating systems, databases, and machine learning — and I graduate in May 2027.
        </p>
        <p>
          I&apos;m open to internships now, and to new-grad roles after May 2027, in firmware, robotics, validation, and software.
        </p>
      </div>
      <h3 className="off-label">Off the clock</h3>
      <ul className="off-strip">
        {facts.map((fact) => {
          const Icon = fact.icon;
          return (
            <li key={fact.title}>
              <Icon />
              <p>
                <strong>{fact.title}.</strong>
                {' '}
                {fact.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ClimbIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20 10 8l3 4 2-3 5 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="10" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="7" height="10" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="10" width="7" height="10" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 11h16c0 5-3.2 8-8 8s-8-3-8-8Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7c.6-1.4 2.4-1.4 3 0 .6 1.4 2.4 1.4 3 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
