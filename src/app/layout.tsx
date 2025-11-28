// app/layout.tsx
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ProductsBrands from "@/app/components/ProductsBrands";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import ContactUs from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import "./globals.css";
// import Animation from "./animation/Animation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <About />
        <WhyChooseUs />
        <ProductsBrands />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
