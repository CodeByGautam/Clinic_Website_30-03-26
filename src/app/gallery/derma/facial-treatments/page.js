import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Facial Treatments Gallery | Premium Skin Care",
  description: "Explore our facial treatments including Hydrafacial, medi-facials, organic peels, anti-aging facials, and premium skin rejuvenation therapies.",
};

export default function FacialTreatmentsPage() {
  const galleryImages = [
    {
      src: "/Gallery/HYDRAFACIAL.jpeg",
      title: "Hydrafacial Treatment",
      caption: "Advanced vortex-fusion facial",
      description: "Multi-step Hydrafacial treatment showing the vortex-extraction process for deep cleansing, exfoliation, and hydration."
    },
    {
      src: "/Gallery/MEDIFACIAL.jpeg",
      title: "Medi-Facial Session",
      caption: "Medical-grade facial therapy",
      description: "Professional medi-facial combining multiple modalities for comprehensive skin rejuvenation and maintenance."
    },
    {
      src: "/Gallery/organicpeel.jpeg",
      title: "Organic Peel Treatment",
      caption: "Natural enzyme peel",
      description: "Gentle organic peel treatment using natural fruit enzymes and botanical extracts for radiant skin."
    },
    {
      src: "/Gallery/OXYGENEO.jpeg",
      title: "Oxygeneo Facial",
      caption: "Oxygenation therapy",
      description: "Advanced Oxygeneo 3-in-1 super facial showing the oxygenation process for immediate glow and nourishment."
    },
    {
      src: "/Gallery/goldenfacial.jpeg",
      title: "Gold Facial Treatment",
      caption: "Luxury gold infusion",
      description: "Premium gold facial treatment using pure gold nanoparticles for anti-aging and radiant complexion."
    },
    {
      src: "/Gallery/antiagingfacial.jpeg",
      title: "Anti-Aging Facial",
      caption: "Youth restoration therapy",
      description: "Comprehensive anti-aging facial combining multiple technologies for wrinkle reduction and skin firming."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Facial Treatments"
        subtitle="Premium skincare experiences"
        description="Indulge in our range of facial treatments from advanced medical facials to luxurious gold treatments, all designed to reveal your skin's natural radiance."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Luxury Meets Science</h2>
            <p className="text-gray-600 leading-relaxed">
              Our facial treatments blend luxury spa experiences with medical-grade skincare science. 
              From the multi-step Hydrafacial to our premium gold and anti-aging facials, each treatment 
              is customized to address your specific skin concerns. Our trained aestheticians use 
              premium products and advanced techniques to deliver visible results and a relaxing experience.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
