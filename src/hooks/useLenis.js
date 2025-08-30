// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
