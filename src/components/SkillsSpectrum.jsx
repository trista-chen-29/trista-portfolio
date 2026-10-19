'use client';

import { useState } from 'react';
import { skillLanes } from '@/data/skills';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const allSkills = skillLanes.flatMap((lane) => lane.skills.map((skill) => ({
  ...skill,
  lane: lane.label,
  laneId: lane.id,
})));

export default function SkillsSpectrum() {
  const reduced = usePrefersReducedMotion();
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

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Skills</h2>
      <p className="skills-note">
        Bar height is depth. TODO(skill-depth) until the ratings are set, so every bar is hatched and the same height.
      </p>
      <div className="spectrum">
        {skillLanes.map((lane) => {
          const visible = lane.skills.filter((skill) => skill.visible);
          return (
            <div key={lane.id} className="lane">
              <h3>{lane.label}</h3>
              <div className="bars" role="group" aria-label={lane.label}>
                {visible.map((skill, index) => {
                  const selected = active?.name === skill.name && active?.laneId === lane.id;
                  const height = skill.depth == null ? '42%' : `${Math.round(skill.depth * 100)}%`;
                  return (
                    <button
                      key={skill.name}
                      id={barId(lane.id, skill.name)}
                      type="button"
                      className={`bar${selected ? ' is-on' : ''}`}
                      aria-pressed={selected}
                      aria-describedby="skill-proof"
                      onMouseEnter={() => select({ ...skill, laneId: lane.id })}
                      onFocus={() => select({ ...skill, laneId: lane.id })}
                      onClick={() => select({ ...skill, laneId: lane.id })}
                      onKeyDown={(event) => onKeyDown(event, lane.id, index)}
                    >
                      <span className="bar-track" aria-hidden="true">
                        <span className={`bar-fill${skill.depth == null ? ' is-unset' : ''}`} style={{ height }} />
                      </span>
                      <span className="bar-name">{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p id="skill-proof" className="skill-proof" aria-live="polite">
        {active
          ? `${active.name}. ${active.depth == null ? 'TODO(skill-depth). ' : ''}${active.proof}`
          : 'Hover or focus a bar to see the project or role behind it.'}
      </p>
      <p className="also-used">
        <span>Also used </span>
        {allSkills.filter((skill) => !skill.visible).map((skill) => skill.name).join(' · ')}
      </p>
      <table className={reduced ? 'skill-table' : 'sr-only'}>
        <caption>Skills by lane, with depth and where each one shows up</caption>
        <thead>
          <tr>
            <th scope="col">Skill</th>
            <th scope="col">Lane</th>
            <th scope="col">Depth</th>
            <th scope="col">Proof</th>
          </tr>
        </thead>
        <tbody>
          {allSkills.map((skill) => (
            <tr key={`${skill.laneId}-${skill.name}`}>
              <th scope="row">{skill.name}</th>
              <td>{skill.lane}</td>
              <td>{skill.depth == null ? 'TODO(skill-depth)' : skill.depth}</td>
              <td>{skill.proof}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function barId(laneId, name) {
  return `skill-${laneId}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}
