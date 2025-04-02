// app/components/ContactForm.jsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic here (e.g., API call)
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-offWhite rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-serif text-deepMaroon mb-4 text-center">Contact Us</h3>
      {submitted ? (
        <motion.p
          className="text-center text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for reaching out! We'll get back to you soon.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-darkGray mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-saffron"
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-darkGray mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-saffron"
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-darkGray mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-saffron"
              placeholder="Your Message"
              rows="4"
              aria-label="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-gold transition-colors duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#FFD700" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send Message"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;