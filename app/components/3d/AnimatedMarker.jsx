// app/components/AnimatedMarker.jsx

"use client";

import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

const AnimatedMarker = ({ position = [0, 0, 0] }) => {
  const markerRef = useRef();

  // useFrame(() => {
  //   if (markerRef.current) {
  //     markerRef.current.rotation.y += 0.01;
  //     markerRef.current.position.y = Math.sin(Date.now() * 0.005) * 0.1;
  //   }
  // });

  return (
    // <mesh ref={markerRef} position={position} castShadow>
    <div>
      {/* 3D Sphere Placeholder */}
      {/* Uncomment and replace with actual Three.js mesh when implementing 3D */}
    </div>
    // </mesh>
  );
};

export default AnimatedMarker;