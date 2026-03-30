import { FaHandHoldingMedical, FaUserMd, FaBolt, FaLeaf } from "react-icons/fa";

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: FaHandHoldingMedical,
      title: "Skin Treatments",
      description: "Advanced dermatological treatments for all skin concerns",
      href: "/allopathy"
    },
    {
      icon: FaUserMd,
      title: "Hair Treatments",
      description: "Comprehensive hair restoration and scalp care solutions",
      href: "/allopathy#hair-treatments"
    },
    {
      icon: FaBolt,
      title: "Laser Treatments",
      description: "State-of-the-art laser technology for precise results",
      href: "/allopathy#laser-treatments"
    },
    {
      icon: FaLeaf,
      title: "Ayurveda Treatments",
      description: "Traditional healing with modern medical expertise",
      href: "/ayurveda"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expertise Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive medical care across multiple specialties to address all your health and wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <a
              key={index}
              href={area.href}
              className="group text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <area.icon className="text-4xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
