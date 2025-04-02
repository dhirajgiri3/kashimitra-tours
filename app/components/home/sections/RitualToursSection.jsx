// app/components/home/sections/RitualToursSection.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const rituals = [
    {
        id: 1,
        title: "Pind Daan",
        description: "Honor your ancestors with our sacred Pind Daan rituals.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        delay: 0.2,
    },
    {
        id: 2,
        title: "Tarpana",
        description: "Offer sacred water to ancestors in our Tarpana ceremonies.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        ),
        delay: 0.4,
    },
    {
        id: 3,
        title: "Asthi Visarjana",
        description: "Honor and release your loved ones' remains into holy rivers.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.785.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.098 9.397c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
        ),
        delay: 0.6,
    },
    {
        id: 4,
        title: "Upnayana Sanskar",
        description: "Celebrate the sacred thread ceremony with traditional rituals.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ),
        delay: 0.8,
    },
    {
        id: 5,
        title: "Hindu Vedic Wedding",
        description: "Experience a traditional Vedic wedding filled with sacred mantras.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6M9 16h6"
                />
            </svg>
        ),
        delay: 1.0,
    },
];

const RitualToursSection = () =>
{
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
                    Ritual Tours
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rituals.map((ritual, index) => (
                        <motion.div
                            key={ritual.id}
                            className="bg-white rounded-lg shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: ritual.delay }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 mx-auto text-turquoise">{ritual.icon}</div>
                            <h3 className="text-2xl font-serif text-deepMaroon mb-2">
                                {ritual.title}
                            </h3>
                            <p className="text-darkGray">{ritual.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RitualToursSection;