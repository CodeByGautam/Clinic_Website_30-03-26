import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Dermal Fillers | Healthfusion Multispeciality Clinic",
  description: "Premium dermal fillers for volume restoration, wrinkle reduction, and facial contouring at Healthfusion Clinic.",
};

export default function FillersPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1580281657527-47f249e8f7fd?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/FILLER TREATMENT.jpeg";

  return (
    <PremiumTreatmentPage
      title="Dermal Fillers"
      description="Premium, natural-looking volume restoration and contouring—planned by experts to enhance balance, smooth lines, and maintain a refined, authentic look."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Dermal Fillers",
        description:
          "Dermal fillers are injectable treatments designed to restore lost volume, soften lines, and enhance facial contours. Many fillers are hyaluronic acid-based—biocompatible and designed to integrate smoothly for natural-looking outcomes.\n\nOur approach focuses on facial harmony, subtle refinement, and safety-first technique—never an overfilled look.",
        image:
          // "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/FILLER TREATMENT.jpeg",
      }}
      causesTitle="Common Concerns / Goals"
      causes={[
        { title: "Volume loss (cheeks/temples)" },
        { title: "Smile lines (nasolabial folds)" },
        { title: "Lip definition or volume" },
        { title: "Under-eye hollowness" },
        { title: "Jawline/chin definition" },
        { title: "Facial contour refinement" },
      ]}
      optionsTitle="Treatment Areas"
      options={[
        { title: "Lips", description: "Refine shape, hydration, and natural volume." },
        { title: "Cheeks", description: "Restore lift and youthful contour." },
        { title: "Smile Lines", description: "Softens folds for a refreshed look." },
        { title: "Under Eyes", description: "Improves hollowness and tired appearance." },
        { title: "Jawline", description: "Defines contour and improves structure." },
        { title: "Chin", description: "Enhances balance and facial profile." },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Immediate improvement" },
        { title: "Natural-looking refinement" },
        { title: "Restored facial balance" },
        { title: "Softened wrinkles and folds" },
        { title: "Minimal downtime" },
        { title: "Customized to your face" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation & Mapping",
          description: "We discuss goals and plan areas for balance.",
        },
        {
          title: "Preparation",
          description: "Cleansing and numbing for comfort.",
        },
        {
          title: "Precise Placement",
          description: "Expert injection technique with safe protocols.",
        },
        {
          title: "Review",
          description: "We assess symmetry and desired refinement.",
        },
        {
          title: "Aftercare",
          description: "Guidance to minimize swelling and support best results.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Natural aesthetic philosophy",
          description: "Subtle enhancement, not overcorrection.",
        },
        {
          title: "Expert technique",
          description: "Precise mapping and safe placement.",
        },
        {
          title: "Premium protocols",
          description: "High standards for safety and hygiene.",
        },
        {
          title: "Personalized planning",
          description: "Based on face shape, proportions, and goals.",
        },
        {
          title: "Aftercare support",
          description: "Clear instructions and follow-up guidance.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Are dermal fillers safe?",
          answer:
            "Yes, when performed by trained professionals using appropriate products and techniques.",
        },
        {
          question: "How long do fillers last?",
          answer:
            "Duration varies by product and area, commonly several months to over a year.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Most patients have minimal downtime. Mild swelling or bruising can occur.",
        },
        {
          question: "Will I look unnatural?",
          answer:
            "Our goal is subtle, balanced enhancement. Treatment is planned to look like you—refreshed.",
        },
        {
          question: "Does the procedure hurt?",
          answer:
            "Numbing is used for comfort. Most patients feel mild pressure rather than pain.",
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
