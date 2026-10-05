'use client';

import { useEffect, useState } from 'react';
import { suggestResume } from '@/lib/resumeFeed';

const copy = {
  embedded: {
    title: 'Embedded resume',
    body: 'Hardware is what you have been opening. This version leads with firmware, sensors, and the Nuvoton work.',
    href: '/Yi-Chi_Trista_Chen_Resume.pdf',
  },
  software: {
    title: 'Software resume',
    body: 'Software is what you have been opening. This version leads with backend, data, and product work.',
    href: '/Yi-Chi_Chen_Resume.pdf',
  },
};

export default function ResumeToast() {
  const [pick, setPick] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => {
      const next = suggestResume();
      setPick(next);
      if (next && sessionStorage.getItem('trista-resume-pop') !== next) setOpen(true);
    };
    sync();
    window.addEventListener('resume-feed', sync);
    return () => window.removeEventListener('resume-feed', sync);
  }, []);

  if (!open || !pick) return null;
  const item = copy[pick];

  return (
    <aside className="resume-pop" role="status">
      <p className="resume-pop-kicker">A closer resume</p>
      <p className="resume-pop-title">{item.title}</p>
      <p>{item.body}</p>
      <div className="resume-pop-actions">
        <a className="btn-solid" href={item.href} target="_blank" rel="noreferrer">Open it</a>
        <button
          type="button"
          className="btn-outline"
          onClick={() => {
            sessionStorage.setItem('trista-resume-pop', pick);
            setOpen(false);
          }}
        >
          Not now
        </button>
      </div>
    </aside>
  );
}
