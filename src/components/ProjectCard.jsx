import { Tag, StatusBadge } from './Ui';

export default function ProjectCard({ title, period, status, desc, tags, role, href, children }) {
  return (
    <div className="proj-card" style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      boxShadow: 'var(--shadow)',
    }}>
      <div style={{
        aspectRatio: '16/9',
        background: 'var(--bg2)',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        {children}
      </div>
      <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.5rem' }}>
          <span style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.3 }}>{title}</span>
          <StatusBadge status={status} />
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--accent)' }}>{period}</div>
        <p style={{ fontSize: '.87rem', color: 'var(--text2)', lineHeight: 1.7, flex: 1 }}>{desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--text3)',
          paddingTop: '.6rem', borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', gap: '.75rem', flexWrap: 'wrap',
        }}>
          <span>Role: <span style={{ color: 'var(--accent)' }}>{role}</span></span>
          {href && (
            <a href={href} target="_blank" rel="noreferrer" className="clink" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}