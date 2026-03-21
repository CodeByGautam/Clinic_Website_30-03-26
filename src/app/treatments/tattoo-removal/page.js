import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Tattoo Removal | Healthfusion Multispeciality Clinic",
  description: "Q-switched and picosecond laser tattoo removal for safe, effective ink elimination.",
};

export default function TattooRemovalPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/TATTO REMOVAL3.jpeg";

  return (
    <PremiumTreatmentPage
      title="Tattoo Removal"
      description="Premium laser tattoo removal protocols designed for progressive fading, skin safety, and minimal scarring risk—planned around ink type, depth, and skin tone."
      heroImage={heroImage}
      understanding={{
        title: "How Tattoo Removal Works",
        description:
          "Laser tattoo removal uses targeted light pulses to break tattoo ink into smaller fragments, which your body gradually clears over time. Different inks (black vs colored) and different depths respond differently, so treatment planning and spacing between sessions is essential.\n\nWe use safe protocols and aftercare planning to reduce the risk of irritation and support better fading.",
        image:
          // "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/TATTO REMOVAL3.jpeg",
      }}
      causesTitle="What Impacts Results"
      causes={[
        { title: "Ink colors and pigment type" },
        { title: "Tattoo depth and density" },
        { title: "Tattoo age (older often fades easier)" },
        { title: "Skin tone and sensitivity" },
        { title: "Location on the body" },
        { title: "Aftercare and sun exposure" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Laser Session Series",
          description: "Progressive fading across multiple sessions.",
        },
        {
          title: "Color-Specific Planning",
          description: "Different settings based on ink color response.",
        },
        {
          title: "Numbing Support",
          description: "Comfort measures to reduce discomfort.",
        },
        {
          title: "Aftercare Protocol",
          description: "Guidance to reduce irritation and risk.",
        },
        {
          title: "Partial Fade for Cover-up",
          description: "Planning to lighten ink for a new tattoo.",
        },
        {
          title: "Scar Risk Assessment",
          description: "We plan to minimize scarring risk.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Progressive fading" },
        { title: "Works on many tattoo types" },
        { title: "Non-surgical approach" },
        { title: "Precision targeting" },
        { title: "Planned for safety" },
        { title: "Support for cover-ups" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We evaluate color, depth, and skin type.",
        },
        {
          title: "Preparation",
          description: "Cleansing and numbing options.",
        },
        {
          title: "Laser Session",
          description: "Controlled pulses delivered to break ink safely.",
        },
        {
          title: "Aftercare",
          description: "Soothing care guidance and sun protection.",
        },
        {
          title: "Series Planning",
          description: "Sessions spaced to allow clearing and healing.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Skin-safety focus",
          description: "We prioritize safe settings and aftercare.",
        },
        {
          title: "Personalized protocols",
          description: "Settings selected based on tattoo and skin.",
        },
        {
          title: "Premium hygiene",
          description: "Clean clinical standards.",
        },
        {
          title: "Realistic guidance",
          description: "Clear expectations about sessions and outcomes.",
        },
        {
          title: "Aftercare support",
          description: "Guidance to reduce irritation and protect results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How many sessions are required?",
          answer:
            "It depends on ink color, depth, and size. Many tattoos need multiple sessions.",
        },
        {
          question: "Will it scar?",
          answer:
            "When planned correctly and followed with aftercare, scarring risk is minimized, but individual response varies.",
        },
        {
          question: "Is it painful?",
          answer:
            "Discomfort varies. Numbing options can help.",
        },
        {
          question: "Can all colors be removed?",
          answer:
            "Many colors can be treated, but response varies. We guide expectations during consultation.",
        },
        {
          question: "Can I remove a tattoo for a cover-up?",
          answer:
            "Yes, partial fading is a common goal before cover-up tattoos.",
        },
      ]}
      cta={{
        title: "Start Your Skin Transformation Today",
        description: "Book your consultation with our expert dermatologists.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
