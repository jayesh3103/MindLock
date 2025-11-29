"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Smartphone, MessageSquare, Brain, AlertOctagon, Shield, Zap, Activity, Cpu, Network, Wifi } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";
import ScrambleText from "@/components/ScrambleText";
import CyberGlitchText from "@/components/CyberGlitchText";

const FEATURES = [
  {
    id: 1,
    title: "Encrypted Cognitive Memory",
    desc: "Every conversation is turned into an embedding, encrypted with AES-256, and stored in our secure vault. Even if the database leaks, your memories remain unreadable.",
    icon: <Lock className="w-12 h-12 text-[#00F0FF]" />,
    specs: ["AES-256 ENCRYPTION", "ZERO-KNOWLEDGE", "OFFLINE FIRST"]
  },
  {
    id: 2,
    title: "Local Decryption Only",
    desc: "Decryption happens only on your device using your personal key. We operate on a Zero Trust architecture — we never see your raw data.",
    icon: <Smartphone className="w-12 h-12 text-[#bd00ff]" />,
    specs: ["CLIENT-SIDE KEYS", "NO CLOUD DECRYPT", "DEVICE BOUND"]
  },
  {
    id: 3,
    title: "Therapy Continuity",
    desc: "MindLock remembers emotional context from past sessions, picking up exactly where you left off to provide consistent, human-like support.",
    icon: <MessageSquare className="w-12 h-12 text-[#00F0FF]" />,
    specs: ["CONTEXT WINDOW: 128K", "VECTOR STORE", "SEMANTIC SEARCH"]
  },
  {
    id: 4,
    title: "Emotion-Aware AI",
    desc: "Our engine tracks sentiment, tone, and stress levels in real-time, adjusting its responses to be more empathetic or analytical as needed.",
    icon: <Brain className="w-12 h-12 text-[#bd00ff]" />,
    specs: ["SENTIMENT ANALYSIS", "TONE MATCHING", "ADAPTIVE EQ"]
  },
  {
    id: 5,
    title: "Crisis Detection",
    desc: "Advanced pattern recognition detects critical emotional distress and can alert professional help — but only with your explicit prior consent.",
    icon: <AlertOctagon className="w-12 h-12 text-[#00F0FF]" />,
    specs: ["PATTERN RECOGNITION", "REAL-TIME ALERTS", "USER CONSENT"]
  },
];

export default function FeaturesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_top,#00F0FF_0%,transparent_30%)] opacity-10 blur-[120px] pointer-events-none" />

      {/* System Status Ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#030303]/90 backdrop-blur-md border-t border-white/10 z-50 py-2 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap text-xs font-mono text-white/50"
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> SYSTEM ONLINE</span>
              <span className="flex items-center gap-2"><Activity className="w-3 h-3" /> NETWORK: SECURE</span>
              <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> ENCRYPTION: ACTIVE</span>
              <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> LATENCY: 12ms</span>
              <span className="flex items-center gap-2"><Wifi className="w-3 h-3" /> SYNC: ENABLED</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40 relative z-10"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-mono tracking-widest">
            SYSTEM CAPABILITIES v2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Advanced <span className="text-[#00F0FF] text-glow">Cognitive Security</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            A suite of features designed to protect your mind and your data. <br />
            <span className="text-white">Powered by military-grade encryption.</span>
          </p>
        </motion.div>

        <div className="space-y-40 relative pb-20">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#00F0FF]/20 to-transparent hidden md:block -z-10" />

          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-20 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <motion.div 
                style={{ y: i % 2 === 0 ? y : 0 }} 
                className="flex-1 w-full group"
              >
                <PerspectiveTilt className="glass-panel-ultra aspect-video rounded-[2rem] flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,240,255,0.15)]">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-linear-to-br from-[#00F0FF]/5 via-transparent to-[#bd00ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Holographic Icon */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-[#00F0FF] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative bg-[#030303]/80 p-12 rounded-full border border-[#00F0FF]/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] group-hover:scale-110 group-hover:border-[#00F0FF]/60 transition-all duration-500">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Tech Specs Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-col gap-2">
                      {feature.specs.map((spec, idx) => (
                        <div key={idx} className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-1 rounded border border-[#00F0FF]/20 w-fit">
                          <ScrambleText text={spec} />
                        </div>
                      ))}
                    </div>
                    <Activity className="w-6 h-6 text-[#00F0FF]/50 animate-pulse" />
                  </div>
                </PerspectiveTilt>
              </motion.div>

              {/* Text Side */}
              <div className="flex-1 space-y-8 relative">
                <div className="absolute top-20 left-0 text-[12rem] font-bold text-white/2 -z-10 select-none font-mono">
                  0{feature.id}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-[#00F0FF]" />
                  <div className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase">
                    Feature 0{feature.id}
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  <CyberGlitchText text={feature.title} />
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-light max-w-lg">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
