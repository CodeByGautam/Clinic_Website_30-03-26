import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Skin Cleanse Treatment | Healthfusion Multispeciality Clinic",
  description: "Purify and rejuvenate your skin with our deep cleansing treatments at Healthfusion Multispeciality Clinic. Professional skincare solutions for radiant, healthy skin.",
};

export default function SkinCleanseTreatmentPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1612810436541-336ad4dc9a96?auto=format&fit=crop&w=2400&q=80";

  return (
    <PremiumTreatmentPage
      title="Skin Cleanse Treatment"
      description="A premium deep-cleansing facial designed to purify pores, reduce congestion, and restore a fresh, healthy glow—customized to your skin type."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Skin Cleanse Treatments",
        description:
          "Deep cleansing treatments focus on removing surface build-up, excess oil, pollution residue, and congestion from pores. They’re ideal for maintaining skin clarity, supporting acne-prone skin, and restoring glow—especially in humid climates and busy city lifestyles.\n\nAt Healthfusion, we tailor cleansing protocols to your skin type so you get clarity without stripping the barrier.",
        image:
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2400&q=80",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Congested pores" },
        { title: "Blackheads / whiteheads" },
        { title: "Excess oil" },
        { title: "Dullness from pollution" },
        { title: "Rough texture" },
        { title: "Frequent breakouts" },
      ]}
      optionsTitle="What's Included"
      options={[
        { title: "Deep Pore Cleansing", description: "Targets surface and pore-level impurities." },
        { title: "Gentle Exfoliation", description: "Removes dead skin cells for brighter texture." },
        { title: "Professional Extraction", description: "Safe removal of blackheads where suitable." },
        { title: "Hydration Boost", description: "Restores moisture balance and comfort." },
        { title: "Soothing Finish", description: "Calms redness and supports the barrier." },
        { title: "Aftercare Guidance", description: "Routine guidance for clearer skin." },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Cleaner-looking pores" },
        { title: "Reduced congestion" },
        { title: "Smoother texture" },
        { title: "Improved glow" },
        { title: "Better product absorption" },
        { title: "Supports acne prevention" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We identify skin type and current concerns.",
        },
        {
          title: "Cleansing",
          description: "Deep cleanse to remove surface impurities.",
        },
        {
          title: "Exfoliation / Extraction",
          description: "Gentle steps to clear congestion safely.",
        },
        {
          title: "Hydration & Soothe",
          description: "Barrier-friendly hydration and calming finish.",
        },
        {
          title: "Aftercare",
          description: "Skincare and sun protection guidance.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Barrier-first protocols",
          description: "Cleansing without stripping or over-drying.",
        },
        {
          title: "Professional technique",
          description: "Safe extraction and comfortable care.",
        },
        {
          title: "Premium hygiene",
          description: "Clean clinical standards and safe practices.",
        },
        {
          title: "Customized sessions",
          description: "Tailored steps based on skin sensitivity and concerns.",
        },
        {
          title: "Aftercare support",
          description: "Guidance to maintain clear, glowing skin.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How often should I do a skin cleanse treatment?",
          answer:
            "Many people do it every 3–4 weeks, but frequency depends on skin type and congestion.",
        },
        {
          question: "Is it good for acne-prone skin?",
          answer:
            "Yes—when customized properly, deep cleansing can support clearer pores and reduced breakouts.",
        },
        {
          question: "Is extraction painful?",
          answer:
            "We aim for gentle, safe extraction. Discomfort is usually mild and temporary.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Usually no. Mild redness can occur and settles quickly.",
        },
        {
          question: "Do I need sunscreen after the treatment?",
          answer:
            "Yes—sunscreen helps protect the skin and maintain glow.",
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
