import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import TreatmentFAQ from "@/components/TreatmentFAQ";

export const metadata = {
  title: "Psoriasis & Eczema Fusion Treatment | Healthfusion Clinic",
  description: "Advanced fusion treatment for psoriasis and eczema combining Ayurveda, dermatology, and allopathy for long-term relief.",
  alternates: {
    canonical: "/fusion-treatments/psoriasis-eczema",
  },
};

const faqs = [
  {
    question: "How does fusion treatment help psoriasis?",
    answer: "Fusion treatment combines Ayurvedic detoxification with modern dermatology to reduce inflammation, control flare-ups, and strengthen skin barriers from within."
  },
  {
    question: "Is the treatment safe for sensitive skin?",
    answer: "Yes, our fusion approach uses gentle Ayurvedic herbs combined with clinically-tested dermatology treatments, making it safe for all skin types."
  },
  {
    question: "How long until I see results?",
    answer: "Most patients see improvement in 4-6 weeks. Significant reduction in flare-ups and improved skin texture typically occurs within 3 months."
  },
  {
    question: "Are the results permanent?",
    answer: "While not completely permanent, our fusion treatment provides long-term remission. Many patients remain symptom-free for 1-2 years with proper maintenance."
  },
  {
    question: "What's the cost of treatment?",
    answer: "Treatment cost varies based on severity and duration. We offer personalized packages starting from ₹4,999. Consult our experts for exact pricing."
  }
];

export default function PsoriasisEczemaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F19] leading-tight">
              Advanced Psoriasis & Eczema
              <span className="text-[#0077C8"> Fusion Treatment</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Experience the power of integrated Ayurveda and modern dermatology for lasting relief from psoriasis and eczema flare-ups.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-[#0077C8] text-white px-7 py-4 font-semibold shadow-lg hover:bg-blue-700 transition-all"
              >
                Book Appointment
              </Link>
              <Link
                href="/ask-expert"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#0077C8] text-[#0077C8] px-7 py-4 font-semibold hover:bg-blue-50 transition-all"
              >
                Ask Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-8">
              Understanding Psoriasis & Eczema
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                <strong>Psoriasis</strong> and <strong>eczema</strong> are chronic inflammatory skin conditions that affect millions worldwide. 
                These conditions cause red, itchy, and sometimes painful skin patches that can significantly impact quality of life.
              </p>
              <p>
                While conventional treatments often focus only on symptom management, our fusion approach addresses both the <strong>root cause</strong> 
                and <strong>visible symptoms</strong> through the combined power of three medical systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-8">
              Common Symptoms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Red, Inflamed Patches</h3>
                    <p className="text-gray-600 mt-1">Raised, red areas of skin that may be warm to touch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Intense Itching</h3>
                    <p className="text-gray-600 mt-1">Persistent itching that worsens at night or during flare-ups</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Dry, Cracked Skin</h3>
                    <p className="text-gray-600 mt-1">Skin that may crack and bleed, especially on hands and feet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Thickened Nails</h3>
                    <p className="text-gray-600 mt-1">Nails that become thick, pitted, or ridged</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-8">
              Root Causes & Triggers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">Internal Factors</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Genetic predisposition and family history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Immune system dysfunction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Hormonal imbalances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Metabolic disorders</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">External Triggers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Stress and anxiety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Certain medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Weather changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Skin injuries or infections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fusion Approach */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-8 text-center">
              Our Fusion Approach
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Combining ancient wisdom with modern science for complete healing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#00A651] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Ayurveda</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Root Cause Healing:</strong> Ancient detoxification therapies and herbal formulations to purify blood, 
                  strengthen immunity, and balance doshas from within.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#0077C8] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Dermatology</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Advanced Clinical Care:</strong> Modern diagnostic tools, targeted treatments, and 
                  evidence-based therapies to manage visible symptoms and prevent recurrence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Allopathy</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Symptom Management:</strong> Conventional medications for immediate relief during 
                  severe flare-ups, ensuring comfort and preventing complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-8">
              Key Benefits of Fusion Treatment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Faster Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Notice improvement in 2-3 weeks with our integrated approach, compared to months with conventional treatments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Long-term Healing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Address root causes to prevent recurrence and achieve lasting remission for 1-2 years.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Reduced Side Effects</h3>
                <p className="text-gray-600 leading-relaxed">
                  Natural Ayurvedic components reduce dependency on harsh medications and minimize side effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-8">
              Treatment Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed assessment of your condition, medical history, and lifestyle factors.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Diagnosis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced diagnostic tests to identify root causes and severity level.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Personalized Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom fusion treatment protocol combining all three medical systems.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Follow-up Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular monitoring and adjustments for optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <TreatmentFAQ faqs={faqs} />

      {/* Consultation Banner */}
      <ConsultationBanner />
    </div>
  );
}
