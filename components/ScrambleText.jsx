"use client";
import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function ScrambleText({ 
  text, 
  className = "", 
  scrambleSpeed = 30,
  revealSpeed = 50 
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, scrambleSpeed);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span 
      className={`inline-block cursor-default ${className}`}
      onMouseEnter={() => {
        setIsHovering(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}
