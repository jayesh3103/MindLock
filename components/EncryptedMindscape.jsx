"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const MEMORY_KEYWORDS = ["HOPE", "FEAR", "JOY", "PAIN", "CALM", "LOSS", "LOVE", "VOID"];

function MemoryBlock({ position, keyword }) {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate slowly
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
      
      // Pulse scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={hovered ? "#00F0FF" : "#1a1a1a"}
          emissive={hovered ? "#00F0FF" : "#000000"}
          emissiveIntensity={hovered ? 2 : 0}
          roughness={0.2}
          metalness={0.8}
          transmission={hovered ? 0.2 : 0}
          thickness={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.ttf" // Note: Font loading might need adjustment in real app
        >
          {keyword}
        </Text>
      )}
    </group>
  );
}

export default function EncryptedMindscape() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00F0FF" intensity={0.5} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {MEMORY_KEYWORDS.map((keyword, i) => {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 6;
            const z = (Math.random() - 0.5) * 5;
            return <MemoryBlock key={i} position={[x, y, z]} keyword={keyword} />;
          })}
        </Float>
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-[#00F0FF] text-xs tracking-[0.2em] animate-pulse">
          HOVER TO DECRYPT MEMORY FRAGMENTS
        </p>
      </div>
    </div>
  );
}
