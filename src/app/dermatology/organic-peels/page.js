import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Organic Peels Treatment | Healthfusion Multispeciality Clinic",
  description: "Natural, chemical-free organic peels for gentle skin rejuvenation and renewal at Healthfusion Clinic.",
};

export default function OrganicPeelsPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/organicpeel.jpeg";

  return (
    <PremiumTreatmentPage
      title="Organic Peels"
      description="A gentle, premium exfoliation experience designed to improve texture and glow while supporting the skin barrier—ideal for sensitive or first-time peel patients."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Organic Peels",
        description:
          "Organic peels use fruit enzymes and botanical extracts to exfoliate dead skin cells and improve skin clarity. Compared to stronger chemical peels, organic peels are typically gentler and can be a good option for those looking for mild rejuvenation with comfort-focused care.\n\nYour dermatologist will recommend the best peel strength and schedule based on your skin type, sensitivity, and goals.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/organicpeel.jpeg",
      }}
      causesTitle="Common Concerns It Helps"
      causes={[
        { title: "Dull skin" },
        { title: "Rough texture" },
        { title: "Mild pigmentation" },
        { title: "Congested pores" },
        { title: "Uneven tone" },
        { title: "Early fine lines (texture support)" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Enzyme-Based Exfoliation",
          description: "Papaya/pineapple-style enzymes to smooth and brighten.",
        },
        {
          title: "Botanical Soothing Protocols",
          description: "Barrier-support steps to reduce redness and sensitivity.",
        },
        {
          title: "Glow + Hydration Boost",
          description: "Hydrating add-ons for plumpness and radiance.",
        },
        {
          title: "Pore-Clarifying Plan",
          description: "For congestion and blackheads with gentle guidance.",
        },
        {
          title: "Maintenance Schedule",
          description: "A safe plan to maintain results without over-exfoliation.",
        },
        {
          title: "Homecare Routine",
          description: "Skin-barrier friendly routine to support long-term clarity.",
        },
      ]}
      benefitsTitle="Benefits of Organic Peels"
      benefits={[
        { title: "Gentle exfoliation and renewed glow" },
        { title: "Smoother texture" },
        { title: "Clearer-looking pores" },
        { title: "Brighter, healthier appearance" },
        { title: "Comfort-focused protocols" },
        { title: "Suitable for many skin types" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "Skin evaluation and selection of peel strength.",
        },
        {
          title: "Preparation",
          description: "Cleansing and gentle prep for even application.",
        },
        {
          title: "Peel Application",
          description: "Controlled exfoliation with comfort monitoring.",
        },
        {
          title: "Neutralize & Soothe",
          description: "Soothing steps to support the skin barrier.",
        },
        {
          title: "Aftercare",
          description: "Moisture + sunscreen advice to protect results.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Dermatologist guidance",
          description: "Safe peel selection based on your skin needs.",
        },
        {
          title: "Barrier-first approach",
          description: "Comfortable protocols that reduce over-exfoliation.",
        },
        {
          title: "Premium hygiene",
          description: "Clean clinical environment and safe practices.",
        },
        {
          title: "Custom schedules",
          description: "Treatment plans designed around your sensitivity and goals.",
        },
        {
          title: "Aftercare support",
          description: "Guidance to maintain glow and reduce irritation.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is there downtime after an organic peel?",
          answer:
            "Most patients have minimal downtime. Mild redness or dryness can occur depending on skin sensitivity.",
        },
        {
          question: "How often can I do organic peels?",
          answer:
            "Many plans recommend sessions every 2–4 weeks, but frequency is personalized.",
        },
        {
          question: "Will my skin peel visibly?",
          answer:
            "Organic peels are typically gentle; visible peeling is usually mild or absent, depending on peel type.",
        },
        {
          question: "Are organic peels safe for sensitive skin?",
          answer:
            "They can be, when selected and applied appropriately. We tailor protocols to sensitivity.",
        },
        {
          question: "Do I need sunscreen after a peel?",
          answer:
            "Yes—sunscreen is essential after exfoliation to protect your skin and results.",
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
