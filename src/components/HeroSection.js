"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Gallery/home4.png"
          alt="Advanced Skin and Hair Treatment Clinic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
          <div className="max-w-2xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00A651] rounded-full"></span>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                Trusted Dermatology Clinic
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Advanced{" "}
              <span className="text-[#00A651]">Skin</span>
              {" "}&{" "}
              <span className="text-[#0077C8]">Hair</span>
              {" "}Treatments
            </h1>

            {/* Subtext */}
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Experience safe and effective dermatology treatments with advanced 
              technology and expert doctors. Your journey to healthy skin starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-[#0077C8] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>

              {/* Secondary Button */}
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-black text-sm">4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="text-black text-sm">
                <span className="text-black font-semibold">100k+</span> Happy Patients
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="text-black text-sm">
                <span className="text-black font-semibold">15+</span> Years Experience
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Fade Removed */}
    </section>
  );
}
