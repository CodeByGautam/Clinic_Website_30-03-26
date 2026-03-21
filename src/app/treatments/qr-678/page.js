import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "QR-678 Hair Treatment | Healthfusion Multispeciality Clinic",
  description: "QR-678 peptide therapy for advanced hair regrowth and follicle rejuvenation.",
};

export default function QR678Page() {
  const heroImage =
    // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/QR-678.jpeg";

  return (
    <PremiumTreatmentPage
      title="QR-678 Hair Treatment"
      description="Advanced peptide-based scalp micro-injection therapy designed to support follicle rejuvenation and improved hair density—planned under clinical guidance for suitable candidates."
      heroImage={heroImage}
      understanding={{
        title: "Understanding QR-678",
        description:
          "QR-678 is a peptide-based formulation delivered via micro-injections into the scalp. It is designed to target follicles and support improved growth signals in suitable candidates.\n\nYour dermatologist will assess your hair-loss pattern, scalp health, and suitability before recommending QR-678 as part of a broader hair restoration plan.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/QR-678.jpeg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Hair thinning" },
        { title: "Pattern hair loss" },
        { title: "Reduced density" },
        { title: "Ongoing shedding" },
        { title: "Weak follicles" },
        { title: "Need for advanced therapy" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "QR-678 Session Protocol",
          description: "A planned series of sessions under supervision.",
        },
        {
          title: "Combination Planning",
          description: "Often paired with medical therapy and scalp care.",
        },
        {
          title: "Scalp Inflammation Control",
          description: "Treat dandruff/itching first if needed.",
        },
        {
          title: "Lifestyle & Nutrition Support",
          description: "Support for triggers that worsen hair fall.",
        },
        {
          title: "Maintenance Plan",
          description: "Long-term plan to sustain gains.",
        },
        {
          title: "Hair Transplant Planning",
          description: "For advanced cases where surgery is needed.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Supports follicle rejuvenation" },
        { title: "Improved density over time" },
        { title: "Non-surgical option" },
        { title: "Clinically administered" },
        { title: "Personalized planning" },
        { title: "Minimal downtime" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We evaluate pattern and suitability.",
        },
        {
          title: "Preparation",
          description: "Scalp cleansing and comfort measures.",
        },
        {
          title: "Micro-Injections",
          description: "QR-678 delivered to targeted areas.",
        },
        {
          title: "Aftercare",
          description: "Guidance for scalp care and activity.",
        },
        {
          title: "Follow-up",
          description: "Session scheduling and maintenance planning.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Diagnosis-first approach",
          description: "We recommend QR-678 when it fits your condition.",
        },
        {
          title: "Safe protocols",
          description: "Hygiene-first injection standards.",
        },
        {
          title: "Combination planning",
          description: "Long-term results focus.",
        },
        {
          title: "Comfort-first care",
          description: "Support to reduce discomfort.",
        },
        {
          title: "Maintenance guidance",
          description: "Sustainable plan to protect results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is QR-678 safe?",
          answer:
            "Suitability is confirmed during consultation. It is administered under clinical protocols.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Protocols vary. Your dermatologist will recommend the right schedule.",
        },
        {
          question: "When will I see results?",
          answer:
            "Hair growth changes occur gradually over months.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime is minimal. Mild tenderness can occur briefly.",
        },
        {
          question: "Can I combine QR-678 with PRP/GFC?",
          answer:
            "Combination planning may be possible depending on your diagnosis and goals.",
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
