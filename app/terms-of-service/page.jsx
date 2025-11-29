"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-12"
        >
          Terms of <span className="text-[#00F0FF] text-glow">Service</span>
        </motion.h1>

        <div className="glass-panel-ultra p-8 md:p-12 rounded-3xl space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using MindLock, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Medical Disclaimer</h2>
            <p className="text-[#00F0FF]">
              MindLock is an AI tool for self-reflection and journaling. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-2">
              If you are in crisis or you think you may have an emergency, call your doctor or local emergency number immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password (encryption keys). You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall MindLock Inc. be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>
          
          <div className="pt-8 border-t border-white/10 text-sm text-white/40">
            Last Updated: November 29, 2025
          </div>
        </div>
      </div>
    </main>
  );
}
