import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Face Fat Reduction | Healthfusion Multispeciality Clinic",
  description: "Non-surgical face fat reduction treatments including fat-dissolving injections and RF technology.",
};

export default function FaceFatReductionPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80";
    "/hifu.jpeg";

  return (
    <PremiumTreatmentPage
      title="Face Fat Reduction"
      description="Non-surgical contouring solutions designed to reduce localized facial fat and improve definition—planned with a natural, balanced aesthetic approach."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Facial Fat & Contour",
        description:
          "Some people develop localized fullness in areas like the double chin, jawline, or lower face due to genetics, weight changes, or lifestyle factors. Modern non-surgical techniques can help improve contour and definition without invasive surgery.\n\nAt Healthfusion, we assess face shape, skin quality, and goals before recommending the most suitable approach.",
        image:
          // "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=2400&q=80",
          "/hifu.jpeg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Double chin / under-chin fullness" },
        { title: "Genetic fat distribution" },
        { title: "Weight fluctuations" },
        { title: "Soft jawline definition" },
        { title: "Lower-face heaviness" },
        { title: "Skin laxity (needs assessment)" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Fat-Dissolving Injections (as advised)",
          description: "Targets localized fat pockets with clinical planning.",
        },
        {
          title: "RF / Energy-Based Contouring",
          description: "Supports tightening and refined contour in suitable cases.",
        },
        {
          title: "Combination Planning",
          description: "May combine modalities depending on fat + skin quality.",
        },
        {
          title: "Jawline Definition Support",
          description: "Focus on facial balance and structure.",
        },
        {
          title: "Lifestyle Guidance",
          description: "Supports long-term maintenance and results.",
        },
        {
          title: "Post-Treatment Aftercare",
          description: "Comfort and swelling management guidance.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Improved jawline definition" },
        { title: "Reduced appearance of double chin" },
        { title: "Non-surgical approach" },
        { title: "Minimal downtime in many cases" },
        { title: "Natural-looking contour" },
        { title: "Personalized planning" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess face shape, fat pockets, and skin quality.",
        },
        {
          title: "Plan Selection",
          description: "We select the best technique based on suitability.",
        },
        {
          title: "Treatment Session",
          description: "Procedure performed with comfort and safety protocols.",
        },
        {
          title: "Aftercare",
          description: "Guidance for swelling and skin support.",
        },
        {
          title: "Follow-up",
          description: "We track progress and plan additional sessions if needed.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Natural contour philosophy",
          description: "Balanced, refined results—never overdone.",
        },
        {
          title: "Expert assessment",
          description: "We evaluate both fat and skin laxity.",
        },
        {
          title: "Premium protocols",
          description: "Clinical hygiene and safety-first practices.",
        },
        {
          title: "Personalized sessions",
          description: "Planned around your face shape and goals.",
        },
        {
          title: "Aftercare support",
          description: "Guidance to support comfort and outcomes.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is face fat reduction permanent?",
          answer:
            "Results can be long-lasting if weight remains stable. Your clinician will explain realistic expectations.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "This depends on the area and technique. Many plans involve multiple sessions.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime is usually minimal, though swelling can occur depending on the approach.",
        },
        {
          question: "Is it painful?",
          answer:
            "Comfort measures are used. Most patients experience mild discomfort rather than significant pain.",
        },
        {
          question: "Can it help with a double chin?",
          answer:
            "Yes, many non-surgical plans target under-chin fullness effectively in suitable candidates.",
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
