"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const COLORS = {
    DeepTeal: "#003D3D",
    PrimaryGreen: "#0A9396",
    primaryBlue: "#014F86",
};

// FAQ Data
const faqsData = [
    {
        id: 1,
        category: "Pricing",
        question: "Do you offer bulk order discounts?",
        answer: "Yes, discounts are available for large-quantity orders, specifically tailored for builders and contractors. Contact our sales team for a custom quote.",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: 2,
        category: "Delivery",
        question: "Do you provide delivery services?",
        answer: "Yes, we provide reliable delivery across Mecheri and nearby areas. Delivery charges may apply based on distance and order size.",
        gradient: "from-cyan-500 to-blue-600"
    },
    {
        id: 3,
        category: "Products",
        question: "Do you supply only cement?",
        answer: "We mainly specialize in cement distribution but also supply high-quality shutters and related materials depending on availability.",
        gradient: "from-teal-500 to-cyan-600"
    },
    {
        id: 4,
        category: "Inventory",
        question: "Are all cement brands always in stock?",
        answer: "We maintain regular stock of all major brands, but availability can fluctuate. It's best to call us before placing large orders.",
        gradient: "from-blue-500 to-indigo-600"
    }
];

export default function FAQsSection() {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedFaq, setSelectedFaq] = useState(null);

    return (
        <section
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/736x/05/44/85/054485e09fe22db9f4dcc4216ac637af.jpg')",
                    filter: "blur(4px)",
                    transform: "scale(1.1)" 
                }}
            />

            <div className="absolute inset-0 bg-white/40" />

            <div className="relative z-20 container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                >
                    <span
                        className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold uppercase tracking-wider rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${COLORS.primaryBlue}, ${COLORS.PrimaryGreen})`
                        }}
                    >
                        <Building2 className="w-4 h-4" />
                        Everything You Need to Know
                    </span>

                    <h2 className="text-3xl md:text-5xl font-extrabold mt-4" style={{ color: COLORS.DeepTeal }}>
                        Frequently Asked <span style={{ color: COLORS.primaryBlue }}>Questions</span>
                    </h2>

                    <motion.div
                        variants={contentVariants}
                        className="w-24 h-1.5 mt-6 mx-auto rounded-full"
                        style={{ backgroundColor: COLORS.PrimaryGreen }}
                    />
                </motion.div>

                <div className="flex flex-col gap-6 mb-20">
                    {faqsData.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                            onHoverStart={() => setHoveredId(faq.id)}
                            onHoverEnd={() => {
                                setHoveredId(null);
                                setSelectedFaq(null);
                            }}
                            onClick={() =>
                                setSelectedFaq(faq.id === selectedFaq ? null : faq.id)
                            }
                            className="cursor-pointer group relative"
                        >
                            <motion.div
                                className="relative rounded-3xl p-6 h-full overflow-hidden shadow-2xl bg-white"
                                style={{
                                    border: `2px solid ${hoveredId === faq.id ? COLORS.PrimaryGreen : "#e5e7eb"}`,
                                }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                              
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-0`}
                                    animate={{ opacity: hoveredId === faq.id ? 0.05 : 0 }}
                                />

                                <motion.div
                                    className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black shadow-lg"
                                    style={{
                                        backgroundColor: hoveredId === faq.id ? COLORS.PrimaryGreen : "#f3f4f6",
                                        color: hoveredId === faq.id ? "white" : COLORS.DeepTeal
                                    }}
                                >
                                    {index + 1}
                                </motion.div>

                                <div className="relative z-10">
                                    <motion.span
                                        className="inline-block px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider mb-3"
                                        style={{
                                            backgroundColor: `${COLORS.PrimaryGreen}15`,
                                            color: COLORS.PrimaryGreen
                                        }}
                                        animate={{
                                            backgroundColor:
                                                hoveredId === faq.id ? COLORS.PrimaryGreen : `${COLORS.PrimaryGreen}15`,
                                            color: hoveredId === faq.id ? "white" : COLORS.PrimaryGreen
                                        }}
                                    >
                                        {faq.category}
                                    </motion.span>

                                    <h3
                                        className="text-2xl font-bold mb-3 leading-tight"
                                        style={{ color: COLORS.DeepTeal }}
                                    >
                                        {faq.question}
                                    </h3>

                                    <AnimatePresence mode="wait">
                                        {selectedFaq === faq.id ? (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                            >
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                className="flex items-center gap-2 text-sm font-semibold"
                                                style={{ color: COLORS.PrimaryGreen }}
                                            >
                                                <span>Click to read answer</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
