import DoctorsGrid from "@/components/DoctorsGrid";
import ExpertiseSection from "@/components/ExpertiseSection";
import TrustSection from "@/components/TrustSection";

export const metadata = {
  title: "Best Dermatologists in Pune | Healthfusion Experts",
  description: "Meet our experienced dermatologists and Ayurveda specialists for expert care. Professional doctors dedicated to your skin, hair, and wellness needs.",
};

export default function AskExpertPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Consult Our Experts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Experienced dermatologists & Ayurveda specialists dedicated to your care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/919270216369"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Doctors Showcase */}
      <DoctorsGrid />

      {/* Expertise Areas */}
      <ExpertiseSection />

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Our experts are here to guide you to the perfect solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="tel:+919270216369"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
