import { FaAward, FaHospital, FaSmile } from "react-icons/fa";

export default function TrustSection() {
  const trustMetrics = [
    {
      icon: FaAward,
      number: "15+",
      label: "Years Experience",
      description: "Serving patients with medical excellence"
    },
    {
      icon: FaHospital,
      number: "100%",
      label: "Best Clinic",
      description: "Near your locations at Pune"
    },
    {
      icon: FaSmile,
      number: "1000+",
      label: "Happy Patients",
      description: "Successfully treated with care"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Patients Trust Healthfusion
          </h2>
          <p className="text-xl text-blue-100">
            Your trusted partner for comprehensive healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <metric.icon className="text-5xl text-blue-200" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {metric.number}
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-1">
                {metric.label}
              </div>
              <div className="text-blue-200">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
