"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Brain, Shield } from "lucide-react";

const TEAM = [
  {
    name: "Jayesh Muley",
    role: "Cognitive Architect",
    desc: "Lead developer and visionary behind the MindLock protocol.",
    icon: <Brain className="w-8 h-8 text-[#00F0FF]" />,
  },
  {
    name: "Security Engineer",
    role: "Cryptographic Guardian",
    desc: "Ensuring zero-knowledge architecture and data sovereignty.",
    icon: <Shield className="w-8 h-8 text-[#00F0FF]" />,
  },
  {
    name: "AI Specialist",
    role: "Neural Network Designer",
    desc: "Crafting the empathetic response engine and sentiment analysis.",
    icon: <Code className="w-8 h-8 text-[#00F0FF]" />,
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto space-y-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            The <span className="text-[#00F0FF]">Architects</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            The minds behind the machine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#00F0FF]/50 transition-all group text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-[#00F0FF]">
                {member.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <div className="text-[#00F0FF] font-mono text-sm tracking-widest mb-4">{member.role}</div>
              <p className="text-white/60 text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
