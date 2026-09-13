import { SectionLabel } from '@/components/Ui';
import ExperienceItem from '@/components/ExperienceItem';

const experiences = [
  {
    role: 'Associate Test Technician',
    company: 'Element Materials Technology · Morgan Hill, CA',
    period: 'June 2026 – Present',
    type: 'current',
    bullets: [
      'Perform EMC/RF testing and validation across Wi-Fi 2.4/5/6E GHz, Bluetooth, UWB, and IEEE 802.15.4.',
      'Measure peak and average RF and tune transmit power/EIRP using spectrum analyzers, call boxes, and antenna systems.',
      'Investigate RF across bands, orientations, and configurations to isolate anomalies for certification evaluations.',
    ],
  },
  {
    role: 'Software Engineer — Mission Control',
    company: 'SJSU Robotics Club · San Jose, CA',
    period: 'Jan 2026 – Aug 2026',
    type: 'club',
    bullets: [
      'Integrated React + Python robotic-arm control with CAN communication and commanded-vs-feedback visualization.',
      'Implemented command parsing, ACK handling, and recovery logic so hardware interaction stays reliable on lossy links.',
      'Built slider/gamepad controls with joint limits, deadzone and disconnect handling, plus a timestamp-based HEALTH indicator (GOOD / WARN / LOST / NO DATA).',
      'Prototyped a UART drive path as a CAN backup and coordinated framing with firmware — PRs in SJSURoboticsTeam/urc-teleoperation-2026.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'SJSU Software and Computer Engineering Society · San Jose, CA',
    period: 'Mar 2026 – May 2026',
    type: 'internship',
    bullets: [
      'Built SCEvents, a high-concurrency registration platform using Go, Kafka, Redis, and MongoDB for 1,000+ concurrent users.',
      'Engineered Kafka producer-consumer pipelines for registration and waitlist flows, including Mongo store wiring in the consumer.',
      'Integrated Redis locks and caching to prevent race conditions under k6-simulated spikes of 10,000+ writes.',
      'Shipped the React calendar UI on Clark (sce.sjsu.edu): JWT registration, role-based visibility, month URL persistence, scheduled publish, and closed-event blocking. 20+ PRs across SCE-Development/SCEvents and SCE-Development/Clark.',
    ],
  },
  {
    role: 'Firmware Software Engineer Intern',
    company: 'Alef · San Mateo, CA',
    period: 'April 2026 – May 2026',
    type: 'internship',
    bullets: [
      'Built an ESP32 wheel calibration system using dual Hall sensors to restore zero-position after power loss.',
      'Implemented real-time motor control over CAN (TWAI), including velocity, incremental positioning, and zero persistence.',
      'Designed Hall-sensor signal processing and automated homing with hysteresis for alignment under EMI/noise.',
      'Exposed motor control and calibration through a lightweight web interface for real-time diagnostics.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'SJSU AI/ML Club · Industry-led project with Nuvoton',
    period: 'Feb 2026 – May 2026',
    type: 'club',
    bullets: [
      'Trained YOLOv8 models for real-time headcount estimation, reaching mAP@0.5 of 0.979 and mAP@0.5:0.95 of 0.651.',
      'Ran 20–200+ epoch experiments and resolved dataset/configuration issues, improving accuracy by more than 30%.',
      'Deployed models on edge hardware (Ethos-U55), holding 20–22 FPS real-time inference.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'CityAuto.inc',
    period: 'Mar – May 2025',
    type: 'internship',
    bullets: [
      'Engineered production REST APIs with Django and MySQL for repair orders, service tracking, and role-based workflows.',
      'Implemented cookie-based authentication and role verification for client and admin access paths.',
      'Designed normalized schemas and tightened ORM queries for consistent JSON consumed by frontend apps.',
    ],
  },
  {
    role: 'Web Testing Engineer',
    company: 'Bay Area Speed Skating',
    period: 'Mar – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Designed 100+ structured API test cases in Postman and caught logic issues before users hit them.',
      'Ran JMeter load tests and used the reports to drive performance work.',
      'Automated frontend regression with Selenium, cutting manual testing overhead.',
    ],
  },
  {
    role: 'Volunteer Teaching Assistant',
    company: 'Code for Fun',
    period: 'Jul – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Supported K–12 coding and robotics camps: Python in Minecraft, Scratch AI activities, and Roblox game development.',
      'Debugged student projects on the spot and adapted explanations to different skill levels.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="page page-narrow">
      <div className="reveal">
        <SectionLabel>Work & Involvement</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          fontWeight: 400, marginBottom: '2.5rem',
        }}>
          Where I&apos;ve{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>shipped</em>
        </h2>
      </div>
      <div>
        {experiences.map((exp, i) => (
          <div key={exp.company + exp.role} className={`reveal delay-${Math.min(i + 1, 5)}`}>
            <ExperienceItem {...exp} defaultOpen={i < 3} />
          </div>
        ))}
      </div>
    </div>
  );
}
