import React from "react";
import { motion } from "framer-motion";
import { SiNotion } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa";

const ExternalLinks = ({ notion, drive }) => {
  if (!notion && !drive) return null;

  const links = [
    {
      label: "Notion Portal",
      icon: <SiNotion className="mr-2 text-white text-xl z-10" />,
      url: notion,
    },
    {
      label: "Google Drive Folder",
      icon: <FaGoogleDrive className="mr-2 text-white text-xl z-10" />,
      url: drive,
    },
  ];

  return (
    <div className="bg-[#1b1b29] px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-shimmer"
        >
          Project Links
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links
            .filter((link) => link.url)
            .map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex items-center justify-center px-6 py-5 rounded-2xl bg-[#26263a] shadow-xl border border-white/10 hover:shadow-2xl hover:border-indigo-400 hover:bg-[#2f2f47] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md group-hover:backdrop-blur-xl transition-all duration-300 pointer-events-none rounded-2xl" />
                <div className="flex items-center z-10 font-medium text-lg tracking-wide">
                  {link.icon}
                  {link.label}
                </div>
              </motion.a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;
