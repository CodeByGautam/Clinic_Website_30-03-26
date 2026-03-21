import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Hydrafacial Treatment | Healthfusion Multispeciality Clinic",
  description: "Experience the ultimate Hydrafacial treatment at Healthfusion. Deep cleansing, exfoliation, and hydration for glowing, radiant skin.",
};

export default function HydrafacialPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1612810436541-336ad4dc9a96?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/HYDRAFACIAL.jpeg";

  return (
    <PremiumTreatmentPage
      title="Hydrafacial Treatment"
      description="A premium, no-downtime facial that cleanses, exfoliates, extracts, and deeply hydrates—leaving your skin instantly smoother and more radiant."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Hydrafacial",
        description:
          "Hydrafacial is a non-invasive skin resurfacing treatment that combines cleansing, exfoliation, gentle extraction, hydration, and antioxidant infusion in a single session. It improves skin clarity and glow without the downtime commonly associated with harsher procedures.\n\nIt’s ideal for congested pores, dullness, uneven tone, and dehydrated skin, and can be customized to your concerns.",
        image:
          // "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/HYDRAFACIAL.jpeg",
      }}
      causesTitle="Common Concerns It Targets"
      causes={[
        { title: "Dullness and dehydration" },
        { title: "Congested pores" },
        { title: "Blackheads / whiteheads" },
        { title: "Uneven tone" },
        { title: "Fine lines (hydration support)" },
        { title: "Oily or combination skin" },
      ]}
      optionsTitle="Hydrafacial Options"
      options={[
        {
          title: "Deep Cleansing + Exfoliation",
          description: "Improves texture and removes surface build-up for clarity.",
        },
        {
          title: "Gentle Extraction",
          description: "Helps clear congestion and blackheads comfortably.",
        },
        {
          title: "Hydration Infusion",
          description: "Serums and hyaluronic hydration for plumpness and glow.",
        },
        {
          title: "Glow Boost Add-ons",
          description: "Customization for brightness, soothing, or oil control.",
        },
        {
          title: "Pre-Event Radiance Session",
          description: "A popular choice for instant glow before special occasions.",
        },
        {
          title: "Maintenance Plan",
          description: "Monthly sessions to maintain long-term skin health.",
        },
      ]}
      benefitsTitle="Benefits of Hydrafacial"
      benefits={[
        { title: "Instant glow and smoother texture" },
        { title: "Deeper hydration and plumpness" },
        { title: "Cleaner-looking pores" },
        { title: "Balanced oil and clarity" },
        { title: "Comfortable, no downtime" },
        { title: "Suitable for many skin types" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We understand skin concerns and customize the session.",
        },
        {
          title: "Cleanse & Exfoliate",
          description: "Removes surface buildup and prepares skin.",
        },
        {
          title: "Extract",
          description: "Gentle suction-based extraction for congestion.",
        },
        {
          title: "Hydrate & Infuse",
          description: "Antioxidants and hydration are delivered into the skin.",
        },
        {
          title: "Protect",
          description: "Aftercare includes hydration and sun protection guidance.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Dermatologist-supervised care",
          description: "Appropriate customization for your skin.",
        },
        {
          title: "Premium hygiene standards",
          description: "Safe and clean clinical environment.",
        },
        {
          title: "Customized protocols",
          description: "Focused on glow + barrier-friendly results.",
        },
        {
          title: "Comfort-first sessions",
          description: "Gentle process suitable for busy routines.",
        },
        {
          title: "Long-term skin health",
          description: "We guide homecare to maintain results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How long does a Hydrafacial session take?",
          answer:
            "Most sessions take about 30–45 minutes, depending on customization.",
        },
        {
          question: "Is there downtime?",
          answer:
            "No—most people resume normal activities immediately.",
        },
        {
          question: "How often should I do it?",
          answer:
            "Many patients choose monthly sessions for maintenance; frequency depends on goals and skin type.",
        },
        {
          question: "Is it suitable for sensitive skin?",
          answer:
            "Hydrafacial can be customized for sensitive skin with gentle settings and soothing options.",
        },
        {
          question: "Can I do it before an event?",
          answer:
            "Yes—Hydrafacial is popular as a pre-event glow treatment due to instant radiance.",
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
