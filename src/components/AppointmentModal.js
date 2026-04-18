"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentModal({ open, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const handleOverlayMouseDown = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80]"
      role="dialog"
      aria-modal="true"
      onMouseDown={handleOverlayMouseDown}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300" />

      <div className="relative h-full w-full flex items-center justify-center p-2 sm:p-4">
        <div
          ref={panelRef}
          className="w-full max-w-[600px] rounded-2xl bg-white shadow-2xl p-4 sm:p-6 max-h-[95vh] overflow-y-auto transform transition duration-300 ease-in-out animate-[modalIn_300ms_ease-out]"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B0F19]">
                Book Your Appointment
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Consult with our experts and begin your healing journey.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <AppointmentForm />
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
