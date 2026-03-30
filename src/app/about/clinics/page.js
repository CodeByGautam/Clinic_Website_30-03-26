import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: 'Our Clinics | AyuMed - Ayurveda & Dermatology',
  description: 'Explore our two specialized clinics - Ayurveda Clinic for natural healing and Dermatology Clinic for advanced skin treatments.',
};

export default function OurClinicsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] text-sm font-semibold mb-4">
          Our Facilities
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          Two Specialized Clinics, One Mission
        </h1>
        <p className="text-gray-600 mb-8">
          We offer the best of both worlds — traditional Ayurvedic healing and modern dermatology treatments
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ayurveda Clinic Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-3xl">🌿</span>
            </div>
            <h2 className="text-xl font-bold text-[#0B0F19] mb-3">Ayurveda Clinic</h2>
            <p className="text-gray-600 text-sm mb-4">
              Our Ayurveda clinic focuses on natural healing therapies that restore balance in the body 
              and promote healthy skin and hair using Panchakarma and herbal treatments.
            </p>
            <div className="space-y-2 mb-6">
              {['Panchakarma Therapy', 'Ayurvedic Skin Care', 'Herbal Facials', 'Detox Therapies'].map((service, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A651]" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/ayurveda/panchakarma" 
              className="inline-flex items-center gap-2 text-[#00A651] font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore Ayurveda <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dermatology Clinic Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0077C8]/20 to-[#0077C8]/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-3xl">🔬</span>
            </div>
            <h2 className="text-xl font-bold text-[#0B0F19] mb-3">Dermatology Clinic</h2>
            <p className="text-gray-600 text-sm mb-4">
              Our dermatology clinic offers advanced skin and hair treatments using modern dermatology 
              equipment and clinically proven procedures.
            </p>
            <div className="space-y-2 mb-6">
              {['Laser Treatments', 'Hydrafacial', 'PRP Therapy', 'Skin Rejuvenation'].map((service, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0077C8]" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/dermatology" 
              className="inline-flex items-center gap-2 text-[#0077C8] font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore Dermatology <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
