/* No 'use client' needed — no interactivity here */

/* ── Section Label ── */
export function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--mono)', fontSize: '.68rem', fontWeight: 500,
      letterSpacing: '.14em', textTransform: 'uppercase',
      color: 'var(--accent)', marginBottom: '1rem',
    }}>
      {children}
    </p>
  );
}

/* ── Chip with optional devicon ── */
export function Chip({ children, highlight, icon }) {
  return (
    <span className="chip" style={{
      fontFamily: 'var(--mono)', fontSize: '.7rem',
      padding: '.22rem .65rem',
      border: `1px solid ${highlight ? 'var(--accent-line)' : 'var(--border)'}`,
      color: highlight ? 'var(--accent)' : 'var(--text2)',
      borderRadius: '3px',
      background: highlight ? 'var(--accent-soft)' : 'var(--surface2)',
      cursor: 'default',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.35rem',
    }}>
      {icon && (
        <i className={`devicon-${icon}-plain`} style={{ fontSize: '.85rem', color: 'inherit' }} />
      )}
      {children}
    </span>
  );
}

/* ── Button Solid ── */
export function BtnSolid({ children, href, target }) {
  return (
    <a href={href} target={target} rel={target ? 'noreferrer' : undefined} className="btn-solid" style={{
      fontFamily: 'var(--mono)', fontSize: '.75rem', letterSpacing: '.08em',
      background: 'var(--text)', color: 'var(--bg)',
      padding: '.6rem 1.5rem', border: 'none', cursor: 'pointer',
      textDecoration: 'none', display: 'inline-block', borderRadius: '2px',
    }}>
      {children}
    </a>
  );
}

/* ── Button Outline ── */
export function BtnOutline({ children, href, target }) {
  return (
    <a href={href} target={target} rel={target ? 'noreferrer' : undefined} className="btn-outline" style={{
      fontFamily: 'var(--mono)', fontSize: '.75rem', letterSpacing: '.08em',
      background: 'transparent', color: 'var(--text)',
      padding: '.6rem 1.5rem', border: '1px solid var(--border2)',
      cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
      borderRadius: '2px',
    }}>
      {children}
    </a>
  );
}

/* ── Divider ── */
export function Divider() {
  return <div style={{ height: '1px', background: 'var(--border)', margin: '4rem 0' }} />;
}

/* ── Tag ── */
export function Tag({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: '.67rem',
      padding: '.18rem .5rem',
      border: '1px solid var(--border)',
      color: 'var(--text3)', borderRadius: '3px',
      background: 'var(--bg2)',
    }}>
      {children}
    </span>
  );
}

/* ── Status Badge ── */
export function StatusBadge({ status }) {
  const styles = {
    done: { bg: 'rgba(74,222,128,0.10)', color: '#4ade80', border: 'rgba(74,222,128,0.25)' },
    wip:  { bg: 'rgba(251,191,36,0.10)',  color: '#f59e0b', border: 'rgba(251,191,36,0.25)' },
  };
  const s = styles[status] || styles.done;
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: '.62rem', letterSpacing: '.08em',
      textTransform: 'uppercase', padding: '.18rem .55rem', borderRadius: '3px',
      flexShrink: 0, whiteSpace: 'nowrap',
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
    }}>
      {status === 'done' ? 'Shipped' : 'In Progress'}
    </span>
  );
}

/* ── Contact Link ── */
export function ContactLink({ icon, text, href }) {
  const inner = (
    <>
      <div style={{
        width: '28px', height: '28px', borderRadius: '6px',
        background: 'var(--accent-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '.8rem', flexShrink: 0, color: 'var(--accent)',
      }}>
        {icon}
      </div>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '.78rem' }}>{text}</span>
    </>
  );
  const sharedStyle = {
    display: 'flex', alignItems: 'center', gap: '.75rem',
    padding: '.7rem 0', color: 'var(--text2)', textDecoration: 'none',
    borderBottom: '1px solid var(--border)',
  };
  return href ? (
    <a href={href} className="clink" style={sharedStyle}>{inner}</a>
  ) : (
    <div className="clink" style={{ ...sharedStyle, cursor: 'default' }}>{inner}</div>
  );
}

/* ── Skill Row ── */
export function SkillRow({ label, items }) {
  return (
    <div className="skill-row">
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '.67rem', fontWeight: 500,
        letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)',
        flexShrink: 0,
      }}>
        {label}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
        {items.map(({ name, hi, icon }) => (
          <Chip key={name} highlight={hi} icon={icon}>{name}</Chip>
        ))}
      </div>
    </div>
  );
}