// app/components/CustomSlider.jsx

"use client";

import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lazy load any heavy components
// const GlowingSphere = lazy(() => import("../../3d/GlowingSphere"));

// gsap.registerPlugin(ScrollTrigger);

const CustomSlider = ({ slides, autoPlay = true, delay = 7000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
  }, [current, autoPlay, delay, slides.length]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 100, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -100, rotate: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                  priority
                />
                {/* Optional 3D Element */}
                {/* 
                <Suspense fallback={<div>Loading 3D...</div>}>
                  <GlowingSphere position={[0, 1, 0]} />
                </Suspense> 
                */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{
                    rotateX: [0, 10, -10, 0],
                    rotateY: [0, 10, -10, 0],
                    scale: [1, 1.02, 0.98, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                >
                  <h3 className="text-4xl md:text-6xl font-serif mb-4">{slide.title}</h3>
                  <p className="text-xl md:text-2xl">{slide.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-3 w-3 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></span>
        ))}
      </div>

      {/* Trail Effect */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={`trail-${slide.id}`}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`${slide.title} trail`}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50 blur-sm"
                  priority
                />
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSlider;