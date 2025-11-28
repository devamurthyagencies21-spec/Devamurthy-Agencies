"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const COLORS = {
    DeepTeal: "#003D3D", 
    PrimaryGreen: "#0A9396",
    BackgroundWhite: "#F8FAFC", 
    primaryBlue: "#014F86",
};

const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const testimonials = [
    {
        id: 1,
        quote: "Quality cement at the best price. Prompt delivery! Devamurthy Agencies is our first call for every new site.",
        author: "Local Builder",
        location: "Mecheri Area",
        rating: 5
    },
    {
        id: 2,
        quote: "Genuine brands and trustworthy service. They ensure we get exactly what we order, every time.",
        author: "Contractor S. Kumar",
        location: "Mecheri",
        rating: 5
    },
    {
        id: 3,
        quote: "Highly reliable supplier for our major construction projects. Their team is professional and logistics are seamless.",
        author: "Project Manager",
        location: "Customer Review",
        rating: 5
    },
    {
        id: 4,
        quote: "Excellent customer service and competitive bulk rates. Highly recommend them for any large-scale purchase.",
        author: "Wholesale Buyer",
        location: "Nearby District",
        rating: 5
    }
];

export default function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000); 
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const currentItem = testimonials[currentTestimonial];

    const navigate = (index) => {
        if (index > currentTestimonial) {
            setDirection(1);
        } else if (index < currentTestimonial) {
            setDirection(-1);
        }
        setCurrentTestimonial(index);
        setIsAutoPlaying(false);

        const timer = setTimeout(() => setIsAutoPlaying(true), 15000);
        return () => clearTimeout(timer); 
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
        const timer = setTimeout(() => setIsAutoPlaying(true), 15000);
        return () => clearTimeout(timer);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
        const timer = setTimeout(() => setIsAutoPlaying(true), 15000);
        return () => clearTimeout(timer);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: COLORS.BackgroundWhite }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>

            <div className="container mx-auto px-4 relative z-10">

                <motion.div
                    className="text-center mb-16"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-4" style={{ color: COLORS.DeepTeal }}>
                        Our clients<span style={{ color: COLORS.primaryBlue }}> Say</span>
                    </h2>

                    <p className="text-xl" style={{ color: COLORS.DeepTeal }}>
                        Trust built on quality and reliable service.
                    </p>

                    <motion.div
                        variants={contentVariants}
                        className="w-24 h-1.5 mt-4 mx-auto rounded-full"
                        style={{ backgroundColor: COLORS.PrimaryGreen }}
                    />
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Navigation Arrows */}
                    <motion.button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: COLORS.PrimaryGreen }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </motion.button>

                    <motion.button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: COLORS.PrimaryGreen }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </motion.button>

                    <motion.div
                        className="relative p-8 md:p-12 rounded-2xl shadow-2xl bg-white overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    >
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                            style={{
                                background: `linear-gradient(135deg, ${COLORS.PrimaryGreen}, ${COLORS.DeepTeal})`
                            }}
                        />

                        <div className="relative z-10" style={{ perspective: '1000px' }}>
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentItem.id}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.5 },
                                        scale: { duration: 0.5 },
                                        rotateY: { duration: 0.5 }
                                    }}
                                    className="text-center"
                                >
                                    <div className="flex justify-center mb-4 gap-1">
                                        {Array.from({ length: currentItem.rating }, (_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    delay: i * 0.1,
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20
                                                }}
                                            >
                                                <Star
                                                    className="w-6 h-6 fill-yellow-500 text-yellow-500"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        className="mb-8"
                                    >
                                        <p
                                            className="text-2xl md:text-3xl font-serif italic leading-relaxed"
                                            style={{ color: COLORS.DeepTeal }}
                                        >
                                            "{currentItem.quote}"
                                        </p>
                                    </motion.div>

                                    {/* Author section with slide-up animation */}
                                    <motion.div
                                        className="pt-4 border-t border-gray-200"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >
                                        <p className="text-lg font-bold" style={{ color: COLORS.PrimaryGreen }}>
                                            {currentItem.author}
                                        </p>
                                        <p className="text-base text-gray-500">
                                            {currentItem.location}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {isAutoPlaying && (
                            <motion.div
                                className="absolute bottom-0 left-0 h-1 rounded-full"
                                style={{ backgroundColor: COLORS.PrimaryGreen }}
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 8, ease: "linear" }}
                                key={currentTestimonial}
                            />
                        )}
                    </motion.div>

                    <div className="flex justify-center mt-8 gap-3">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => navigate(index)}
                                className="relative h-3 w-3 rounded-full transition-all duration-300"
                                style={{
                                    backgroundColor: COLORS.PrimaryGreen,
                                    opacity: index === currentTestimonial ? 1 : 0.4
                                }}
                                whileHover={{ scale: 1.3, opacity: 0.8 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`View testimonial ${index + 1}`}
                            >
                                {/* Active indicator ring */}
                                {index === currentTestimonial && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ border: `2px solid ${COLORS.PrimaryGreen}` }}
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: 2, opacity: 0 }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeOut"
                                        }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Testimonial counter */}
                    <motion.div
                        className="text-center mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-sm font-medium" style={{ color: COLORS.DeepTeal }}>
                            {currentTestimonial + 1} / {testimonials.length}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}