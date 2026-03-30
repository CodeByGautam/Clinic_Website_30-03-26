import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PopularTreatments from "@/components/PopularTreatments";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustedPartnerSection from "@/components/TrustedPartnerSection";
import DoctorsSection from "@/components/DoctorsSection";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import DualTreatmentSection from "@/components/DualTreatmentSection";
import VideoSection from "@/components/VideoSection";
import { videos } from "@/data/videos";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DualTreatmentSection />
      <VideoSection
        title="Visit Our Clinic Virtually"
        // subtitle="Visit Our Clinic Virtually"
        videos={videos}
        maxItems={4}
      />
      <TrustSection />
      <PopularTreatments />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <TrustedPartnerSection />
      <DoctorsSection />
      {/* <StatsSection /> */}
      <Testimonials />
      <CTASection />
    </>
  );
}
