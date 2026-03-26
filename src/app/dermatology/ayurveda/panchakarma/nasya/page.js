import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Nasya Therapy Pune | Panchakarma Centre Kharadi",
  description: "Experience authentic Nasya therapy in Pune at our Panchakarma Centre Kharadi. Ayurvedic nasal treatment for sinusitis, migraines, allergies, and head-neck disorders. Book your consultation today.",
  keywords: ["Nasya therapy Pune", "Panchakarma Kharadi", "Ayurvedic nasal treatment", "sinus treatment Pune", "migraine Ayurveda", "allergy treatment Pune", "Ayurveda clinic Kharadi"],
  alternates: {
    canonical: "/dermatology/ayurveda/panchakarma/nasya"
  }
};

export default function NasyaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/Nasya-1.jpg";

  return (
    <PremiumTreatmentPage
      title="Nasya Therapy"
      description="Ayurvedic nasal therapy (as advised) designed for head–neck wellness—commonly chosen for sinus congestion, allergies, headaches, and clarity support under Panchakarma guidance."
      heroImage={heroImage}
      heroLabel="Panchakarma Centre Kharadi"
      understanding={{
        title: "Understanding Nasya",
        description:
          "Nasya is a classical Panchakarma procedure that involves administration of medicated oils, herbal juices, or powders through the nasal passage. In Ayurveda, the nose is considered the gateway to the head region, and Nasya is traditionally used for head–neck concerns including sinus congestion, headaches, and certain Kapha/Vata imbalances.\n\nThe exact type of Nasya (cleansing vs nourishing) is selected based on your constitution and symptoms.",
        image:
          // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/Nasya-1.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Sinus congestion" },
        { title: "Allergic rhinitis" },
        { title: "Head heaviness" },
        { title: "Recurring headaches" },
        { title: "Kapha/Vata imbalance in head region" },
        { title: "Need for head–neck wellness support" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Prakriti/Vikriti evaluation and therapy selection.",
        },
        {
          title: "Shamana Nasya (as advised)",
          description: "Calming protocols for suitable conditions.",
        },
        {
          title: "Pradhamana Nasya (as advised)",
          description: "Cleansing protocols for suitable Kapha patterns.",
        },
        {
          title: "Bruhana Nasya (as advised)",
          description: "Nourishing protocols for suitable Vata patterns.",
        },
        {
          title: "Aftercare Guidance",
          description: "Post-procedure routine and precautions.",
        },
        {
          title: "Maintenance Strategy",
          description: "Seasonal planning to reduce recurrence.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Sinus comfort support" },
        { title: "Head–neck wellness support" },
        { title: "Clarity and lightness" },
        { title: "Allergy/congestion support" },
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
          description: "Comfort measures and preparatory steps.",
        },
        {
          title: "Nasya Session",
          description: "Therapy performed under supervised protocol.",
        },
        {
          title: "Aftercare",
          description: "Guidance on rest, diet, and precautions.",
        },
        {
          title: "Follow-up",
          description: "Review response and plan further sessions.",
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
          title: "Personalized selection",
          description: "Nasya type chosen based on constitution and concern.",
        },
        {
          title: "Aftercare guidance",
          description: "Clear steps to protect results.",
        },
        {
          title: "Maintenance planning",
          description: "Seasonal strategy to reduce recurrence.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Nasya safe?",
          answer:
            "Nasya should be performed only under expert supervision and after suitability checks.",
        },
        {
          question: "Does it help with sinusitis?",
          answer:
            "Nasya is traditionally used for sinus and head–neck concerns. Your doctor will guide suitability.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "Protocols vary. Your doctor will recommend a plan after assessment.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime is usually minimal, but aftercare and precautions are important.",
        },
        {
          question: "What precautions should I take after Nasya?",
          answer:
            "Your doctor will provide specific guidance on rest, diet, and exposure to wind/cold.",
        },
      ]}
      cta={{
        title: "Start Your Nasya Therapy Journey",
        description: "Book your consultation at our Panchakarma Centre in Kharadi, Pune.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
