// app/components/TestimonialsSection.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialsSlider from "../../common/slider/TestimonialsSlider";

const testimonials = [
  {
    id: 1,
    name: "Ankit Singh",
    quote:
      "Kashi Mitra Tours made my pilgrimage unforgettable. Every detail was thoughtfully arranged.",
    rating: 5,
    avatar: "https://cdn.pixabay.com/photo/2024/04/13/02/53/ai-generated-8693088_1280.jpg", // Ensure this image exists in public/images/
  },
  {
    id: 2,
    name: "Priya Mehta",
    quote:
      "The Ayodhya Spiritual Journey was a life-changing experience. Highly recommend Kashi Mitra Tours!",
    rating: 5,
    avatar: "https://cdn.pixabay.com/photo/2024/03/19/15/20/woman-8643445_1280.png", // Ensure this image exists in public/images/
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <section className="bg-deepMaroon py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-serif text-white mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Custom Testimonials Slider */}
        <TestimonialsSlider slides={testimonials} autoPlay={true} delay={7000} />
      </div>
    </section>
  );
};

export default TestimonialsSection;