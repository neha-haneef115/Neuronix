"use client";
import SectionText from "@/components/ui/SectionText";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoSend } from "react-icons/io5";

const cardBg =
  "radial-gradient(120% 120% at 85% 0%, rgba(28, 8, 57, 1) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)";
const cardStroke = "rgba(168,85,247,0.2)";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`relative rounded-2xl p-[1px] ${className}`} style={{ background: cardStroke }}>
    <div className="relative rounded-2xl p-4 overflow-hidden h-full" style={{ background: cardBg }}>
      <div className="relative z-20 flex flex-col gap-4 px-2 sm:px-4 h-full">{children}</div>
    </div>
  </div>
);

const SendIcon: React.FC<{ delay: number }> = ({ delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setInView(entry.isIntersecting);
    },
    { threshold: 0.5 }
  );
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);
  return (
    <div
      ref={ref}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0D0318] flex items-center justify-center text-[#EFE5FC] text-lg shrink-0"
      style={{
        transform: inView ? "rotate(0deg)" : "rotate(-45deg)",
        transition: `transform 0.8s ease ${delay}s`,
      }}
    >
      <IoSend />
    </div>
  );
};

const GrowthImpact: React.FC = () => {
  const users = [
    { name: "Alex Hales", email: "alexhales@gmail.com", img: "/assets/carousel/1.jpg" },
    { name: "Mathew Faris", email: "mathewfaris@gmail.com", img: "/assets/carousel/2.jpg" },
    { name: "Georgia", email: "georgia@gmail.com", img: "/assets/carousel/3.jpg" },
  ];

  return (
    <section className="w-full text-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <SectionText
          title="The Story of Our"
          highlight="Growth & Impact"
          description="Each milestone reflects real outcomes. We help companies grow, streamline operations, and execute better."
          titleClassName="max-w-full md:max-w-[70%]"
        />

        {/* ===== TOP ROW ===== */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 mb-4 text-left">

          {/* Dashboard card */}
          <Card className="w-full lg:col-span-3">
            <div className="w-full h-48 sm:h-56 md:h-64 relative rounded-xl overflow-hidden">
              <Image
                src="/assets/Home/Dashboard-1.png"
                alt="Dashboard preview"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold m-0">All-in-One Dashboard</h3>
            <p className="text-gray-300 text-sm sm:text-md m-0">
              Manage everything from a single, intuitive interface.
            </p>
          </Card>

          {/* Users card */}
          <Card className="w-full lg:col-span-2">
            <div className="flex flex-col gap-2">
              {users.map((u, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between w-full h-16 sm:h-20 rounded-2xl p-3 sm:p-4 bg-[#EFE5FC]/10"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 relative rounded-full overflow-hidden shrink-0">
                    <Image src={u.img} alt={u.name} fill className="object-cover" />
                  </div>
                  <div className="text-left flex-1 ml-3">
                    <p className="text-xs sm:text-sm font-medium m-0">{u.name}</p>
                    <p className="text-[10px] sm:text-xs text-gray-300 m-0 truncate">{u.email}</p>
                  </div>
                  <SendIcon delay={i * 0.15} />
                </div>
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold m-0">Seamless Integrations</h3>
            <p className="text-gray-300 text-sm sm:text-md m-0">Connect effortlessly with others.</p>
          </Card>
        </div>

        {/* ===== SECOND ROW ===== */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 text-left">

          {/* Left stack */}
          <div className="flex flex-col gap-4 h-full">
            <Card className="flex-1">
              <div className="flex justify-between items-start gap-4 h-full">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">Team Collaboration</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Built-in communication & sharing</p>
                </div>
                <div className="flex -space-x-3 sm:-space-x-4 shrink-0">
                  {["/assets/carousel/1.avif", "/assets/carousel/2.avif", "/assets/carousel/3.avif"].map(
                    (src, i) => (
                      <div
                        key={i}
                        className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full border-[3px] border-[#140726] overflow-hidden shadow-lg"
                      >
                        <Image src={src} alt={`User ${i}`} fill className="object-cover" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </Card>

            <Card className="flex-1">
              <div className="flex justify-between items-center h-full gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">Regular Updates</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Continuous improvements & new features
                  </p>
                </div>
                <img
                  src="/assets/carousel/loop1.gif"
                  className="w-12 h-12 sm:w-16 sm:h-16 mix-blend-screen shrink-0"
                  alt="loop animation"
                />
              </div>
            </Card>
          </div>

          {/* Right tall card */}
          <Card className="h-full">
            <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden">
              <Image src="/assets/carousel/dashboard.png" alt="Chart" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold m-0 text-white">Real-Time Analytics</h3>
              <p className="text-gray-300 text-sm sm:text-md m-0">Drive decisions with powerful insights</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GrowthImpact;