'use client';

import { motion } from 'framer-motion';

const typeLabel = {
  current: 'Now',
  internship: 'Intern',
  club: 'Club',
  volunteer: 'Volunteer',
};

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <motion.div
        className="timeline-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      {items.map((item, i) => {
        const current = item.type === 'current';
        const logo = <img src={item.logo} alt={`${item.company} logo`} className="tl-logo-img" />;

        return (
          <motion.article
            key={`${item.company}-${item.roles[0].period}`}
            className="tl-item"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28, delay: Math.min(i, 6) * 0.06 }}
          >
            <span className={`tl-dot${current ? ' current' : ''}`} />
            <div className="tl-card">
              <div className="tl-org">
                {item.companyHref ? (
                  <a
                    className="tl-logo"
                    href={item.companyHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.company} website`}
                  >
                    {logo}
                  </a>
                ) : (
                  <span className="tl-logo">{logo}</span>
                )}
                <div className="tl-org-copy">
                  <div className="tl-company">
                    {item.companyHref ? (
                      <a href={item.companyHref} target="_blank" rel="noreferrer">{item.company}</a>
                    ) : item.company}
                  </div>
                  <div className="tl-location">{item.location}</div>
                </div>
                <span className={`badge ${current ? 'badge-done' : 'badge-wip'}`}>
                  {typeLabel[item.type] || 'Role'}
                </span>
              </div>

              <div className="tl-roles">
                {item.roles.map((role) => (
                  <div key={`${role.title}-${role.period}`} className="tl-role-block">
                    <div className="tl-role">{role.title}</div>
                    <div className="tl-period">
                      {role.period}
                      {role.kind ? ` · ${role.kind}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
