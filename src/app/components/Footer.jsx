"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🎨 --- NEW COLOR PALETTE (Lightened Accents) ---
const NEW_COLORS = {
  // Main Accents
  PrimaryBlue: "#014F86",
  PrimaryGreen: "#0A9396",
  AccentSkyBlue: "#89D2DC", // NEW: Replaces AccentGold for links/highlights
  // Backgrounds/Base
  DarkNavy: "#03045E",
  DeepTeal: "#003D3D",
  BackgroundWhite: "#F8FAFC",
  // Text
  TextDark: "#0F172A",
  TextMuted: "#E0E0E0", // Brightened Off-White for muted text/copyright
};

// --- Utility Icon Component (Lucide-style) ---
const Icon = ({ path, className = "w-5 h-5", colorHex = NEW_COLORS.PrimaryGreen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className}`}
    // Use inline style for dynamic colors to prevent Tailwind JIT errors
    style={{ color: colorHex }}
  >
    {path === "phone" && (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.72-6.72 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.73A15 15 0 0 0 15 15a15 15 0 0 0 6.08 2.18 2 2 0 0 1 1.92 1.74Z" />
    )}
    {path === "mail" && (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    )}
    {path === "map-pin" && (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    )}
    {path === "truck" && (
      <path d="M10 17l-3-3m0 0l3-3m-3 3h10M2 17h14l4-5V5H2v12zm18 0h-2V7h2M4 20h2m4 0h2m-6-3h6" />
    )}
  </svg>
);

// --- Fixed Missing Objects (Updated to new colors) ---
const COLORS = {
  TextSecondary: NEW_COLORS.TextMuted,
};

// Smooth scroll handler 
const handleScrollLinkClick = (e, targetId) => {
  e.preventDefault();
  const el = document.querySelector(targetId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "Our Mission", href: "#about" },
  { name: "Solutions", href: "#productbrands" },
  { name: "Project Showcase", href: "#gallery" },
  { name: "Talk to Sales", href: "#contact" },
];

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // SERVER PLACEHOLDER (prevents hydration errors)
  if (!isMounted) {
    return (
      <footer className={`relative text-gray-200 font-sans min-h-[50vh] flex flex-col justify-end`} style={{ backgroundColor: NEW_COLORS.DeepTeal }}>
        <div
          className="absolute inset-0 opacity-70"
          style={{ backgroundColor: NEW_COLORS.DarkNavy }}
        ></div>

        <div className="relative z-10 flex flex-col justify-end flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-6">
            <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 text-center">
              <p className="text-xs sm:text-sm text-white">
                © {new Date().getFullYear()} Devamoorthi Agencies. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // CLIENT RENDER
  return (
    <motion.footer
      className={`relative text-gray-200 font-sans 
      min-h-[50vh] flex flex-col justify-end overflow-hidden
      sm:min-h-[40vh] md:min-h-[45vh]`}
      style={{ backgroundColor: NEW_COLORS.DeepTeal }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/c0/58/01/c0580175fdea7a7a89b6130bd90263a7.jpg')] 
             bg-cover bg-center"
        style={{ zIndex: 0 }}
      />

      {/* Dark navy overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: NEW_COLORS.DeepTeal, opacity: 0.65, zIndex: 1 }}
      />

      <div className="relative z-10 flex flex-col justify-end flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8">
          <div
            className={`backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-6 lg:p-10`}
            // Fixed JIT issue: Using inline style for dynamic background/border colors
            style={{
              backgroundColor: `${NEW_COLORS.DeepTeal}CC`, // CC for 80% opacity
              border: `1px solid ${NEW_COLORS.PrimaryBlue}1A` // 1A for 10% opacity
            }}
          >
            {/* Grid Layout with MD Responsiveness */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 **md:grid-cols-3 md:gap-x-12 md:gap-y-0 lg:gap-x-16**
              gap-0 pb-6 sm:pb-4 
              md:grid-cols-[1.5fr_1fr_1fr]"
            >
              {/* 1. BRAND */}
              <motion.div
                className="col-span-1 space-y-3 sm:space-y-4 **mb-8 sm:mb-0**"
                variants={itemVariants}
              >
                {/* Logo */}
                <motion.div
                  className="col-span-1 space-y-3 sm:space-y-4"
                  variants={itemVariants}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img
                        src="/images/logo-1.png"
                        alt="Devamoorthi Agencies Logo"
                        className="object-contain w-[140px] md:w-[160px]"
                      />
                    </div>
                  </div>
                </motion.div>
                {/* Text Muted uses new bright Off-White */}
                <p className={`text-xs sm:text-sm leading-relaxed`} style={{ color: NEW_COLORS.TextMuted }}>
                  Serving the construction industry with <br /> <b>premium materials</b> and <b>reliable distribution</b>.<br /> Your foundation for success.
                </p>
              </motion.div>

              {/* 2. NAVIGATION */}
              <motion.div className="space-y-2 sm:space-y-3 **mt-6 sm:mt-0 mb-8 sm:mb-0**" variants={itemVariants}>
                {/* PrimaryGreen Heading */}
                <h3 className={`text-base sm:text-lg font-semibold uppercase tracking-wider mb-2`} style={{ color: NEW_COLORS.PrimaryGreen }}>
                  Navigation
                </h3>
                <ul className="space-y-1">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => handleScrollLinkClick(e, link.href)}
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: NEW_COLORS.AccentSkyBlue }} // NEW: Using AccentSkyBlue for links
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* 3. COMBINED CONTACT (Connect + Headquarters) */}
              <motion.div className="space-y-4 sm:space-y-5 **mt-6 md:mt-0**" variants={itemVariants}>
                {/* PrimaryGreen Heading */}
                <h3 className={`text-base sm:text-lg font-semibold uppercase tracking-wider mb-2`} style={{ color: NEW_COLORS.PrimaryGreen }}>
                  Contact
                </h3>

                {/* Phone */}
                <a
                  href="tel:+919788411154"
                  className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                >
                  <Icon
                    path="phone"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    colorHex={NEW_COLORS.PrimaryGreen}
                  />
                  <span>+91 97884 11154</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:devamoorthinarayanan@gmail.com"
                  className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                >
                  <Icon
                    path="mail"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    colorHex={NEW_COLORS.PrimaryGreen}
                  />
                  <span>devamoorthinarayanan@gmail.com</span>
                </a>

                {/* Address */}
                <div className="pt-2">
                  {/* Text Muted uses new bright Off-White */}
                  <div className={`flex items-start space-x-2 sm:space-x-3`} style={{ color: NEW_COLORS.TextMuted }}>
                    <Icon
                      path="map-pin"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      colorHex={NEW_COLORS.PrimaryGreen}
                    />
                    {/* Text Muted uses new bright Off-White */}
                    <address className={`not-italic text-xs sm:text-sm leading-relaxed`} style={{ color: NEW_COLORS.TextMuted }}>
                      Mecheri, Salem District <br />
                      Tamil Nadu - 636453, India
                    </address>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* COPYRIGHT */}
          <motion.div
            className="mt-6 sm:mt-8 pt-3 sm:pt-4 text-center"
            variants={itemVariants}
          >
            {/* Text Muted uses new bright Off-White */}
            <p className={`text-xs sm:text-sm`} style={{ color: NEW_COLORS.TextMuted }}>
              © {new Date().getFullYear()} Devamoorthi Agencies. All Rights
              Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;