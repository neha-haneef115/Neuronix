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
}

const Card: React.FC<CardProps> = ({ children, className = "", innerGlow = false }) => (
  <div className={`relative rounded-2xl p-[1px] ${className}`} style={{ background: cardStroke }}>
    <div className="relative rounded-2xl p-4 overflow-hidden h-full" style={{ background: cardBg }}>
      <div className="relative z-20 flex flex-col gap-4 px-4 h-full">{children}</div>
    </div>
  </div>
);

const GrowthImpact: React.FC = () => {
  const users = [
    { name: "Alex Hales", email: "alexhales@gmail.com", img: "/assets/carousel/1.jpg" },
    { name: "Mathew Faris", email: "mathewfaris@gmail.com", img: "/assets/carousel/2.jpg" },
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

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-5 gap-4 mb-4 text-left">
          {/* LEFT 60% CARD */}
          <Card className="col-span-3" innerGlow>
            <div className="w-full h-64 relative rounded-xl overflow-hidden">
              <Image
                src="/assets/Home/Dashboard-1.png"
                alt="Dashboard preview"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold m-0">All-in-One Dashboard</h3>
            <p className="text-gray-300 text-md m-0">
              Manage everything from a single, intuitive interface.
            </p>
          </Card>

          {/* RIGHT GLASS CARDS */}
          <Card className="col-span-2">
            <div className="flex flex-col gap-2">
              {users.map((u, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full h-20 rounded-2xl p-4 bg-[#EFE5FC]/10 backdrop-blur-lg shadow-lg"
                >
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image src={u.img} alt={u.name} fill className="object-cover" />
                  </div>
                  <div className="text-left flex-1 ml-4">
                    <p className="text-sm font-medium m-0">{u.name}</p>
                    <p className="text-xs text-gray-400 m-0">{u.email}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0D0318] flex items-center justify-center text-[#EFE5FC] text-xl">
                    <IoSend />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold m-0">Seamless Integrations</h3>
            <p className="text-gray-300 text-md m-0">Connect effortlessly with others.</p>
          </Card>
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-2 gap-4 text-left">
          {/* LEFT STACK USING CARD COMPONENT */}
          <div className="flex flex-col gap-6 h-full">
            <Card innerGlow className="flex-1">
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

            <Card innerGlow className="flex-1">
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
          <Card className="p-6 h-full" innerGlow>
            <div className="relative w-full h-45 rounded-xl overflow-hidden">
              <Image src="/assets/carousel/analytics.png" alt="Chart" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-3">
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