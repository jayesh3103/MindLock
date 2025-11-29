"use client";

import { useState } from "react";
import CinematicIntro from "@/components/CinematicIntro";
import EncryptedMindscape from "@/components/EncryptedMindscape";
import CognitiveTunnel from "@/components/CognitiveTunnel";
import EmotionalDNA from "@/components/EmotionalDNA";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Lock } from "lucide-react";
import Link from "next/link";
import { useVoiceInteraction } from "@/hooks/useVoiceInteraction";
import MagneticButton from "@/components/MagneticButton";
import ScrambleText from "@/components/ScrambleText";
import PerspectiveTilt from "@/components/PerspectiveTilt";
import CyberGlitchText from "@/components/CyberGlitchText";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const { transcript } = useVoiceInteraction();

  return (
    <main className="relative w-full min-h-screen bg-[#030303] text-white overflow-x-hidden">
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-50"
          >
            <CinematicIntro onComplete={() => setIntroComplete(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 w-full flex flex-col"
        >
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#0a1a2f] via-[#030303] to-[#030303] opacity-40" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-8 w-full max-w-6xl px-6">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <PerspectiveTilt className="glass-panel-ultra p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00F0FF]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#bd00ff]/30 to-transparent" />
                  <div className="absolute -inset-1 bg-linear-to-r from-[#00F0FF]/20 via-[#bd00ff]/20 to-[#00F0FF]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000" />
                  
                  {/* Hero Visual: Encrypted Mindscape */}
                  <div className="h-[250px] md:h-[350px] w-full mb-10 mask-gradient-b relative z-10">
                    <EncryptedMindscape />
                  </div>
                  
                  <div className="relative z-20 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-[#00F0FF]/5 rounded-xl flex items-center justify-center border border-[#00F0FF]/20 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                        <Shield className="w-6 h-6 text-[#00F0FF]" />
                      </div>
                      <span className="font-mono text-sm tracking-[0.3em] text-[#00F0FF] font-bold">
                        SYSTEM ONLINE
                      </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                      <span className="block text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
                        <ScrambleText text="Your Mind." />
                      </span>
                      <span className="block text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
                        <ScrambleText text="Your Memories." />
                      </span>
                      <span className="block mt-4 text-[#00F0FF] text-glow text-5xl md:text-7xl">
                        <CyberGlitchText text="LOCKED WITH YOU." />
                      </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                      The world's first <span className="text-white font-medium">zero-knowledge</span> mental health companion. 
                      We can't read your thoughts, and neither can anyone else.
                    </p>
                    
                    {transcript && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 px-6 py-3 bg-[#00F0FF]/5 rounded-full border border-[#00F0FF]/20 text-sm font-mono text-[#00F0FF] flex items-center gap-3"
                      >
                        <span className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse" />
                        Listening: "{transcript}"
                      </motion.div>
                    )}

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <Link href="/demo">
                        <MagneticButton className="group relative px-10 py-5 bg-white text-black font-bold text-sm tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                          <span className="relative z-10 flex items-center gap-2">
                            TRY DEMO <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </span>
                        </MagneticButton>
                      </Link>
                      <Link href="/about">
                        <MagneticButton className="group px-10 py-5 bg-transparent border border-white/10 text-white font-bold text-sm tracking-widest rounded-full hover:bg-white/5 transition-all hover:border-white/30">
                          WHY MINDLOCK?
                        </MagneticButton>
                      </Link>
                    </div>
                  </div>
                </PerspectiveTilt>
              </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
            >
              <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Scroll to Explore</span>
              <div className="w-px h-12 bg-linear-to-b from-[#00F0FF] to-transparent" />
            </motion.div>
          </section>

          {/* USP Section (Three Pillars) */}
          <section className="py-32 px-6 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-8 h-8 text-[#00F0FF]" />,
                  title: "Complete Privacy",
                  desc: "Zero-knowledge encrypted memory. Even we can't read your thoughts."
                },
                {
                  icon: <Brain className="w-8 h-8 text-[#bd00ff]" />,
                  title: "Emotional Intelligence",
                  desc: "Continues therapy-like conversations with deep context awareness."
                },
                {
                  icon: <Shield className="w-8 h-8 text-[#00F0FF]" />,
                  title: "User-Controlled Data",
                  desc: "You own the encryption key. Your data stays on your device."
                }
              ].map((usp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                >
                  <PerspectiveTilt className="glass-panel-ultra p-10 rounded-3xl h-full group relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-linear-to-br from-[#00F0FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border border-[#00F0FF]/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-[#00F0FF]/20 transition-all duration-500 border border-white/5 group-hover:border-[#00F0FF]/30">
                        {usp.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00F0FF] transition-colors">{usp.title}</h3>
                      <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{usp.desc}</p>
                    </div>
                  </PerspectiveTilt>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Emotional DNA Section */}
          <section className="h-[90vh] flex flex-col items-center justify-center relative bg-[#020202]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#bd00ff_0%,transparent_30%)] opacity-10 blur-[100px]" />
            <div className="text-center mb-16 relative z-10">
               <h3 className="text-sm font-mono tracking-[0.5em] text-[#bd00ff] uppercase mb-4">Emotional Genome</h3>
               <h2 className="text-4xl md:text-5xl font-bold">Visualizing Your Inner Self</h2>
            </div>
            <div className="w-full max-w-6xl h-[600px] glass-panel-ultra rounded-[3rem] border border-white/5 overflow-hidden relative">
               <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#020202]/80 z-10 pointer-events-none" />
               <EmotionalDNA />
               <div className="absolute bottom-10 left-0 w-full text-center z-20">
                 <p className="text-white/30 text-xs tracking-[0.3em] uppercase">
                    Live Biometric Feedback Sequence
                 </p>
               </div>
            </div>
          </section>

          {/* Cognitive Tunnel Section */}
          <section className="relative h-[80vh] mb-32">
             <CognitiveTunnel />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-6xl md:text-9xl font-bold text-white/5 tracking-tighter select-none">
                  DEEP DIVE
                </h2>
             </div>
          </section>
        </motion.div>
      )}
    </main>
  );
}
