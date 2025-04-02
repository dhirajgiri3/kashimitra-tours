// app/components/Navbar.jsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () =>
{
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() =>
  {
    const handleScroll = () =>
    {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  const linkVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const navItems = [
    "Home",
    "Packages",
    "Services",
    "Ritual Tours",
    "Testimonials",
    "About Us",
    "Contact Us",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <motion.img
                  className="h-10 w-10"
                  src="https://img.icons8.com/?size=100&id=10374&format=png&color=000000"
                  alt="Pranava Logo"
                  aria-hidden="true"
                />
                <span className="ml-3 font-serif text-2xl font-bold bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
                  Kashi Mitra
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                  <p className="text-charcoalBlack hover:text-gold transition-all duration-300 font-medium relative group cursor-pointer">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} className="ml-4">
              <Link href="/book-now">
                <p className="px-6 py-2.5 bg-gradient-to-r from-saffron to-gold text-white rounded-full font-medium transition duration-300 hover:shadow-lg hover:shadow-saffron/20 cursor-pointer">
                  Book Now
                </p>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="bg-gradient-to-r from-saffron to-gold p-2 rounded-full text-white"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md"
            id="mobile-menu"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <p className="block px-4 py-3 text-charcoalBlack hover:bg-gradient-to-r hover:from-saffron/10 hover:to-gold/10 rounded-lg transition-all duration-300 cursor-pointer">
                      {item}
                    </p>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <Link href="/book-now">
                  <p className="block text-center text-white bg-gradient-to-r from-saffron to-gold px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                    Book Now
                  </p>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;