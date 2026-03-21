import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Dermatology Treatment Rooms Gallery | Advanced Therapy Spaces",
  description: "View our modern dermatology treatment rooms equipped with advanced technology for skin treatments, laser therapies, and cosmetic procedures.",
};

export default function DermatologyTreatmentRoomsPage() {
  const galleryImages = [
    {
      src: "/Gallery/acne treatment.jpg",
      title: "Laser Treatment Room",
      caption: "Advanced laser therapy space",
      description: "State-of-the-art laser treatment room equipped with advanced laser systems for hair removal, skin resurfacing, and pigmentation treatments."
    },
    {
      src: "/Gallery/scar-revision.jpg",
      title: "Facial Treatment Suite",
      caption: "Premium facial therapy space",
      description: "Luxurious facial treatment suite designed for medi-facials, chemical peels, and advanced skin rejuvenation procedures."
    },
    {
      src: "/images/derma/treatment-rooms/injection-room.jpg",
      title: "Injection Therapy Room",
      caption: "Injectable treatments space",
      description: "Specialized room for Botox, fillers, PRP, and other injectable treatments with medical-grade equipment and sterilization protocols."
    },
    {
      src: "/images/derma/treatment-rooms/mnrf-room.jpg",
      title: "MNRF Treatment Room",
      caption: "Microneedling RF therapy",
      description: "Dedicated MNRF (Microneedling Radiofrequency) room for advanced acne scar treatment, skin tightening, and rejuvenation."
    },
    {
      src: "/images/derma/treatment-rooms/hydrafacial-room.jpg",
      title: "Hydrafacial Suite",
      caption: "Advanced hydrafacial space",
      description: "Specialized Hydrafacial treatment room equipped with the latest vortex-fusion technology for deep cleansing and hydration."
    },
    {
      src: "/images/derma/treatment-rooms/led-room.jpg",
      title: "LED Therapy Room",
      caption: "Phototherapy treatment space",
      description: "Advanced LED light therapy room for treating acne, reducing inflammation, and promoting skin healing with medical-grade equipment."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Dermatology Treatment Rooms"
        subtitle="Advanced spaces for modern skin therapies"
        description="Our treatment rooms are equipped with cutting-edge technology and designed for optimal patient comfort during advanced dermatological procedures."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Cutting-Edge Treatment Environment</h2>
            <p className="text-gray-600 leading-relaxed">
              Each of our dermatology treatment rooms is purpose-built for specific procedures, featuring 
              advanced medical equipment, optimal lighting, and strict hygiene protocols. From laser therapy 
              rooms with specialized safety features to comfortable facial suites, every space is designed 
              to deliver the highest standard of dermatological care while ensuring patient comfort and safety.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
