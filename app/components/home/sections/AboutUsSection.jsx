// app/components/home/sections/AboutUsSection.jsx

"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: 1,
    name: "Sanjeev Vidyanand Sinha",
    role: "Founder & CEO",
    bio:
      "With over 15 years of experience in spiritual travel, Sanjeev has dedicated his life to guiding pilgrims on their sacred journeys, ensuring each experience is meaningful and hassle-free.",
    avatar: "/images/sanjeev.jpg",
  },
  {
    id: 2,
    name: "Anjali Verma",
    role: "Operations Manager",
    bio:
      "Anjali oversees the daily operations, ensuring that every pilgrimage is meticulously planned and executed, providing unparalleled support to our clients.",
    avatar: "/images/anjali.jpg",
  },
  // Add more team members as needed
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const AboutUsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll(".fade-in"), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "easeOut",
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-serif text-deepMaroon mb-10 text-center fade-in"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 fade-in"
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/our-story.jpg"
              alt="Our Story"
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12 fade-in"
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-deepMaroon mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4">
              Founded with a passion for spirituality and travel, Kashi Mitra Tours has guided countless pilgrims on meaningful journeys. We offer well-organized and heartfelt trips to India’s most sacred destinations, fostering spiritual growth and lasting memories.
            </p>
            <p className="text-gray-700">
              Our mission is to guide spiritual seekers on seamless and blessed pilgrimage journeys, ensuring each step is filled with reverence and memorable experiences. With a dedicated team and a commitment to excellence, we make your spiritual journey truly unforgettable.
            </p>
          </motion.div>
        </div>

        {/* Team Members */}
        <motion.h3
          className="text-3xl font-serif text-deepMaroon mb-10 text-center fade-in"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Meet Our Team
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-offWhite rounded-lg shadow-md p-6 text-center fade-in"
              variants={itemVariants}
            >
              <Image
                src={member.avatar}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full shadow-md mx-auto mb-4"
                priority
              />
              <h4 className="text-xl font-serif text-deepMaroon mb-2">
                {member.name}
              </h4>
              <p className="text-turquoise mb-4">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;