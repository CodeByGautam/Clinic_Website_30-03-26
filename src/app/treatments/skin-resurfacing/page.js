import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Skin Resurfacing Treatment | Healthfusion Multispeciality Clinic",
  description: "Advanced skin resurfacing treatments at Healthfusion Multispeciality Clinic. Improve skin texture, reduce scars, and rejuvenate your skin.",
};

export default function SkinResurfacingPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/skinresurfacing.jpeg";
    
  return (
    <PremiumTreatmentPage
      title="Skin Resurfacing Treatment"
      description="Premium resurfacing protocols designed to refine texture, smooth acne scars, reduce visible pores, and reveal a fresher-looking complexion—planned safely for your skin type."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Skin Resurfacing",
        description:
          "Skin resurfacing focuses on improving texture by encouraging controlled renewal of the skin surface. It is commonly used for acne scars, enlarged pores, fine lines, sun damage, and uneven texture.\n\nTreatment choice depends on skin type, downtime preference, scar depth, and sensitivity.",
        image:
          // "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/skinresurfacing.jpeg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Acne scars" },
        { title: "Uneven texture" },
        { title: "Large pores" },
        { title: "Fine lines" },
        { title: "Sun damage" },
        { title: "Dull skin" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Fractional Laser",
          description: "Supports scar and texture improvement with controlled resurfacing.",
        },
        {
          title: "CO2 Laser (as advised)",
          description: "For deeper resurfacing needs with planned downtime.",
        },
        {
          title: "Microneedling / MNRF (as advised)",
          description: "Collagen support for scars and pores.",
        },
        {
          title: "Combination Planning",
          description: "May combine laser + peels/topicals for better outcomes.",
        },
        {
          title: "Soothing Aftercare",
          description: "Barrier repair guidance for safe healing.",
        },
        {
          title: "Maintenance Strategy",
          description: "Long-term plan for texture and glow.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Smoother texture" },
        { title: "Refined appearance of scars" },
        { title: "Reduced appearance of pores" },
        { title: "Brighter, fresher look" },
        { title: "Improved skincare absorption" },
        { title: "Customized downtime options" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We evaluate scar depth, texture, and skin type.",
        },
        {
          title: "Preparation",
          description: "Cleansing and numbing where needed.",
        },
        {
          title: "Resurfacing Session",
          description: "Laser/microneedling performed with safe parameters.",
        },
        {
          title: "Aftercare",
          description: "Soothing routine + strict sun protection guidance.",
        },
        {
          title: "Follow-up",
          description: "We monitor healing and plan next sessions.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Skin-type aware protocols",
          description: "Planned to reduce irritation and PIH risk.",
        },
        {
          title: "Premium devices & care",
          description: "Modern technology with professional standards.",
        },
        {
          title: "Natural results focus",
          description: "Gradual improvement with safe healing.",
        },
        {
          title: "Aftercare guidance",
          description: "Barrier support to protect results.",
        },
        {
          title: "Combination expertise",
          description: "When needed, we plan complementary therapies.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is resurfacing safe for sensitive skin?",
          answer:
            "Suitability depends on your skin type and concern. We plan the safest option after assessment.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "It depends on scar depth and goals. Many plans involve multiple sessions.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Downtime varies by technique. We’ll recommend an option that fits your schedule.",
        },
        {
          question: "When will I see results?",
          answer:
            "Some glow can appear early, while scar and texture improvements build over time.",
        },
        {
          question: "Do I need sunscreen after resurfacing?",
          answer:
            "Yes—strict sun protection is essential to protect healing skin and maintain results.",
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
