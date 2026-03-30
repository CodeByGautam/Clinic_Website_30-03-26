import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Prakriti Parikshan | Constitution Analysis in Ayurveda",
  description: "Discover your unique Ayurvedic constitution (Prakriti) through comprehensive analysis. Understand your body type for personalized wellness and disease prevention.",
};

export default function PrakritiParikshanPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80";
    "/prakriti.jpeg";

  return (
    <PremiumTreatmentPage
      title="Prakriti Parikshan"
      description="Comprehensive constitution analysis to discover your unique dosha makeup (Vata, Pitta, Kapha) and get personalized diet and lifestyle guidance for long-term wellness."
      heroImage={heroImage}
      heroLabel="Ayurveda Treatments"
      understanding={{
        title: "What is Prakriti Parikshan?",
        description:
          "Prakriti Parikshan is the assessment of your inborn constitution. In Ayurveda, each person has a unique combination of doshas that influences physical traits, digestion, sleep patterns, stress response, and disease tendencies.\n\nKnowing your Prakriti helps build a truly personalized routine—diet, exercise, and lifestyle—so you can maintain balance and prevent recurring issues.",
        image:
          // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80",
          "/prakriti.jpeg",
      }}
      causesTitle="What We Evaluate"
      causes={[
        { title: "Body frame and physical traits" },
        { title: "Digestive patterns and appetite" },
        { title: "Sleep quality and routine" },
        { title: "Stress response and mental tendencies" },
        { title: "Skin and hair characteristics" },
        { title: "Lifestyle and daily habits" },
      ]}
      optionsTitle="What Your Analysis May Include"
      options={[
        {
          title: "Questionnaire + Interview",
          description: "Lifestyle, habits, and health history.",
        },
        {
          title: "Physical Observation",
          description: "Body traits, skin/hair, digestion patterns.",
        },
        {
          title: "Pulse / Tongue (if advised)",
          description: "Traditional tools to support the assessment.",
        },
        {
          title: "Diet Plan",
          description: "Foods aligned to your constitution.",
        },
        {
          title: "Lifestyle Guidance",
          description: "Sleep, exercise, stress, and daily routine.",
        },
        {
          title: "Therapy Planning",
          description: "Recommended therapies if needed.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Personalized wellness" },
        { title: "Better digestion and energy" },
        { title: "Improved sleep routine" },
        { title: "Stress management support" },
        { title: "Preventive care" },
        { title: "Long-term balance" },
      ]}
      procedureTitle="How It Works"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We understand your goals, history, and symptoms.",
        },
        {
          title: "Assessment",
          description: "Questionnaire + observation of constitution markers.",
        },
        {
          title: "Optional Traditional Checks",
          description: "Pulse/tongue checks if advised by the doctor.",
        },
        {
          title: "Personalized Plan",
          description: "Diet, lifestyle, and therapy recommendations.",
        },
        {
          title: "Follow-up",
          description: "Plan review and adjustment based on response.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Personalized approach",
          description: "Plans designed around your constitution.",
        },
        {
          title: "Holistic guidance",
          description: "Diet + lifestyle + therapies, not just medicines.",
        },
        {
          title: "Clinical standards",
          description: "Modern hygiene and patient-first protocols.",
        },
        {
          title: "Preventive focus",
          description: "Reduce recurrence by correcting imbalances.",
        },
        {
          title: "Clear follow-ups",
          description: "Guidance over time for long-term results.",
        },
      ]}
      faqs={[
        {
          question: "Is Prakriti fixed for life?",
          answer:
            "Prakriti is your inborn constitution. Your current imbalance (Vikriti) can change with lifestyle and environment.",
        },
        {
          question: "How long does the assessment take?",
          answer:
            "It depends on the depth of evaluation and your concerns.",
        },
        {
          question: "Will I get a diet plan?",
          answer:
            "Yes, dietary and lifestyle guidance is a key part of Prakriti understanding.",
        },
        {
          question: "Can this help with chronic issues?",
          answer:
            "Understanding constitution helps personalize care and reduce recurrence patterns.",
        },
        {
          question: "Do I need any tests?",
          answer:
            "Not always. Tests may be advised if needed.",
        },
      ]}
      cta={{
        title: "Discover Your True Nature",
        description:
          "Book your Prakriti Parikshan and get a personalized wellness plan.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
