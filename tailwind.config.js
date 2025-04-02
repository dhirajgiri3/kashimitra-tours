/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",   // Include app directory
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",      // Primary brand color
        gold: "#FFD700",         // Accent color
        deepMaroon: "#800000",   // Section heading color
        lightBeige: "#FFF7E8",   // Background color for light sections
        turquoise: "#3CB7B7",    // Accent for icons or highlights
        duskPurple: "#5F4B8B",   // Alternative color for darker sections
        white: "#FFFFFF",        // White background or text
        offWhite: "#F5F5F5",     // Slightly grayish-white for cards
        mediumGray: "#9E9E9E",   // Text color for descriptions
        darkGray: "#4A4A4A",     // Subtitle and heading color
        charcoalBlack: "#2B2B2B",// Navbar text
        greenSuccess: "#28a745", // Form submission success
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],  // For headings and titles
        sans: ["Roboto", "sans-serif"],        // For body text
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        pulseSlow: "pulse 2.5s infinite",
        bounceShort: "bounce 1.5s infinite",
        spinSlow: "spin 5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      dropShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        glow: "0 0 10px rgba(255, 215, 0, 0.9)", // Gold glowing shadow
      },
      boxShadow: {
        glowingButton: "0 0 15px rgba(255, 153, 51, 0.8)", // Button glow
        cardHover: "0 10px 20px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // Styling for form elements
    require('@tailwindcss/aspect-ratio'), // Useful for maintaining responsive aspect ratios
    require('@tailwindcss/typography'),  // Adds typographic enhancements
  ],
};