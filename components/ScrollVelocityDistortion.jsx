"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useVelocity, useSpring, useTransform, motion } from "framer-motion";

export default function ScrollVelocityDistortion({ children }) {
  const contentRef = useRef(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Smooth out the velocity to avoid jitter
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Transform velocity into skew and scale values
  // Skew: faster scroll = more skew
  const skewY = useTransform(smoothVelocity, [-1000, 0, 1000], [-2, 0, 2]);
  
  // Scale: faster scroll = slight stretch vertically, squash horizontally
  const scaleY = useTransform(smoothVelocity, [-1000, 0, 1000], [1.02, 1, 1.02]);
  const scaleX = useTransform(smoothVelocity, [-1000, 0, 1000], [0.98, 1, 0.98]);

  // RGB Split effect opacity based on velocity
  const rgbSplitOpacity = useTransform(smoothVelocity, [-1000, 0, 1000], [0.5, 0, 0.5]);
  const rgbOffset = useTransform(smoothVelocity, [-1000, 0, 1000], ["-4px", "0px", "4px"]);
  const rgbNegOffset = useTransform(smoothVelocity, [-1000, 0, 1000], ["4px", "0px", "-4px"]);

  return (
    <>
      {/* RGB Split Overlay (Global) */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen overflow-hidden"
        style={{ opacity: rgbSplitOpacity }}
      >
         <div className="absolute inset-0 bg-transparent" style={{ textShadow: `2px 0 red, -2px 0 blue` }} />
      </motion.div>

      <motion.div
        ref={contentRef}
        className="w-full h-full transform-gpu"
        style={{
          skewY,
          scaleY,
          scaleX,
          transformOrigin: "center center"
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
