"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Package, Truck, Shield, Building2 } from 'lucide-react';

// Original color palette - unchanged
const COLORS = {
    DeepTeal: "#003D3D",
    PrimaryGreen: "#0A9396",
    BackgroundWhite: "#F8FAFC",
    LightGray: "#E2E8F0",
    DarkGray: "#475569"
};

const contactInfo = {
    name: "Devamoorthi Agencies",
    addressLines: [
        "MSS Complex, Mecheri – Mettur Main Road,",
        "Near Indian Bank, Mecheri,",
        "Salem, Tamil Nadu – 636453"
    ],
    phonePrimary: "9788411154",
    phoneAlternate: "9488101739",
    email: "devamoorthinarayanan@gmail.com"
};

// Enhanced Feature Item with magnetic hover effect
const FeatureItem = ({ icon: Icon, text, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x: x * 0.1, y: y * 0.1 });
    };

    return (
        <div
            ref={cardRef}
            className="opacity-0 animate-fadeInUp"
            style={{ 
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            onMouseMove={handleMouseMove}
        >
            <div
                className="flex items-center space-x-3 p-4 rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden group cursor-default"
                style={{ 
                    backgroundColor: COLORS.BackgroundWhite,
                    transform: isHovered ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)` : 'none'
                }}
            >
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, ${COLORS.PrimaryGreen}, ${COLORS.DeepTeal})`
                    }}
                />
                
                <div className="relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="w-6 h-6" style={{ color: COLORS.PrimaryGreen }} />
                </div>
                
                <p className="text-sm font-medium relative z-10" style={{ color: COLORS.DeepTeal }}>
                    {text}
                </p>
            </div>
        </div>
    );
};

