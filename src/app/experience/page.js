import { SectionLabel } from '@/components/Ui';
import ExperienceItem from '@/components/ExperienceItem';

// Newest first
const experiences = [
  {
    role: 'Dev Team Member — SCEvents',
    company: 'SJSU SCE Club',
    period: 'Mar 2026 – Present',
    type: 'wip',
    bullets: [
      'Contributing to SCEvents — an internal event registration platform being built to replace third-party tools like Luma, integrated directly into the SCE website (sce.sjsu.edu)',
      'Implemented the GET /events/:id endpoint in Go (Gin framework), enabling the frontend to fetch individual event data from MongoDB',
      'Working within a production-scale architecture: Kafka for high-concurrency registration buffering, Redis for atomic headcount tracking, Docker for container orchestration',
    ],
  },
  {
    role: 'Mission Control Team Member',
    company: 'SJSU Robotics Club · URC 2027',
    period: 'Feb 2026 – Present',
    type: 'wip',
    bullets: [
      'Shipped the Communication Health Indicator — a timestamp-based state machine (GOOD / WARN / LOST / NO DATA) giving operators an instant single-glance read on system health instead of parsing raw metrics',
      'Added a UART-based testing path for drive communication alongside existing CAN infrastructure — serial packet send/read, drive message handling, and frontend serial info display',
      'Integrated all features into the existing React architecture via hooks (useEffect, useMemo) without touching the backend',
      'Team is actively developing the rover toward URC 2027 competition',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'CityAuto.inc',
    period: 'Mar – May 2025',
    type: 'internship',
    bullets: [
      'Engineered 9 production-grade RESTful APIs with Django & MySQL — repair orders, service tracking, and role-based workflows live in production',
      'Implemented cookie-based authentication and role verification so the right people accessed exactly what they were supposed to, nothing more',
      'Designed normalized relational schemas and optimized ORM queries to keep the backend fast and consistent under real load',
      'Delivered structured JSON responses consumed directly by frontend applications — no guesswork, no format mismatches',
    ],
  },
  {
    role: 'Web Testing Engineer',
    company: 'Bay Area Speed Skating',
    period: 'Mar – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Designed and executed 100+ structured API test cases with Postman — caught major logic issues before a single user ever saw them',
      'Ran load tests with JMeter, producing performance reports that directly shaped optimization decisions',
      'Automated end-to-end frontend regression tests using Selenium (JavaScript), cutting manual testing overhead by 68%',
      'Performed white-box testing on client and admin systems, validating correctness at the logic level — not just the UI surface',
    ],
  },
  {
    role: 'Volunteer Teaching Assistant',
    company: 'Code for Fun',
    period: 'Jul – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Assisted coding and robotics summer camps helping K–12 students learn beginner-friendly programming concepts',
      'Supported students building projects in Minecraft with Python, AI activities with Scratch, and Roblox game development',
      'Debugged student projects hands-on and adapted explanations to different learning speeds and skill levels',
      'Developed communication skills by breaking down complex technical concepts into clear, approachable steps for beginners',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2.5rem 5rem' }}>
      <div className="reveal">
        <SectionLabel>Work & Involvement</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400, marginBottom: '2.5rem',
        }}>
          Where I&apos;ve{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>shipped</em>
        </h2>
      </div>
      <div>
        {experiences.map((exp, i) => (
          <div key={exp.company + exp.role} className={`reveal delay-${Math.min(i + 1, 5)}`}>
            <ExperienceItem {...exp} defaultOpen={i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}