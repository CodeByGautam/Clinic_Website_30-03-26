import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Raktamokshana Therapy Pune | Panchakarma Centre Kharadi",
  description: "Experience authentic Raktamokshana therapy in Pune at our Panchakarma Centre Kharadi. Ayurvedic bloodletting treatment for skin diseases, joint disorders, and blood purification. Book your consultation today.",
  keywords: ["Raktamokshana therapy Pune", "Panchakarma Kharadi", "Ayurvedic bloodletting", "skin disease treatment Pune", "blood purification Ayurveda", "leech therapy Pune", "Ayurveda clinic Kharadi"],
  alternates: {
    canonical: "/ayurveda/panchakarma/raktamokshana"
  }
};

export default function RaktamokshanaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/Raktamokshan.png";

  return (
    <PremiumTreatmentPage
      title="Raktamokshana Therapy"
      description="Ayurvedic blood purification therapy (as advised) designed for select skin and inflammatory patterns—planned under expert guidance with a safety-first approach."
      heroImage={heroImage}
      heroLabel="Panchakarma Centre Kharadi"
      understanding={{
        title: "Understanding Raktamokshana",
        description:
          "Raktamokshana is a classical Panchakarma therapy traditionally indicated when vitiated doshas affect Rakta dhatu (blood tissue). It is considered for certain chronic skin disorders and inflammatory patterns in suitable candidates.\n\nDifferent methods may be used (such as leech therapy or other classical techniques) depending on the condition and constitution. Your Ayurvedic doctor will guide suitability and protocol selection.",
        image:
          // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/Raktamokshan.png",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Chronic skin inflammation (as advised)" },
        { title: "Psoriasis/eczema patterns (as advised)" },
        { title: "Acne flare-ups (as advised)" },
        { title: "Pitta-related heat/inflammation" },
        { title: "Recurrent inflammatory tendencies" },
        { title: "Need for detox support (as assessed)" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Assessment of constitution and indication before therapy.",
        },
        {
          title: "Method Selection",
          description: "Technique selected based on condition (as advised).",
        },
        {
          title: "Procedure Session",
          description: "Performed under supervised, hygienic protocols.",
        },
        {
          title: "Aftercare",
          description: "Wound/skin care guidance to support healing.",
        },
        {
          title: "Diet & Lifestyle",
          description: "Pitta-balancing guidance to reduce recurrence.",
        },
        {
          title: "Maintenance Strategy",
          description: "Long-term plan for stability and prevention.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Blood purification support" },
        { title: "Supports skin clarity (as advised)" },
        { title: "Inflammation balance support" },
        { title: "Holistic detox planning" },
        { title: "Personalized protocol" },
        { title: "Aftercare guidance" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We assess constitution, symptoms, and suitability.",
        },
        {
          title: "Preparation",
          description: "Preparation steps as advised.",
        },
        {
          title: "Raktamokshana Session",
          description: "Procedure performed under safe protocols.",
        },
        {
          title: "Aftercare",
          description: "Guidance for skin care and recovery.",
        },
        {
          title: "Follow-up",
          description: "Review response and plan next steps.",
        },
      ]}
      whyChooseTitle="Why Choose Our Panchakarma Centre"
      whyChoose={[
        {
          title: "Safety-first approach",
          description: "Suitability checks and hygienic protocols.",
        },
        {
          title: "Authentic guidance",
          description: "Classical planning with modern standards.",
        },
        {
          title: "Personalized method selection",
          description: "Technique chosen based on your indication.",
        },
        {
          title: "Aftercare support",
          description: "Clear steps to protect healing and results.",
        },
        {
          title: "Long-term maintenance",
          description: "Diet/lifestyle planning to reduce recurrence.",
        },
      ]}
      faqs={[
        {
          question: "Is Raktamokshana safe?",
          answer:
            "It must be performed only under expert supervision and after suitability checks.",
        },
        {
          question: "Which method will be used?",
          answer:
            "Method selection depends on your condition and constitution. Your doctor will explain the plan.",
        },
        {
          question: "Can it help skin conditions?",
          answer:
            "It is traditionally considered for select chronic skin patterns as part of a holistic plan, as advised.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime varies by method. Aftercare and precautions are important.",
        },
        {
          question: "Do I need dietary changes?",
          answer:
            "Often yes. Pitta-balancing diet and routine may be recommended.",
        },
      ]}
      cta={{
        title: "Start Your Raktamokshana Therapy Journey",
        description: "Book your consultation at our Panchakarma Centre in Kharadi, Pune.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
