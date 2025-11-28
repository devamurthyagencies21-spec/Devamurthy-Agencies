"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ElegantHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const COLORS = {
    PrimaryBlue: "#014F86",
    PrimaryGreen: "#0A9396",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavItems = ["Home", "About", "Solutions", "Gallery", "Contact"];
  const mobileNavItems = ["Home", "About", "Products", "Why Us", "Contact"];

  const getSectionId = (menuItem) => {
    const mapping = {
      "Home": "hero",
      "About": "about",
      "Solutions": "productbrands",
      "Products": "productbrands",
      "Why Us": "productbrands",
      "Gallery": "gallery",
      "Contact": "contact"
    };
    return mapping[menuItem];
  };

  const handleNavClick = (menuItem) => {
    const sectionId = getSectionId(menuItem);
    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 transition-all duration-400 ${scrolled
          ? "bg-white/80 backdrop-blur-md py-6 shadow-lg rounded-4xl mx-auto w-[95%]"
          : "bg-white py-8 w-full"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <nav className="flex justify-between items-center relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center z-10 h-[30px]"
            >
              <img
                src="/images/logo-1.png"
                alt="Company Logo"
                width={180}
                height={90}
                className="object-contain transition-transform duration-300 md:text-wrap
                w-[120px] h-[60px]
                sm:w-[160px] sm:h-[80px]
                md:w-[200px] md:h-[100px]"
                style={{
                  transform: scrolled ? "scale(0.8)" : "scale(1)",
                  transformOrigin: "center center",
                }}
              />
            </motion.div>

            {/* Title - MODIFIED FOR VISIBILITY & WRAPPING */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              // Set to always flex, give it a narrow max-width on mobile to force wrapping
              className="absolute left-1/2 transform -translate-x-1/2 w-auto max-w-[120px] sm:max-w-[200px] md:max-w-xs px-2 flex justify-center"
            >
              <div
                // Smaller text size on base/mobile, remove 'truncate', allow normal 'whitespace'
                className="font-serif text-[10px] sm:text-lg md:text-2xl font-medium text-center whitespace-normal"
                style={{ color: COLORS.PrimaryBlue, lineHeight: 1.2 }} // Added line height for better spacing
              >
                DEVAMURTHY AGENCIES
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 font-semibold">
              {desktopNavItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="relative group cursor-pointer"
                >
                  <motion.button
                    onClick={() => handleNavClick(item)}
                    className="font-sans text-xs md:text-sm tracking-wider whitespace-nowrap inline-block"
                    style={{ color: COLORS.PrimaryBlue }}
                    whileHover={{ scale: 1.05, y: -2, color: COLORS.PrimaryGreen }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {item}
                    <motion.span
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px]"
                      style={{ background: COLORS.PrimaryBlue }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 10 }}
              className="md:hidden text-xl z-50"
              style={{ color: COLORS.PrimaryBlue }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </motion.button>
          </nav>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              y: mobileMenuOpen ? 0 : -20,
            }}
            transition={{ duration: 0.4 }}
            className={`md:hidden transition-all duration-300 ${mobileMenuOpen
              ? "max-h-96 opacity-100 pt-2"
              : "max-h-0 opacity-0 overflow-hidden"
              } bg-white text-right pr-8`}
          >
            <ul className="py-4 space-y-4">
              {mobileNavItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : 20,
                  }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.button
                    onClick={() => handleNavClick(item)}
                    className="font-sans block py-2 text-lg"
                    style={{ color: COLORS.PrimaryBlue }}
                    whileHover={{ color: COLORS.PrimaryGreen }}
                  >
                    {item}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}