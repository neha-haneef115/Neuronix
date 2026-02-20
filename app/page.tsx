import Hero from '@/components/Hero';
import OurPlatform from '@/components/ourplatform';
import Features from '@/components/Features';
import Testimonianls from "@/components/Testimonials"
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div style={{ background: 'var(--background)' }}>
      <Hero />
      <OurPlatform/>
      <Features/>
      <Testimonianls/>
      <FAQs/>
      <Footer/>
    </div>
  );
}
