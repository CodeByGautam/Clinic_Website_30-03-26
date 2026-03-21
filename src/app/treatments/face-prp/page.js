import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Face PRP Treatment | Healthfusion Multispeciality Clinic",
  description: "Platelet-Rich Plasma therapy for facial rejuvenation, skin tightening, and natural glow at Healthfusion Clinic.",
};

export default function FacePRPPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/prpfacialtreat .jpeg";

  return (
    <PremiumTreatmentPage
      title="Face PRP"
      description="A natural, dermatologist-guided rejuvenation treatment that supports collagen and skin quality—using your body’s own growth factors for a refreshed, healthy glow."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Face PRP",
        description:
          "Platelet-Rich Plasma (PRP) therapy uses a small sample of your blood to concentrate platelets rich in growth factors. PRP is then applied or injected into targeted areas to support collagen stimulation and skin rejuvenation.\n\nIt’s commonly chosen for improving skin texture, early fine lines, dullness, and overall skin quality, with a natural approach.",
        image:
          // "https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/prpfacialtreat .jpeg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Dullness and uneven texture" },
        { title: "Early fine lines" },
        { title: "Acne marks (support)" },
        { title: "Tired-looking under-eyes" },
        { title: "Loss of skin firmness" },
        { title: "Dehydrated, stressed skin" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Full Face Rejuvenation",
          description: "Supports overall glow and improved skin quality.",
        },
        {
          title: "Under-Eye Support",
          description: "For tired appearance and hollowness support.",
        },
        {
          title: "Texture Improvement",
          description: "Can support smoother texture and refined pores.",
        },
        {
          title: "PRP + Microneedling (as advised)",
          description: "Combination approach for enhanced skin remodeling.",
        },
        {
          title: "Maintenance Plans",
          description: "Session planning for sustained results.",
        },
        {
          title: "Homecare Guidance",
          description: "Barrier repair and sun protection support.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Natural approach using your own plasma" },
        { title: "Improved glow and skin quality" },
        { title: "Supports collagen stimulation" },
        { title: "Texture and tone support" },
        { title: "Minimal downtime for many patients" },
        { title: "Personalized planning" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess goals and suitability.",
        },
        {
          title: "Blood Draw",
          description: "A small blood sample is collected.",
        },
        {
          title: "PRP Preparation",
          description: "Centrifuge separates platelet-rich plasma.",
        },
        {
          title: "Application / Injection",
          description: "PRP is used in targeted areas with safe protocols.",
        },
        {
          title: "Aftercare",
          description: "Soothing care and guidance for best recovery.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Dermatologist-guided planning",
          description: "Customized approach based on your skin goals.",
        },
        {
          title: "Safety-first protocols",
          description: "Hygienic clinic standards and careful procedure steps.",
        },
        {
          title: "Natural-looking results",
          description: "Supports a refreshed look without overcorrection.",
        },
        {
          title: "Premium aftercare",
          description: "Guidance to support comfort and outcomes.",
        },
        {
          title: "Combination planning",
          description: "Options to combine with other treatments if advised.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is PRP safe?",
          answer:
            "PRP uses your own blood components, which generally reduces allergy risk. Suitability is confirmed during consultation.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "Many patients do a series of sessions. Your dermatologist will recommend a plan based on goals.",
        },
        {
          question: "When will I see results?",
          answer:
            "Glow may be noticed earlier, while collagen changes develop gradually over weeks.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Mild redness or swelling can occur. Most patients return to routine quickly with aftercare.",
        },
        {
          question: "Can PRP be combined with other treatments?",
          answer:
            "Yes. It can be paired with microneedling or other procedures when advised.",
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
