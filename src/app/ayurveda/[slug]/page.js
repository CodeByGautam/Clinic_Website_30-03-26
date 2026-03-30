import { notFound } from "next/navigation";
import PremiumTreatmentPage from "@/components/PremiumTreatmentPage";

// Ayurveda treatment data
const ayurvedaTreatments = {
  "nadi-parikshan": {
    title: "Nadi Parikshan",
    description: "Ancient pulse diagnosis technique for comprehensive health assessment and personalized Ayurvedic treatment planning.",
    heroImage: "/nadiparikshan.png",
    understanding: {
      title: "Understanding Nadi Parikshan",
      description: "Nadi Parikshan is a traditional Ayurvedic diagnostic method where experienced practitioners assess your health by reading the pulse. This ancient technique provides deep insights into your body's constitution, imbalances, and overall health status.\n\nThrough careful pulse examination, our experts can identify dosha imbalances, detect potential health issues, and recommend personalized Ayurvedic treatments for optimal wellness.",
      image: "/nadiparikshan.png"
    },
    causesTitle: "Health Conditions Assessed"
  },
  "prakriti-parikshan": {
    title: "Prakriti Parikshan",
    description: "Constitutional analysis to determine your unique body type and personalize Ayurvedic treatments for optimal health.",
    heroImage: "/prakriti.jpeg",
    understanding: {
      title: "Understanding Prakriti Parikshan",
      description: "Prakriti Parikshan is a comprehensive assessment of your unique body constitution based on Ayurvedic principles. This analysis helps determine your dominant dosha (Vata, Pitta, or Kapha) and provides insights into your physical, mental, and emotional characteristics.\n\nUnderstanding your Prakriti enables our practitioners to recommend personalized diet, lifestyle, and treatment plans that align with your natural constitution for optimal health and wellness.",
      image: "/prakriti.jpeg"
    },
    causesTitle: "Constitutional Factors"
  },
  "agnikarma": {
    title: "Agnikarma",
    description: "Thermal therapy using controlled heat for pain relief and treating various musculoskeletal conditions in Ayurveda.",
    heroImage: "/Gallery/agnikarma.jpeg",
    understanding: {
      title: "Understanding Agnikarma",
      description: "Agnikarma is an ancient Ayurvedic therapeutic procedure that uses controlled heat to treat various health conditions. This specialized technique involves applying thermal energy to specific points on the body to relieve pain, reduce inflammation, and promote healing.\n\nOur experienced practitioners use traditional Agnikarma methods combined with modern safety protocols to provide effective relief from chronic pain, joint disorders, and musculoskeletal conditions.",
      image: "/Gallery/agnikarma.jpeg"
    },
    causesTitle: "Conditions Treated"
  },
  "viddhakarma": {
    title: "Viddhakarma",
    description: "Traditional bloodletting therapy for detoxification and treating specific health conditions through controlled therapeutic blood removal.",
    heroImage: "/Viddhakarma2.jpg",
    understanding: {
      title: "Understanding Viddhakarma",
      description: "Viddhakarma is a specialized Ayurvedic therapeutic procedure involving controlled bloodletting for therapeutic purposes. This ancient technique is used to detoxify the body, remove impurities from the bloodstream, and treat specific health conditions.\n\nPerformed by experienced practitioners using sterile, modern techniques, Viddhakarma helps in managing various skin disorders, blood-related conditions, and systemic toxicity following strict Ayurvedic protocols.",
      image: "/Viddhakarma2.jpg"
    },
    causesTitle: "Therapeutic Applications"
  },
  "suvarnaprashan": {
    title: "Suvarnaprashan",
    description: "Gold-based Ayurvedic immunization therapy for children to enhance immunity, intelligence, and overall development.",
    heroImage: "/suvarnaprashan1.png",
    understanding: {
      title: "Understanding Suvarnaprashan",
      description: "Suvarnaprashan is a traditional Ayurvedic immunization therapy that uses processed gold bhasma along with other medicinal herbs. This unique therapy is specifically designed for children to boost immunity, enhance cognitive development, and promote overall growth.\n\nAdministered in specific doses according to traditional Ayurvedic guidelines, Suvarnaprashan helps build natural immunity, improves memory and concentration, and supports healthy physical and mental development in children.",
      image: "/suvarnaprashan1.png"
    },
    causesTitle: "Developmental Benefits"
  },
  "panchakarma": {
    title: "Panchakarma",
    description: "Comprehensive detoxification and rejuvenation therapy using five primary purification procedures for optimal health.",
    heroImage: "/Gallery/vaman2.jpeg",
    understanding: {
      title: "Understanding Panchakarma",
      description: "Panchakarma is the cornerstone of Ayurvedic detoxification and rejuvenation therapy. This comprehensive purification process involves five primary procedures - Vamana, Virechana, Basti, Nasya, and Raktamokshana - designed to remove toxins from the body and restore balance.\n\nOur Panchakarma programs are personalized based on your body constitution and health needs. The therapy helps eliminate deep-seated toxins, strengthen the immune system, and promote overall wellness through traditional Ayurvedic methods.",
      image: "/Gallery/vaman2.jpeg"
    },
    causesTitle: "Purification Benefits"
  }
};

