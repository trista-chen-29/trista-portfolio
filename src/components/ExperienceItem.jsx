'use client';

import { useState } from 'react';

export default function ExperienceItem({ role, company, period, type, bullets, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  const typeStyle = {
    current: { bg: 'rgba(74,222,128,0.10)', color: '#4ade80', border: 'rgba(74,222,128,0.28)', label: 'Current' },
    wip: { bg: 'rgba(251,191,36,0.08)', color: '#f59e0b', border: 'rgba(251,191,36,0.35)', label: 'In Progress' },
    volunteer: { bg: 'var(--accent-soft)', color: 'var(--accent)', border: 'var(--accent-line)', label: 'Volunteer' },
    club: { bg: 'var(--accent-soft)', color: 'var(--accent)', border: 'var(--accent-line)', label: 'Club' },
    internship: { bg: 'var(--accent-soft)', color: 'var(--accent)', border: 'var(--accent-line)', label: 'Internship' },
  }[type] || { bg: 'var(--accent-soft)', color: 'var(--accent)', border: 'var(--accent-line)', label: 'Role' };

  return (
    <div className="exp-card" style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '.75rem',
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        className="exp-head"
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>{role}</span>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.1em',
              textTransform: 'uppercase', padding: '.18rem .55rem', borderRadius: '3px',
              background: typeStyle.bg, color: typeStyle.color,
              border: `1px solid ${typeStyle.border}`,
            }}>
              {typeStyle.label}
            </span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '.78rem', color: 'var(--text2)', marginTop: '.3rem' }}>
            {company}
          </div>
        </div>
        <div className="exp-meta" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '.75rem', color: 'var(--accent)' }}>{period}</span>
          <div style={{
            width: '24px', height: '24px', borderRadius: '50%',
            border: open ? '1px solid var(--accent-line)' : '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '.65rem',
            color: open ? 'var(--accent)' : 'var(--text3)',
            background: open ? 'var(--accent-soft)' : 'transparent',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s, border-color 0.2s, color 0.2s, background 0.2s',
          }}>
            ▾
          </div>
        </div>
      </div>

      {open && (
        <div className="exp-body" style={{ borderTop: '1px solid var(--border)' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', paddingTop: '1.2rem' }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ fontSize: '.9rem', color: 'var(--text2)', display: 'flex', gap: '.75rem', lineHeight: 1.65 }}>
                <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent)', flexShrink: 0 }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}