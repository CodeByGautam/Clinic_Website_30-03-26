import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Ayurvedic Facial Treatments Gallery | Natural Skin Care",
  description: "Explore our Ayurvedic facial treatments including herbal facials, natural skin therapies, and traditional beauty treatments using authentic Ayurvedic formulations.",
};

export default function AyurvedaFacialPage() {
  const galleryImages = [
    {
      src: "/Gallery/herbalfacailtreatment.jpeg",
      title: "Herbal Facial Treatment",
      caption: "Natural herbal face therapy",
      description: "Traditional Ayurvedic herbal facial using freshly prepared herbal pastes and natural ingredients for radiant skin."
    },
    {
      src: "/Gallery/ubtan treatment.jpeg",
      title: "Ubtan Treatment",
      caption: "Traditional cleansing therapy",
      description: "Authentic Ubtan treatment using gram flour, turmeric, and herbs for natural skin cleansing and brightening."
    },
    {
      src: "/images/ayurveda/facial/kumkumadi-facial.jpg",
      title: "Kumkumadi Facial",
      caption: "Saffron-based glow therapy",
      description: "Luxurious Kumkumadi facial using saffron and precious herbs to enhance skin glow and reduce pigmentation."
    },
    {
      src: "/images/ayurveda/facial/face-pack.jpg",
      title: "Ayurvedic Face Pack",
      caption: "Herbal mask application",
      description: "Customized Ayurvedic face packs applied by trained therapists based on individual skin type and concerns."
    },
    {
      src: "/images/ayurveda/facial/fruit-facial.jpg",
      title: "Fruit Facial",
      caption: "Natural fruit enzyme therapy",
      description: "Refreshing fruit facial using natural fruit enzymes and Ayurvedic herbs for gentle exfoliation and nourishment."
    },
    {
      src: "/gallery/anti-aging facial.jpeg",
      title: "Anti-Aging Treatment",
      caption: "Youthful skin therapy",
      description: "Specialized Ayurvedic anti-aging facial using Rasayana herbs to reduce fine lines and restore youthful glow."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Ayurvedic Facial Treatments"
        subtitle="Natural beauty therapies with authentic herbs"
        description="Discover the secret to radiant skin with our traditional Ayurvedic facial treatments using natural herbs, precious ingredients, and time-tested formulations."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Natural Beauty, Ancient Wisdom</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Ayurvedic facial treatments harness the power of nature to nourish and rejuvenate your skin. 
              Using authentic herbal formulations, precious ingredients like saffron and sandalwood, and 
              traditional techniques passed down through generations, we offer a holistic approach to beauty 
              that enhances your natural glow while promoting overall skin health.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
