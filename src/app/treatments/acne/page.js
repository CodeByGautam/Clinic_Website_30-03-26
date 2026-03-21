import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Acne Treatment | Healthfusion Multispeciality Clinic",
  description: "Effective acne treatment solutions at Healthfusion Multispeciality Clinic. Our dermatologists provide personalized acne care with advanced technology.",
};

export default function AcneTreatmentPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2400&q=80";
    "/acne.jpg";

  return (
    <PremiumTreatmentPage
      title="Acne Treatment"
      description="Advanced dermatologist-approved solutions for acne control, oil balance, and clearer skin—personalized to your skin type and lifestyle."
      heroImage={heroImage}
      understanding={{
        // title: "Understanding Acne",
        description:
          "Acne is a common inflammatory skin condition caused by clogged pores, excess oil production, bacteria, and irritation. It may present as whiteheads, blackheads, pimples, or cystic acne.\n\nAt Healthfusion, we treat acne with a medically guided plan that targets the root cause—helping reduce active breakouts and improving overall skin texture.",
        image:
          // "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2400&q=80",
          "/acne.jpg"
      }}
      causesTitle="Common Causes of Acne"
      causes={[
        { title: "Hormonal imbalance" },
        { title: "Excess oil (sebum) production" },
        { title: "Clogged pores" },
        { title: "Bacterial growth" },
        { title: "Stress & lifestyle" },
        { title: "Diet triggers" },
      ]}
      optionsTitle="Acne Treatment Options"
      options={[
        {
          title: "Chemical Peels",
          description: "Gentle exfoliation to unclog pores and reduce acne marks.",
        },
        {
          title: "Medicated Facials",
          description: "Professional acne-focused facials for oil control and calming inflammation.",
        },
        {
          title: "Laser / Light Therapy",
          description: "Targets bacteria and reduces active inflammation safely.",
        },
        {
          title: "Dermatologist Medications",
          description: "Topical/oral medicines tailored to acne type and severity.",
        },
        {
          title: "Acne Scar Support",
          description: "Plans that include scar-reduction solutions when appropriate.",
        },
        {
          title: "Skin Barrier Repair",
          description: "Improves sensitivity and prevents recurring irritation-driven breakouts.",
        },
      ]}
      benefitsTitle="Benefits of Acne Treatment"
      benefits={[
        { title: "Clearer skin with fewer breakouts" },
        { title: "Reduced inflammation and redness" },
        { title: "Improved texture and smoother pores" },
        { title: "Lower risk of future scarring" },
        { title: "Balanced oil production" },
        { title: "Boosted confidence" },
      ]}
      procedureTitle="How the Treatment Works"
      procedureSteps={[
        {
          title: "Dermatologist Consultation",
          description: "We assess acne type, triggers, and past treatments.",
        },
        {
          title: "Skin Analysis",
          description: "We evaluate oil levels, sensitivity, and inflammation.",
        },
        {
          title: "Personalized Plan",
          description: "A combination of procedures + homecare is recommended.",
        },
        {
          title: "Treatment Sessions",
          description: "Peels/facials/laser are scheduled based on your skin response.",
        },
        {
          title: "Follow-up & Maintenance",
          description: "We fine-tune the plan to keep acne controlled long-term.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Experienced dermatologists",
          description: "Evidence-based acne protocols with careful monitoring.",
        },
        {
          title: "Advanced technology",
          description: "Modern devices and safe procedures for sensitive skin.",
        },
        {
          title: "Personalized plans",
          description: "Your acne plan is tailored—not one-size-fits-all.",
        },
        {
          title: "Hygienic & safe",
          description: "Clinic-grade safety standards and sterilized equipment.",
        },
        {
          title: "Long-term results focus",
          description: "We address triggers and barrier health to reduce recurrence.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is acne treatment painful?",
          answer:
            "Most treatments are comfortable. Some procedures may cause mild tingling or temporary redness, which settles quickly.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It depends on acne type and severity. Many patients notice improvement within a few weeks; your doctor will outline a session plan after evaluation.",
        },
        {
          question: "Is laser acne treatment safe?",
          answer:
            "Yes, when performed under dermatologist guidance with the right settings for your skin type.",
        },
        {
          question: "When will I see results?",
          answer:
            "You may see early improvement within 2–4 weeks, with more visible results over subsequent sessions and consistent home care.",
        },
        {
          question: "Can acne come back after treatment?",
          answer:
            "Acne can recur due to hormones, stress, or skincare changes. We provide a maintenance plan to minimize recurrence.",
        },
        {
          question: "Can you also treat acne marks/scars?",
          answer:
            "Yes. Once active acne is controlled, we can plan scar-reduction options based on your skin’s needs.",
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
