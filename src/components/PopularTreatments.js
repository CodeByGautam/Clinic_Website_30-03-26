"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function PopularTreatments() {
  const treatments = [
    {
      title: "Acne Treatment",
      href: "/treatments/acne",
      image: "/acne.jpg",
    },
    {
      title: "Anti-Ageing Treatment",
      href: "/treatments/anti-ageing",
      image: "/enti-aging.jpg",
    },
    {
      title: "Skin Brightening",
      href: "/treatments/skin-brightening",
      image: "/skin-brightening.jpg",
    },
    {
      title: "Hair & Scalp Therapy",
      href: "/treatments/hair-scalp-therapy",
      image: "/hair.jpg",
    },
    {
      title: "Skin Resurfacing",
      href: "/treatments/skin-resurfacing",
      image: "/skin-resurfacing.webp",
    },
    {
      title: "Skin Cleanse",
      href: "/treatments/skin-cleanse",
      image: "/skin-clean.webp",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 288 + 24; // w-72 (288px) + gap-6 (24px)
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000); // Resume auto-scroll after 5 seconds
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 288 + 24; // w-72 (288px) + gap-6 (24px)
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000); // Resume auto-scroll after 5 seconds
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 288 + 24; // w-72 (288px) + gap-6 (24px)
        const totalCards = treatments.length;
        const nextIndex = (currentIndex + 1) % totalCards;
        
        // Scroll to next card and stop there
        container.scrollTo({ 
          left: nextIndex * cardWidth, 
          behavior: 'smooth' 
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000); // Wait 3 seconds at each slide

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling, treatments.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
            Most Popular Treatments
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            We specialise in advanced dermatology & aesthetic treatments to help you achieve flawless, radiant skin. 
            Discover the power of expert care and FDA-approved technology that deliver safe, lasting results for a range of skin concerns. 
            We personalise treatments to give you healthy, glowing skin you can feel confident in.
          </p>
        </div>

        {/* Treatments Grid - Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth" ref={scrollContainerRef} style={{ scrollSnapType: 'x mandatory' }}>
            {treatments.map((treatment, index) => (
              <div key={index} className="flex-shrink-0 w-72" style={{ scrollSnapAlign: 'start' }}>
                <Link
                  href={treatment.href}
                  className="group block text-center"
                >
              {/* Image Container - Bigger Rounded Box */}
              <div className="relative mb-6">
                <div className="relative w-64 h-64 rounded-[50%] bg-[#E0F7FA] overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#00A651]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[50%]" />
                </div>

                {/* Arrow Button - Positioned at bottom center */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#0077C8] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Treatment Title */}
              <h3 className="text-lg font-semibold text-[#0B0F19] group-hover:text-[#0077C8] transition-colors duration-300 mt-8">
                {treatment.title}
              </h3>
            </Link>
          </div>
          ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#0077C8] hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#0077C8] hover:text-white transition-all duration-300 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 bg-[#0077C8] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Treatments
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
