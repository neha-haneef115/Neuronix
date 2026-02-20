"use client";

import React from "react";
import Carousel from "@/components/ui/Carousel"
export default function OurPlatform() {
  return (
    <section className="min-h-screen text-white overflow-visible relative">

      {/* Backed By Section */}
      <div className="relative z-10 px-8 py-16 mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-300 mb-12">
          Backed by 200+ Growing Businesses
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60">
          <img src="/assets/Home/1.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/2.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/3.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/4.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/5.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/6.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/7.png" alt="Company logo" className="w-16 h-16 object-contain" />
          <img src="/assets/Home/8.png" alt="Company logo" className="w-16 h-16 object-contain" />
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="relative text-center py-16">
        <h2 className="text-3xl mx-auto max-w-[60%] leading-[1.3] md:text-[50px] font-bold mb-6 text-[#EFE5FC] font-poppins">
          Business Intelligence & <span>Insight Center</span>
        </h2>
        <p className="text-md max-w-[50%] mx-auto py-10">
          Keep your most important metrics visible at all times, so you can track performance without digging through reports.
        </p>

        {/* Dashboard image container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <img 
            src="/assets/Home/Dashboard.png" 
            alt="Dashboard Preview" 
            className="w-full"
          />
        </div>
      </div>

      {/* Glow Section – full width, overlaps previous dashboard by 9% */}
      <div className="relative w-full -mt-[7%] z-10">
        {/* Glow background */}
        <div className="w-full bg-[#0D0318] rounded-t-4xl [box-shadow:0_-20px_80px_rgba(73,9,170,0.35)] flex flex-col justify-center items-center p-6">
          {/* Dashboard image inside glow */}
        <Carousel/>
        </div>
      </div>

    </section>
  );
}
