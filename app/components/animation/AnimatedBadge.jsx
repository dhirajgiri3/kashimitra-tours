// app/components/AnimatedBadge.jsx

"use client";

import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { MeshStandardMaterial } from "three";

const AnimatedBadge = () => {
  const meshRef = useRef();

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.01;
  //     meshRef.current.rotation.x += 0.005;
  //   }
  // });

  return (
    <div>
      {/* 3D Animated Badge Placeholder */}
      {/* Uncomment and replace with Three.js mesh when implementing 3D */}
    </div>
    // <mesh ref={meshRef} position={[0, 0.5, 0]}>
    //   <ringGeometry args={[0.5, 0.7, 32]} />
    //   <MeshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1} />
    // </mesh>
  );
};

export default AnimatedBadge;