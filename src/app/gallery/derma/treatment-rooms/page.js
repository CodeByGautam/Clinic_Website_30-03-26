"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryHero from "@/components/GalleryHero";

export default function DermatologyTreatmentRoomsPage() {
  const slides = [
    {
      src: "/clinic/clinic58.jpeg",
      title: "Laser Treatment Room",
      description: "Advanced laser therapy space"
    },
    {
      src: "/clinic/clinic37.jpeg",
      title: "Facial Treatment Suite",
      description: "Premium facial therapy space"
    },
    {
      src: "/clinic/clinic27.jpeg",
      title: "Hydrafacial Suite",
      description: "Advanced hydrafacial space"
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
        title="Dermatology Treatment Rooms"
        subtitle="Advanced spaces for modern skin therapies"
        description="Our treatment rooms are equipped with cutting-edge technology and designed for optimal patient comfort during advanced dermatological procedures."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Cutting-Edge Treatment Environment</h2>
            <p className="text-gray-600 leading-relaxed">
              Each of our dermatology treatment rooms is purpose-built for specific procedures, featuring 
              advanced medical equipment, optimal lighting, and strict hygiene protocols. From laser therapy 
              rooms with specialized safety features to comfortable facial suites, every space is designed 
              to deliver the highest standard of dermatological care while ensuring patient comfort and safety.
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
