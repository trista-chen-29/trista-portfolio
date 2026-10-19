'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const REST = 'here';
const LOOK = 'looking';

export default function LivePortrait() {
  const frameRef = useRef(null);
  const shiftRef = useRef(null);
  const scanRef = useRef(null);
  const labelRef = useRef(null);
  const look = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    const shift = shiftRef.current;
    const scan = scanRef.current;
    const label = labelRef.current;
    if (!frame || !shift || !scan || !label) return undefined;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = (fromKeys) => {
      if (media.matches && !fromKeys) {
        shift.style.transform = 'translate(0px, 0px)';
        return;
      }
      const x = look.current.x * -36;
      const y = look.current.y * -42;
      shift.style.transform = `translate(${x}px, ${y}px)`;
      if (!media.matches) scan.style.top = `${(look.current.y + 0.5) * 100}%`;
    };

    const setLooking = (on) => {
      frame.classList.toggle('is-looking', on && !media.matches);
      label.textContent = on ? LOOK : REST;
    };

    const onPointer = (event) => {
      if (media.matches) return;
      const rect = frame.getBoundingClientRect();
      look.current.x = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
      look.current.y = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
      setLooking(true);
      apply();
    };

    const rest = () => {
      look.current.x = 0;
      look.current.y = 0;
      setLooking(false);
      scan.style.top = '';
      apply();
    };

    const onKey = (event) => {
      const step = event.shiftKey ? 0.18 : 0.1;
      if (event.key === 'ArrowLeft') look.current.x = Math.max(-0.5, look.current.x - step);
      else if (event.key === 'ArrowRight') look.current.x = Math.min(0.5, look.current.x + step);
      else if (event.key === 'ArrowUp') look.current.y = Math.max(-0.5, look.current.y - step);
      else if (event.key === 'ArrowDown') look.current.y = Math.min(0.5, look.current.y + step);
      else if (event.key === 'Home' || event.key === 'Escape') {
        look.current.x = 0;
        look.current.y = 0;
      } else return;
      event.preventDefault();
      setLooking(!media.matches);
      apply(true);
    };

    frame.addEventListener('pointermove', onPointer);
    frame.addEventListener('pointerleave', rest);
    frame.addEventListener('blur', rest);
    frame.addEventListener('keydown', onKey);
    const onMotion = () => rest();
    media.addEventListener('change', onMotion);
    return () => {
      frame.removeEventListener('pointermove', onPointer);
      frame.removeEventListener('pointerleave', rest);
      frame.removeEventListener('blur', rest);
      frame.removeEventListener('keydown', onKey);
      media.removeEventListener('change', onMotion);
    };
  }, []);

  return (
    <div
      className="portrait-frame"
      ref={frameRef}
      tabIndex={0}
      role="group"
      aria-label="Portrait of Yi-Chi (Trista) Chen. Move over the photo, or use arrow keys, to look around it."
    >
      <div className="portrait-shift" ref={shiftRef}>
        <Image
          src="/photo.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 188px, 140px"
          style={{ objectFit: 'cover', objectPosition: 'center 62%' }}
        />
      </div>
      <span className="portrait-scan" ref={scanRef} aria-hidden="true" />
      <span className="portrait-vignette" aria-hidden="true" />
      <span className="portrait-corners" aria-hidden="true" />
      <span className="portrait-readout" aria-hidden="true">
        <span className="portrait-dot" />
        <span ref={labelRef}>{REST}</span>
      </span>
    </div>
  );
}
