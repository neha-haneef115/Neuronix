"use client";
import { useState } from "react";
import SectionText from "@/components/ui/SectionText"
import { IoIosArrowForward } from "react-icons/io";
type Tab = "subscription" | "payments" | "discounts" | "transactions";

const subscriptions = [
  { name: "Zoom", icon: "/assets/Features/Zoom.png", plan: "Yearly Subscription", change: "+0.8%" },
  { name: "Adobe XD", icon: "/assets/Features/xd.png", plan: "Monthly Subscription", change: "+2.5%" },
  { name: "Notion", icon: "/assets/Features/notion.png", plan: "Yearly Subscription", change: "+0.3%" },
  { name: "Google Drive", icon: "/assets/Features/drive.png", plan: "Monthly Subscription", change: "+0.9%" },
  { name: "Discord", icon: "/assets/Features/discord.png", plan: "Yearly Subscription", change: "+1.2%" },
];

const barData = [
  { day: "Sat", value: 65 },
  { day: "Sun", value: 45 },
  { day: "Mon", value: 80 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 70 },
  { day: "Thu", value: 60 },
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
                background:  "radial-gradient(120% 120% at 85% 0%, rgba(28, 8, 57, 1) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)",
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
  width: 48,
  height: 48,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  overflow: "hidden",
  
}}>
  <img
    src={item.icon}
    alt={item.name}
    style={{ width: 24, height: 24, objectFit: "contain" }}
  />
</div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 500, color: "#EFE5FC" }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{item.plan}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontSize: 16, fontWeight: 600, color: "#EFE5FC" }}>{item.change}</div>
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
                  <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 1.4, margin: 0, maxWidth: 360 }}>
                    Easily manage your plan, upgrade or downgrade anytime,
                    and stay on top of your billing—you're in full control.
                  </p>
   

<button
  style={{
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content", // 👈 important
    background: "#af75fd",
    border: "none",
    borderRadius: "999px",
    padding: "20px 24px", // 👈 balanced padding
    cursor: "pointer",
    fontSize: "19px",
    fontWeight: 600,
    letterSpacing: "0.01em",
  }}
>
  <div
    style={{
      marginRight: "6px",
      color: "#240046",
      whiteSpace: "nowrap", // 👈 prevents weird stretching
    }}
  >
    Learn More
  </div>

  <div
    style={{
      display: "flex",
      gap: "0.1px",
      alignItems: "center",
    }}
  >
    <IoIosArrowForward size={18} style={{ opacity: 0.3, color: "#240046" }} />
    <IoIosArrowForward size={18} style={{ opacity: 0.6, color: "#240046" }} />
    <IoIosArrowForward size={18} style={{ opacity: 1, color: "#240046" }} />
  </div>
</button>
                </div>

                <div style={{ display: "flex", gap: 48, paddingTop: 8 }}>
                  <div>
                    <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>45%</div>
                    <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginTop: 8, lineHeight: 1.4 }}>
                      Saving in the<br />last month
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>55%</div>
                    <div style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginTop: 8, lineHeight: 1.4 }}>
                      Avoiding the<br />Unnecessary cost
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "center" }}>

  {/* Left: Copy */}
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <h2 style={{
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 1.2,
      margin: 0,
      letterSpacing: "-0.02em",
      color: "#EFE5FC" // matching row 1
    }}>
      From Data to Growth:<br />Metrics That Matter
    </h2>
    <p style={{
      fontSize: 18, // match row 1 paragraph
      color: "rgba(255,255,255,0.5)", // match row 1
      lineHeight: 1.4,
      margin: 0,
      maxWidth: 420
    }}>
      Gain real-time insights, track key metrics, and
      optimize strategies for sustainable growth
    </p>
<button
  style={{
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content", // 👈 important
    background: "#23123d",
    border: "none",
    borderRadius: "999px",
    padding: "20px 24px", // 👈 balanced padding
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "0.01em",
  }}
>
  <div
    style={{
      marginRight: "6px",
      color: "#EFE5FC",
      whiteSpace: "nowrap", // 👈 prevents weird stretching
    }}
  >
   Get Started
  </div>

  <div
    style={{
      display: "flex",
      gap: "0.1px",
      alignItems: "center",
    }}
  >
    <IoIosArrowForward size={18} style={{ opacity: 0.3, color: "#EFE5FC" }} />
    <IoIosArrowForward size={18} style={{ opacity: 0.6, color: "#EFE5FC" }} />
    <IoIosArrowForward size={18} style={{ opacity: 1, color: "#EFE5FC" }} />
  </div>
</button>
  </div>

  {/* Right: Chart + stats */}
  <div style={{
    background: "linear-gradient(145deg, rgba(168,85,247,0.1) 0%, rgba(124,58,237,0.03) 100%)",
    border: "1px solid rgba(168,85,247,0.18)",
    borderRadius: 24,
    padding: "24px 24px 20px",
  }}>
    <div style={{ fontSize: 23, fontWeight: 600, color: "#EFE5FC", marginBottom: 20,lineHeight: 1.4 }}>
      Average Weekly Stat of Subscription Growth
    </div>

    {/* Chart */}
    <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
      {/* Y-axis */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 180,
        paddingBottom: 28,
      }}>
        {[100, 80, 60, 40, 20].map(v => (
          <span key={v} style={{ fontSize: 15, color: "#EFE5FC", lineHeight: 1 }}>{v}</span>
        ))}
      </div>

      {/* Bars + right stats */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        height: 204,
      }}>
        {/* Chart bars */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 30, height: "100%" }}>
          {barData.map((item) => (
            <div key={item.day} style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              justifyContent: "flex-end",
            }}>
              <div
  style={{
    width: "100%",
    height: `${(item.value / 100) * 180}px`,
    background: `linear-gradient(
      to top,
      #af75fd 0%,
      #af75fd ${item.value}%,
      #f1f0f5ff ${item.value}%,
      #f1f0f5ff 100%
    )`,
    borderRadius: "4px",
    opacity: 0.85,
  }}
/>
<span style={{ fontSize: 15, color: "#EFE5FC" }}>
  {item.day}
</span>
             
            </div>
          ))}
        </div>

       
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