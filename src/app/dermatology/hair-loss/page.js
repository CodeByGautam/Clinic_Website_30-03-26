import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Hair Loss Treatment | Healthfusion Multispeciality Clinic",
  description: "Comprehensive hair loss solutions including PRP, GFC, medications, and advanced therapies.",
};

export default function HairLossPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/hairprpmicroniddling.jpeg";

  return (
    <PremiumTreatmentPage
      title="Hair Loss Treatment"
      description="A comprehensive, dermatologist-led approach to identify the cause of hair fall and build a premium treatment plan using medical therapy, regenerative options, and long-term maintenance."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Hair Loss",
        description:
          "Hair loss can be triggered by genetics, hormonal imbalance, nutritional deficiencies, stress, medical conditions, and scalp inflammation. Different patterns (androgenetic alopecia, telogen effluvium, alopecia areata) require different treatment strategies.\n\nOur clinic focuses on root-cause diagnosis, measurable tracking, and a combined plan that supports reduced shedding and improved density over time.",
        image:
          // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/hairprpmicroniddling.jpeg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Genetic pattern baldness" },
        { title: "Hormonal changes" },
        { title: "Stress-related shedding" },
        { title: "Nutritional deficiencies" },
        { title: "Post-illness hair fall" },
        { title: "Scalp inflammation" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Medical Therapy",
          description: "Topical/oral treatments as advised based on diagnosis.",
        },
        {
          title: "PRP Hair Therapy",
          description: "Regenerative support for follicle stimulation.",
        },
        {
          title: "GFC Treatment",
          description: "Advanced growth-factor concentrate options for suitable cases.",
        },
        {
          title: "Low-Level Laser Support",
          description: "Adjunct therapy for scalp stimulation when advised.",
        },
        {
          title: "Nutritional & Lifestyle Guidance",
          description: "Sustainable changes to support hair health.",
        },
        {
          title: "Hair Transplant Planning",
          description: "For advanced loss when a permanent solution is needed.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Reduced hair fall with consistent protocol" },
        { title: "Improved hair thickness and density" },
        { title: "Better scalp health" },
        { title: "Personalized plan based on diagnosis" },
        { title: "Progress tracking and adjustments" },
        { title: "Long-term maintenance strategy" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Diagnosis",
          description: "We identify the pattern and likely root causes.",
        },
        {
          title: "Plan Design",
          description: "We combine therapies and home routine.",
        },
        {
          title: "Treatment",
          description: "In-clinic sessions and medications as advised.",
        },
        {
          title: "Monitoring",
          description: "Regular follow-ups and plan refinements.",
        },
        {
          title: "Maintenance",
          description: "Long-term care to reduce recurrence.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Root-cause approach",
          description: "Treats triggers and patterns, not just hair fall.",
        },
        {
          title: "Modern therapies",
          description: "Access to regenerative and advanced options.",
        },
        {
          title: "Personalized protocols",
          description: "Plans tailored to your gender, age, and condition.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe clinical standards.",
        },
        {
          title: "Progress tracking",
          description: "We measure and optimize over time.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "What is the best treatment for hair loss?",
          answer:
            "It depends on the cause. We recommend a plan after diagnosis.",
        },
        {
          question: "How long does it take to see results?",
          answer:
            "Hair growth cycles take time. Many patients see visible improvement over months.",
        },
        {
          question: "Do I need blood tests?",
          answer:
            "Sometimes. If nutritional or hormonal triggers are suspected, tests may be recommended.",
        },
        {
          question: "Will the plan include medicines?",
          answer:
            "If appropriate, yes. Medical therapy can be part of many effective protocols.",
        },
        {
          question: "Can stress cause hair fall?",
          answer:
            "Yes. Stress can trigger shedding, and addressing it can improve outcomes.",
        },
      ]}
      cta={{
        title: "Start Your Hair Transformation Today",
        description: "Book your consultation with our hair & scalp experts.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
