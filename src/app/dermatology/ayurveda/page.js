import { Heart, Activity, Leaf, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Ayurveda Treatments | Ancient Healing for Modern Wellness",
  description: "Experience authentic Ayurvedic treatments including Nadi Parikshan, Prakriti Analysis, Agnikarma, Viddhakarma, and Suvarnaprashan. Traditional healing for holistic wellness.",
};

export default function AyurvedaTreatmentsPage() {
  const ayurvedaTreatments = [
    {
      title: "Nadi Parikshan",
      subtitle: "Pulse Diagnosis",
      description: "Ancient Ayurvedic pulse reading to determine your unique constitution, identify health imbalances, and create personalized treatment plans.",
      icon: <Activity className="w-8 h-8" />,
      href: "/dermatology/ayurveda/nadi-parikshan",
      color: "#00A651",
      benefits: ["Non-invasive diagnosis", "Early detection", "Holistic assessment"]
    },
    {
      title: "Prakriti Parikshan",
      subtitle: "Constitution Analysis",
      description: "Comprehensive analysis to discover your unique Ayurvedic constitution (Vata, Pitta, Kapha) for personalized diet and lifestyle recommendations.",
      icon: <Sparkles className="w-8 h-8" />,
      href: "/dermatology/ayurveda/prakriti-parikshan",
      color: "#0077C8",
      benefits: ["Personalized wellness", "Disease prevention", "Optimal lifestyle"]
    },
    {
      title: "Agnikarma",
      subtitle: "Thermal Therapy",
      description: "Controlled heat application therapy for chronic pain, joint disorders, and musculoskeletal conditions. Non-surgical pain management solution.",
      icon: <div className="text-2xl">🔥</div>,
      href: "/dermatology/ayurveda/agnikarma",
      color: "#F97316",
      benefits: ["Pain relief", "Improved mobility", "Long-lasting results"]
    },
    {
      title: "Viddhakarma",
      subtitle: "Detoxification Therapy",
      description: "Therapeutic bloodletting for deep detoxification, treating skin disorders, joint conditions, and systemic imbalances. Ancient Panchakarma therapy.",
      icon: <div className="text-2xl">💧</div>,
      href: "/dermatology/ayurveda/viddhakarma",
      color: "#DC2626",
      benefits: ["Deep detox", "Skin clarity", "Immunity boost"]
    },
    {
      title: "Suvarnaprashan",
      subtitle: "Pediatric Immunization",
      description: "Ancient Ayurvedic immunization for children using purified gold and herbs. Enhances immunity, intelligence, and healthy growth in kids.",
      icon: <div className="text-2xl">⭐</div>,
      href: "/dermatology/ayurveda/suvarnaprashan",
      color: "#FFD700",
      benefits: ["Boosts immunity", "Enhances IQ", "Healthy growth"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#00A651]/10 via-white to-[#0077C8]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4" />
              Ancient Wisdom, Modern Healing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0F19] mb-6">
              Ayurveda Treatments
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Time-Honored Therapies for Holistic Wellness
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Discover the profound healing power of authentic Ayurvedic treatments. From pulse diagnosis to ancient detoxification therapies, experience wellness rooted in 5000 years of traditional wisdom.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00A651]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0077C8]/5 rounded-full blur-3xl" />
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5 rounded-3xl p-8">
              <div className="w-full h-80 bg-gradient-to-br from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <p className="text-[#00A651] font-medium">Ayurveda: The Science of Life</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-6">
                The Ayurvedic Approach
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ayurveda, the ancient Indian system of medicine, views health as a balance between body, mind, and spirit. Unlike conventional medicine that often treats symptoms, Ayurveda seeks to address the root cause of illness by restoring the natural balance of the three doshas - Vata, Pitta, and Kapha.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our Ayurvedic treatments combine classical wisdom with modern clinical standards. Each therapy is personalized based on your unique constitution (Prakriti) and current health status, ensuring safe and effective healing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you seek preventive care, chronic disease management, or rejuvenation, our authentic Ayurvedic treatments offer holistic solutions for lasting wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
              Our Ayurvedic Therapies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Authentic treatments performed by experienced Ayurvedic physicians
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ayurvedaTreatments.map((treatment, index) => (
              <Link
                key={index}
                href={treatment.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `${treatment.color}15` }}
                >
                  <div style={{ color: treatment.color }}>
                    {treatment.icon}
                  </div>
                </div>
                
                <p className="text-sm font-medium mb-1" style={{ color: treatment.color }}>
                  {treatment.subtitle}
                </p>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-3 group-hover:text-[#0077C8] transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {treatment.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {treatment.benefits.map((benefit, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-[#00A651] font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
              Why Choose Our Ayurveda Center?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining ancient wisdom with modern healthcare standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <div className="text-4xl">👨‍⚕️</div>,
                title: "Expert Vaidyas",
                description: "Experienced Ayurvedic physicians with decades of clinical practice"
              },
              {
                icon: <div className="text-4xl">🏥</div>,
                title: "Clinical Standards",
                description: "Hygiene and safety protocols meeting modern healthcare requirements"
              },
              {
                icon: <div className="text-4xl">🌿</div>,
                title: "Authentic Herbs",
                description: "High-quality, certified Ayurvedic medicines and preparations"
              },
              {
                icon: <div className="text-4xl">📋</div>,
                title: "Personalized Care",
                description: "Treatment plans customized to your unique constitution and needs"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-[#0B0F19] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Doshas Section */}
      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Understanding the Three Doshas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The foundation of Ayurvedic diagnosis and treatment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Vata</h3>
              <p className="text-[#8B5CF6] font-medium mb-4">Air & Ether Elements</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Governs movement and circulation</li>
                <li>• Controls nervous system</li>
                <li>• Light, dry, cold qualities</li>
                <li>• Creative and energetic nature</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-[#F97316]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pitta</h3>
              <p className="text-[#F97316] font-medium mb-4">Fire & Water Elements</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Governs digestion and metabolism</li>
                <li>• Controls body temperature</li>
                <li>• Hot, sharp, oily qualities</li>
                <li>• Intelligent and focused nature</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Kapha</h3>
              <p className="text-[#10B981] font-medium mb-4">Water & Earth Elements</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Governs structure and lubrication</li>
                <li>• Controls immunity and stability</li>
                <li>• Heavy, cold, oily qualities</li>
                <li>• Calm and nurturing nature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Ayurvedic Journey
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Start with a Nadi Parikshan consultation to discover your unique constitution and receive personalized treatment recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dermatology/ayurveda/nadi-parikshan"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0077C8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Book Consultation
            </Link>
            <a
              href="tel:9270216369"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <Activity className="w-5 h-5" />
              Call: 92702 16369
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
