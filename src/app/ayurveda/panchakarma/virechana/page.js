import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Virechana Therapy Pune | Panchakarma Centre Kharadi",
  description: "Experience authentic Virechana therapy in Pune at our Panchakarma Centre Kharadi. Ayurvedic purgation treatment for skin diseases, liver detox, and Pitta balance. Book your consultation today.",
  keywords: ["Virechana therapy Pune", "Panchakarma Kharadi", "Ayurvedic detox Pune", "purgation therapy", "Ayurveda treatment Kharadi", "liver detox Ayurveda", "skin treatment Pune"],
  alternates: {
    canonical: "/ayurveda/panchakarma/virechana"
  }
};

export default function VirechanaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80";
    "/virechana.jpg";

  return (
    <PremiumTreatmentPage
      title="Virechana Therapy"
      description="Therapeutic purgation therapy (as advised) designed for Pitta detoxification—commonly chosen for liver-gut support, inflammatory patterns, and select chronic skin concerns."
      heroImage={heroImage}
      heroLabel="Panchakarma Centre Kharadi"
      understanding={{
        title: "Understanding Virechana",
        description:
          "Virechana is a classical Panchakarma therapy designed to eliminate excess Pitta dosha through a controlled purgation protocol under medical supervision. It is traditionally considered for inflammatory patterns, digestive imbalance, and certain chronic skin concerns when appropriate.\n\nSuitability and the exact protocol depend on your constitution and symptoms—your Ayurvedic doctor will guide planning.",
        image:
          // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80",
          "/virechana.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Pitta-related imbalance" },
        { title: "Digestive heat / acidity tendencies" },
        { title: "Inflammatory flare-ups" },
        { title: "Chronic skin concerns (as advised)" },
        { title: "Liver-gut support needs" },
        { title: "Lifestyle-related imbalance" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Prakriti/Vikriti evaluation before recommending Virechana.",
        },
        {
          title: "Preparation Protocol",
          description: "Oleation/sudation steps as advised.",
        },
        {
          title: "Virechana Procedure",
          description: "Supervised purgation therapy with classical protocol.",
        },
        {
          title: "Post-Therapy Diet",
          description: "Diet protocol to restore digestive fire and stability.",
        },
        {
          title: "Skin & Lifestyle Guidance",
          description: "Supportive routine and diet planning.",
        },
        {
          title: "Maintenance Strategy",
          description: "Long-term Pitta balancing guidance.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Pitta detox support" },
        { title: "Gut-liver support" },
        { title: "Supports inflammatory balance" },
        { title: "May support chronic skin concerns" },
        { title: "Personalized protocol" },
        { title: "Aftercare and maintenance guidance" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We assess constitution, symptoms, and suitability.",
        },
        {
          title: "Preparation",
          description: "Preparatory steps as advised by your doctor.",
        },
        {
          title: "Virechana Session",
          description: "Supervised protocol in a controlled setting.",
        },
        {
          title: "Recovery",
          description: "Diet + rest guidance to stabilize digestion.",
        },
        {
          title: "Follow-up",
          description: "Review and long-term maintenance planning.",
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
          description: "Pitta-balancing lifestyle strategy.",
        },
      ]}
      faqs={[
        {
          question: "Is Virechana safe?",
          answer:
            "Virechana should be performed only under expert supervision and after suitability checks.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Virechana includes preparation and recovery phases. Your doctor will outline the full schedule.",
        },
        {
          question: "Do I need diet restrictions?",
          answer:
            "Yes—diet is a key part of preparation and recovery.",
        },
        {
          question: "Can it help with skin concerns?",
          answer:
            "Some chronic skin patterns are considered for Virechana as part of a holistic plan, as advised.",
        },
        {
          question: "Who should avoid Virechana?",
          answer:
            "Suitability varies. Certain health conditions may not be eligible—consultation is essential.",
        },
      ]}
      cta={{
        title: "Start Your Virechana Therapy Journey",
        description: "Book your consultation at our Panchakarma Centre in Kharadi, Pune.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
