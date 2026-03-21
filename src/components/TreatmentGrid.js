"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TreatmentGrid({ 
  treatments = [],
  primaryColor = "#00A651",
  secondaryColor = "#0077C8"
}) {
  return (
    <section className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
            Panchakarma Therapies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of authentic Panchakarma treatments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div 
                className="h-48 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${primaryColor}10, ${secondaryColor}10)` }}
              >
                <div 
                  className="w-70 h-45 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  {treatment.img ? (
                    <img 
                      src={treatment.img} 
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">{treatment.icon}</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B0F19] mb-2 group-hover:text-[#0077C8] transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {treatment.description}
                </p>
                <Link
                  href={treatment.href}
                  className="inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: secondaryColor }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
