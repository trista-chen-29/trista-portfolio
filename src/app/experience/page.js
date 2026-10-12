import Timeline from '@/components/Timeline';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="page">
      <h1 className="page-title">Experience</h1>
      <Timeline items={experiences} />
    </div>
  );
}
