import dynamic from 'next/dynamic';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import FeaturedProjects from '@/components/FeaturedProjects';
import Hero from '@/components/Hero';
import MoreProjects from '@/components/MoreProjects';
import SkillsSpectrum from '@/components/SkillsSpectrum';

const HallSensorDemo = dynamic(() => import('@/components/HallSensorDemo'));

export default function HomePage() {
  return (
    <div className="page">
      <Hero />
      <HallSensorDemo />
      <FeaturedProjects />
      <MoreProjects />
      <ExperienceTimeline />
      <SkillsSpectrum />
      <About />
      <Contact />
    </div>
  );
}
