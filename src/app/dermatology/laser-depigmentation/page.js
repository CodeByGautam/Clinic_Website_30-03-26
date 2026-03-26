import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Laser De-Pigmentation | Healthfusion Multispeciality Clinic",
  description: "Advanced laser treatment for pigmentation removal, dark spots, and uneven skin tone.",
};

export default function LaserDepigmentationPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80";

    "/Gallery/pigmentationlaser.jpeg";
    
  return (
    <PremiumTreatmentPage
      title="Laser De-Pigmentation"
      description="Advanced laser protocols designed to target excess melanin, reduce uneven tone, and refine overall clarity—planned carefully for safety and natural-looking results."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Pigmentation",
        description:
          "Pigmentation can appear as dark spots, melasma, sun damage, or uneven tone. It happens when melanin is produced or deposited unevenly due to genetics, hormones, UV exposure, inflammation, or previous acne.\n\nLaser de-pigmentation uses targeted energy to address pigmented areas while protecting surrounding skin—treatment selection depends on pigmentation type and skin sensitivity.",
        image:
          // "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/pigmentationlaser.jpeg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Sun damage and tanning" },
        { title: "Melasma (hormonal pigmentation)" },
        { title: "Post-acne marks (PIH)" },
        { title: "Freckles and dark spots" },
        { title: "Uneven skin tone" },
        { title: "Inflammation-related pigmentation" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Laser Spot Treatment",
          description: "Targets localized dark spots and freckles.",
        },
        {
          title: "Melasma-Safe Protocols",
          description: "Careful planning for sensitive pigmentation patterns.",
        },
        {
          title: "Combination Therapy",
          description: "May combine laser with peels/topicals as advised.",
        },
        {
          title: "Barrier + Aftercare",
          description: "Skincare plan to reduce irritation and recurrence.",
        },
        {
          title: "Sun Protection Guidance",
          description: "Essential for maintaining results.",
        },
        {
          title: "Maintenance Planning",
          description: "Long-term strategy for recurring pigmentation.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Reduced dark spots" },
        { title: "Improved overall tone" },
        { title: "Brighter-looking skin" },
        { title: "Precision targeting" },
        { title: "Minimal downtime in many cases" },
        { title: "Personalized protocols" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Skin Analysis",
          description: "We identify pigmentation type and suitability.",
        },
        {
          title: "Preparation",
          description: "Cleansing and comfort measures as needed.",
        },
        {
          title: "Laser Session",
          description: "Targeted treatment performed with safe settings.",
        },
        {
          title: "Aftercare",
          description: "Soothing skincare + strict sunscreen advice.",
        },
        {
          title: "Follow-up",
          description: "We track improvement and plan next sessions.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Skin-type aware planning",
          description: "Settings adjusted for safety and sensitivity.",
        },
        {
          title: "Premium protocols",
          description: "Clinical hygiene and precise laser delivery.",
        },
        {
          title: "Natural results focus",
          description: "Gradual refinement rather than harsh over-treatment.",
        },
        {
          title: "Aftercare guidance",
          description: "Skincare + sun protection to maintain results.",
        },
        {
          title: "Combination expertise",
          description: "Laser + topical/peel planning when appropriate.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How many sessions will I need?",
          answer:
            "It depends on the type and depth of pigmentation. We recommend a plan after assessment.",
        },
        {
          question: "Is laser safe for Indian skin?",
          answer:
            "With correct settings and aftercare, laser can be planned safely. Suitability varies case to case.",
        },
        {
          question: "Will pigmentation come back?",
          answer:
            "Some patterns can recur. Maintenance and sunscreen are essential.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime is usually minimal, but mild redness or temporary darkening may occur.",
        },
        {
          question: "Can I combine laser with creams or peels?",
          answer:
            "Often yes. Your dermatologist will guide safe combinations.",
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
