import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Suvarnaprashan | Ayurvedic Immunization for Children",
  description: "Ancient Ayurvedic pediatric immunization using purified gold and herbs. Boosts immunity, enhances intelligence, and promotes healthy growth in children.",
};

export default function SuvarnaprashanPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=2400&q=80";
    "/suvarnaprashan1.png";

  return (
    <PremiumTreatmentPage
      title="Suvarnaprashan"
      description="An Ayurvedic pediatric wellness and immunization program using purified gold and herbs—designed to support immunity, cognition, and healthy growth in children (as advised)."
      heroImage={heroImage}
      heroLabel="Ayurveda for Children"
      understanding={{
        title: "What is Suvarnaprashan?",
        description:
          "Suvarnaprashan is an Ayurvedic pediatric practice traditionally described as a wellness and immunization protocol for children. It typically uses processed gold (Swarna Bhasma) along with supportive herbs, honey, and ghee in carefully guided doses.\n\nYour Ayurvedic doctor will assess suitability, dosage, schedule, and precautions for your child.",
        image:
          // "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=2400&q=80",
          "/suvarnaprashan1.png",
      }}
      causesTitle="Why Parents Choose Suvarnaprashan"
      causes={[
        { title: "Frequent colds / seasonal infections" },
        { title: "Immunity support" },
        { title: "Appetite and digestion support" },
        { title: "Cognitive development support" },
        { title: "Overall growth and vitality" },
        { title: "Preventive pediatric wellness" },
      ]}
      optionsTitle="Program Approach"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Pediatric assessment by an Ayurvedic doctor.",
        },
        {
          title: "Dose & Schedule Planning",
          description: "Daily or periodic planning based on goals (as advised).",
        },
        {
          title: "Quality & Safety Standards",
          description: "Prepared and administered with safety-first protocols.",
        },
        {
          title: "Diet Guidance",
          description: "Age-appropriate nutrition suggestions.",
        },
        {
          title: "Precaution Guidance",
          description: "When to pause and what to avoid.",
        },
        {
          title: "Follow-up",
          description: "Progress review and adjustments.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Immunity support" },
        { title: "Cognitive and memory support" },
        { title: "Digestive health support" },
        { title: "Healthy growth support" },
        { title: "Traditional preventive care" },
        { title: "Doctor-guided protocol" },
      ]}
      procedureTitle="What to Expect"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess your child’s age, health, and goals.",
        },
        {
          title: "Protocol Selection",
          description: "Dose and schedule planned as advised.",
        },
        {
          title: "Administration",
          description: "Administered with guidance and safety precautions.",
        },
        {
          title: "Home Guidance",
          description: "Diet/routine suggestions for best support.",
        },
        {
          title: "Follow-up",
          description: "Review response and continue planning.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Pediatric Ayurveda guidance",
          description: "Child-focused assessment and planning.",
        },
        {
          title: "Safety-first approach",
          description: "Clear suitability checks and precautions.",
        },
        {
          title: "Authentic protocol",
          description: "Traditional planning with modern standards.",
        },
        {
          title: "Parent-friendly instructions",
          description: "Clear schedule and aftercare guidance.",
        },
        {
          title: "Follow-ups",
          description: "Progress review and adjustments.",
        },
      ]}
      faqs={[
        {
          question: "Is Suvarnaprashan safe?",
          answer:
            "It should be given only under expert guidance with appropriate quality standards and dose planning.",
        },
        {
          question: "Which age group can take it?",
          answer:
            "Suitability depends on age and health. Please consult our doctor for guidance.",
        },
        {
          question: "When should we avoid giving it?",
          answer:
            "During fever/acute illness or as advised. Your doctor will provide precautions.",
        },
        {
          question: "How long should the program continue?",
          answer:
            "Duration depends on goals and response. A plan is made during consultation.",
        },
        {
          question: "Will it replace vaccinations?",
          answer:
            "No. It is a wellness program. Follow your pediatrician’s vaccination schedule.",
        },
      ]}
      cta={{
        title: "Gift Your Child the Foundation of Health",
        description:
          "Book a pediatric Ayurveda consultation and get a guided Suvarnaprashan plan.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
