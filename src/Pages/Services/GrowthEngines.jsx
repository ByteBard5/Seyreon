import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Link } from "react-router-dom";

const data = [
  {
    name: "No Program",
    Referrals: 9,
    Engagement: 30,
  },
  {
    name: "With Referral Engine",
    Referrals: 27,
    Engagement: 72,
  },
];

const GrowthEngagement = () => {
  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-white px-6 pt-28 pb-16 -mt-[100px]">
      {/* HERO SECTION */}
      <div className="relative h-[360px] md:h-[440px] flex flex-col justify-center items-center text-center px-4 mb-20">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Growth & Engagement Engines
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Skyrocket engagement with gamified systems, loyalty programs, and
            viral flows that users love to share and interact with.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Modern growth isn’t just about ads — it’s about turning your users
          into advocates. Our systems are built to multiply reach, incentivize
          loyalty, and keep your brand top-of-mind through smart automation that
          feels personal. From referral tracking to viral loops, we engineer
          systems that don’t just get clicks — they get shares, signups, and
          sales.
        </p>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-white mb-4">
            What We Build:
          </h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-3 text-lg">
            <li>
              Referral Programs with link tracking, rewards, and leaderboard
              gamification
            </li>
            <li>
              Loyalty Systems that automatically reward repeat actions
              (purchases, logins, engagement)
            </li>
            <li>
              Contest Engines with automatic validation, winner selection, and
              social sharing prompts
            </li>
            <li>
              Viral Chatbot Flows that encourage users to refer friends directly
              from WhatsApp, IG DM, etc.
            </li>
            <li>
              Social Comment Trackers that assign points for likes, follows,
              tags, and shares
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Platforms & Stack:
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
            <li>GHL for form tracking, SMS/email follow-ups, and CRM sync</li>
            <li>Make.com for logic flows across platforms</li>
            <li>Instagram & Facebook APIs to track social engagement</li>
            <li>
              Voiceflow & ManyChat for multi-platform chatbot gamification
            </li>
            <li>Custom dashboards to view engagement data in real-time</li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Referral Systems Performance Comparison
          </h2>
          <div className="w-full h-[360px] bg-[#1b1b29] p-6 rounded-xl shadow-xl">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 30, bottom: 20, left: 0 }}
              >
                <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e1e2e", border: "none" }}
                />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey="Referrals" barSize={30} fill="#8b5cf6">
                  <LabelList dataKey="Referrals" position="top" fill="#fff" />
                </Bar>
                <Line
                  type="monotone"
                  dataKey="Engagement"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Why It Works:
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
            <li>
              <strong>Human Psychology-Based:</strong> People love being
              rewarded — we build systems that use this to your advantage.
            </li>
            <li>
              <strong>Self-Scaling:</strong> Each user brings another. That’s
              exponential growth — without increasing ad spend.
            </li>
            <li>
              <strong>Trackable & Transparent:</strong> Every action, point, and
              reward is logged — keeping users engaged and motivated.
            </li>
            <li>
              <strong>Works Across Platforms:</strong> Whether it’s IG comments,
              WhatsApp messages, or email clicks — we track it all.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let’s Build You a Growth Engine
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            Whether it’s viral loops, affiliate systems, or gamified DMs — we
            make your brand unforgettable.
          </p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
              Talk to an Automation Expert
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GrowthEngagement;
