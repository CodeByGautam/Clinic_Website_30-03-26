"use client";

import Image from "next/image";
import Link from "next/link";

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Ajay Devershi",
      specialization: "MBBS, DNB (General Surgery) - General Surgeon, Laparoscopic Surgeon",
      experience: "12+ years",
      image: "/ajay2.jpeg",
    },
    {
      name: "Dr. Shruti Devershi",
      specialization: "MBBS, DDVL — Specializes in Dermatology, Costmetology, Trichology",
      experience: "10+ years",
      image: "/shruti.jpeg",
    },
    {
      name: "Dr. Shubhi Rao",
      specialization: "BAMS, M.D. — Specialized in Ayurveda",
      experience: "5+ years",
      image: "/shubhi2.jpg",
    }, 
    
    {
      name: "Dr. Aishwarya Mahale",
      specialization: "Senior Cosmetologist",
      experience: "5+ years",
      image: "/aishwarya.jpeg",
    },
  ];

  return (
    <section id="clinics" className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 border border-[#00A651]/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#00A651] to-[#0077C8] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#00A651] to-[#0077C8] bg-clip-text text-transparent">
              Expert Medical Team
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B0F19] mb-6 leading-tight">
            Meet Our
            <span className="block bg-gradient-to-r from-[#00A651] to-[#0077C8] bg-clip-text text-transparent">
              Specialist Doctors
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our board-certified specialists bring years of expertise in dermatology, surgery, and Ayurveda 
            to provide you with the highest quality care and personalized treatment plans.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A651]/20 via-[#0077C8]/20 to-[#00A651]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Doctor Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Doctor Info */}
              <div className="relative p-6 text-center">
                <h3 className="text-xl font-bold text-[#0B0F19] mb-2 group-hover:text-[#0077C8] transition-colors">
                  {doctor.name}
                </h3>
                
                <p className="text-sm font-medium text-[#00A651] mb-3 line-clamp-2 leading-relaxed">
                  {doctor.specialization}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{doctor.experience} experience</span>
                </div>
                
                <Link
                  href="/appointment"
                  className="w-full py-3 bg-gradient-to-r from-[#00A651] to-[#0077C8] text-white rounded-2xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-16">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0B0F19] to-[#1a1a1a] text-white rounded-2xl font-semibold hover:from-[#0077C8] hover:to-[#00A651] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Doctors
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
