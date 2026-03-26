"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton({ fallbackHref = "/dermatology", className = "" }) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white/90 backdrop-blur shadow-md hover:bg-white transition-all ${className}`.trim()}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm sm:text-base font-medium">Back</span>
    </button>
  );
}
