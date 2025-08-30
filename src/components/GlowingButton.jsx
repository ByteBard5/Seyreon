import { useState } from "react";

export default function GlowingButton({ label }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative px-8 py-3 text-lg font-semibold text-white bg-black border-2 border-pink-500 rounded-full overflow-hidden`}
    >
      <span
        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 
          ${
            hover
              ? "animate-[spin_1s_linear_infinite]"
              : "animate-[spin_4s_linear_infinite]"
          }`}
        style={{ filter: "blur(8px)", zIndex: -1 }}
      />
      {label}
    </button>
  );
}
