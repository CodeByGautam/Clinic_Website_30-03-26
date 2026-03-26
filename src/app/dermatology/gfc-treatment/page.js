import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "GFC Hair Treatment | Healthfusion Multispeciality Clinic",
  description: "Growth Factor Concentrate therapy for advanced hair regrowth and follicle stimulation.",
};

export default function GFCtreatmentPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/HAIR GFC.jpeg";

  return (
    <PremiumTreatmentPage
      title="GFC Hair Treatment"
      description="Advanced growth factor concentrate therapy designed to support follicle stimulation and improved hair density—planned under dermatologist guidance for suitable candidates."
      heroImage={heroImage}
      understanding={{
        title: "Understanding GFC",
        description:
          "Growth Factor Concentrate (GFC) is a regenerative hair therapy that uses a processed concentrate derived from your own blood to deliver a higher concentration of growth factors compared to traditional PRP. It is designed to support follicle stimulation and hair regrowth in appropriate candidates.\n\nTreatment planning depends on hair-loss pattern, scalp condition, and overall suitability.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/HAIR GFC.jpeg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Hair thinning" },
        { title: "Early to moderate pattern hair loss" },
        { title: "Reduced hair density" },
        { title: "Excessive shedding" },
        { title: "Weak hair shafts" },
        { title: "Need for advanced stimulation" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "GFC Session Protocol",
          description: "A planned series of sessions based on diagnosis.",
        },
        {
          title: "GFC vs PRP Selection",
          description: "We recommend the right option based on suitability.",
        },
        {
          title: "Combination Planning",
          description: "May be paired with medical therapy for better outcomes.",
        },
        {
          title: "Scalp Inflammation Control",
          description: "Treat dandruff/itching first if needed.",
        },
        {
          title: "Nutritional Support",
          description: "If deficiencies are contributing to hair loss.",
        },
        {
          title: "Maintenance Sessions",
          description: "Long-term plan to sustain improvements.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Advanced follicle stimulation" },
        { title: "Supports improved density" },
        { title: "Autologous (derived from your blood)" },
        { title: "Non-surgical option" },
        { title: "Personalized planning" },
        { title: "Minimal downtime" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We evaluate hair loss pattern and suitability.",
        },
        {
          title: "Blood Collection",
          description: "Blood sample collected in appropriate tubes.",
        },
        {
          title: "Processing",
          description: "Advanced processing to prepare growth factor concentrate.",
        },
        {
          title: "Scalp Delivery",
          description: "GFC delivered to targeted areas with safe protocols.",
        },
        {
          title: "Follow-up",
          description: "Session schedule and home routine guidance.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Diagnosis-first planning",
          description: "We recommend GFC only when appropriate.",
        },
        {
          title: "Safe protocols",
          description: "Hygiene-first injections and aftercare.",
        },
        {
          title: "Combination approach",
          description: "Medical therapy + regenerative support.",
        },
        {
          title: "Comfort-focused care",
          description: "Supportive measures to minimize discomfort.",
        },
        {
          title: "Long-term maintenance",
          description: "Plans designed for sustained improvements.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How is GFC different from PRP?",
          answer:
            "GFC is designed to deliver a more concentrated growth factor formulation. Suitability is confirmed during consultation.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "Most protocols involve multiple sessions. Your dermatologist will recommend the best schedule.",
        },
        {
          question: "When will I see results?",
          answer:
            "Hair changes occur gradually over months due to the natural growth cycle.",
        },
        {
          question: "Is it safe?",
          answer:
            "It uses autologous components (from your own blood) and is performed under clinical protocols.",
        },
        {
          question: "Can I combine GFC with medicines?",
          answer:
            "Often yes—combination planning is common for long-term outcomes.",
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
