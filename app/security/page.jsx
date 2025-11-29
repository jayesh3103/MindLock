"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Server, Key, CheckCircle, XCircle, AlertTriangle, Scan, Radar, Activity, Eye } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";
import ScrambleText from "@/components/ScrambleText";

export default function SecurityPage() {
  const [scanning, setScanning] = useState(true);
  const [threatsBlocked, setThreatsBlocked] = useState(8432);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,#00F0FF_0%,transparent_60%)] opacity-5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* Header with Live Scanner */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-mono tracking-widest mb-4">
              <Activity className="w-3 h-3 animate-pulse" />
              SYSTEM INTEGRITY: 100%
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Zero-Trust <span className="text-[#00F0FF] text-glow">Architecture</span>
            </h1>
            <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed">
              We assume the network is compromised. We assume the database is public. 
              Your data remains safe because we simply <span className="text-white font-medium">cannot read it</span>.
            </p>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-mono font-bold text-white">{threatsBlocked.toLocaleString()}</div>
                <div className="text-xs text-white/30 uppercase tracking-widest">Threats Blocked</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-mono font-bold text-[#00F0FF]">AES-256</div>
                <div className="text-xs text-white/30 uppercase tracking-widest">Encryption Standard</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <PerspectiveTilt className="glass-panel-ultra aspect-square rounded-full border border-[#00F0FF]/20 relative flex items-center justify-center overflow-hidden">
              {/* Radar Scan Effect */}
              <div className="absolute inset-0 rounded-full border-[2px] border-[#00F0FF]/10" />
              <div className="absolute inset-[20%] rounded-full border border-[#00F0FF]/10" />
              <div className="absolute inset-[40%] rounded-full border border-[#00F0FF]/10" />
              <div className="absolute inset-[60%] rounded-full border border-[#00F0FF]/10" />
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,#00F0FF_20deg,transparent_20deg)] opacity-20 rounded-full"
              />

              <div className="relative z-10 text-center space-y-2">
                <Shield className="w-16 h-16 text-[#00F0FF] mx-auto" />
                <div className="font-mono text-xs text-[#00F0FF] tracking-widest">
                  <ScrambleText text="SCANNING..." />
                </div>
              </div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </PerspectiveTilt>
          </motion.div>
        </div>

        {/* Threat Model */}
        <section>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <Eye className="text-[#00F0FF] w-8 h-8" /> Threat Model Analysis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Database Breach", status: "SAFE", desc: "Attacker gets encrypted blobs only. No keys stored on server." },
              { title: "API Interception", status: "SAFE", desc: "TLS 1.3 + Payload Encryption prevents Man-in-the-Middle attacks." },
              { title: "Insider Threat", status: "SAFE", desc: "Devs have no access to user private keys. We cannot decrypt your data." },
              { title: "Token Theft", status: "MITIGATED", desc: "Session tokens are short-lived. Data requires re-decryption." },
            ].map((threat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <PerspectiveTilt className="glass-panel-ultra p-8 rounded-2xl h-full hover:bg-white/2 transition-colors group border border-white/5 hover:border-[#00F0FF]/30">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-bold text-lg group-hover:text-[#00F0FF] transition-colors">{threat.title}</h3>
                    <span className="text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full">
                      {threat.status}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{threat.desc}</p>
                </PerspectiveTilt>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Why MindLock is Different</h2>
          <div className="glass-panel-ultra rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-3 bg-white/5 p-6 font-bold text-sm md:text-lg border-b border-white/10">
              <div>Feature</div>
              <div className="text-center text-white/40">Standard Chatbots</div>
              <div className="text-center text-[#00F0FF] text-glow">MindLock</div>
            </div>
            {[
              { feature: "Memory Storage", bad: "Plain Text / Raw Embeddings", good: "AES-256 Encrypted Blobs" },
              { feature: "Decryption Location", bad: "Server-Side", good: "Client-Side (Local Device)" },
              { feature: "Encryption Keys", bad: "Managed by Platform", good: "Owned by User" },
              { feature: "Emotional Context", bad: "Limited / Session Based", good: "Persistent & Encrypted" },
              { feature: "Data Ownership", bad: "Platform Owned", good: "User Owned" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-t border-white/5 text-sm md:text-base items-center hover:bg-white/2 transition-colors group">
                <div className="font-mono text-white/60 group-hover:text-white transition-colors">{row.feature}</div>
                <div className="text-center text-red-400/50 flex items-center justify-center gap-3">
                  <XCircle className="w-5 h-5 hidden md:block" /> {row.bad}
                </div>
                <div className="text-center text-[#00F0FF] flex items-center justify-center gap-3 font-bold bg-[#00F0FF]/5 py-2 rounded-lg border border-[#00F0FF]/10 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                  <CheckCircle className="w-5 h-5 hidden md:block" /> {row.good}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6 group">
            <div className="w-20 h-20 mx-auto bg-[#00F0FF]/5 rounded-2xl flex items-center justify-center text-[#00F0FF] border border-[#00F0FF]/20 shadow-[0_0_30px_rgba(0,240,255,0.1)] group-hover:scale-110 transition-transform duration-500">
              <Lock className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-2xl group-hover:text-[#00F0FF] transition-colors">WebCrypto API</h3>
            <p className="text-white/50 leading-relaxed">Native browser-based encryption for maximum performance and security.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-20 h-20 mx-auto bg-[#bd00ff]/5 rounded-2xl flex items-center justify-center text-[#bd00ff] border border-[#bd00ff]/20 shadow-[0_0_30px_rgba(189,0,255,0.1)] group-hover:scale-110 transition-transform duration-500">
              <Server className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-2xl group-hover:text-[#bd00ff] transition-colors">CyborgDB</h3>
            <p className="text-white/50 leading-relaxed">Next-gen encrypted vector database for secure AI memory retrieval.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-20 h-20 mx-auto bg-[#00F0FF]/5 rounded-2xl flex items-center justify-center text-[#00F0FF] border border-[#00F0FF]/20 shadow-[0_0_30px_rgba(0,240,255,0.1)] group-hover:scale-110 transition-transform duration-500">
              <Key className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-2xl group-hover:text-[#00F0FF] transition-colors">WebAuthn</h3>
            <p className="text-white/50 leading-relaxed">Biometric passkeys replace passwords, eliminating phishing risks.</p>
          </div>
        </section>

      </div>
    </main>
  );
}
