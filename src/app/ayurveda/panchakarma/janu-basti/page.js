import TreatmentHero from "@/components/TreatmentHero";
import TreatmentProcess from "@/components/TreatmentProcess";
import TreatmentFAQ from "@/components/TreatmentFAQ";
import TreatmentCTA from "@/components/TreatmentCTA";

export const metadata = {
  title: "Janu Basti in Pune | Healthfusion",
  description: "Effective Ayurvedic therapy for pain relief and holistic healing. Specialized Janu Basti treatment for knee pain and joint health.",
};

export default function JanuBastiPage() {
  const steps = [
    {
      title: "Knee Joint Assessment",
      description: "Comprehensive evaluation of knee condition, mobility, and pain patterns by Ayurvedic specialists."
    },
    {
      title: "Dough Ring Application",
      description: "Creating a precise dough ring around the knee joint to retain therapeutic oils."
    },
    {
      title: "Medicated Oil Therapy",
      description: "Warm medicated oil is poured and retained on the knee joint for deep penetration."
    },
    {
      title: "Therapeutic Massage",
      description: "Followed by gentle massage around the knee area to enhance absorption."
    },
    {
      title: "Joint Strengthening",
      description: "Post-treatment exercises and recommendations to maintain joint health."
    }
  ];

  const benefits = [
    {
      title: "Reduces Knee Pain and Inflammation",
      description: "Provides significant relief from knee pain and reduces inflammation effectively."
    },
    {
      title: "Strengthens Joints",
      description: "Nourishes and strengthens knee joint tissues, cartilage, and surrounding muscles."
    },
    {
      title: "Improves Mobility",
      description: "Enhances joint flexibility and range of motion for better movement."
    },
    {
      title: "Helpful in Arthritis",
      description: "Highly effective in managing various forms of arthritis and joint conditions."
    },
    {
      title: "Natural Healing",
      description: "Promotes natural tissue repair without side effects or invasive procedures."
    },
    {
      title: "Reduces Stiffness",
      description: "Effectively reduces morning stiffness and improves joint flexibility."
    }
  ];

  const whoShouldTake = [
    {
      title: "Arthritis Patients",
      description: "Individuals suffering from osteoarthritis, rheumatoid arthritis, or other joint conditions."
    },
    {
      title: "Knee Pain Sufferers",
      description: "People experiencing chronic or acute knee pain affecting daily activities."
    },
    {
      title: "Elderly Individuals",
      description: "Seniors with age-related joint degeneration and mobility issues."
    },
    {
      title: "Athletes",
      description: "Sports persons with knee injuries or strain seeking natural recovery methods."
    },
    {
      title: "Joint Stiffness",
      description: "Those experiencing reduced mobility and stiffness in knee joints."
    },
    {
      title: "Post-Injury Recovery",
      description: "Individuals recovering from knee injuries or surgeries seeking natural healing support."
    }
  ];

  const faqs = [
    {
      question: "What is Janu Basti?",
      answer: "Janu Basti is a specialized Ayurvedic therapy for knee joints where warm medicated oil is applied and retained to relieve pain and strengthen joints using a dough ring."
    },
    {
      question: "How does it help arthritis?",
      answer: "Janu Basti helps arthritis by reducing inflammation, lubricating joints, strengthening cartilage, and improving blood circulation to the joint area through medicated oils."
    },
    {
      question: "Is the treatment painful?",
      answer: "No, Janu Basti is a gentle and soothing treatment. The warm oil provides therapeutic relief rather than causing pain."
    },
    {
      question: "How long does each session take?",
      answer: "A typical Janu Basti session takes 45-60 minutes, including preparation, therapy, and post-treatment rest."
    },
    {
      question: "Can it prevent knee replacement?",
      answer: "While highly beneficial, Janu Basti is a supportive therapy. For severe cases, it may help delay or reduce the need for surgical intervention."
    },
    {
      question: "Are there any restrictions after treatment?",
      answer: "It's recommended to avoid strenuous activities and cold water exposure for a few hours after the treatment to maximize benefits."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <TreatmentHero
        title="Janu Basti Treatment"
        subtitle="Ayurvedic Knee Joint Therapy"
        description="Janu Basti is a specialized Ayurvedic therapy for knee joints where warm medicated oil is applied and retained to relieve pain and strengthen joints."
        image="/Gallery/basti.jpg"
      />

      {/* About Treatment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Janu Basti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Janu Basti is a specialized Ayurvedic therapy designed to treat knee-related conditions. The term 'Janu' refers to the knee joint, and 'Basti' means retaining or holding therapeutic substances.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This therapy involves creating a ring of special dough around the knee joint, which is then filled with warm medicated oil. The oil is retained for a specific period, allowing its therapeutic properties to penetrate deep into the joint tissues, cartilage, and surrounding muscles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Janu Basti is particularly effective for osteoarthritis, rheumatoid arthritis, knee injuries, and general joint degeneration. The medicated oils used contain herbs with anti-inflammatory, analgesic, and tissue-repairing properties that help restore joint health and mobility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Benefits
              </h3>
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Therapeutic Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Treatment Procedure
          </h2>
          <TreatmentProcess steps={steps} />
        </div>
      </section>

      {/* Who Should Take It */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Who Should Take Janu Basti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoShouldTake.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <TreatmentFAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <TreatmentCTA
            title="Experience Natural Knee Pain Relief"
            description="Book your Janu Basti therapy session today and discover the healing power of Ayurveda for joint health."
            primary={{ label: "Book Appointment", href: "/appointment" }}
            secondary={{ label: "WhatsApp Now", href: "https://wa.me/919270216369" }}
          />
        </div>
      </section>
    </main>
  );
}
