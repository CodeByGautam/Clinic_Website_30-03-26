"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  
  const results = [
    {
      treatment: "Acne Treatment",
      age: "24 years",
      duration: "3 months",
      before: "/acneafter.jpeg",
      after: "/acnebefore.jpeg",
    },
    {
      treatment: "Pigmentation Removal",
      age: "32 years",
      duration: "2 months",
      before: "/pigmantationafter.jpeg",
      after: "/pigmantationbefore.jpeg",
    },
    {
      treatment: "Hair Transplant",
      age: "28 years",
      duration: "6 months",
      before: "/hairtransafter.jpeg",
      after: "/hairtransbefore2.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0077C8]/10 text-[#0077C8] rounded-full text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
            Before & After Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformative results our patients have achieved
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Slider Area */}
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-[#F7FAFC]">
              {/* Before Label - Left side */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-sm font-semibold text-gray-600">Before</span>
              </div>
              
              {/* Before Image (Left side) */}
              <div className="absolute inset-0 bg-gray-200 transition-opacity duration-500">
                <Image
                  src={results[activeIndex].before}
                  alt={`Before - ${results[activeIndex].treatment}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* After Label - Right side */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-sm font-semibold text-[#00A651]">After</span>
              </div>
              
              {/* After Image (Right side with clip) */}
              <div 
                className="absolute inset-0 bg-[#0077C8]/10 transition-opacity duration-500"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              >
                <Image
                  src={results[activeIndex].after}
                  alt={`After - ${results[activeIndex].treatment}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                style={{ left: `${sliderValue}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0B0F19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />

            {/* Labels */}
            <div className="flex justify-between mt-4">
              <span className="text-gray-500 font-medium">Before</span>
              <span className="text-[#00A651] font-medium">After</span>
            </div>
          </div>

          {/* Results Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B0F19] mb-6">
              Treatment Results
            </h3>
            
            <div className="space-y-4">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#0077C8] text-white shadow-lg"
                      : "bg-[#F7FAFC] text-[#0B0F19] hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">{result.treatment}</p>
                      <p className={`text-sm ${activeIndex === index ? "text-white/80" : "text-gray-600"}`}>
                        Patient Age: {result.age} • Duration: {result.duration}
                      </p>
                    </div>
                    <svg 
                      className={`w-6 h-6 ${activeIndex === index ? "text-white" : "text-[#00A651]"}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