const ContactDetailItem = ({ icon: Icon, title, content, isLink = false, linkType = 'tel', delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="opacity-0 animate-slideInLeft"
            style={{ 
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards'
            }}
        >
            <div
                className="flex items-start space-x-4 p-5 rounded-xl transition-all duration-500 relative overflow-hidden group"
                style={{ 
                    backgroundColor: COLORS.LightGray,
                    transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                    boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div 
                    className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500"
                    style={{ 
                        backgroundColor: COLORS.PrimaryGreen,
                        transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'top'
                    }}
                />
                
                <div 
                    className="p-3 rounded-full flex-shrink-0 relative transition-all duration-500"
                    style={{ 
                        backgroundColor: COLORS.PrimaryGreen + '20',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                    }}
                >
                    {isHovered && (
                        <div 
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{ backgroundColor: COLORS.PrimaryGreen + '30' }}
                        />
                    )}
                    <Icon className="w-6 h-6 relative z-10" style={{ color: COLORS.PrimaryGreen }} />
                </div>
                
                <div className="flex-1">
                    <p className="text-sm font-semibold mb-1 transition-colors duration-300" 
                       style={{ color: isHovered ? COLORS.PrimaryGreen : COLORS.DarkGray }}>
                        {title}
                    </p>
                    {isLink ? (
                        <a
                            href={linkType === 'tel' ? `tel:+91${content}` : `mailto:${content}`}
                            className="text-lg font-bold hover:underline break-all transition-all duration-300"
                            style={{ 
                                color: COLORS.DeepTeal,
                                textDecoration: isHovered ? 'underline' : 'none'
                            }}
                        >
                            {linkType === 'tel' ? `+91 ${content}` : content}
                        </a>
                    ) : (
                        <p className="text-lg font-bold leading-relaxed" style={{ color: COLORS.DeepTeal }}>
                            {content}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const fullAddress = contactInfo.addressLines.join(', ');

    return (
        <>
            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes slideInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    
                    @keyframes slideInRight {
                        from {
                            opacity: 0;
                            transform: translateX(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    
                    @keyframes scaleIn {
                        from {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                    
                    @keyframes drawLine {
                        from {
                            width: 0;
                        }
                        to {
                            width: 6rem;
                        }
                    }

                    .animate-fadeInUp {
                        animation: fadeInUp 0.8s ease-out;
                    }
                    
                    .animate-slideInLeft {
                        animation: slideInLeft 0.8s ease-out;
                    }
                    
                    .animate-slideInRight {
                        animation: slideInRight 0.8s ease-out;
                    }
                    
                    .animate-scaleIn {
                        animation: scaleIn 0.8s ease-out;
                    }
                    
                    .animate-drawLine {
                        animation: drawLine 1s ease-out forwards;
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                    
                    .animate-float {
                        animation: float 3s ease-in-out infinite;
                    }
                `}
            </style>

            <section id="contact"
                ref={sectionRef}
                className="py-20 relative overflow-hidden" 
                style={{ backgroundColor: COLORS.BackgroundWhite }}
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5" 
                     style={{ backgroundColor: COLORS.PrimaryGreen, transform: 'translate(-50%, -50%)' }} />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" 
                     style={{ backgroundColor: COLORS.DeepTeal, transform: 'translate(50%, 50%)' }} />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-16 opacity-0 animate-fadeInUp" style={{ animationFillMode: 'forwards' }}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: COLORS.DeepTeal }}>
                            Connect with <span style={{ color: COLORS.PrimaryGreen }}>Devamoorthi Agencies</span>
                        </h2>
                        
                        <p className="text-xl mb-6" style={{ color: COLORS.DarkGray }}>
                            Your reliable source for bulk cement supply and delivery services.
                        </p>

                        <div className="flex justify-center">
                            <div
                                className="h-1.5 rounded-full w-0 animate-drawLine"
                                style={{ backgroundColor: COLORS.PrimaryGreen }}
                            />
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                            <FeatureItem icon={Package} text="Reliable Bulk Orders" delay={200} />
                            <FeatureItem icon={Truck} text="Timely Delivery" delay={300} />
                            <FeatureItem icon={Shield} text="Quality Assured" delay={400} />
                            <FeatureItem icon={Clock} text="Dedicated Support" delay={500} />
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 
                                className="text-3xl font-bold mb-6 opacity-0 animate-fadeInUp" 
                                style={{ 
                                    color: COLORS.DeepTeal,
                                    animationDelay: '600ms',
                                    animationFillMode: 'forwards'
                                }}
                            >
                                Get in Touch Directly
                            </h3>

                            <div
                                className="opacity-0 animate-slideInLeft"
                                style={{ 
                                    animationDelay: '700ms',
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div
                                    className="flex items-start space-x-4 p-6 rounded-2xl shadow-lg transition-all duration-500 group relative overflow-hidden"
                                    style={{ 
                                        backgroundColor: COLORS.BackgroundWhite,
                                        borderLeft: `5px solid ${COLORS.PrimaryGreen}`
                                    }}
                                >
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                        style={{ backgroundColor: COLORS.PrimaryGreen }}
                                    />
                                    
                                    <div className="animate-float">
                                        <MapPin className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: COLORS.PrimaryGreen }} />
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-opacity-80" 
                                            style={{ color: COLORS.DeepTeal }}>
                                            Our Head Office
                                        </h4>
                                        <p className="text-md" style={{ color: COLORS.DarkGray }}>
                                            {contactInfo.addressLines.map((line, index) => (
                                                <span key={index} className="block leading-relaxed">{line}</span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details with staggered animation */}
                            <div className="space-y-4">
                                <ContactDetailItem
                                    icon={Phone}
                                    title="Primary Contact"
                                    content={contactInfo.phonePrimary}
                                    isLink={true}
                                    linkType="tel"
                                    delay={800}
                                />

                                <ContactDetailItem
                                    icon={Phone}
                                    title="Alternate Contact (WhatsApp)"
                                    content={contactInfo.phoneAlternate}
                                    isLink={true}
                                    linkType="tel"
                                    delay={900}
                                />

                                <ContactDetailItem
                                    icon={Mail}
                                    title="General Inquiries"
                                    content={contactInfo.email}
                                    isLink={true}
                                    linkType="mailto"
                                    delay={1000}
                                />
                            </div>

                            <div
                                className="opacity-0 animate-slideInLeft"
                                style={{ 
                                    animationDelay: '1100ms',
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div
                                    className="p-5 rounded-xl border-t-4 shadow-md transition-all duration-500 hover:shadow-xl group"
                                    style={{ 
                                        borderColor: COLORS.DeepTeal,
                                        backgroundColor: COLORS.LightGray
                                    }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Clock className="w-6 h-6 flex-shrink-0 transition-transform duration-500 group-hover:rotate-45" 
                                               style={{ color: COLORS.DeepTeal }} />
                                        <div>
                                            <p className="font-bold text-lg" style={{ color: COLORS.DeepTeal }}>
                                                Business Hours
                                            </p>
                                            <p className="text-sm" style={{ color: COLORS.DarkGray }}>
                                                Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map with slide-in animation */}
                        <div
                            className="opacity-0 animate-slideInRight"
                            style={{ 
                                animationDelay: '700ms',
                                animationFillMode: 'forwards'
                            }}
                        >
                            <div
                                className="h-[500px] lg:h-full min-h-[550px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] relative group"
                            >
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ 
                                        boxShadow: `0 0 30px ${COLORS.PrimaryGreen}50`,
                                        zIndex: 10
                                    }}
                                />
                                
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.093158097127!2d77.8488277252069!3d11.95670868848777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba900508600d8b7%3A0xc3c940b2f56b5a34!2sMecheri%2C%20Tamil%20Nadu%20636453!5e0!3m2!1sen!2sin!4v1700467200000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Location of ${contactInfo.name} at ${fullAddress}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}