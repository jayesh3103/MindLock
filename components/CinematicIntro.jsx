"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, Trail } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function SynapticSpark({ onConnect }) {
  const sparkRef = useRef(null);
  const [connected, setConnected] = useState(false);

  useFrame((state) => {
    if (!sparkRef.current || connected) return;

    // Move spark from left to center
    sparkRef.current.position.x += 0.1;

    // Check collision with center (approximate)
    if (sparkRef.current.position.x >= 0) {
      setConnected(true);
      onConnect();
    }
  });

  return (
    <Trail width={2} length={10} color="#00F0FF" attenuation={(t) => t * t}>
      <Sphere ref={sparkRef} args={[0.1, 16, 16]} position={[-10, 0, 0]}>
        <meshBasicMaterial color="#00F0FF" toneMapped={false} />
      </Sphere>
    </Trail>
  );
}

function CoreCrystal({ active }) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      if (active) {
         // Pulse effect when active
         const scale = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.1;
         meshRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        roughness={0}
        transmission={1}
        thickness={2}
        color={active ? "#00F0FF" : "#ffffff"}
        emissive={active ? "#00F0FF" : "#000000"}
        emissiveIntensity={active ? 2 : 0}
      />
    </mesh>
  );
}

export default function CinematicIntro({ onComplete }) {
  const [connected, setConnected] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const handleConnect = () => {
    setConnected(true);
    setTimeout(() => setTextVisible(true), 500);
    setTimeout(onComplete, 4000); // End intro after 4s
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <SynapticSpark onConnect={handleConnect} />
        <CoreCrystal active={connected} />
      </Canvas>

      {textVisible && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase font-mono">
            MindLock
          </h1>
          <p className="mt-4 text-cyan-400 text-sm tracking-[0.5em]">
            PROTOCOL INITIALIZED
          </p>
        </motion.div>
      )}
    </div>
  );
}
