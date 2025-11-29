"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Scale, AlertCircle } from "lucide-react";

export default function EthicsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Ethics & <span className="text-[#00F0FF]">Compliance</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Building a mental health AI requires more than just code. It requires a moral compass.
          </p>
        </motion.div>

        {/* Core Principles */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-red-500" />,
              title: "Do No Harm",
              desc: "Our AI is trained to prioritize user safety above all else. It avoids harmful suggestions and de-escalates conflicts."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-[#00F0FF]" />,
              title: "Privacy First",
              desc: "We do not monetize your data. We do not sell ads. Your mental health journey is not a product."
            },
            {
              icon: <Scale className="w-8 h-8 text-green-500" />,
              title: "Transparency",
              desc: "We are open about our AI's capabilities and limitations. MindLock is a companion, not a replacement for a doctor."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-8 rounded-2xl border border-white/10"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Disclaimer & Resources */}
        <section className="glass-panel p-8 md:p-12 rounded-3xl border border-yellow-500/20 bg-yellow-500/5">
          <div className="flex items-start gap-6">
            <AlertCircle className="w-12 h-12 text-yellow-500 shrink-0" />
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-yellow-500">Important Medical Disclaimer</h2>
              <p className="text-white/80 leading-relaxed">
                MindLock is an AI-powered emotional support companion. It is <strong>NOT</strong> a licensed medical device and does not provide medical diagnosis or treatment.
              </p>
              <p className="text-white/80 leading-relaxed">
                If you are experiencing a crisis or have thoughts of self-harm, please contact emergency services immediately.
              </p>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="font-bold mb-4">Emergency Resources</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm text-white/60">
                  <li>🇺🇸 National Suicide Prevention Lifeline: <strong>988</strong></li>
                  <li>🇺🇸 Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
                  <li>🌍 International Helplines: <strong>findahelpline.com</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
