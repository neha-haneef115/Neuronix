"use client";
import SectionText from "@/components/ui/SectionText";
import React, { ReactNode } from "react";
import Image from "next/image";
import { IoSend } from "react-icons/io5";

const cardBg =
  "radial-gradient(120% 120% at 85% 0%, rgba(80, 32, 151, 0.9) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)";
const cardStroke =
  "linear-gradient(135deg, rgba(195,184,249,0.35) 0%, rgba(115,109,147,0.35) 100%)";

interface CardProps {
  children: ReactNode;
  className?: string;
  innerGlow?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = "", innerGlow = false, style }) => (
  <div className={`relative rounded-2xl p-[1px] ${className}`} style={{ background: cardStroke, ...style }}>
    <div className="relative rounded-2xl p-4 overflow-hidden" style={{ background: cardBg }}>
      {innerGlow && (
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl z-10 pointer-events-none" />
      )}
      <div className="relative z-20 flex flex-col gap-4 px-4 h-full">{children}</div>
    </div>
  </div>
);

const GrowthImpact: React.FC = () => {
  const users = [
    { name: "Alex Hales", email: "alexhales@gmail.com", img: "/assets/carousel/1.jpg" },
    { name: "Matthew Faris", email: "matthewfaris@gmail.com", img: "/assets/carousel/2.jpg" },
    { name: "Georgia", email: "georgia@gmail.com", img: "/assets/carousel/3.jpg" },
  ];

  return (
    <section className="w-full text-white py-20">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <SectionText
          title="The Story of Our"
          highlight="Growth & Impact"
          description="Each milestone reflects real outcomes. We help companies grow, streamline operations, and execute better."
          titleClassName="max-w-[70%]"
        />

        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-2 gap-4 text-left">
          {/* LEFT STACK */}
          <div className="flex flex-col gap-6 h-full">
            {/* Each left card takes 50% height of right card */}
            <Card innerGlow style={{ flex: 1 }}>
              <div className="flex justify-between items-start h-full">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">Team Collaboration</h3>
                  <p className="text-gray-400 text-base">Built-in communication & sharing</p>
                </div>
                <div className="flex -space-x-4">
                  {["/assets/carousel/1.avif", "/assets/carousel/2.avif", "/assets/carousel/3.avif"].map(
                    (src, i) => (
                      <div
                        key={i}
                        className="relative w-14 h-14 rounded-full border-[3px] border-[#140726] overflow-hidden shadow-lg"
                      >
                        <Image src={src} alt={`User ${i}`} fill className="object-cover" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </Card>

            <Card innerGlow style={{ flex: 1 }}>
              <div className="flex justify-between items-center h-full">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">Regular Updates</h3>
                  <p className="text-gray-400 text-base">Continuous improvements & new features</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B2CFF] to-[#A855F7] flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-14-3M4 15a8 8 0 0014 3"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT TALL CARD */}
          <Card className="p-6" innerGlow style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div className="relative w-full flex-1 rounded-xl overflow-hidden">
              <Image src="/assets/carousel/analytics.png" alt="Chart" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <h3 className="text-2xl font-semibold m-0 text-white">Real-Time Analytics</h3>
              <p className="text-gray-400 text-md m-0">Drive decisions with powerful insights</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GrowthImpact;