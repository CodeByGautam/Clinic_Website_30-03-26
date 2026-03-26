import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Laser Hair Removal | Healthfusion Multispeciality Clinic",
  description: "Permanent laser hair reduction for smooth, hair-free skin using advanced diode and alexandrite lasers.",
};

export default function LaserHairRemovalPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/laserhairremoval.jpeg";

  return (
    <PremiumTreatmentPage
      title="Laser Hair Removal"
      description="Advanced laser hair reduction for smoother, cleaner skin—performed with safe protocols and settings tailored to your skin and hair type."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Laser Hair Removal",
        description:
          "Laser hair removal uses focused light energy to target hair follicles and reduce future growth. The light is absorbed by pigment in the hair, helping disable the follicle while protecting surrounding skin.\n\nOur clinic uses dermatologist-guided parameters and modern devices to provide effective hair reduction with comfort-focused care.",
        image:
          // "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/laserhairremoval.jpeg",
      }}
      causesTitle="When Laser Hair Removal Helps"
      causes={[
        { title: "Unwanted facial or body hair" },
        { title: "Ingrown hair" },
        { title: "Razor bumps" },
        { title: "Frequent waxing / shaving" },
        { title: "Sensitive skin after hair removal" },
        { title: "Dark, coarse hair concerns" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Underarms / Arms / Legs",
          description: "Popular areas for long-term hair reduction with smooth finish.",
        },
        {
          title: "Face & Neck",
          description: "For upper lip, chin, jawline, and unwanted facial hair patterns.",
        },
        {
          title: "Bikini / Back / Chest",
          description: "Comfort-focused sessions for larger zones.",
        },
        {
          title: "Skin Type-Specific Settings",
          description: "Parameters adjusted to your tone and sensitivity.",
        },
        {
          title: "Cooling & Comfort Measures",
          description: "Steps to reduce heat sensation and redness.",
        },
        {
          title: "Maintenance Planning",
          description: "Follow-up sessions to support long-term reduction.",
        },
      ]}
      benefitsTitle="Benefits of Laser Hair Removal"
      benefits={[
        { title: "Long-term hair reduction" },
        { title: "Smoother skin texture" },
        { title: "Fewer ingrown hairs" },
        { title: "Reduced razor bumps" },
        { title: "Time-saving routine" },
        { title: "Hygienic and precise" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We review skin type, hair growth, and suitability.",
        },
        {
          title: "Patch Test (if needed)",
          description: "For sensitive skin and safety reassurance.",
        },
        {
          title: "Session Preparation",
          description: "Area is cleaned; guidance for shaving is provided.",
        },
        {
          title: "Laser Session",
          description: "Laser applied with appropriate settings and comfort measures.",
        },
        {
          title: "Aftercare",
          description: "Sun protection and soothing care to minimize irritation.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Dermatologist supervision",
          description: "Appropriate settings for safety and results.",
        },
        {
          title: "Advanced devices",
          description: "Modern technology for efficient sessions.",
        },
        {
          title: "Comfort-first approach",
          description: "Cooling and supportive aftercare guidance.",
        },
        {
          title: "Hygiene protocols",
          description: "Clean, safe clinic procedures.",
        },
        {
          title: "Clear session planning",
          description: "We set expectations based on hair cycle and goals.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is laser hair removal painful?",
          answer:
            "Most patients describe it as mild warmth or a quick snap sensation. Comfort measures help reduce discomfort.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Typically 6–8 sessions depending on area, hair thickness, and growth cycle. Your plan is personalized.",
        },
        {
          question: "Is it safe for all skin types?",
          answer:
            "With correct device selection and settings, laser hair removal can be performed safely across many skin types.",
        },
        {
          question: "Can I shave between sessions?",
          answer:
            "Yes. Shaving is usually allowed and recommended; waxing/threading may be restricted as it removes follicles.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Usually no. Mild redness can occur and settles quickly with aftercare.",
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
