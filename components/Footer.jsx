"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Github, Linkedin, Activity, Wifi, Check } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative w-full bg-[#020202] border-t border-white/5 overflow-hidden pt-20 pb-10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#00F0FF]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#00F0FF]/10 rounded-xl flex items-center justify-center border border-[#00F0FF]/30 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
                <Shield className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <span className="font-mono text-xl tracking-[0.2em] font-bold text-white">MINDLOCK</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The world's first zero-knowledge mental health AI. Your thoughts are encrypted before they leave your device.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/jayesh3103" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F0FF]/20 hover:text-[#00F0FF] transition-all border border-white/5 hover:border-[#00F0FF]/30">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/mr-jayeshmuley/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00F0FF]/20 hover:text-[#00F0FF] transition-all border border-white/5 hover:border-[#00F0FF]/30">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-mono text-sm tracking-widest text-[#00F0FF] mb-6">PLATFORM</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {[
                { name: "Features", href: "/features" },
                { name: "Security", href: "/security" },
                { name: "Roadmap", href: "/roadmap" },
                { name: "Pricing", href: "/pricing" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#00F0FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-mono text-sm tracking-widest text-[#00F0FF] mb-6">COMPANY</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {[
                { name: "About Us", href: "/about" },
                { name: "Manifesto", href: "/manifesto" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#00F0FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Status */}
          <div className="space-y-6">
            <h4 className="font-mono text-sm tracking-widest text-[#00F0FF] mb-6">SYSTEM STATUS</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-white/50 bg-white/5 p-3 rounded border border-white/5">
                <span className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-500" />
                  CyborgDB Core
                </span>
                <span className="text-green-500">OPERATIONAL</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-white/50 bg-white/5 p-3 rounded border border-white/5">
                <span className="flex items-center gap-2">
                  <Wifi className="w-3 h-3 text-green-500" />
                  Encryption Nodes
                </span>
                <span className="text-green-500">ONLINE</span>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for updates" 
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-3 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-bold rounded hover:bg-[#00F0FF]/20 transition-colors flex items-center justify-center min-w-[60px]"
              >
                {subscribed ? <Check className="w-4 h-4" /> : "JOIN"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono">
          <p>© 2025 MINDLOCK INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
