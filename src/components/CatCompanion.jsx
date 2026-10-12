'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const FACTS = [
  'February 29. A real birthday every four years.',
  'Climbing at the SJSU SRAC is parked on V1+, with V2 as the goal.',
  'Karaoke runs in Mandarin and English. ROSÉ is next.',
  'Mahjong is for fun. The stakes are push-ups and sit-ups.',
  'Cocktails should not be candy-sweet. Tequila is the favorite.',
];

export default function CatCompanion() {
  const [open, setOpen] = useState(false);
  const [fact, setFact] = useState(0);
  const [box, setBox] = useState(null);
  const catRef = useRef(null);
  const closeRef = useRef(null);
  const popRef = useRef(null);
  const panelId = useId();

  function place() {
    const rect = catRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const width = Math.min(280, window.innerWidth - 32);
    let left = rect.left;
    if (left + width > window.innerWidth - 16) left = window.innerWidth - 16 - width;
    if (left < 16) left = 16;
    let top = rect.bottom + 8;
    if (top + 148 > window.innerHeight - 12) top = Math.max(12, rect.top - 156);
    return { top, left, width };
  }

  function dismiss(returnFocus) {
    setOpen(false);
    setFact((index) => (index + 1) % FACTS.length);
    if (returnFocus) catRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return undefined;
    const frame = requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
      setFact((index) => (index + 1) % FACTS.length);
      catRef.current?.focus();
    };
    const onPointer = (event) => {
      const target = event.target;
      if (catRef.current?.contains(target) || popRef.current?.contains(target)) return;
      setOpen(false);
      setFact((index) => (index + 1) % FACTS.length);
    };
    const onMove = () => setBox(place());
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onMove);
    window.addEventListener('scroll', onMove, true);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onMove);
      window.removeEventListener('scroll', onMove, true);
    };
  }, [open]);

  return (
    <div className="cat-slot">
      <button
        ref={catRef}
        type="button"
        className="cat-button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Short fact"
        onClick={() => (open ? dismiss(true) : (setBox(place()), setOpen(true)))}
      >
        <CatArt />
      </button>
      {open && box && createPortal(
        <div
          ref={popRef}
          id={panelId}
          role="region"
          aria-label="A short fact"
          className="cat-pop"
          style={{ top: box.top, left: box.left, width: box.width }}
        >
          <p>{FACTS[fact]}</p>
          <button ref={closeRef} type="button" className="btn-outline" onClick={() => dismiss(true)}>
            Close
          </button>
        </div>,
        document.body,
      )}
    </div>
  );
}

function CatArt() {
  return (
    <svg className="cat-svg" viewBox="0 0 96 96" aria-hidden="true">
      <g className="cat-tail">
        <path
          d="M62 72c14 2 24-8 20-22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </g>
      <ellipse cx="44" cy="70" rx="20" ry="13" fill="currentColor" />
      <circle cx="46" cy="46" r="16" fill="currentColor" />
      <path d="M34 38 35.5 22l9 13z" fill="currentColor" />
      <path d="M58 38 56.5 22l-9 13z" fill="currentColor" />
      <path d="M36.5 35 37.2 26l5.2 7.2z" fill="var(--surface)" opacity="0.55" />
      <path d="M55.5 35 54.8 26l-5.2 7.2z" fill="var(--surface)" opacity="0.55" />
      <ellipse cx="40" cy="46" rx="2.1" ry="2.7" fill="var(--bg)" />
      <ellipse cx="52" cy="46" rx="2.1" ry="2.7" fill="var(--bg)" />
      <rect className="cat-lid" x="36.4" y="42.2" width="7.2" height="7.2" rx="2" fill="currentColor" />
      <rect className="cat-lid" x="48.4" y="42.2" width="7.2" height="7.2" rx="2" fill="currentColor" />
      <path d="M44.2 52.5h4.2" stroke="var(--bg)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
