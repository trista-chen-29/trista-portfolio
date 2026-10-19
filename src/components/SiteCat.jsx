'use client';

import { useEffect, useRef, useState } from 'react';

const LINES = [
  'hi. i live on this page.',
  'you can pet me.',
  'that was a good one.',
  'i came over to say hello.',
  'february 29. a real birthday every four years.',
  'i will be here when you come back.',
];

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
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.04, now + 0.18);
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

export default function SiteCat({ petOnMount = false }) {
  const fieldRef = useRef(null);
  const actorRef = useRef(null);
  const catRef = useRef(null);
  const spotRef = useRef(null);
  const wantsPet = useRef(petOnMount);
  const [line, setLine] = useState('');

  useEffect(() => {
    const field = fieldRef.current;
    const actor = actorRef.current;
    const cat = catRef.current;
    if (!field || !actor || !cat) return undefined;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const bounds = () => ({
      maxX: Math.max(0, field.clientWidth - cat.offsetWidth),
      maxY: Math.max(0, field.clientHeight - cat.offsetHeight),
    });
    const first = bounds();
    const spot = {
      x: first.maxX * 0.78,
      y: first.maxY * 0.62,
      fromX: 0,
      fromY: 0,
      toX: 0,
      toY: 0,
      mode: 'rest',
      until: performance.now() + 1600,
      hopDur: 4200,
      face: -1,
      pets: 0,
      lineUntil: 0,
      greeted: false,
      hover: false,
    };
    spot.fromX = spot.x;
    spot.fromY = spot.y;
    spot.toX = spot.x;
    spot.toY = spot.y;
    spotRef.current = spot;

    const pointer = { x: 0, y: 0, t: 0, speed: 0, seen: false };
    let lineText = '';

    const say = (text, ms) => {
      spot.lineUntil = performance.now() + ms;
      if (lineText === text) return;
      lineText = text;
      setLine(text);
    };

    const paint = (x, y, lift) => {
      const { maxX, maxY } = bounds();
      spot.x = Math.max(0, Math.min(maxX, x));
      spot.y = Math.max(0, Math.min(maxY, y));
      actor.style.transform = `translate(${spot.x}px, ${spot.y - lift}px)`;
      actor.classList.toggle('is-left', spot.face < 0);
      actor.classList.toggle('is-pet', spot.mode === 'pet');
      actor.classList.toggle('is-curious', spot.mode === 'approach');
    };

    const startHop = (x, y) => {
      const { maxX, maxY } = bounds();
      const landing = {
        x: Math.max(0, Math.min(maxX, x)),
        y: Math.max(0, Math.min(maxY, y)),
      };
      const travel = Math.hypot(landing.x - spot.x, landing.y - spot.y);
      if (travel < 8) return;
      spot.fromX = spot.x;
      spot.fromY = spot.y;
      spot.toX = landing.x;
      spot.toY = landing.y;
      spot.hopDur = Math.max(700, Math.min(4200, travel * 8));
      spot.until = performance.now();
      spot.mode = 'hop';
      spot.face = landing.x < spot.x ? -1 : 1;
    };

    const nextLanding = () => {
      const { maxX, maxY } = bounds();
      const regions = [
        { x: maxX * 0.08, y: maxY * 0.16 },
        { x: maxX * 0.78, y: maxY * 0.2 },
        { x: maxX * 0.12, y: maxY * 0.72 },
        { x: maxX * 0.7, y: maxY * 0.68 },
        { x: maxX * 0.42, y: maxY * 0.4 },
      ];
      const ranked = regions
        .map((region) => ({
          region,
          distance: Math.hypot(region.x - spot.x, region.y - spot.y),
        }))
        .filter((item) => item.distance > 80)
        .sort((a, b) => a.distance - b.distance);
      const pool = ranked.slice(0, 3);
      if (!pool.length) {
        spot.mode = 'rest';
        spot.until = performance.now() + 5000;
        return;
      }
      const choice = pool[Math.floor(Math.random() * pool.length)].region;
      startHop(
        choice.x + (Math.random() - 0.5) * maxX * 0.08,
        choice.y + (Math.random() - 0.5) * maxY * 0.06,
      );
    };

    const pet = () => {
      spot.mode = 'pet';
      spot.petUntil = performance.now() + 1700;
      say(LINES[spot.pets % LINES.length], 2600);
      spot.pets += 1;
      try { playMeow(); } catch { /* petting still counts if audio is blocked */ }
      paint(spot.x, spot.y, 0);
    };
    spot.pet = pet;

    const onPet = () => {
      wantsPet.current = true;
      cat.focus();
    };
    const onMove = (event) => {
      const now = performance.now();
      if (pointer.seen) {
        const dt = Math.max(16, now - pointer.t);
        pointer.speed = Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) / dt;
      }
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.t = now;
      pointer.seen = true;
    };
    const onEnter = () => { spot.hover = true; };
    const onLeave = () => { spot.hover = false; };

    window.addEventListener('cat:pet', onPet);
    window.addEventListener('pointermove', onMove, { passive: true });
    cat.addEventListener('pointerenter', onEnter);
    cat.addEventListener('pointerleave', onLeave);

    let frame = 0;
    let running = true;
    const tick = (now) => {
      if (!running) return;
      const reduced = motion.matches;
      const { maxX, maxY } = bounds();
      const rect = field.getBoundingClientRect();
      const px = pointer.x - rect.left - cat.offsetWidth / 2;
      const py = pointer.y - rect.top - cat.offsetHeight / 2;
      const dist = Math.hypot(px - spot.x, py - spot.y);
      const pointerFresh = pointer.seen && now - pointer.t < 280;

      if (spot.lineUntil && now > spot.lineUntil && lineText) {
        lineText = '';
        setLine('');
      }

      if (wantsPet.current) {
        wantsPet.current = false;
        pet();
      }

      if (reduced) {
        paint(maxX * 0.78, maxY * 0.72, 0);
      } else if (spot.mode === 'pet') {
        paint(spot.x, spot.y, 0);
        if (now >= spot.petUntil) {
          spot.mode = 'rest';
          spot.until = now + 900;
        }
      } else if (spot.hover) {
        paint(spot.x, spot.y, 0);
      } else if (pointerFresh && pointer.speed > 0.9 && dist < 120) {
        startHop(spot.x + (spot.x - px) * 1.6, spot.y + (spot.y - py) * 0.8);
        spot.greeted = false;
      } else if (pointerFresh && pointer.speed < 0.22 && dist < 280 && dist > 72) {
        const dx = px - spot.x;
        const dy = py - spot.y;
        const step = Math.min(2.4, dist - 70);
        spot.x += (dx / dist) * step;
        spot.y += (dy / dist) * step;
        spot.mode = 'approach';
        spot.face = dx < 0 ? -1 : 1;
        paint(spot.x, spot.y, 0);
        if (!spot.greeted) {
          spot.greeted = true;
          say('hi. i live on this page.', 2400);
        }
      } else if (spot.mode === 'hop') {
        const t = Math.min(1, (now - spot.until) / spot.hopDur);
        const ease = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
        const x = spot.fromX + (spot.toX - spot.fromX) * ease;
        const y = spot.fromY + (spot.toY - spot.fromY) * ease;
        const travel = Math.hypot(spot.toX - spot.fromX, spot.toY - spot.fromY);
        const arc = Math.sin(Math.PI * t) * Math.min(12, 4 + travel * 0.02);
        paint(x, y, arc);
        if (t >= 1) {
          spot.mode = 'rest';
          spot.until = now + 5000 + Math.random() * 3000;
        }
      } else {
        paint(spot.x, spot.y, 0);
        if (dist > 340) spot.greeted = false;
        if (now >= spot.until) nextLanding();
      }

      frame = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('cat:pet', onPet);
      window.removeEventListener('pointermove', onMove);
      cat.removeEventListener('pointerenter', onEnter);
      cat.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  function onKeyDown(event) {
    const spot = spotRef.current;
    const field = fieldRef.current;
    const cat = catRef.current;
    if (!spot || !field || !cat) return;
    const step = event.shiftKey ? 56 : 28;
    const maxX = Math.max(0, field.clientWidth - cat.offsetWidth);
    const maxY = Math.max(0, field.clientHeight - cat.offsetHeight);
    if (event.key === 'ArrowLeft') spot.x = Math.max(0, spot.x - step);
    else if (event.key === 'ArrowRight') spot.x = Math.min(maxX, spot.x + step);
    else if (event.key === 'ArrowUp') spot.y = Math.max(0, spot.y - step);
    else if (event.key === 'ArrowDown') spot.y = Math.min(maxY, spot.y + step);
    else return;
    event.preventDefault();
    spot.mode = 'rest';
    spot.until = performance.now() + 2500;
    spot.face = event.key === 'ArrowLeft' ? -1 : spot.face;
    if (event.key === 'ArrowRight') spot.face = 1;
  }

  return (
    <div className="cat-field" ref={fieldRef}>
      <p className="sr-only">
        A cat lives on this page. It walks toward a still pointer and hops away from a fast one.
        Tab to the cat and press Enter to pet it, or use the arrow keys to move it.
      </p>
      <div className="cat-actor" ref={actorRef}>
        <p className="cat-line" role="status">{line}</p>
        <button
          ref={catRef}
          type="button"
          className="cat-button"
          aria-label="Pet the cat"
          onClick={() => spotRef.current?.pet?.()}
          onKeyDown={onKeyDown}
        >
          <CatArt />
        </button>
      </div>
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
