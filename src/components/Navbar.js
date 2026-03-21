"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentModal from "@/components/AppointmentModal";
import { 
  ChevronDown, 
  Calendar, 
  Phone, 
  Menu, 
  X,
  Globe
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "#blog" },
    { name: "Ask Expert", href: "#expert" },
  ];

  const megaMenuData = {
    skinTreatments: {
      title: "Skin Treatments",
      items: [
        { name: "Acne Treatment", href: "/treatments/acne" },
        { name: "Skin Brightening", href: "/treatments/skin-brightening" },
        { name: "Anti-Ageing Treatment", href: "/treatments/anti-ageing" },
        { name: "Hydrafacial", href: "/treatments/hydrafacial" },
        { name: "Organic Peels", href: "/treatments/organic-peels" },
        { name: "Medi Facials", href: "/treatments/medi-facials" },
        { name: "Freckles Treatment", href: "/treatments/freckles-treatment" },
        { name: "MNRF Treatment", href: "/treatments/mnrf-treatment" },
        { name: "Fillers", href: "/treatments/fillers" },
        { name: "Glow Drips", href: "/treatments/glow-drips" },
        { name: "Face PRP", href: "/treatments/face-prp" },
        { name: "Face Fat Reduction", href: "/treatments/face-fat-reduction" },
        { name: "Face Toning", href: "/treatments/face-toning" },
        { name: "Skin Booster", href: "/treatments/skin-booster" },
      ],
    },
    hairTreatments: {
      title: "Hair Treatments",
      items: [
        { name: "Hair & Scalp Therapy", href: "/treatments/hair-scalp-therapy" },
        { name: "Hair Transplant", href: "/treatments/hair-transplant" },
        { name: "Hair Loss Treatment", href: "/treatments/hair-loss" },
        { name: "PRP Treatment", href: "/treatments/prp-treatment" },
        { name: "GFC Treatment", href: "/treatments/gfc-treatment" },
        { name: "Anti-Dandruff Treatment", href: "/treatments/anti-dandruff" },
        { name: "QR-678 Treatment", href: "/treatments/qr-678" },
      ],
    },
    laserTreatments: {
      title: "Laser Treatments",
      items: [
        { name: "Laser Hair Removal", href: "/treatments/laser-hair-removal" },
        { name: "Skin Resurfacing", href: "/treatments/skin-resurfacing" },
        { name: "Tattoo Removal", href: "/treatments/tattoo-removal" },
        { name: "Laser De-Pigmentation", href: "/treatments/laser-depigmentation" },
      ],
    },
    ayurvedaTreatments: {
      title: "Ayurveda Treatments",
      items: [
        { name: "Nadi Parikshan", href: "/treatments/ayurveda/nadi-parikshan" },
        { name: "Prakriti Parikshan", href: "/treatments/ayurveda/prakriti-parikshan" },
        { name: "Agnikarma", href: "/treatments/ayurveda/agnikarma" },
        { name: "Viddhakarma", href: "/treatments/ayurveda/viddhakarma" },
        { name: "Suvarnaprashan", href: "/treatments/ayurveda/suvarnaprashan" },
        { name: "Panchakarma", href: "/treatments/ayurveda/panchakarma" },
      ],
    },
  };

  const galleryMegaMenuData = {
    ayurvedaClinic: {
      title: "Ayurveda Clinic Gallery",
      items: [
        { name: "Clinic Interior", href: "/gallery/ayurveda/clinic" },
        { name: "Treatment Rooms", href: "/gallery/ayurveda/treatment-rooms" },
        { name: "Panchakarma Sessions", href: "/gallery/ayurveda/panchakarma" },
        { name: "Ayurvedic Facials", href: "/gallery/ayurveda/facial" },
        { name: "Consultation Sessions", href: "/gallery/ayurveda/consultation" },
      ],
    },
    dermatologyClinic: {
      title: "Dermatology Clinic Gallery",
      items: [
        { name: "Clinic Interior", href: "/gallery/derma/clinic" },
        { name: "Treatment Rooms", href: "/gallery/derma/treatment-rooms" },
        { name: "Skin Procedures", href: "/gallery/derma/skin-procedures" },
        { name: "Laser Treatments", href: "/gallery/derma/laser-treatments" },
        { name: "Facial Treatments", href: "/gallery/derma/facial-treatments" },
      ],
    },
    machinesTechnology: {
      title: "Machines & Technology",
      items: [
        { name: "Laser Machines", href: "/gallery/machines/laser" },
        { name: "Skin Treatment Machines", href: "/gallery/machines/skin-treatment" },
        { name: "Hair Treatment Machines", href: "/gallery/machines/hair-treatment" },
        { name: "RF & MNRF Machines", href: "/gallery/machines/rf" },
        { name: "Facial Machines", href: "/gallery/machines/facial-machines" },
      ],
    },
  };

  const mainMenuItems = [
    { 
      name: "Treatments", 
      hasDropdown: true, 
      dropdownType: "mega",
      href: "#treatments" 
    },
    { 
      name: "Conditions", 
      hasDropdown: false, 
      href: "#conditions" 
    },
    { 
      name: "Gallery", 
      hasDropdown: true, 
      dropdownType: "gallery",
      href: "/gallery" 
    },
    { 
      name: "Appointment",
      hasDropdown: false,
      href: "/appointment"
    },
  ];

  const handleDropdownEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Left - Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent border-none outline-none text-sm cursor-pointer">
                <option>English</option>
                <option>हिंदी</option>
                <option>मराठी</option>
              </select>
            </div>

            {/* Center - Quick Links */}
            <div className="hidden md:flex items-center gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#0077C8] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right - Customer Care */}
            <div className="flex items-center gap-4 text-base">
              <span className="hidden sm:inline">Customer Care - 9:30 AM to 6:30 PM</span>
              <a 
                href="tel:9270216369" 
                className="flex items-center gap-2 text-[#0077C8] font-semibold hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                92702 16369
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-8 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo1.png" 
                alt="Clinic Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainMenuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 font-medium text-[#0B0F19] transition-colors hover:text-[#0077C8]"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.dropdownType === "mega" && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                      <div className="grid grid-cols-4 gap-6">
                        {Object.values(megaMenuData).map((category) => (
                          <div key={category.title}>
                            <h4 className="font-bold text-[#0B0F19] mb-4 text-lg border-b border-gray-100 pb-2">
                              {category.title}
                            </h4>
                            <ul className="space-y-3">
                              {category.items.map((treatment) => (
                                <li key={treatment.name}>
                                  <Link
                                    href={treatment.href}
                                    className="text-gray-600 hover:text-[#0077C8] transition-colors text-sm"
                                  >
                                    {treatment.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* View All Button */}
                      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <Link
                          href="/treatments"
                          className="inline-flex items-center gap-2 bg-[#0077C8] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          View All Treatments
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Gallery Mega Menu Dropdown */}
                  {item.dropdownType === "gallery" && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                      <div className="grid grid-cols-3 gap-6">
                        {Object.values(galleryMegaMenuData).map((category) => (
                          <div key={category.title}>
                            <h4 className="font-bold text-[#0B0F19] mb-4 text-lg border-b border-gray-100 pb-2">
                              {category.title}
                            </h4>
                            <ul className="space-y-3">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="text-gray-600 hover:text-[#0077C8] transition-colors text-sm"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* View All Button */}
                      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <Link
                          href="/gallery"
                          className="inline-flex items-center gap-2 bg-[#0077C8] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          View All Gallery
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Locations Dropdown */}
                </div>
              ))}
            </div>

            {/* Right Section - Book Button */}
            <div className="hidden lg:flex items-center">
              {/* Book Appointment Button */}
              <button
                type="button"
                onClick={openAppointmentModal}
                className="flex items-center gap-2 bg-[#0077C8] text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#0B0F19]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-[120px] bg-white z-50 overflow-y-auto">
              <div className="p-6">

                {/* Mobile Menu Items */}
                <div className="space-y-4">
                  {/* Treatments with Submenu */}
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "Treatments" ? null : "Treatments")}
                      className="flex items-center justify-between w-full py-3 text-lg font-medium text-[#0B0F19] border-b border-gray-100"
                    >
                      Treatments
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === "Treatments" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "Treatments" && (
                      <div className="pl-4 py-3 space-y-3">
                        {Object.values(megaMenuData).map((category) => (
                          <div key={category.title} className="mb-4">
                            <h4 className="font-semibold text-[#00A651] mb-2">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.items.map((treatment) => (
                                <li key={treatment.name}>
                                  <Link
                                    href={treatment.href}
                                    className="text-gray-600 hover:text-[#0077C8] transition-colors text-sm block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {treatment.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Gallery with Submenu */}
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "Gallery" ? null : "Gallery")}
                      className="flex items-center justify-between w-full py-3 text-lg font-medium text-[#0B0F19] border-b border-gray-100"
                    >
                      Gallery
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === "Gallery" ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === "Gallery" && (
                      <div className="pl-4 py-3 space-y-3">
                        {Object.values(galleryMegaMenuData).map((category) => (
                          <div key={category.title} className="mb-4">
                            <h4 className="font-semibold text-[#00A651] mb-2">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="text-gray-600 hover:text-[#0077C8] transition-colors text-sm block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Menu Items */}
                  {mainMenuItems.filter(item => item.name !== "Treatments" && item.name !== "Gallery").map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            className="flex items-center justify-between w-full py-3 text-lg font-medium text-[#0B0F19] border-b border-gray-100"
                          >
                            {item.name}
                            <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                          </button>
                          {activeDropdown === item.name && (
                            <div className="pl-4 py-3 space-y-2">
                              {locations.map((location) => (
                                <Link
                                  key={location.name}
                                  href={location.href}
                                  className="flex items-center gap-3 text-[#0B0F19] hover:text-blue-700 transition-colors py-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <MapPin className="w-4 h-4" />
                                  {location.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 text-lg font-medium text-[#0B0F19] border-b border-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile Book Appointment Button */}
                  <button
                    type="button"
                    onClick={openAppointmentModal}
                    className="flex items-center justify-center gap-2 w-full bg-[#0077C8] text-white px-7 py-3 rounded-full font-semibold mt-6 shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Book Appointment Button */}
      <button
        type="button"
        onClick={openAppointmentModal}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#0077C8] text-white px-6 py-4 rounded-full font-semibold shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Book Free Consultation</span>
        <span className="sm:hidden">Book Now</span>
      </button>

      <AppointmentModal open={isAppointmentModalOpen} onClose={closeAppointmentModal} />
    </>
  );
}
