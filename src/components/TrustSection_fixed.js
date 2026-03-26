import Image from "next/image";

export default function TrustSection() {
  const trustItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      text: "Google Rating",
      subtext: "⭐⭐⭐⭐ 4.9/5",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "FDA Approved",
      subtext: "Technology",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      text: "Experienced",
      subtext: "Dermatologists",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Safe",
      subtext: "Treatments",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "15+ Years",
      subtext: "Experience",
    },
    // {
    //   icon: (
    //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //     </svg>
    //   ),
    //   text: "10+ Clinics",
    //   subtext: "Across India",
    // },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-[#0B0F19] transition-colors ${
                item.text === "Google Rating" ? "hover:text-[#0077C8] cursor-pointer" : "hover:text-[#0077C8]"
              }`}
              onClick={() => {
                if (item.text === "Google Rating") {
                  window.open("https://www.google.com/search?sca_esv=41b1151c51455beb&sxsrf=ANbL-n7KOtyWOCD4UWZPpkYGoP_c6MMQBg:1774357314245&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXaznr_MH2ahTWP-dyPV_OnSa8fbOtHkQPJuHKqRvhJ-T24VgzMmY3yLU6Aw-pFDFK0ElPZZJvlhDi7vogd2KJ759HY-Es920FV2DsAxkGGzJA0OcQ%3D%3D&q=Healthfusion+MultiSpecialty+Reviews&sa=X&ved=2ahUKEwjq-q2LzLiTAxUZ2TgGHfGCGIYQ0bkNegQIOhAH&biw=1280&bih=585&dpr=1.5", "_blank");
                }
              }}
            >
              <div className="text-[#00A651]">{item.icon}</div>
              <div>
                <p className="font-bold text-sm">{item.text}</p>
                <p className="text-xs text-gray-500">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
