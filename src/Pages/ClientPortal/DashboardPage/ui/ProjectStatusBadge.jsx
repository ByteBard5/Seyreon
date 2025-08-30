import React, { useEffect, useState } from "react";
import {
  NotebookPen,
  Code,
  Settings,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const ProjectStatusBadge = ({ projectStatus }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const statusLabels = [
    "Planning Initiated",
    "Development Underway",
    "Core Functionality Built",
    "Final Testing Phase",
    "Project Completed",
  ];

  const statusDescriptions = [
    "Gathering details & defining scope.",
    "Core automation structure being built.",
    "Logic, flows, and triggers implemented.",
    "Testing integrations and fixing bugs.",
    "Delivered and fully deployed.",
  ];

  const statusIcons = [
    <NotebookPen className="w-9 h-9 text-purple-400" />,
    <Code className="w-9 h-9 text-purple-400" />,
    <Settings className="w-9 h-9 text-purple-400" />,
    <FlaskConical className="w-9 h-9 text-purple-400" />,
    <CheckCircle2 className="w-9 h-9 text-purple-400" />,
  ];

  const getMaxStepIndex = () => {
    if (projectStatus >= 1) return 4;
    if (projectStatus >= 0.8) return 3;
    if (projectStatus >= 0.6) return 2;
    if (projectStatus >= 0.4) return 1;
    return 0;
  };

  const maxStep = getMaxStepIndex();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("project-status-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (
        rect.top < window.innerHeight - 100 &&
        rect.bottom > 100 &&
        activeIndex === -1
      ) {
        let i = 0;
        const interval = setInterval(() => {
          setActiveIndex((prev) => {
            if (prev + 1 >= maxStep + 1) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
          i++;
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, maxStep]);

  return (
    <section
      id="project-status-section"
      className="bg-[#1b1b29] text-white px-6 pb-20 pt-0"
    >
      <div className="max-w-5xl mx-auto pt-20 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          Current Project Status
        </h3>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-purple-500 via-purple-600 to-indigo-500 blur-sm z-0" />

          <div className="flex flex-col gap-28 relative z-10">
            {statusLabels.map((label, index) => {
              const isActive = activeIndex >= index;
              const alignment = index % 2 === 0 ? "left" : "right";

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center md:grid md:grid-cols-2 gap-6"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full z-20 shadow-md shadow-purple-600" />

                  {alignment === "left" ? (
                    <>
                      {/* Icon */}
                      <div className="flex justify-end pr-6">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center bg-[#22223a] border border-purple-500/30 transition-all duration-500 ${
                            isActive
                              ? "shadow-lg shadow-purple-500/40 scale-105"
                              : "opacity-30 grayscale"
                          }`}
                        >
                          {statusIcons[index]}
                        </div>
                      </div>

                      {/* Text */}
                      <div className="text-left pl-6">
                        <h4
                          className={`font-semibold text-2xl md:text-3xl mb-1 ${
                            isActive ? "text-purple-300" : "text-gray-500"
                          }`}
                        >
                          {label}
                        </h4>
                        <p
                          className={`text-[15px] md:text-base text-gray-400 max-w-xs transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {statusDescriptions[index]}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text */}
                      <div className="text-right pr-6">
                        <h4
                          className={`font-semibold text-2xl md:text-3xl mb-1 ${
                            isActive ? "text-purple-300" : "text-gray-500"
                          }`}
                        >
                          {label}
                        </h4>
                        <p
                          className={`text-[15px] md:text-base text-gray-400 max-w-xs ml-auto transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {statusDescriptions[index]}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-start pl-6">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center bg-[#22223a] border border-purple-500/30 transition-all duration-500 ${
                            isActive
                              ? "shadow-lg shadow-purple-500/40 scale-105"
                              : "opacity-30 grayscale"
                          }`}
                        >
                          {statusIcons[index]}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatusBadge;
