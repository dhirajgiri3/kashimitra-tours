"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

// Enhanced package data
const packageData = [
    {
        id: "1",
        title: "Kashi Darshan Tour",
        duration: "3 Days, 2 Nights",
        description: "Experience the spiritual heart of India at the sacred city of Kashi. Guided tours to key temples, participation in evening Ganga Aarti, and cultural immersion.",
        highlights: [
            "Evening Ganga Aarti experience",
            "Visit to Kashi Vishwanath Temple",
            "Boat ride on the holy Ganges",
            "Explore ancient temples and ghats"
        ],
        itinerary: [
            "Day 1: Arrival and hotel check-in. Evening Ganga Aarti at Dashashwamedh Ghat.",
            "Day 2: Visit Kashi Vishwanath Temple, Sarnath, and other key temples.",
            "Day 3: Morning boat ride on the Ganges and departure.",
        ],
        images: [
            "/images/kashi1.jpg",
            "/images/kashi2.jpg",
            "/images/kashi3.jpg",
        ],
        price: "$291",
        inclusions: [
            "Hotel accommodation",
            "Daily breakfast and dinner",
            "Local transportation",
            "Expert guide"
        ]
    }
];

const PackageDetailPage = () => {
    const params = useParams();
    const [pkg, setPkg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchPackage = () => {
            try {
                setLoading(true);
                const foundPackage = packageData.find((p) => p.id === params.id);
                if (!foundPackage) {
                    throw new Error("Package not found");
                }
                setPkg(foundPackage);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchPackage();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-deepMaroon"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-deepMaroon mb-4">Oops! {error}</h2>
                    <a href="/packages" className="text-saffron hover:text-gold underline">
                        Return to Packages
                    </a>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{pkg.title} | Kashimitra Tours</title>
                <meta name="description" content={pkg.description} />
            </Head>

            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-4xl font-serif text-deepMaroon mb-8 text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {pkg.title}
                    </motion.h1>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {pkg.images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image}
                                    alt={`${pkg.title} Image ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                                    priority={index < 2}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Modal */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                            >
                                <motion.div
                                    className="relative max-w-4xl w-full"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.9 }}
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Large view"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                    <button
                                        className="absolute top-4 right-4 text-white text-xl"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        ×
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Package Details */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-2xl font-serif text-deepMaroon mb-4">About This Package</h2>
                            <p className="text-darkGray mb-6">{pkg.description}</p>
                            
                            <h3 className="text-xl font-serif text-deepMaroon mb-4">Highlights</h3>
                            <ul className="list-disc list-inside text-darkGray mb-6">
                                {pkg.highlights.map((highlight, index) => (
                                    <li key={index} className="mb-2">{highlight}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-serif text-deepMaroon mb-4">Package Details</h3>
                                <p className="text-lg font-semibold mb-2">Duration: {pkg.duration}</p>
                                <p className="text-2xl font-bold text-deepMaroon mb-4">Price: {pkg.price}</p>
                                
                                <h4 className="text-lg font-serif text-deepMaroon mb-2">Inclusions:</h4>
                                <ul className="list-disc list-inside text-darkGray mb-6">
                                    {pkg.inclusions.map((item, index) => (
                                        <li key={index} className="mb-1">{item}</li>
                                    ))}
                                </ul>

                                <motion.button
                                    className="w-full py-3 bg-saffron text-white rounded-md shadow-lg"
                                    whileHover={{ scale: 1.02, backgroundColor: "#FFD700" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackageDetailPage;