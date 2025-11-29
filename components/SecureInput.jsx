"use client";

import React, { useState, useEffect } from "react";
import { Send, Mic, MicOff } from "lucide-react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export default function SecureInput({ value, onChange, onSend, disabled, isListening, onToggleVoice }) {
  const [displayValue, setDisplayValue] = useState(value);

  // Scramble effect on typing
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayValue(
        value
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return value[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterations >= value.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="glass-panel p-2 rounded-full flex items-center gap-2 relative z-20 border border-white/10 focus-within:border-[#00F0FF]/50 transition-colors">
      <button
        onClick={onToggleVoice}
        className={`p-3 rounded-full transition-all ${
          isListening 
            ? "bg-red-500/20 text-red-500 animate-pulse" 
            : "text-white/50 hover:text-white hover:bg-white/10"
        }`}
      >
        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      </button>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        placeholder={isListening ? "Listening..." : "Type your thoughts securely..."}
        className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-white placeholder-white/30 font-mono"
        disabled={disabled}
      />

      <button 
        onClick={onSend}
        disabled={!value.trim() || disabled}
        className="p-3 bg-[#00F0FF] rounded-full text-black hover:bg-[#00F0FF]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}
