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
      className="flex gap-14 md:gap-25 overflow-hidden"
      style={{ width: "100%", whiteSpace: "nowrap" }}
    >
      {[...logos, ...logos].map((src, i) => (
        <div key={i} className="flex-shrink-0 w-12 h-12">
          <Image
            src={src}
            alt={`Company logo ${i}`}
            width={48}
            height={48}
            className="object-contain"
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
      <div className="relative z-10 px-8 py-16 mt-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-300 mb-12">
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
          className="max-w-[70%] m-auto"
          descClassName="max-w-[60%]"
        />

        {/* FULL WIDTH BACKGROUND + CENTERED DASHBOARD */}
        <div className="relative w-full overflow-hidden mt-10">

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
          <div className="relative z-10 max-w-6xl mx-auto aspect-[16/9]">
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
      <div className="relative w-full -mt-[7%] z-10">
        <div
          className="w-full bg-[#0D0318] rounded-t-4xl flex flex-col justify-center items-center p-6"
          style={{ boxShadow: "0 -20px 30px rgba(73, 9, 170, 0.35)" }}
        >
          <Carousel />
        </div>
      </div>

    </section>
  );
}