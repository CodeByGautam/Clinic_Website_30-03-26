import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Medi Facials Treatment | Healthfusion Multispeciality Clinic",
  description: "Medical-grade facials combining clinical expertise with luxury skincare for transformative results.",
};

export default function MediFacialsPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1612810436541-336ad4dc9a96?auto=format&fit=crop&w=2400&q=80";
    "/MEDIFACIAL-3.webp";

  return (
    <PremiumTreatmentPage
      title="Medi Facials"
      description="Medical-grade facials designed for real, visible improvements—combining advanced skincare with dermatologist-guided protocols for glow, clarity, and balance."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Medi Facials",
        description:
          "Medi facials are clinical facials that go beyond spa-level skincare. They use medical-grade products and technology, and they’re customized for concerns like dullness, congestion, uneven tone, early ageing, and sensitivity.\n\nYour session is designed to be results-driven while still feeling premium and relaxing—with safe protocols and professional aftercare guidance.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/MEDIFACIAL.jpeg",
      }}
      causesTitle="Concerns Medi Facials Target"
      causes={[
        { title: "Dullness and tired-looking skin" },
        { title: "Congested pores" },
        { title: "Uneven tone" },
        { title: "Dryness and dehydration" },
        { title: "Early fine lines" },
        { title: "Oily or acne-prone skin" },
      ]}
      optionsTitle="Medi Facial Options"
      options={[
        {
          title: "Deep Cleansing & Detox",
          description: "Supports pore clarity and reduces congestion.",
        },
        {
          title: "Glow & Brightening Facial",
          description: "For radiance and more even-looking tone.",
        },
        {
          title: "Hydration & Barrier Repair",
          description: "Comfort-focused protocols for dryness and sensitivity.",
        },
        {
          title: "Anti-Ageing Support",
          description: "Targets texture and early fine lines.",
        },
        {
          title: "Acne Care Facial",
          description: "For oil control and calming inflammation.",
        },
        {
          title: "Maintenance Plans",
          description: "Regular sessions to maintain long-term skin health.",
        },
      ]}
      benefitsTitle="Benefits of Medi Facials"
      benefits={[
        { title: "Instantly fresher, cleaner skin" },
        { title: "Better hydration and glow" },
        { title: "Refined pores and smoother texture" },
        { title: "Balanced oil and reduced congestion" },
        { title: "Custom care for your skin type" },
        { title: "Long-lasting improvements with regular sessions" },
      ]}
      procedureTitle="Treatment Steps"
      procedureSteps={[
        {
          title: "Skin Analysis",
          description: "We assess skin type, concerns, and sensitivity.",
        },
        {
          title: "Cleansing & Prep",
          description: "Deep cleanse and prep for targeted steps.",
        },
        {
          title: "Clinical Treatment",
          description: "Customized actives/techniques based on your plan.",
        },
        {
          title: "Soothing & Finish",
          description: "Hydration, barrier support, and protection.",
        },
        {
          title: "Aftercare Guidance",
          description: "We recommend a home routine to maintain results.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Medical-grade protocols",
          description: "Results-focused, dermatologist-guided care.",
        },
        {
          title: "Premium experience",
          description: "Clinic-level care with a relaxing, premium feel.",
        },
        {
          title: "Customized sessions",
          description: "No generic facials—each plan is tailored.",
        },
        {
          title: "Hygiene-first",
          description: "Safe and clean clinical standards.",
        },
        {
          title: "Aftercare support",
          description: "Guidance for long-term skin health.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How is a medi facial different from a spa facial?",
          answer:
            "Medi facials use medical-grade products and protocols tailored to specific concerns, often with dermatologist guidance.",
        },
        {
          question: "How often should I get a medi facial?",
          answer:
            "Many people choose every 3–4 weeks for maintenance. Frequency depends on your skin goals.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Most medi facials have minimal to no downtime. Mild redness may occur in some cases and settles quickly.",
        },
        {
          question: "Are medi facials safe for sensitive skin?",
          answer:
            "Yes—sessions can be customized with barrier-friendly steps and gentle actives.",
        },
        {
          question: "Can I combine medi facials with other treatments?",
          answer:
            "Yes. Your dermatologist can plan combinations with peels/laser/PRP depending on your needs.",
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
