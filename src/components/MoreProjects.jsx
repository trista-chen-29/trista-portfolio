'use client';

import { useMemo, useState } from 'react';
import { moreProjects, projectFilters } from '@/data/projects';

export default function MoreProjects() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const visible = useMemo(
    () => moreProjects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  );

  return (
    <section className="section more-section" id="more-projects" aria-labelledby="more-heading">
      <h2 id="more-heading" className="sr-only">More projects</h2>
      <button
        type="button"
        className="more-toggle"
        aria-expanded={open}
        aria-controls="more-project-list"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Hide projects' : 'More projects'}</span>
        <span className="mono-count">{moreProjects.length}</span>
      </button>
      {open && (
        <div id="more-project-list">
          <div className="proj-filters" role="group" aria-label="Filter more projects">
            {projectFilters.map((name) => (
              <button
                key={name}
                type="button"
                className={filter === name ? 'on' : ''}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="more-empty">Nothing in this filter.</p>
          ) : (
            <ul className="more-list">
              {visible.map((project) => (
                <li key={project.id}>
                  <div>
                    <p className="more-title">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer">{project.title}</a>
                      ) : project.title}
                      {project.status === 'wip' ? <span className="wip">In progress</span> : null}
                    </p>
                    <p className="more-line">{project.result}</p>
                  </div>
                  <p className="more-tags">{project.tags.join(' · ')}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
