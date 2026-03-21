import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "PRP Hair Treatment | Healthfusion Multispeciality Clinic",
  description: "Platelet-Rich Plasma therapy for hair regrowth, strengthening, and stopping hair loss.",
};

export default function PRPtreatmentPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/HAIRPRP2.jpg";

  return (
    <PremiumTreatmentPage
      title="PRP Hair Treatment"
      description="Regenerative hair therapy that uses your body’s own platelet-rich plasma to support follicle stimulation, reduce shedding, and improve hair strength—planned under clinical guidance."
      heroImage={heroImage}
      understanding={{
        title: "Understanding PRP for Hair",
        description:
          "Platelet-Rich Plasma (PRP) is prepared from a small sample of your blood, concentrating platelets that contain growth factors. PRP is injected into targeted scalp areas to support circulation and follicle stimulation.\n\nPRP is commonly used for hair thinning and early pattern hair loss, and it is often combined with medical therapy and scalp care for better outcomes.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/HAIRPRP2.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Hair thinning" },
        { title: "Early pattern hair loss" },
        { title: "Increased shedding" },
        { title: "Weak hair and breakage" },
        { title: "Post-stress hair fall (support)" },
        { title: "Poor scalp circulation" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "PRP Session Series",
          description: "A planned series of sessions based on diagnosis and goals.",
        },
        {
          title: "PRP + Medical Therapy",
          description: "Combination approach for improved long-term results.",
        },
        {
          title: "Scalp Health Optimization",
          description: "Anti-dandruff/inflammation control where needed.",
        },
        {
          title: "Nutritional Guidance",
          description: "Support for deficiencies that worsen hair fall.",
        },
        {
          title: "Maintenance Sessions",
          description: "Periodic sessions to maintain progress.",
        },
        {
          title: "Home Routine",
          description: "Personalized scalp and hair-care routine.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Supports hair regrowth" },
        { title: "Helps reduce shedding" },
        { title: "Improves hair thickness over time" },
        { title: "Uses your own plasma" },
        { title: "Non-surgical option" },
        { title: "Minimal downtime" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess pattern, triggers, and suitability.",
        },
        {
          title: "Blood Draw",
          description: "A small blood sample is collected.",
        },
        {
          title: "PRP Preparation",
          description: "Centrifugation concentrates platelet-rich plasma.",
        },
        {
          title: "Scalp Injections",
          description: "PRP delivered to targeted areas with safe protocols.",
        },
        {
          title: "Follow-up",
          description: "Session schedule and maintenance plan discussed.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Diagnosis-first planning",
          description: "PRP is used when it fits your hair-loss pattern.",
        },
        {
          title: "Safe protocols",
          description: "Hygiene-first injections and aftercare.",
        },
        {
          title: "Combination approach",
          description: "Medical therapy + PRP for better outcomes.",
        },
        {
          title: "Comfort-focused care",
          description: "Supportive measures to minimize discomfort.",
        },
        {
          title: "Long-term maintenance",
          description: "Plans designed for sustainable results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is PRP safe?",
          answer:
            "PRP uses your own blood components. Suitability is confirmed during consultation.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "Many patients do a series of sessions. Your dermatologist will recommend the right plan.",
        },
        {
          question: "When will I see results?",
          answer:
            "Hair growth changes usually appear gradually over months.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime is minimal. Mild scalp tenderness can occur for a short period.",
        },
        {
          question: "Can PRP be combined with other treatments?",
          answer:
            "Yes, PRP is often combined with medical therapy and scalp care for better outcomes.",
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
