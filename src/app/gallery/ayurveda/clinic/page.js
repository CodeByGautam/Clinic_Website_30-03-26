import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Ayurveda Clinic Interior Gallery | Our Facilities",
  description: "Explore our authentic Ayurvedic clinic interior designed with traditional healing principles and serene environment for holistic wellness treatments.",
};

export default function AyurvedaClinicPage() {
  const galleryImages = [
    {
      src: "/clinic/clinic55.jpeg",
      title: "Clinic Reception",
      caption: "Welcoming reception area",
      description: "Our warm and welcoming reception area designed to create a calming first impression for all our patients seeking Ayurvedic healing."
    },
    {
      src: "/clinic/clinic56.jpeg",
      title: "Waiting Area",
      caption: "Peaceful waiting space",
      description: "A serene waiting area with comfortable seating and soothing ambiance to help you relax before your consultation."
    },
    {
      src: "/clinic/clinic20.jpeg",
      title: "Consultation Room",
      caption: "Private consultation space",
      description: "Private consultation rooms where our experienced Ayurvedic doctors conduct detailed assessments and personalized treatment planning."
    },
    // {
    //   src: "/images/ayurveda/clinic/herbal-storage.jpg",
    //   title: "Herbal Medicine Storage",
    //   caption: "Authentic Ayurvedic herbs",
    //   description: "Our well-organized herbal medicine storage featuring authentic Ayurvedic herbs and formulations sourced from trusted suppliers."
    // },
    // {
    //   src: "/images/ayurveda/clinic/yoga-space.jpg",
    //   title: "Yoga & Meditation Space",
    //   caption: "Mind-body wellness area",
    //   description: "Dedicated space for yoga and meditation sessions to complement your Ayurvedic treatment journey."
    // },
    // {
    //   src: "/images/ayurveda/clinic/garden.jpg",
    //   title: "Healing Garden",
    //   caption: "Natural healing environment",
    //   description: "Our healing garden with medicinal plants creates a natural environment that enhances the therapeutic experience."
    // }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Ayurveda Clinic Interior"
        subtitle="Explore our authentic Ayurvedic healing environment"
        description="Our clinic is designed with traditional Ayurvedic principles to create a serene and healing atmosphere. Every space is thoughtfully crafted to enhance your wellness journey."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Traditional Healing Environment</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Ayurveda clinic interior reflects the authentic traditions of Indian healing wisdom. 
              From the moment you step in, you are surrounded by an atmosphere of tranquility and wellness. 
              The clinic features traditional design elements, natural materials, and a soothing color palette 
              that aligns with Ayurvedic principles. Each space is designed to promote healing, relaxation, 
              and a deep connection with nature.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
