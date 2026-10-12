import Timeline from '@/components/Timeline';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="page">
      <p className="page-kicker">So far</p>
      <h1 className="page-title">Experience</h1>
      <p className="page-sub">Labs, clubs, and internships. A logo opens the organization.</p>
      <Timeline items={experiences} />
    </div>
  );
}
