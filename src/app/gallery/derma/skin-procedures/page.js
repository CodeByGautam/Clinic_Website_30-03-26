import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Skin Treatment Procedures Gallery | Advanced Dermatology",
  description: "View our skin treatment procedures including acne treatment, scar revision, pigmentation therapy, and advanced skin rejuvenation treatments.",
};

export default function SkinProceduresPage() {
  const galleryImages = [
    {
      src: "/Gallery/acne treatment.jpeg",
      title: "Acne Treatment Session",
      caption: "Advanced acne therapy",
      description: "Comprehensive acne treatment combining medical facials, chemical peels, and LED therapy for clear, healthy skin."
    },
    {
      src: "/Gallery/scar-revision.jpeg",
      title: "Scar Revision Therapy",
      caption: "MNRF scar reduction",
      description: "Advanced MNRF treatment for acne scars showing the precision of microneedling radiofrequency technology."
    },
    {
      src: "/Gallery/pigmentation treatment.jpeg",
      title: "Pigmentation Treatment",
      caption: "Melasma and dark spot therapy",
      description: "Professional pigmentation treatment using advanced laser and peel combinations for even skin tone."
    },
    {
      src: "/Gallery/chemicalpeels .jpeg",
      title: "Chemical Peel Session",
      caption: "Medical-grade peel application",
      description: "Expert application of medical-grade chemical peels for skin resurfacing and rejuvenation by trained dermatologists."
    },
    {
      src: "/Gallery/microdermabrasion.jpeg",
      title: "Microdermabrasion",
      caption: "Diamond tip exfoliation",
      description: "Advanced microdermabrasion treatment using diamond tip technology for gentle yet effective skin exfoliation."
    },
    {
      src: "/Gallery/prpfacialtreat .jpeg",
      title: "PRP Facial Treatment",
      caption: "Vampire facial therapy",
      description: "PRP (Platelet-Rich Plasma) facial treatment for natural skin rejuvenation using the body's own healing factors."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Skin Treatment Procedures"
        subtitle="Advanced dermatological therapies in action"
        description="Experience our comprehensive range of skin treatments performed by expert dermatologists using the latest technology and techniques."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Expert Skin Solutions</h2>
            <p className="text-gray-600 leading-relaxed">
              Our skin treatment procedures combine medical expertise with advanced technology to address 
              a wide range of dermatological concerns. From acne and scarring to pigmentation and aging, 
              our board-certified dermatologists use evidence-based treatments customized to each patient's 
              unique skin needs. Every procedure is performed with precision, care, and adherence to the 
              highest medical standards.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
