import TreatmentHero from "@/components/TreatmentHero";
import TreatmentProcess from "@/components/TreatmentProcess";
import TreatmentFAQ from "@/components/TreatmentFAQ";
import TreatmentCTA from "@/components/TreatmentCTA";

export const metadata = {
  title: "Greeva Basti in Pune | Healthfusion",
  description: "Effective Ayurvedic therapy for pain relief and holistic healing. Specialized Greeva Basti treatment for neck pain and cervical health.",
};

export default function GreevaBastiPage() {
  const steps = [
    {
      title: "Neck Assessment",
      description: "Detailed evaluation of neck condition, mobility, and pain patterns by Ayurvedic specialists."
    },
    {
      title: "Dough Ring Formation",
      description: "Creating a specialized dough ring around the neck area to retain therapeutic oils."
    },
    {
      title: "Medicated Oil Retention",
      description: "Warm herbal oil is poured and retained in the dough ring for therapeutic effect."
    },
    {
      title: "Massage Therapy",
      description: "Followed by gentle neck and shoulder massage to enhance benefits."
    },
    {
      title: "Post-Therapy Care",
      description: "Gentle exercises and recommendations to maintain mobility."
    }
  ];

  const benefits = [
    {
      title: "Reduces Neck Pain and Stiffness",
      description: "Effectively reduces neck pain and stiffness through deep oil therapy."
    },
    {
      title: "Improves Neck Mobility",
      description: "Enhances flexibility and range of motion in the neck region."
    },
    {
      title: "Helpful in Cervical Spondylosis",
      description: "Highly beneficial for managing cervical spondylosis and related conditions."
    },
    {
      title: "Relieves Stress in Neck Muscles",
      description: "Relaxes tense neck muscles and reduces stress-related tension."
    },
    {
      title: "Improves Blood Circulation",
      description: "Enhances blood flow to neck muscles and tissues, promoting healing."
    },
    {
      title: "Non-Invasive Treatment",
      description: "Provides effective relief without surgery or medications with side effects."
    }
  ];

  const whoShouldTake = [
    {
      title: "Cervical Pain Patients",
      description: "Individuals diagnosed with cervical spondylosis or chronic neck pain."
    },
    {
      title: "Desk Job Professionals",
      description: "People with sedentary jobs experiencing neck strain and poor posture."
    },
    {
      title: "People with Neck Stiffness",
      description: "Those experiencing reduced mobility and stiffness in neck joints."
    },
    {
      title: "Tech Users",
      description: "Individuals experiencing 'tech neck' from prolonged device usage."
    },
    {
      title: "Stress-Related Neck Pain",
      description: "People with tension and stress causing neck and shoulder pain."
    },
    {
      title: "Senior Citizens",
      description: "Elderly individuals with age-related neck stiffness and mobility issues."
    }
  ];

  const faqs = [
    {
      question: "What is Greeva Basti?",
      answer: "Greeva Basti is an Ayurvedic therapy for neck-related issues where warm herbal oil is retained over the cervical region to reduce stiffness and pain using a specialized dough ring."
    },
    {
      question: "How does it help cervical spondylosis?",
      answer: "Greeva Basti helps by reducing inflammation, improving blood circulation, strengthening neck muscles, and providing nourishment to cervical tissues through medicated oils."
    },
    {
      question: "Is the treatment safe?",
      answer: "Yes, Greeva Basti is completely safe when performed by trained practitioners using authentic Ayurvedic methods and quality medicated oils."
    },
    {
      question: "How long does each session take?",
      answer: "A typical Greeva Basti session takes 45-60 minutes, including preparation, therapy, and post-treatment rest."
    },
    {
      question: "Can I work after the treatment?",
      answer: "Yes, you can resume normal activities immediately after the treatment, though it's recommended to avoid strenuous activities for a few hours."
    },
    {
      question: "Are there any side effects?",
      answer: "No, Greeva Basti is a natural therapy with no side effects. Some people may feel slight warmth or relaxation, which are normal therapeutic responses."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <TreatmentHero
        title="Greeva Basti Treatment"
        subtitle="Ayurvedic Neck Therapy"
        description="Greeva Basti is an Ayurvedic therapy for neck-related issues where warm herbal oil is retained over the cervical region to reduce stiffness and pain."
        image="/Gallery/basti.jpg"
      />

      {/* About Treatment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Greeva Basti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Greeva Basti is a specialized Ayurvedic therapy designed to treat neck-related conditions. The term 'Greeva' refers to the neck or cervical region, and 'Basti' means retaining or holding therapeutic substances.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This therapy involves creating a ring of special dough around the neck area, which is then filled with warm medicated oil. The oil is retained for a specific period, allowing its therapeutic properties to penetrate deep into the neck muscles and cervical tissues.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Greeva Basti is particularly effective for cervical spondylosis, neck stiffness, shoulder pain, and conditions caused by poor posture or prolonged device usage. The medicated oils used contain herbs with anti-inflammatory, analgesic, and tissue-repairing properties.
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
            Who Should Take Greeva Basti
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
            title="Experience Natural Neck Pain Relief"
            description="Book your Greeva Basti therapy session today and find relief from neck pain and stiffness."
            primary={{ label: "Book Appointment", href: "/appointment" }}
            secondary={{ label: "WhatsApp Now", href: "https://wa.me/919270216369" }}
          />
        </div>
      </section>
    </main>
  );
}
