'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ResumeToast from '@/components/ResumeToast';
import { interestFor, projectFilters, projects } from '@/data/projects';
import { noteInterest } from '@/lib/resumeFeed';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter((project) => filter === 'All' || project.group === filter);

  return (
    <div className="page">
      <p className="page-kicker">Selected work</p>
      <h1 className="page-title">Projects</h1>
      <p className="page-sub">
        Filter by kind of work. Open a project for the longer story, screenshots, and technologies.
      </p>
      <div className="proj-filters" role="group" aria-label="Project filters">
        {projectFilters.map((name) => (
          <button
            key={name}
            type="button"
            className={filter === name ? 'on' : ''}
            onClick={() => {
              setFilter(name);
              if (name === 'Hardware') noteInterest('hardware', 2);
              if (name === 'Software' || name === 'Hackathon') noteInterest('software', 2);
            }}
            aria-pressed={filter === name}
          >
            {name}
          </button>
        ))}
      </div>
      <ResumeToast />
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
            onOpen={() => noteInterest(interestFor(project.group), 3)}
          />
        ))}
      </div>
      {visible.length === 0 && <p className="page-sub">Nothing in this group yet.</p>}
    </div>
  );
}
