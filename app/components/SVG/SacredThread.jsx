// app/svgAnimations/SacredThread.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";

const SacredThread = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-0 w-full h-1 bg-gold transform -translate-y-1/2"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
};

export default SacredThread;