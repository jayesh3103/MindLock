"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CreditCard, Calendar, Shield, CheckCircle, AlertTriangle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function PaymentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    await new Promise(r => setTimeout(r, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 px-6 pb-20 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F0FF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <Link href="/pricing" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors text-sm font-mono group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          BACK TO PLANS
        </Link>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="payment-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-panel-ultra p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">Secure Checkout</h1>
                    <p className="text-white/50 text-xs font-mono flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#00F0FF]" />
                      256-BIT ENCRYPTED CONNECTION
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/20">
                    <Shield className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                </div>

                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-white">Pro Guard Plan</div>
                    <div className="text-xs text-white/50">Monthly Subscription</div>
                  </div>
                  <div className="text-xl font-bold text-[#00F0FF]">$12.00</div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/50 uppercase tracking-wider">Cardholder Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="JOHN DOE"
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00F0FF]/50 focus:bg-[#00F0FF]/5 transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/50 uppercase tracking-wider">Card Number</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="0000 0000 0000 0000"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm pl-10 focus:outline-none focus:border-[#00F0FF]/50 focus:bg-[#00F0FF]/5 transition-all placeholder:text-white/20 font-mono"
                      />
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider">Expiry</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm pl-10 focus:outline-none focus:border-[#00F0FF]/50 focus:bg-[#00F0FF]/5 transition-all placeholder:text-white/20 font-mono"
                        />
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider">CVC</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm pl-10 focus:outline-none focus:border-[#00F0FF]/50 focus:bg-[#00F0FF]/5 transition-all placeholder:text-white/20 font-mono"
                        />
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      </div>
                    </div>
                  </div>

                  <MagneticButton 
                    className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest transition-all flex items-center justify-center gap-2 ${
                      isLoading ? "bg-white/10 cursor-wait" : "bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        PROCESSING...
                      </>
                    ) : (
                      <>
                        PAY $12.00
                        <Lock className="w-3 h-3" />
                      </>
                    )}
                  </MagneticButton>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-panel-ultra p-8 rounded-3xl border border-[#00F0FF]/30 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00F0FF_0%,transparent_70%)] opacity-10 pointer-events-none" />
              
              <div className="w-20 h-20 bg-[#00F0FF]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00F0FF]/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <CheckCircle className="w-10 h-10 text-[#00F0FF]" />
              </div>
              
              <h2 className="text-2xl font-bold mb-2 text-white">Payment Successful</h2>
              <p className="text-white/50 mb-8 max-w-xs mx-auto">Your Pro Guard subscription is now active. Welcome to the future of cognitive security.</p>
              
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-8 text-left">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/50">Transaction ID</span>
                  <span className="font-mono text-[#00F0FF]">TX-{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Amount Paid</span>
                  <span className="font-mono text-white">$12.00</span>
                </div>
              </div>

              <Link href="/demo">
                <MagneticButton className="w-full py-4 rounded-xl font-bold text-sm tracking-widest bg-white text-black hover:bg-white/90 transition-all">
                  ACCESS DASHBOARD
                </MagneticButton>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
