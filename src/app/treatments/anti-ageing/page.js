import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Anti-Ageing Treatment | Healthfusion Multispeciality Clinic",
  description: "Advanced anti-ageing treatments at Healthfusion Multispeciality Clinic. Reduce wrinkles, fine lines, and restore youthful skin.",
};

export default function AntiAgeingPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80";
    "/enti-aging.jpg";

  return (
    <PremiumTreatmentPage
      title="Anti-Ageing Treatment"
      description="Premium dermatologist-led rejuvenation protocols to reduce fine lines, improve firmness, and restore a naturally youthful glow."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Skin Ageing",
        description:
          "Ageing is a natural process, but factors like sun exposure, stress, pollution, and lifestyle can accelerate it. Common signs include fine lines, wrinkles, dullness, uneven tone, and loss of elasticity.\n\nOur anti-ageing plans are built around collagen stimulation, skin barrier support, and targeted procedures for visible yet natural-looking results.",
        image:
          // "https://images.unsplash.com/photo-1580281657527-47f249e8f7fd?auto=format&fit=crop&w=2400&q=80",
          "/enti-aging.jpg"
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Sun exposure (photo-ageing)" },
        { title: "Collagen & elastin loss" },
        { title: "Dehydration & barrier damage" },
        { title: "Oxidative stress & pollution" },
        { title: "Poor sleep & high stress" },
        { title: "Hormonal changes" },
      ]}
      optionsTitle="Anti-Ageing Treatment Options"
      options={[
        {
          title: "Skin Tightening & Rejuvenation",
          description: "Non-surgical options to improve firmness and texture.",
        },
        {
          title: "Dermatologist Facials",
          description: "Hydration, glow, and barrier recovery with medical-grade actives.",
        },
        {
          title: "PRP / Growth Factor Support",
          description: "Stimulates healing response to improve skin quality over time.",
        },
        {
          title: "Injectables (as advised)",
          description: "For fine lines/volume restoration when clinically indicated.",
        },
        {
          title: "Laser / Resurfacing",
          description: "For tone, texture, pores, and collagen remodeling.",
        },
        {
          title: "Dermatologist Skincare Plan",
          description: "A consistent home routine to maintain clinic results.",
        },
      ]}
      benefitsTitle="Benefits of Anti-Ageing Treatment"
      benefits={[
        { title: "Reduced fine lines & wrinkles" },
        { title: "Improved firmness & elasticity" },
        { title: "Brighter, more even skin tone" },
        { title: "Refined pores and smoother texture" },
        { title: "Healthy hydration and glow" },
        { title: "Natural-looking rejuvenation" },
      ]}
      procedureTitle="Your Treatment Journey"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We map concerns, lifestyle, and desired outcomes.",
        },
        {
          title: "Skin Analysis",
          description: "Assessment of tone, texture, elasticity, and hydration.",
        },
        {
          title: "Plan Design",
          description: "We decide procedures + intervals + home care routine.",
        },
        {
          title: "Sessions",
          description: "Treatments performed with safe protocols and comfort focus.",
        },
        {
          title: "Maintenance",
          description: "Long-term plan for sustained results and skin health.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Doctor-led planning",
          description: "Treatments selected based on skin needs and safety.",
        },
        {
          title: "Premium protocols",
          description: "Modern equipment and evidence-based procedures.",
        },
        {
          title: "Natural results",
          description: "Enhancement that still looks like you.",
        },
        {
          title: "Hygiene-first",
          description: "Clinic-grade safety practices and sterility.",
        },
        {
          title: "Aftercare support",
          description: "Post-procedure guidance for best outcomes.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Are anti-ageing treatments safe?",
          answer:
            "Yes—when chosen appropriately for your skin and performed under clinical guidance. We recommend options based on suitability and safety.",
        },
        {
          question: "How soon will I see results?",
          answer:
            "Some treatments give an instant glow, while collagen remodeling takes weeks. Your doctor will explain the expected timeline.",
        },
        {
          question: "Will I look unnatural?",
          answer:
            "Our focus is subtle, natural-looking improvement. We avoid over-treatment and design a balanced plan.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime depends on the procedure. Many treatments have minimal downtime, while resurfacing may need a few days.",
        },
        {
          question: "How many sessions are required?",
          answer:
            "Most plans are multi-session for best results. The exact number depends on goals, skin type, and chosen procedure.",
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
