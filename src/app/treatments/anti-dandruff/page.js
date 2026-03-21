import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Anti-Dandruff Treatment | Healthfusion Multispeciality Clinic",
  description: "Comprehensive dandruff treatment solutions for a healthy, flake-free scalp.",
};

export default function AntiDandruffPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/ANTIDANDRUFF.jpeg";

  return (
    <PremiumTreatmentPage
      title="Anti-Dandruff Treatment"
      description="Target the root cause of dandruff and scalp itching with dermatologist-guided therapy—designed for long-term scalp comfort and a flake-free look."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Dandruff",
        description:
          "Dandruff is a common scalp condition that causes flaking, itching, and irritation. It can be triggered by dry scalp, fungal overgrowth, seborrheic dermatitis, product buildup, or inflammation.\n\nOur approach starts with scalp evaluation and then combines medical therapy with scalp-care routines to reduce recurrence.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/ANTIDANDRUFF.jpeg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Flakes and scalp itching" },
        { title: "Oily scalp and seborrheic dermatitis" },
        { title: "Dry scalp" },
        { title: "Fungal overgrowth" },
        { title: "Product buildup" },
        { title: "Inflammation and redness" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Scalp Analysis",
          description: "We identify dandruff type and likely triggers.",
        },
        {
          title: "Medicated Shampoos",
          description: "Anti-fungal/keratolytic options as advised.",
        },
        {
          title: "In-Clinic Scalp Therapy",
          description: "Deep cleansing and calming protocols.",
        },
        {
          title: "Hydration & Barrier Support",
          description: "For dry, sensitive scalp patterns.",
        },
        {
          title: "Inflammation Control",
          description: "Protocols to reduce redness and itch.",
        },
        {
          title: "Maintenance Plan",
          description: "Prevention strategy to reduce recurrence.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Reduced flaking" },
        { title: "Less itching and irritation" },
        { title: "Cleaner scalp feel" },
        { title: "Reduced scalp inflammation" },
        { title: "Lower recurrence risk" },
        { title: "Healthier hair environment" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Diagnosis",
          description: "We examine scalp and identify the pattern.",
        },
        {
          title: "Treatment Plan",
          description: "Medicated therapy + in-clinic care as needed.",
        },
        {
          title: "Home Routine",
          description: "Shampoo schedule and scalp-care guidance.",
        },
        {
          title: "Follow-up",
          description: "We review response and adjust if required.",
        },
        {
          title: "Maintenance",
          description: "Long-term plan to prevent relapse.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Root-cause scalp care",
          description: "We tailor treatment to dandruff type and triggers.",
        },
        {
          title: "Medical-grade protocols",
          description: "Dermatologist-advised medicated therapy.",
        },
        {
          title: "Comfort-first approach",
          description: "Focus on itching relief and barrier support.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe clinical standards.",
        },
        {
          title: "Maintenance guidance",
          description: "Plan for long-term results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is dandruff contagious?",
          answer:
            "Dandruff itself is not contagious, but it can be influenced by fungal overgrowth and inflammation.",
        },
        {
          question: "How long does it take to see improvement?",
          answer:
            "Many patients see improvement within a few weeks with consistent therapy.",
        },
        {
          question: "Will dandruff come back?",
          answer:
            "It can. Maintenance routines help reduce recurrence.",
        },
        {
          question: "Does dandruff cause hair fall?",
          answer:
            "Inflammation and scratching can worsen hair fall. Treating scalp health helps.",
        },
        {
          question: "Do I need to stop oiling my hair?",
          answer:
            "Your dermatologist will advise based on your scalp type and severity.",
        },
      ]}
      cta={{
        title: "Start Your Hair Transformation Today",
        description: "Book your consultation with our hair & scalp experts.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
