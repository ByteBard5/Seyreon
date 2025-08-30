import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan anytime based on your needs.",
  },
  {
    question: "What is included in the Basic Plan?",
    answer:
      "The Basic Plan includes lead gen chatbot, basic support bot, monthly performance report, and basic analytics.",
  },
  {
    question: "Is support available for all plans?",
    answer:
      "Yes, but the level of support varies — higher-tier plans offer priority and dedicated support.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "We support CRM, WhatsApp, Social Media Platforms, Google Calendar, GHL, Make.com, and more depending on the plan.",
  },
  {
    question: "Can I white-label your solution?",
    answer:
      "Yes, Standard and Advanced plans include basic and advanced white-labeling features.",
  },
  {
    question: "What is a Voice Assistant in your plans?",
    answer:
      "Voice Assistants are AI-powered bots that can handle interactions through voice commands.",
  },
  {
    question: "Do you provide onboarding or training?",
    answer:
      "Yes, especially for Advanced and Custom plans. We ensure your team is fully onboarded.",
  },
  {
    question: "What is SLA Agreement in the Custom plan?",
    answer:
      "It ensures performance guarantees, support timelines, and uptime commitments for enterprise clients.",
  },
  {
    question: "Can I get a demo before purchasing?",
    answer:
      "Absolutely, just contact us and we’ll schedule a personalized demo.",
  },
  {
    question: "Is there a setup fee?",
    answer: "Yes it is. Setup fee apply for every plans.",
  },
  {
    question: "How does the Performance Report work?",
    answer:
      "You’ll receive monthly insights into user interactions, leads, and conversion metrics.",
  },
  {
    question: "What is the difference between monthly and yearly pricing?",
    answer:
      "Yearly plans offer a discounted rate compared to monthly billing. It’s more cost-effective if you plan to stay long-term.",
  },
  {
    question: "Can bots book appointments for my clients?",
    answer:
      "Yes, the Standard plan includes an appointment booking bot with calendar sync.",
  },
  {
    question: "What is A/B testing?",
    answer:
      "It allows you to test different flows or messages to optimize performance.",
  },
  {
    question: "How secure is your automation platform?",
    answer:
      "We follow industry-standard encryption and offer compliance features in Advanced and Custom plans.",
  },
  {
    question: "Do you offer custom automation solutions?",
    answer:
      "Yes. Our Custom plan is designed for businesses with unique workflows or integration needs. Contact us for a tailored solution.",
  },
  {
    question: "Can I migrate my old bot to your platform?",
    answer: "Yes, migration support is included in the Custom plan.",
  },
  {
    question: "Do you offer agency white-label partnerships?",
    answer:
      "Yes, our Custom plan offers complete white labeling including branding and dashboard customization.",
  },
  {
    question: "Is there onboarding support available?",
    answer:
      "All plans include onboarding assistance, with higher-tier plans receiving priority and in-depth guidance.",
  },
];

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-purple-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.3 }}
            className="border border-purple-700/40 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              className="w-full text-left px-6 py-4 bg-[#1b1b29] text-white font-medium flex justify-between items-center"
            >
              {faq.question}
              <span className="text-purple-400 text-xl">
                {activeFAQ === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {activeFAQ === index && (
                <motion.div
                  key="content"
                  initial={{
                    opacity: 0,
                    scaleY: 0.95,
                    clipPath: "inset(0% 0% 100% 0%)",
                  }}
                  animate={{
                    opacity: 1,
                    scaleY: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  exit={{
                    opacity: 0,
                    scaleY: 0.95,
                    clipPath: "inset(0% 0% 100% 0%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1], // cubic-bezier easeOutQuint
                  }}
                  className="px-6 py-4 text-gray-300 bg-[#12121b] origin-top overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
