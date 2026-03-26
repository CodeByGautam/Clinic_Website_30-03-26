import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "MNRF Treatment | Healthfusion Multispeciality Clinic",
  description: "Microneedling RF (MNRF) treatment for skin tightening, scar reduction, and collagen stimulation.",
};

export default function MnrftreatmentPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1580281657527-47f249e8f7fd?auto=format&fit=crop&w=2400&q=80";

  return (
    <PremiumTreatmentPage
      title="MNRF Treatment"
      description="Advanced Microneedling Radiofrequency designed to tighten skin, improve texture, reduce scars, and stimulate collagen—performed with dermatologist-guided safety protocols."
      heroImage={heroImage}
      understanding={{
        title: "Understanding MNRF",
        description:
          "Microneedling Radio Frequency (MNRF) combines micro-needling with controlled RF energy delivered into deeper layers of skin. This stimulates collagen remodeling, improves firmness, and supports scar and pore reduction.\n\nMNRF is commonly used for acne scars, enlarged pores, texture concerns, and early sagging, with customizable depth and energy settings.",
        image:
          "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Acne scars" },
        { title: "Enlarged pores" },
        { title: "Uneven skin texture" },
        { title: "Early fine lines" },
        { title: "Mild skin laxity" },
        { title: "Post-acne marks" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Scar-Reduction Protocol",
          description: "Focused depth settings for acne scar improvement.",
        },
        {
          title: "Pore Refining",
          description: "Supports smoother pores and improved skin texture.",
        },
        {
          title: "Skin Tightening",
          description: "Collagen stimulation for firmer, healthier-looking skin.",
        },
        {
          title: "Combination Planning",
          description: "Can be combined with peels/PRP as advised for best outcomes.",
        },
        {
          title: "Sensitive Skin Customization",
          description: "Parameters adjusted to reduce irritation.",
        },
        {
          title: "Homecare Support",
          description: "Barrier repair and sun protection guidance.",
        },
      ]}
      benefitsTitle="Benefits of MNRF"
      benefits={[
        { title: "Improved acne scars" },
        { title: "Tighter, firmer skin" },
        { title: "Reduced pore appearance" },
        { title: "Smoother texture" },
        { title: "Collagen stimulation" },
        { title: "Minimal downtime in many cases" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess scars/texture and suitability.",
        },
        {
          title: "Numbing",
          description: "Topical anesthesia for comfort.",
        },
        {
          title: "MNRF Session",
          description: "Microneedling + RF energy with controlled parameters.",
        },
        {
          title: "Post Care",
          description: "Soothing protocol and aftercare guidance.",
        },
        {
          title: "Follow-up Plan",
          description: "Sessions spaced for collagen remodeling.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Expert planning",
          description: "Depth and energy selected for your skin concern.",
        },
        {
          title: "Advanced devices",
          description: "Modern technology and safe protocols.",
        },
        {
          title: "Comfort-focused care",
          description: "Numbing and supportive post-treatment guidance.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe and clean clinical environment.",
        },
        {
          title: "Realistic outcomes",
          description: "Clear timelines based on skin remodeling.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is MNRF painful?",
          answer:
            "A numbing cream is used to keep you comfortable. Most patients feel mild pressure or warmth.",
        },
        {
          question: "How many sessions are required?",
          answer:
            "Typically multiple sessions are recommended depending on scar depth and goals.",
        },
        {
          question: "Is there downtime after MNRF?",
          answer:
            "Mild redness can occur for 1–2 days. Your doctor will provide aftercare to reduce irritation.",
        },
        {
          question: "When will I see results?",
          answer:
            "Some improvement may be seen early, but collagen remodeling builds over weeks.",
        },
        {
          question: "Is MNRF safe for acne-prone skin?",
          answer:
            "It can be safe when planned properly. Active acne may require stabilization first.",
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
