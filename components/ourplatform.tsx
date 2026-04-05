"use client";

import { useEffect, useRef } from "react";
import SectionText from "@/components/ui/SectionText";
import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import FloatingLines from "./FloatingLines";

const logos = [
  "/assets/Home/1.png",
  "/assets/Home/2.png",
  "/assets/Home/3.png",
  "/assets/Home/4.png",
  "/assets/Home/5.png",
  "/assets/Home/6.png",
  "/assets/Home/7.png",
  "/assets/Home/8.png",
];

function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;
    let reqId: number;

    const step = () => {
      if (!container) return;
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      reqId = requestAnimationFrame(step);
    };

    reqId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(reqId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-8 sm:gap-14 md:gap-20 lg:gap-25 overflow-hidden"
      style={{ width: "100%", whiteSpace: "nowrap" }}
    >
      {[...logos, ...logos].map((src, i) => (
        <div key={i} className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <Image
            src={src}
            alt={`Company logo ${i}`}
            width={48}
            height={48}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default function OurPlatform() {
  return (
    <section className="min-h-screen text-white overflow-visible relative">

      {/* Backed By Section */}
      <div className="relative z-10  py-10 sm:py-14 md:py-16 mt-6 sm:mt-8 md:mt-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-8 sm:mb-10 md:mb-12">
          Backed by 200+ Growing Businesses
        </h2>
        <LogoCarousel />
      </div>

      {/* Platform Section */}
      <div id="OurPlatform" className="relative text-center">

        <SectionText
          id="OurPlatform"
          title="Business Intelligence &"
          highlight="Insight Center"
          description="Keep your most important metrics visible at all times, so you can track performance without digging through reports."
          className="max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] m-auto"
          descClassName="max-w-[95%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[60%]"
        />

        {/* FULL WIDTH BACKGROUND + CENTERED DASHBOARD */}
        <div className="relative w-full overflow-hidden mt-6 sm:mt-8 md:mt-10">

          {/* FloatingLines FULL WIDTH */}
          <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-50 mix-blend-screen">
            <FloatingLines
              enabledWaves={["top", "middle", "bottom"]}
              lineCount={5}
              lineDistance={5}
              bendRadius={5}
              bendStrength={-0.5}
              interactive={true}
              parallax={true}
            />
          </div>

          {/* Centered Dashboard */}
          <div className="relative z-10 w-[95%] sm:w-[90%] md:w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto aspect-[16/9]">
            <Image
              src="/assets/Home/Dashboard.png"
              alt="Dashboard"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>

      {/* Glow Section */}
      <div className="relative w-full -mt-[4%] sm:-mt-[5%] md:-mt-[6%] lg:-mt-[7%] z-10">
        <div
          className="w-full bg-[#0D0318] rounded-t-3xl sm:rounded-t-4xl flex flex-col justify-center items-center p-4 sm:p-5 md:p-6"
          style={{ boxShadow: "0 -20px 30px rgba(73, 9, 170, 0.35)" }}
        >
          <Carousel />
        </div>
      </div>

    </section>
  );
}