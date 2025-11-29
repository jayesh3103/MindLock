"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, MessageSquare, Check, Loader2, Terminal, ShieldCheck, ArrowRight } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, sent

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#00F0FF_0%,transparent_70%)] opacity-5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-mono tracking-widest mb-4">
            <Terminal className="w-3 h-3" />
            SECURE CHANNEL: OPEN
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Establish <span className="text-[#00F0FF] text-glow">Uplink</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Questions? Security concerns? Initiate a secure transmission below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <PerspectiveTilt className="glass-panel p-8 rounded-2xl flex items-center gap-6 group hover:border-[#00F0FF]/50 transition-colors">
              <div className="w-14 h-14 bg-[#00F0FF]/10 rounded-xl flex items-center justify-center text-[#00F0FF] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-[#00F0FF] transition-colors">Encrypted Email</h3>
                <p className="text-white/50 text-sm font-mono mt-1">mr.jayeshvmuley@gmail.com</p>
                <p className="text-xs text-[#00F0FF]/50 mt-2">PGP Key Available</p>
              </div>
            </PerspectiveTilt>

            <PerspectiveTilt className="glass-panel p-8 rounded-2xl flex items-center gap-6 group hover:border-[#00F0FF]/50 transition-colors">
              <div className="w-14 h-14 bg-[#00F0FF]/10 rounded-xl flex items-center justify-center text-[#00F0FF] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-[#00F0FF] transition-colors">Live Secure Chat</h3>
                <p className="text-white/50 text-sm font-mono mt-1">Available 24/7 for Pro users</p>
                <p className="text-xs text-[#00F0FF]/50 mt-2">End-to-End Encrypted</p>
              </div>
            </PerspectiveTilt>

            <PerspectiveTilt className="glass-panel p-8 rounded-2xl flex items-center gap-6 group hover:border-[#00F0FF]/50 transition-colors">
              <div className="w-14 h-14 bg-[#00F0FF]/10 rounded-xl flex items-center justify-center text-[#00F0FF] group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-[#00F0FF] transition-colors">Global HQ</h3>
                <p className="text-white/50 text-sm font-mono mt-1">Ahmedabad, India</p>
                <p className="text-xs text-[#00F0FF]/50 mt-2">Undisclosed Server Farm</p>
              </div>
            </PerspectiveTilt>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-[#00F0FF] to-[#bd00ff] rounded-3xl opacity-20 blur-lg" />
            <form onSubmit={handleSubmit} className="glass-panel-ultra p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden border border-white/10 bg-[#050505]">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00F0FF] to-transparent opacity-50" />
              
              <AnimatePresence>
                {status === "sent" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-[#030303]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-20 h-20 bg-[#00F0FF]/20 rounded-full flex items-center justify-center mb-6 text-[#00F0FF] border border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Transmission Secure</h3>
                    <p className="text-white/50 text-sm max-w-xs">Your message has been encrypted and sent to our secure servers.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#00F0FF] tracking-widest">IDENTITY_STRING</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-[#00F0FF] focus:bg-[#00F0FF]/5 outline-none transition-all font-mono text-sm"
                  placeholder="Enter your name..."
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#00F0FF] tracking-widest">RETURN_ADDRESS</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-[#00F0FF] focus:bg-[#00F0FF]/5 outline-none transition-all font-mono text-sm"
                  placeholder="name@secure-mail.com"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-mono text-[#00F0FF] tracking-widest">PAYLOAD_DATA</label>
                <textarea 
                  rows={5} 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-[#00F0FF] focus:bg-[#00F0FF]/5 outline-none transition-all font-mono text-sm resize-none"
                  placeholder="Type your encrypted message here..."
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full py-5 bg-[#00F0FF] text-black font-bold rounded-xl hover:bg-[#00F0FF]/80 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-mono tracking-widest">ENCRYPTING...</span>
                  </>
                ) : (
                  <>
                    <span className="font-mono tracking-widest">TRANSMIT DATA</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
