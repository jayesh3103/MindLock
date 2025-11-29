"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Heart, Zap, CheckCircle } from "lucide-react";

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest">HACKATHON SUBMISSION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Why MindLock <span className="text-[#00F0FF]">Wins</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We didn't just build a chatbot. We built a new standard for privacy-first AI.
          </p>
        </motion.div>

        {/* Key Differentiators */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-[#00F0FF]/20 bg-[#00F0FF]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Zap className="w-24 h-24 text-[#00F0FF]" />
            </div>
            <h2 className="text-2xl font-bold mb-6">The Innovation</h2>
            <ul className="space-y-4">
              {[
                "First-of-its-kind Encrypted Memory Architecture",
                "Zero-Knowledge Proof Implementation",
                "Client-Side Vector Decryption",
                "Biometric WebAuthn Integration"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00F0FF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-pink-500/20 bg-pink-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Heart className="w-24 h-24 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold mb-6">The Impact</h2>
            <ul className="space-y-4">
              {[
                "Solves the 'Trust Gap' in AI Mental Health",
                "Empowers users with Data Sovereignty",
                "Scalable to millions without privacy risks",
                "Bridges Clinical Psychology with Cyber-Security"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready for the Future?</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            MindLock isn't just a project; it's a blueprint for how all personal AI should be built. 
            Secure, empathetic, and undeniably yours.
          </p>
          <div className="p-8 glass-panel rounded-2xl border border-white/10 inline-block">
            <div className="text-4xl font-bold text-[#00F0FF] mb-2">100%</div>
            <div className="text-sm font-mono tracking-widest text-white/50">PRIVACY SCORE</div>
          </div>
        </section>

      </div>
    </main>
  );
}
