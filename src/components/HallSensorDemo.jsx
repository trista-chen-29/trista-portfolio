'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const SENSOR_A = 0;
const SENSOR_B = 40;
const WINDOW = 14;

export default function HallSensorDemo() {
  const reduced = usePrefersReducedMotion();
  const wheelRef = useRef(null);
  const angleRef = useRef(128);
  const dragRef = useRef(null);
  const [angle, setAngle] = useState(128);
  const [power, setPower] = useState(true);
  const [seeking, setSeeking] = useState(false);
  const [homed, setHomed] = useState(false);
  const [seekId, setSeekId] = useState(0);

  useEffect(() => {
    if (!seeking || reduced) return undefined;
    let frame = 0;
    let last = performance.now();
    let seenB = false;
    let current = angleRef.current;

    const step = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      current = norm(current + 145 * dt);
      if (sensorBit(current, SENSOR_B)) seenB = true;
      const arrived = seenB && sensorBit(current, SENSOR_A) && angularDistance(current, SENSOR_A) < 3.5;
      if (arrived) {
        angleRef.current = SENSOR_A;
        setAngle(SENSOR_A);
        setSeeking(false);
        setHomed(true);
        return;
      }
      angleRef.current = current;
      setAngle(current);
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [seeking, seekId, reduced]);

  const publish = (next, { known } = {}) => {
    const value = norm(next);
    angleRef.current = value;
    setAngle(value);
    if (known && power) setHomed(angularDistance(value, SENSOR_A) < 3.5);
  };

  const cutPower = () => {
    setPower(false);
    setSeeking(false);
    setHomed(false);
  };

  const powerOn = () => {
    setPower(true);
    if (reduced) {
      publish(SENSOR_A);
      setSeeking(false);
      setHomed(true);
      return;
    }
    setHomed(false);
    setSeeking(true);
    setSeekId((value) => value + 1);
  };

  const onPointerDown = (event) => {
    const wheel = wheelRef.current;
    if (!wheel) return;
    wheel.setPointerCapture(event.pointerId);
    dragRef.current = pointerAngle(event, wheel);
    setSeeking(false);
  };

  const onPointerMove = (event) => {
    if (dragRef.current == null) return;
    const wheel = wheelRef.current;
    if (!wheel) return;
    const nextPointer = pointerAngle(event, wheel);
    const delta = shortestDelta(dragRef.current, nextPointer);
    dragRef.current = nextPointer;
    publish(angleRef.current + delta, { known: true });
  };

  const endDrag = () => {
    dragRef.current = null;
  };

  const onKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    setSeeking(false);
    const step = event.shiftKey ? 15 : 5;
    const delta = event.key === 'ArrowRight' ? step : -step;
    publish(angleRef.current + delta, { known: true });
  };

  const status = !power ? 'OFF' : seeking ? 'SEEKING' : homed ? 'HOMED' : 'TRACKING';
  const bitA = power ? sensorBit(angle, SENSOR_A) : null;
  const bitB = power ? sensorBit(angle, SENSOR_B) : null;

  return (
    <section className="section" id="demo" aria-labelledby="demo-heading">
      <h2 id="demo-heading" className="section-title">Hall-sensor homing</h2>
      <p className="sr-only">
        A wheel with one magnet and two fixed Hall sensors. Sensor A is zero. Drag the wheel, or focus it and use the arrow keys.
      </p>
      <div className="demo-grid">
        <div className="wheel-stage">
          <div
            ref={wheelRef}
            className="wheel"
            role="slider"
            tabIndex={0}
            aria-label="Wheel angle"
            aria-valuemin={0}
            aria-valuemax={359}
            aria-valuenow={power ? Math.round(angle) : 0}
            aria-valuetext={power ? `${angle.toFixed(1)} degrees` : 'Position unknown'}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <svg viewBox="0 0 280 280" aria-hidden="true">
              <circle cx="140" cy="140" r="112" fill="none" stroke="currentColor" strokeOpacity="0.2" />
              <circle cx="140" cy="140" r="96" fill="none" stroke="currentColor" strokeOpacity="0.14" />
              <g transform={`rotate(${angle} 140 140)`}>
                <circle cx="140" cy="140" r="78" fill="var(--surface)" stroke="currentColor" />
                <path d="M140 74v66" stroke="currentColor" strokeOpacity="0.35" />
                <path d="M86 164c18 16 50 16 68 0" fill="none" stroke="currentColor" strokeOpacity="0.25" />
                <circle cx="140" cy="74" r="8" fill="var(--trace)" />
              </g>
              <SensorMark deg={SENSOR_A} label="A" hot={bitA === 1} />
              <SensorMark deg={SENSOR_B} label="B" hot={bitB === 1} />
              <circle cx="140" cy="140" r="4" fill="currentColor" />
            </svg>
          </div>
          <div className="demo-actions">
            <button type="button" className="btn-outline" onClick={cutPower} disabled={!power}>
              Cut power
            </button>
            <button type="button" className="btn-solid" onClick={powerOn} disabled={seeking}>
              Power on
            </button>
          </div>
          <p className="demo-help">
            {reduced
              ? 'Reduced motion is on, so Power on jumps the wheel to zero.'
              : 'Drag the wheel, or focus it and use the arrow keys. Shift moves faster.'}
          </p>
        </div>
        <dl className="readout">
          <div>
            <dt>STATE</dt>
            <dd>{status}</dd>
          </div>
          <div>
            <dt>ANGLE</dt>
            <dd>{power ? `${angle.toFixed(1)}°` : 'unknown'}</dd>
          </div>
          <div>
            <dt>HALL A</dt>
            <dd>{bitA == null ? '–' : bitA}</dd>
          </div>
          <div>
            <dt>HALL B</dt>
            <dd>{bitB == null ? '–' : bitB}</dd>
          </div>
        </dl>
      </div>
      <p className="sr-only" aria-live="polite">{status}</p>
      <p className="demo-caption">
        On the Alef internship, two Hall sensors on an ESP32 find wheel zero again after power is cut.
        {' '}
        <a className="text-link" href="#esp32-wheel-calibration">Project note</a>
      </p>
    </section>
  );
}

function SensorMark({ deg, label, hot }) {
  const radius = 100;
  const radians = (deg * Math.PI) / 180;
  const x = 140 + radius * Math.sin(radians);
  const y = 140 - radius * Math.cos(radians);
  return (
    <g>
      <circle cx={x} cy={y} r="7" fill={hot ? 'var(--trace)' : 'var(--surface)'} stroke="currentColor" />
      <text x={x} y={y - 14} textAnchor="middle" fontSize="12" fill="currentColor" fontFamily="ui-monospace, monospace">
        {label}
      </text>
    </g>
  );
}

function norm(value) {
  return ((value % 360) + 360) % 360;
}

function angularDistance(a, b) {
  const delta = Math.abs(norm(a) - norm(b));
  return Math.min(delta, 360 - delta);
}

function shortestDelta(from, to) {
  const delta = norm(to) - norm(from);
  if (delta > 180) return delta - 360;
  if (delta < -180) return delta + 360;
  return delta;
}

function sensorBit(angle, sensor) {
  return angularDistance(angle, sensor) <= WINDOW ? 1 : 0;
}

function pointerAngle(event, element) {
  const rect = element.getBoundingClientRect();
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);
  return norm((Math.atan2(dx, -dy) * 180) / Math.PI);
}
