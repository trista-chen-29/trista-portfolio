import Timeline from '@/components/Timeline';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="page">
      <p className="page-kicker">So far</p>
      <h1 className="page-title">Experience</h1>
      <p className="page-sub">Labs, clubs, internships, and a few late nights that turned into real systems.</p>
      <Timeline items={experiences} />
    </div>
  );
}
