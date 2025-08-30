import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const TermsAndConditions = () => {
  return (
    <div className="-mt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29]">
      {/* Hero Section */}
      <section className="h-[calc(100vh+100px)] pt-[100px] flex flex-col justify-center items-center text-center px-6 relative">
        {/* Background Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            {...fadeInUp}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-medium"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            Everything you need to know — written like a human, not a lawyer.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-14">
        {[
          {
            title: "1. What You’re Getting",
            content:
              "We build powerful, custom automation systems tailored to your business. From AI assistants to full-scale backend workflows — you're getting a solution designed to save time, boost performance, and scale with you.",
          },
          {
            title: "2. How We Work Together",
            content:
              "Seyreon is a collaboration. We rely on your input, feedback, and clarity to build something that truly fits your needs. You provide the access, we bring the tech — and together, we automate smart.",
          },
          {
            title: "3. What You Own",
            content:
              "Once it’s built and approved, it’s yours. The workflows, bots, logic — everything. You can run it, modify it, or grow it. No lock-ins. No nonsense.",
          },
          {
            title: "4. Changes & Revisions",
            content:
              "Need tweaks? No problem. Most packages include 1-2 rounds of feedback. If you need big changes beyond the original scope, we’ll quote it fairly — and let you know before anything’s billed.",
          },
          {
            title: "5. Refund Policy",
            content:
              "We start working fast, which means we also lock in quickly. So while we don’t offer refunds after we begin, we do promise this: we’ll deliver something you’re genuinely proud of.",
          },
          {
            title: "6. Respecting Your Data",
            content:
              "We treat your data like it’s our own — securely, privately, and only accessed for setup and testing. Full compliance. Full transparency. For more, read our Privacy Policy.",
          },
          {
            title: "7. Need Support?",
            content:
              "We’re here when you need us. Whether it’s technical help, new features, or just questions about your system — email us anytime at support@seyreon.com.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-400">{section.content}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default TermsAndConditions;
