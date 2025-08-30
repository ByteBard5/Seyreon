// /pages/Services/WhyChooseSeyreon.jsx
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const qualities = [
  {
    title: "Results that Scale",
    text: "Every automation system is built for impact — more leads, higher conversion, and sustainable growth.",
  },
  {
    title: "Seamless Integrations",
    text: "We don't just build bots. We connect Make.com, Voiceflow, GHL, Apps Script, and more — into one system.",
  },
  {
    title: "Built Around You",
    text: "We tailor every automation to your exact workflow, saving your team time and making scaling effortless.",
  },
  {
    title: "Fast Turnarounds",
    text: "We work fast. Most systems are live in days, not weeks. Get results without waiting months.",
  },
  {
    title: "Long-Term Support",
    text: "Our team sticks with you. We don’t vanish after delivery — we help iterate and evolve.",
  },
  {
    title: "Call Assistant Expertise",
    text: "We build voice-based assistants that qualify, convert, and follow up — all through smart conversations.",
  },
  {
    title: "Proactive Issue Handling",
    text: "We monitor, diagnose, and solve issues before they affect your growth or user experience.",
  },
  {
    title: "Privacy & Data Security",
    text: "Seyreon builds with trust — everything is compliant, secure, and private by design.",
  },
  {
    title: "Future-Proof Systems",
    text: "Our automations evolve with your business. Scalable, modular, and adaptable as you grow.",
  },
];

const WhyChooseSeyreon = () => {
  return (
    <motion.section
      className="py-24 px-6 text-center max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Why Big Companies Choose Seyreon
      </h2>
      <div className="grid md:grid-cols-3 gap-10 text-left relative">
        {qualities.map((q, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={false}
            className="w-full"
          >
            <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition transform hover:-translate-y-1 hover:scale-[1.03] duration-300 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {q.title}
              </h3>
              <p className="text-gray-300 line-clamp-3 overflow-hidden text-ellipsis">
                {q.text}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseSeyreon;
