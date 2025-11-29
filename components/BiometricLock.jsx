"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, Lock, ScanLine } from "lucide-react";

export default function BiometricLock({ onUnlock }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let interval;
    if (scanning && !unlocked) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUnlocked(true);
            setTimeout(onUnlock, 800); // Delay for success animation
            return 100;
          }
          return prev + 2; // Speed of scan
        });
      }, 20);
    } else if (!scanning && !unlocked) {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [scanning, unlocked, onUnlock]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-[#030303] flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Scanner Ring */}
        <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          
          {/* Scanning Beam */}
          <AnimatePresence>
            {scanning && !unlocked && (
              <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute left-0 w-full h-1 bg-[#00F0FF] shadow-[0_0_20px_#00F0FF]"
              />
            )}
          </AnimatePresence>

          {/* Fingerprint Icon */}
          <div 
            className="relative z-10 cursor-pointer"
            onMouseDown={() => setScanning(true)}
            onMouseUp={() => setScanning(false)}
            onMouseLeave={() => setScanning(false)}
            onTouchStart={() => setScanning(true)}
            onTouchEnd={() => setScanning(false)}
          >
            <Fingerprint 
              className={`w-32 h-32 transition-all duration-300 ${
                unlocked ? "text-[#00F0FF]" : scanning ? "text-white scale-95" : "text-white/20"
              }`} 
              strokeWidth={1}
            />
          </div>

          {/* Progress Circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="2"
              strokeDasharray="754"
              strokeDashoffset={754 - (754 * progress) / 100}
              className="transition-all duration-100"
            />
          </svg>
        </div>

        {/* Status Text */}
        <div className="mt-12 text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-widest uppercase">
            {unlocked ? "Identity Verified" : scanning ? "Scanning..." : "Biometric Lock"}
          </h2>
          <p className="text-white/40 font-mono text-xs">
            {unlocked ? "ACCESS GRANTED" : "HOLD FINGERPRINT TO UNLOCK"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
