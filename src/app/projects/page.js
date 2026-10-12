'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projectFilters, projects } from '@/data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter((project) => filter === 'All' || project.group === filter);

  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>
      <div className="proj-filters" role="group" aria-label="Project filters">
        {projectFilters.map((name) => (
          <button
            key={name}
            type="button"
            className={filter === name ? 'on' : ''}
            onClick={() => setFilter(name)}
            aria-pressed={filter === name}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            period={project.period}
            status={project.status}
            summary={project.summary}
            desc={project.desc}
            tags={project.tags}
            role={project.role}
            href={project.href}
            shots={project.shots}
            frame={project.frame}
          />
        ))}
      </div>
      {visible.length === 0 && <p className="page-sub">Nothing in this group yet.</p>}
    </div>
  );
}
