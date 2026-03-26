export const metadata = {
  title: "Our Treatments | Healthfusion Multispeciality Clinic",
  description: "Explore our comprehensive range of dermatology and aesthetic treatments at Healthfusion Multispeciality Clinic.",
};

export default function TreatmentsPage() {
  const treatments = [
    {
      title: "Acne Treatment",
      description: "Effective solutions for acne and acne scars",
      href: "/dermatology/acne",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Anti-Ageing Treatment",
      description: "Turn back time with our anti-ageing solutions",
      href: "/dermatology/anti-ageing",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Skin Brightening",
      description: "Achieve radiant, even-toned skin",
      href: "/dermatology/skin-brightening",
      icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
    },
    {
      title: "Hair & Scalp Therapy",
      description: "Solutions for hair loss and scalp conditions",
      href: "/dermatology/hair-scalp-therapy",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
      title: "Skin Resurfacing",
      description: "Advanced treatments for skin texture and scars",
      href: "/dermatology/skin-resurfacing",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
              Our Treatments
            </h1>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of dermatology and aesthetic 
              treatments designed to help you look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <a
                key={index}
                href={treatment.href}
                className="group bg-[#F7FAFC] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-[#0077C8]/10 flex items-center justify-center mb-6 group-hover:bg-[#0077C8] transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-[#0077C8] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={treatment.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-2 group-hover:text-[#0077C8] transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <span className="inline-flex items-center text-[#0077C8] font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
