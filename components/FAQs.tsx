"use client";
import { useState } from "react";
import SectionText from "@/components/ui/SectionText";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What do we do?",
    answer:
      "We provide a powerful SaaS platform designed to help businesses streamline operations, automate workflows, and gain actionable insights. Our cloud-based solution ensures efficiency, scalability, and seamless integration with your existing tools.",
  },
  {
    id: 2,
    question: "How do I get started?",
    answer:
      "Getting started is simple. Sign up for a free account, choose your plan, and follow the onboarding guide. Our team is available to help you set up and configure the platform to match your business needs.",
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform and decide if it's the right fit before committing to a paid plan.",
  },
  {
    id: 4,
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. Once cancelled, you'll retain access until the end of your current billing period. No hidden fees or penalties.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, AmEx), PayPal, and bank transfers for annual plans. All transactions are secured with industry-standard encryption.",
  },
  {
    id: 6,
    question: "Can I use on multiple devices?",
    answer:
      "Absolutely. Your account can be accessed from any device — desktop, tablet, or mobile. We also offer team plans that allow multiple users to collaborate under a single account.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="FAQ"
      className="w-full py-16 sm:py-20 md:py-[90px] px-4 sm:px-6"
      style={{
        background: "#0D0318",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <SectionText
        title="Your Questions?"
        highlight="Answered"
        description="Clear, concise answers to the questions you ask most. Fast, actionable, and right to the point every single time."
      />

      {/* Accordion */}
      <div className="max-w-[880px] mx-auto flex flex-col gap-2 sm:gap-[10px]">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: isOpen
                  ? "linear-gradient(145deg, rgba(30,12,60,0.98) 0%, rgba(20,8,45,1) 100%)"
                  : "#07020f",
                border: "2px solid #180c36",
              }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full bg-transparent border-none cursor-pointer px-4 sm:px-5 py-5 sm:py-6 md:py-7 flex items-center gap-3 sm:gap-4 text-left"
              >
                {/* Chevron */}
                <svg
                  width="16"
                  height="16"
                  className="sm:w-[18px] sm:h-[18px] shrink-0"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="#c3b5f3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-base sm:text-lg md:text-xl font-normal text-[rgb(211,205,221)] leading-snug">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: isOpen ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p className="text-sm sm:text-base text-white/70 leading-relaxed m-0 px-4 sm:px-5 pb-5 pl-8 sm:pl-12 md:pl-[60px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}