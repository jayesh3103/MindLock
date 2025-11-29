"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-12"
        >
          Privacy <span className="text-[#00F0FF] text-glow">Policy</span>
        </motion.h1>

        <div className="glass-panel-ultra p-8 md:p-12 rounded-3xl space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Zero-Knowledge Architecture</h2>
            <p>
              MindLock is built on a fundamental principle of zero-knowledge privacy. This means that <strong>we cannot read your messages</strong>. Your data is encrypted on your device before it ever reaches our servers. We do not hold the decryption keys.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Data Collection</h2>
            <p>
              We collect the absolute minimum amount of data required to operate the service:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-white/60">
              <li>Account metadata (to verify subscription status)</li>
              <li>Encrypted blobs (which we cannot decrypt)</li>
              <li>Anonymous usage statistics (to improve performance)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We do not share your data with advertisers. Your mind is not a product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Deletion</h2>
            <p>
              You have the right to delete your account and all associated data at any time. Because of our encryption architecture, once you delete your data, it is gone forever and cannot be recovered by anyone, including us.
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
