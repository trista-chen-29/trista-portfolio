export const experiences = [
  {
    role: 'Associate Test Technician',
    company: 'Element Materials Technology · Morgan Hill, CA',
    companyHref: 'https://www.element.com/',
    period: 'June 2026 – Present',
    type: 'current',
    bullets: [
      'Execute EMC/RF engineering validation across Wi-Fi 6E, Bluetooth, and UWB using multi-axis antenna arrays.',
      'Analyze peak/average RF measurements and tune transmit power/EIRP to move devices through regulatory certification.',
      'Isolate RF anomalies across bands and configurations, improving test repeatability across 50+ device suites.',
    ],
  },
  {
    role: 'Firmware Software Engineer Intern',
    company: 'Alef · San Mateo, CA',
    period: 'April 2026 – May 2026',
    type: 'internship',
    bullets: [
      'Designed an ESP32 wheel calibration system with dual Hall sensors for sub-millimeter zero-position recovery after power loss.',
      'Engineered a CAN (TWAI) motor-control pipeline for velocity and incremental positioning at 100 Hz.',
      'Built automated homing with baseline hysteresis, cutting signal-noise false triggers by 40% in high-EMI conditions.',
      'Exposed a diagnostic web interface for live motor calibration, reducing field setup time by 25%.',
    ],
  },
  {
    role: 'Software Engineer — Mission Control',
    company: 'SJSU Robotics Club · San Jose, CA',
    period: 'Jan 2026 – Aug 2026',
    type: 'club',
    bullets: [
      'Integrated React + Python robotic-arm control over CAN, cutting end-to-end teleoperation latency by 35% (<50 ms round-trip).',
      'Engineered command/response parsing with ACK handling and auto-reconnect, keeping packet loss under 0.5% on lossy links.',
      'Built slider/gamepad controls with joint limits and deadzones, plus commanded-vs-feedback telemetry at 60 FPS.',
      'Prototyped a UART drive path as a CAN backup in SJSURoboticsTeam/urc-teleoperation-2026.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'SJSU AI/ML Club · Industry-led project with Nuvoton',
    period: 'Feb 2026 – May 2026',
    type: 'club',
    bullets: [
      'Trained YOLOv8 models for real-time headcount, reaching mAP@0.5 of 0.979 and mAP@0.5:0.95 of 0.651.',
      'Ran 200+ hyperparameter experiments and improved accuracy by more than 30%.',
      'Deployed optimized models on Ethos-U55 edge hardware at 20–22 FPS.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'SJSU Software and Computer Engineering Society',
    period: 'Mar 2026 – May 2026',
    type: 'internship',
    bullets: [
      'Architected SCEvents with Go, Kafka, Redis, and MongoDB for 1,000+ concurrent users.',
      'Built Kafka registration/waitlist pipelines at 500+ messages/sec.',
      'Used Redis locking and caching to eliminate race conditions under 10,000+ write spikes.',
    ],
  },
  {
    role: 'Web Testing Engineer',
    company: 'Bay Area Speed Skating',
    period: 'Mar – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Designed 100+ API test cases in Postman and caught logic issues before users hit them.',
      'Ran JMeter load tests that shaped performance work.',
      'Automated frontend regression with Selenium.',
    ],
  },
  {
    role: 'Volunteer Teaching Assistant',
    company: 'Code for Fun',
    period: 'Jul – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Supported K–12 coding and robotics camps in Python, Scratch, and Roblox.',
      'Debugged student projects and adapted explanations to different skill levels.',
    ],
  },
];
