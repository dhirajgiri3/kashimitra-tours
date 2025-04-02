// app/components/sections/home/Homepage.jsx

"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import PackagesSection from "./sections/PackagesSection";
import RitualToursSection from "./sections/RitualToursSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import AboutUsSection from "./sections/AboutUsSection";
import ContactUsSection from "./sections/ContactUsSection";
// import SacredThread from "../../SVG/SacredThread";

// Lazy load 3D components
// const GlowingOmSymbol = dynamic(() => import("../../3d/GlowingOmSymbol"), {
//     ssr: false,
// });

const Homepage = () =>
{
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Our Services Section */}
            <ServicesSection />

            {/* Packages Section */}
            <PackagesSection />

            {/* Ritual Tours Section */}
            <RitualToursSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* About Us Section */}
            <AboutUsSection />

            {/* Contact Us Section */}
            <ContactUsSection />

            {/* Unique Animation: Sacred Thread */}
            {/* 
            <SacredThread />
            */}

            {/* Optional: Glowing Om Symbol */}
            {/* 
            <Suspense fallback={<div>Loading 3D...</div>}>
                <GlowingOmSymbol />
            </Suspense> 
            */}

            {/* 3D Elements Placeholder */}
            <div className="relative">
                <div className="absolute bottom-10 right-10">
                    <p className="text-darkGray">3D Elements Placeholder</p>
                </div>
            </div>
        </>
    );
};

export default Homepage;