"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryHero from "@/components/GalleryHero";

export default function AyurvedaPanchakarmaPage() {
  const slides = [
    {
      src: "/Gallery/VAMANA.jpg",
      title: "Vamana Therapy",
      description: "Therapeutic emesis treatment"
    },
    {
      src: "/Gallery/VIRECHANA.jpg",
      title: "Virechana Therapy",
      description: "Purgation therapy session"
    },
    {
      src: "/Gallery/BASTI.jpg",
      title: "Basti Therapy Session",
      description: "Medicated enema treatment"
    },
    {
      src: "/nasya.jpg",
      title: "Nasya Therapy Session",
      description: "Nasal administration therapy"
    },
    {
      src: "/Gallery/RAKTAMOKSHANA.jpg",
      title: "Raktamokshana Therapy",
      description: "Blood purification treatment"
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
        title="Ayurveda Panchakarma Treatments"
        subtitle="Explore our authentic detox therapies"
        description="Our Panchakarma treatments are designed with traditional Ayurvedic principles to create a serene and healing atmosphere. Every space is thoughtfully crafted to enhance your wellness journey."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Traditional Detox Therapies</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Ayurveda Panchakarma treatments reflect the authentic traditions of Indian healing wisdom. 
              From the moment you step in, you are surrounded by an atmosphere of tranquility and wellness. 
              The rooms feature traditional design elements, natural materials, and a soothing color palette 
              that aligns with Ayurvedic principles. Each space is designed to promote healing, relaxation, 
              and a deep connection with nature.
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
              className="w-full h-full bg-cover bg-center"
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
          ‹
        </button>

        <button
          onClick={() =>
            setCurrent((current + 1) % slides.length)
          }
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
        >
          ›
        </button>
      </section>
    </main>
  );
}
