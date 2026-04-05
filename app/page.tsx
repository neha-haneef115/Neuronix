import Hero from '@/components/Hero';
import OurPlatform from '@/components/ourplatform';
import Features from '@/components/Features';
import Testimonianls from "@/components/Testimonials";
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[var(--background)] w-full overflow-x-hidden">
      
      <section className="w-full px-4 sm:px-6 lg:px-12">
        <Hero />
      </section>

      <section className="w-full ">
        <OurPlatform />
      </section>

      <section className="w-full ">
        <Features />
      </section>

      <section className="w-full">
        <Testimonianls />
      </section>

      <section className="w-full">
        <FAQs />
      </section>

      <Footer />
      
    </main>
  );
}