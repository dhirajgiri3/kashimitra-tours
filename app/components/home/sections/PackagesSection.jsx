// app/components/home/sections/PackagesSection.jsx

"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import OGLCanvas from "../../common/ogl/OGLCanvas.jsx";

const packages = [
  {
    id: 1,
    title: "Kashi Darshan Tour",
    duration: "3 Days, 2 Nights",
    description:
      "Immerse yourself in the divine atmosphere of Kashi, visiting sacred temples, participating in evening Ganga Aarti, and experiencing spiritual rejuvenation.",
    image:
      "https://res-console.cloudinary.com/dgak25skk/thumbnails/v1/image/upload/v1736325151/aGluZHUtd21uX3UzbXF2dQ==/drilldown",
    link: "/packages/1",
  },
  {
    id: 2,
    title: "Ayodhya Spiritual Journey",
    duration: "2 Days, 1 Night",
    description:
      "Journey to the birthplace of Lord Rama and immerse in its divine history.",
    image:
      "https://res-console.cloudinary.com/dgak25skk/thumbnails/v1/image/upload/v1736325151/aGluZHUtd21uX3UzbXF2dQ==/drilldown",
    link: "/packages/2",
  },
  {
    id: 3,
    title: "Prayagraj Pilgrimage",
    duration: "2 Days, 1 Night",
    description:
      "Witness the confluence of rivers at the Triveni Sangam, a place of immense religious significance.",
    image:
      "https://res-console.cloudinary.com/dgak25skk/thumbnails/v1/image/upload/v1736325151/aGluZHUtd21uX3UzbXF2dQ==/drilldown",
    link: "/packages/3",
  },
  {
    id: 4,
    title: "Gaya Pilgrimage",
    duration: "3 Days, 2 Nights",
    description:
      "Participate in Pind Daan rituals and explore the site where Gautama Buddha attained enlightenment.",
    image:
      "https://res-console.cloudinary.com/dgak25skk/thumbnails/v1/image/upload/v1736325151/aGluZHUtd21uX3UzbXF2dQ==/drilldown",
    link: "/packages/4",
  },
  {
    id: 5,
    title: "Chitrakoot Pilgrimage",
    duration: "2 Days, 1 Night",
    description:
      "Explore the land of rich spirituality and natural beauty, believed to be where Lord Rama, Sita, and Lakshman spent their exile.",
    image:
      "https://res-console.cloudinary.com/dgak25skk/thumbnails/v1/image/upload/v1736325151/aGluZHUtd21uX3UzbXF2dQ==/drilldown",
    link: "/packages/5",
  },
];

const PackagesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".package-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-serif text-gray-800 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="package-card bg-gray-100 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: pkg.id * 0.2 }}
            >
              <OGLCanvas image={pkg.image} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-700">{pkg.title}</h3>
                <p className="text-gray-600">{pkg.duration}</p>
                <p className="mt-4 text-gray-600">{pkg.description}</p>
                <a href={pkg.link} className="mt-4 inline-block text-blue-500">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;