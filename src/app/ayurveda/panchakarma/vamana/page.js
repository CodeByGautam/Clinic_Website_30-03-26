import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Vamana Therapy Pune | Panchakarma Centre Kharadi",
  description: "Experience authentic Vamana therapy in Pune at our Panchakarma Centre Kharadi. Ayurvedic therapeutic vomiting treatment for Kapha detox, respiratory health, and skin disorders. Book your consultation today.",
  keywords: ["Vamana therapy Pune", "Panchakarma Kharadi", "Ayurvedic detox Pune", "Kapha treatment", "respiratory treatment Pune", "skin disorder Ayurveda", "Ayurveda clinic Kharadi"],
  alternates: {
    canonical: "/ayurveda/panchakarma/vamana"
  }
};

export default function VamanaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/vaman2.jpeg";

  return (
    <PremiumTreatmentPage
      title="Vamana Therapy"
      description="Therapeutic emesis therapy (as advised) designed for Kapha detoxification—commonly chosen for congestion patterns, respiratory support, and select Kapha-related imbalances."
      heroImage={heroImage}
      heroLabel="Panchakarma Centre Kharadi"
      understanding={{
        title: "Understanding Vamana",
        description:
          "Vamana is a classical Panchakarma procedure designed to eliminate excess Kapha dosha from the upper gastrointestinal and respiratory pathways through a controlled, medically supervised process.\n\nIt is typically considered when Kapha imbalance presents as heaviness, congestion, recurrent allergies, or certain chronic skin/respiratory patterns. Your Ayurvedic doctor will decide suitability after assessment.",
        image:
          // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/vaman2.jpeg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Chronic congestion" },
        { title: "Allergic tendencies" },
        { title: "Heaviness and sluggish digestion" },
        { title: "Kapha-related imbalance" },
        { title: "Recurring respiratory discomfort" },
        { title: "Select chronic skin concerns (as advised)" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Prakriti/Vikriti evaluation before recommending Vamana.",
        },
        {
          title: "Preparation Protocol",
          description: "Snehana/Swedana steps to prepare the body (as advised).",
        },
        {
          title: "Vamana Procedure",
          description: "Supervised session with traditional protocol.",
        },
        {
          title: "Post-Therapy Diet",
          description: "Gradual diet protocol to restore digestive fire.",
        },
        {
          title: "Respiratory & Lifestyle Guidance",
          description: "Kapha-balancing routine support.",
        },
        {
          title: "Maintenance Planning",
          description: "Seasonal and long-term prevention strategies.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Kapha detox support" },
        { title: "Improved sense of lightness" },
        { title: "Respiratory comfort support" },
        { title: "Supports metabolic balance" },
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
          description: "Oleation and sudation steps as advised.",
        },
        {
          title: "Vamana Session",
          description: "Supervised procedure following classical guidelines.",
        },
        {
          title: "Recovery",
          description: "Rest + diet protocol to stabilize digestion.",
        },
        {
          title: "Follow-up",
          description: "Plan review and ongoing lifestyle guidance.",
        },
      ]}
      whyChooseTitle="Why Choose Our Panchakarma Centre"
      whyChoose={[
        {
          title: "Authentic protocols",
          description: "Classical planning with modern hygiene standards.",
        },
        {
          title: "Safety-first approach",
          description: "Suitability checks and supervised care.",
        },
        {
          title: "Guided aftercare",
          description: "Clear diet and recovery guidance.",
        },
        {
          title: "Personalized planning",
          description: "Tailored to constitution and symptoms.",
        },
        {
          title: "Long-term maintenance",
          description: "Kapha-balancing lifestyle strategy.",
        },
      ]}
      faqs={[
        {
          question: "Is Vamana safe?",
          answer:
            "Vamana should only be performed under expert supervision and after suitability checks.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Vamana involves preparation and recovery phases. Your doctor will outline the full schedule.",
        },
        {
          question: "Do I need diet restrictions?",
          answer:
            "Yes—diet is a key part of preparation and recovery.",
        },
        {
          question: "Can it help with allergies and congestion?",
          answer:
            "Many Kapha-related congestion patterns are considered for Vamana, as advised by the doctor.",
        },
        {
          question: "Who should avoid Vamana?",
          answer:
            "Suitability varies. Certain health conditions may not be eligible—consultation is essential.",
        },
      ]}
      cta={{
        title: "Start Your Vamana Therapy Journey",
        description: "Book your consultation at our Panchakarma Centre in Kharadi, Pune.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
