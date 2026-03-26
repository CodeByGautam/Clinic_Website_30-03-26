import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Agnikarma | Thermal Cauterization Therapy in Ayurveda",
  description: "Ancient Ayurvedic thermal therapy using controlled heat application to treat chronic pain, joint disorders, and skin conditions. Effective non-invasive treatment.",
};

export default function AgnikarmaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/agnikarma.jpeg";

  return (
    <PremiumTreatmentPage
      title="Agnikarma"
      description="Ancient Ayurvedic thermal therapy using controlled heat application to support chronic pain relief, joint wellness, and mobility—planned under expert guidance (as advised)."
      heroImage={heroImage}
      heroLabel="Ayurveda Treatments"
      understanding={{
        title: "Understanding Agnikarma",
        description:
          "Agnikarma is a classical Ayurvedic procedure involving controlled heat application to specific points. It is traditionally used for certain Vata-related pain patterns including chronic joint pain, stiffness, and musculoskeletal discomfort.\n\nSuitability is assessed carefully and the procedure is planned with safety-first protocols.",
        image:
          // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/agnikarma.jpeg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Chronic joint pain" },
        { title: "Stiffness and reduced mobility" },
        { title: "Neck/back discomfort" },
        { title: "Sciatica-like pain patterns" },
        { title: "Tendon pain (as assessed)" },
        { title: "Vata-related pain imbalance" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Assessment to confirm indication and safety.",
        },
        {
          title: "Target Point Mapping",
          description: "We identify precise points for heat application.",
        },
        {
          title: "Agnikarma Session",
          description: "Controlled heat application with comfort focus.",
        },
        {
          title: "Herbal Aftercare",
          description: "Soothing and recovery guidance.",
        },
        {
          title: "Lifestyle Support",
          description: "Diet and routine guidance to support Vata balance.",
        },
        {
          title: "Follow-up Planning",
          description: "Session planning based on response.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Pain relief support" },
        { title: "Improved mobility" },
        { title: "Non-surgical approach" },
        { title: "Targets localized pain points" },
        { title: "Quick session time" },
        { title: "Traditional therapy with guided care" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We evaluate pain points and suitability.",
        },
        {
          title: "Preparation",
          description: "Area cleaned; comfort measures used.",
        },
        {
          title: "Heat Application",
          description: "Controlled heat applied to selected points.",
        },
        {
          title: "Post-Care",
          description: "Aftercare guidance and herbal support.",
        },
        {
          title: "Follow-up",
          description: "Review response and plan next sessions.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Safety-first protocols",
          description: "Hygienic standards and careful suitability checks.",
        },
        {
          title: "Expert guidance",
          description: "Performed by trained Ayurvedic practitioners.",
        },
        {
          title: "Precision planning",
          description: "Targeted points selected based on assessment.",
        },
        {
          title: "Aftercare support",
          description: "Recovery guidance for best outcomes.",
        },
        {
          title: "Holistic approach",
          description: "Lifestyle support alongside procedures.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Agnikarma painful?",
          answer:
            "Discomfort is usually brief and controlled. Your practitioner will prioritize comfort and safety.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "It depends on the condition and response. A plan is made after assessment.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime is typically minimal, but aftercare instructions should be followed.",
        },
        {
          question: "Who should avoid Agnikarma?",
          answer:
            "Suitability varies. Your practitioner will advise based on health status.",
        },
        {
          question: "Can it be combined with other Ayurveda therapies?",
          answer:
            "Yes, combination planning is possible depending on your diagnosis.",
        },
      ]}
      cta={{
        title: "Experience Authentic Agnikarma Therapy",
        description: "Book your consultation with our Ayurvedic practitioners.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
