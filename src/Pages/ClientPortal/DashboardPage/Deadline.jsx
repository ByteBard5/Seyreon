import React from "react";
import { motion } from "framer-motion";
import { Hourglass } from "lucide-react";

const Deadline = ({ date }) => {
  // Convert ISO date to "21 July, 2025" format
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-[#1b1b29] text-white px-6 pb-20 pt-0">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animate entire block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center rounded-2xl p-10 shadow-lg border border-white/10 backdrop-blur-sm"
          style={{
            background: "linear-gradient(135deg, #2c2c3a, #1a1a28)",
          }}
        >
          {/* Icon + Text Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Hourglass size={48} className="mb-2 text-blue-400 animate-pulse" />

            <h3 className="text-2xl font-semibold uppercase tracking-wider mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              Final Deadline
            </h3>

            {/* Plain white date */}
            <p className="text-4xl font-bold mt-2 text-white">
              {formattedDate}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Deadline;
