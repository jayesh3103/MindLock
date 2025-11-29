"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, Database } from "lucide-react";
import { EncryptionService } from "@/lib/security/encryption";

// Mock encrypted data (in a real app, this would come from DB)
const MOCK_MEMORIES = [
  {
    id: "mem_001",
    timestamp: "2025-11-28 09:30",
    encryptedContent: "U2FsdGVkX1+...", // Placeholder
    emotion: "Anxious",
  },
  {
    id: "mem_002",
    timestamp: "2025-11-27 14:15",
    encryptedContent: "U2FsdGVkX1+...",
    emotion: "Hopeful",
  },
  {
    id: "mem_003",
    timestamp: "2025-11-26 18:45",
    encryptedContent: "U2FsdGVkX1+...",
    emotion: "Calm",
  },
];

export default function MemoryVault() {
  const [memories, setMemories] = useState(MOCK_MEMORIES);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [key, setKey] = useState(null);

  useEffect(() => {
    // Generate a session key for demo purposes
    EncryptionService.generateKey().then(setKey);
  }, []);

  const handleDecrypt = async (id) => {
    if (!key) return;
    
    setSelectedMemory(id);
    setIsDecrypting(true);

    // Simulate decryption delay and process
    setTimeout(async () => {
      // In a real app, we would decrypt the actual content.
      // Here we just reveal a mock decrypted string based on ID.
      const decryptedText = 
        id === "mem_001" ? "I've been feeling overwhelmed by the project deadline..." :
        id === "mem_002" ? "The meditation technique really helped me sleep last night." :
        "Just wanted to check in and see how my progress is tracking.";

      setMemories(prev => prev.map(m => 
        m.id === id ? { ...m, decryptedContent: decryptedText } : m
      ));
      setIsDecrypting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light tracking-widest flex items-center gap-3">
          <Database className="w-6 h-6 text-[#00F0FF]" />
          MEMORY VAULT
        </h2>
        <div className="text-xs text-white/50 font-mono">
          {key ? "KEY: ACTIVE" : "KEY: MISSING"}
        </div>
      </div>

      <div className="space-y-4">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`glass-panel p-4 rounded-xl border transition-all duration-300 ${
              selectedMemory === memory.id 
                ? "border-[#00F0FF] bg-[#00F0FF]/5" 
                : "border-white/5 hover:border-white/20"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  memory.emotion === "Anxious" ? "bg-red-500" :
                  memory.emotion === "Hopeful" ? "bg-yellow-400" :
                  "bg-blue-400"
                }`} />
                <span className="text-xs font-mono text-white/50">{memory.timestamp}</span>
              </div>
              {memory.decryptedContent ? (
                <Unlock className="w-4 h-4 text-[#00F0FF]" />
              ) : (
                <Lock className="w-4 h-4 text-white/30" />
              )}
            </div>

            <div className="relative overflow-hidden">
              {memory.decryptedContent ? (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-white/90 leading-relaxed"
                >
                  {memory.decryptedContent}
                </motion.p>
              ) : (
                <div 
                  className="cursor-pointer group"
                  onClick={() => handleDecrypt(memory.id)}
                >
                  <p className="text-sm font-mono text-white/20 break-all blur-[2px] group-hover:text-[#00F0FF]/50 transition-colors">
                    {memory.encryptedContent}
                    {memory.encryptedContent}
                    {memory.encryptedContent}
                  </p>
                  
                  {selectedMemory === memory.id && isDecrypting && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="text-xs font-mono text-[#00F0FF] animate-pulse">
                        DECRYPTING...
                      </div>
                    </div>
                  )}
                  
                  {selectedMemory !== memory.id && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/80 px-3 py-1 rounded-full text-xs text-[#00F0FF] border border-[#00F0FF]/30">
                        CLICK TO DECRYPT
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
