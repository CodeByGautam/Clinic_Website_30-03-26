// import Link from "next/link";
// import { ArrowRight, ImageIcon, Sparkles, Heart, Cpu } from "lucide-react";

// export const metadata = {
//   title: "Clinic Gallery | Our Facilities & Treatments",
//   description: "Explore our clinic gallery showcasing Ayurvedic and Dermatology facilities, treatment rooms, advanced machines, and therapy sessions.",
// };

// export default function GalleryPage() {
//   const galleryCategories = [
//     {
//       title: "Ayurveda Clinic",
//       description: "Traditional healing environment with authentic Ayurvedic therapy rooms",
//       icon: <Sparkles className="w-8 h-8" />,
//       color: "#00A651",
//       items: [
//         { name: "Clinic Interior", href: "/gallery/ayurveda/clinic", image: "/images/ayurveda-clinic.jpg" },
//         { name: "Treatment Rooms", href: "/gallery/ayurveda/treatment-rooms", image: "/images/treatment-rooms.jpg" },
//         { name: "Panchakarma Sessions", href: "/gallery/ayurveda/panchakarma", image: "/images/panchakarma.jpg" },
//           // { name: "Ayurvedic Facials", href: "/gallery/ayurveda/facial", image: "/images/ayurveda-facial.jpg" },
//         { name: "Consultation", href: "/gallery/ayurveda/consultation", image: "/images/consultation.jpg" },
//       ]
//     },
//     {
//       title: "Dermatology Clinic",
//       description: "Modern dermatology facilities with advanced treatment technology",
//       icon: <Heart className="w-8 h-8" />,
//       color: "#0077C8",
//       items: [
//         { name: "Clinic Interior", href: "/gallery/derma/clinic", image: "/images/derma-clinic.jpg" },
//         { name: "Treatment Rooms", href: "/gallery/derma/treatment-rooms", image: "/images/derma-rooms.jpg" },
//         { name: "Skin Procedures", href: "/gallery/derma/skin-procedures", image: "/images/skin-procedures.jpg" },
//         { name: "Laser Treatments", href: "/gallery/derma/laser-treatments", image: "/images/laser-treatments.jpg" },
//         { name: "Facial Treatments", href: "/gallery/derma/facial-treatments", image: "/images/facial-treatments.jpg" },
//       ]
//     },
//     {
//       title: "Machines & Technology",
//       description: "State-of-the-art equipment for advanced skin and hair treatments",
//       icon: <Cpu className="w-8 h-8" />,
//       color: "#00A651",
//       items: [
//         { name: "Laser Machines", href: "/gallery/machines/laser", image: "/images/laser-machines.jpg" },
//         { name: "Skin Machines", href: "/gallery/machines/skin-treatment", image: "/images/skin-machines.jpg" },
//         // { name: "Hair Machines", href: "/gallery/machines/hair-treatment", image: "/images/hair-machines.jpg" },
//         // { name: "RF & MNRF", href: "/gallery/machines/rf", image: "/images/rf-machines.jpg" },
//         // { name: "Facial Machines", href: "/gallery/machines/facial-machines", image: "/images/facial-machines.jpg" },
//       ]
//     }
//   ];

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center">
//             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-[#00A651]/10 text-[#00A651]">
//               <ImageIcon className="w-4 h-4" />
//               Visual Tour
//             </span>
//             <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
//               Our Clinic Gallery
//             </h1>
//             <p className="text-xl text-gray-600 mb-4">
//               Explore our facilities, treatments, and advanced technology
//             </p>
//             <p className="text-gray-500 max-w-2xl mx-auto">
//               Take a visual journey through our authentic Ayurvedic healing center and 
//               modern dermatology clinic equipped with state-of-the-art technology.
//             </p>
//           </div>
//         </div>
        
//         {/* Decorative Elements */}
//         <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[#00A651]" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-[#0077C8]" />
//       </section>

//       {/* Gallery Categories */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="space-y-16">
//             {galleryCategories.map((category, catIndex) => (
//               <div key={catIndex}>
//                 {/* Category Header */}
//                 <div className="flex items-center gap-4 mb-8">
//                   <div 
//                     className="w-14 h-14 rounded-2xl flex items-center justify-center"
//                     style={{ backgroundColor: `${category.color}15`, color: category.color }}
//                   >
//                     {category.icon}
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-[#0B0F19]">{category.title}</h2>
//                     <p className="text-gray-500">{category.description}</p>
//                   </div>
//                 </div>

//                 {/* Category Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//                   {category.items.map((item, itemIndex) => (
//                     <Link
//                       key={itemIndex}
//                       href={item.href}
//                       className="group relative overflow-hidden rounded-2xl bg-[#F7FAFC] shadow-sm hover:shadow-xl transition-all duration-300"
//                     >
//                       {/* Placeholder for Image */}
//                       <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//                         <ImageIcon className="w-12 h-12 text-gray-300" />
//                       </div>
                      
//                       {/* Content */}
//                       <div className="p-4">
//                         <h3 className="font-semibold text-[#0B0F19] group-hover:text-[#0077C8] transition-colors mb-2">
//                           {item.name}
//                         </h3>
//                         <div className="flex items-center gap-2 text-sm" style={{ color: category.color }}>
//                           <span>View Gallery</span>
//                           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                         </div>
//                       </div>

//                       {/* Hover Overlay */}
//                       <div 
//                         className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//                         style={{ backgroundColor: category.color }}
//                       />
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Experience Our Clinic in Person
//           </h2>
//           <p className="text-white/90 mb-8 max-w-2xl mx-auto">
//             Schedule a visit to tour our facilities and meet our expert team of Ayurvedic doctors and dermatologists.
//           </p>
//           <Link
//             href="/appointment"
//             className="inline-flex items-center gap-2 bg-white text-[#0B0F19] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
//           >
//             Book a Visit
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }
