import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import TreatmentFAQ from "@/components/TreatmentFAQ";

export const metadata = {
  title: "Hormonal Disorder Fusion Treatment | Healthfusion Clinic",
  description: "Advanced fusion treatment for hormonal disorders combining Ayurveda, endocrinology, and allopathy for hormone balance.",
  alternates: {
    canonical: "/fusion-treatments/hormonal-disorder",
  },
};

const faqs = [
  {
    question: "How does fusion treatment help hormonal disorders?",
    answer: "Our fusion approach combines Ayurvedic hormone balancing with modern endocrinology to regulate endocrine function, balance hormones naturally, and restore overall wellness from within."
  },
  {
    question: "Is it effective for PCOS and thyroid issues?",
    answer: "Yes, fusion treatment is highly effective for PCOS, thyroid disorders, and other hormonal imbalances as it addresses endocrine dysfunction through Ayurveda while using clinical treatments for hormone regulation."
  },
  {
    question: "When will I see hormonal balance?",
    answer: "Most patients see 60-70% improvement in symptoms in 6-8 weeks. Significant hormonal balance typically occurs within 4-5 months with consistent treatment."
  },
  {
    question: "Are the results permanent?",
    answer: "With our fusion approach and lifestyle modifications, hormonal disorder results can be long-lasting. Many patients maintain balance for 1-2 years with maintenance care."
  },
  {
    question: "What's the treatment duration?",
    answer: "Treatment duration varies based on disorder type and severity. Most patients require 4-6 months of fusion therapy for complete and lasting results."
  }
];

export default function HormonalDisorderPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F19] leading-tight">
              Advanced Hormonal Disorder
              <span className="text-[#0077C8"> Fusion Treatment</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Experience the power of integrated Ayurveda and modern endocrinology for natural hormone balance and restored wellness.
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
              Understanding Hormonal Disorders
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                <strong>Hormonal disorders</strong> occur when there's too much or too little of a hormone in the bloodstream. 
                Common conditions include PCOS, thyroid disorders, menstrual irregularities, and hormonal imbalances affecting overall health.
              </p>
              <p>
                While conventional treatments often focus only on hormone replacement, our fusion approach addresses both the 
                <strong>endocrine dysfunction</strong> and <strong>systemic imbalance</strong> through three complementary medical systems.
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
                  <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Irregular Periods</h3>
                    <p className="text-gray-600 mt-1">Missed, heavy, or painful menstrual cycles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Weight Changes</h3>
                    <p className="text-gray-600 mt-1">Unexplained weight gain or difficulty losing weight</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Fatigue & Mood Swings</h3>
                    <p className="text-gray-600 mt-1">Persistent tiredness and emotional instability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Hair & Skin Issues</h3>
                    <p className="text-gray-600 mt-1">Hair loss, acne, or dry skin</p>
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
                    <span>Endocrine gland dysfunction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Genetic predisposition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Autoimmune conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Age-related changes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">External Triggers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Chronic stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Poor diet and nutrition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Lack of sleep</span>
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
              Combining ancient wisdom with modern science for natural hormone balance
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#00A651] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Ayurveda</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Hormone Balance:</strong> Traditional herbs and detoxification therapies to regulate endocrine function, 
                  balance doshas, and harmonize hormones naturally.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#0077C8] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Endocrinology</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Advanced Clinical Care:</strong> Modern diagnostic tools, hormone testing, 
                  and evidence-based treatments for precise endocrine regulation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Allopathy</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Symptom Management:</strong> Conventional hormone therapies 
                  and medications for immediate symptom relief and regulation.
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
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Natural Balance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Achieve hormone regulation without long-term dependency on medications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Symptom Relief</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce fatigue, mood swings, and other hormonal symptoms effectively.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Long-term Wellness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintain hormonal balance and prevent recurrence for lasting health.
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
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Hormone Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive assessment of hormone levels and endocrine function.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Endocrine Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced tests to identify specific hormonal imbalances and causes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Fusion Therapy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Combined Ayurvedic, endocrinological, and conventional treatments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Maintenance Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing care and lifestyle guidance to maintain hormonal balance.
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
