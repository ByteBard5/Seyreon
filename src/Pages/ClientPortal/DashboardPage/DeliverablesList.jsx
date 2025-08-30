import React from "react";
import { motion } from "framer-motion";

const DeliverablesList = ({ deliverables }) => {
  return (
    <div className="bg-[#1b1b29] text-white px-6 pb-20 pt-0">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading with shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          What You’ll Receive
        </motion.h2>

        {/* Deliverables Content */}
        {deliverables ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="prose prose-invert text-gray-300 leading-relaxed text-left"
            dangerouslySetInnerHTML={{ __html: deliverables }}
          />
        ) : (
          <p className="text-gray-400 italic">No deliverables listed yet.</p>
        )}
      </div>
    </div>
  );
};

export default DeliverablesList;