export async function generateMetadata({ params }) {
  const treatment = ayurvedaTreatments[params.slug];
  
  if (!treatment) {
    return {
      title: "Ayurvedic Treatment Not Found | Healthfusion Clinic",
      description: "The requested Ayurvedic treatment could not be found.",
    };
  }

  return {
    title: `${treatment.title} | Ayurvedic Treatment in Pune | Healthfusion`,
    description: treatment.description,
    keywords: `${treatment.title}, Ayurvedic treatment, Pune, Healthfusion Clinic`,
  };
}

export default function AyurvedaTreatmentPage({ params }) {
  const treatment = ayurvedaTreatments[params.slug];

  if (!treatment) {
    notFound();
  }

  return (
    <PremiumTreatmentPage
      title={treatment.title}
      description={treatment.description}
      heroImage={treatment.heroImage}
      understanding={treatment.understanding}
      causesTitle={treatment.causesTitle}
      causes={[
        { title: "Dosha imbalances" },
        { title: "Toxin accumulation" },
        { title: "Weak immunity" },
        { title: "Stress and anxiety" },
        { title: "Poor digestion" },
        { title: "Lifestyle disorders" }
      ]}
      optionsTitle="Ayurvedic Treatment Options"
      options={[
        {
          title: "Traditional Therapy",
          description: "Authentic Ayurvedic procedures as described in ancient texts."
        },
        {
          title: "Herbal Medicines",
          description: "Natural herbal formulations for internal healing."
        },
        {
          title: "Diet Therapy",
          description: "Personalized diet plans based on your constitution."
        },
        {
          title: "Lifestyle Guidance",
          description: "Daily and seasonal routines for optimal health."
        },
        {
          title: "Yoga & Meditation",
          description: "Mind-body practices for holistic wellness."
        },
        {
          title: "Maintenance Programs",
          description: "Ongoing support for sustained health benefits."
        }
      ]}
      benefitsTitle="Ayurvedic Benefits"
      benefits={[
        { title: "Natural and safe treatments" },
        { title: "Holistic approach to health" },
        { title: "Personalized care plans" },
        { title: "No side effects" },
        { title: "Long-lasting results" },
        { title: "Improves overall wellness" }
      ]}
      procedureTitle="Treatment Procedure"
      procedureSteps={[
        {
          title: "Initial Consultation",
          description: "Comprehensive health assessment and diagnosis."
        },
        {
          title: "Constitution Analysis",
          description: "Detailed Prakriti and Vikriti evaluation."
        },
        {
          title: "Treatment Planning",
          description: "Personalized Ayurvedic treatment protocol."
        },
        {
          title: "Therapy Sessions",
          description: "Traditional Ayurvedic procedures."
        },
        {
          title: "Follow-up Care",
          description: "Ongoing monitoring and adjustments."
        }
      ]}
      whyChooseTitle="Why Choose Healthfusion"
      whyChoose={[
        {
          title: "Authentic Ayurveda",
          description: "Traditional treatments following ancient texts."
        },
        {
          title: "Experienced Practitioners",
          description: "Qualified Ayurvedic doctors and therapists."
        },
        {
          title: "Modern Facilities",
          description: "Clean, hygienic treatment environment."
        },
        {
          title: "Personalized Care",
          description: "Individual attention and treatment plans."
        },
        {
          title: "Quality Herbs",
          description: "Genuine medicinal herbs and formulations."
        }
      ]}
      faqs={[
        {
          question: "Is Ayurvedic treatment safe?",
          answer: "Yes, Ayurvedic treatments are completely safe when administered by qualified practitioners using authentic methods and quality herbs."
        },
        {
          question: "How long does treatment take?",
          answer: "Treatment duration varies based on your condition and constitution. Our practitioners will provide a personalized timeline during consultation."
        },
        {
          question: "Can Ayurveda treat chronic conditions?",
          answer: "Yes, Ayurveda is highly effective for chronic conditions by addressing the root cause and promoting natural healing."
        },
        {
          question: "Are the herbs organic?",
          answer: "We use high-quality, authentic medicinal herbs sourced from reliable suppliers to ensure effectiveness and safety."
        },
        {
          question: "Is there any side effect?",
          answer: "Ayurvedic treatments have no side effects when properly administered. They work in harmony with your body's natural healing processes."
        },
        {
          question: "Can I combine with modern medicine?",
          answer: "Yes, Ayurvedic treatments can complement modern medicine. Please inform our practitioners about any ongoing treatments."
        }
      ]}
      cta={{
        title: "Experience Authentic Ayurvedic Healing",
        description: "Book your consultation with our expert Ayurvedic practitioners today.",
        primary: { label: "Book Appointment", href: "/appointment" },
        secondary: { label: "Call Now", href: "tel:+919270216369" }
      }}
    />
  );
}
