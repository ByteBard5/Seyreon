// /pages/Services/ServiceList.jsx
import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NeuralHexagon from "../../components/NeuralHexagon";

const serviceGroups = [
  {
    title: "AI Assistant",
    desc: "Launch powerful AI Assistants — from website chatbots to smart call assistants — that engage, qualify, support, and convert users 24/7.",
    features: [
      "Lead Magnet Chatbots",
      "Sales Closer Bots",
      "24/7 Support Assistants",
      "AI-Powered Call Assistants",
    ],
    reverse: false,
    link: "/services/ai-assistant",
  },
  {
    title: "Business Automation Workflows",
    desc: "We eliminate manual tasks by automating your entire business process — from CRM updates to customer follow-ups, flawlessly integrated.",
    features: [
      "CRM & Email Integrations",
      "Operations Workflow Builders",
      "Testimonial & Feedback Collection",
    ],
    reverse: true,
    link: "/services/business-automation",
  },
  {
    title: "Growth & Engagement Engines",
    desc: "Skyrocket engagement with gamified systems, loyalty programs, and viral flows that users love to share and interact with.",
    features: ["Referral & Loyalty Automation", "Contest + Viral Flow Bots"],
    reverse: false,
    link: "/services/growth-engines",
  },
  {
    title: "Custom Systems for Unique Needs",
    desc: "Got a crazy idea or specific process? We’ll build your automation system from scratch — tailored perfectly to your business logic.",
    features: ["Architecture from Scratch", "Ongoing Support & Expansion"],
    reverse: true,
    link: "/services/custom-systems",
  },
];

const ServiceList = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient &&
        serviceGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: group.reverse ? -160 : 160 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.8, 0.25, 1],
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <section className="grid grid-cols-1 md:grid-cols-12 items-center justify-center gap-12 px-4 md:px-10 lg:px-20 py-20">
              <div
                className={`col-span-12 md:col-span-5 flex justify-center ${
                  group.reverse ? "md:order-last" : ""
                }`}
              >
                <div className="w-[320px] h-[320px] rounded-3xl bg-[#1a1a1a]/60 backdrop-blur-md shadow-md hover:shadow-purple-500/20 transition duration-500 p-4 flex items-center justify-center">
                  <Suspense
                    fallback={<div className="text-gray-500">Loading...</div>}
                  >
                    <NeuralHexagon />
                  </Suspense>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-4">
                  {group.title}
                </h2>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {group.desc}
                </p>
                <ul className="list-disc pl-5 text-gray-400 space-y-1 mb-6">
                  {group.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Link to={group.link}>
                  <button className="glow-button">Explore More</button>
                </Link>
              </div>
            </section>
          </motion.div>
        ))}
    </>
  );
};

export default ServiceList;
