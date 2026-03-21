import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Phone,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: 'About AyuMed Skin & Hair Clinic | Overview',
  description: 'Learn about AyuMed Clinic where ancient Ayurvedic healing meets advanced dermatology treatments.',
};

export default function AboutOverviewPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/clinic/clinic49.jpeg"
            alt="AyuMed Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/30 to-[#0B0F19]/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center px-8">
          <div className="text-center max-w-3xl">
            {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Welcome to HealthFusion
            </span> */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10">
              Transforming Skin Health with<br />
              <span className="text-[#00A651]">Ancient Wisdom</span> & <span className="text-[#0077C8]">Modern Science</span>
            </h1>
            <p className="text-lg text-gray-200">
              Where centuries-old Ayurveda meets modern dermatology
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border-b border-gray-100">
        {[
          { number: "1000+", label: "Happy Patients" },
          { number: "5000+", label: "Treatments" },
          { number: "15+", label: "Years Experience" },
          { number: "98%", label: "Satisfaction" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-4">
            <p className="text-2xl md:text-3xl font-bold text-[#00A651]">{stat.number}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Introduction */}
      <section className="p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Welcome to AyuMed Skin & Hair Clinic</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded with the vision to bridge traditional Ayurvedic healing with modern dermatology 
            science, our clinic provides a holistic approach to skin and hair care. We believe that 
            true skin health comes from treating the root cause, not just the symptoms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/story"
              className="inline-flex items-center gap-2 text-[#0077C8] font-medium hover:gap-3 transition-all"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Two Clinics Preview */}
      <section className="p-8 bg-[#F7FAFC]">
        <h2 className="text-2xl font-bold text-[#0B0F19] mb-6 text-center">Our Two Specialized Clinics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/about/clinics" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-bold text-[#0B0F19] mb-2">Ayurveda Clinic</h3>
            <p className="text-gray-600 text-sm mb-4">Natural healing therapies with Panchakarma and herbal treatments</p>
            <span className="text-[#00A651] text-sm font-medium inline-flex items-center gap-1">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/about/clinics" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#0077C8]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-bold text-[#0B0F19] mb-2">Dermatology Clinic</h3>
            <p className="text-gray-600 text-sm mb-4">Advanced skin treatments with modern technology</p>
            <span className="text-[#0077C8] text-sm font-medium inline-flex items-center gap-1">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="p-8">
        <h2 className="text-xl font-bold text-[#0B0F19] mb-6 text-center">Explore More</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: "/about/doctors", label: "Our Doctors", icon: "👨‍⚕️", color: "#00A651" },
            { href: "/about/tour", label: "Clinic Tour", icon: "🏥", color: "#0077C8" },
            { href: "/about/technology", label: "Technology", icon: "⚡", color: "#00A651" },
            { href: "/about/testimonials", label: "Reviews", icon: "⭐", color: "#0077C8" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-[#F7FAFC] rounded-xl p-4 text-center hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-2 block">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#0B0F19]">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready to Begin Your Journey?</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B0F19] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            <a
              href="tel:+919270216369"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
