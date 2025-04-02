// app/components/HeroSection.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import GlowingOmSymbol from "../../3d/GlowingOmSymbol";
import ThreeCanvas from "../../3d/ThreeCanvas";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/background-video.mp4"
        aria-label="Background video showcasing Kashi Mitra Tours"
      ></video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm flex flex-col justify-center items-center text-center z-10 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-gold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Embark on a Sacred Journey with Kashi Mitra Tours
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-charcoalBlack mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the Divine Essence of Kashi, Ayodhya, Prayagraj, Gaya, Chitrakoot, and Beyond.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="/packages"
            className="px-6 py-3 bg-saffron text-white rounded-md shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05, backgroundColor: "#FFD700" }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Explore Our Packages"
          >
            Explore Our Packages
          </motion.a>
          <motion.a
            href="/contact-us"
            className="px-6 py-3 bg-white text-saffron border border-saffron rounded-md shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05, backgroundColor: "#FFD700", color: "#fff" }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Book Your Journey"
          >
            Book Your Journey
          </motion.a>
        </motion.div>
      </div>

      {/* 3D Elements */}
      <ThreeCanvas>
        <GlowingOmSymbol />
      </ThreeCanvas>
    </section>
  );
};

export default HeroSection;