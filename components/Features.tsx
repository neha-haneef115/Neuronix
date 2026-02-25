"use client";
import { useState } from "react";

type Tab =
  | "subscription"
  | "payments"
  | "discounts"
  | "transactions";

export default function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("subscription");

  return (
    <main className="relative min-h-screen bg-[#0a0215] text-white px-6 py-20 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.22),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(168,85,247,0.15),transparent_40%)]" />

      <section className="relative max-w-6xl mx-auto space-y-16">

        {/* Tabs */}
        <div className="relative flex justify-center gap-20 text-[15px] font-medium text-gray-400 border-b border-white/10 pb-5">
          {[
            { key: "subscription", label: "Manage Subscription" },
            { key: "payments", label: "Payment Methods" },
            { key: "discounts", label: "Discounts & Coupons" },
            { key: "transactions", label: "Transaction History" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as Tab)}
              className={`relative pb-4 transition duration-300 ${
                activeTab === tab.key
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
              {tab.label}

              {activeTab === tab.key && (
                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-gradient-to-r from-violet-400 to-purple-500" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "subscription" && <ManageSubscription />}
      </section>
    </main>
  );
}

/* ---------------- MANAGE SUBSCRIPTION ---------------- */

function ManageSubscription() {
  return (
    <div className="grid md:grid-cols-2 gap-20 items-center">

      {/* LEFT PANEL */}
      <div className="relative rounded-[30px] p-[1px] bg-gradient-to-br from-violet-500/30 via-purple-500/10 to-transparent">
        <div className="rounded-[30px] bg-gradient-to-br from-[#180a2d] to-[#0d041c] p-7 backdrop-blur-xl">

          <div className="space-y-5">
            {[
              { name: "Zoom", plan: "Yearly Subscription", change: "+0.8%" },
              { name: "Adobe XD", plan: "Monthly Subscription", change: "+2.5%" },
              { name: "Notion", plan: "Yearly Subscription", change: "+0.3%" },
              { name: "Google Drive", plan: "Monthly Subscription", change: "+0.9%" },
              { name: "Discord", plan: "Yearly Subscription", change: "+1.2%" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center rounded-2xl px-6 py-4 bg-white/[0.04] hover:bg-white/[0.07] transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-black/40 flex items-center justify-center text-xs font-medium text-gray-200">
                    {item.name[0]}
                  </div>

                  <div>
                    <p className="text-[15px] font-medium text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.plan}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[15px] font-medium text-white">
                    {item.change}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Since Last Month
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="space-y-10">

        <div className="space-y-6">
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-tight">
            Stay in Control of Your Subscription
          </h2>

          <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
            Easily manage your plan, upgrade or downgrade anytime,
            and stay on top of your billing—you're in full control.
          </p>

          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium shadow-xl hover:opacity-90 transition duration-300">
            Learn More  ››
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-20 pt-6">
          <div>
            <p className="text-[52px] font-semibold tracking-tight">
              45%
            </p>
            <p className="text-gray-400 text-sm mt-2 leading-snug">
              Saving in the<br />last month
            </p>
          </div>

          <div>
            <p className="text-[52px] font-semibold tracking-tight">
              55%
            </p>
            <p className="text-gray-400 text-sm mt-2 leading-snug">
              Avoiding the<br />Unnecessary cost
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}