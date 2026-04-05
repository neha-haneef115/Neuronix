"use client";
import { useState } from "react";
import SectionText from "@/components/ui/SectionText";
import Chart from "@/components/ui/Chart";
import Button from "@/components/ui/Button";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

type Tab = "subscription" | "payments" | "discounts" | "transactions";

const subscriptions = [
  { name: "Zoom", icon: "/assets/Features/Zoom.png", plan: "Yearly Subscription", change: 0.8 },
  { name: "Adobe XD", icon: "/assets/Features/xd.png", plan: "Monthly Subscription", change: 2.5 },
  { name: "Notion", icon: "/assets/Features/notion.png", plan: "Yearly Subscription", change: 0.3 },
  { name: "Google Drive", icon: "/assets/Features/drive.png", plan: "Monthly Subscription", change: 0.9 },
  { name: "Discord", icon: "/assets/Features/discord.png", plan: "Yearly Subscription", change: 1.2 },
];

const cardBg =
  "radial-gradient(120% 120% at 85% 0%, rgba(28, 8, 57, 1) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)";

export default function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("subscription");

  const tabs: { key: Tab; label: string }[] = [
    { key: "subscription", label: "Manage Subscription" },
    { key: "payments", label: "Payment Methods" },
    { key: "discounts", label: "Discounts & Coupons" },
    { key: "transactions", label: "Transaction History" },
  ];

  return (
    <div
      id="Features"
      className="min-h-screen text-[#EFE5FC] px-4 sm:px-8 md:px-10 py-10 md:py-12"
      style={{
        background: "linear-gradient(135deg, #0a0215 0%, #0d0320 50%, #080113 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">

        <SectionText
          title="All-in-One Financial Toolkit for"
          highlight="Modern Businesses"
          description="Manage your revenue, expenses, and profits effortlessly with a powerful, all-in-one financial solution designed for today's businesses."
        />

        {/* ── Tabs ── */}
        <div className="flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto pb-0 mb-10 md:mb-12 border-b border-white/[0.08] scrollbar-none justify-start md:justify-center">
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative shrink-0 pb-4 text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                  active ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {tab.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-sm bg-gradient-to-r from-purple-500 to-violet-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Subscription Tab ── */}
        {activeTab === "subscription" && (
          <div className="flex flex-col gap-14 md:gap-[72px]">

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center">

              {/* Subscription list */}
              <div
                className="rounded-3xl p-4 sm:p-6 border border-purple-500/20"
                style={{ background: cardBg }}
              >
                <div className="flex flex-col gap-2 sm:gap-[10px]">
                  {subscriptions.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center bg-white/[0.04] rounded-2xl px-3 sm:px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 flex items-center justify-center shrink-0 overflow-hidden">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-[#EFE5FC]">{item.name}</div>
                          <div className="text-[10px] sm:text-[11px] text-white/40 mt-0.5">{item.plan}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <AnimatedNumber value={item.change} prefix="+" suffix="%" duration={1200} decimals={2} />
                        <div className="text-[10px] sm:text-[11px] text-white/30 mt-0.5">Since Last Month</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy + stats */}
              <div className="flex flex-col gap-6 md:gap-7 items-center md:items-start text-center md:text-left">
                <div className="flex flex-col gap-3 md:gap-4 items-center md:items-start">
                  <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.2] tracking-tight m-0">
                    Stay in Control of Your<br />Subscription
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed m-0 max-w-sm">
                    Easily manage your plan, upgrade or downgrade anytime,
                    and stay on top of your billing—you're in full control.
                  </p>
                  <div className="mt-1">
                    <Button $bg="#af75fd" $text="#240046">Learn More</Button>
                  </div>
                </div>

                <div className="flex gap-8 sm:gap-12 pt-2 justify-center md:justify-start">
                  <div>
                    <div className="text-3xl sm:text-[40px] font-bold tracking-tight leading-none">45%</div>
                    <div className="text-xs sm:text-sm text-white/80 mt-2 leading-snug">
                      Saving in the<br />last month
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-[40px] font-bold tracking-tight leading-none">55%</div>
                    <div className="text-xs sm:text-sm text-white/80 mt-2 leading-snug">
                      Avoiding the<br />Unnecessary cost
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

              {/* Copy */}
              <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.2] tracking-tight m-0 text-[#EFE5FC]">
                  From Data to Growth:<br />Metrics That Matter
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed m-0 max-w-sm">
                  Gain real-time insights, track key metrics, and optimize
                  strategies for sustainable growth
                </p>
                <div className="mt-1">
                  <Button $bg="#23123d" $text="#EFE5FC">Get Started</Button>
                </div>
              </div>

              {/* Chart */}
              <div className="w-full overflow-hidden">
                <Chart />
              </div>
            </div>

          </div>
        )}

        {/* ── Other tabs ── */}
        {activeTab !== "subscription" && (
          <div className="flex items-center justify-center h-64 text-white/30 text-sm">
            {tabs.find((t) => t.key === activeTab)?.label} — Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}