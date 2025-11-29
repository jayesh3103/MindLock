"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function HelixStrand({ color, offset = 0, speed = 1 }) {
  const ref = useRef(null);

  // Generate points for a helix
  const points = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 10 + offset;
      const radius = 1;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (t - 0.5) * 10; // Height

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [offset]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5 * speed;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function EmotionalDNA() {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        
        {/* Strand 1: Calm (Blue) */}
        <HelixStrand color="#00F0FF" offset={0} />
        
        {/* Strand 2: Anxiety (Red) - Offset by PI */}
        <HelixStrand color="#FF0055" offset={Math.PI} />
        
        {/* Connecting "Base Pairs" (Particles floating between) */}
        <HelixStrand color="#FFFFFF" offset={Math.PI / 2} speed={0.5} />
      </Canvas>
    </div>
  );
}
