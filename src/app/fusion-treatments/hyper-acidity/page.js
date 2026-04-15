import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import DoctorCard from "@/components/DoctorCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import TreatmentFAQ from "@/components/TreatmentFAQ";

export const metadata = {
  title: "Hyper Acidity Fusion Treatment | Healthfusion Clinic",
  description: "Advanced fusion treatment for hyper acidity combining Ayurveda, gastroenterology, and allopathy for acid balance.",
  alternates: {
    canonical: "/fusion-treatments/hyper-acidity",
  },
};

const faqs = [
  {
    question: "How does fusion treatment treat hyper acidity?",
    answer: "Our fusion approach combines Ayurvedic acid balancing with modern gastroenterology to regulate stomach acid, strengthen esophageal sphincter, and restore natural acid balance from within."
  },
  {
    question: "Is it effective for chronic acid reflux?",
    answer: "Yes, fusion treatment is highly effective for chronic acid reflux as it addresses digestive imbalance through Ayurveda while using clinical treatments for immediate acid control."
  },
  {
    question: "When will I see acid relief?",
    answer: "Most patients see 80-90% improvement in 2-3 weeks. Complete acid balance typically occurs within 6-8 weeks with consistent treatment."
  },
  {
    question: "Are the results permanent?",
    answer: "With our fusion approach and proper dietary habits, hyper acidity results can be long-lasting. Many patients remain symptom-free for 1-2 years with maintenance care."
  },
  {
    question: "What's the treatment duration?",
    answer: "Treatment duration varies based on severity and chronicity. Most patients require 1.5-3 months of fusion therapy for complete and lasting results."
  }
];

export default function HyperAcidityPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F19] leading-tight">
              Advanced Hyper Acidity
              <span className="text-[#0077C8"> Fusion Treatment</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Experience the power of integrated Ayurveda and modern gastroenterology for natural acid balance and lasting relief.
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
              Understanding Hyper Acidity
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                <strong>Hyper acidity</strong> is a condition where stomach produces excess acid, leading to heartburn, 
                acid reflux, and discomfort. It affects millions and can damage the esophagus if left untreated.
              </p>
              <p>
                While conventional treatments often focus only on acid suppression, our fusion approach addresses both the 
                <strong>acid imbalance</strong> and <strong>digestive weakness</strong> through three complementary medical systems.
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
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Burning Sensation</h3>
                    <p className="text-gray-600 mt-1">Intense burning in chest and throat, especially after meals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Acid Reflux</h3>
                    <p className="text-gray-600 mt-1">Sour taste in mouth and regurgitation of stomach acid</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Chest Pain</h3>
                    <p className="text-gray-600 mt-1">Sharp or burning pain in chest, often mistaken for heart attack</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0F19]">Difficulty Swallowing</h3>
                    <p className="text-gray-600 mt-1">Feeling of food stuck in throat due to esophageal irritation</p>
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
                    <span>Excess stomach acid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Weak esophageal sphincter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Poor digestion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Hormonal imbalances</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-4">External Triggers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Spicy and acidic foods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Coffee and alcohol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Stress and anxiety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                    <span>Lying down after meals</span>
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
              Combining ancient wisdom with modern science for natural acid balance
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#00A651] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Ayurveda</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Acid Balance:</strong> Traditional herbs and cooling therapies to neutralize excess acid, 
                  strengthen digestion, and restore natural acid balance from within.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-[#0077C8] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Gastroenterology</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Advanced Clinical Care:</strong> Modern diagnostic tools, pH monitoring, 
                  and evidence-based treatments for acid control and esophageal healing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Allopathy</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Symptom Management:</strong> Conventional medications for immediate acid reduction 
                  and relief during severe acidity episodes.
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
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Quick Relief</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience 80-90% improvement in 2-3 weeks, compared to months with conventional treatments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Natural Balance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Restore natural acid production without dependency on antacids long-term.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00A651]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-4">Prevents Damage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Protect esophagus and stomach lining from acid damage for long-term health.
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
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Acid Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive assessment of stomach acid levels and digestive function.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">pH Monitoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced tests to measure acid production and identify triggers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Fusion Therapy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Combined Ayurvedic, gastroenterological, and conventional treatments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19] mb-3">Maintenance Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing care and dietary guidance to maintain acid balance.
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
