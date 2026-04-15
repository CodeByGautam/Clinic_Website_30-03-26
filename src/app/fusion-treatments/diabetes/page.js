import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import TreatmentFAQ from "@/components/TreatmentFAQ";

export const metadata = {
  title: "Diabetes Fusion Treatment | Healthfusion Clinic",
  description: "Advanced fusion treatment for diabetes combining Ayurveda, endocrinology, and allopathy for blood sugar management.",
  alternates: {
    canonical: "/fusion-treatments/diabetes",
  },
};

const faqs = [
  {
    question: "How does fusion treatment help diabetes?",
    answer: "Our fusion approach combines Ayurvedic blood sugar regulation with modern endocrinology to improve insulin sensitivity, enhance pancreas function, and manage blood sugar naturally from within."
  },
  {
    question: "Is it effective for Type 2 diabetes?",
    answer: "Yes, fusion treatment is highly effective for Type 2 diabetes as it addresses metabolic imbalance through Ayurveda while using clinical treatments for blood sugar control."
  },
  {
    question: "When will I see blood sugar improvement?",
    answer: "Most patients see 30-40% improvement in blood sugar levels in 4-6 weeks. Significant control typically occurs within 3-4 months with consistent treatment."
  },
  {
    question: "Can I reduce medication dependency?",
    answer: "With our fusion approach, many patients can reduce medication dosage over time. However, this must be done under medical supervision and depends on individual response."
  },
  {
    question: "What's the treatment duration?",
    answer: "Treatment duration varies based on diabetes type and severity. Most patients require 4-6 months of fusion therapy for optimal blood sugar management."
  }
];

export default function DiabetesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F19] leading-tight">
              Advanced Diabetes
              <span className="text-[#0077C8"> Fusion Treatment</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Experience the power of integrated Ayurveda and modern endocrinology for natural blood sugar management and improved quality of life.
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
              Understanding Diabetes
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                <strong>Diabetes</strong> is a chronic condition affecting how your body processes blood sugar (glucose). 
                It occurs when the pancreas doesn't produce enough insulin or when the body can't effectively use the insulin it produces.
              </p>
              <p>
                While conventional treatments often focus only on blood sugar control, our fusion approach addresses both the 
                <strong>metabolic imbalance</strong> and <strong>pancreatic function</strong> through three complementary medical systems.
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
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Frequent Urination</h3>
                    <p className="text-gray-600 mt-1">Increased need to urinate, especially at night</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Excessive Thirst</h3>
                    <p className="text-gray-600 mt-1">Constant feeling of thirst and dry mouth</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Fatigue & Weakness</h3>
                    <p className="text-gray-600 mt-1">Persistent tiredness and lack of energy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Slow Healing</h3>
                    <p className="text-gray-600 mt-1">Cuts and wounds taking longer to heal</p>
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
                    <span>Insulin resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Pancreatic dysfunction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Genetic predisposition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Autoimmune factors</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">External Triggers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Poor diet habits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Sedentary lifestyle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Obesity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Stress and poor sleep</span>
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
              Combining ancient wisdom with modern science for natural blood sugar management
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#00A651] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Ayurveda</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Blood Sugar Balance:</strong> Traditional herbs and detoxification therapies to enhance insulin sensitivity, 
                  strengthen pancreas function, and regulate blood sugar naturally.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#0077C8] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Endocrinology</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Advanced Clinical Care:</strong> Modern diagnostic tools, glucose monitoring, 
                  and evidence-based treatments for optimal blood sugar control.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Allopathy</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Symptom Management:</strong> Conventional medications for blood sugar control 
                  and prevention of diabetes complications.
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
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Natural Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  Achieve better blood sugar management with reduced medication dependency.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Improved Energy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhanced vitality and reduced fatigue through better glucose utilization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Prevention Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce risk of diabetes complications and improve overall quality of life.
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
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Blood Sugar Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive assessment of glucose levels and pancreatic function.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Metabolic Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced tests to identify insulin resistance and metabolic factors.
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
                  Ongoing care and lifestyle guidance to maintain blood sugar control.
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
