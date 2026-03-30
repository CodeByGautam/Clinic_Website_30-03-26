import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Face Microneedling Treatment in Pune | Healthfusion Multispeciality Clinic",
  description: "Advanced microneedling therapy for collagen stimulation, acne scar reduction, and skin rejuvenation. Professional treatments for smoother, radiant skin.",
};

export default function FaceMicroneedlingPage() {
  const heroImage = "/hifu.jpeg";

  return (
    <PremiumTreatmentPage
      title="Face Microneedling"
      description="Advanced collagen-inducing therapy that creates micro-channels in the skin to stimulate natural healing, reduce scars, and improve overall skin texture and tone."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Face Microneedling",
        description:
          "Microneedling is a minimally invasive treatment that uses fine needles to create controlled micro-injuries in the skin. This process stimulates the body's natural wound healing response, triggering collagen and elastin production.\n\nThe treatment effectively addresses various skin concerns including acne scars, fine lines, large pores, and uneven skin texture. As the skin heals, it becomes smoother, firmer, and more youthful-looking.",
        image: "/hifu.jpeg",
      }}
      causesTitle="Common Concerns Addressed"
      causes={[
        { title: "Acne scars and marks" },
        { title: "Fine lines and wrinkles" },
        { title: "Large pores" },
        { title: "Uneven skin texture" },
        { title: "Stretch marks" },
        { title: "Poor skin elasticity" },
      ]}
      optionsTitle="Microneedling Treatment Options"
      options={[
        {
          title: "Traditional Microneedling",
          description: "Standard treatment for overall skin rejuvenation.",
        },
        {
          title: "RF Microneedling",
          description: "Radiofrequency energy for enhanced collagen stimulation.",
        },
        {
          title: "Microneedling with PRP",
          description: "Combined with platelet-rich plasma for accelerated healing.",
        },
        {
          title: "Hydra-Microneedling",
          description: "Infuses serums during treatment for enhanced results.",
        },
        {
          title: "Scar-Specific Microneedling",
          description: "Targeted treatment for deep acne and surgical scars.",
        },
        {
          title: "Maintenance Sessions",
          description: "Regular treatments for sustained skin improvement.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Stimulates natural collagen production" },
        { title: "Reduces acne and surgical scars" },
        { title: "Improves skin texture and tone" },
        { title: "Minimizes pore size" },
        { title: "Enhances product absorption" },
        { title: "Natural, gradual results" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "Skin assessment and treatment planning.",
        },
        {
          title: "Preparation",
          description: "Cleansing and application of numbing cream.",
        },
        {
          title: "Microneedling Treatment",
          description: "Controlled micro-injury creation using advanced device.",
        },
        {
          title: "Serum Application",
          description: "Application of healing and nourishing serums.",
        },
        {
          title: "Aftercare",
          description: "Post-treatment care and recovery guidance.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Advanced Technology",
          description: "Latest microneedling devices for optimal results.",
        },
        {
          title: "Expert Practitioners",
          description: "Skilled professionals trained in advanced techniques.",
        },
        {
          title: "Customized Approach",
          description: "Personalized treatment depth and intensity.",
        },
        {
          title: "Sterile Environment",
          description: "Strict hygiene protocols for safety.",
        },
        {
          title: "Comprehensive Care",
          description: "Complete pre and post-treatment support.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is microneedling painful?",
          answer:
            "Most patients experience minimal discomfort. Numbing cream is applied before treatment to ensure comfort. Sensation is often described as light scratching.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "Typically 3-6 sessions spaced 4-6 weeks apart for optimal results. Maintenance treatments every 6-12 months help sustain benefits.",
        },
        {
          question: "What is the downtime?",
          answer:
            "Redness and mild swelling for 24-48 hours is normal. Skin may appear sunburned but typically returns to normal within 3-5 days.",
        },
        {
          question: "When will I see results?",
          answer:
            "Initial improvements in skin texture within 2-4 weeks. Full collagen remodeling and visible results appear over 2-3 months.",
        },
        {
          question: "Can microneedling help with acne scars?",
          answer:
            "Yes, microneedling is highly effective for atrophic acne scars. It breaks down scar tissue and stimulates new collagen production.",
        },
        {
          question: "Is it safe for all skin types?",
          answer:
            "Microneedling is safe for most skin types. However, those with active acne, eczema, or certain skin conditions may need to wait before treatment.",
        },
      ]}
      cta={{
        title: "Transform Your Skin with Advanced Microneedling",
        description: "Book your consultation for smoother, radiant skin today.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
