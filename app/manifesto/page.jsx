"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Check } from "lucide-react";

export default function ManifestoPage() {
  const [signed, setSigned] = useState(false);

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-center"
        >
          The <span className="text-[#00F0FF] text-glow">Manifesto</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="glass-panel-ultra p-12 md:p-20 rounded-3xl space-y-12 text-xl md:text-3xl leading-relaxed text-white/90 font-light text-center border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <p>
            We believe that <strong className="text-white font-bold">privacy is a fundamental human right</strong>, especially when it comes to the inner workings of the human mind.
          </p>
          <p>
            In an age of surveillance capitalism, our thoughts, fears, and dreams are often harvested, analyzed, and sold. <span className="text-red-500 font-bold">We reject this reality.</span>
          </p>
          <p>
            <strong className="text-[#00F0FF]">MindLock</strong> was born from a simple promise: to create a safe harbor for human consciousness. A place where you can be truly vulnerable, knowing that your words are mathematically impossible for anyone else to read—including us.
          </p>
          <p className="italic text-white/60">
            "We don't want your data. We want your healing."
          </p>
          
          <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-8">
            <p className="font-mono text-sm text-white/40 tracking-widest uppercase">
              Join the Resistance
            </p>
            
            <button 
              onClick={() => setSigned(true)}
              disabled={signed}
              className={`relative group px-8 py-4 rounded-full font-bold tracking-widest transition-all duration-500 ${
                signed 
                  ? "bg-green-500/10 text-green-500 border border-green-500/50 cursor-default" 
                  : "bg-[#00F0FF] text-black hover:bg-[#00F0FF]/80 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
              }`}
            >
              <div className="flex items-center gap-3">
                {signed ? <Check className="w-5 h-5" /> : <PenTool className="w-5 h-5" />}
                {signed ? "DIGITALLY SIGNED" : "SIGN THE MANIFESTO"}
              </div>
            </button>

            {signed && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono text-white/30"
              >
                HASH: 0x7f3a...9c2b • VERIFIED
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
