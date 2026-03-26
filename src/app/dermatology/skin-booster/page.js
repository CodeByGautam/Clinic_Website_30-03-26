import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Skin Booster Treatment | Healthfusion Multispeciality Clinic",
  description: "Skin booster injections with hyaluronic acid for deep hydration, improved elasticity, and radiant glow.",
};

export default function SkinBoosterPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1612810436541-336ad4dc9a96?auto=format&fit=crop&w=2400&q=80";
    "/skin-brightening.jpg";

  return (
    <PremiumTreatmentPage
      title="Skin Booster Treatment"
      description="Deep hydration and skin-quality improvement using micro-injections (as advised) to support elasticity, glow, and a smoother, more refreshed look."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Skin Boosters",
        description:
          "Skin boosters are micro-injections commonly formulated with hyaluronic acid designed to improve hydration and skin quality from within. Unlike dermal fillers (which add volume and shape), skin boosters focus on glow, elasticity, and overall texture improvement.\n\nThey’re often chosen for dehydrated skin, dullness, early fine lines, and rough texture.",
        image:
          // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80",
          "/skin-brightening.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Dehydrated, dull skin" },
        { title: "Loss of elasticity" },
        { title: "Rough texture" },
        { title: "Early fine lines" },
        { title: "Post-treatment glow maintenance" },
        { title: "Tired-looking complexion" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Hydration-Focused Skin Boosters",
          description: "Designed to improve plumpness and hydration.",
        },
        {
          title: "Texture & Elasticity Support",
          description: "Supports smoother texture and firmness over time.",
        },
        {
          title: "Glow Maintenance Protocols",
          description: "Popular for keeping skin fresh and dewy.",
        },
        {
          title: "Combination Planning",
          description: "Can be paired with other treatments as advised.",
        },
        {
          title: "Aftercare & Barrier Support",
          description: "Guidance to protect and maintain results.",
        },
        {
          title: "Maintenance Schedule",
          description: "Personalized plan based on goals and skin type.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Deep hydration and plumpness" },
        { title: "Improved glow and radiance" },
        { title: "Smoother skin texture" },
        { title: "Elasticity support" },
        { title: "Natural-looking results" },
        { title: "Minimal downtime in many cases" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess hydration needs and suitability.",
        },
        {
          title: "Preparation",
          description: "Cleansing and numbing for comfort.",
        },
        {
          title: "Micro-Injections",
          description: "Small injections across targeted areas.",
        },
        {
          title: "Soothing Finish",
          description: "Hydrating aftercare and sun protection guidance.",
        },
        {
          title: "Maintenance",
          description: "Follow-up sessions planned as needed.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Expert planning",
          description: "Treatment selected based on skin goals and safety.",
        },
        {
          title: "Natural glow focus",
          description: "Enhances skin quality without changing features.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe standards and sterile protocols.",
        },
        {
          title: "Premium aftercare",
          description: "Guidance to maintain hydration and results.",
        },
        {
          title: "Personalized plans",
          description: "Sessions tailored to your timeline and needs.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is a skin booster the same as a filler?",
          answer:
            "No. Fillers add shape/volume, while skin boosters primarily improve hydration and skin quality.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Many people do a series, then maintenance. Your clinician will recommend a plan.",
        },
        {
          question: "Is there downtime?",
          answer:
            "You may have small bumps or redness for a short time. Most patients resume routine quickly.",
        },
        {
          question: "When will I see results?",
          answer:
            "Hydration glow can appear early, while skin quality improvements build over sessions.",
        },
        {
          question: "How long do results last?",
          answer:
            "Duration varies by product and skin type. Your doctor will guide realistic timelines.",
        },
      ]}
      cta={{
        title: "Start Your Skin Transformation Today",
        description: "Book your consultation with our expert dermatologists.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
