import Image from "next/image";

export const metadata = {
  title: 'Our Doctors | AyuMed Clinic',
  description: 'Meet our experienced team of doctors specializing in Ayurveda and modern dermatology.',
};

export default function OurDoctorsPage() {
  const allopathyDoctors = [
    {
      name: "Dr. Ajay Devershi",
      qualification: "MBBS, DNB (General Surgery) - General Surgeon, Laparoscopic Surgeon",
      // specialization: "General Surgeon & Laparoscopic Surgeon",
      image: "/ajay2.jpeg",
      color: "#00A651"
    },
    {
      name: "Dr. Shruti Jadhav Devershi",
      qualification: "MBBS, DDVL — Specializes in Dermatology, Costmetology, Trichology",
      // specialization: "Dermatologist, Cosmetologist, Trichologist",
      image: "/shruti.jpeg",
      color: "#0077C8"
    }
  ];

  const ayurvedaDoctors = [
    {
      name: "Dr. Shubhi Rao",
      qualification: "BAMS, M.D. — Specialized in Ayurveda",
      // specialization: "Ayurveda Specialist & Panchakarma Expert",
      image: "/shubhi.jpg",
      color: "#00A651"
    },
    {
      name: "Dr. Aishwarya Mahale",
      qualification: "Senior Cosmetologist",
      // specialization: "Skin & Hair Specialist",
      image: "/aishwarya.jpeg",
      color: "#00A651"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] text-sm font-semibold mb-4">
          Expert Team
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          Meet Our Doctors
        </h1>
        <p className="text-gray-600 mb-8">
          Our team of experienced doctors combines expertise in Ayurveda and modern dermatology
        </p>

        {/* Allopathy Doctors Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {allopathyDoctors.map((doctor, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#0B0F19] mb-1">{doctor.name}</h3>
                  <p className="text-xs font-medium mb-1" style={{ color: doctor.color }}>{doctor.qualification}</p>
                  {/* <p className="text-gray-600 text-xs">{doctor.specialization}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ayurveda Doctors Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            {ayurvedaDoctors.map((doctor, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#0B0F19] mb-1">{doctor.name}</h3>
                  <p className="text-xs font-medium mb-1" style={{ color: doctor.color }}>{doctor.qualification}</p>
                  {/* <p className="text-gray-600 text-xs">{doctor.specialization}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
