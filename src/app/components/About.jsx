"use client";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Building } from "lucide-react";

const COLORS = {
  PrimaryBlue: "#014F86",
  PrimaryGreen: "#0A9396",
  SecondaryBlue: "#023E8A",
  DeepTeal: "#003D3D",
  BackgroundAqua: "#E6FFFA",
  LightGray: "#F8F8F8",
};

const contentVariants = {
  hidden: { opacity: 0, y: 40, x: -20, rotateX: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.7,
    },
  },
};

const staggerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.015, 1],
    boxShadow: [
      "0 0 0px rgba(0,0,0,0)",
      "0 0 15px rgba(1,79,134,0.5)",
      "0 0 0px rgba(0,0,0,0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-28 bg-white overflow-hidden font-sans">
      <motion.div
        animate={{
          rotate: [0, 360],
          x: ["-25%", "0%", "-25%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 -left-1/4 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{
          backgroundColor: COLORS.PrimaryGreen,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          filter: "blur(100px)",
        }}
      />

      <motion.div
        animate={{
          rotate: [0, -360],
          x: ["0%", "10%", "-5%", "0%"],
          y: ["0%", "-10%", "5%", "0%"],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: COLORS.PrimaryBlue, filter: "blur(120px)" }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={staggerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={contentVariants}
            className="text-lg font-medium uppercase tracking-widest"
            style={{ color: COLORS.PrimaryGreen }}
          >
            <span
              className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-md"
              style={{
                background: `linear-gradient(90deg, ${COLORS.PrimaryBlue}, ${COLORS.PrimaryGreen})`,
              }}
            >
              Our Foundation
            </span>
          </motion.p>

          <motion.h2
            variants={contentVariants}
            className="text-3xl md:text-5xl font-extrabold mt-2 leading-tight"
            style={{ color: COLORS.DeepTeal }}
          >
            Our Strength is Your{" "}
            <span style={{ color: COLORS.PrimaryBlue }}>Foundation.</span>
          </motion.h2>

          <motion.div
            variants={contentVariants}
            className="w-24 h-1.5 mt-4 mx-auto rounded-full"
            style={{ backgroundColor: COLORS.PrimaryGreen }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerVariants}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <motion.div
              variants={staggerVariants}
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: COLORS.DeepTeal }}
            >
              <motion.p variants={contentVariants}>
                <strong style={{ color: COLORS.PrimaryGreen }}>
                  Devamurthy Agencies
                </strong>{" "}
                is the trusted <b>wholesale dealer</b> for premium construction
                materials in Mecheri, Salem District. Backed by a decade of
                reliability, we deliver <b>genuine products</b>, competitive
                pricing, and complete customer trust—now expanding digitally for
                easier access and faster service.
              </motion.p>

              {/* Mission Card */}
              <motion.div
                initial="visible"
                animate="pulse"
                variants={{
                  visible: contentVariants.visible,
                  pulse: pulseVariants.pulse,
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -5px rgba(1,79,134,0.4)",
                  rotate: 1,
                }}
                whileTap={{ scale: 0.95 }}
                className="p-8 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: COLORS.BackgroundAqua,
                  border: `3px solid ${COLORS.PrimaryBlue}`,
                }}
              >
                <div
                  className="text-xl font-semibold flex items-center mb-3"
                  style={{ color: COLORS.PrimaryBlue }}
                >
                  <motion.span 
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="w-6 h-6 mr-3 stroke-2" />
                  </motion.span>
                  Our Mission:
                </div>

                <p
                  className="text-3xl font-extrabold"
                  style={{ color: COLORS.DeepTeal }}
                >
                  “We are committed to delivering genuine, quality construction
                  materials at the most affordable rates in the region.”
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 100, rotateY: 90 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  transition: { type: "spring", stiffness: 80, damping: 12 },
                },
              }}
              whileHover={{
                scale: 1.03,
                rotate: -1,
                boxShadow: "0 10px 30px rgba(2,62,138,0.5)",
              }}
              className="p-10 rounded-3xl min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${COLORS.PrimaryBlue}, ${COLORS.SecondaryBlue})`,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Building className="w-20 h-20 text-white mb-4" />
              </motion.div>

              <p className="text-3xl font-bold text-white text-center">
                Reliable Supply for Every Build
              </p>
              <p className="text-white/80 mt-2 text-center">
                Partner with us for consistency and strength.
              </p>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"
                animate={{ x: ["-150%", "250%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* SERVICE AREA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{
                scale: 1.02,
                rotate: 0.5,
                boxShadow: "0 8px 20px -3px rgba(10,147,150,0.5)",
              }}
              whileTap={{ scale: 0.99 }}
              className="p-6 rounded-2xl border-2 border-dashed flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer"
              style={{
                borderColor: COLORS.PrimaryGreen,
                backgroundColor: COLORS.LightGray,
              }}
            >
              <motion.div
                animate={{ x: [0, 7, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ChevronRight
                  className="w-6 h-6 mr-3 stroke-2"
                  style={{ color: COLORS.PrimaryGreen }}
                />
              </motion.div>

              <p
                className="text-xl font-semibold"
                style={{ color: COLORS.DeepTeal }}
              >
                Serving Builders, Contractors & Individual Customers in Mecheri
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}