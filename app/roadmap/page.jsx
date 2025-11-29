"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, Smartphone, Watch, Cloud, Zap, Lock, Database, MessageSquare, Brain, ArrowRight, CheckCircle2, Circle } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";
import ScrambleText from "@/components/ScrambleText";

const ROADMAP_ITEMS = [
  {
    phase: "Phase 1: Foundation",
    status: "CURRENT",
    date: "Q4 2024",
    desc: "Establishing the core secure infrastructure and basic cognitive memory systems.",
    items: [
      { icon: <Lock className="w-4 h-4" />, text: "Zero-Knowledge Encryption Core", done: true },
      { icon: <Database className="w-4 h-4" />, text: "CyborgDB Integration", done: true },
      { icon: <MessageSquare className="w-4 h-4" />, text: "Basic Sentiment Analysis", done: true },
    ]
  },
  {
    phase: "Phase 2: Sensory Expansion",
    status: "UPCOMING",
    date: "Q2 2025",
    desc: "Expanding MindLock's ability to perceive and understand emotional context through voice and multi-device sync.",
    items: [
      { icon: <Mic className="w-4 h-4" />, text: "Real-Time Emotional Voice Recognition", done: false },
      { icon: <Smartphone className="w-4 h-4" />, text: "Secure Multi-Device Sync", done: false },
      { icon: <Cloud className="w-4 h-4" />, text: "Encrypted Cloud Backup", done: false },
    ]
  },
  {
    phase: "Phase 3: Biometric Integration",
    status: "FUTURE",
    date: "Q4 2025",
    desc: "Deep integration with wearable tech to correlate physiological data with psychological states.",
    items: [
      { icon: <Watch className="w-4 h-4" />, text: "Wearable Integration (Heart Rate Stress Detection)", done: false },
      { icon: <Zap className="w-4 h-4" />, text: "On-Device Edge Inference (Offline Mode)", done: false },
      { icon: <Brain className="w-4 h-4" />, text: "Advanced Cognitive Behavioral Modeling", done: false },
    ]
  }
];

export default function RoadmapPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-40 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#00F0FF_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-mono tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            LIVE ROADMAP
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Future <span className="text-[#00F0FF] text-glow">Horizons</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Our vision for the future of encrypted cognitive support. <br/>
            <span className="text-white">Building the ultimate safe space for your mind.</span>
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[#00F0FF] -translate-x-1/2 shadow-[0_0_15px_#00F0FF]" 
          />

          <div className="space-y-32">
            {ROADMAP_ITEMS.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 bg-[#030303] border border-[#00F0FF]/50 rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,240,255,0.3)] group">
                  <div className="w-3 h-3 bg-[#00F0FF] rounded-full group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute inset-0 border border-[#00F0FF] rounded-full animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <PerspectiveTilt className={`glass-panel-ultra p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#00F0FF]/30 transition-colors ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
                    
                    <div className={`flex flex-col gap-4 relative z-10 ${
                      i % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className="text-[#00F0FF] font-mono text-sm tracking-widest">{phase.date}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                          phase.status === "CURRENT" ? "bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/20" : 
                          phase.status === "UPCOMING" ? "bg-[#bd00ff]/10 text-[#bd00ff] border-[#bd00ff]/20" :
                          "bg-white/10 text-white/50 border-white/10"
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                        {phase.phase}
                      </h2>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {phase.desc}
                      </p>

                      <div className="space-y-3 w-full">
                        {phase.items.map((item, j) => (
                          <div key={j} className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors ${
                            i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                          }`}>
                            <div className={`p-2 rounded-lg ${item.done ? "bg-[#00F0FF]/10 text-[#00F0FF]" : "bg-white/5 text-white/30"}`}>
                              {item.icon}
                            </div>
                            <span className={`text-sm font-medium ${item.done ? "text-white" : "text-white/50"}`}>
                              {item.text}
                            </span>
                            {item.done && <CheckCircle2 className="w-4 h-4 text-[#00F0FF] ml-auto md:ml-0 md:mr-auto" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </PerspectiveTilt>
                </div>

                {/* Empty Space for Layout Balance */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <p className="text-white/30 font-mono text-sm mb-8">THE FUTURE IS ENCRYPTED</p>
          <div className="w-px h-20 bg-linear-to-b from-[#00F0FF] to-transparent mx-auto opacity-50" />
        </motion.div>

      </div>
    </main>
  );
}
