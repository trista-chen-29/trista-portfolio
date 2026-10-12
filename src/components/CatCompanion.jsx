'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function playMeow() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!playMeow.ctx) playMeow.ctx = new AudioCtx();
  const ctx = playMeow.ctx;
  if (ctx.state === 'suspended') void ctx.resume();

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const body = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const bodyGain = ctx.createGain();

  osc.type = 'triangle';
  body.type = 'sine';
  osc.frequency.setValueAtTime(720, now);
  osc.frequency.exponentialRampToValueAtTime(320, now + 0.15);
  osc.frequency.exponentialRampToValueAtTime(460, now + 0.36);
  body.frequency.setValueAtTime(360, now);
  body.frequency.exponentialRampToValueAtTime(170, now + 0.15);
  body.frequency.exponentialRampToValueAtTime(230, now + 0.36);

  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1400, now);
  filter.frequency.exponentialRampToValueAtTime(680, now + 0.32);
  filter.Q.value = 4.5;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.06, now + 0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.44);
  bodyGain.gain.value = 0.4;

  osc.connect(filter);
  body.connect(bodyGain);
  bodyGain.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  body.start(now);
  osc.stop(now + 0.46);
  body.stop(now + 0.46);
}

export default function CatCompanion() {
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState(null);
  const fieldRef = useRef(null);
  const catRef = useRef(null);
  const closeRef = useRef(null);
  const popRef = useRef(null);
  const openRef = useRef(false);
  const pausedRef = useRef(false);
  const panelId = useId();

  function place() {
    const rect = catRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const styles = getComputedStyle(document.documentElement);
    const navH = parseFloat(styles.getPropertyValue('--nav-h')) || 64;
    const tabH = parseFloat(styles.getPropertyValue('--tab-h')) || 0;
    const width = Math.min(280, window.innerWidth - 32);
    const popH = 176;
    let left = rect.left;
    if (left + width > window.innerWidth - 16) left = window.innerWidth - 16 - width;
    if (left < 16) left = 16;

    const minTop = navH + 8;
    const maxTop = window.innerHeight - tabH - 8 - popH;
    const title = document.querySelector('.page-title')?.getBoundingClientRect();
    const below = rect.bottom + 8;
    const above = rect.top - 8 - popH;
    const belowHitsTitle = title && below < title.bottom && below + popH > title.top;
    const belowFits = below >= minTop && below <= maxTop && !belowHitsTitle;
    const aboveFits = above >= minTop && above <= maxTop;
    const aboveTitle = title ? title.top - 8 - popH : minTop;
    let top = below;
    if (belowFits) top = below;
    else if (aboveFits) top = above;
    else if (aboveTitle >= minTop) top = aboveTitle;
    else top = Math.min(Math.max(below, minTop), Math.max(minTop, maxTop));
    return { top, left, width };
  }

  function dismiss(returnFocus) {
    openRef.current = false;
    setOpen(false);
    if (returnFocus) catRef.current?.focus();
  }

  function catchCat() {
    if (openRef.current) {
      dismiss(true);
      return;
    }
    openRef.current = true;
    try { playMeow(); } catch { /* the secret still opens if audio is unavailable */ }
    setBox(place());
    setOpen(true);
  }

  useEffect(() => {
    const field = fieldRef.current;
    const cat = catRef.current;
    if (!field || !cat) return undefined;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pos = { x: 8, y: 8, vx: 1.05, vy: 0.72 };
    let last = performance.now();
    let frame = 0;

    const tick = (now) => {
      const maxX = Math.max(0, field.clientWidth - cat.offsetWidth);
      const maxY = Math.max(0, field.clientHeight - cat.offsetHeight);
      const reduced = motion.matches;
      const hold = reduced || pausedRef.current || openRef.current;

      if (reduced) {
        pos.x = maxX * 0.55;
        pos.y = maxY * 0.45;
      } else if (!hold) {
        const step = Math.min(32, now - last) / 16.67;
        pos.x += pos.vx * step;
        pos.y += pos.vy * step;
        if (pos.x <= 0 || pos.x >= maxX) {
          pos.vx *= -1;
          pos.x = Math.max(0, Math.min(maxX, pos.x));
        }
        if (pos.y <= 0 || pos.y >= maxY) {
          pos.vy *= -1;
          pos.y = Math.max(0, Math.min(maxY, pos.y));
        }
        if (Math.random() < 0.012) {
          pos.vx += (Math.random() - 0.5) * 0.35;
          pos.vy += (Math.random() - 0.5) * 0.35;
          const speed = Math.hypot(pos.vx, pos.vy) || 1;
          const target = 0.95 + Math.random() * 0.35;
          pos.vx = (pos.vx / speed) * target;
          pos.vy = (pos.vy / speed) * target;
        }
      }

      last = now;
      cat.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const focusFrame = requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      dismiss(true);
    };
    const onPointer = (event) => {
      const target = event.target;
      if (catRef.current?.contains(target) || popRef.current?.contains(target)) return;
      dismiss(false);
    };
    const onMove = () => setBox(place());
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onMove);
    window.addEventListener('scroll', onMove, true);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onMove);
      window.removeEventListener('scroll', onMove, true);
    };
  }, [open]);

  return (
    <div className="cat-slot">
      <p className="cat-hint">Catch me</p>
      <div className="cat-field" ref={fieldRef}>
        <button
          ref={catRef}
          type="button"
          className="cat-button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label="Catch the cat"
          onFocus={() => { pausedRef.current = true; }}
          onBlur={() => { pausedRef.current = false; }}
          onClick={catchCat}
        >
          <CatArt />
        </button>
      </div>
      {open && box && createPortal(
        <div
          ref={popRef}
          id={panelId}
          role="region"
          aria-label="Little secret"
          className="cat-pop"
          style={{ top: box.top, left: box.left, width: box.width }}
        >
          <p className="cat-pop-kicker">Little secret</p>
          <p>February 29. A real birthday every four years.</p>
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
