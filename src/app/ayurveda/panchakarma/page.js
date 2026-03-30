import TreatmentHero from "@/components/TreatmentHero";
import TreatmentProcess from "@/components/TreatmentProcess";
import TreatmentFAQ from "@/components/TreatmentFAQ";
import TreatmentCTA from "@/components/TreatmentCTA";
import TreatmentGrid from "@/components/TreatmentGrid";

export const metadata = {
  title: "Panchakarma Therapy | Ayurvedic Detox Treatment",
  description: "Experience authentic Panchakarma detox therapy - the ultimate Ayurvedic treatment to cleanse your body, remove toxins, and restore balance between the three doshas.",
};

export default function PanchakarmaPage() {
  const steps = [
    {
      title: "Consultation with Ayurvedic Doctor",
      description: "Detailed assessment of your constitution, health condition, and personalized treatment plan."
    },
    {
      title: "Body Preparation with Herbal Oils",
      description: "Internal and external oleation therapy to loosen toxins and prepare the body for detoxification."
    },
    {
      title: "Main Panchakarma Therapy",
      description: "Administration of specific Panchakarma procedure based on your dosha imbalance and health needs."
    },
    {
      title: "Post Therapy Recovery",
      description: "Special diet and rest protocol to restore digestive fire and maintain the benefits of therapy."
    }
  ];

  const faqs = [
    {
      question: "Is Panchakarma safe?",
      answer: "Yes, when performed by experienced Ayurvedic practitioners under proper medical supervision, Panchakarma is completely safe. It has been practiced for thousands of years with proven therapeutic benefits."
    },
    {
      question: "How many sessions are required?",
      answer: "The number of sessions varies based on individual health conditions. Typically, a complete Panchakarma program ranges from 7 to 21 days. Your Ayurvedic doctor will recommend the ideal duration after consultation."
    },
    {
      question: "Who should take Panchakarma therapy?",
      answer: "Panchakarma is beneficial for anyone looking to detoxify their body, boost immunity, improve digestion, and restore overall health. It is especially recommended for those with chronic health conditions, stress, or dosha imbalances."
    },
    {
      question: "Are there any side effects?",
      answer: "Panchakarma is a natural therapy with minimal side effects. Some patients may experience temporary fatigue or mild discomfort during the detoxification process, which resolves quickly with proper rest and diet."
    }
  ];

  const therapies = [
    {
      title: "Vamana",
      description: "Therapeutic vomiting therapy to eliminate excess Kapha toxins from the upper digestive tract.",
      img: "/Gallery/vaman2.jpeg",
      href: "/ayurveda/panchakarma/vamana"
    },
    {
      title: "Virechana",
      description: "Purgation therapy to remove Pitta toxins from the liver, gallbladder, and intestines.",
      img: "/virechana.jpg",
      href: "/ayurveda/panchakarma/virechana"
    },
    {
      title: "Basti",
      description: "Medicated enema therapy to cleanse the colon and balance Vata dosha.",
      img: "/Gallery/BASTI.jpg",
      href: "/ayurveda/panchakarma/basti"
    },
    {
      title: "Nasya",
      description: "Nasal administration therapy to clear sinuses and treat head-neck disorders.",
      img: "/nasya.jpg",
      href: "/ayurveda/panchakarma/nasya"
    },
    {
      title: "Raktamokshana",
      description: "Bloodletting therapy to remove impure blood and treat blood-related disorders.",
      img: "/Gallery/raktamokshan.png",
      href: "/ayurveda/panchakarma/raktamokshana"
    },
    {
      title: "Kati Basti",
      description: "Specialized lower back therapy where warm medicated oil is retained to relieve pain and strengthen spine muscles.",
      img: "/KATIBASTI.jpeg",
      href: "/ayurveda/panchakarma/kati-basti"
    },
    {
      title: "Greeva Basti",
      description: "Ayurvedic neck therapy where warm herbal oil is retained over the cervical region to reduce stiffness and pain.",
      img: "/GREEVABASTI.jpeg",
      href: "/ayurveda/panchakarma/greeva-basti"
    },
    {
      title: "Janu Basti",
      description: "Specialized knee joint therapy where warm medicated oil is applied and retained to relieve pain and strengthen joints.",
      img: "/JANUBASTI .jpeg",
      href: "/ayurveda/panchakarma/janu-basti"
    },
    {
      title: "Shirodhara",
      description: "Forehead oil flow therapy for mental relaxation and neurological conditions.",
      img: "/shirodhara3.jpg",
      href: "/ayurveda/panchakarma/shirodhara"
    }
    
  ];

  return (
    <main className="min-h-screen bg-white">
      <TreatmentHero
        title="Panchakarma Detox Therapy"
        subtitle="Traditional Ayurvedic detoxification treatment"
        description="Panchakarma is a powerful Ayurvedic detoxification therapy designed to cleanse the body of accumulated toxins and restore balance between the three doshas – Vata, Pitta and Kapha."
      />

      

      <TreatmentGrid treatments={therapies} />

      <TreatmentProcess steps={steps} />

      <TreatmentFAQ faqs={faqs} />

      <TreatmentCTA />
    </main>
  );
}
