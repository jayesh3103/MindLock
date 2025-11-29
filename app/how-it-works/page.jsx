"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Lock, Key, Cpu, MessageSquare } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "User Input",
    desc: "You speak or type your thoughts.",
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    color: "bg-white/10",
  },
  {
    id: 2,
    title: "Local Encryption",
    desc: "Data is encrypted on-device using AES-256.",
    icon: <Lock className="w-8 h-8 text-[#00F0FF]" />,
    color: "bg-[#00F0FF]/20",
  },
  {
    id: 3,
    title: "Secure Storage",
    desc: "Encrypted blobs stored in CyborgDB.",
    icon: <Database className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-500/20",
  },
  {
    id: 4,
    title: "Retrieval",
    desc: "Encrypted data fetched on demand.",
    icon: <ArrowRight className="w-8 h-8 text-white" />,
    color: "bg-white/10",
  },
  {
    id: 5,
    title: "Local Decryption",
    desc: "Unlocked only with your private key.",
    icon: <Key className="w-8 h-8 text-yellow-500" />,
    color: "bg-yellow-500/20",
  },
  {
    id: 6,
    title: "AI Processing",
    desc: "Context-aware response generation.",
    icon: <Cpu className="w-8 h-8 text-green-500" />,
    color: "bg-green-500/20",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            The <span className="text-[#00F0FF]">Architecture</span> of Trust
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            See how your data travels securely through the MindLock pipeline.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00F0FF]/30 to-transparent -translate-y-1/2 z-0" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#00F0FF]/50 transition-all group"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <div className="text-xs font-mono text-white/40 mb-2">STEP 0{step.id}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lock className="text-[#00F0FF]" /> Encryption Specs
            </h3>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Algorithm</span>
                <span className="text-[#00F0FF]">AES-256-GCM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Key Derivation</span>
                <span className="text-[#00F0FF]">PBKDF2 (100k iterations)</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Storage</span>
                <span className="text-[#00F0FF]">CyborgDB (Encrypted Blobs)</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Key Storage</span>
                <span className="text-[#00F0FF]">Local Device Keychain</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="text-green-500" /> AI Processing
            </h3>
            <ul className="space-y-4 font-mono text-sm text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Model</span>
                <span className="text-green-400">Gemini 1.5 Pro</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Context Window</span>
                <span className="text-green-400">1M Tokens</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sentiment Analysis</span>
                <span className="text-green-400">Real-time Scoring</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Privacy</span>
                <span className="text-green-400">Stateless Inference</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
