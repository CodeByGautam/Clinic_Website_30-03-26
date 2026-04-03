import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, BookOpen, Briefcase, GraduationCap, Star } from "lucide-react";
import { doctors } from "@/data/doctors";

export async function generateMetadata({ params }) {
  const doctor = doctors.find((d) => d.slug === params.slug);

  if (!doctor) {
    return {
      title: "Doctor Profile | HealthFusion Clinic",
      description: "Doctor profile page.",
    };
  }

  return {
    title: `Dr. ${doctor.name.trim()} | HealthFusion Clinic`,
    description: doctor.qualification,
    alternates: {
      canonical: `/doctors/${doctor.slug}`,
    },
  };
}

export default function DoctorProfilePage({ params }) {
  const doctor = doctors.find((d) => d.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-[#00A651] via-[#00A0A8] to-[#0077C8]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                <Star className="h-4 w-4" />
                Expert Doctor
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Dr. {doctor.name.trim()}
              </h1>
              <p className="mt-4 text-lg font-semibold text-white/90">
                {doctor.specialization}
              </p>
              <p className="mt-4 max-w-2xl text-white/85">
                {doctor.qualification}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0B0F19] shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919270216369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
                >
                  WhatsApp Now
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{doctor.experience}</div>
                      <div className="text-sm text-white/80">Experience</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">Trusted Care</div>
                      <div className="text-sm text-white/80">Patient-first approach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={doctor.image}
                    alt={`Dr. ${doctor.name.trim()}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 420px, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F7FAFC] p-3 ring-1 ring-gray-100">
                  <BookOpen className="h-5 w-5 text-[#0077C8]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0B0F19]">About</h2>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {doctor.bio ||
                  "Get personalized care with a treatment plan designed around your concerns, medical history, and long-term wellness goals."}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#F7FAFC] p-3 ring-1 ring-gray-100">
                  <GraduationCap className="h-5 w-5 text-[#00A651]" />
                </div>
                <h3 className="text-lg font-bold text-[#0B0F19]">Quick Info</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div>
                  <div className="font-semibold text-gray-900">Specialization</div>
                  <div className="text-gray-600">{doctor.specialization}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Experience</div>
                  <div className="text-gray-600">{doctor.experience}</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/appointment"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#0077C8] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-100 bg-[#F7FAFC] p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0B0F19]">
                  Want guidance before booking?
                </h3>
                <p className="mt-1 text-gray-600">
                  Talk to our team and get the right direction for your concern.
                </p>
              </div>
              <Link
                href="/ask-expert"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0B0F19] shadow-md transition-all duration-300 hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
