"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const bgSliderImages = [
    "./images/bg-1.jpg",
    "./images/bg-2.jpg",
    "./images/bg-3.jpg",
    "./images/bg-4.jpg",
  ];

  const [currentBgSlide, setCurrentBgSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % bgSliderImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const rippleAnimation = (isActive) => ({
    opacity: isActive ? 1 : 0,
    scale: isActive ? 1 : 1.3,
    filter: isActive ? "blur(0px)" : "blur(8px)",
  });

  const scrollToBrands = () => {
    const target = document.getElementById("productsbrands");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[650px] md:h-[750px] overflow-hidden flex items-center justify-center text-center"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {bgSliderImages.map((image, index) => {
          const isActive = index === currentBgSlide;

          return (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${image}')`,
              }}
              animate={rippleAnimation(isActive)}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Ripple Circle Overlay */}
        <motion.div
          key={currentBgSlide}
          className="absolute left-1/2 top-1/2 w-0 h-0 bg-white/10 rounded-full pointer-events-none"
          animate={{
            width: ["0px", "800px"],
            height: ["0px", "800px"],
            opacity: [0.4, 0],
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 max-w-3xl mx-auto"
      >
        <p className="text-sm sm:text-base md:text-lg tracking-[4px] text-white uppercase mb-4">
          Building Trust, Bag by Bag
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2A9D8F]/100 mb-6 leading-tight">
          Building Tomorrow, Today
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Your trusted wholesale dealer for Ultratech, Chettinad, Bharathi and more —
          delivering the best quality at wholesale prices.
        </p>

        {/* 🔥 Modern Scroll Down Indicator (No Button) */}
        <motion.div
          onClick={scrollToBrands}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer text-white text-lg mt-4 font-semibold"
        >
          Scroll Down ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
