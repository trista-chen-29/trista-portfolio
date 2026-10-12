'use client';

import { useEffect, useId, useRef, useState } from 'react';

const interests = [
  {
    name: 'Rock climbing',
    teaser: 'V1+ at the SRAC, with V2 as the goal.',
    blurb: 'The SJSU SRAC boulders currently have me parked on V1+. This semester’s assignment is V2, whether the wall agrees or not.',
    icon: ClimbIcon,
  },
  {
    name: 'Gym',
    teaser: 'Beginner miles on the machines I like.',
    blurb: 'Still collecting beginner miles. Leg press, stairmaster, and treadmill are the rotation I actually look forward to.',
    icon: GymIcon,
  },
  {
    name: 'Cocktails',
    teaser: 'Not candy-sweet. Tequila is the favorite.',
    blurb: 'I’ll try almost anything as long as it isn’t candy-sweet. Hard liquor is welcome. Tequila is the favorite.',
    icon: GlassIcon,
  },
  {
    name: 'Karaoke',
    teaser: 'Mandarin, English, and ROSÉ is next.',
    blurb: 'Mandarin, English, and a growing queue. ROSÉ is next on the list — ambitious, but that is the point of a microphone.',
    icon: MicIcon,
  },
  {
    name: 'Mahjong',
    teaser: 'Five years. The stakes are exercise.',
    blurb: 'Five years, on and off. No cash on the table — only push-ups and sit-ups, which somehow still sting.',
    icon: TileIcon,
  },
  {
    name: 'Exploring food',
    teaser: 'Scallion pancake, malatang, pho, matcha.',
    blurb: 'Always chasing the next bowl or pan: scallion pancake, malatang, pho, tom yum, and a matcha somewhere in between.',
    icon: BowlIcon,
  },
  {
    name: 'Cats',
    teaser: 'A quiet fondness.',
    blurb: 'I like cats. A quiet fondness, nothing more elaborate than that.',
    icon: CatIcon,
  },
];

export default function Interests() {
  return (
    <section className="block" aria-labelledby="interests-heading">
      <h2 id="interests-heading" className="section-label">Off the clock</h2>
      <div className="interest-grid">
        {interests.map((item) => (
          <InterestCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

function InterestCard({ item }) {
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const nameId = useId();
  const teaserId = useId();
  const panelId = useId();
  const panelRef = useRef(null);
  const Icon = item.icon;

  useEffect(() => {
    if (!open) return undefined;
    const frame = requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({ block: 'nearest' });
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  return (
    <article className={open ? 'interest-card open' : 'interest-card'}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        aria-labelledby={nameId}
        aria-describedby={teaserId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            event.preventDefault();
            setOpen(false);
          }
        }}
      >
        <span className="interest-icon" aria-hidden="true"><Icon /></span>
        <span className="interest-text">
          <span id={nameId} className="interest-name">{item.name}</span>
          <span id={teaserId} className="interest-teaser">{item.teaser}</span>
        </span>
        <span className="interest-mark" aria-hidden="true">
          {open ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={nameId}
        ref={panelRef}
        className={open ? 'interest-panel open' : 'interest-panel'}
        inert={!open}
        aria-hidden={!open}
      >
        <div className="interest-panel-inner">
          <p>{item.blurb}</p>
        </div>
      </div>
    </article>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClimbIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <path d="M5 26 13 12l5 6L27 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GymIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <path d="M7 16h18M5 13v6M9 11.5v9M23 11.5v9M27 13v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GlassIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <path d="M8 7h16L16 17v7M12 24h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <rect x="12" y="5" width="8" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 14a7 7 0 0 0 14 0M16 21v4M12 25h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TileIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <rect x="8" y="4" width="16" height="24" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12h8M12 16h8M12 20h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <path d="M6 14h20c0 6.2-4.2 11-10 11S6 20.2 6 14Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 10c1.2-2 2.2-2 3.2 0 1-2 2.2-2 3.4 0 1.1-2 2.3-2 3.4 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CatIcon() {
  return (
    <svg viewBox="0 0 32 32">
      <path d="M7 18 10 9l5 6h2l5-6 3 9v6H7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="13" cy="18" r="0.9" fill="currentColor" />
      <circle cx="19" cy="18" r="0.9" fill="currentColor" />
    </svg>
  );
}
