// src/components/MusicPlayer.jsx
import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa"; // 🎵 and ⏸ icons

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // default volume
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/Music.mp3" loop preload="auto" />

      <style>
        {`
          @keyframes pulseRing {
            0% {
              box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.6);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
            }
          }

          @keyframes pulseIcon {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.15);
            }
          }
        `}
      </style>

      {/* Transparent Floating Music Button */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-transparent border border-purple-500 
          text-purple-400 hover:text-white flex items-center justify-center transition-all duration-300 z-50
          ${playing ? "animate-[pulseRing_2s_infinite]" : ""}`}
        aria-label="Toggle Music"
      >
        <span className={playing ? "animate-[pulseIcon_1.5s_infinite]" : ""}>
          {playing ? <FaPause size={20} /> : <FaMusic size={20} />}
        </span>
      </button>
    </>
  );
}
