import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const PrivacyPolicy = () => {
  return (
    <div className="-mt-[100px] text-white bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29]">
      {/* HERO SECTION */}
      <section className="relative h-[calc(100vh+100px)] pt-[100px] px-6 flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse" />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your Data, Handled with Care
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            At Seyreon, your privacy isn’t a checkbox — it’s a promise.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        {[
          {
            title: "What We Collect (And Why)",
            text: `When you reach out or use our services, we may collect your name,
            email address, phone number, and business-related details — so we
            can actually help you. That’s all.`,
          },
          {
            title: "What We Don’t Do",
            list: [
              "No selling your data",
              "No spamming your inbox",
              "No hidden tracking tools",
              "Just honest, secure, respectful communication",
            ],
          },
          {
            title: "How We Use Your Info",
            text: `Your details help us serve you better — whether it's responding to
            your query, building your automation system, or keeping you in the
            loop about meaningful updates.`,
          },
          {
            title: "Where It’s Stored & How It’s Protected",
            text: `All your data is stored securely with industry-standard encryption.
            We never store anything we don’t need — and we’ll delete it
            instantly if you ask.`,
          },
          {
            title: "Your Rights — Always in Your Control",
            text: `You can contact us any time to:`,
            list: [
              "Access the data we have on you",
              "Update or correct your details",
              "Request full deletion",
            ],
            contact:
              "Just drop a message at support@seyreon.com or call +91 6398800516.",
          },
          {
            title: "No Cookies. No Surveillance.",
            text: `We don’t use cookies, tracking pixels, or third-party scripts to
            monitor you. You came here to explore solutions, not be followed
            around — and we respect that.`,
          },
          {
            title: "For Businesses, Not Kids",
            text: `Our services are designed for professionals and businesses. We
            don’t knowingly collect data from anyone under 13 — and we never
            target children.`,
          },
          {
            title: "When Things Change",
            text: `We occasionally improve this policy to reflect best practices. If we
            do, this page will be updated — no hidden changes, no fine print.`,
          },
          {
            title: "Have Questions?",
            text: `If anything’s unclear, or you simply want to check how your info is
            handled — just reach out. We’re transparent because that’s how trust
            is built.`,
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-purple-300">
              {section.title}
            </h2>
            {section.text && (
              <p className="text-gray-300 leading-relaxed">{section.text}</p>
            )}
            {section.list && (
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.contact && (
              <p className="text-gray-400 text-sm">{section.contact}</p>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
