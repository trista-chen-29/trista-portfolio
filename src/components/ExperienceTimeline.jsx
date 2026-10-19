'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { roleEntries } from '@/data/experience';

const entries = roleEntries();
const recent = entries.filter((entry) => entry.era === 'recent');
const earlier = entries.filter((entry) => entry.era === 'earlier');
const openRoles = recent.slice(0, 3);
const folded = [...recent.slice(3), ...earlier];

export default function ExperienceTimeline() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll('#experience .wave-item');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      items.forEach((item) => item.classList.add('is-in'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-in');
      });
    }, { threshold: 0.35 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [open]);

  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">Experience</h2>
      <div className="wave">
        <svg className="wave-svg" viewBox="0 0 48 800" preserveAspectRatio="none" aria-hidden="true">
          <path d={wavePath()} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="wave-list">
          {openRoles.map((entry) => (
            <Role key={entry.id} entry={entry} />
          ))}
          <li className="wave-item">
            <span className="pulse" aria-hidden="true" />
            <div>
              <button
                type="button"
                className="earlier-toggle"
                aria-expanded={open}
                aria-controls="earlier-roles"
                onClick={() => setOpen((value) => !value)}
              >
                <span>Earlier</span>
                <span className="mono-count">{folded.length} roles</span>
              </button>
              {open && (
                <ol id="earlier-roles" className="earlier-list">
                  {folded.map((entry) => (
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

/** Placeholder bullets (TODO...) never render. Real bullets appear once written in src/data/experience.js. */
const isReal = (bullet) => typeof bullet === 'string' && bullet.trim() && !bullet.startsWith('TODO');

function Role({ entry, nested = false }) {
  const bullets = entry.bullets.filter(isReal).slice(0, 3);
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
        <span className={`pulse${entry.current ? ' is-current' : ''}`} aria-hidden="true" />
      )}
      <article className="role-card">
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
        {bullets.length > 0 && (
          <ul className="role-bullets">
            {bullets.map((bullet, index) => (
              <li key={`${entry.id}-${index}`}>{bullet}</li>
            ))}
          </ul>
        )}
      </article>
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
