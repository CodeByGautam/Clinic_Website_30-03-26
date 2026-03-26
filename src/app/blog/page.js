import Image from "next/image";
import Link from "next/link";

import VideoSection from "@/components/VideoSection";
import { videos } from "@/data/videos";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Our Blogs & Videos | Healthfusion Multispeciality",
  description: "Expert insights, treatments, and real results.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B0F19]">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#0077C8] blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#00A651] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-2 text-white/80 text-sm font-semibold">
              Healthfusion Knowledge Hub
            </p>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Blogs & Videos
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
              Expert insights, treatments, and real results
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center rounded-full bg-[#0077C8] text-white px-7 py-4 font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
              >
                Book Appointment
              </Link>
              <Link
                href="/dermatology"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/60 text-white px-7 py-4 font-semibold hover:bg-white/10 hover:border-white transition-all"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <VideoSection
        title="Featured Videos"
        subtitle="Clinic videos, walkthroughs, and treatment snapshots"
        videos={videos}
      />

      {/* Blog Articles */}
      <section className="py-14 sm:py-16 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0F19]">
              Blog Articles
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Practical guides written to help you choose the right treatment with confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B0F19] group-hover:text-[#0077C8] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={post.slug}
                      className="inline-flex items-center gap-2 text-[#00A651] font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA Banner */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0F19] border border-white/10 px-6 sm:px-10 py-10 sm:py-12">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#0077C8] blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#00A651] blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Not sure which treatment is right for you?
                </h3>
                <p className="mt-3 text-white/75 max-w-2xl">
                  Talk to our specialists and get a personalized plan based on your skin, hair, and wellness goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#0B0F19] px-7 py-4 font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all"
                >
                  Book Appointment
                </Link>
                <Link
                  href="tel:+919270216369"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/60 text-white px-7 py-4 font-semibold hover:bg-white/10 hover:border-white transition-all"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Sticky CTA */}
      <Link
        href="/appointment"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full bg-[#0077C8] text-white px-5 py-3 font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
      >
        Book Appointment
      </Link>
    </div>
  );
}
