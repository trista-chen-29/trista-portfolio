'use client';

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

  const order = pick === 'embedded' ? ['embedded', 'software'] : ['software', 'embedded'];
  const hint = pick === 'embedded'
    ? 'You have been looking at hardware, so the embedded resume is up front.'
    : pick === 'software'
      ? 'You have been looking at software, so the software resume is up front.'
      : null;

  return (
    <>
      <div className="hero-actions" style={{ marginTop: 14 }}>
        <a className="btn-solid" href="mailto:yichichen229@gmail.com">Say hi</a>
        {order.map((key) => (
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
        <a className="btn-outline" href="https://github.com/trista-chen-29" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn-outline" href="https://linkedin.com/in/yichichen229" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      {hint && <p className="resume-hint">{hint}</p>}
    </>
  );
}
