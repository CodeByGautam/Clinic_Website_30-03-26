import DoctorCard from "./DoctorCard";
import { doctors } from "@/data/doctors";

export default function DoctorsGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of experienced dermatologists and Ayurveda specialists are dedicated to providing personalized care and effective treatments for all your skin, hair, and wellness concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => {
            if (index === 3) {
              // 4th doctor (index 3) - skip in main grid
              return null;
            }
            if (index < 3) {
              // 1st, 2nd, and 3rd doctors - place in main grid
              return <DoctorCard key={index} doctor={doctor} />;
            }
            return null;
          })}
        </div>
        
        {/* 4th doctor card below second card in center */}
        {doctors[3] && (
          <div className="mt-8">
            <div className="max-w-md mx-auto">
              <DoctorCard doctor={doctors[3]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
