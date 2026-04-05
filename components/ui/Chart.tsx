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
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={chartRef}
      className="rounded-3xl p-4 sm:p-6 border border-purple-500/20 w-full"
      style={{
        background:
          "radial-gradient(120% 120% at 85% 0%, rgba(28, 8, 57, 1) 0%, rgba(13,3,24,0.9) 55%, #0D0318 85%)",
      }}
    >
      {/* Title */}
      <div className="text-base sm:text-lg md:text-[23px] font-semibold text-[#EFE5FC] mb-4 sm:mb-5 leading-snug">
        Average Weekly Stat of Subscription Growth
      </div>

      <div className="flex gap-3 sm:gap-5 items-end">
        {/* Y Axis */}
        <div className="flex flex-col justify-between h-[120px] sm:h-[150px] md:h-[180px] pb-6 sm:pb-7">
          {[100, 80, 60, 40, 20].map((v) => (
            <span key={v} className="text-[10px] sm:text-xs md:text-sm text-[#EFE5FC] leading-none">
              {v}
            </span>
          ))}
        </div>

        {/* Bars */}
        <div className="flex items-end gap-1.5 sm:gap-3 md:gap-[22px] h-[130px] sm:h-[160px] md:h-[200px] flex-1">
          {barData.map((item, i) => {
            const maxHeight = typeof window !== "undefined" && window.innerWidth < 640 ? 120 : 180;
            const finalHeight = (item.value / 100) * maxHeight;

            return (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center gap-1 sm:gap-2 justify-end"
              >
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
                <span className="text-[9px] sm:text-xs md:text-sm text-[#EFE5FC]">
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