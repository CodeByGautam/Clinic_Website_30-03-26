import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Hair Microneedling Treatment in Pune | Healthfusion Multispeciality Clinic",
  description: "Advanced microneedling therapy for hair growth stimulation, scalp health improvement, and hair loss treatment. Professional solutions for thicker, healthier hair.",
};

export default function HairMicroneedlingPage() {
  const heroImage = "/hair microneedling.jpg";

  return (
    <PremiumTreatmentPage
      title="Hair Microneedling"
      description="Innovative scalp treatment that creates micro-channels to stimulate hair follicles, enhance blood circulation, and promote natural hair growth for thicker, fuller hair."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Hair Microneedling",
        description:
          "Hair microneedling is a specialized treatment that uses fine needles to create controlled micro-injuries on the scalp. This process stimulates the body's natural healing response, increasing blood flow to hair follicles and activating dormant follicles.\n\nThe treatment creates pathways for growth factors and nutrients to penetrate deeper into the scalp, while also stimulating collagen production and stem cell activation. This comprehensive approach addresses multiple factors contributing to hair loss and thinning.",
        image: "/hair microneedling.jpg",
      }}
      causesTitle="Hair Concerns Treated"
      causes={[
        { title: "Androgenetic alopecia (pattern baldness)" },
        { title: "Thinning hair" },
        { title: "Weak hair follicles" },
        { title: "Poor scalp circulation" },
        { title: "Hair breakage" },
        { title: "Slow hair growth" },
      ]}
      optionsTitle="Hair Microneedling Options"
      options={[
        {
          title: "Traditional Scalp Microneedling",
          description: "Standard treatment for overall hair stimulation.",
        },
        {
          title: "Microneedling with PRP",
          description: "Combined with platelet-rich plasma for enhanced growth.",
        },
        {
          title: "Microneedling with Growth Factors",
          description: "Enhanced with specialized growth factor serums.",
        },
        {
          title: "RF Hair Microneedling",
          description: "Radiofrequency energy for deeper follicle stimulation.",
        },
        {
          title: "Hair Loss Protocol",
          description: "Comprehensive treatment for advanced hair loss.",
        },
        {
          title: "Maintenance Program",
          description: "Regular sessions for sustained hair health.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Stimulates dormant hair follicles" },
        { title: "Increases blood circulation to scalp" },
        { title: "Enhances nutrient absorption" },
        { title: "Strengthens existing hair" },
        { title: "Reduces hair shedding" },
        { title: "Promotes thicker, fuller hair" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Scalp Analysis",
          description: "Comprehensive scalp and hair assessment.",
        },
        {
          title: "Treatment Planning",
          description: "Customized microneedling protocol for your needs.",
        },
        {
          title: "Preparation",
          description: "Scalp cleansing and preparation of treatment area.",
        },
        {
          title: "Microneedling Treatment",
          description: "Precise micro-channel creation on scalp.",
        },
        {
          title: "Growth Serum Application",
          description: "Application of specialized hair growth serums.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Hair Specialists",
          description: "Experts focused specifically on hair restoration.",
        },
        {
          title: "Advanced Technology",
          description: "Latest microneedling devices for hair treatment.",
        },
        {
          title: "Medical Approach",
          description: "Scientifically-based hair restoration protocols.",
        },
        {
          title: "Comprehensive Care",
          description: "Complete hair and scalp health management.",
        },
        {
          title: "Proven Results",
          description: "Track record of successful hair restoration.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is hair microneedling painful?",
          answer:
            "Most patients experience minimal discomfort. The scalp is less sensitive than facial skin, and numbing options are available if needed.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "Typically 6-8 sessions spaced 2-4 weeks apart for optimal results. Maintenance treatments every 3-4 months help sustain hair growth.",
        },
        {
          question: "When will I see results?",
          answer:
            "Initial reduction in hair shedding within 4-6 weeks. New hair growth typically visible after 3-4 months of consistent treatment.",
        },
        {
          question: "Can it be combined with other hair treatments?",
          answer:
            "Yes! Hair microneedling works excellently with PRP therapy, minoxidil, and other hair restoration treatments for enhanced results.",
        },
        {
          question: "Is it safe for all hair types?",
          answer:
            "Hair microneedling is safe for all hair types and textures. Our specialists customize treatment based on your specific hair and scalp condition.",
        },
        {
          question: "What's the downtime?",
          answer:
            "Minimal downtime. Some redness may occur for 24-48 hours. Most patients return to normal activities immediately after treatment.",
        },
      ]}
      cta={{
        title: "Revitalize Your Hair with Advanced Microneedling",
        description: "Book your consultation for thicker, fuller hair today.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
