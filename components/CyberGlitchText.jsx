"use client";

import React from "react";
import "./CyberGlitchText.css"; // We'll create this CSS file next

export default function CyberGlitchText({ text, className = "" }) {
  return (
    <div className={`glitch-wrapper ${className}`}>
      <div className="glitch" data-text={text}>
        {text}
      </div>
    </div>
  );
}
