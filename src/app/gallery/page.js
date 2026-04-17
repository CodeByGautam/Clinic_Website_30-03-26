import Link from "next/link";
import { ArrowRight, ImageIcon, Sparkles, Heart, Cpu } from "lucide-react";

export const metadata = {
  title: "Clinic Gallery | Our Facilities & Treatments",
  description: "Explore our clinic gallery showcasing Ayurvedic and Dermatology facilities, treatment rooms, advanced machines, and therapy sessions.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-[#00A651]/10 text-[#00A651]">
              <ImageIcon className="w-4 h-4" />
              Visual Tour
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
              Our Clinic Gallery
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Explore our facilities, treatments, and advanced technology
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Take a visual journey through our authentic Ayurvedic healing center and 
              modern dermatology clinic equipped with state-of-the-art technology.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[#00A651]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-[#0077C8]" />
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our gallery is currently being updated with new images and content. 
              Please check back soon for our complete visual tour.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Our Clinic in Person
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a visit to tour our facilities and meet our expert team of Ayurvedic doctors and dermatologists.
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-white text-[#0B0F19] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Book a Visit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
