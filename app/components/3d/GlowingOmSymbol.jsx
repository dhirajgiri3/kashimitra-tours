// app/components/3d/GlowingOmSymbol.jsx

"use client";

import React, { useRef } from "react";
// import { useFrame, useLoader } from "@react-three/fiber";
// import * as THREE from "three";
// import { TextGeometry } from "three-stdlib";

// THREE.TextGeometry = TextGeometry;

// const vertexShader = `
// varying vec2 vUv;
// void main() {
//   vUv = uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
// `;

// const fragmentShader = `
// uniform float time;
// varying vec2 vUv;

// void main() {
//   float glow = sin(time + vUv.x * 10.0) * 0.5 + 0.5;
//   gl_FragColor = vec4(glow, glow * 0.5, 1.0, 1.0);
// }
// `;

const GlowingOmSymbol = () => {
  const materialRef = useRef();

  // Load the font synchronously using useLoader
  // const font = useLoader(
  //   THREE.FontLoader,
  //   "/fonts/helvetiker_regular.typeface.json"
  // );

  // useFrame(({ clock }) => {
  //   if (materialRef.current) {
  //     materialRef.current.uniforms.time.value = clock.getElapsedTime();
  //   }
  // });

  return (
    <div>
      {/* 3D Glowing Om Symbol Placeholder */}
      {/* Uncomment and implement Three.js mesh and shaders when needed */}
    </div>
    // <mesh position={[0, 3, 0]} scale={[0.5, 0.5, 0.5]}>
    //   <textGeometry
    //     args={["ॐ", { font: font, size: 1, height: 0.2 }]}
    //   />
    //   <shaderMaterial
    //     ref={materialRef}
    //     vertexShader={vertexShader}
    //     fragmentShader={fragmentShader}
    //     uniforms={{
    //       time: { value: 0 },
    //     }}
    //   />
    // </mesh>
  );
};

export default GlowingOmSymbol;