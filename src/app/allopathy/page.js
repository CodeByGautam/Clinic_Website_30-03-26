import Image from "next/image";
import CategorySection from "@/components/CategorySection";
import ConsultationBanner from "@/components/ConsultationBanner";
import { treatments } from "@/data/treatments";

export const metadata = {
  title: "Allopathy (Modern Care) | AyuMed Clinic",
  description:
    "Explore modern dermatology, hair, and laser treatments powered by advanced technology and expert care.",
};

export default function AllopathyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/modern_medicine.jpg"
            alt="Modern Treatments"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/85 via-[#0B0F19]/65 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm text-white/90 text-sm font-semibold">
              Advanced Care
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Allopathy (Modern Treatments)
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
              Dermatologist-led treatment plans for skin, hair, and laser concerns using modern technology and safe protocols.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-white/90 text-sm">
              <span className="rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm">
                15+ Years Experience
              </span>
              {/* <span className="rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm">
                10+ Clinics
              </span> */}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F7FAFC]">
        <CategorySection
          title="Skin"
          subtitle="Clinical solutions for acne, ageing, pigmentation, and advanced facials."
          items={treatments.allopathy.skin}
          theme="allopathy"
          defaultImage="/skin-brightening.jpg"
        />
      </div>

      <CategorySection
        title="Hair"
        subtitle="Treatments for hair loss, scalp health, and regenerative therapies."
        items={treatments.allopathy.hair}
        theme="allopathy"
        defaultImage="/hair.jpg"
      />

      <div className="bg-[#F7FAFC]">
        <CategorySection
          title="Laser"
          subtitle="Precision laser treatments for hair reduction, pigmentation, and resurfacing."
          items={treatments.allopathy.laser}
          theme="allopathy"
          defaultImage="/skin-resurfacing.webp"
        />
      </div>

      <ConsultationBanner theme="allopathy" />
    </main>
  );
}
