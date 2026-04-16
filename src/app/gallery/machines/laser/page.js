"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryHero from "@/components/GalleryHero";

export default function LaserMachinesPage() {
  const slides = [
    {
      src: "/machines/m4.jpeg",
      title: "Diode Laser System",
      description: "810nm hair removal laser"
    },
    {
      src: "/machines/m5.jpeg",    
      title: "Fractional CO2 Laser",
      description: "Skin resurfacing technology"
    },
    {
      src: "/machines/m10.jpeg",
      title: "Q-Switched Nd:YAG Laser",
      description: "Tattoo & pigmentation laser"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Laser Machines"
        subtitle="State-of-the-art laser technology"
        description="Our clinic is equipped with the latest FDA-approved laser systems operated by certified laser specialists for safe and effective treatments."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Cutting-Edge Laser Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              We invest in the most advanced laser technology to deliver superior results for our patients. 
              Our comprehensive laser suite includes multiple wavelength systems for treating all skin types 
              and conditions. Each machine is regularly calibrated and maintained to ensure optimal performance 
              and safety. Our certified laser specialists are trained in the latest techniques to maximize 
              treatment effectiveness while ensuring patient comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slides[current].src})`,
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
        >
          &#8249;
        </button>

        <button
          onClick={() =>
            setCurrent((current + 1) % slides.length)
          }
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
        >
          &#8250;
        </button>
      </section>
    </main>
  );
}
