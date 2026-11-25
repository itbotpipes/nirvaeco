"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";

interface ScrollContextType {
  getScrollY: () => number;
}

const ScrollContext = createContext<ScrollContextType>({
  getScrollY: () => 0,
});

export const useScrollMotion = () => useContext(ScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentY = window.scrollY;
      scrollYRef.current = currentY;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(currentY / docHeight, 0), 1) : 0;

      // Update the progress bar element directly via GPU transform (0 re-renders, 120fps smooth)
      const bar = document.getElementById("scroll-progress-bar");
      if (bar) {
        bar.style.transform = `scaleX(${progress})`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ getScrollY: () => scrollYRef.current }}>
      {/* Top 120fps Hardware-Accelerated Reading Progress Bar */}
      <div
        id="scroll-progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "#173826",
          zIndex: 9999,
          transformOrigin: "left center",
          transform: "scaleX(0)",
          willChange: "transform",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {children}
    </ScrollContext.Provider>
  );
}
