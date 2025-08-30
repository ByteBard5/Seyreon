import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Basic",
    priceMonthly: 99,
    priceYearly: 79,
    features: [
      "Lead Gen Chatbot",
      "Basic Support Bot",
      "Monthly Performance Report",
      "Basic Analytics Dashboard",
      "Standard Email Integration",
      "Entry-Level Automation Setup",
    ],
    popular: false,
  },
  {
    title: "Standard",
    priceMonthly: 149,
    priceYearly: 129,
    features: [
      "Everything in Basic",
      "Appointment Booking Bot",
      "CRM Integration",
      "Google Calendar & WhatsApp Sync",
      "Advanced Lead Filtering",
      "Voice Assistant (1 Language)",
      "Team Collaboration Tools",
      "Brand Styling Options",
      "Basic White Labeling",
    ],
    popular: true,
  },
  {
    title: "Advanced",
    priceMonthly: 229,
    priceYearly: 199,
    features: [
      "Everything in Standard",
      "Custom System Architecture",
      "AI-Powered Voice Assistants",
      "GHL + Make Integration",
      "A/B Testing + Insights Dashboard",
      "Dedicated Automation Engineer",
      "Priority Support",
      "Advanced White Labeling",
    ],
    popular: false,
  },
  {
    title: "Custom",
    priceMonthly: null,
    priceYearly: null,
    features: [
      "Everything in Advanced",
      "Unlimited Bot Assistants",
      "Full-Scale Voice + Chat Combo Systems",
      "Enterprise-Grade Backend Automation",
      "Custom Branding & Dashboards",
      "Team Training & Onboarding",
      "Migration Support",
      "SLA Agreement",
      "Complete White Labeling",
    ],
    popular: false,
  },
];

const PricingCards = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="max-w-6xl mx-auto relative z-10">
      {/* Toggle Button */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex rounded-full border border-purple-600 overflow-hidden shadow-md backdrop-blur-md">
          <motion.button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 transition text-sm md:text-base font-medium ${
              !isYearly ? "bg-purple-600 text-white" : "text-purple-400"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Monthly
          </motion.button>
          <motion.button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 transition text-sm md:text-base font-medium ${
              isYearly ? "bg-purple-600 text-white" : "text-purple-400"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Yearly
          </motion.button>
        </div>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.02,
              y: -10,
              boxShadow: "0px 25px 50px rgba(128, 90, 213, 0.3)",
            }}
            className="relative rounded-2xl border border-purple-800/30 backdrop-blur-lg bg-white/5 p-8 overflow-hidden group flex flex-col justify-between"
          >
            {/* Most Popular Tag */}
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-purple-700 text-xs font-semibold px-3 py-1 rounded-full z-10 animate-pulse shadow-md ring-1 ring-purple-400/30">
                Most Popular
              </div>
            )}

            {/* Background Shine (not blocking interaction) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-1000 z-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-xl rotate-12 animate-[shine_2s_linear_infinite]"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                {plan.title}
              </h3>
              <div className="text-4xl font-extrabold mb-4">
                {plan.priceMonthly ? (
                  <>
                    ${isYearly ? plan.priceYearly : plan.priceMonthly}
                    <span className="text-base font-medium text-gray-400 ml-1">
                      /mo
                    </span>
                  </>
                ) : (
                  <span className="text-lg text-gray-400 font-medium">
                    Custom Pricing
                  </span>
                )}
              </div>

              <ul className="text-gray-300 space-y-2 mb-6 text-sm md:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="relative z-10">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="mt-auto w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
