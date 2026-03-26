import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Glow Drips IV Therapy | Healthfusion Multispeciality Clinic",
  description: "IV vitamin therapy and glutathione drips for skin brightening, detoxification, and overall wellness.",
};

export default function GlowDripsPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=2400&q=80";

  return (
    <PremiumTreatmentPage
      title="Glow Drips IV Therapy"
      description="Premium IV nutrient support designed to help you feel refreshed and support skin radiance—administered with clinical safety protocols and personalized planning."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Glow Drips",
        description:
          "Glow drips are intravenous nutrient infusions that deliver vitamins and antioxidants directly into the bloodstream. This may support faster absorption compared to oral supplements.\n\nAt Healthfusion, IV therapies are planned after assessment and are administered with safety-first protocols. The goal is wellness support—hydration, antioxidant balance, and overall skin vitality.",
        image:
          "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=2400&q=80",
      }}
      causesTitle="Common Goals"
      causes={[
        { title: "Dullness and tired-looking skin" },
        { title: "Low energy / fatigue support" },
        { title: "Hydration support" },
        { title: "Antioxidant support" },
        { title: "Wellness and recovery support" },
        { title: "Busy lifestyle nutrition gaps" },
      ]}
      optionsTitle="IV Therapy Options"
      options={[
        {
          title: "Antioxidant Support",
          description: "Designed to support oxidative balance and overall wellness.",
        },
        {
          title: "Hydration + Electrolytes",
          description: "Supports hydration status and recovery.",
        },
        {
          title: "Vitamin C + Nutrient Support",
          description: "Commonly selected to support immunity and radiance.",
        },
        {
          title: "B-Complex Support",
          description: "For energy metabolism and wellness support.",
        },
        {
          title: "Personalized Formulations",
          description: "Chosen based on assessment and clinical suitability.",
        },
        {
          title: "Maintenance Planning",
          description: "Session frequency planned based on goals.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Supports hydration" },
        { title: "Supports energy and wellness" },
        { title: "Antioxidant support" },
        { title: "Convenient and time-efficient" },
        { title: "Clinically administered" },
        { title: "Personalized planning" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "Assessment and selection of appropriate drip.",
        },
        {
          title: "Vitals Check",
          description: "Safety screening and baseline checks.",
        },
        {
          title: "IV Setup",
          description: "IV line placed by trained staff.",
        },
        {
          title: "Infusion",
          description: "Comfortable session typically lasting 30–60 minutes.",
        },
        {
          title: "Aftercare",
          description: "Hydration guidance and next-step recommendations.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Clinical safety protocols",
          description: "Careful screening and supervised administration.",
        },
        {
          title: "Personalized guidance",
          description: "Selection based on goals and suitability.",
        },
        {
          title: "Comfort-focused sessions",
          description: "Premium environment and supportive care.",
        },
        {
          title: "Hygiene-first",
          description: "Clean, safe clinic standards.",
        },
        {
          title: "Transparent planning",
          description: "Clear expectations and maintenance guidance.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How long does a glow drip session take?",
          answer:
            "Many sessions last about 30–60 minutes depending on formulation.",
        },
        {
          question: "Is IV therapy safe?",
          answer:
            "When performed with proper screening and trained staff, it can be administered safely.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "This depends on your goals. Your clinician will recommend a suitable plan.",
        },
        {
          question: "Will it brighten skin instantly?",
          answer:
            "Results vary by individual. The focus is wellness support; your clinician will guide realistic expectations.",
        },
        {
          question: "Who should avoid IV drips?",
          answer:
            "Certain medical conditions may require caution. We screen you before planning any IV therapy.",
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
