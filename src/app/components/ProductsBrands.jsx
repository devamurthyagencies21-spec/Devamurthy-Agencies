"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  Package,
  Building2,
  CheckCircle2,
  TrendingUp,
  Shield,
  Truck,
  Hammer,
  Boxes,
  Layers,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const colors = {
  primaryBlue: "#014F86",
  primaryGreen: "#0A9396",
  secondaryBlue: "#023E8A",
  secondaryGreen: "#2A9D8F",
  darkNavy: "#03045E",
  deepTeal: "#003D3D",
  bgWhite: "#F8FAFC",
  bgAqua: "#E6FFFA",
  textDark: "#0F172A",
  textMuted: "#475569",
};

const newBgLight = "#F0FFFF";

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AccordionItem = ({ service, isActive, onClick }) => {
  const Icon = service.icon;

  const contentAnim = {
    hidden: { opacity: 0, height: 0, padding: "0rem" },
    visible: {
      opacity: 1,
      height: "auto",
      padding: "1rem 2rem",
      transition: { duration: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // FIX APPLIED: Removed the outer <div> wrapper that contained the error: 
    // <div id="productbrands" ref={productBrandsRef}>
    <motion.div
      className="w-full rounded-xl overflow-hidden mb-4 border border-gray-200"
      style={{
        backgroundColor: colors.bgWhite,
        boxShadow: isActive
          ? `0 10px 20px -5px ${service.mainColor}22`
          : "0 2px 5px rgba(0,0,0,0.05)",
      }}
      variants={itemVariants}
    >
      {/* Header */}
      <motion.button
        onClick={onClick}
        className="w-full text-left py-5 px-6 flex justify-between items-center"
        style={{
          backgroundColor: isActive ? colors.bgAqua : colors.bgWhite,
        }}
        whileHover={{ backgroundColor: colors.bgAqua }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: service.mainColor }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl" style={{ color: colors.textDark }}>
            {service.fullTitle}
          </span>
        </div>

        <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6" style={{ color: service.mainColor }} />
        </motion.div>
      </motion.button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentAnim}
            className="border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left */}
              <div className="md:w-1/2 space-y-4">
                <p className="text-base leading-relaxed" style={{ color: colors.textDark }}>
                  {service.description}
                </p>
                <p className="text-sm italic" style={{ color: colors.textMuted }}>
                  {service.details}
                </p>
              </div>

              {/* Right */}
              <div className="md:w-1/2">
                <h4
                  className="font-semibold mb-3 text-base"
                  style={{ color: service.mainColor }}
                >
                  {service.id === "cement"
                    ? "Major Brands Carried"
                    : "Key Product Types"}
                </h4>

                <div
                  className={`grid ${service.id === "cement" ? "grid-cols-2" : "grid-cols-1"
                    } gap-3`}
                >
                  {(service.brands || service.products).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm p-2 rounded-md"
                      style={{
                        backgroundColor: `${service.mainColor}15`,
                      }}
                    >
                      {item.initial && (
                        <span
                          className="font-extrabold text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                          style={{ background: service.mainColor }}
                        >
                          {item.initial}
                        </span>
                      )}
                      {item.icon && (
                        <item.icon className="w-4 h-4" style={{ color: service.mainColor }} />
                      )}
                      <span style={{ color: colors.textDark }}>
                        {item.name || item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ---------- MAIN COMPONENT ----------
const ServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState("cement");

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const services = [
    {
      id: "cement",
      icon: Package,
      fullTitle: "Wholesale Cement Supply",
      description:
        "Guaranteed quality and competitive pricing on premium certified cement brands.",
      details: "We supply Ultratech, Chettinad, Bharathi & more.",
      mainColor: colors.primaryBlue,
      brands: [
        { name: "Ultratech", initial: "U" },
        { name: "Chettinad", initial: "C" },
        { name: "Bharathi", initial: "B" },
        { name: "Priya", initial: "P" },
      ],
    },
    {
      id: "steel",
      icon: Boxes,
      fullTitle: "Structural Steel Products",
      description:
        "High-grade steel including TMT bars, angles, channels & more.",
      details: "Perfect for foundational & vertical structural works.",
      mainColor: colors.primaryGreen,
      products: [
        { icon: CheckCircle2, title: "TMT Rebar" },
        { icon: CheckCircle2, title: "Angles & Channels" },
        { icon: CheckCircle2, title: "Iron Rods & Wire Mesh" },
      ],
    },
    {
      id: "aggregates",
      icon: Layers,
      fullTitle: "Aggregates & Construction Sand",
      description:
        "M-Sand, P-Sand and various stone aggregates sourced from certified quarries.",
      details: "Consistent quality for all civil works.",
      mainColor: colors.primaryBlue,
      products: [
        { icon: CheckCircle2, title: "M-Sand" },
        { icon: CheckCircle2, title: "P-Sand" },
        { icon: CheckCircle2, title: "Stone Chips" },
      ],
    },
    {
      id: "shutters",
      icon: Hammer,
      fullTitle: "Construction Shutters & Formwork",
      description:
        "Wood & steel shuttering materials for concrete casting.",
      details: "Supports smooth and accurate formwork.",
      mainColor: colors.primaryGreen,
      products: [
        { icon: CheckCircle2, title: "Steel Formwork" },
        { icon: CheckCircle2, title: "Wooden Planks & Props" },
      ],
    },
  ];

  const features = [
    { icon: Shield, text: "Quality Assured", detail: "Premium certified materials.", color: colors.primaryBlue },
    { icon: TrendingUp, text: "Competitive Pricing", detail: "Best wholesale rates.", color: colors.primaryBlue },
    { icon: Truck, text: "Efficient Delivery", detail: "Reliable site delivery.", color: colors.primaryBlue },
  ];

  return (
    <div id="productbrands"
      className="relative min-h-screen py-20 px-4"
      style={{ backgroundColor: newBgLight }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at top left, ${colors.deepTeal}20, transparent 40%)`,
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >

        <motion.div
          className="text-center mb-16"
          variants={contentVariants}
        >
          <span
            className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-md"
            style={{ background: `linear-gradient(90deg, ${colors.primaryBlue}, ${colors.primaryGreen})` }}
          >
            <Building2 className="w-4 h-4" />
            Our Comprehensive Solutions
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold mt-4" style={{ color: colors.deepTeal }}>
            Explore Our Core Building <span style={{ color: colors.primaryBlue }}>Supplies</span>
          </h2>
          <motion.div
            variants={contentVariants}
            className="w-24 h-1.5 mt-4 mx-auto rounded-full"
            style={{ backgroundColor: colors.primaryGreen }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 p-8 rounded-3xl shadow-xl"
          style={{ background: colors.secondaryGreen }}
          variants={contentVariants}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl border-b-4"
                style={{
                  borderBottomColor: f.color,
                  backgroundColor: colors.bgAqua,
                }}
              >
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-lg mb-3"
                  style={{ background: f.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-xl" style={{ color: colors.textDark }}>
                  {f.text}
                </h4>
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  {f.detail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {services.map((s) => (
            <AccordionItem
              key={s.id}
              service={s}
              isActive={activeServiceId === s.id}
              onClick={() =>
                setActiveServiceId(activeServiceId === s.id ? null : s.id)
              }
            />
          ))}
        </div>

        <motion.div
          className="mt-20 relative overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full h-px bg-gray-300 mb-10 max-w-4xl mx-auto" />

          <div className="relative z-10 p-10 md:p-14 text-center">
            <h3
              className="text-3xl md:text-4xl font-extrabold leading-snug"
              style={{ color: colors.darkNavy }}
            >
              Have a Question? Let's Talk Materials.
            </h3>

            <p className="text-base mt-3 max-w-2xl mx-auto" style={{ color: colors.textMuted }}>
              Our team is ready to discuss volume pricing and custom material delivery schedules.
            </p>

            <div className="flex flex-col sm:flex-row mt-8 gap-4 justify-center">

              <motion.a
                href="tel:9788411154"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full font-bold transition-all duration-300 border-2"
                style={{ background: colors.bgWhite, color: colors.primaryBlue, borderColor: colors.primaryBlue }}
                whileHover={{ scale: 1.05, backgroundColor: colors.bgAqua }}
              >
                <Phone className="w-5 h-5" />
                <span>Call: 9788411154</span>
              </motion.a>

              <motion.a
                href="https://wa.me/919788411154"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full font-bold text-white transition-all duration-300"
                style={{ background: colors.primaryGreen }}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Quote</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;