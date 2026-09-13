export function Chip({ children, icon }) {
  return (
    <span className="chip">
      {icon && <i className={`devicon-${icon}-plain`} />}
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return <span className="chip">{children}</span>;
}

export function StatusBadge({ status }) {
  return (
    <span className={`badge ${status === 'wip' ? 'badge-wip' : 'badge-done'}`}>
      {status === 'done' ? 'Shipped' : 'In Progress'}
    </span>
  );
}
