/**
 * Bar height is `depth` (0–1). Every depth is null until Trista rates it.
 * TODO(skill-depth): set depth yourself. Null is unrated — do not treat it as a score.
 * `visible` caps the chart at 16 bars. The rest render on the "Also used" line.
 */

export const skillLanes = [
  {
    id: 'firmware',
    label: 'Firmware & embedded',
    skills: [
      { name: 'C', depth: null, visible: false, proof: 'Systems coursework and embedded firmware alongside the ESP32 work at Alef.' },
      { name: 'C++', depth: null, visible: true, proof: 'ESP32 Wheel Calibration at Alef, and the air quality monitor.' },
      { name: 'Assembly', depth: null, visible: false, proof: 'SJSU coursework (architecture, assembly, operating systems).' },
      { name: 'ESP32', depth: null, visible: true, proof: 'ESP32 Wheel Calibration at Alef.' },
      { name: 'CAN/TWAI', depth: null, visible: true, proof: 'Wheel motor control at Alef and URC arm teleoperation.' },
      { name: 'UART', depth: null, visible: false, proof: 'UART drive backup on URC Teleoperation.' },
      { name: 'USB', depth: null, visible: false, proof: 'Listed with embedded work. No public project is tagged USB yet.' },
      { name: 'Hall sensors', depth: null, visible: true, proof: 'Dual Hall-sensor homing on ESP32 Wheel Calibration.' },
      { name: 'Motor control', depth: null, visible: true, proof: 'CAN motor control at 100 Hz on ESP32 Wheel Calibration.' },
      { name: 'Ethos-U55', depth: null, visible: true, proof: 'Edge AI Headcount on Nuvoton hardware.' },
      { name: 'Arduino', depth: null, visible: false, proof: 'Air Quality Monitoring System.' },
    ],
  },
  {
    id: 'validation',
    label: 'Validation & RF',
    skills: [
      { name: 'EMC/RF', depth: null, visible: true, proof: 'Associate Test Technician, EMC & RF validation at Element Materials Technology.' },
      { name: 'Wi-Fi 6E', depth: null, visible: true, proof: 'EMC & RF validation at Element Materials Technology.' },
      { name: 'Bluetooth', depth: null, visible: false, proof: 'EMC & RF validation at Element Materials Technology.' },
      { name: 'UWB', depth: null, visible: false, proof: 'EMC & RF validation at Element Materials Technology.' },
      { name: 'Linux', depth: null, visible: false, proof: 'Lab and local development environment.' },
      { name: 'pytest', depth: null, visible: true, proof: 'Backend contract tests on freakypeeky.' },
      { name: 'k6', depth: null, visible: false, proof: 'SCEvents registration load tests.' },
      { name: 'Playwright', depth: null, visible: true, proof: 'freakypeeky coverage and the AgentDex Wikipedia crawl.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & web',
    skills: [
      { name: 'Python', depth: null, visible: true, proof: 'URC teleoperation, Edge AI Headcount, churn scoring, and hackathon APIs.' },
      { name: 'Go', depth: null, visible: true, proof: 'SCEvents + Clark Calendar.' },
      { name: 'Java', depth: null, visible: false, proof: 'SpartanClubConnect and Prof-Support.' },
      { name: 'TypeScript/JavaScript', depth: null, visible: true, proof: 'Catch, SCEvents, the stock dashboard, and Orig.' },
      { name: 'FastAPI', depth: null, visible: false, proof: 'Cosmetic Safety Intelligence, churn scoring, and AI Meeting Agent.' },
      { name: 'Gin', depth: null, visible: false, proof: 'Listed for Go services. No public project is tagged Gin yet.' },
      { name: 'Kafka', depth: null, visible: false, proof: 'SCEvents registration and waitlist pipelines.' },
      { name: 'Redis', depth: null, visible: false, proof: 'SCEvents write locks and AgentDex.' },
      { name: 'MongoDB', depth: null, visible: false, proof: 'SCEvents persistence.' },
      { name: 'MySQL', depth: null, visible: false, proof: 'SpartanClubConnect.' },
      { name: 'SQLite', depth: null, visible: false, proof: 'Prof-Support, freakypeeky, and Catch.' },
      { name: 'React', depth: null, visible: true, proof: 'URC Mission Control, SCEvents, and the SCE stock dashboard.' },
      { name: 'Next.js', depth: null, visible: false, proof: 'freakypeeky and this site.' },
      { name: 'Node.js', depth: null, visible: false, proof: 'SCE Financial Advising App.' },
      { name: 'Docker', depth: null, visible: false, proof: 'Listed for backend deploys. No public project is tagged Docker yet.' },
    ],
  },
  {
    id: 'ml',
    label: 'ML',
    skills: [
      { name: 'PyTorch', depth: null, visible: true, proof: 'Edge AI Headcount (YOLOv8 on device).' },
      { name: 'scikit-learn', depth: null, visible: false, proof: 'Customer Churn Prediction pipeline.' },
      { name: 'pandas', depth: null, visible: false, proof: 'Customer Churn Prediction.' },
      { name: 'YOLOv8', depth: null, visible: true, proof: 'Edge AI Headcount on Ethos-U55.' },
      { name: 'Whisper', depth: null, visible: false, proof: 'Catch, on-device lecture transcription.' },
    ],
  },
];

export const visibleSkillCount = skillLanes.reduce(
  (count, lane) => count + lane.skills.filter((skill) => skill.visible).length,
  0,
);
