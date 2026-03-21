import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Freckles Treatment | Healthfusion Multispeciality Clinic",
  description: "Effective freckles removal and reduction treatments at Healthfusion Clinic using advanced laser and light-based therapies.",
};

export default function FrecklesTreatmentPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/FILLER TREATMENT.jpeg";

  return (
    <PremiumTreatmentPage
      title="Freckles Treatment"
      description="Dermatologist-guided pigmentation reduction plans to fade freckles, improve clarity, and maintain an even-looking complexion with safe protocols."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Freckles",
        description:
          "Freckles are small, concentrated spots of melanin that commonly appear on sun-exposed areas. They are harmless, but many people choose treatment to reduce their appearance and improve overall tone uniformity.\n\nOur approach focuses on controlling pigmentation triggers, using targeted procedures, and building a long-term maintenance and sunscreen routine to reduce recurrence.",
        image:
          // "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/FILLER TREATMENT.jpeg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Sun exposure and UV damage" },
        { title: "Genetic tendency" },
        { title: "Pigmentation sensitivity" },
        { title: "Uneven tone on face/arms" },
        { title: "Freckles darkening in summer" },
        { title: "Lack of consistent sunscreen" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Laser Pigmentation Reduction",
          description: "Targets melanin clusters for visible freckle fading.",
        },
        {
          title: "IPL / Light Therapy",
          description: "Helps improve tone uniformity and sun spots.",
        },
        {
          title: "Medical Peels",
          description: "Controlled exfoliation for brightness and clarity.",
        },
        {
          title: "Dermatologist Skincare Plan",
          description: "Pigmentation-safe actives to support results.",
        },
        {
          title: "Barrier Support",
          description: "Reduces sensitivity and irritation-related pigmentation.",
        },
        {
          title: "Sun Protection Strategy",
          description: "Prevents freckles from darkening and returning.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Reduced appearance of freckles" },
        { title: "More even-looking tone" },
        { title: "Brighter complexion" },
        { title: "Improved confidence without makeup" },
        { title: "Better long-term pigmentation control" },
        { title: "Customized plan for your skin type" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess freckles vs other pigmentation patterns.",
        },
        {
          title: "Skin & Sun History",
          description: "We identify triggers and sun exposure patterns.",
        },
        {
          title: "Treatment Selection",
          description: "Laser/light/peels chosen based on suitability.",
        },
        {
          title: "Sessions",
          description: "Performed with safe settings and aftercare guidance.",
        },
        {
          title: "Maintenance",
          description: "Skincare + sunscreen to prevent recurrence.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Dermatologist-led pigmentation care",
          description: "Safe plans for Indian skin tones and sensitivity.",
        },
        {
          title: "Advanced technology",
          description: "Modern devices for targeted pigmentation reduction.",
        },
        {
          title: "Personalized protocols",
          description: "Treatments selected for your pigmentation type.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe clinical standards and clean environment.",
        },
        {
          title: "Aftercare support",
          description: "Clear steps to maintain results long-term.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is freckles treatment safe?",
          answer:
            "Yes, when performed with correct settings and dermatologist guidance.",
        },
        {
          question: "How many sessions are required?",
          answer:
            "It depends on depth and density. Many patients need multiple sessions for best results.",
        },
        {
          question: "Will freckles come back?",
          answer:
            "They can re-darken with sun exposure. Sunscreen and maintenance care are essential.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Most treatments have minimal downtime. Mild redness may occur and settles quickly.",
        },
        {
          question: "Can I treat freckles and pigmentation together?",
          answer:
            "Yes. Your plan can address freckles, tan, and spots as needed.",
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
