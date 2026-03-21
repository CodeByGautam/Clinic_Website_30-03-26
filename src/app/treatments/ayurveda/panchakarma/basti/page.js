import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Basti Therapy Pune | Panchakarma Centre Kharadi",
  description: "Experience authentic Basti therapy in Pune at our Panchakarma Centre Kharadi. Ayurvedic medicated enema treatment for Vata balance, joint pain, and colon cleansing. Book your consultation today.",
  keywords: ["Basti therapy Pune", "Panchakarma Kharadi", "Ayurvedic enema Pune", "Vata treatment", "joint pain Ayurveda", "colon cleanse Pune", "Ayurveda clinic Kharadi"],
  alternates: {
    canonical: "/treatments/ayurveda/panchakarma/basti"
  }
};

export default function BastiPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/BASTI.jpg";

  return (
    <PremiumTreatmentPage
      title="Basti Therapy"
      description="Medicated enema therapy (as advised) designed to support Vata balance, colon cleansing, and joint-digestive wellness—planned under expert Panchakarma guidance."
      heroImage={heroImage}
      heroLabel="Panchakarma Centre Kharadi"
      understanding={{
        title: "Understanding Basti",
        description:
          "Basti is a classical Panchakarma therapy focused on balancing Vata dosha. It involves administration of medicated oils or herbal decoctions via a controlled, supervised protocol. Basti is traditionally considered for Vata-related patterns such as constipation, dryness, certain joint pains, and nervous-system imbalance—when suitable.\n\nYour Ayurvedic doctor will advise the type (oil vs decoction) and schedule based on your constitution and symptoms.",
        image:
          // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/BASTI.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Constipation / irregular bowel movements" },
        { title: "Joint pain and stiffness" },
        { title: "Lower back discomfort" },
        { title: "Dryness and Vata imbalance" },
        { title: "Digestive weakness" },
        { title: "Vata-related lifestyle imbalance" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Prakriti/Vikriti evaluation before recommending Basti.",
        },
        {
          title: "Oil Basti (Anuvasana)",
          description: "Nourishing protocol used in suitable Vata patterns.",
        },
        {
          title: "Decoction Basti (Niruha)",
          description: "Cleansing protocol used as advised.",
        },
        {
          title: "Preparation Steps",
          description: "Supportive preparation as guided by the doctor.",
        },
        {
          title: "Diet & Routine",
          description: "Vata-balancing nutrition and lifestyle guidance.",
        },
        {
          title: "Maintenance Strategy",
          description: "Long-term plan to support stability.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Supports Vata balance" },
        { title: "Colon cleansing support" },
        { title: "Joint-digestive wellness support" },
        { title: "Improved routine regularity" },
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
          description: "Supportive preparation steps as advised.",
        },
        {
          title: "Basti Session",
          description: "Supervised therapy following classical protocol.",
        },
        {
          title: "Recovery",
          description: "Diet + rest guidance to support results.",
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
          description: "Vata-balancing lifestyle strategy.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Basti therapy safe?",
          answer:
            "Basti should be performed only under expert supervision and after suitability checks.",
        },
        {
          question: "Which type of Basti will I need?",
          answer:
            "It depends on your constitution and symptoms. Your doctor will recommend the protocol.",
        },
        {
          question: "Do I need diet restrictions?",
          answer:
            "Yes—diet is an important part of preparation and recovery.",
        },
        {
          question: "Can Basti help with joint pain?",
          answer:
            "Basti is traditionally considered for Vata-related joint stiffness and pain patterns, as advised by the doctor.",
        },
        {
          question: "How many sessions are required?",
          answer:
            "Protocols vary. Your doctor will provide a schedule after assessment.",
        },
      ]}
      cta={{
        title: "Start Your Basti Therapy Journey",
        description: "Book your consultation at our Panchakarma Centre in Kharadi, Pune.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
