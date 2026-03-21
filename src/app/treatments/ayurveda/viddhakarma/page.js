import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Viddhakarma | Bloodletting Therapy in Ayurveda",
  description: "Traditional Ayurvedic bloodletting therapy for detoxification, treating skin disorders, joint conditions, and systemic imbalances. Expertly performed by trained Vaidyas.",
};

export default function ViddhakarmaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80";

    "/Viddhakarma2.jpg";

  return (
    <PremiumTreatmentPage
      title="Viddhakarma"
      description="Traditional Ayurvedic bloodletting therapy for detoxification—used for select skin, joint, and systemic imbalance patterns under expert guidance (as advised)."
      heroImage={heroImage}
      heroLabel="Ayurveda Treatments"
      understanding={{
        title: "What is Viddhakarma?",
        description:
          "Viddhakarma (also described as Siravyadha/bloodletting in classical Ayurveda) is a detoxification-focused therapy traditionally used when vitiated doshas affect Rakta dhatu (blood tissue), especially in Pitta-dominant patterns.\n\nMethod selection and suitability depend on constitution, indication, and safety checks.",
        image:
          // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80",
          "/Viddhakarma2.jpg",
      }}
      causesTitle="Common Indications (As Assessed)"
      causes={[
        { title: "Chronic skin inflammation patterns" },
        { title: "Pitta-related heat and irritation" },
        { title: "Inflammatory joint pain patterns" },
        { title: "Blood impurity symptoms (Ayurvedic assessment)" },
        { title: "Recurring flare-ups" },
        { title: "Detoxification support needs" },
      ]}
      optionsTitle="Methods of Viddhakarma"
      options={[
        {
          title: "Siravyadha",
          description: "Venous puncture method used in suitable cases.",
        },
        {
          title: "Jalauka",
          description: "Leech therapy method for suitable indications.",
        },
        {
          title: "Alabu",
          description: "Cupping-based approach used as advised.",
        },
        {
          title: "Sringa",
          description: "Traditional horn-cupping method in suitable cases.",
        },
        {
          title: "Aftercare Guidance",
          description: "Diet and wound/skin care precautions.",
        },
        {
          title: "Follow-up Planning",
          description: "Progress review and scheduling.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Deep detoxification support" },
        { title: "Supports skin clarity (as advised)" },
        { title: "Supports inflammation balance" },
        { title: "Improved circulation support" },
        { title: "Holistic planning" },
        { title: "Doctor-guided protocol" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We evaluate constitution, indication, and safety.",
        },
        {
          title: "Method Selection",
          description: "Technique chosen based on condition and suitability.",
        },
        {
          title: "Procedure",
          description: "Performed under hygienic, supervised protocol.",
        },
        {
          title: "Aftercare",
          description: "Guidance for recovery, diet, and precautions.",
        },
        {
          title: "Follow-up",
          description: "Review response and plan further care.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Safety-first protocols",
          description: "Suitability checks and clinical hygiene standards.",
        },
        {
          title: "Expert supervision",
          description: "Performed by trained Ayurvedic practitioners.",
        },
        {
          title: "Personalized method selection",
          description: "Technique chosen based on your indication.",
        },
        {
          title: "Aftercare guidance",
          description: "Clear recovery instructions for best outcomes.",
        },
        {
          title: "Holistic planning",
          description: "Diet and lifestyle guidance to reduce recurrence.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Viddhakarma safe?",
          answer:
            "It should only be performed under expert supervision and after suitability checks.",
        },
        {
          question: "How is the method selected?",
          answer:
            "Selection depends on condition, constitution, and safety factors.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime varies by method. Aftercare instructions are important.",
        },
        {
          question: "Who should avoid it?",
          answer:
            "Certain conditions may not be eligible. Please consult for suitability.",
        },
        {
          question: "Can it help skin issues?",
          answer:
            "It is traditionally considered for select chronic skin patterns as part of holistic care.",
        },
      ]}
      cta={{
        title: "Consult Our Ayurveda Experts",
        description:
          "Book a consultation to check if Viddhakarma is suitable for you.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
