import { Tag, StatusBadge } from './Ui';

export default function ProjectCard({ title, period, status, desc, tags, role, href, children }) {
  return (
    <article className="proj-card">
      <div className="proj-art">{children}</div>
      <div className="proj-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
          <h3 className="proj-title">{title}</h3>
          <StatusBadge status={status} />
        </div>
        <div className="tl-period">{period}</div>
        <p className="proj-desc">{desc}</p>
        <div className="chips" style={{ padding: 0 }}>
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <div className="ios-row" style={{ padding: '10px 0 0', borderBottom: 'none' }}>
          <span className="value" style={{ textAlign: 'left' }}>Role · {role}</span>
          {href && (
            <a className="value accent" href={href} target="_blank" rel="noreferrer">GitHub</a>
          )}
        </div>
      </div>
    </article>
  );
}
