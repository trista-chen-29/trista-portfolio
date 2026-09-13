import Timeline from '@/components/Timeline';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="page">
      <p className="page-kicker">Path</p>
      <h1 className="page-title">Experience</h1>
      <p className="page-sub">Firmware, robotics, EMC/RF validation, and edge systems — tap a card to expand.</p>
      <Timeline items={experiences} />
    </div>
  );
}
