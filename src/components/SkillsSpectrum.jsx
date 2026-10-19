'use client';

import { useState } from 'react';
import { skillLanes } from '@/data/skills';

const allSkills = skillLanes.flatMap((lane) => lane.skills.map((skill) => ({
  ...skill,
  lane: lane.label,
  laneId: lane.id,
})));

// Bars only make sense once at least one depth is rated in src/data/skills.js.
// Until then the section shows plain skill chips, each with its proof on hover or focus.
const rated = allSkills.some((skill) => skill.depth != null);

export default function SkillsSpectrum() {
  const [active, setActive] = useState(null);

  const select = (skill) => setActive(skill);

  const onKeyDown = (event, laneId, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const lane = skillLanes.find((item) => item.id === laneId);
    const visible = lane.skills.filter((skill) => skill.visible);
    const nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;
    const next = visible[nextIndex];
    if (!next) return;
    event.preventDefault();
    document.getElementById(barId(laneId, next.name))?.focus();
  };

  const interaction = (skill, laneId, index) => ({
    id: barId(laneId, skill.name),
    type: 'button',
    'aria-pressed': active?.name === skill.name && active?.laneId === laneId,
    'aria-describedby': 'skill-proof',
    onMouseEnter: () => select({ ...skill, laneId }),
    onFocus: () => select({ ...skill, laneId }),
    onClick: () => select({ ...skill, laneId }),
    onKeyDown: (event) => onKeyDown(event, laneId, index),
  });

  const prompt = rated
    ? 'Hover or focus a bar to see the project or role behind it.'
    : 'Hover or focus a skill to see the project or role behind it.';

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Skills</h2>
      {rated && <p className="skills-note">Bar height shows how deep I go with each one.</p>}
      <div className="spectrum">
        {skillLanes.map((lane) => {
          const visible = lane.skills.filter((skill) => skill.visible);
          return (
            <div key={lane.id} className="lane">
              <h3>{lane.label}</h3>
              {rated ? (
                <div className="bars" role="group" aria-label={lane.label}>
                  {visible.map((skill, index) => {
                    const selected = active?.name === skill.name && active?.laneId === lane.id;
                    const height = skill.depth == null ? '42%' : `${Math.round(skill.depth * 100)}%`;
                    return (
                      <button
                        key={skill.name}
                        className={`bar${selected ? ' is-on' : ''}`}
                        {...interaction(skill, lane.id, index)}
                      >
                        <span className="bar-track" aria-hidden="true">
                          <span className={`bar-fill${skill.depth == null ? ' is-unset' : ''}`} style={{ height }} />
                        </span>
                        <span className="bar-name">{skill.name}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="chips" role="group" aria-label={lane.label}>
                  {visible.map((skill, index) => {
                    const selected = active?.name === skill.name && active?.laneId === lane.id;
                    return (
                      <button
                        key={skill.name}
                        className={`chip${selected ? ' is-on' : ''}`}
                        {...interaction(skill, lane.id, index)}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p id="skill-proof" className="skill-proof" aria-live="polite">
        {active ? [active.name, active.proof].filter(Boolean).join('. ') : prompt}
      </p>
      <p className="also-used">
        <span>Also used </span>
        {allSkills.filter((skill) => !skill.visible).map((skill) => skill.name).join(' · ')}
      </p>
      {/* Plain table for screen readers. Always visually hidden so it never reads as unfinished. */}
      <div className="sr-only">
        <table className="skill-table">
          <caption>Skills by lane, and where each one shows up</caption>
          <thead>
            <tr>
              <th scope="col">Skill</th>
              <th scope="col">Lane</th>
              {rated && <th scope="col">Depth</th>}
              <th scope="col">Proof</th>
            </tr>
          </thead>
          <tbody>
            {allSkills.map((skill) => (
              <tr key={`${skill.laneId}-${skill.name}`}>
                <th scope="row">{skill.name}</th>
                <td>{skill.lane}</td>
                {rated && <td>{skill.depth == null ? 'not rated' : skill.depth}</td>}
                <td>{skill.proof || 'listed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function barId(laneId, name) {
  return `skill-${laneId}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}
