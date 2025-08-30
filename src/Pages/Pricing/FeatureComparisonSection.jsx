import React from "react";
import { motion } from "framer-motion";

// Dummy plans and features – make sure to replace or import the real ones
const plans = [
  { title: "Basic" },
  { title: "Standard" },
  { title: "Advanced" },
  { title: "Custom" },
];

const comparisonFeatures = [
  "Basic Support",
  "Unlimited Projects",
  "Collaboration Tools",
  "Custom Branding",
  "Priority Support",
  "Advanced Analytics",
  "White Labeling",
  "User Roles & Permissions",
  "Automated Workflows",
  "Dedicated Manager",
  "API Access",
  "Custom Integrations",
  "Enterprise SLA",
];

const comparisonMatrix = [
  [true, false, false, true],
  [false, true, true, true],
  [false, true, true, true],
  [true, true, true, true],
  [false, true, true, true],
  [false, true, true, true],
  [false, false, true, true],
  [false, true, true, true],
  [false, true, true, true],
  [false, true, true, true],
  [false, false, true, true],
  [false, true, true, true],
  [false, false, false, true],
];

const getFeatureIcon = (included) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className={`font-bold ${included ? "text-emerald-400" : "text-gray-600"}`}
  >
    {included ? "✓" : "—"}
  </motion.span>
);

const FeatureComparisonSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-24">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-purple-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Detailed Feature Breakdown
      </motion.h2>

      <motion.div
        className="overflow-x-auto rounded-xl border border-purple-800/30 backdrop-blur-xl shadow-lg pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ pointerEvents: "auto" }} // make sure gradient overlays don't block
      >
        <table className="w-full text-sm md:text-base text-left text-white">
          <thead className="bg-[#1b1b29] text-purple-300">
            <tr>
              <th className="px-6 py-4 font-semibold">Feature</th>
              {plans.map((p, i) => (
                <th key={i} className="px-6 py-4 font-semibold text-center">
                  {p.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#12121b]/60 divide-y divide-purple-800/20">
            {comparisonFeatures.map((feature, i) => (
              <tr key={i} className="text-gray-300">
                <td className="px-6 py-4 whitespace-nowrap">{feature}</td>
                {comparisonMatrix[i].map((included, j) => (
                  <td key={j} className="px-6 py-4 text-center font-bold">
                    {getFeatureIcon(included)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default FeatureComparisonSection;
