import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { Link } from "react-router-dom";

const efficiencyData = [
  {
    name: "Before Automation",
    hoursSaved: 4,
    fill: "#4b5563",
  },
  {
    name: "After Automation",
    hoursSaved: 22,
    fill: "#a855f7",
  },
];

const CustomSystems = () => {
  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-white px-6 -mt-[100px] pt-32 pb-16">
      {/* HERO SECTION */}
      <div className="relative h-[360px] md:h-[440px] flex flex-col justify-center items-center text-center px-4 mb-20">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Custom Systems for Unique Needs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Your business isn’t cookie-cutter. Neither are our solutions. We
            craft end-to-end automations built precisely for your goals, tools,
            and workflows.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Off-the-shelf tools can only get you so far. When your workflows are
          unique, complex, or fast-scaling — you need systems designed from the
          ground up. At Seyreon, we build automation infrastructures tailored to
          your exact process, across sales, support, logistics, hiring,
          onboarding, or internal ops.
        </p>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Real-World Use Cases:
          </h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-3 text-lg">
            <li>
              <strong>Real Estate Booking Portals:</strong> Custom scheduling
              flows with agent alerts, property filters, and lead trackers.
            </li>
            <li>
              <strong>Sales + Call Routing Logic:</strong> AI qualifies and
              transfers based on criteria like location, language, or budget.
            </li>
            <li>
              <strong>Enterprise Feedback Loops:</strong> Auto-collects
              post-service feedback, scores NPS, routes follow-ups.
            </li>
            <li>
              <strong>Medical Workflow Builders:</strong> Patient intake,
              eligibility screening, and doctor scheduling in one flow.
            </li>
            <li>
              <strong>Multi-Language Operations:</strong> Global brands use
              language detection + auto-routing to different teams.
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Built With the Best Tech Stack:
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
            <li>Voiceflow + Custom LLMs for logic-heavy AI flows</li>
            <li>Make.com for cross-platform workflows</li>
            <li>
              Google Sheets, Calendar, Maps, and Apps Script for internal tool
              building
            </li>
            <li>CRMs like GoHighLevel, Pipedrive, HubSpot for data syncing</li>
            <li>Webhook + API integrations to link everything seamlessly</li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Time Saved by Custom Automations
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="95%"
              barSize={20}
              data={efficiencyData}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 25]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                clockWise
                dataKey="hoursSaved"
                cornerRadius={10}
              />
              <Legend
                iconSize={10}
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Why Choose Custom Over Templates:
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
            <li>
              <strong>100% Tailored to You:</strong> Your flow, your data, your
              stack — no compromises.
            </li>
            <li>
              <strong>Competitive Advantage:</strong> While others use generic
              bots, yours works exactly as your team does.
            </li>
            <li>
              <strong>Scale Without Bottlenecks:</strong> We build systems that
              can handle 100 or 100K users with equal ease.
            </li>
            <li>
              <strong>Security & Privacy Built-In:</strong> Custom workflows
              often mean better control over data handling and compliance.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let’s Build Something That’s Truly Yours
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            Whether it’s automating your onboarding, creating a lead-to-sale
            engine, or crafting an entirely new logic flow — we build it from
            scratch.
          </p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
              Start Building Your Custom System
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomSystems;
