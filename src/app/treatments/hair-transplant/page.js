import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Hair Transplant | Healthfusion Multispeciality Clinic",
  description: "FUE and FUT hair transplant procedures for permanent hair restoration solutions.",
};

export default function HairTransplantPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=2400&q=80";
    "/Gallery/hairtransplant2.jpeg";

  return (
    <PremiumTreatmentPage
      title="Hair Transplant"
      description="A permanent hair restoration solution planned with precision for natural hairline design, high graft survival, and a premium, safety-first surgical experience."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Hair Transplant",
        description:
          "Hair transplant is a surgical procedure that relocates healthy hair follicles from a donor area (usually the back of the scalp) to thinning or balding areas. It is designed for long-term, natural-looking restoration when planned correctly.\n\nAt Healthfusion, we focus on hairline aesthetics, graft planning, and safe surgical protocols to achieve refined results.",
        image:
          // "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2400&q=80",
          "/Gallery/hairtransplant2.jpeg",
      }}
      causesTitle="Common Causes / Symptoms"
      causes={[
        { title: "Male/female pattern baldness" },
        { title: "Receding hairline" },
        { title: "Crown thinning" },
        { title: "Low hair density" },
        { title: "Stable hair loss (suitability check)" },
        { title: "Desire for permanent restoration" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "FUE (Follicular Unit Extraction)",
          description: "Individual graft extraction for minimal scarring and refined healing.",
        },
        {
          title: "FUT (Follicular Unit Transplantation)",
          description: "Strip method when higher graft count is needed in suitable cases.",
        },
        {
          title: "Hairline Design",
          description: "Aesthetic planning for natural front hairline and temples.",
        },
        {
          title: "Density Planning",
          description: "Graft distribution planned for balanced coverage.",
        },
        {
          title: "Medical Therapy Support",
          description: "Pre/post care to support existing hair and maintenance.",
        },
        {
          title: "Aftercare Program",
          description: "Wash schedule, medications, and follow-up guidance.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Permanent hair restoration" },
        { title: "Natural-looking hairline" },
        { title: "Improved confidence" },
        { title: "Long-term results with maintenance" },
        { title: "Custom density and design" },
        { title: "Expert-guided aftercare" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "Hair analysis, donor assessment, and graft estimation.",
        },
        {
          title: "Design",
          description: "Hairline design and recipient area planning.",
        },
        {
          title: "Procedure",
          description: "Graft extraction and implantation under safe protocols.",
        },
        {
          title: "Recovery",
          description: "Healing guidance, medications, and wash schedule.",
        },
        {
          title: "Follow-up",
          description: "Growth tracking and maintenance planning.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Aesthetic hairline design",
          description: "Natural-looking planning based on face structure.",
        },
        {
          title: "Precision graft planning",
          description: "Balanced density and donor preservation.",
        },
        {
          title: "Safety-first surgery",
          description: "Hygiene and clinical standards.",
        },
        {
          title: "Premium aftercare",
          description: "Clear steps for healing and long-term success.",
        },
        {
          title: "Long-term strategy",
          description: "Maintenance planning for existing hair.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Which technique is better—FUE or FUT?",
          answer:
            "It depends on donor area, graft requirement, and goals. We recommend the best method after evaluation.",
        },
        {
          question: "When will I see growth?",
          answer:
            "New growth typically becomes noticeable over months; final results take longer.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Local anesthesia is used. Discomfort is usually mild and managed with aftercare.",
        },
        {
          question: "Is there downtime?",
          answer:
            "You will need a recovery period. Your doctor will provide a detailed schedule.",
        },
        {
          question: "Are results permanent?",
          answer:
            "Transplanted hair is typically long-lasting, but existing hair may continue to thin. Maintenance is important.",
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
