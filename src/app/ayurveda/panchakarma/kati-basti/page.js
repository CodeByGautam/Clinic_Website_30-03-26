import TreatmentHero from "@/components/TreatmentHero";
import TreatmentProcess from "@/components/TreatmentProcess";
import TreatmentFAQ from "@/components/TreatmentFAQ";
import TreatmentCTA from "@/components/TreatmentCTA";

export const metadata = {
  title: "Kati Basti in Pune | Healthfusion",
  description: "Effective Ayurvedic therapy for pain relief and holistic healing. Specialized Kati Basti treatment for back pain and spine health.",
};

export default function KatiBastiPage() {
  const steps = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your back condition and spine health by our Ayurvedic specialists."
    },
    {
      title: "Dough Ring Preparation",
      description: "Creating a specialized dough ring around the lower back area to retain therapeutic oils."
    },
    {
      title: "Medicated Oil Application",
      description: "Warm medicated oil is poured and retained in the dough ring for 20-30 minutes."
    },
    {
      title: "Gentle Massage",
      description: "Followed by gentle massage to enhance absorption and therapeutic benefits."
    },
    {
      title: "Post-Treatment Care",
      description: "Rest period and dietary recommendations to maintain the benefits."
    }
  ];

  const benefits = [
    {
      title: "Relieves Chronic Lower Back Pain",
      description: "Provides significant relief from persistent lower back pain through deep oil therapy."
    },
    {
      title: "Strengthens Spine and Muscles",
      description: "Nourishes and strengthens spinal muscles and supporting tissues."
    },
    {
      title: "Helps in Sciatica",
      description: "Highly effective in managing sciatic nerve pain and related symptoms."
    },
    {
      title: "Improves Flexibility and Mobility",
      description: "Enhances range of motion and flexibility in the lower back region."
    },
    {
      title: "Natural Healing",
      description: "Promotes natural tissue repair without side effects or invasive procedures."
    },
    {
      title: "Reduces Inflammation",
      description: "Anti-inflammatory properties of medicated oils reduce swelling and pain."
    }
  ];

  const whoShouldTake = [
    {
      title: "People with Back Pain",
      description: "Individuals experiencing chronic or acute lower back pain affecting daily life."
    },
    {
      title: "Sciatica Patients",
      description: "Those suffering from sciatic nerve pain radiating down the legs."
    },
    {
      title: "Sedentary Lifestyle Individuals",
      description: "People with desk jobs or inactive lifestyles experiencing back strain."
    },
    {
      title: "Lumbar Spondylosis",
      description: "Individuals diagnosed with lumbar spondylosis seeking natural relief."
    },
    {
      title: "Athletes",
      description: "Sports persons with back injuries or strain seeking natural recovery."
    },
    {
      title: "Elderly Individuals",
      description: "Seniors with age-related back issues seeking gentle, effective treatment."
    }
  ];

  const faqs = [
    {
      question: "What is Kati Basti?",
      answer: "Kati Basti is a traditional Ayurvedic therapy where warm medicated oil is retained on the lower back using a dough ring, providing deep therapeutic benefits for back pain and spine health."
    },
    {
      question: "How long does one session take?",
      answer: "A typical Kati Basti session takes 45-60 minutes, including preparation, therapy (20-30 minutes), and post-treatment rest."
    },
    {
      question: "Is the treatment painful?",
      answer: "No, Kati Basti is a gentle and relaxing treatment. The warm oil provides soothing relief rather than pain."
    },
    {
      question: "How many sessions are needed?",
      answer: "The number of sessions varies based on your condition. Typically 7-14 sessions are recommended for optimal results."
    },
    {
      question: "Are there any side effects?",
      answer: "Kati Basti is completely safe with no side effects when performed by trained practitioners using authentic methods."
    },
    {
      question: "Can it replace surgery?",
      answer: "While highly effective for many conditions, severe cases may still require medical intervention. Consult our experts for personalized advice."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <TreatmentHero
        title="Kati Basti Treatment"
        subtitle="Ayurvedic Back Pain Relief"
        description="Kati Basti is a traditional Ayurvedic therapy focused on the lower back, where warm medicated oil is retained in a specially prepared reservoir to relieve pain and stiffness."
        image="/Gallery/basti.jpg"
      />

      {/* About Treatment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Kati Basti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kati Basti is a specialized Ayurvedic therapy designed to treat lower back conditions. The term 'Kati' refers to the lower back or lumbar region, and 'Basti' means retaining or holding therapeutic substances.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                During this therapy, a ring made of special dough is placed on the lower back, creating a reservoir. Warm medicated oil is then poured into this ring and retained for 20-30 minutes, allowing the therapeutic properties to penetrate deep into the tissues.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This treatment is highly effective for chronic lower back pain, sciatica, lumbar spondylosis, and general back stiffness. The medicated oils used are specially prepared with herbs that have anti-inflammatory, pain-relieving, and tissue-repairing properties.
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
            Who Should Take Kati Basti
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
            title="Experience Natural Back Pain Relief"
            description="Book your Kati Basti therapy session today and discover the healing power of Ayurveda."
            primary={{ label: "Book Appointment", href: "/appointment" }}
            secondary={{ label: "WhatsApp Now", href: "https://wa.me/919270216369" }}
          />
        </div>
      </section>
    </main>
  );
}
