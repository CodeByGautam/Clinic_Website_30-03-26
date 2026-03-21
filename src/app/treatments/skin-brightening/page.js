import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Skin Brightening Treatment | Healthfusion Multispeciality Clinic",
  description: "Professional skin brightening treatments at Healthfusion Multispeciality Clinic. Achieve even skin tone and radiant complexion.",
};

export default function SkinBrighteningPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=80";
    "/skin-brightening.jpg";

  return (
    <PremiumTreatmentPage
      title="Skin Brightening Treatment"
      description="Premium brightening protocols to improve radiance, reduce dullness, and create a more even-looking skin tone—safely and effectively."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Skin Dullness & Pigmentation",
        description:
          "Skin can appear dull or uneven due to sun exposure, dehydration, pigmentation, post-acne marks, and a weakened skin barrier. Brightening is not about changing your natural tone—it’s about improving clarity, glow, and evenness.\n\nAt Healthfusion, we build a dermatologist-guided plan using safe actives and procedures to target spots and enhance radiance.",
        image:
          // "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=2400&q=80",
          "/skin-brightening.jpg"
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Sun exposure & tanning" },
        { title: "Melasma / pigmentation" },
        { title: "Post-acne marks" },
        { title: "Dehydration & dullness" },
        { title: "Uneven tone and texture" },
        { title: "Lifestyle & stress factors" },
      ]}
      optionsTitle="Brightening Treatment Options"
      options={[
        {
          title: "Medical-Grade Peels",
          description: "Targets dullness and uneven tone with controlled exfoliation.",
        },
        {
          title: "Laser / Light Treatments",
          description: "Helps address stubborn pigmentation and improve clarity.",
        },
        {
          title: "Dermatologist Facials",
          description: "Glow-focused facials to hydrate, soothe, and brighten.",
        },
        {
          title: "Glow Drips / Antioxidant Support",
          description: "When appropriate, supports radiance with dermatologist guidance.",
        },
        {
          title: "Pigmentation Skincare Plan",
          description: "Home routine designed for spot control + barrier repair.",
        },
        {
          title: "Sun Protection Strategy",
          description: "A must-have step to prevent pigmentation relapse.",
        },
      ]}
      benefitsTitle="Benefits of Skin Brightening"
      benefits={[
        { title: "More radiant, healthy-looking glow" },
        { title: "More even-looking skin tone" },
        { title: "Reduced appearance of spots" },
        { title: "Smoother skin texture" },
        { title: "Improved hydration and clarity" },
        { title: "Better makeup-free confidence" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We identify pigmentation type and contributing triggers.",
        },
        {
          title: "Skin Assessment",
          description: "We assess sensitivity, barrier health, and sun damage.",
        },
        {
          title: "Plan & Timeline",
          description: "We select procedures and set realistic results expectations.",
        },
        {
          title: "Sessions",
          description: "Peels/facials/laser performed based on your skin response.",
        },
        {
          title: "Maintenance",
          description: "Skincare + sunscreen plan to maintain brightening results.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Dermatologist-led protocols",
          description: "Safe and effective approach for pigmentation.",
        },
        {
          title: "Advanced technologies",
          description: "Modern devices and medical-grade products.",
        },
        {
          title: "Personalized regimens",
          description: "Plans tailored to your skin type and goals.",
        },
        {
          title: "Barrier-first care",
          description: "We reduce irritation and support long-term clarity.",
        },
        {
          title: "Clear aftercare",
          description: "Guidance for consistent, maintainable results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is skin brightening safe?",
          answer:
            "Yes—when done under clinical guidance using safe actives and correct protocols for your skin.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "This depends on pigmentation type and depth. Your dermatologist will recommend a plan after evaluation.",
        },
        {
          question: "Will the results be permanent?",
          answer:
            "Pigmentation can recur due to sun exposure or hormones. Maintenance skincare and sunscreen help sustain results.",
        },
        {
          question: "Can I do these treatments on sensitive skin?",
          answer:
            "Yes, many options can be customized for sensitive skin. We prioritize barrier repair and gentle protocols.",
        },
        {
          question: "Do I need sunscreen during treatment?",
          answer:
            "Absolutely. Sunscreen is essential to prevent new pigmentation and protect results.",
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
