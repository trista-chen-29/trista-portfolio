import Image from 'next/image';
import { featuredProjects } from '@/data/projects';

export default function FeaturedProjects() {
  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <h2 id="work-heading" className="section-title">Work</h2>
      <div className="case-list">
        {featuredProjects.map((project) => {
          const shot = project.shots[0];
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
                {/* Empty metric renders nothing. Add one in src/data/projects.js once it is real. */}
                {project.metric && <p className="metric">{project.metric}</p>}
                <dl className="case-facts">
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
                <ul className="tag-row">
                  {project.tags.slice(0, 5).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.href && (
                  <p className="case-links">
                    <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                      Repository
                    </a>
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
