"use client";

import Image from "next/image";

const cardBg =
  "radial-gradient(120% 120% at 85% 0%, rgba(97,24,200,0.8) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)";

const cardStroke =
  "linear-gradient(135deg, #C3B8F9 0%, #736D93 100%)";

function Card({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] ${className}`}
      style={{ background: cardStroke }}
    >
      <div
        className="rounded-2xl p-6 h-full"
        style={{ backgroundImage: cardBg }}
      >
        {children}
      </div>
    </div>
  );
}

export default function GrowthImpact() {
  return (
    <section className="w-full bg-[#0D0318] text-white py-20">
      <div className="max-w-5xl mx-auto px-8 ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The Story of Our <span className="text-[#6A07FF]">Growth & Impact</span>
        </h2>
        <p className="text-gray-300 mb-16 max-w-2xl">
          With every milestone, we continue to drive real impact—helping companies
          scale, streamline, and succeed.
        </p>

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-5 text-left gap-4 mb-4">
          {/* 60% LEFT */}
          <Card className="col-span-3">
            <div className="w-full h-64 relative rounded-xl overflow-hidden mb-4">
              <Image
                src="/assets/Home/Dashboard-1.png"
                alt="Dashboard preview"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">
              All-in-One Dashboard
            </h3>
            <p className="text-gray-300">
              Manage everything from a single, intuitive interface.
            </p>
          </Card>

          {/* 40% RIGHT */}
          <Card className="col-span-2">
            <div className="space-y-3 mb-6">
              {[
                { name: "Alex Hales", email: "alexhales@gmail.com" },
                { name: "Matthew Faris", email: "matthewfaris@gmail.com" },
                { name: "Georgia", email: "georgia@gmail.com" },
              ].map((u, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-full px-3 py-2 bg-[#2B1555]/70 backdrop-blur border border-white/10"
                >
                  <div>
                    <p className="text-sm font-medium">{u.name}</p>
                    <p className="text-xs text-gray-400">{u.email}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#6A07FF] flex items-center justify-center text-xs">
                    →
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-1">
              Seamless Integrations
            </h3>
            <p className="text-sm text-gray-300">
              Connect effortlessly with others.
            </p>
          </Card>
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-2 gap-4">
          {/* LEFT STACK */}
          <div className="flex flex-col gap-4">
            <Card>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold mb-1">Team Collaboration</h4>
                  <p className="text-gray-300 text-sm">
                    Built-in communication & sharing
                  </p>
                </div>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#0D0318]" />
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#0D0318]" />
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#0D0318]" />
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold mb-1">Regular Updates</h4>
                  <p className="text-gray-300 text-sm">
                    Continuous improvements & new features
                  </p>
                </div>
                <span className="text-4xl text-[#6A07FF]">↻</span>
              </div>
            </Card>
          </div>

          {/* RIGHT TALL */}
          <Card>
            <div className="w-full h-28 rounded-xl bg-gradient-to-br from-[#2A0E61] to-[#120824] flex items-center justify-center mb-4">
              <span className="text-gray-400 text-sm">Chart</span>
            </div>
            <h4 className="font-semibold mb-1">Real-Time Analytics</h4>
            <p className="text-gray-300 text-sm">
              Drive decisions with powerful insights
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
