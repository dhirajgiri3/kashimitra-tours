"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TestimonialsSlider = ({ slides, autoPlay = true, delay = 7000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (autoPlay) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1)),
        delay
      );
    }
    return () => resetTimeout();
  }, [current, autoPlay, delay, slides.length]);

  const handleDotClick = index => setCurrent(index);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex="0"
      className="relative w-full min-h-[50vh] flex items-center justify-center bg-white py-10"
    >
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute mx-auto max-w-xl p-6 text-center"
            >
              <Image
                src={slide.avatar}
                alt={`Photo of ${slide.name}`}
                width={48} // 3rem in pixels
                height={48} // 3rem in pixels
                className="mx-auto mb-3 rounded-full object-cover shadow-lg border-4 border-deepMaroon"
                priority
              />
              <p className="mb-4 text-lg italic text-gray-700">
                &ldquo;{slide.quote}&rdquo;
              </p>
              <div className="flex justify-center mb-3">
                {[...Array(slide.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.164c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 00-.36 1.12l1.29 3.97c.3.92-.76 1.69-1.54 1.12L10 13.35l-3.37 2.45c-.78.57-1.84-.2-1.54-1.12l1.29-3.97a1 1 0 00-.36-1.12L2.1 9.4c-.78-.57-.38-1.81.59-1.81h4.16a1 1 0 00.95-.69l1.29-3.97z" />
                  </svg>
                ))}
              </div>
              <h4 className="text-xl font-serif text-deepMaroon">{slide.name}</h4>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              current === idx ? "bg-deepMaroon" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
