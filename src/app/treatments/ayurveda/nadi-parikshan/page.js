import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Nadi Parikshan | Pulse Diagnosis in Ayurveda",
  description: "Ancient Ayurvedic pulse diagnosis to determine your unique constitution, health imbalances, and personalized treatment plan. Expert Nadi Vaidya consultation.",
};

export default function NadiParikshanPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80";
    "/nadiparikshan.png";

  return (
    <PremiumTreatmentPage
      title="Nadi Parikshan"
      description="Ancient Ayurvedic pulse diagnosis to understand your constitution (Prakriti), identify imbalances (Vikriti), and plan a personalized wellness approach."
      heroImage={heroImage}
      heroLabel="Ayurveda Treatments"
      understanding={{
        title: "What is Nadi Parikshan?",
        description:
          "Nadi Parikshan (pulse diagnosis) is one of Ayurveda’s most refined assessment methods. By reading subtle pulse qualities, the Vaidya evaluates dosha balance (Vata, Pitta, Kapha) and identifies patterns that may be contributing to current symptoms.\n\nIt is a non-invasive consultation that supports early detection, root-cause understanding, and personalized planning.",
        image:
          // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80",
          "/nadiparikshan.png",
      }}
      causesTitle="What We Commonly Assess"
      causes={[
        { title: "Dosha balance (Vata / Pitta / Kapha)" },
        { title: "Digestive fire and metabolism patterns" },
        { title: "Stress and sleep patterns" },
        { title: "Seasonal sensitivity / allergies" },
        { title: "Skin and immunity-related patterns" },
        { title: "Lifestyle and routine factors" },
      ]}
      optionsTitle="What Your Consultation May Include"
      options={[
        {
          title: "Pulse Reading",
          description: "Traditional pulse assessment by an Ayurvedic doctor.",
        },
        {
          title: "Prakriti + Vikriti",
          description: "Constitution and current imbalance understanding.",
        },
        {
          title: "Diet Guidance",
          description: "Food recommendations aligned to your dosha.",
        },
        {
          title: "Lifestyle Guidance",
          description: "Sleep, stress, and routine suggestions.",
        },
        {
          title: "Herbal Planning",
          description: "Herb/medicine plan if required.",
        },
        {
          title: "Therapy Recommendations",
          description: "Suitable therapies based on findings.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Non-invasive assessment" },
        { title: "Early imbalance detection" },
        { title: "Root-cause understanding" },
        { title: "Personalized wellness planning" },
        { title: "Holistic evaluation" },
        { title: "Supports preventive care" },
      ]}
      procedureTitle="Your Nadi Parikshan Experience"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We discuss your health concerns, history, and routine.",
        },
        {
          title: "Pulse Reading",
          description: "Pulse assessed in classical positions and depths.",
        },
        {
          title: "Observation",
          description: "Additional observations as needed (tongue, skin, etc.).",
        },
        {
          title: "Personalized Recommendations",
          description: "Diet, lifestyle, and therapy plan based on findings.",
        },
        {
          title: "Follow-up",
          description: "Review progress and adjust plan if needed.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Experienced Ayurvedic doctors",
          description: "Traditional evaluation with a clinical approach.",
        },
        {
          title: "Personalized planning",
          description: "Recommendations based on your constitution.",
        },
        {
          title: "Holistic care",
          description: "Diet, lifestyle, and therapy guidance together.",
        },
        {
          title: "Preventive focus",
          description: "Early imbalance identification and correction.",
        },
        {
          title: "Clear follow-ups",
          description: "Progress review and plan refinement.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Nadi Parikshan painful?",
          answer:
            "No. It is a non-invasive assessment done by pulse reading and observation.",
        },
        {
          question: "How long does the consultation take?",
          answer:
            "Time varies depending on your concerns. We’ll guide you during booking.",
        },
        {
          question: "Do I need any tests?",
          answer:
            "Not always. If needed, the doctor may recommend investigations.",
        },
        {
          question: "Can it help chronic problems?",
          answer:
            "It helps identify underlying patterns and supports personalized planning.",
        },
        {
          question: "What should I bring?",
          answer:
            "If you have previous reports or medication lists, bring them along.",
        },
      ]}
      cta={{
        title: "Book Your Nadi Parikshan Consultation",
        description:
          "Discover your constitution and get a personalized Ayurvedic plan.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
