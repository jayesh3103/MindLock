"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CognitiveTunnel() {
  const tunnelRef = useRef(null);
  const ringsRef = useRef([]);

  useEffect(() => {
    if (!tunnelRef.current) return;

    const rings = ringsRef.current;
    
    // Initial setup
    gsap.set(rings, {
      z: (i) => -i * 200,
      scale: 1,
      opacity: (i) => 1 - (i / rings.length),
    });

    // Scroll animation
    gsap.to(rings, {
      z: "+=1000", // Move rings forward
      opacity: 0,
      scale: 2,
      stagger: {
        each: 0.1,
        repeat: -1,
        from: "end",
      },
      scrollTrigger: {
        trigger: tunnelRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

  }, []);

  return (
    <div ref={tunnelRef} className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center preserve-3d">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) ringsRef.current[i] = el;
            }}
            className="absolute w-[300px] h-[300px] border border-[#00F0FF]/30 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            style={{
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white tracking-widest uppercase mix-blend-difference">
          Deep Dive
        </h2>
        <p className="text-[#00F0FF] text-sm tracking-[0.5em] mt-4">
          SCROLL TO ENCRYPT
        </p>
      </div>
    </div>
  );
}
