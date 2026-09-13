export const experiences = [
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
      'Built slider/gamepad controls with joint limits, deadzone and disconnect handling, plus a timestamp-based HEALTH indicator.',
      'Prototyped a UART drive path as a CAN backup in SJSURoboticsTeam/urc-teleoperation-2026.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'SJSU Software and Computer Engineering Society',
    period: 'Mar 2026 – May 2026',
    type: 'internship',
    bullets: [
      'Built SCEvents using Go, Kafka, Redis, and MongoDB for 1,000+ concurrent users.',
      'Engineered Kafka producer-consumer pipelines for registration and waitlist flows.',
      'Integrated Redis locks and caching under k6-simulated spikes of 10,000+ writes.',
      'Shipped the React calendar UI on Clark with JWT auth, role visibility, and closed-event blocking.',
    ],
  },
  {
    role: 'Firmware Software Engineer Intern',
    company: 'Alef · San Mateo, CA',
    period: 'April 2026 – May 2026',
    type: 'internship',
    bullets: [
      'Built an ESP32 wheel calibration system using dual Hall sensors to restore zero after power loss.',
      'Implemented real-time motor control over CAN (TWAI), including velocity and incremental positioning.',
      'Designed Hall-sensor homing with hysteresis for alignment under EMI/noise.',
      'Exposed calibration through a lightweight web interface for diagnostics.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'SJSU AI/ML Club · Industry-led project with Nuvoton',
    period: 'Feb 2026 – May 2026',
    type: 'club',
    bullets: [
      'Trained YOLOv8 models for real-time headcount, reaching mAP@0.5 of 0.979 and mAP@0.5:0.95 of 0.651.',
      'Ran 20–200+ epoch experiments and improved accuracy by more than 30%.',
      'Deployed models on Ethos-U55 edge hardware at 20–22 FPS.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'CityAuto.inc',
    period: 'Mar – May 2025',
    type: 'internship',
    bullets: [
      'Engineered production REST APIs with Django and MySQL for repair orders and role-based workflows.',
      'Implemented cookie-based authentication and role verification.',
      'Designed normalized schemas and tightened ORM queries.',
    ],
  },
  {
    role: 'Web Testing Engineer',
    company: 'Bay Area Speed Skating',
    period: 'Mar – Aug 2024',
    type: 'volunteer',
    bullets: [
      'Designed 100+ API test cases in Postman before users hit production issues.',
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
