import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  Microscope,
  Shield,
  Sparkles,
  Stethoscope,
  ThumbsUp,
  Users,
} from "lucide-react";
import TreatmentFAQ from "@/components/TreatmentFAQ";
import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/data/doctors";

export const metadata = {
  title: "Fusion Treatments in Pune | Ayurveda + Dermatology + Allopathy",
  description:
    "Get advanced fusion treatments combining Ayurveda, Dermatology, and Allopathy for faster and long-lasting results.",
  alternates: {
    canonical: "/fusion-treatments",
  },
};

function TrustBadge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
      <Icon className="h-4 w-4" />
      {label}
    </div>
  );
}

function SystemCard({ icon: Icon, title, bullets }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-[#F7FAFC] p-3 ring-1 ring-gray-100">
          <Icon className="h-6 w-6 text-[#0077C8]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#0B0F19]">{title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00A651]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProblemSolutionItem({ text, variant }) {
  const isProblem = variant === "problem";
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border p-5 shadow-sm transition-all duration-300 ${
        isProblem
          ? "border-red-100 bg-red-50/40"
          : "border-emerald-100 bg-emerald-50/40"
      }`}
    >
      <div
        className={`rounded-2xl p-2 ring-1 ${
          isProblem
            ? "bg-white ring-red-100"
            : "bg-white ring-emerald-100"
        }`}
      >
        {isProblem ? (
          <Shield className="h-5 w-5 text-red-500" />
        ) : (
          <HeartHandshake className="h-5 w-5 text-emerald-600" />
        )}
      </div>
      <div className="text-sm font-semibold text-[#0B0F19]">{text}</div>
    </div>
  );
}

function TreatmentCard({ title, tag, description }) {
  return (
    <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#0B0F19]">{title}</h3>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-[#EAF6FF] px-3 py-1 text-xs font-semibold text-[#0077C8]">
              {tag}
            </span>
          </div>
        </div>
        <div className="rounded-2xl bg-[#F7FAFC] p-3 ring-1 ring-gray-100">
          <Sparkles className="h-5 w-5 text-[#00A651]" />
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{description}</p>
      <div className="mt-6">
        <Link
          href="/appointment"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0077C8] hover:text-blue-700"
        >
          Learn More
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function FusionTreatmentsPage() {
  const treatments = [
    {
      title: "Psoriasis / Eczema",
      tag: "Ayurveda + Dermatology",
      description:
        "Integrated care to reduce flare-ups, calm inflammation, and strengthen long-term skin resilience.",
    },
    {
      title: "Hair Loss",
      tag: "Ayurveda + Dermatology",
      description:
        "Root-cause support + advanced scalp/follicle protocols for stronger density and healthier regrowth.",
    },
    {
      title: "Acne & Acne Marks",
      tag: "Ayurveda + Dermatology",
      description:
        "Targets active acne and post-acne marks with internal balance + clinical skin repair.",
    },
    {
      title: "Fat Loss",
      tag: "Ayurveda + Dermatology",
      description:
        "Metabolic support with body contouring options—designed for visible, sustainable results.",
    },
    {
      title: "Pigmentation",
      tag: "Ayurveda + Dermatology",
      description:
        "Combines internal correction with clinical dermatology for clearer, even-toned skin.",
    },
    {
      title: "Gastric Problems",
      tag: "Ayurveda + Allopathy",
      description:
        "Relief-focused management + long-term digestive support through a personalized plan.",
    },
    {
      title: "Vitiligo",
      tag: "Ayurveda + Allopathy",
      description:
        "A structured approach combining modern evaluation with Ayurvedic support under supervision.",
    },
    {
      title: "Hyper Acidity",
      tag: "Ayurveda + Allopathy",
      description:
        "Fast symptom control + lifestyle and digestion-strengthening support for durable relief.",
    },
    {
      title: "Diabetes",
      tag: "Ayurveda + Allopathy",
      description:
        "Modern monitoring + Ayurvedic lifestyle optimization for better metabolic stability.",
    },
    {
      title: "Hormonal Disorders",
      tag: "Ayurveda + Allopathy",
      description:
        "Clinical assessment with Ayurvedic routine support to improve balance, energy, and wellness.",
    },
  ];

  const faqs = [
    {
      question: "What is fusion treatment?",
      answer:
        "Fusion treatment is an integrated approach where we combine Ayurveda, Dermatology, and Allopathy (as needed) to create a personalized plan for faster relief and long-term results.",
    },
    {
      question: "Is it safe?",
      answer:
        "Yes—when planned properly. We follow suitability checks, clinical monitoring, and personalized protocols guided by expert doctors.",
    },
    {
      question: "How fast can I see results?",
      answer:
        "Timelines vary by concern and severity. Many patients see early improvement with symptom control, while deeper healing and stability may take longer with a guided plan.",
    },
    {
      question: "Who should choose this approach?",
      answer:
        "Fusion treatment is ideal if you want faster relief, have recurring issues, or need both clinical precision and long-term root-cause support.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Side effects depend on individual therapies. Our doctors focus on safe selection, correct dosage/protocols, and aftercare guidance to minimize risk.",
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Gallery/home4.png"
            alt="Fusion Treatments"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
              <BadgeCheck className="h-4 w-4" />
              Fusion Treatments
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Advanced Fusion Treatments for Faster & Lasting Results
            </h1>
            <p className="mt-4 text-lg font-semibold text-white/90">
              Combining Ayurveda + Dermatology + Allopathy for complete healing
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0B0F19] shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl"
              >
                Book Appointment
              </Link>
              <Link
                href="/ask-expert"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <TrustBadge icon={Shield} label="15+ Years Experience" />
              <TrustBadge icon={Users} label="10,000+ Happy Patients" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS FUSION TREATMENT */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#0B0F19]">
              Our Health Fusion Approach
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe in the power of integration — combining Ayurveda,
              Dermatology, and Allopathy to deliver faster relief and long-term
              wellness.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <SystemCard
              icon={Leaf}
              title="Ayurveda"
              bullets={["Natural healing", "Root cause focus"]}
            />
            <SystemCard
              icon={Microscope}
              title="Dermatology"
              bullets={["Advanced skin technology", "Clinical precision"]}
            />
            <SystemCard
              icon={Stethoscope}
              title="Allopathy"
              bullets={["Fast symptom relief", "Evidence-based care"]}
            />
          </div>
        </div>
      </section>

      {/* 3. PROBLEM → SOLUTION SECTION */}
      <section className="bg-[#F7FAFC] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19]">
            Why Choose Fusion Treatment?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-red-50 p-3 ring-1 ring-red-100">
                  <Shield className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19]">Problems</h3>
              </div>
              <div className="mt-6 space-y-4">
                <ProblemSolutionItem text="Temporary results" variant="problem" />
                <ProblemSolutionItem text="Recurring issues" variant="problem" />
                <ProblemSolutionItem text="Side effects" variant="problem" />
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                  <HeartHandshake className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F19]">Solutions</h3>
              </div>
              <div className="mt-6 space-y-4">
                <ProblemSolutionItem
                  text="Long-term healing"
                  variant="solution"
                />
                <ProblemSolutionItem
                  text="Combined expertise"
                  variant="solution"
                />
                <ProblemSolutionItem
                  text="Personalized treatment"
                  variant="solution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FUSION TREATMENTS GRID */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19]">
                Our Specialized Fusion Treatments
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                High-impact, integrated plans designed to deliver faster relief
                with durability.
              </p>
            </div>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-[#0077C8] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <TreatmentCard
                key={t.title}
                title={t.title}
                tag={t.tag}
                description={t.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER TRUST SECTION */}
      <section className="bg-[#F7FAFC] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0B0F19]">
              Real Patient Transformations
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              A glimpse of treatment journeys guided by our team.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-md"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={`https://placehold.co/900x700/png?text=Before+${i}`}
                        alt={`Before ${i}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 320px, 90vw"
                      />
                    </div>
                    <div className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Before
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={`https://placehold.co/900x700/png?text=After+${i}`}
                        alt={`After ${i}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 320px, 90vw"
                      />
                    </div>
                    <div className="px-4 py-3 text-sm font-semibold text-gray-700">
                      After
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Results may vary
          </p>
        </div>
      </section>

      {/* 6. DOCTOR TRUST SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19]">Meet Our Experts</h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                Expert-guided fusion care with a patient-first approach.
              </p>
            </div>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B0F19] shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. STRONG CTA BANNER */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#00A651] via-[#00A0A8] to-[#0077C8] p-8 shadow-2xl sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Confused which treatment is right for you?
                </h2>
                <p className="mt-3 text-white/90">
                  Get a personalized recommendation from our experts.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0B0F19] shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/ask-expert"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
                >
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <div className="bg-[#F7FAFC]">
        <TreatmentFAQ faqs={faqs} primaryColor="#00A651" secondaryColor="#0077C8" />
      </div>

      {/* 9. FINAL CTA (END) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#00A651]/10 px-4 py-2 text-sm font-semibold text-[#00A651]">
              <ThumbsUp className="h-4 w-4" />
              Start Today
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#0B0F19]">
              Start Your Healing Journey Today
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Book your appointment and get a fusion plan tailored to your needs.
            </p>
            <div className="mt-7">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-[#0077C8] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Book Appointment Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky bottom CTA (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-100 bg-white/95 p-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-[#00A651]/10 p-2">
              <Leaf className="h-5 w-5 text-[#00A651]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0B0F19]">Fusion Treatments</div>
              <div className="text-xs text-gray-600">Fast relief + long-term results</div>
            </div>
          </div>
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center rounded-xl bg-[#0077C8] px-4 py-2 text-sm font-semibold text-white shadow-md"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Spacer for sticky CTA */}
      <div className="h-16 sm:hidden" />
    </main>
  );
}
