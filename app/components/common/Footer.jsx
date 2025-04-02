// app/components/Footer.jsx

"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () =>
{
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-deepMaroon text-white py-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {/* Quick Links */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mb-6 md:mb-0"
                    >
                        <h3 className="text-xl font-serif mb-4">Quick Links</h3>
                        <ul className="flex space-x-4">
                            {['Home', 'Packages', 'Services', 'Ritual Tours', 'Testimonials', 'About Us', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-gold transition-colors duration-300">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mb-6 md:mb-0 text-center md:text-left"
                    >
                        <h3 className="text-xl font-serif mb-4">Contact Us</h3>
                        <p>Vidyanand Sinha (Sanjeev)</p>
                        <p>
                            Email:{' '}
                            <a href="mailto:kashimitra@gmail.com" className="hover:text-gold transition-colors duration-300">
                                kashimitra@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone:{' '}
                            <a href="tel:+919415756252" className="hover:text-gold transition-colors duration-300">
                                +91 94157 56252
                            </a>
                        </p>
                        <p>Address: Pandeypur, Varanasi, India</p>
                    </motion.div>

                    {/* Social Media & Newsletter */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-center md:text-right"
                    >
                        <h3 className="text-xl font-serif mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-end space-x-4 mb-4">
                            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Facebook">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Instagram">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300" aria-label="Twitter">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                        {/* Newsletter Signup */}
                        <div>
                            <h3 className="text-xl font-serif mb-2">Newsletter</h3>
                            <form className="flex justify-center md:justify-end" onSubmit={(e) => e.preventDefault()}>
                                <motion.input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 rounded-l-md focus:outline-none"
                                    whileFocus={{ scale: 1.05 }}
                                    required
                                    aria-label="Newsletter Email"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-4 py-2 bg-saffron text-white rounded-r-md hover:bg-gold transition-colors duration-300"
                                    whileHover={{ backgroundColor: "#FFD700" }}
                                    aria-label="Subscribe to Newsletter"
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
                {/* Legal Links */}
                <motion.div
                    className="mt-8 border-t border-white/30 pt-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="text-sm">&copy; {new Date().getFullYear()} Kashi Mitra Tours. All rights reserved.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;