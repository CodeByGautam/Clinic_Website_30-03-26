import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Book Your Appointment | Healthfusion",
  description:
    "Consult with our experts and begin your healing journey. Book a dermatology, hair, laser, or ayurveda appointment at Healthfusion.",
};

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0077C8]/5 via-white to-[#00A651]/10">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#0077C8]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#00A651]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 backdrop-blur px-4 py-2 text-sm font-medium text-[#0B0F19] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00A651]" />
              Premium Care • Expert Doctors • Modern Treatments
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0F19]">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
              Consult with our experts and begin your healing journey.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="px-6 sm:px-8 py-6 border-b border-black/5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B0F19]">
                  Appointment Details
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Fill the form and our team will confirm your slot.
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <AppointmentForm />
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur shadow-[0_18px_60px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="relative h-56 sm:h-72">
                <Image
                  // src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2400&q=80"
                  src="/clinic/clinic55.jpeg"
                  alt="Premium clinic experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/90 text-sm font-medium">
                    Personalized treatment plans
                  </p>
                  <h3 className="mt-1 text-white text-2xl sm:text-3xl font-bold">
                    A premium, comfortable consultation
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-black/5 bg-white/60 px-5 py-4">
                    <p className="text-xs font-semibold text-gray-500">Support</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B0F19]">
                      9:30 AM to 6:30 PM
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/60 px-5 py-4">
                    <p className="text-xs font-semibold text-gray-500">Call</p>
                    <p className="mt-1 text-sm font-semibold text-[#0B0F19]">
                      +91 92702 16369
                    </p>
                  </div>
                  <div className="sm:col-span-2 rounded-2xl border border-black/5 bg-white/60 px-5 py-4">
                    <p className="text-xs font-semibold text-gray-500">
                      What happens next?
                    </p>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      After you submit, we’ll email your appointment request to our
                      clinic team. You’ll receive a confirmation call/message with the
                      final timing.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 border border-black/5 px-5 py-4">
                  <p className="text-sm font-semibold text-[#0B0F19]">
                    Tip
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Choose your treatment and add notes so the doctor can prepare in
                    advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
