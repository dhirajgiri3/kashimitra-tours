// app/components/GlowingSphere.jsx

"use client";

import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { MeshWobbleMaterial } from "@react-three/drei";

const GlowingSphere = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.01;
  //   }
  // });

  return (
    <div>
      {/* 3D Glowing Sphere Placeholder */}
      {/* Uncomment and replace with Three.js mesh when implementing 3D */}
    </div>
    // <mesh ref={meshRef} position={position}>
    //   <sphereGeometry args={[1, 32, 32]} />
    //   <MeshWobbleMaterial
    //     color="#FFD700"
    //     speed={1}
    //     factor={0.6}
    //     emissive="#FFD700"
    //     emissiveIntensity={1}
    //   />
    // </mesh>
  );
};

export default GlowingSphere;