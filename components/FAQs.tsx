"use client";
import { useState } from "react";
import SectionText from "@/components/ui/SectionText"
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
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      style={{
        width: "100%",
        background: "#0D0318",
        padding: "90px 24px 100px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        boxSizing: "border-box",
      }}
    > <SectionText
                   title="Your Questions?"
                   highlight="Answered"
                   description="Clear answers to common questions. Straight to the point."
                 />
      

      {/* Accordion */}
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              style={{
                background: isOpen
                  ? "linear-gradient(145deg, rgba(30,12,60,0.98) 0%, rgba(20,8,45,1) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: isOpen
                  ? "1px solid rgba(130,80,200,0.25)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.25s, background 0.25s",
              }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(faq.id)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  textAlign: "left",
                }}
              >
                {/* Chevron */}
                <div
                 
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 10 10"
                    fill="none"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.4,
                  }}
                >
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
                <p
                  style={{
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.75,
                    margin: 0,
                    padding: "0 20px 20px 60px",
                  }}
                >
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