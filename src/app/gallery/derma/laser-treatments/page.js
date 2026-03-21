import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Laser Treatment Sessions Gallery | Advanced Laser Therapy",
  description: "View our laser treatment sessions including hair removal, skin resurfacing, tattoo removal, and pigmentation treatments using state-of-the-art laser technology.",
};

export default function LaserTreatmentsPage() {
  const galleryImages = [
    {
      src: "/Gallery/face laser removal .jpeg",
      title: "Laser Hair Removal",
      caption: "Permanent hair reduction",
      description: "Advanced diode laser hair removal treatment showing the precision and effectiveness of our laser technology for all skin types."
    },
    {
      src: "/Gallery/skinresurfacing.jpeg",
      title: "Skin Resurfacing",
      caption: "Fractional CO2 laser therapy",
      description: "Fractional CO2 laser resurfacing treatment for acne scars, wrinkles, and skin texture improvement with precision technology."
    },
    {
      src: "/Gallery/tatto removal.jpeg",
      title: "Tattoo Removal",
      caption: "Q-switched laser therapy",
      description: "Professional Q-switched laser tattoo removal session showing the gradual fading of tattoo ink without damaging surrounding skin."
    },
    {
      src: "/Gallery/pigmentationlaser.jpeg",
      title: "Pigmentation Laser",
      caption: "Dark spot reduction therapy",
      description: "Advanced laser treatment for melasma, sun spots, and pigmentation disorders using targeted wavelength technology."
    },
    {
      src: "/Gallery/vascularlaser.jpeg",
      title: "Vascular Laser Treatment",
      caption: "Spider vein therapy",
      description: "Specialized vascular laser treatment for spider veins, rosacea, and vascular lesions with precise targeting."
    },
    {
      src: "/Gallery/ledmask.jpeg",
      title: "Laser Facial Rejuvenation",
      caption: "Skin tightening therapy",
      description: "Non-ablative laser facial treatment for collagen stimulation, skin tightening, and overall facial rejuvenation."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Laser Treatment Sessions"
        subtitle="Precision laser therapies for optimal results"
        description="Experience the power of advanced laser technology for hair removal, skin rejuvenation, and targeted dermatological treatments."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Advanced Laser Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              Our laser treatments utilize FDA-approved, state-of-the-art laser systems operated by 
              certified laser specialists. From permanent hair reduction to skin resurfacing and 
              tattoo removal, our advanced laser technology delivers precise, effective results with 
              minimal downtime. Each treatment is customized based on skin type and concern for optimal 
              safety and effectiveness.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
