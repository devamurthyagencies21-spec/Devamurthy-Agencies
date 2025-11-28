"use client";
import { motion } from "framer-motion";
import { Shield, Handshake, Clock, ThumbsUp } from "lucide-react";

const COLORS = {
    PrimaryBlue: "#014F86",
    PrimaryGreen: "#0A9396",
    DeepTeal: "#003D3D",
};

export default function WhyChooseUsSection() {
    const values = [
        { icon: Shield, title: "Quality Assurance", desc: "Premium cement brands with certified standards" },
        { icon: Handshake, title: "Trusted Partner", desc: "Years of reliable service in Salem District" },
        { icon: Clock, title: "Timely Delivery", desc: "Fast and efficient service across Mecheri" },
        { icon: ThumbsUp, title: "Best Prices", desc: "Competitive wholesale rates for all orders" }
    ];

    const backgroundImageURL = "/images/why.png";

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 40, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.3,
                ease: "easeOut",
                staggerChildren: 0.12,
                when: "beforeChildren"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 80, rotate: 3 },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 14,
                mass: 0.6
            }
        }
    };

    return (
        <section className="relative overflow-hidden py-4 md:py-6 lg:py-12">

            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center w-dvh opacity-80 md:opacity-100"
                style={{ backgroundImage: `url('${backgroundImageURL}')` }}
                initial={{ scale: 1.2, x: -80 }}
                whileInView={{ scale: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        className="grid lg:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >

                        <div></div>
                        <div className="space-y-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}

                                    className="flex items-start p-6 rounded-xl transition-all duration-300 border-l-4 backdrop-blur-md bg-white/40 hover:bg-white/60 shadow-2xl"
                                    style={{
                                        borderColor:
                                            index % 2 === 0
                                                ? COLORS.PrimaryGreen
                                                : COLORS.PrimaryBlue,
                                    }}
                                >
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg"
                                        style={{
                                            backgroundColor:
                                                index % 2 === 0
                                                    ? COLORS.PrimaryGreen
                                                    : COLORS.PrimaryBlue,
                                        }}
                                    >
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1 text-gray-900">
                                            {value.title}
                                        </h4>
                                        <p className="text-base leading-relaxed text-gray-700">
                                            {value.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}