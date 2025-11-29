"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Demo", path: "/demo" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl glass-panel-ultra rounded-full px-6 py-3"
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center border border-[#00F0FF]/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Shield className="w-4 h-4 text-[#00F0FF]" fill="currentColor" fillOpacity={0.2} />
            </div>
            <span className="font-mono text-lg tracking-[0.2em] font-bold text-white group-hover:text-[#00F0FF] transition-colors">MINDLOCK</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-4 py-2 text-xs font-mono tracking-widest text-white/70 hover:text-white transition-colors group"
              >
                {item.name.toUpperCase()}
                {pathname === item.path && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00F0FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#00F0FF]" />
              </Link>
            ))}
            
            <div className="w-px h-4 bg-white/10 mx-4" />
            
            <Link href="/pricing">
              <button className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-[#00F0FF] hover:text-black transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                GET ACCESS
              </button>
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white hover:text-[#00F0FF] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#030303]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-light tracking-widest hover:text-[#00F0FF] transition-all ${
                      pathname === item.path ? "text-[#00F0FF] text-glow" : "text-white/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-xs text-white/30 font-mono flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              ENCRYPTED CONNECTION ESTABLISHED
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
