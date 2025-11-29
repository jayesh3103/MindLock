"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, Shield, Zap, Globe, Lock, Server, Activity } from "lucide-react";
import PerspectiveTilt from "@/components/PerspectiveTilt";
import MagneticButton from "@/components/MagneticButton";

const PLANS = [
  {
    name: "Basic",
    price: "$0",
    desc: "Essential privacy for everyone.",
    features: ["Basic Encryption", "50 Messages/Day", "Local Storage", "Community Support"],
    highlight: false,
    cta: "Current Plan"
  },
  {
    name: "Pro Guard",
    price: "$12",
    period: "/mo",
    desc: "Advanced security for daily use.",
    features: ["AES-256 Encryption", "Unlimited Messages", "Multi-Device Sync", "Priority Support", "Crisis Guard"],
    highlight: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Maximum security for organizations.",
    features: ["Dedicated Vault", "API Access", "24/7 Crisis Line", "Audit Logs", "SLA Guarantee"],
    highlight: false,
    cta: "Contact Sales"
  }
];

const COMPARISON = [
  { feature: "Encryption Standard", basic: "Standard", pro: "AES-256", ent: "Military Grade" },
  { feature: "Message History", basic: "7 Days", pro: "Unlimited", ent: "Unlimited" },
  { feature: "Zero-Knowledge Proof", basic: true, pro: true, ent: true },
  { feature: "Biometric Lock", basic: false, pro: true, ent: true },
  { feature: "Crisis Intervention", basic: false, pro: "Standard", ent: "Priority 24/7" },
  { feature: "Dedicated Server", basic: false, pro: false, ent: true },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,#00F0FF_0%,transparent_40%)] opacity-10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] text-xs font-mono tracking-widest">
            SECURE YOUR FUTURE
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Secure Your <span className="text-[#00F0FF] text-glow">Mind</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Choose the level of cognitive protection that fits your life. <br />
            <span className="text-white">Privacy is not a luxury, it's a right.</span>
          </p>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-40">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PerspectiveTilt className={`h-full p-1 rounded-4xl relative group transition-all duration-500 ${
                plan.highlight ? "glass-panel-ultra border-[#00F0FF]/50 shadow-[0_0_50px_rgba(0,240,255,0.15)]" : "glass-panel border-white/10"
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00F0FF] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_20px_#00F0FF] z-20 tracking-widest">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[1.8rem] p-8 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                  {plan.highlight && <div className="absolute inset-0 bg-linear-to-b from-[#00F0FF]/5 to-transparent pointer-events-none" />}
                  
                  <div className="relative z-10 flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-[#00F0FF]" : "text-white"}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                      {plan.period && <span className="text-white/50">{plan.period}</span>}
                    </div>
                    <p className="text-white/50 text-sm mb-8">{plan.desc}</p>
                    
                    <div className="w-full h-px bg-white/10 mb-8" />
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? "bg-[#00F0FF]/20 text-[#00F0FF]" : "bg-white/10 text-white/50"}`}>
                            <Check className="w-3 h-3" />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-auto">
                    {plan.cta === "Get Started" ? (
                      <Link href="/payment" className="block w-full">
                        <MagneticButton className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest transition-all ${
                          plan.highlight 
                            ? "bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 shadow-[0_0_30px_rgba(0,240,255,0.3)]" 
                            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                        }`}>
                          {plan.cta}
                        </MagneticButton>
                      </Link>
                    ) : plan.cta === "Contact Sales" ? (
                      <Link href="/contact" className="block w-full">
                        <MagneticButton className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest transition-all ${
                          plan.highlight 
                            ? "bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 shadow-[0_0_30px_rgba(0,240,255,0.3)]" 
                            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                        }`}>
                          {plan.cta}
                        </MagneticButton>
                      </Link>
                    ) : (
                      <MagneticButton className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest transition-all ${
                        plan.highlight 
                          ? "bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 shadow-[0_0_30px_rgba(0,240,255,0.3)]" 
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                      }`}>
                        {plan.cta}
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </PerspectiveTilt>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-panel-ultra rounded-3xl p-10 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
            <p className="text-white/50">Detailed breakdown of our security protocols.</p>
          </div>

          <div className="relative z-10 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-white/50 font-normal">Features</th>
                  <th className="py-6 px-4 text-center font-bold">Basic</th>
                  <th className="py-6 px-4 text-center font-bold text-[#00F0FF]">Pro Guard</th>
                  <th className="py-6 px-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-6 px-4 font-mono text-sm text-white/80">{row.feature}</td>
                    <td className="py-6 px-4 text-center text-white/60">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? <Check className="w-5 h-5 mx-auto text-[#00F0FF]" /> : <X className="w-5 h-5 mx-auto text-white/20" />
                      ) : row.basic}
                    </td>
                    <td className="py-6 px-4 text-center text-white">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="w-5 h-5 mx-auto text-[#00F0FF]" /> : <X className="w-5 h-5 mx-auto text-white/20" />
                      ) : row.pro}
                    </td>
                    <td className="py-6 px-4 text-center text-white">
                      {typeof row.ent === 'boolean' ? (
                        row.ent ? <Check className="w-5 h-5 mx-auto text-[#00F0FF]" /> : <X className="w-5 h-5 mx-auto text-white/20" />
                      ) : row.ent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
