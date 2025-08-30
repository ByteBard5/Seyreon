import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const automationImpact = [
  { task: "CRM Updates", Manual: 8, Automated: 1 },
  { task: "Email Follow-ups", Manual: 10, Automated: 2 },
  { task: "Appointment Scheduling", Manual: 6, Automated: 0.5 },
  { task: "Feedback Collection", Manual: 4, Automated: 0.5 },
];

const BusinessAutomation = () => {
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
            Business Automation Workflows
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Eliminate repetitive tasks and connect your systems into one
            seamless engine.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto">
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Most businesses operate on fragmented tools: CRMs, email platforms,
          booking calendars, spreadsheets. This results in human error, wasted
          hours, and missed opportunities.
          <br />
          <br />
          We build custom automation workflows that unify all your systems —
          updating data, triggering emails, syncing calendars, and following up
          automatically — so your team focuses on what matters: growing the
          business.
        </p>

        <section className="mb-14">
          <h2 className="text-3xl font-semibold text-white mb-4">
            What Can Be Automated?
          </h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>CRM data sync between lead forms and sales pipelines</li>
            <li>Email/SMS follow-ups based on user behavior or form fills</li>
            <li>Automated scheduling and Google Calendar integration</li>
            <li>
              Post-meeting reminders, confirmations, and survey collection
            </li>
            <li>Auto-tagging and segmentation of contacts</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Why It Matters
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-lg">
            <li>
              <strong>Save 50–70% of admin time</strong> by cutting out
              repetitive tasks
            </li>
            <li>
              <strong>Eliminate human error</strong> with logic-driven flows
            </li>
            <li>
              <strong>Scale operations</strong> without increasing headcount
            </li>
            <li>
              <strong>Deliver faster response times</strong> and higher customer
              satisfaction
            </li>
          </ul>
        </section>

        {/* CHART */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-white mb-10">
            Automation vs Manual Time (in hours per week)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={automationImpact}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="task" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Manual"
                fill="#ef4444"
                radius={[6, 6, 0, 0]}
                name="Manual"
              />
              <Bar
                dataKey="Automated"
                fill="#10b981"
                radius={[6, 6, 0, 0]}
                name="Automated"
              />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* FINAL CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Free Up Your Team. Automate What Doesn’t Need Humans.
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            We'll design automation workflows tailored to your unique
            operations.
          </p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
              Book a Free Workflow Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessAutomation;
