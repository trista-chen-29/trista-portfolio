'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { roleEntries } from '@/data/experience';

const entries = roleEntries();
const recent = entries.filter((entry) => entry.era === 'recent');
const earlier = entries.filter((entry) => entry.era === 'earlier');

const view = { once: false, margin: '-18% 0px -18% 0px' };

export default function ExperienceTimeline() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">Experience</h2>
      <div className="wave">
        <svg className="wave-svg" viewBox="0 0 48 800" preserveAspectRatio="none" aria-hidden="true">
          <path d={wavePath()} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="wave-list">
          {recent.map((entry) => (
            <Role key={entry.id} entry={entry} />
          ))}
          <li className="wave-item">
            <motion.span
              className="pulse"
              aria-hidden="true"
              initial={{ scale: 0.7 }}
              whileInView={{ scale: 1 }}
              viewport={view}
            />
            <div>
              <button
                type="button"
                className="earlier-toggle"
                aria-expanded={open}
                aria-controls="earlier-roles"
                onClick={() => setOpen((value) => !value)}
              >
                <span>Earlier</span>
                <span className="mono-count">{earlier.length} roles before 2025</span>
              </button>
              {open && (
                <ol id="earlier-roles" className="earlier-list">
                  {earlier.map((entry) => (
                    <Role key={entry.id} entry={entry} nested />
                  ))}
                </ol>
              )}
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Role({ entry, nested = false }) {
  const logo = (
    <Image
      src={entry.logo}
      alt=""
      width={44}
      height={44}
      className="role-logo-img"
      unoptimized={entry.logo.endsWith('.svg')}
    />
  );

  return (
    <li className={`wave-item${nested ? ' is-nested' : ''}`}>
      {!nested && (
        <motion.span
          className={`pulse${entry.current ? ' is-current' : ''}`}
          aria-hidden="true"
          initial={{ scale: 0.65 }}
          whileInView={{ scale: 1 }}
          viewport={view}
        />
      )}
      <motion.article
        className="role-card"
        initial={{ opacity: 0.72, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="role-head">
          {entry.companyHref ? (
            <a className="role-logo" href={entry.companyHref} target="_blank" rel="noreferrer" aria-label={`${entry.company} website`}>
              {logo}
            </a>
          ) : (
            <span className="role-logo">{logo}</span>
          )}
          <div>
            <p className="role-org">
              {entry.companyHref ? (
                <a href={entry.companyHref} target="_blank" rel="noreferrer">{entry.company}</a>
              ) : entry.company}
            </p>
            <h3 className="role-title">{entry.title}</h3>
            <p className="role-meta">
              {entry.period}
              {' · '}
              {entry.location}
              {entry.kind ? ` · ${entry.kind}` : ''}
            </p>
          </div>
        </div>
        <ul className="role-bullets">
          {entry.bullets.map((bullet, index) => (
            <li key={`${entry.id}-${index}`} className={bullet.startsWith('TODO') ? 'todo' : undefined}>
              {bullet}
            </li>
          ))}
        </ul>
      </motion.article>
    </li>
  );
}

function wavePath() {
  let path = 'M 24 0';
  for (let y = 8; y <= 800; y += 8) {
    const x = 24 + Math.sin(y / 34) * 12;
    path += ` L ${x.toFixed(2)} ${y}`;
  }
  return path;
}
