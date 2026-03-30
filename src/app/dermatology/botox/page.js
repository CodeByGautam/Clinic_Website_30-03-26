import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

export const metadata = {
  title: "Botox Treatment in Pune | Healthfusion Multispeciality Clinic",
  description: "Professional Botox injections for wrinkle reduction, anti-aging, and facial rejuvenation. Safe, effective treatments by expert dermatologists in Pune.",
};

export default function BotoxPage() {
  const heroImage = "/BOTOX FILLER.jpeg";

  return (
    <PremiumTreatmentPage
      title="Botox Treatment"
      description="Advanced anti-aging injectable treatment that reduces wrinkles and fine lines, restoring a youthful appearance with natural-looking results."
      heroImage={heroImage}
      understanding={{
        title: "Understanding Botox Treatment",
        description:
          "Botox is a FDA-approved neurotoxin that temporarily relaxes facial muscles to smooth out dynamic wrinkles and fine lines. It's most commonly used on forehead lines, crow's feet, and frown lines between the eyebrows.\n\nThe treatment works by blocking nerve signals to targeted muscles, preventing them from contracting and forming wrinkles. Results typically appear within 3-7 days and can last 3-4 months.",
        image: "/BOTOX FILLER.jpeg",
      }}
      causesTitle="Common Concerns Treated"
      causes={[
        { title: "Forehead wrinkles and lines" },
        { title: "Crow's feet (eye area)" },
        { title: "Frown lines between eyebrows" },
        { title: "Brow lift and shaping" },
        { title: "Excessive sweating (hyperhidrosis)" },
        { title: "Jaw contouring and slimming" },
      ]}
      optionsTitle="Botox Treatment Options"
      options={[
        {
          title: "Traditional Botox",
          description: "Classic wrinkle reduction for facial rejuvenation.",
        },
        {
          title: "Preventive Botox",
          description: "Early treatment to prevent wrinkle formation.",
        },
        {
          title: "Therapeutic Botox",
          description: "Medical treatments for migraines and TMJ disorders.",
        },
        {
          title: "Micro Botox",
          description: "Fine-detailed treatments for delicate areas.",
        },
        {
          title: "Combination Therapy",
          description: "Botox with fillers for comprehensive rejuvenation.",
        },
        {
          title: "Maintenance Plans",
          description: "Regular treatments for sustained results.",
        },
      ]}
      benefitsTitle="Benefits"
      benefits={[
        { title: "Reduced wrinkles and fine lines" },
        { title: "Natural-looking results" },
        { title: "Quick, minimally invasive procedure" },
        { title: "No downtime required" },
        { title: "Prevents new wrinkle formation" },
        { title: "Boosts confidence and appearance" },
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Consultation",
          description: "Assessment of facial anatomy and treatment goals.",
        },
        {
          title: "Treatment Planning",
          description: "Customized injection strategy for optimal results.",
        },
        {
          title: "Preparation",
          description: "Cleansing and optional numbing cream application.",
        },
        {
          title: "Injection Process",
          description: "Precise Botox injections using fine needles.",
        },
        {
          title: "Aftercare Guidance",
          description: "Post-treatment instructions for best results.",
        },
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Expert Injectors",
          description: "Experienced dermatologists specialized in facial aesthetics.",
        },
        {
          title: "Natural Results",
          description: "Focus on subtle, natural-looking enhancements.",
        },
        {
          title: "Premium Quality",
          description: "FDA-approved Botox from certified suppliers.",
        },
        {
          title: "Safety First",
          description: "Strict protocols and sterile environment.",
        },
        {
          title: "Personalized Care",
          description: "Tailored treatments for your unique facial features.",
        },
      ]}
      beforeAfter={{
        beforeImage: "https://placehold.co/1400x900/png?text=Before",
        afterImage: "https://placehold.co/1400x900/png?text=After",
      }}
      faqs={[
        {
          question: "Is Botox treatment safe?",
          answer:
            "Yes, Botox is FDA-approved and has been used safely for decades. When administered by qualified professionals, side effects are minimal and temporary.",
        },
        {
          question: "How long does Botox last?",
          answer:
            "Results typically last 3-4 months. Regular treatments can lead to longer-lasting effects as muscles become trained to relax.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Most patients experience minimal discomfort, similar to a small pinch. The procedure uses very fine needles and takes only 10-15 minutes.",
        },
        {
          question: "When will I see results?",
          answer:
            "Initial effects appear within 3-7 days, with full results visible by day 14. Results continue to improve during this period.",
        },
        {
          question: "Are there any side effects?",
          answer:
            "Minor side effects may include temporary redness, swelling, or bruising at injection sites. These typically resolve within a few hours.",
        },
        {
          question: "Can Botox be combined with other treatments?",
          answer:
            "Yes, Botox works well with dermal fillers, chemical peels, and laser treatments for comprehensive facial rejuvenation.",
        },
      ]}
      cta={{
        title: "Achieve Youthful, Natural-Looking Results",
        description: "Book your Botox consultation with our expert dermatologists today.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" },
      }}
    />
  );
}
