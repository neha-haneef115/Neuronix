"use client";
import React, { useState, useEffect, useRef } from "react";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1000,
  decimals = 1,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTime: number | null = null;
    let animationFrame: number;

    // ease-out function
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOut(progress);
      setDisplay(parseFloat((value * eased).toFixed(decimals)));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            cancelAnimationFrame(animationFrame);
            startTime = null;
            animationFrame = requestAnimationFrame(animate);
          } else {
            // optional: reset to 0 when scrolled out
            setDisplay(0);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref.current);
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration, decimals]);

  return (
    <div ref={ref}>
      {prefix}
      {display}
      {suffix}
    </div>
  );
}