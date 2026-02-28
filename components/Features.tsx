"use client";
import { useState } from "react";
import SectionText from "@/components/ui/SectionText"
type Tab = "subscription" | "payments" | "discounts" | "transactions";

const subscriptions = [
  { name: "Zoom", icon: "Z", plan: "Yearly Subscription", change: "+0.8%", color: "#2D8CFF" },
  { name: "Adobe XD", icon: "Ax", plan: "Monthly Subscription", change: "+2.5%", color: "#FF61F6" },
  { name: "Notion", icon: "N", plan: "Yearly Subscription", change: "+0.3%", color: "#E8E8E8" },
  { name: "Google Drive", icon: "G", plan: "Monthly Subscription", change: "+0.9%", color: "#34A853" },
  { name: "Discord", icon: "D", plan: "Yearly Subscription", change: "+1.2%", color: "#5865F2" },
];

const barData = [
  { day: "Sat", value: 65 },
  { day: "Sun", value: 45 },
  { day: "Mon", value: 80 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 70 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 85 },
];

export default function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("subscription");

  const tabs = [
    { key: "subscription", label: "Manage Subscription" },
    { key: "payments", label: "Payment Methods" },
    { key: "discounts", label: "Discounts & Coupons" },
    { key: "transactions", label: "Transaction History" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0215 0%, #0d0320 50%, #080113 100%)",
      color: "#EFE5FC",
      fontFamily: "'Poppins', 'SF Pro Display', -apple-system, sans-serif",
      padding: "48px 40px",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

          <SectionText
          title="All-in-One Financial Toolkit for"
          highlight="Modern Businesses"
          description="Manage your revenue, expenses, and profits effortlessly with a powerful, all-in-one financial solution designed for today's businesses."
        />

        {/* Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 48,
          paddingBottom: 0,
        }}>
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as Tab)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: active ? "#ecebebff" : "rgba(255,255,255,0.45)",
                  fontSize: 20,
                  fontWeight: active ? 500 : 400,
                  paddingBottom: 16,
                  position: "relative",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                {tab.label}
                {active && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: "linear-gradient(90deg, #a855f7, #7c3aed)",
                    borderRadius: 2,
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {activeTab === "subscription" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>

            {/* ROW 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

              {/* Left: Subscription list */}
              <div style={{
                background: "linear-gradient(145deg, rgba(168,85,247,0.12) 0%, rgba(124,58,237,0.04) 100%)",
                border: "1px solid rgba(168,85,247,0.2)",
                borderRadius: 24,
                padding: "24px 20px",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {subscriptions.map((item) => (
                    <div key={item.name} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 14,
                      padding: "12px 16px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          background: "rgba(0,0,0,0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                          color: item.color,
                          border: `1px solid ${item.color}33`,
                          flexShrink: 0,
                        }}>
                          {item.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 500, color: "#EFE5FC" }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{item.plan}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#a78bfa" }}>{item.change}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>Since Last Month</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Copy + stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <h2 style={{
                    fontSize: 34,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}>
                    Stay in Control of Your<br />Subscription
                  </h2>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0, maxWidth: 360 }}>
                    Easily manage your plan, upgrade or downgrade anytime,
                    and stay on top of your billing—you're in full control.
                  </p>
                  <button style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#af75fd",
                    border: "none",
                    borderRadius: 999,
                    color: "#EFE5FC",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "11px 28px",
                    cursor: "pointer",
                    width: "fit-content",
                    letterSpacing: "0.01em",
                  }}>
                    Learn More &nbsp;›&nbsp;›
                  </button>
                </div>

                <div style={{ display: "flex", gap: 48, paddingTop: 8 }}>
                  <div>
                    <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>45%</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8, lineHeight: 1.4 }}>
                      Saving in the<br />last month
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>55%</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8, lineHeight: 1.4 }}>
                      Avoiding the<br />Unnecessary cost
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

              {/* Left: Copy */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h2 style={{
                  fontSize: 34,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}>
                  From Data to Growth:<br />Metrics That Matter
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0, maxWidth: 340 }}>
                  Gain real-time insights, track key metrics, and
                  optimize strategies for sustainable growth
                </p>
                <button style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#af75fd",
                  border: "none",
                  borderRadius: 999,
                  color: "#EFE5FC",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "11px 28px",
                  cursor: "pointer",
                  width: "fit-content",
                  letterSpacing: "0.01em",
                }}>
                  Get Started &nbsp;›&nbsp;›
                </button>
              </div>

              {/* Right: Chart */}
              <div style={{
                background: "linear-gradient(145deg, rgba(168,85,247,0.1) 0%, rgba(124,58,237,0.03) 100%)",
                border: "1px solid rgba(168,85,247,0.18)",
                borderRadius: 24,
                padding: "24px 24px 20px",
              }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#EFE5FC", marginBottom: 20, lineHeight: 1.4 }}>
                  Average Weekly Stat of Subscription Growth
                </div>

                {/* Chart */}
                <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                  {/* Y-axis */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: 180,
                    paddingBottom: 24,
                  }}>
                    {[100, 80, 60, 40, 20].map(v => (
                      <span key={v} style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1 }}>{v}</span>
                    ))}
                  </div>

                  {/* Bars */}
                  <div style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 10,
                    flex: 1,
                    height: 204,
                  }}>
                    {barData.map((item) => (
                      <div key={item.day} style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        height: "100%",
                        justifyContent: "flex-end",
                      }}>
                        <div style={{
                          width: "100%",
                          height: `${(item.value / 100) * 180}px`,
                          background: `linear-gradient(to top, #af75fd ${(item.value / 100) * 100}%, #eae3fa ${(item.value / 100) * 100}%)`,
                          borderRadius: "6px 6px 0 0",
                          opacity: 0.85,
                        }} />
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{item.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab !== "subscription" && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 300,
            color: "rgba(255,255,255,0.3)",
            fontSize: 15,
          }}>
            {tabs.find(t => t.key === activeTab)?.label} — Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}