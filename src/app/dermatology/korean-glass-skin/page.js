import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Korean Glass Skin Treatment | Healthfusion Multispeciality Clinic",
  description: "Korean Glass Skin treatment for achieving flawless, dewy, radiant skin with advanced hydration and brightening techniques.",
};

export default function KoreanGlassSkinPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1612810436541-336ad4dc9a96?auto=format&fit=crop&w=2400&q=80";
    "/skin-brightening.jpg";

  return (
    <PremiumTreatmentPage
      title="Korean Glass Skin Treatment"
      description="Achieve the coveted Korean glass skin look with our advanced treatment that combines deep hydration, brightening, and texture refinement for flawless, dewy, radiant skin."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Korean Glass Skin",
        description:
          "Korean Glass Skin is a beauty standard that aims for perfectly smooth, hydrated, and luminous skin with a translucent, glass-like appearance. Our treatment combines advanced hydration techniques, brightening agents, and texture refinement to achieve this coveted aesthetic.\n\nThis treatment focuses on creating a flawless canvas with deep hydration, even tone, and a dewy glow that reflects light beautifully.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/skin-brightening.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Dull, tired-looking skin" },
        { title: "Uneven skin tone" },
        { title: "Lack of radiance and glow" },
        { title: "Rough or uneven texture" },
        { title: "Dehydrated skin" },
        { title: "Desire for glass-like luminosity" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Deep Hydration Therapy",
          description: "Intensive moisture infusion for plump, dewy skin.",
        },
        {
          title: "Brightening & Tone Correction",
          description: "Advanced formulas for even, luminous complexion.",
        },
        {
          title: "Texture Refinement",
          description: "Smoothing treatments for glass-like surface.",
        },
        {
          title: "Glass Glow Enhancement",
          description: "Specialized treatments for translucent radiance.",
        },
        {
          title: "Barrier Strengthening",
          description: "Support for lasting skin health and glow.",
        },
        {
          title: "Maintenance Protocol",
          description: "Ongoing care for sustained glass skin results.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Flawless, glass-like radiance" },
        { title: "Deep, lasting hydration" },
        { title: "Smooth, even skin texture" },
        { title: "Bright, luminous complexion" },
        { title: "Translucent, dewy appearance" },
        { title: "Enhanced light reflection" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Glass Skin Assessment",
          description: "Evaluation of skin texture, tone, and hydration goals.",
        },
        {
          title: "Preparation",
          description: "Cleansing and preparation for treatment.",
        },
        {
          title: "Hydration Infusion",
          description: "Advanced moisture and brightening treatment.",
        },
        {
          title: "Texture Refinement",
          description: "Smoothing treatments for glass-like surface.",
        },
        {
          title: "Glow Enhancement",
          description: "Final treatments for luminous, translucent finish.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Glass Skin Expertise",
          description: "Specialized knowledge in Korean beauty standards and techniques.",
        },
        {
          title: "Advanced Formulations",
          description: "Latest treatments for flawless, translucent skin.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe standards and sterile protocols.",
        },
        {
          title: "Customized Approach",
          description: "Personalized treatment plans for your skin goals.",
        },
        {
          title: "Lasting Results",
          description: "Focus on sustained glass skin maintenance.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Korean Glass Skin treatment the same as a filler?",
          answer:
            "No. Fillers add shape/volume, while Korean Glass Skin treatment focuses on achieving flawless texture, deep hydration, and a radiant, glass-like appearance.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Typically a series of treatments followed by maintenance. Your specialist will create a personalized Korean Glass Skin plan.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Minimal downtime. You may experience slight redness or sensitivity that resolves quickly.",
        },
        {
          question: "When will I see results?",
          answer:
            "Initial glow can be seen immediately, with full glass skin effects developing over the treatment series.",
        },
        {
          question: "How long do results last?",
          answer:
            "With proper maintenance, glass skin results can be long-lasting. We'll provide a comprehensive care plan.",
        },
        {
          question: "What makes Korean Glass Skin different?",
          answer:
            "It focuses on creating a translucent, glass-like appearance through deep hydration, brightening, and texture refinement rather than just adding volume.",
        },
      ]}
      cta={{
        title: "Achieve Korean Glass Skin Today",
        description: "Book your consultation for flawless, radiant, glass-like skin.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
