"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home8.jpeg"
          alt="Advanced Skin and Hair Treatment Clinic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
          <div className="max-w-2xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mt-4">
              <span className="w-2 h-2 bg-[#00A651] rounded-full"></span>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                Trusted Dermatology Clinic
              </span>
            </div>

            {/* Main Heading */}
            {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Advanced{" "}
              <span className="text-[#00A651]">Skin</span>
              {" "}&{" "}
              <span className="text-[#0077C8]">Hair</span>
              {" "}Treatments
            </h1> */}

            {/* Subtext */}
            {/* <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Experience safe and effective dermatology treatments with advanced 
              technology and expert doctors. Your journey to healthy skin starts here.
            </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              {/* <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-[#0077C8] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link> */}

              {/* Secondary Button */}
              {/* <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Book Free Consultation
              </Link> */}
            </div>

            {/* Trust Indicators - Removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
