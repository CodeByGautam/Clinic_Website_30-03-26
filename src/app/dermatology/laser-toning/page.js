import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Face Toning Treatment | Healthfusion Multispeciality Clinic",
  description: "Facial muscle toning treatments using EMS and microcurrent technology for lifted, firm skin.",
};

export default function FaceToningPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=2400&q=80";
     "/skin-clean.webp"
  return (
    <PremiumTreatmentPage
      title="Laser Toning"
      description="A premium, non-invasive toning experience designed to support facial lift, improved contours, and a firmer look using microcurrent/EMS-style technologies (as advised)."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Laser Toning",
        description:
          "Face toning uses controlled stimulation (such as microcurrent or EMS-style technologies) to activate facial muscles and support circulation. The goal is a naturally lifted appearance, improved contour, and support for collagen and skin firmness.\n\nIt’s often chosen for early sagging, tired-looking features, and those wanting a non-invasive glow + lift experience.",
        image:
          // "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=2400&q=80",
          "/skin-clean.webp",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Early sagging" },
        { title: "Soft jawline definition" },
        { title: "Tired-looking face" },
        { title: "Dullness and low circulation" },
        { title: "Loss of firmness" },
        { title: "Preventive anti-ageing support" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Microcurrent Toning",
          description: "Gentle current-based lifting and contour support.",
        },
        {
          title: "EMS-Based Toning (as advised)",
          description: "Stronger muscle activation depending on suitability.",
        },
        {
          title: "Glow + Hydration Finish",
          description: "Soothing finish with barrier-friendly skincare.",
        },
        {
          title: "Contour-Focused Sessions",
          description: "Targets cheeks, jawline, and lower face definition.",
        },
        {
          title: "Maintenance Plans",
          description: "Regular sessions for sustained lift and firmness.",
        },
        {
          title: "Combination Planning",
          description: "Can be combined with other procedures as advised.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Naturally lifted look" },
        { title: "Improved facial contours" },
        { title: "Supports firmness" },
        { title: "Better circulation and glow" },
        { title: "No downtime" },
        { title: "Comfort-focused experience" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "We assess goals and suitability.",
        },
        {
          title: "Cleansing & Prep",
          description: "Skin is cleansed; conductive gel applied.",
        },
        {
          title: "Toning Session",
          description: "Device-based stimulation performed with comfort focus.",
        },
        {
          title: "Finishing",
          description: "Serums, moisturizer, and sun protection guidance.",
        },
        {
          title: "Maintenance",
          description: "Plan sessions to maintain lift and firmness.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Premium experience",
          description: "Comfort-first sessions with professional care.",
        },
        {
          title: "Customized protocols",
          description: "Settings tailored to your goals and skin.",
        },
        {
          title: "Hygiene-first clinic",
          description: "Safe, clean clinical standards.",
        },
        {
          title: "Balanced aesthetics",
          description: "Natural-looking lift and contour support.",
        },
        {
          title: "Aftercare guidance",
          description: "Recommendations to maintain results.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is face toning painful?",
          answer:
            "It is usually comfortable. You may feel mild tingling or muscle activation depending on the setting.",
        },
        {
          question: "How many sessions are needed?",
          answer:
            "Many people do a series of sessions, then maintenance. Your clinician will recommend a plan.",
        },
        {
          question: "Is there downtime?",
          answer:
            "No—most patients return to routine immediately.",
        },
        {
          question: "When will I see results?",
          answer:
            "Some people feel an immediate lift, while cumulative results build with multiple sessions.",
        },
        {
          question: "Can it replace a facelift?",
          answer:
            "It supports tone and lift, but it is not a surgical facelift replacement. We guide realistic outcomes.",
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
