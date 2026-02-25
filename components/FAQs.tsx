"use client";

import { useState } from "react";
import SectionText from "@/components/ui/SectionText"
type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What do we do?",
    answer:
      "We provide powerful SaaS platforms designed to help businesses streamline operations, automate workflows, and gain actionable insights. Our cloud-based solutions ensure efficiency, scalability, and seamless integration with your existing tools.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Sign up, choose a plan that fits your needs, and start managing your business operations from a single dashboard.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. We offer a free trial so you can explore the platform and its features before committing to a paid plan.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime from your account settings. Your access will remain active until the end of the billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, and supported online payment methods depending on your region.",
  },
  {
    question: "Can I use on multiple devices?",
    answer:
      "Yes. Your account can be accessed across multiple devices securely with real-time sync.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id='FAQ' className="bg-[#0b0614] text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
         <SectionText
  title="Your Questions?"
  highlight="Answered"
  description="Find the answers you need, clearly and quickly—no extra hassle."
/>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0b2e] to-[#0f0720]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}