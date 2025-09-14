// src/components/PreLoader.jsx
import { useEffect, useState } from "react";

export default function PreLoader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    let start = Date.now();
    const duration = 5000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const raw = elapsed / duration;

      // Ease-out curve for natural fill
      const eased = 1 - Math.pow(1 - raw, 3);
      const percent = Math.min(eased * 100, 100);

      setProgress(percent);

      if (percent === 100) {
        clearInterval(interval);

        // Trigger pop glow
        setPop(true);

        // Wait for pop glow animation, then fade out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onFinish(), 700);
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Responsive Logo with pop effect */}
      <img
        src="/PreLoader.png"
        alt="Seyreon Logo"
        className={`w-40 sm:w-56 md:w-72 h-auto mb-12 ${
          pop ? "animate-logoPop" : ""
        }`}
      />

      {/* Responsive Neon Liquid Progress Bar */}
      <div
        className={`w-60 sm:w-72 md:w-80 lg:w-96 h-4 bg-gray-900 rounded-full overflow-hidden relative shadow-inner ${
          pop ? "animate-popGlow" : ""
        }`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all ease-linear"
          style={{ width: `${progress}%`, transition: "width 50ms linear" }}
        />

        {/* Shimmer synced with progress */}
        <div
          className="absolute top-0 h-full w-24 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            left: `${progress - 20}%`,
            transition: "left 50ms linear",
          }}
        />
      </div>

      {/* Extra styles */}
      <style>
        {`
          @keyframes popGlow {
            0% { box-shadow: 0 0 10px rgba(168,85,247,0.8); }
            50% { box-shadow: 0 0 30px rgba(168,85,247,1), 0 0 60px rgba(59,130,246,0.9); }
            100% { box-shadow: 0 0 10px rgba(168,85,247,0.8); }
          }
          .animate-popGlow {
            animation: popGlow 0.5s ease-in-out;
          }

          @keyframes logoPop {
            0% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(168,85,247,0.7)); }
            50% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(168,85,247,1)) drop-shadow(0 0 40px rgba(59,130,246,0.9)); }
            100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(168,85,247,0.7)); }
          }
          .animate-logoPop {
            animation: logoPop 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
