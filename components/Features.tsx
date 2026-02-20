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
    <main className="min-h-screen bg-[#0b0614] text-white px-6 py-16">
      <section className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            All-in-One Financial Toolkit for{" "}
            <span className="text-violet-400">Modern Businesses</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Manage subscriptions, payments, discounts, and transactions from
            one place.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 text-sm">
          <TabButton
            label="Manage Subscription"
            active={activeTab === "subscription"}
            onClick={() => setActiveTab("subscription")}
          />
          <TabButton
            label="Payment Methods"
            active={activeTab === "payments"}
            onClick={() => setActiveTab("payments")}
          />
          <TabButton
            label="Discounts & Coupons"
            active={activeTab === "discounts"}
            onClick={() => setActiveTab("discounts")}
          />
          <TabButton
            label="Transaction History"
            active={activeTab === "transactions"}
            onClick={() => setActiveTab("transactions")}
          />
        </div>

        {/* Content */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-[#1a0b2e] to-[#0f0720] border border-white/10">
          {activeTab === "subscription" && <ManageSubscription />}
          {activeTab === "payments" && <PaymentMethods />}
          {activeTab === "discounts" && <Discounts />}
          {activeTab === "transactions" && <Transactions />}
        </div>
      </section>
    </main>
  );
}

/* ---------------- UI PARTS ---------------- */

function TabButton({
  label,
  active,
  onClick,
}: {
    label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition ${
        active
          ? "bg-violet-600 text-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

/* ---------------- MANAGE SUBSCRIPTION ---------------- */

function ManageSubscription() {
    return (
    <div className="space-y-12">
      {/* Top */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Subscription list */}
        <div className="rounded-3xl p-6 bg-gradient-to-br from-[#1a0b2e] to-[#0f0720] border border-white/10">
          <ul className="space-y-5 text-sm">
            {[
              { name: "Zoom", change: "+0.8%" },
              { name: "Adobe XD", change: "+2.5%" },
              { name: "Notion", change: "-0.3%" },
              { name: "Google Drive", change: "+0.9%" },
              { name: "Discord", change: "+1.2%" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center border-b border-white/10 pb-3 last:border-none"
              >
                <div>
                  <p className="text-gray-200">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Monthly Subscription
                  </p>
                </div>
                <span className="text-violet-400">{item.change}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Control card */}
        <div className="rounded-3xl p-6 bg-gradient-to-br from-[#160a2b] to-[#0b0614] border border-white/10 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Stay in Control of Your Subscription
            </h3>
            <p className="text-gray-400 text-sm">
              Easily manage your plan, upgrade or downgrade anytime, and stay on
              top of your billing with full control.
            </p>
            <button className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition text-sm">
              Learn More →
            </button>
          </div>

          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-2xl font-bold">45%</p>
              <p className="text-xs text-gray-400">
                Saving in the last month
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">55%</p>
              <p className="text-xs text-gray-400">
                Avoiding unnecessary cost
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Metrics */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            From Data to Growth: Metrics That Matter
          </h3>
          <p className="text-gray-400 text-sm max-w-md">
            Gain real-time insights, track key metrics, and optimize strategies
            for sustainable growth.
          </p>
          <button className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition text-sm">
            Get Started →
          </button>
        </div>

        {/* Chart */}
        <div className="rounded-3xl p-6 bg-gradient-to-br from-[#1a0b2e] to-[#0f0720] border border-white/10">
          <h4 className="text-sm text-gray-300 mb-6">
            Average Weekly Stat of Subscription Growth
          </h4>

          <div className="flex items-end gap-3 h-36">
            {[70, 90, 80, 55, 65, 60, 85].map((h, i) => (
              <div
                key={i}
                className="w-6 rounded-lg bg-gradient-to-t from-violet-700 to-violet-400"
                style={{ height: `${h}%` }}
                />
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-4">
            {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- OTHER TABS (PLACEHOLDERS) ---------------- */

function PaymentMethods() {
    return <div className="text-gray-400">Payment methods UI goes here.</div>;
}

function Discounts() {
  return <div className="text-gray-400">Discounts & coupons UI goes here.</div>;
}


function Transactions() {
  return <div className="text-gray-400">Transaction history UI goes here.</div>;}