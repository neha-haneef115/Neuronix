"use client";
import { useRef, useEffect } from "react";
import SectionText from "@/components/ui/SectionText"
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  daysAgo: string;
  platform: "facebook" | "twitter" | "instagram";
  stars: number;
}

interface PlatformIconProps {
  platform: "facebook" | "twitter" | "instagram";
}

interface CardProps {
  item: Testimonial;
}

interface ScrollRowProps {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
  offsetLeft?: number;
}

/* ── Icons ── */
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterXIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

function PlatformIcon({ platform }: PlatformIconProps) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {platform === "facebook" ? <FacebookIcon />
        : platform === "twitter" ? <TwitterXIcon />
        : <InstagramIcon />}
    </div>
  );
}

/* ── Data ── */
const row1: Testimonial[] = [
  {
    id: 1, name: "Lois Lane", role: "Customs Officer, LA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Managing financial performance has never been easier. The real-time income and expense tracking allows us to make quick and informed decisions.",
    daysAgo: "2 days ago", platform: "instagram", stars: 4,
  },
  {
    id: 2, name: "Josh Harry", role: "Marketing Expert, LA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "A must-have for any business looking to scale! The analytics and automation features have streamlined our operations, saving us both time and resources.",
    daysAgo: "2 weeks ago", platform: "twitter", stars: 5,
  },
  {
    id: 3, name: "Amiza Haris", role: "Land Owner, CA",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The customer satisfaction module is a game changer! We can now track feedback instantly and make data-driven improvements.",
    daysAgo: "5 days ago", platform: "facebook", stars: 4,
  },
  {
    id: 4, name: "Sara Kim", role: "Product Manager, NY",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Incredible platform! The subscription management tools have saved us hours of work every week. The interface is clean and beautifully designed.",
    daysAgo: "3 days ago", platform: "twitter", stars: 5,
  },
  {
    id: 5, name: "Mark Evans", role: "CEO, SF",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "Our team loves this dashboard. Everything from billing to analytics is in one place and the insights have genuinely changed how we operate.",
    daysAgo: "1 week ago", platform: "instagram", stars: 5,
  },
  {
    id: 6, name: "Priya Nair", role: "Finance Lead, TX",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "The reporting features are outstanding. We now generate monthly reports in minutes instead of days. Truly transformative for our entire team.",
    daysAgo: "4 days ago", platform: "facebook", stars: 5,
  },
];

const row2: Testimonial[] = [
  {
    id: 7, name: "Laura Elis", role: "Accountant, NY",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Integration with our existing systems was a breeze. The automation tools drastically reduced manual effort across all departments.",
    daysAgo: "7 days ago", platform: "instagram", stars: 5,
  },
  {
    id: 8, name: "Keshov Kher", role: "Banker, NY",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "This dashboard has completely redefined our financial tracking. The real-time updates and revenue insights help us stay ahead of market trends.",
    daysAgo: "5 days ago", platform: "twitter", stars: 4,
  },
  {
    id: 9, name: "Erik Peter", role: "Hotel Owner, CA",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Managing financial performance has never been easier. The real-time income and expense tracking allows us to make quick and informed decisions.",
    daysAgo: "1 weeks ago", platform: "facebook", stars: 4,
  },
  {
    id: 10, name: "Mia Torres", role: "Entrepreneur, FL",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    text: "Absolutely love this toolkit! It helped me get a clear picture of my business finances and make smarter investment decisions every single month.",
    daysAgo: "2 days ago", platform: "twitter", stars: 5,
  },
  {
    id: 11, name: "David Chen", role: "Startup Founder, WA",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The platform is intuitive, fast, and reliable. Our finance team productivity improved dramatically after switching to this solution.",
    daysAgo: "3 weeks ago", platform: "instagram", stars: 5,
  },
  {
    id: 12, name: "Aisha Patel", role: "CFO, Chicago",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
    text: "Best financial dashboard we have ever used. The granular control over subscriptions and payments is exactly what our growing business needed.",
    daysAgo: "6 days ago", platform: "facebook", stars: 5,
  },
];

/* ── Card ── */
function TestimonialCard({ item }: CardProps) {
  return (
    <div style={{
      minWidth: 320,
      maxWidth: 320,
      flexShrink: 0,
      background: "linear-gradient(145deg, rgba(30,12,60,0.95) 0%, rgba(20,8,45,0.98) 100%)",
      border: "1px solid rgba(130,80,200,0.18)",
      borderRadius: 22,
      padding: "20px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
    }}>
      {/* Top: icon + date */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <PlatformIcon platform={item.platform} />
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontWeight: 400 }}>
          {item.daysAgo}
        </span>
      </div>

      {/* Review text */}
      <p style={{
        fontSize: 13.5,
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.75)",
        margin: "0 0 20px",
        flex: 1,
      }}>
        {item.text}
      </p>

      {/* Bottom: avatar + stars */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src={item.avatar}
            alt={item.name}
            width={44}
            height={44}
            style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
          />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{item.name}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{item.role}</div>
          </div>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: 3 }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="13" height="13" viewBox="0 0 24 24"
              fill={i < item.stars ? "#FBBF24" : "rgba(255,255,255,0.18)"}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Scrolling Row ── */
const CARD_W = 320;
const GAP = 20;

function ScrollRow({ items, direction = "left", speed = 30, offsetLeft = 0 }: ScrollRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const totalWidth = (CARD_W + GAP) * items.length;
    if (direction === "right") posRef.current = -totalWidth;

    const tick = () => {
      if (!pausedRef.current) {
        if (direction === "left") {
          posRef.current -= speed / 60;
          if (posRef.current <= -totalWidth) posRef.current = 0;
        } else {
          posRef.current += speed / 60;
          if (posRef.current >= 0) posRef.current = -totalWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [direction, speed, items.length]);

  const doubled = [...items, ...items];

  return (
    <div
      style={{ overflow: "hidden", width: "100%" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: GAP,
          willChange: "transform",
          paddingLeft: offsetLeft,
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function Testimonials() {
  return (
    <section style={{
      width: "100%",
      background: "#0D0318",
      padding: "80px 0 90px",
      overflow: "hidden",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>

      <SectionText
               title="Hear It from Those"
               highlight="Who Matter Most"
               description="See what our customers have to say about their experiences. Real stories, straight from the people who matter most."
             />

      {/* Row 1 — left scroll, starts at edge */}
      <div style={{ marginBottom: 20 }}>
        <ScrollRow items={row1} direction="left" speed={30} />
      </div>

      {/* Row 2 — right scroll, offset so it starts partially cut on the left */}
      <div style={{ transform: "translateX(-180px)" }}>
        <ScrollRow items={row2} direction="right" speed={28} />
      </div>

    </section>
  );
}