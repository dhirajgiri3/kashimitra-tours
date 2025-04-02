// app/svgAnimations/SVGTemple.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";

const SVGTemple = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-10 left-10 z-10"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* Simplified Temple Icon */}
      <rect x="24" y="30" width="16" height="20" fill="#FFD700" stroke="#800000" strokeWidth="2" />
      <polygon points="32,10 22,30 42,30" fill="#FFD700" stroke="#800000" strokeWidth="2" />
      {/* Add more SVG elements as needed */}
    </motion.svg>
  );
};

export default SVGTemple;