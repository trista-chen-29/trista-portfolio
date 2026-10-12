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
    const bounds = () => ({
      maxX: Math.max(0, field.clientWidth - cat.offsetWidth),
      maxY: Math.max(0, field.clientHeight - cat.offsetHeight),
    });
    const first = bounds();
    const spot = {
      x: first.maxX * 0.72,
      y: first.maxY * 0.18,
      fromX: 0,
      fromY: 0,
      toX: 0,
      toY: 0,
      phase: 'rest',
      until: performance.now() + 2200,
      hopDur: 4200,
    };
    spot.fromX = spot.x;
    spot.fromY = spot.y;
    spot.toX = spot.x;
    spot.toY = spot.y;

    const nextLanding = () => {
      const { maxX, maxY } = bounds();
      const regions = [
        { x: maxX * 0.08, y: maxY * 0.1 },
        { x: maxX * 0.76, y: maxY * 0.14 },
        { x: maxX * 0.14, y: maxY * 0.7 },
        { x: maxX * 0.68, y: maxY * 0.66 },
        { x: maxX * 0.4, y: maxY * 0.38 },
      ];
      const ranked = regions
        .map((region) => ({
          region,
          distance: Math.hypot(region.x - spot.x, region.y - spot.y),
        }))
        .filter((item) => item.distance > 70)
        .sort((a, b) => a.distance - b.distance);
      if (!ranked.length) {
        spot.phase = 'rest';
        spot.until = performance.now() + 8000;
        return;
      }
      const nearby = ranked.slice(0, 3);
      const pool = nearby.length ? nearby : ranked;
      const choice = pool[Math.floor(Math.random() * pool.length)].region;
      const landing = {
        x: Math.max(0, Math.min(maxX, choice.x + (Math.random() - 0.5) * maxX * 0.08)),
        y: Math.max(0, Math.min(maxY, choice.y + (Math.random() - 0.5) * maxY * 0.06)),
      };
      const travel = Math.hypot(landing.x - spot.x, landing.y - spot.y);
      spot.fromX = spot.x;
      spot.fromY = spot.y;
      spot.toX = landing.x;
      spot.toY = landing.y;
      spot.hopDur = Math.max(4200, travel * 14);
      spot.until = performance.now();
      spot.phase = 'hop';
    };

    const paint = (x, y, lift, squash) => {
      const { maxX, maxY } = bounds();
      const drawnX = Math.max(0, Math.min(maxX, x));
      const drawnY = Math.max(0, Math.min(maxY, y - lift));
      cat.style.transform = `translate(${drawnX}px, ${drawnY}px) scaleY(${squash})`;
    };

    let frame = 0;
    let pausedAt = 0;
    const tick = (now) => {
      const { maxX, maxY } = bounds();
      const reduced = motion.matches;
      const hold = pausedRef.current || openRef.current;

      if (!hold && pausedAt) {
        spot.until += now - pausedAt;
        pausedAt = 0;
      }

      if (reduced) {
        spot.x = maxX * 0.78;
        spot.y = maxY * 0.12;
        paint(spot.x, spot.y, 0, 1);
      } else if (hold) {
        if (!pausedAt) pausedAt = now;
        paint(spot.x, spot.y, 0, 1);
      } else if (spot.phase === 'rest') {
        paint(spot.x, spot.y, 0, 1);
        if (now >= spot.until) nextLanding();
      } else {
        const t = Math.min(1, (now - spot.until) / spot.hopDur);
        const ease = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
        spot.x = spot.fromX + (spot.toX - spot.fromX) * ease;
        spot.y = spot.fromY + (spot.toY - spot.fromY) * ease;
        const distance = Math.hypot(spot.toX - spot.fromX, spot.toY - spot.fromY);
        const arc = Math.sin(Math.PI * t) * Math.min(10, 3 + distance * 0.012);
        paint(Math.max(0, Math.min(maxX, spot.x)), Math.max(0, Math.min(maxY, spot.y)), arc, 1);
        if (t >= 1) {
          spot.x = Math.max(0, Math.min(maxX, spot.toX));
          spot.y = Math.max(0, Math.min(maxY, spot.toY));
          spot.phase = 'rest';
          spot.until = now + 6000 + Math.random() * 4000;
        }
      }

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
    <>
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
    </>
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
