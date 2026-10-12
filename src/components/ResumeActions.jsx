'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { noteFocusFromUrl, suggestResume } from '@/lib/resumeFeed';

const files = {
  software: { href: '/Yi-Chi_Chen_Resume.pdf', label: 'Software resume' },
  embedded: { href: '/Yi-Chi_Trista_Chen_Resume.pdf', label: 'Embedded resume' },
};

export default function ResumeActions() {
  const [pick, setPick] = useState(null);

  useEffect(() => {
    noteFocusFromUrl();
    const apply = () => setPick(suggestResume());
    apply();
    window.addEventListener('resume-feed', apply);
    window.addEventListener('storage', apply);
    return () => {
      window.removeEventListener('resume-feed', apply);
      window.removeEventListener('storage', apply);
    };
  }, []);

  const hint = pick === 'embedded'
    ? 'You have been looking at hardware, so the embedded resume is highlighted.'
    : pick === 'software'
      ? 'You have been looking at software, so the software resume is highlighted.'
      : null;

  return (
    <>
      <div className="hero-actions">
        <Link className="btn-outline" href="/projects">Projects</Link>
        {['software', 'embedded'].map((key) => (
          <a
            key={key}
            className={pick === key ? 'btn-solid' : 'btn-outline'}
            href={files[key].href}
            target="_blank"
            rel="noreferrer"
          >
            {files[key].label}
          </a>
        ))}
        <a className="btn-outline" href="#contact">Contact</a>
      </div>
      {hint && <p className="resume-hint">{hint}</p>}
    </>
  );
}
