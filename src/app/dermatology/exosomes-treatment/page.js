import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Exosomes Treatment in Pune | Healthfusion Multispeciality Clinic",
  description: "Advanced regenerative exosomes therapy for skin rejuvenation, anti-aging, and cellular repair. Cutting-edge treatment for youthful, radiant skin.",
};

export default function ExosomesTreatmentPage() {
  const heroImage = "/hifu.jpeg";

  return (
    <PremiumTreatmentPage
      title="Exosomes Treatment"
      description="Revolutionary regenerative therapy harnessing the power of exosomes to accelerate skin healing, stimulate cellular renewal, and deliver unmatched anti-aging results."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Exosomes Treatment",
        description:
          "Exosomes are microscopic vesicles that contain growth factors, proteins, and genetic material essential for cell communication and regeneration. When applied to the skin, they deliver powerful signals that stimulate natural healing and rejuvenation processes.\n\nThis cutting-edge therapy represents the frontier of regenerative medicine, offering superior results compared to traditional treatments by working at the cellular level to repair and renew skin tissue from within.",
        image: "/hifu.jpeg",
      }}
      causesTitle="Conditions Treated"
      causes={[
        { title: "Advanced skin aging" },
        { title: "Loss of skin elasticity" },
        { title: "Dull, tired complexion" },
        { title: "Poor skin texture" },
        { title: "Slow healing skin" },
        { title: "Environmental damage" },
      ]}
      optionsTitle="Exosomes Treatment Options"
      options={[
        {
          title: "Standalone Exosomes Therapy",
          description: "Pure exosome treatment for maximum regenerative effects.",
        },
        {
          title: "Exosomes with Microneedling",
          description: "Enhanced delivery through micro-channels for deeper penetration.",
        },
        {
          title: "Exosomes with Laser",
          description: "Combined with laser treatments for accelerated healing.",
        },
        {
          title: "Exosomes with PRP",
          description: "Synergistic combination for enhanced regenerative power.",
        },
        {
          title: "Anti-Aging Protocol",
          description: "Comprehensive treatment targeting multiple aging signs.",
        },
        {
          title: "Maintenance Program",
          description: "Ongoing treatments for sustained cellular health.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Accelerated cellular regeneration" },
        { title: "Enhanced collagen and elastin production" },
        { title: "Reduced inflammation and redness" },
        { title: "Improved skin texture and tone" },
        { title: "Faster healing and recovery" },
        { title: "Long-lasting anti-aging results" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Cellular Assessment",
          description: "Advanced skin analysis and cellular health evaluation.",
        },
        {
          title: "Treatment Planning",
          description: "Customized exosomes protocol for your skin needs.",
        },
        {
          title: "Preparation",
          description: "Cleansing and preparation of treatment area.",
        },
        {
          title: "Exosomes Application",
          description: "Professional application using advanced delivery methods.",
        },
        {
          title: "Cellular Activation",
          description: "Post-treatment care to enhance regenerative effects.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Cutting-Edge Technology",
          description: "Latest exosomes formulations and delivery systems.",
        },
        {
          title: "Medical Expertise",
          description: "Specialists trained in regenerative medicine.",
        },
        {
          title: "Premium Quality",
          description: "Medical-grade exosomes from certified sources.",
        },
        {
          title: "Innovative Protocols",
          description: "Advanced treatment combinations for optimal results.",
        },
        {
          title: "Cellular Focus",
          description: "Treatments targeting skin health at the cellular level.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "What are exosomes in skin treatment?",
          answer:
            "Exosomes are tiny vesicles containing growth factors and proteins that communicate between cells, promoting healing and regeneration when applied to skin.",
        },
        {
          question: "How soon will I see results?",
          answer:
            "Initial improvements in skin texture and radiance within 1-2 weeks. Full regenerative effects develop over 4-8 weeks as cellular renewal progresses.",
        },
        {
          question: "Is exosomes treatment safe?",
          answer:
            "Yes, exosomes therapy is very safe as it uses natural cellular messengers. The treatment is non-invasive with minimal side effects.",
        },
        {
          question: "How long do results last?",
          answer:
            "Results can last 6-12 months as the treatment works at the cellular level. Maintenance treatments help sustain benefits.",
        },
        {
          question: "Can exosomes be combined with other treatments?",
          answer:
            "Absolutely! Exosomes enhance results when combined with microneedling, laser treatments, and other rejuvenation procedures.",
        },
        {
          question: "Who is ideal for exosomes treatment?",
          answer:
            "Perfect for those seeking advanced anti-aging, skin rejuvenation, or enhanced healing. Ideal for all skin types and ages.",
        },
      ]}
      cta={{
        title: "Experience Revolutionary Skin Regeneration",
        description: "Discover the future of skin rejuvenation with exosomes therapy.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
