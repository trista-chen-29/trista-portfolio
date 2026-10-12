'use client';

import { useEffect, useId, useRef, useState } from 'react';

export default function LittleSecret() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const closeRef = useRef(null);
  const wrapRef = useRef(null);
  const panelId = useId();

  function dismiss(returnFocus) {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return undefined;
    const frame = requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointer = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <div className="secret" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        className="secret-btn"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? dismiss(true) : setOpen(true))}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 22 13 12l8 5 6-10" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="6" cy="22" r="1.5" fill="currentColor" />
          <circle cx="13" cy="12" r="1.5" fill="currentColor" />
          <circle cx="21" cy="17" r="1.5" fill="currentColor" />
          <circle cx="27" cy="7" r="1.5" fill="currentColor" />
        </svg>
        Little secret
      </button>
      <div
        id={panelId}
        role="region"
        aria-label="Little secret"
        className={open ? 'secret-pop open' : 'secret-pop'}
        inert={!open}
        aria-hidden={!open}
      >
        <p>February 29. A real birthday every four years.</p>
        <button ref={closeRef} type="button" className="btn-outline" onClick={() => dismiss(true)}>
          Close
        </button>
      </div>
    </div>
  );
}
