import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Ayurveda Treatment Rooms Gallery | Therapy Spaces",
  description: "View our authentic Ayurvedic treatment rooms designed for Panchakarma therapies, massages, and traditional healing treatments.",
};

export default function AyurvedaTreatmentRoomsPage() {
  const galleryImages = [
    {
      src: "/images/ayurveda/treatment-rooms/panchakarma-room.jpg",
      title: "Panchakarma Therapy Room",
      caption: "Traditional detox therapy space",
      description: "Specialized Panchakarma therapy room equipped for all five detoxification procedures including Vamana, Virechana, Basti, Nasya, and Raktamokshana."
    },
    {
      src: "/images/ayurveda/treatment-rooms/massage-room.jpg",
      title: "Ayurvedic Massage Room",
      caption: "Abhyanga therapy space",
      description: "Traditional massage room designed for Abhyanga and other therapeutic oil treatments with traditional wooden massage tables."
    },
    {
      src: "/images/ayurveda/treatment-rooms/shirodhara-room.jpg",
      title: "Shirodhara Treatment Room",
      caption: "Forehead oil flow therapy",
      description: "Dedicated Shirodhara room with specialized equipment for this deeply relaxing forehead oil flow treatment."
    },
    // {
    //   src: "/images/ayurveda/treatment-rooms/steam-room.jpg",
    //   title: "Herbal Steam Room",
    //   caption: "Swedana therapy chamber",
    //   description: "Traditional herbal steam chamber for Swedana therapy using medicinal herbs to promote detoxification."
    // },
    // {
    //   src: "/images/ayurveda/treatment-rooms/kizhi-room.jpg",
    //   title: "Kizhi Therapy Room",
    //   caption: "Herbal pouch massage",
    //   description: "Specialized room for Kizhi treatments using heated herbal pouches for targeted pain relief and rejuvenation."
    // },
    // {
    //   src: "/images/ayurveda/treatment-rooms/njavara-room.jpg",
    //   title: "Njavara Room",
    //   caption: "Rice bundle therapy",
    //   description: "Traditional Njavara treatment space featuring authentic rice bundle therapy for nourishing and strengthening therapies."
    // }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Ayurveda Treatment Rooms"
        subtitle="Traditional therapy spaces for authentic healing"
        description="Our treatment rooms are specially designed for various Ayurvedic therapies, featuring traditional equipment and a serene atmosphere for optimal healing."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Authentic Therapy Spaces</h2>
            <p className="text-gray-600 leading-relaxed">
              Each of our Ayurvedic treatment rooms is purposefully designed to accommodate specific 
              traditional therapies. From Panchakarma detoxification rooms to specialized massage spaces, 
              every room features authentic equipment, traditional materials, and the perfect ambiance 
              for healing. Our therapy rooms maintain the highest standards of hygiene while preserving 
              the authentic Ayurvedic experience.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
