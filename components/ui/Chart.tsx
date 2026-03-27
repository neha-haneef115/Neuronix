import React, { useEffect, useState, useRef } from "react";

const barData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 80 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 70 },
  { day: "Sun", value: 50 },
];

const Chart = () => {
  const [animate, setAnimate] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting); // true when in view, false when out
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) observer.observe(chartRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
    background:  "radial-gradient(120% 120% at 85% 0%, rgba(28, 8, 57, 1) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)",
                border: "1px solid rgba(168,85,247,0.2)",
        borderRadius: 24,
        padding: "24px 24px 20px",
      }}
    >
      <div
        style={{
          fontSize: 23,
          fontWeight: 600,
          color: "#EFE5FC",
          marginBottom: 20,
          lineHeight: 1.4,
        }}
      >
        Average Weekly Stat of Subscription Growth
      </div>

      <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
        {/* Y Axis */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 180,
            paddingBottom: 28,
          }}
        >
          {[100, 80, 60, 40, 20].map((v) => (
            <span
              key={v}
              style={{ fontSize: 14, color: "#EFE5FC", lineHeight: 1 }}
            >
              {v}
            </span>
          ))}
        </div>

        {/* Bars */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 22,
            height: 200,
            flex: 1,
          }}
        >
          {barData.map((item, i) => {
            const finalHeight = (item.value / 100) * 180;

            return (
              <div
                key={item.day}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  justifyContent: "flex-end",
                }}
              >
                {/* BAR */}
                <div
                  style={{
                    width: "100%",
                    height: animate ? finalHeight : 0,
                    transition: `height 0.6s ease ${i * 0.1}s`,
                    background:
                      "linear-gradient(to bottom, #d8b4fe, #a855f7, #7c3aed, #4c1d95)",
                    borderRadius: 6,
                  }}
                />

                {/* DAY */}
                <span style={{ fontSize: 14, color: "#EFE5FC" }}>
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chart;