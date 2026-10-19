/**
 * Recent roles render in full. Anything before 2025 collapses into Earlier.
 * Bullets below are resume wording with [VERIFY] and [WRITE] lines left out.
 * TODO(bullets) stays only where the plan asked Trista to write the role. Those lines do not render.
 */

export const experiences = [
  {
    company: 'Element Materials Technology',
    companyHref: 'https://www.element.com/',
    logo: '/orgs/element.png',
    location: 'Morgan Hill, CA · On-site',
    type: 'current',
    era: 'recent',
    roles: [
      {
        title: 'Associate Test Technician (EMC & RF validation)',
        period: 'Jun 2026 – Present',
        kind: 'Internship',
        bullets: [
          'Run EMC/RF tests across Wi-Fi 2.4/5/6E GHz, Bluetooth, UWB, and IEEE 802.15.4 devices.',
          'Measure peak and average RF and tune transmit power/EIRP with spectrum analyzers, call boxes, and antenna systems.',
        ],
      },
    ],
  },
  {
    company: 'SJSU Software & Computer Engineering Society',
    companyHref: 'https://sce.sjsu.edu/',
    logo: '/orgs/sce.png',
    location: 'San Jose, CA',
    type: 'current',
    era: 'recent',
    roles: [
      {
        title: 'Officer',
        period: 'Aug 2026 – Present',
        kind: 'Part-time',
        bullets: ['TODO(bullets)'],
      },
      {
        title: 'Software Engineer Intern',
        period: 'Mar 2026 – May 2026',
        kind: 'Internship',
        bullets: [
          'Built SCEvents registration and waitlist pipelines on Go, Kafka, Redis, and MongoDB.',
          'Redis locking removed race conditions under k6 load tests with 10,000+ write spikes.',
        ],
      },
    ],
  },
  {
    company: 'SJSU Robotics',
    companyHref: 'https://www.sjsurobotics.org/',
    logo: '/orgs/robotics.png',
    location: 'San Jose, CA',
    type: 'club',
    era: 'recent',
    roles: [
      {
        title: 'Mission Control Team Member',
        period: 'Jan 2026 – Aug 2026',
        kind: 'Club',
        bullets: [
          'Built React + Python arm teleoperation over CAN with ACK handling and automatic recovery.',
          'Slider and gamepad controls with joint limits, deadzones, and disconnect handling.',
        ],
      },
    ],
  },
  {
    company: 'Alef',
    companyHref: 'https://alef.aero/',
    logo: '/orgs/alef.png',
    location: 'San Mateo, CA · On-site',
    type: 'internship',
    era: 'recent',
    roles: [
      {
        title: 'Firmware Software Engineer Intern',
        period: 'Apr 2026 – May 2026',
        kind: 'Internship',
        bullets: [
          'Wrote the CAN (TWAI) motor-control path: velocity and incremental positioning at a 100 Hz loop.',
        ],
      },
    ],
  },
  {
    company: 'AI & Machine Learning Club SJSU',
    companyHref: 'https://www.ai-ml-club-sjsu.com/',
    logo: '/orgs/aiml.png',
    location: 'San Jose, CA',
    type: 'club',
    era: 'recent',
    roles: [
      {
        title: 'Edge AI Project Member — Nuvoton Industry Project',
        period: 'Feb 2026 – May 2026',
        kind: 'Club',
        bullets: [
          'Trained YOLOv8 people counting to mAP@0.5 0.979 and mAP@0.5:0.95 0.651.',
          'Deployed on Ethos-U55 edge hardware at 20–22 FPS.',
        ],
      },
    ],
  },
  {
    company: 'BASSC',
    logo: '/orgs/bassc.svg',
    location: 'Remote',
    type: 'internship',
    era: 'recent',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'Mar 2025 – Dec 2025',
        kind: 'Internship',
        bullets: ['TODO(bullets)'],
      },
    ],
  },
  {
    company: 'Code for Fun',
    companyHref: 'https://www.codeforfun.com/',
    logo: '/orgs/codeforfun.png',
    location: 'On-site',
    type: 'volunteer',
    era: 'earlier',
    roles: [
      {
        title: 'Volunteer Teaching Assistant',
        period: 'Jul 2024 – Aug 2024',
        kind: 'Volunteer',
        bullets: ['TODO(bullets)'],
      },
    ],
  },
  {
    company: 'Women In Computer Science Club, De Anza',
    companyHref: 'https://www.instagram.com/deanzawics/',
    logo: '/orgs/wics.svg',
    location: 'On-site',
    type: 'club',
    era: 'earlier',
    roles: [
      {
        title: 'ICC Representative',
        period: 'Jun 2023 – May 2024',
        kind: 'Club',
        bullets: ['TODO(bullets)'],
      },
    ],
  },
  {
    company: 'See Think Wonder Challenge Team',
    companyHref: 'https://stwchallenge-en.mystrikingly.com/',
    logo: '/orgs/stw.svg',
    location: 'Taiwan · Remote',
    type: 'volunteer',
    era: 'earlier',
    roles: [
      {
        title: 'Project Manager',
        period: 'Jun 2022 – Jul 2023',
        kind: 'Volunteer',
        bullets: ['TODO(bullets)'],
      },
    ],
  },
];

export function roleEntries(items = experiences) {
  return items.flatMap((item) => item.roles.map((role) => ({
    id: `${item.company}-${role.period}`,
    company: item.company,
    companyHref: item.companyHref || null,
    logo: item.logo,
    location: item.location,
    era: item.era,
    title: role.title,
    period: role.period,
    kind: role.kind || '',
    bullets: role.bullets,
    current: /present/i.test(role.period),
  })));
}
