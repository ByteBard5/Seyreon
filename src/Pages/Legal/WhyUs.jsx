import React from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="-mt-[100px] bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[calc(100vh+100px)] flex flex-col justify-center items-center text-center px-4 pt-[100px]">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why Work With Seyreon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            We don’t just build bots — we build systems that give you back your
            time, your focus, and your freedom.
          </p>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          We’re Not Just Another Automation Agency
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Systems That Work While You Sleep",
              text: "We build automation that runs 24/7 — qualifying leads, booking calls, sending follow-ups — without lifting a finger.",
            },
            {
              title: "A Tech Stack That Talks to Each Other",
              text: "We blend tools like Make, Voiceflow, GHL, WhatsApp, OpenAI, and Google — into one seamless brain that runs your ops.",
            },
            {
              title: "No More Manual Bottlenecks",
              text: "Your team shouldn't be copy-pasting leads, sending reminders, or chasing reviews. We eliminate busywork for good.",
            },
            {
              title: "Launch in Days, Not Months",
              text: "Our systems are lean and fast — no bloated builds or endless back-and-forth. We move fast and ship sharp.",
            },
            {
              title: "Human Support, Always",
              text: "You’ll have real humans behind your automation — guiding you, tweaking, evolving. We’re here even after go-live.",
            },
            {
              title: "Designed for Founders",
              text: "Every system we build is meant to reduce your stress, give you dashboards, alerts, and data that makes sense to *you*.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition transform hover:-translate-y-1 hover:scale-[1.03] duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST-BUILDING SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Happens When Automation Just… Works?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ Your team focuses on growth instead of tasks.
          <br />
          ✦ Your users get faster replies, smoother experiences.
          <br />
          ✦ Your business scales without scaling headaches.
          <br />
          <br />
          That’s what we bring — clarity, speed, and momentum.
        </motion.p>
      </section>

      {/* MINI TESTIMONIAL STYLE BLOCKS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Client Wins
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              name: "Healthcare Startup",
              result:
                "Built an AI call assistant that qualified 300+ leads/month — no agents required.",
            },
            {
              name: "Real Estate Brand",
              result:
                "Automated WhatsApp bot booked 80+ viewings/month and synced with Google Calendar.",
            },
            {
              name: "Ecom Founder",
              result:
                "Referral system + loyalty engine brought 40% more repeat purchases within 6 weeks.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c25]/70 backdrop-blur p-6 rounded-xl shadow-md border border-purple-800/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-purple-400 font-semibold text-sm mb-2">
                {item.name}
              </p>
              <p className="text-gray-300">{item.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Values (What We Stand For)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Transparency",
              text: "No hidden costs. No confusion. We’re open about what’s possible and what’s not — always.",
            },
            {
              title: "Speed with Quality",
              text: "We don’t drag timelines. But we never rush what matters. We balance launch speed with performance.",
            },
            {
              title: "Adaptability",
              text: "Tech moves fast — and so do we. Every system we build is ready to evolve with your needs.",
            },
            {
              title: "Client-First Thinking",
              text: "We’re not here to upsell. We’re here to build something useful. We care more about value than vanity.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
