"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Brain, AlertTriangle, Terminal, Database, Server, User, Code, Fingerprint } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";
import ScrambleText from "@/components/ScrambleText";
import CyberGlitchText from "@/components/CyberGlitchText";

const TEAM = [
  { name: "Jayesh Muley", role: "Full Stack Developer & AI Engineer", id: "ARCHITECT_01", bio: "Student from Vellore Institute of Technology. Building the future of secure, emotional AI." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-[#00F0FF]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            The <span className="text-[#00F0FF] text-glow">Privacy Paradox</span> <br />
            in Mental Health AI
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            Why we built MindLock: To solve the conflict between <span className="text-white">emotional support</span> and <span className="text-white">digital surveillance</span>.
          </p>
        </motion.div>

        {/* The Problem */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-red-500 mb-4">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-mono tracking-widest font-bold">THE PROBLEM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Your Secrets Aren't Safe</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Most mental health chatbots store your deepest fears and personal struggles in plain text or unprotected embeddings on cloud servers. 
              <br /><br />
              If their database is breached, your private thoughts become public property. This fear prevents millions from seeking the help they need.
            </p>
          </div>
          <PerspectiveTilt className="glass-panel-ultra p-1 rounded-3xl border border-red-500/20 bg-red-500/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="bg-[#0a0a0a] rounded-[1.3rem] p-6 font-mono text-sm text-red-200/70 relative z-10 h-full border border-white/5 shadow-inner">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-white/30">insecure_server_log.txt</span>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-red-500/10 rounded border-l-2 border-red-500">
                  <span className="text-red-400">[SERVER_LOG]:</span> User: "I feel like giving up..."
                </div>
                <div className="p-3 bg-white/5 rounded border-l-2 border-white/20">
                  <span className="text-blue-400">[DB_STORE]:</span> INSERT INTO chats VALUES (...)
                </div>
                <div className="p-3 bg-red-500/20 rounded border-l-2 border-red-500 text-red-500 font-bold animate-pulse">
                  <CyberGlitchText text="[ALERT]: UNENCRYPTED DATA EXPOSED" />
                </div>
              </div>
            </div>
          </PerspectiveTilt>
        </section>

        {/* The Solution */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <PerspectiveTilt className="order-2 md:order-1 glass-panel-ultra p-1 rounded-3xl border border-[#00F0FF]/20 bg-[#00F0FF]/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="bg-[#0a0a0a] rounded-[1.3rem] p-6 font-mono text-sm text-[#00F0FF]/70 relative z-10 h-full border border-white/5 shadow-inner">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-white/30">mindlock_secure_core.sh</span>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-[#00F0FF]/10 rounded border-l-2 border-[#00F0FF]">
                  <span className="text-[#00F0FF]">[CLIENT]:</span> Encrypting message...
                </div>
                <div className="p-3 bg-white/5 rounded border-l-2 border-white/20">
                  <span className="text-purple-400">[CYBORG_DB]:</span> Storing blob: 0x7f3a...
                </div>
                <div className="p-3 bg-[#00F0FF]/20 rounded border-l-2 border-[#00F0FF] text-[#00F0FF] font-bold">
                  <span className="mr-2">✓</span>
                  <ScrambleText text="[STATUS]: ZERO KNOWLEDGE PROOF VERIFIED" />
                </div>
              </div>
            </div>
          </PerspectiveTilt>
          <div className="order-1 md:order-2 space-y-8">
            <div className="flex items-center gap-3 text-[#00F0FF] mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-mono tracking-widest font-bold">THE SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">MindLock Protocol</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              A companion that helps you heal — while keeping your data unreadable to everyone, including us.
              <br /><br />
              We use <span className="text-[#00F0FF] font-bold">CyborgDB</span> as an encrypted memory vault. Decryption happens ONLY on your device, using a key that never leaves your possession.
            </p>
          </div>
        </section>

        {/* The Architects (Team Section) */}
        <section className="py-20">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-mono tracking-widest mb-4">
              <Fingerprint className="w-3 h-3" />
              AUTHORIZED PERSONNEL ONLY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">The Architects</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative w-full md:w-1/3 max-w-md"
              >
                <PerspectiveTilt className="glass-panel-ultra p-1 rounded-2xl h-full relative overflow-hidden transition-all duration-500 group-hover:border-[#00F0FF]/50">
                  <div className="absolute inset-0 bg-[#00F0FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="bg-[#050505] rounded-xl p-8 h-full relative z-10 flex flex-col items-center text-center">
                    {/* Holographic Avatar Placeholder */}
                    <div className="w-32 h-32 rounded-full border-2 border-[#00F0FF]/30 mb-6 relative flex items-center justify-center overflow-hidden bg-[#00F0FF]/5 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500">
                      <User className="w-12 h-12 text-[#00F0FF]/50 group-hover:text-[#00F0FF] transition-colors" />
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,#00F0FF_50%,transparent_100%)] opacity-20 h-[200%] w-full animate-[scan_3s_linear_infinite]" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#00F0FF]/70 mb-6 tracking-widest uppercase">
                      {member.role}
                    </p>
                    
                    <p className="text-sm text-white/50 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="mt-auto w-full pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-white/30">
                      <span>ID: {member.id}</span>
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">ACCESS GRANTED</span>
                    </div>
                  </div>
                </PerspectiveTilt>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Animation */}
        <section className="py-20">
          <h3 className="text-center text-sm font-mono tracking-[0.5em] text-[#00F0FF] mb-20 uppercase">The Lifecycle of a Thought</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#00F0FF] to-transparent w-1/2 animate-[shimmer_3s_infinite_linear]" />
            </div>
            
            {[
              { icon: <Brain />, title: "Talk", desc: "You share a thought" },
              { icon: <Lock />, title: "Encrypt", desc: "AES-256 on device" },
              { icon: <Database />, title: "Store", desc: "CyborgDB Vault" },
              { icon: <Server />, title: "Retrieve", desc: "Fetch encrypted blob" },
              { icon: <Brain />, title: "Heal", desc: "AI responds with context" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center gap-6 bg-[#030303] p-6 z-10 rounded-2xl border border-white/5 group hover:border-[#00F0FF]/50 transition-colors duration-300"
              >
                <div className="w-20 h-20 rounded-full glass-panel-ultra flex items-center justify-center text-[#00F0FF] border border-[#00F0FF]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(0,240,255,0.3)] transition-all duration-300">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-[#00F0FF] transition-colors">{step.title}</h4>
                  <p className="text-xs text-white/40 font-mono group-hover:text-white/70 transition-colors">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
