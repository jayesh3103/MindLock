"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Globe, Clock, ShieldAlert } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-xs font-mono tracking-widest mb-4">
            <ShieldAlert className="w-3 h-3 animate-pulse" />
            RECRUITMENT PROTOCOL: ACTIVE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Join the <span className="text-[#00F0FF] text-glow">Resistance</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Help us build the future of private, secure AI. <br/>
            <span className="text-white">Your mission, should you choose to accept it.</span>
          </p>
        </motion.div>

        <div className="grid gap-8">
          {[
            { role: "Cryptography Engineer", location: "Remote / London", type: "Full-time", id: "OP_ALPHA", desc: "Design and implement zero-knowledge proof systems for next-gen memory vaults." },
            { role: "Senior AI Researcher", location: "San Francisco, CA", type: "Full-time", id: "OP_BETA", desc: "Develop emotional alignment models that prioritize user privacy over data harvesting." },
            { role: "Frontend Developer (WebGL)", location: "Remote", type: "Contract", id: "OP_GAMMA", desc: "Build immersive, cinematic interfaces that visualize complex security protocols." },
            { role: "Security Auditor", location: "New York, NY", type: "Full-time", id: "OP_DELTA", desc: "Break our systems before the bad guys do. White-hat hacking experience required." },
          ].map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <PerspectiveTilt className="glass-panel-ultra p-8 rounded-2xl group hover:border-[#00F0FF]/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#00F0FF]/50 border border-[#00F0FF]/20 px-2 py-0.5 rounded">ID: {job.id}</span>
                      <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Classified</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-[#00F0FF] transition-colors">{job.role}</h3>
                    <p className="text-white/60 text-sm max-w-2xl leading-relaxed">{job.desc}</p>
                    <div className="flex items-center gap-6 pt-2 text-sm text-white/40 font-mono">
                      <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {job.type}</span>
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-bold text-sm hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF] transition-all duration-300 flex items-center gap-2 group/btn whitespace-nowrap">
                    ACCEPT MISSION
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </PerspectiveTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
