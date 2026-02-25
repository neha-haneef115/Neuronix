"use client";
import SectionText from "@/components/ui/SectionText"
import Image from "next/image";
import Carousel from "@/components/ui/Carousel"
export default function OurPlatform() {
  return (
    <section className="min-h-screen text-white overflow-visible relative">

      {/* Backed By Section */}
      <div className="relative z-10 px-8 py-16 mt-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-300 mb-12">
          Backed by 200+ Growing Businesses
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-14 md:gap-25 ">
          <img src="/assets/Home/1.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/2.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/3.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/4.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/5.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/6.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/7.png" alt="Company logo" className="w-12 h-12 object-contain" />
          <img src="/assets/Home/8.png" alt="Company logo" className="w-12 h-12 object-contain" />
        </div>
      </div>

     <div  className="relative text-center ">
     <SectionText
  id="OurPlatform"
  title="Business Intelligence &"
  highlight="Insight Center"
  description="Keep your most important metrics visible at all times, so you can track performance without digging through reports."
className="max-w-[70%] m-auto"
 descClassName="max-w-[60%]"/>
 <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] overflow-hidden">

  {/* DASHBOARD */}
  <Image
    src="/assets/Home/Dashboard.png"
    alt="Dashboard"
    fill
    className="object-contain relative z-10"
    priority
  />
</div>
    </div>

      {/* Glow Section – full width, overlaps previous dashboard by 9% */}
      <div className="relative w-full -mt-[7%] z-10">
        {/* Glow background */}        <div className="w-full bg-[#0D0318] rounded-t-4xl flex flex-col justify-center items-center p-6"
  style={{ boxShadow: "0 -20px 30px rgba(73, 9, 170, 0.35)" }}>

          {/* Dashboard image inside glow */}
        <Carousel/>
        </div>
      </div>

    </section>
  );
}
