// // src/components/PreLoader.jsx
// import { useEffect, useState } from "react";

// export default function PreLoader({ onFinish }) {
//   const [fadeOut, setFadeOut] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [pop, setPop] = useState(false);

//   useEffect(() => {
//     let start = Date.now();
//     const duration = 5000;

//     const interval = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const raw = elapsed / duration;

//       // Ease-out curve for natural fill
//       const eased = 1 - Math.pow(1 - raw, 3);
//       const percent = Math.min(eased * 100, 100);

//       setProgress(percent);

//       if (percent === 100) {
//         clearInterval(interval);

//         // Trigger pop glow
//         setPop(true);

//         // Wait for pop glow animation, then fade out
//         setTimeout(() => {
//           setFadeOut(true);
//           setTimeout(() => onFinish(), 700);
//         }, 500);
//       }
//     }, 50);

//     return () => clearInterval(interval);
//   }, [onFinish]);

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
//         fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       {/* Responsive Logo with pop effect */}
//       <img
//         src="/PreLoader.png"
//         alt="Seyreon Logo"
//         className={`w-40 sm:w-56 md:w-72 h-auto mb-12 ${
//           pop ? "animate-logoPop" : ""
//         }`}
//       />

//       {/* Responsive Neon Liquid Progress Bar */}
//       <div
//         className={`w-60 sm:w-72 md:w-80 lg:w-96 h-4 bg-gray-900 rounded-full overflow-hidden relative shadow-inner ${
//           pop ? "animate-popGlow" : ""
//         }`}
//       >
//         <div
//           className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all ease-linear"
//           style={{ width: `${progress}%`, transition: "width 50ms linear" }}
//         />

//         {/* Shimmer synced with progress */}
//         <div
//           className="absolute top-0 h-full w-24 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
//           style={{
//             left: `${progress - 20}%`,
//             transition: "left 50ms linear",
//           }}
//         />
//       </div>

//       {/* Extra styles */}
//       <style>
//         {`
//           @keyframes popGlow {
//             0% { box-shadow: 0 0 10px rgba(168,85,247,0.8); }
//             50% { box-shadow: 0 0 30px rgba(168,85,247,1), 0 0 60px rgba(59,130,246,0.9); }
//             100% { box-shadow: 0 0 10px rgba(168,85,247,0.8); }
//           }
//           .animate-popGlow {
//             animation: popGlow 0.5s ease-in-out;
//           }

//           @keyframes logoPop {
//             0% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(168,85,247,0.7)); }
//             50% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(168,85,247,1)) drop-shadow(0 0 40px rgba(59,130,246,0.9)); }
//             100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(168,85,247,0.7)); }
//           }
//           .animate-logoPop {
//             animation: logoPop 0.5s ease-in-out;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// src/components/PreLoader.jsx
import { useEffect, useState } from "react";

export default function PreLoader({ onFinish }) {
  const messages = [
    "Welcome to Seyreon",
    "Glad to see you here!",
    "Your AI journey starts now",
    "Innovation begins with you",
    "Hello from the CEO!",
    "Let’s build the future together",
    "Let’s build the future together",
    "Welcome aboard!",
    "Good to have you here",
    "AI made simple, just for you",
    "Seyreon welcomes you",
    "The future is intelligent",
    "Your success is our mission",
    "Hi there, ready to explore?",
    "Thanks for visiting us",
    "Smarter automation starts here",
    "A warm welcome to Seyreon",
    "We’re glad you stopped by",
    "Innovation at your fingertips",
    "Together, let’s create impact",
  ];

  const [typedText, setTypedText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [arcPath, setArcPath] = useState("");
  const [fontSize, setFontSize] = useState(64);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let i = 0;

    // --- Dynamic arc calculation ---
    const textLength = randomMessage.length;
    const arcWidth = 400 + textLength * 18;
    const centerX = 600;
    const leftX = centerX - arcWidth / 2;
    const rightX = centerX + arcWidth / 2;
    const d = `M ${leftX} 220 Q ${centerX} 0 ${rightX} 220`;
    setArcPath(d);

    // --- Dynamic font size ---
    if (textLength < 20) {
      setFontSize(72);
    } else if (textLength < 35) {
      setFontSize(64);
    } else {
      setFontSize(56);
    }

    // --- Typing effect ---
    const typingInterval = setInterval(() => {
      if (i < randomMessage.length) {
        setTypedText(randomMessage.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 800);
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  // --- Mouse Parallax Effect ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // rotate range (-10 to +10)
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setRotation({ x: y, y: -x });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Curved Floating & Pulsing Text */}
      <svg viewBox="0 0 1200 300" className="w-full max-w-7xl h-64 mb-6">
        <path id="curve" d={arcPath} fill="transparent" />
        <text
          fill="white"
          fontSize={fontSize}
          fontWeight="bold"
          textAnchor="middle"
          className="animate-floatGlow"
        >
          <textPath href="#curve" startOffset="50%">
            {typedText}
          </textPath>
        </text>
      </svg>

      {/* CEO Cartoon Image with Parallax Tilt */}
      <div
        className="relative w-64 sm:w-80 md:w-[26rem] transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <img
          src="/PreloaderCharacter.png"
          alt="CEO Character"
          className="w-full h-auto"
        />
        {/* Black gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Floating + Glow Animations */}
      <style>
        {`
          @keyframes floatGlow {
            0% {
              transform: translateY(0px);
              filter: drop-shadow(0 0 8px rgba(255,255,255,0.8))
                      drop-shadow(0 0 16px rgba(59,130,246,0.6));
            }
            50% {
              transform: translateY(-10px);
              filter: drop-shadow(0 0 16px rgba(255,255,255,1))
                      drop-shadow(0 0 32px rgba(59,130,246,0.9));
            }
            100% {
              transform: translateY(0px);
              filter: drop-shadow(0 0 8px rgba(255,255,255,0.8))
                      drop-shadow(0 0 16px rgba(59,130,246,0.6));
            }
          }
          .animate-floatGlow {
            animation: floatGlow 3.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
