import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import TreatmentFAQ from "@/components/TreatmentFAQ";

export const metadata = {
  title: "Fat Loss Fusion Treatment | Healthfusion Clinic",
  description: "Advanced fusion treatment for fat loss combining Ayurveda, dermatology, and allopathy for sustainable weight management.",
  alternates: {
    canonical: "/fusion-treatments/fat-loss",
  },
};

const faqs = [
  {
    question: "How does fusion treatment help with fat loss?",
    answer: "Our fusion approach combines Ayurvedic metabolism boosters with modern medical science to enhance fat burning, improve digestion, and support sustainable weight loss from within."
  },
  {
    question: "Is it effective for stubborn fat?",
    answer: "Yes, fusion treatment is highly effective for stubborn fat as it addresses hormonal imbalances through Ayurveda while using clinical treatments for metabolic enhancement."
  },
  {
    question: "When will I see weight loss results?",
    answer: "Most patients see 5-8 kg loss in 4-6 weeks. Sustainable weight management typically occurs within 3-4 months with consistent treatment and lifestyle changes."
  },
  {
    question: "Are the results permanent?",
    answer: "With our fusion approach and proper lifestyle maintenance, weight loss results can be long-lasting. Many patients maintain their target weight for 1-2 years with follow-up care."
  },
  {
    question: "What's the treatment duration?",
    answer: "Treatment duration varies based on target weight and metabolic rate. Most patients require 4-6 months of fusion therapy for sustainable and lasting results."
  }
];

export default function FatLossPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F19] leading-tight">
              Advanced Fat Loss
              <span className="text-[#0077C8"> Fusion Treatment</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Experience the power of integrated Ayurveda and modern medical science for sustainable fat loss and improved metabolic health.
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
              Understanding Fat Loss & Weight Management
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                <strong>Fat loss</strong> is a complex process involving metabolism, hormones, digestion, and lifestyle factors. 
                Stubborn fat deposits often resist conventional diet and exercise approaches.
              </p>
              <p>
                While conventional treatments often focus only on calorie restriction, our fusion approach addresses both the 
                <strong>metabolic enhancement</strong> and <strong>digestive optimization</strong> through three complementary medical systems.
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
              Common Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Stubborn Fat Deposits</h3>
                    <p className="text-gray-600 mt-1">Fat that resists diet and exercise, especially in abdomen, thighs, and arms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Slow Metabolism</h3>
                    <p className="text-gray-600 mt-1">Reduced calorie burning and difficulty losing weight despite efforts</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Hormonal Imbalance</h3>
                    <p className="text-gray-600 mt-1">Weight gain due to thyroid, insulin, or cortisol issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Poor Digestion</h3>
                    <p className="text-gray-600 mt-1">Sluggish digestion and fat accumulation due to weak metabolism</p>
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
              Root Causes & Contributing Factors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">Internal Factors</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Slow metabolism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Hormonal imbalances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Poor digestion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Genetic predisposition</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">External Triggers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Sedentary lifestyle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Poor diet habits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Stress and lack of sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Environmental toxins</span>
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
              Combining ancient wisdom with modern science for sustainable weight management
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#00A651] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Ayurveda</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Metabolic Enhancement:</strong> Traditional herbs and detoxification therapies to boost metabolism, 
                  improve digestion, and enhance fat burning from within.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#0077C8] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Dermatology</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Advanced Clinical Care:</strong> Modern diagnostic tools, body composition analysis, 
                  and evidence-based treatments for metabolic optimization and fat reduction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Allopathy</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Symptom Management:</strong> Conventional medications for hormonal regulation 
                  and appetite control to support sustainable weight loss.
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
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Sustainable Loss</h3>
                <p className="text-gray-600 leading-relaxed">
                  Achieve steady, healthy weight loss without muscle loss or nutritional deficiencies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Improved Metabolism</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhanced fat burning and energy levels for better weight management.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Long-term Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Address metabolic causes to prevent weight regain and maintain healthy weight for years.
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
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Metabolic Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive assessment of metabolism, hormones, and body composition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Digestive Assessment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed evaluation of digestive health and nutritional status.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Fusion Therapy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Combined Ayurvedic, clinical, and conventional treatments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Maintenance Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing care and guidance to maintain healthy weight.
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
