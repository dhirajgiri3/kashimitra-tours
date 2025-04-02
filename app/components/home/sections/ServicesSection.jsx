// app/components/ServicesSection.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Hotel Booking",
    description: "Stay in divine comfort near the holiest sites.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Example Icon: Checkmark */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Flight Booking",
    description: "Fly effortlessly to your sacred destinations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Example Icon: Arrow */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 17l4-4-4-4m8 8l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Bus & Travel Services",
    description: "Convenient and reliable transport for your pilgrimage.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Example Icon: Hamburger Menu */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 6h14M5 18h14"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Travel Packages",
    description: "Tailored journeys to suit your spiritual needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Example Icon: Plus Sign */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-lightBeige py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-serif text-deepMaroon mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-offWhite rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="text-2xl font-serif text-deepMaroon mb-2">
                {service.title}
              </h3>
              <p className="text-darkGray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;