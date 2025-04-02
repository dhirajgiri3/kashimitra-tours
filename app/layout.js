// app/layout.js

import { Playfair_Display, Roboto } from "next/font/google"; // Correct font imports
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Configure Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Kashi Mitra Tours",
  description: "Your guide to spiritual journeys in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}