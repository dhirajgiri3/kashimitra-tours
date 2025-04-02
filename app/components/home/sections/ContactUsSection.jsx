// app/components/home/sections/ContactUsSection.jsx

"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactForm from "../../common/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const ContactUsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.from(sectionRef.current.querySelectorAll(".animate"), {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "easeOut",
            stagger: 0.2,
        });
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-semibold text-gray-800 mb-8 text-center animate"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Get in Touch
                </motion.h2>
                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    {/* Contact Form */}
                    <motion.div
                        className="md:w-1/2 mb-8 md:mb-0 animate"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Contact Details & Interactive 3D Map */}
                    <motion.div
                        className="md:w-1/2 animate"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Office</h3>
                            <p className="text-gray-600">Vidyanand Sinha (Sanjeev)</p>
                            <p className="text-gray-600">
                                Email:{' '}
                                <a
                                    href="mailto:kashimitra@gmail.com"
                                    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                                >
                                    kashimitra@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-600">
                                Phone:{' '}
                                <a
                                    href="tel:+919415756252"
                                    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                                >
                                    +91 94157 56252
                                </a>
                            </p>
                            <p className="text-gray-600">Address: Pandeypur, Varanasi, India</p>
                            <div className="flex space-x-4 mt-4">
                                <motion.a
                                    href="https://wa.me/919415756252"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    aria-label="WhatsApp"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {/* WhatsApp Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.52 3.48A11.952 11.952 0 0012 0C5.373 0 0 5.373 0 12c0 3.866 1.592 7.419 4.198 10.073L0 24l3.06-1.043A11.951 11.951 0 0024 12c0-6.627-5.373-12-12-12zm-8.38 17.1c-1.52 0-2.93-.44-4.11-1.3l-.29-.21-2.52.86.86-2.52-.21-.29c-.86-1.18-1.3-2.59-1.3-4.11 0-6.28 5.1-11.38 11.38-11.38 2.02 0 3.93.63 5.58 1.75L19.15 6c.28.48.42 1.05.42 1.63 0 1.52-.44 2.93-1.3 4.11l-.21.29.86 2.52-2.52-.86-.29.21c-1.18.86-2.59 1.3-4.11 1.3zm6.88-6.88c-.06-.17-.3-.17-.36 0l-.9 2.6a.31.31 0 00.14.34l1.02.35c.17.06.24.28.13.43l-.78 1.21c-.1.15-.32.2-.48.12l-2.62-.88a.31.31 0 00-.37.14l-.5 1.24c-.05.15.03.31.17.38l2.3 1.71c.18.13.42.07.53-.12l1.14-2.47c.11-.23-.02-.5-.25-.6l-2.75-1.17z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="tel:+919415756252"
                                    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    aria-label="Phone"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {/* Phone Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 012 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.21 1.11l-2.2 2.2z" />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                        {/* Placeholder for Interactive 3D Map */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
                            {/* Integrate WebGL map here */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;