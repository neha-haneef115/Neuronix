"use client";
import SectionText from "@/components/ui/SectionText"
import Image from "next/image";
import { FaFacebookF, FaStar, FaXTwitter } from "react-icons/fa6";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  daysAgo: string;
  platform: "facebook" | "twitter";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lois Lane",
    role: "Customs Officer, LA",
    image: "/avatar1.jpg",
    text: "Managing financial performance has never been easier. The real-time income and expense tracking allows us to make quick and informed decisions.",
    daysAgo: "2 days ago",
    platform: "facebook",
  },
  {
    id: 2,
    name: "Josh Harry",
    role: "Marketing Expert, LA",
    image: "/avatar2.jpg",
    text: "A must-have for any business looking to scale! The analytics and automation features have streamlined our operations, saving us both time and resources.",
    daysAgo: "2 weeks ago",
    platform: "twitter",
  },
  {
    id: 3,
    name: "Amelia Harris",
    role: "Lead Officer, CA",
    image: "/avatar3.jpg",
    text: "The customer satisfaction module is a game changer! We can now track feedback trends and make data-driven improvements.",
    daysAgo: "5 days ago",
    platform: "facebook",
  },
  {
    id: 4,
    name: "Kesher Kher",
    role: "Banker, NY",
    image: "/avatar4.jpg",
    text: "This dashboard has completely redefined our financial tracking. The real-time updates and revenue insights help us stay ahead of market trends.",
    daysAgo: "6 days ago",
    platform: "twitter",
  },
];
export default function Testimonials() {
  return (
    <section className="relative w-full py-24 bg-[#0D0318] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0430] via-[#0D0318] to-black opacity-80" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
       <SectionText
  title="Hear It from Those"
  highlight="Who Matter Most"
  description="See what our customers have to say about their experiences. Real stories, straight from the people who matter most."
/>
        {/* Cards */}
        <div className="mt-16 flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[350px] max-w-[350px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left relative"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-4">
                <div className="bg-white/10 p-2 rounded-full text-white text-sm">
                  {item.platform === "facebook" ? (
                    <FaFacebookF />
                  ) : (
                    <FaXTwitter />
                  )}
                </div>

                <span className="text-xs text-gray-400">
                  {item.daysAgo}
                </span>
              </div>

              {/* Text */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.text}
              </p>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}