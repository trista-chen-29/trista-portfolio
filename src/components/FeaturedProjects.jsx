'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { featuredProjects } from '@/data/projects';

function highlightSkill(name) {
  window.dispatchEvent(new CustomEvent('skill:highlight', { detail: name }));
}

export default function FeaturedProjects() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const open = (id) => {
      if (featuredProjects.some((project) => project.id === id)) setOpenId(id);
    };
    const fromHash = () => open(window.location.hash.replace(/^#/, ''));
    const onOpen = (event) => open(event.detail);
    const frame = window.requestAnimationFrame(fromHash);
    window.addEventListener('hashchange', fromHash);
    window.addEventListener('case:open', onOpen);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', fromHash);
      window.removeEventListener('case:open', onOpen);
    };
  }, []);

  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <h2 id="work-heading" className="section-title">Work</h2>
      <div className="case-list">
        {featuredProjects.map((project) => {
          const shot = project.shots[0];
          const open = openId === project.id;
          const factsId = `${project.id}-facts`;
          const hasFacts = Boolean(project.problem || project.role || project.outcome || project.href);
          return (
            <article key={project.id} id={project.id} className="case">
              {shot && (
                <div className="case-media">
                  <Image
                    src={shot.src}
                    alt={shot.alt || project.title}
                    fill
                    sizes="(min-width: 900px) 480px, 100vw"
                    style={{ objectFit: 'cover', objectPosition: project.frame || 'center' }}
                  />
                </div>
              )}
              <div className="case-copy">
                <p className="case-kicker">{project.period}</p>
                <h3>{project.title}</h3>
                <p className="case-result">{project.result}</p>
                {project.metric && <p className="metric">{project.metric}</p>}
                <ul className="tag-row">
                  {project.tags.slice(0, 5).map((tag) => (
                    <li key={tag}>
                      <button
                        type="button"
                        className="tag"
                        onMouseEnter={() => highlightSkill(tag)}
                        onMouseLeave={() => highlightSkill(null)}
                        onFocus={() => highlightSkill(tag)}
                        onBlur={() => highlightSkill(null)}
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
                {hasFacts && (
                  <>
                    <button
                      type="button"
                      className="case-read"
                      aria-expanded={open}
                      aria-controls={factsId}
                      onClick={() => setOpenId(open ? null : project.id)}
                    >
                      {open ? 'Close the case' : 'Read the case'}
                    </button>
                    <div id={factsId} className={`case-facts${open ? ' is-open' : ''}`}>
                      <div className="case-facts-inner" inert={open ? undefined : true}>
                        <dl>
                          {project.problem && (
                            <div>
                              <dt>Problem</dt>
                              <dd>{project.problem}</dd>
                            </div>
                          )}
                          {project.role && (
                            <div>
                              <dt>My role</dt>
                              <dd>{project.role}</dd>
                            </div>
                          )}
                          {project.outcome && (
                            <div>
                              <dt>Result</dt>
                              <dd>{project.outcome}</dd>
                            </div>
                          )}
                        </dl>
                        {project.href && (
                          <p className="case-links">
                            <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                              Repository
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
