import Link from "next/link";
import { Calendar, ShieldCheck } from "lucide-react";

export default function ConsultationBanner({
  theme = "allopathy",
  title = "Not sure which treatment is right for you?",
  subtitle = "Get a free consultation and a personalized plan from our experts.",
}) {
  const styles =
    theme === "ayurveda"
      ? {
          bg: "from-[#00A651] to-[#0077C8]",
          button: "bg-white text-[#00A651] hover:bg-gray-100",
        }
      : {
          bg: "from-[#0077C8] to-[#00A651]",
          button: "bg-white text-[#0077C8] hover:bg-gray-100",
        };

  return (
    <section className={`py-12 bg-gradient-to-r ${styles.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-white/85">{subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/90">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  15+ Years Experience
                </span>
                {/* <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  10+ Clinics
                </span> */}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/appointment"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${styles.button}`}
              >
                <Calendar className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
