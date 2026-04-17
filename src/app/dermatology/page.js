import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Dermatology Treatments | Healthfusion Multispeciality Clinic",
  description: "Explore our comprehensive range of dermatology and aesthetic treatments at Healthfusion Multispeciality Clinic.",
};

export default function DermatologyPage() {
  const treatments = [
    {
      title: "Acne Treatment",
      description: "Effective solutions for acne and acne scars",
      href: "/dermatology/acne",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Anti-Ageing Treatment",
      description: "Turn back time with our anti-ageing solutions",
      href: "/dermatology/anti-ageing",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Pigmentation Treatment",
      description: "Advanced treatments for skin pigmentation issues",
      href: "/dermatology/pigmentation",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Scar Treatment",
      description: "Effective scar reduction and removal treatments",
      href: "/dermatology/scar-treatment",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Hair Treatment",
      description: "Comprehensive hair loss and hair restoration solutions",
      href: "/dermatology/hair-treatment",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Laser Hair Removal",
      description: "Permanent hair removal using advanced laser technology",
      href: "/dermatology/laser-hair-removal",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-[#0077C8]/10 text-[#0077C8]">
              <Sparkles className="w-4 h-4" />
              Dermatology Treatments
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
              Advanced Dermatology Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Expert care for all your skin and hair concerns
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Experience the latest in dermatological treatments with our team of expert dermatologists 
              and state-of-the-art technology for optimal results.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[#0077C8]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-[#00A651]" />
      </section>

      {/* Treatments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "#0077C815", color: "#0077C8" }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={treatment.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B0F19] mb-2 group-hover:text-[#0077C8] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {treatment.description}
                    </p>
                  </div>
                </div>
                
                <Link
                  href={treatment.href}
                  className="inline-flex items-center gap-2 text-[#0077C8] font-semibold hover:text-[#00A651] transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0077C8] to-[#00A651]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert dermatologists and discover the perfect treatment for your skin concerns.
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-white text-[#0B0F19] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
