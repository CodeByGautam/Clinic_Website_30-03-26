import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Healthfusion Multispeciality | Advanced Skin & Hair Clinic",
  description: "Advanced dermatology and hair care treatments by certified experts. Book your free consultation today for acne, hair transplant, laser treatments, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
