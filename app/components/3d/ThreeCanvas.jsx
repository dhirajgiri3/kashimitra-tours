// app/components/ThreeCanvas.jsx

"use client";

import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, Html } from "@react-three/drei";

const ThreeCanvas = ({ children }) => {
  return (
    <div>
      {/* 
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 60 }}
        style={{ width: "100%", height: "100%", minHeight: "500px" }}
      >
        {/* Ambient Light 
        <ambientLight intensity={0.5} />

        {/* Directional Light 
        <directionalLight
          position={[5, 10, 7.5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Additional Lighting 
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        <spotLight position={[15, 20, 5]} angle={0.3} intensity={0.5} castShadow />

        {/* Environment 
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Environment preset="sunset" />
          {children}
        </Suspense>

        {/* Controls 
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
      */}
    </div>
  );
};

export default ThreeCanvas;