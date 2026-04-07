import TreatmentCard from "@/components/TreatmentCard";

export default function DualTreatmentSection() {
  const cards = [
    {
      title: "Ayurveda",
      description:
        "Natural healing therapies rooted in ancient wisdom—personalized detox, diagnosis, and restorative care.",
      href: "/ayurveda",
      image: "/Ayurved_detox.jpeg",
      badge: "Natural Healing",
      theme: "ayurveda",
    },
    {
      title: "Allopathy (Modern Care)",
      description:
        "Advanced dermatology, hair, and laser treatments using modern technology for safe, visible results.",
      href: "/allopathy",
      image: "/modern_medicine.jpg",
      badge: "Advanced Care",
      theme: "allopathy",
    },
  ];

  return (
    <section className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0F19]">
            Ayurveda + Modern Medicine
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Choose your care path—our clinic offers both authentic Ayurveda treatments and modern, dermatologist-led procedures.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <TreatmentCard
              key={card.href}
              title={card.title}
              description={card.description}
              href={card.href}
              image={card.image}
              badge={card.badge}
              theme={card.theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
