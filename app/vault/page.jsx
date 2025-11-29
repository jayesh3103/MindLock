"use client";

import MemoryVault from "@/components/MemoryVault";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VaultPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#0a1a2f] via-[#050505] to-[#050505] opacity-50 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-12">
        <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-[#00F0FF] transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm">BACK TO HORIZON</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#00F0FF]" />
          <span className="font-mono text-lg tracking-widest font-bold">MINDLOCK VAULT</span>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10">
        <MemoryVault />
      </div>
    </main>
  );
}
