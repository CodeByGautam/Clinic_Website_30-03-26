import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Shirodhara Therapy Pune | Panchakarma Centre Kharadi",
  description: "Experience authentic Shirodhara therapy in Pune at our Panchakarma Centre Kharadi. Ayurvedic forehead oil flow treatment for stress relief, insomnia, anxiety, and neurological wellness. Book your consultation today.",
  keywords: ["Shirodhara therapy Pune", "Panchakarma Kharadi", "Ayurvedic stress treatment", "insomnia cure Pune", "anxiety treatment Ayurveda", "mind relaxation Pune", "Ayurveda clinic Kharadi"],
  alternates: {
    canonical: "/treatments/ayurveda/panchakarma/shirodhara"
  }
};

export default function ShirodharaPage() {
  const heroImage =
    // "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=2400&q=80";

    "/shirodhara3.jpg";
  return (
    <PremiumTreatmentPage
      title="Shirodhara Therapy"
      description="A premium Ayurvedic relaxation therapy where warm medicated oil is gently streamed on the forehead—commonly chosen for stress relief, sleep support, and nervous system balance (as advised)."
      heroImage={heroImage}
      heroLabel="Panchakarma Centre Kharadi"
      understanding={{
        title: "Understanding Shirodhara",
        description:
          "Shirodhara is a classical Ayurvedic therapy where a continuous stream of warm medicated oil is gently poured on the forehead region. It is traditionally used to calm aggravated Vata, support sleep quality, and promote deep relaxation.\n\nOil selection and session planning depend on constitution and goals—your Ayurvedic doctor will guide the protocol.",
        image:
          // "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=2400&q=80",
          "/shirodhara3.jpg",
      }}
      causesTitle="Common Concerns / Symptoms"
      causes={[
        { title: "Stress and mental fatigue" },
        { title: "Poor sleep quality" },
        { title: "Anxiety tendencies" },
        { title: "Head heaviness" },
        { title: "Vata/Pitta imbalance patterns" },
        { title: "Need for relaxation and reset" },
      ]}
      optionsTitle="Treatment Options"
      options={[
        {
          title: "Consultation + Suitability",
          description: "Prakriti/Vikriti evaluation and protocol selection.",
        },
        {
          title: "Oil Selection",
          description: "Medicated oil selected based on constitution.",
        },
        {
          title: "Shirodhara Session",
          description: "Comfort-focused session with controlled temperature and flow.",
        },
        {
          title: "Supportive Therapies",
          description: "May be combined with massage/relaxation therapies as advised.",
        },
        {
          title: "Aftercare Guidance",
          description: "Rest and routine guidance after sessions.",
        },
        {
          title: "Maintenance Planning",
          description: "Series planning for sustained benefits.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Deep relaxation" },
        { title: "Sleep support" },
        { title: "Stress relief" },
        { title: "Nervous system balance support" },
        { title: "Improved clarity and calm" },
        { title: "Personalized protocol" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Assessment",
          description: "We assess constitution and wellness goals.",
        },
        {
          title: "Preparation",
          description: "Comfort measures and gentle prep.",
        },
        {
          title: "Shirodhara",
          description: "Warm oil streamed with controlled flow.",
        },
        {
          title: "Rest & Recovery",
          description: "Rest guidance and post-session care.",
        },
        {
          title: "Follow-up",
          description: "Series planning and long-term routine guidance.",
        },
      ]}
      whyChooseTitle="Why Choose Our Panchakarma Centre"
      whyChoose={[
        {
          title: "Comfort-focused care",
          description: "Premium, calming environment.",
        },
        {
          title: "Authentic protocols",
          description: "Classical planning with modern hygiene standards.",
        },
        {
          title: "Personalized oil selection",
          description: "Chosen based on constitution and goals.",
        },
        {
          title: "Aftercare guidance",
          description: "Clear steps to sustain relaxation benefits.",
        },
        {
          title: "Maintenance planning",
          description: "Series scheduling for lasting outcomes.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "How long does a session take?",
          answer:
            "Session duration varies by protocol. Your doctor will guide session length and series.",
        },
        {
          question: "Is Shirodhara safe?",
          answer:
            "Yes when planned properly and performed by trained therapists under supervision.",
        },
        {
          question: "Does it help with sleep?",
          answer:
            "Shirodhara is commonly used for relaxation and sleep support, as advised.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "Some people feel benefit early; sustained outcomes may need a series of sessions.",
        },
        {
          question: "Can I wash hair immediately after?",
          answer:
            "Your therapist will guide post-session care and timing.",
        },
      ]}
      cta={{
        title: "Start Your Shirodhara Therapy Journey",
        description: "Book your consultation at our Panchakarma Centre in Kharadi, Pune.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
