import Hero from '@/components/Hero';
import OurPlatform from '@/components/ourplatform';
export default function Home() {
  return (
    <div style={{ background: 'var(--background)' }}>
      <Hero />
      <OurPlatform/>
    </div>
  );
}
