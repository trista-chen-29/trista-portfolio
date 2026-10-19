'use client';

import { useEffect, useRef } from 'react';

export default function ScopeTrace() {
  const canvasRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let running = true;
    let visible = true;

    const draw = (time) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width < 2 || height < 2) return;
      context.clearRect(0, 0, width, height);
      const color = getComputedStyle(canvas).color;
      const mid = height * 0.58;
      const base = height * 0.16;
      const reduced = media.matches;
      const pointer = reduced ? null : pointerRef.current;
      const phase = reduced ? 0.45 : time * 0.00135;

      context.strokeStyle = color;
      context.globalAlpha = 0.22;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(0, mid);
      context.lineTo(width, mid);
      context.stroke();

      const strokeWave = (alpha, widthPx, amplitudeScale, phaseOffset, step) => {
        context.globalAlpha = alpha;
        context.lineWidth = widthPx;
        context.beginPath();
        for (let x = 0; x <= width; x += step) {
          let amplitude = base * amplitudeScale;
          let localPhase = phase + phaseOffset;
          if (pointer) {
            const dx = (x - pointer.x) / width;
            const influence = Math.exp(-dx * dx * 9);
            const vertical = Math.min(1, Math.abs(pointer.y - mid) / (height * 2.2));
            amplitude += base * 1.25 * influence * (1.2 - vertical);
            localPhase += (pointer.x / width) * 2;
          }
          const y = mid + Math.sin(x * 0.017 + localPhase) * amplitude;
          if (x === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      };

      strokeWave(0.28, 1, 0.42, 1.35, 3);
      strokeWave(0.9, 1.6, 1, 0, 2);
      context.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (media.matches) draw(0);
    };

    const loop = (time) => {
      if (!running) return;
      if (visible && !media.matches) draw(time);
      frame = window.requestAnimationFrame(loop);
    };

    const onPointer = (event) => {
      if (media.matches) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const onMotion = () => {
      window.cancelAnimationFrame(frame);
      if (media.matches) {
        pointerRef.current = null;
        draw(0);
        return;
      }
      frame = window.requestAnimationFrame(loop);
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && media.matches) draw(0);
    });
    const resizeObserver = new ResizeObserver(resize);

    intersection.observe(canvas);
    resizeObserver.observe(canvas);
    resize();
    window.addEventListener('pointermove', onPointer, { passive: true });
    media.addEventListener('change', onMotion);
    if (media.matches) draw(0);
    else frame = window.requestAnimationFrame(loop);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      intersection.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointer);
      media.removeEventListener('change', onMotion);
    };
  }, []);

  return (
    <div className="scope-wrap">
      <canvas ref={canvasRef} className="scope-trace" aria-hidden="true" />
    </div>
  );
}
