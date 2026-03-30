import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Phone,
  Check,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  BadgeCheck,
} from "lucide-react";
import TreatmentFAQ from "@/components/TreatmentFAQ";
import BackButton from "@/components/BackButton";

export default function PremiumTreatmentPage({
  title,
  description,
  heroImage,
  heroLabel = "Trusted Dermatology Clinic",
  heroPrimaryCta = null,
  heroSecondaryCta = { label: "View Other Treatments", href: "/allopathy" },
  understanding = {
    title: "Understanding the Condition",
    description: "",
    image: "https://placehold.co/900x700/png",
  },
  causesTitle = "Common Causes / Symptoms",
  causes = [],
  optionsTitle = "Treatment Options",
  options = [],
  benefitsTitle = "Benefits",
  benefits = [],
  procedureTitle = "Treatment Procedure",
  procedureSteps = [],
  whyChooseTitle = "Why Choose Our Clinic",
  whyChoose = [],
  beforeAfterTitle = "Before / After Results",
  beforeAfter = {
    beforeImage: "https://placehold.co/900x700/png",
    afterImage: "https://placehold.co/900x700/png",
  },
  faqs = [],
  cta = {
    title: "Start Your Skin Transformation Today",
    description: "Book your consultation with our expert dermatologists.",
    primary: { label: "Book Appointment", href: "/appointment" },
    secondary: { label: "Call Now", href: "tel:+919270216369" },
  },
}) {
  return (
    <div className="bg-white">
      <section className="relative w-full min-h-[55vh] lg:min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="absolute top-6 left-6 z-20">
          <BackButton />
        </div>

        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm text-white/90 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>{heroLabel}</span>
              </div>

              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
                {description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {heroPrimaryCta && (
                  <Link
                    href={heroPrimaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0077C8] text-white px-7 py-4 font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    {heroPrimaryCta.label}
                  </Link>
                )}
                <Link
                  href={heroSecondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 text-white px-7 py-4 font-semibold hover:bg-white/10 hover:border-white transition-all"
                >
                  {heroSecondaryCta.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">
                {understanding.title}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                {understanding.description}
              </p>
            </div>
            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden bg-[#F7FAFC] border border-gray-100">
              <Image
                src={understanding.image}
                alt={understanding.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">
              {causesTitle}
            </h2>
            <p className="mt-3 text-gray-600">
              Key factors we evaluate during diagnosis and planning.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0077C8]/10 text-[#0077C8] flex items-center justify-center mb-4">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0B0F19]">{item.title}</h3>
                {item.description ? (
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">
              {optionsTitle}
            </h2>
            <p className="mt-3 text-gray-600">
              Dermatologist-approved options tailored to your skin and lifestyle.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="rounded-2xl p-6 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00A651]/10 text-[#00A651] flex items-center justify-center mb-4">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">
              {benefitsTitle}
            </h2>
            <p className="mt-3 text-gray-600">
              Results you can see—and feel.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00A651]/10 text-[#00A651] flex items-center justify-center mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0B0F19]">{item.title}</h3>
                {item.description ? (
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">
              {procedureTitle}
            </h2>
            <p className="mt-3 text-gray-600">
              A step-by-step process designed for comfort and visible outcomes.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {procedureSteps.map((step, idx) => (
              <div
                key={`${step.title}-${idx}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0077C8]/10 text-[#0077C8] flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-[#0B0F19]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {whyChooseTitle}
            </h2>
            <p className="mt-3 text-gray-300">
              Premium care, advanced technology, and dermatologist-led treatment plans.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                  {idx % 2 === 0 ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">
              {beforeAfterTitle}
            </h2>
            <p className="mt-3 text-gray-600">
              Results vary by individual. Your dermatologist will guide realistic outcomes.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-[#F7FAFC]">
              <div className="px-6 py-4 border-b border-gray-100">
                <p className="font-semibold text-[#0B0F19]">Before</p>
              </div>
              <div className="relative h-[260px] sm:h-[360px]">
                <Image
                  src={beforeAfter.beforeImage}
                  alt={`${title} before`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-100 bg-[#F7FAFC]">
              <div className="px-6 py-4 border-b border-gray-100">
                <p className="font-semibold text-[#0B0F19]">After</p>
              </div>
              <div className="relative h-[260px] sm:h-[360px]">
                <Image
                  src={beforeAfter.afterImage}
                  alt={`${title} after`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="bg-[#F7FAFC]">
        <TreatmentFAQ faqs={faqs} />
      </div>

      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {cta.title}
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              {cta.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={cta.primary.href}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0077C8] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                {cta.primary.label}
              </Link>
              <a
                href={cta.secondary.href}
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white border-2 border-white/60 px-8 py-4 rounded-full font-semibold hover:bg-white/25 hover:border-white transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {cta.secondary.label}
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-white/80 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Dermatologist-led care • Safe protocols • Personalized plans</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
