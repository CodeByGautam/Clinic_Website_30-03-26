import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Hair & Scalp Therapy | Healthfusion Multispeciality Clinic",
  description: "Expert hair and scalp treatments at Healthfusion Multispeciality Clinic. Solutions for hair loss, dandruff, and scalp conditions.",
};

export default function HairScalpTherapyPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=2400&q=80";
    "/hair&skin.jpg";

  return (
    <PremiumTreatmentPage
      title="Hair & Scalp Therapy"
      description="Dermatologist-guided diagnosis and premium treatment plans for hair fall, thinning, dandruff, and scalp health—designed for long-term, measurable improvement."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Hair & Scalp Health",
        description:
          "Healthy hair begins with a healthy scalp. Hair fall and thinning can be caused by genetics, hormones, nutritional deficiencies, stress, medical conditions, or scalp inflammation. The right treatment depends on identifying the root cause—not just symptoms.\n\nAt Healthfusion, we evaluate your scalp, hair density, and lifestyle factors to build a personalized plan using advanced therapies and maintenance guidance.",
        image:
          // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80",
          "/hair&skin.jpg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Hair fall and thinning" },
        { title: "Dandruff and itching" },
        { title: "Oily scalp or buildup" },
        { title: "Dry, flaky scalp" },
        { title: "Patchy hair loss" },
        { title: "Weak hair and breakage" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Scalp Analysis & Diagnosis",
          description: "Identify pattern and triggers to plan the right therapy.",
        },
        {
          title: "PRP / Regenerative Therapies",
          description: "Supports follicle stimulation and hair strength.",
        },
        {
          title: "GFC / Advanced Growth Factor Options",
          description: "For suitable candidates looking for advanced stimulation.",
        },
        {
          title: "Medical Therapy",
          description: "Dermatologist-recommended topical/oral treatments.",
        },
        {
          title: "Anti-Dandruff & Scalp Treatments",
          description: "For itching, flakes, and inflammation control.",
        },
        {
          title: "Hair Transplant Guidance",
          description: "When appropriate, a permanent option for advanced hair loss.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Reduced hair fall with consistent plan" },
        { title: "Improved scalp comfort and clarity" },
        { title: "Better hair thickness and strength" },
        { title: "Targets root causes" },
        { title: "Personalized treatment plan" },
        { title: "Long-term maintenance guidance" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We understand hair concerns, history, and goals.",
        },
        {
          title: "Scalp Assessment",
          description: "We evaluate density, inflammation, and scalp condition.",
        },
        {
          title: "Plan Design",
          description: "Therapies + home routine are selected for your needs.",
        },
        {
          title: "Treatment Sessions",
          description: "In-clinic sessions scheduled as per protocol.",
        },
        {
          title: "Follow-up",
          description: "Progress tracking and plan adjustments.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Root-cause diagnosis",
          description: "We treat the cause, not just the symptom.",
        },
        {
          title: "Advanced therapies",
          description: "Modern hair restoration options under supervision.",
        },
        {
          title: "Personalized protocols",
          description: "Plans adapted to your hair type and lifestyle.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe clinical standards and clean environment.",
        },
        {
          title: "Long-term support",
          description: "Maintenance guidance to sustain results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How do you diagnose the cause of hair fall?",
          answer:
            "We review history, examine scalp and density patterns, and may recommend relevant tests if needed.",
        },
        {
          question: "How soon will I see improvement?",
          answer:
            "Hair growth takes time. Many plans show visible change over weeks to months depending on the cause.",
        },
        {
          question: "Do treatments work for both men and women?",
          answer:
            "Yes—protocols are customized based on diagnosis and individual factors.",
        },
        {
          question: "Is hair fall always due to genetics?",
          answer:
            "Not always. Stress, nutrition, hormones, and scalp inflammation are common contributors.",
        },
        {
          question: "Can dandruff cause hair fall?",
          answer:
            "Inflammation and scratching can worsen hair fall. Treating scalp health is important.",
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
