"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, AlertTriangle, RefreshCw, Database, Activity, Terminal, Cpu, Wifi } from "lucide-react";
import BiometricLock from "@/components/BiometricLock";
import SecureInput from "@/components/SecureInput";
import EncryptedMindscape from "@/components/EncryptedMindscape";
import { useVoiceInteraction } from "@/hooks/useVoiceInteraction";
import ScrambleText from "@/components/ScrambleText";
import CyberGlitchText from "@/components/CyberGlitchText";

export default function DemoPage() {
  const [isLocked, setIsLocked] = useState(true);
  const [isInitializing, setIsInitializing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isCrisisMode, setIsCrisisMode] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState("IDLE");
  const [showMindscape, setShowMindscape] = useState(false);
  
  const messagesEndRef = useRef(null);
  const { isListening, transcript, startListening, stopListening, speak, isSpeaking } = useVoiceInteraction();

  // Sync voice transcript to input
  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleUnlock = async () => {
    setIsLocked(false);
    setIsInitializing(true);
    
    // Cinematic Initialization Sequence
    await new Promise(r => setTimeout(r, 800));
    setStatus("ESTABLISHING SECURE HANDSHAKE...");
    await new Promise(r => setTimeout(r, 1000));
    setStatus("VERIFYING BIOMETRIC HASH...");
    await new Promise(r => setTimeout(r, 800));
    setStatus("LOADING ENCRYPTED CONTEXT...");
    await new Promise(r => setTimeout(r, 1000));
    
    setIsInitializing(false);
    setStatus("SECURE CHANNEL ACTIVE");
    setMessages([
      { id: 1, text: "Identity verified. Secure channel established. How are you feeling today?", sender: "ai" }
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsProcessing(true);

    // Simulation Sequence
    setStatus("ENCRYPTING INPUT...");
    await new Promise(r => setTimeout(r, 600));
    
    setStatus("STORING TO VAULT...");
    setShowMindscape(true); // Pulse mindscape
    await new Promise(r => setTimeout(r, 800));
    setShowMindscape(false);

    setStatus("ANALYZING SENTIMENT...");
    await new Promise(r => setTimeout(r, 600));

    let responseText = "I hear you. Can you tell me more about that?";
    if (isCrisisMode) {
      responseText = "I'm detecting significant distress. Please remember you're not alone. Would you like me to connect you with a professional resource?";
    } else if (input.toLowerCase().includes("sad") || input.toLowerCase().includes("anxious")) {
      responseText = "It sounds like you're carrying a heavy burden. I'm here to hold that space for you safely.";
    }

    setStatus("DECRYPTING RESPONSE...");
    await new Promise(r => setTimeout(r, 400));

    // Typing effect for AI response
    const aiMsgId = Date.now() + 1;
    setMessages(prev => [...prev, { id: aiMsgId, text: "", sender: "ai", isTyping: true }]);
    
    let currentText = "";
    const words = responseText.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + " ";
      setMessages(prev => prev.map(msg => 
        msg.id === aiMsgId ? { ...msg, text: currentText } : msg
      ));
      await new Promise(r => setTimeout(r, 50)); // Typing speed
    }
    
    setMessages(prev => prev.map(msg => 
      msg.id === aiMsgId ? { ...msg, isTyping: false } : msg
    ));

    speak(responseText); // Voice response
    
    setIsProcessing(false);
    setStatus("SECURE IDLE");
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-24 px-6 pb-6 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00F0FF_0%,transparent_60%)] opacity-5 blur-[100px] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {isLocked && <BiometricLock onUnlock={handleUnlock} />}
        
        {isInitializing && (
           <motion.div
             key="init"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#030303]"
           >
             <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-8">
               <motion.div 
                 className="h-full bg-[#00F0FF]"
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 3.6, ease: "easeInOut" }}
               />
             </div>
             <div className="font-mono text-[#00F0FF] text-sm tracking-widest flex flex-col items-center gap-2">
               <Activity className="w-6 h-6 animate-pulse" />
               <ScrambleText text={status} />
             </div>
           </motion.div>
        )}

        {!isLocked && !isInitializing && (
          <motion.div 
            key="chat"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl flex-1 flex gap-8 h-[85vh]"
          >
            {/* Left Panel: Chat Interface */}
            <div className="flex-1 flex flex-col gap-6 h-full relative z-10">
              {/* Header & Controls */}
              <div className="flex justify-between items-center glass-panel-ultra p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">System Status</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isProcessing ? "bg-yellow-500 animate-pulse" : "bg-green-500 shadow-[0_0_10px_#22c55e]"}`} />
                      <span className="font-bold text-xs text-[#00F0FF] font-mono tracking-wider">{status}</span>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Protocol</span>
                    <span className="font-mono text-xs text-white/80 flex items-center gap-2">
                      <Lock className="w-3 h-3 text-[#00F0FF]" /> AES-256-GCM
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsCrisisMode(!isCrisisMode)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                    isCrisisMode 
                      ? "bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]" 
                      : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {isCrisisMode ? <AlertTriangle className="w-4 h-4 animate-pulse" /> : <Shield className="w-4 h-4" />}
                  {isCrisisMode ? "CRISIS GUARD ACTIVE" : "CRISIS GUARD OFF"}
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 glass-panel-ultra rounded-3xl p-8 overflow-y-auto relative flex flex-col gap-6 scrollbar-hide border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#00F0FF]/5 pointer-events-none" />
                
                <AnimatePresence mode="popLayout">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] p-6 rounded-2xl backdrop-blur-xl border relative overflow-hidden group ${
                        msg.sender === "user" 
                          ? "bg-[#00F0FF]/10 border-[#00F0FF]/30 text-white rounded-tr-sm shadow-[0_0_30px_rgba(0,240,255,0.05)]" 
                          : "bg-white/5 border-white/10 text-white/90 rounded-tl-sm shadow-lg"
                      }`}>
                        {msg.sender === "user" && (
                           <div className="absolute inset-0 bg-linear-to-br from-[#00F0FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                        
                        <div className="flex items-center gap-2 mb-3 opacity-50 text-[10px] font-mono uppercase tracking-widest">
                          {msg.sender === "user" ? (
                            <>
                              <span className="text-[#00F0FF]">YOU</span>
                              <div className="w-1 h-1 rounded-full bg-[#00F0FF]" />
                            </>
                          ) : (
                            <>
                              <Cpu className="w-3 h-3 text-[#bd00ff]" />
                              <span className="text-[#bd00ff]">MINDLOCK CORE</span>
                            </>
                          )}
                        </div>
                        <p className="leading-relaxed relative z-10 text-sm md:text-base">
                          {msg.text}
                          {msg.isTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-[#00F0FF] animate-pulse align-middle" />}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isProcessing && !messages.some(m => m.isTyping) && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex gap-3 items-center">
                      <RefreshCw className="w-4 h-4 animate-spin text-[#00F0FF]" />
                      <span className="text-xs font-mono text-[#00F0FF] animate-pulse tracking-widest">
                        {status}...
                      </span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <SecureInput 
                value={input}
                onChange={setInput}
                onSend={handleSend}
                disabled={isProcessing || isInitializing}
                isListening={isListening}
                onToggleVoice={handleVoiceToggle}
              />
            </div>

            {/* Right Panel: Memory Vault Visualization */}
            <div className="hidden lg:flex w-96 flex-col gap-6">
              <div className="flex-1 glass-panel-ultra rounded-3xl overflow-hidden relative border border-[#00F0FF]/20 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-white/10 bg-black/20 backdrop-blur-md flex justify-between items-center z-20">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#00F0FF]" />
                    <span className="text-xs font-mono text-[#00F0FF] tracking-widest">MEMORY VAULT</span>
                  </div>
                  <div className="flex gap-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                     <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]/50" />
                     <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]/20" />
                  </div>
                </div>
                
                {/* 3D Mindscape Container */}
                <div className="flex-1 relative bg-[#020202]">
                  <div className={`absolute inset-0 transition-opacity duration-1000 ${showMindscape ? "opacity-100" : "opacity-60"}`}>
                    <EncryptedMindscape />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Activity Log */}
                <div className="h-48 bg-black/40 backdrop-blur-xl p-5 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono tracking-widest uppercase mb-1">
                    <Terminal className="w-3 h-3" />
                    System Log
                  </div>
                  <div className="flex-1 overflow-hidden font-mono text-[10px] space-y-2 text-[#00F0FF]/70 relative">
                    <div className="opacity-50">[{new Date().toLocaleTimeString()}] SYSTEM_READY</div>
                    <div>{">"} AES-256 ENCRYPTION ACTIVE</div>
                    <div>{">"} ZERO-KNOWLEDGE PROOF VERIFIED</div>
                    {isProcessing && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-white"
                      >
                        {">"} {status}...
                      </motion.div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Network Status */}
                  <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Wifi className="w-3 h-3" /> SECURE_NET
                    </span>
                    <span>LATENCY: 12ms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
