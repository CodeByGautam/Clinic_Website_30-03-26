import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Panchakarma Therapy Sessions Gallery | Authentic Treatments",
  description: "View our Panchakarma therapy sessions including Vamana, Virechana, Basti, Nasya, and Raktamokshana treatments performed by expert Ayurvedic practitioners.",
};

export default function PanchakarmaGalleryPage() {
  const galleryImages = [
    {
      src: "/vamana.jpg",
      title: "Vamana Therapy Session",
      caption: "Therapeutic emesis treatment",
      description: "Expert practitioner performing Vamana therapy to eliminate excess Kapha dosha and toxins from the upper digestive tract."
    },
    {
      src: "/virechana.jpg",
      title: "Virechana Therapy Session",
      caption: "Purgation therapy",
      description: "Controlled purgation therapy session designed to remove Pitta toxins from the liver, gallbladder, and intestines."
    },
    {
      src: "/Gallery/BASTI.jpg",
      title: "Basti Therapy Session",
      caption: "Medicated enema treatment",
      description: "Traditional Basti therapy administration for Vata balance and deep colon cleansing using herbal oils and decoctions."
    },
    {
      src: "/nasya.jpg",
      title: "Nasya Therapy Session",
      caption: "Nasal administration therapy",
      description: "Nasya treatment session for head-neck disorders, involving the administration of medicated oils through the nasal passage."
    },
    {
      src: "/raktamokshan.jpeg",
      title: "Raktamokshana Session",
      caption: "Bloodletting therapy",
      description: "Traditional bloodletting therapy session for removing vitiated blood and treating chronic skin and blood disorders."
    },
    {
      src: "/images/ayurveda/panchakarma/preparation.jpg",
      title: "Poorvakarma Preparation",
      caption: "Pre-therapy preparation",
      description: "Patient undergoing Snehana (oleation) and Swedana (sudation) preparation before main Panchakarma therapy."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Panchakarma Therapy Sessions"
        subtitle="Authentic detoxification therapies in action"
        description="Witness the transformative power of authentic Panchakarma treatments performed by our experienced Ayurvedic doctors in a traditional healing environment."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">The Fivefold Detoxification Process</h2>
            <p className="text-gray-600 leading-relaxed">
              Panchakarma, meaning five actions, is the cornerstone of Ayurvedic healing. Our gallery 
              showcases authentic Panchakarma sessions including Vamana (therapeutic vomiting), Virechana 
              (purgation), Basti (enema), Nasya (nasal therapy), and Raktamokshana (bloodletting). Each 
              therapy is performed following classical Ayurvedic protocols under strict medical supervision 
              to ensure safety and effectiveness.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
