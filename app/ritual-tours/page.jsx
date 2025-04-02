// app/ritual-tours/page.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
// import ThreeCanvas from "../components/3d/ThreeCanvas";
// import GlowingOmSymbol from "../components/3d/GlowingOmSymbol";
import Image from "next/image";

const ritualTours = [
    {
        id: 1,
        title: "Ganga Aarti Experience",
        description:
            "Participate in the mesmerizing Ganga Aarti at Dashashwamedh Ghat, a spiritual ritual that captivates the heart.",
        image: "/images/ganga-aarti.jpg",
    },
    {
        id: 2,
        title: "Temple Hopping",
        description:
            "Visit the most sacred temples in Kashi, each with its own unique history and spiritual significance.",
        image: "/images/temple-hopping.jpg",
    },
    // Add more ritual tours as needed
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const RitualToursPage = () => {
    return (
        <div className="relative bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl font-serif text-deepMaroon mb-12 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Ritual Tours
                </motion.h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {ritualTours.map((tour) => (
                        <motion.div
                            key={tour.id}
                            className="bg-offWhite rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            variants={cardVariants}
                        >
                            <Image
                                src={tour.image}
                                alt={tour.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                                priority
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-serif text-deepMaroon mb-2">
                                    {tour.title}
                                </h3>
                                <p className="text-darkGray mb-4">
                                    {tour.description}
                                </p>
                                <motion.a
                                    href={`/ritual-tours/${tour.id}`}
                                    className="inline-block bg-saffron text-white px-4 py-2 rounded-md hover:bg-gold transition-colors duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    aria-label={`View details of ${tour.title}`}
                                >
                                    View Details
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* 3D Elements */}
            {/* 
            <ThreeCanvas>
                {/* <GlowingOmSymbol /> 
                {/* Add more 3D components if needed 
            </ThreeCanvas> 
            */}
            {/* 3D Elements Placeholder */}
            <div className="relative">
              <div className="absolute bottom-10 right-10 transform -translate-x-1/2 z-10">
                <p className="text-darkGray">3D Elements Placeholder</p>
              </div>
            </div>
        </div>
    );
};

export default RitualToursPage;