import Image from "next/image";
import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Doctor Image */}
      <Link href={`/doctors/${doctor.slug}`} className="block relative h-64 w-full">
        <Image
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Doctor Info */}
      <div className="p-6">
        <Link href={`/doctors/${doctor.slug}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Dr. {doctor.name}
          </h3>
        </Link>
        
        <div className="space-y-2 mb-4">
          <p className="text-blue-600 font-semibold text-sm">
            {doctor.qualification}
          </p>
          <p className="text-gray-600 text-sm">
            {doctor.experience} Experience
          </p>
          <p className="text-gray-800 font-medium">
            {doctor.specialization}
          </p>
        </div>

        {/* Bio */}
        {doctor.bio && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {doctor.bio}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href="/appointment"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Book Consultation
          </a>
          <a
            href="https://wa.me/919270216369"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-green-600 transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
