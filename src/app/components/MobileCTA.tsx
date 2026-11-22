import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { WA_HERO } from "./wa";

interface MobileCTAProps {
  ctaHref?: string;
  ctaLabel?: string;
  triggerAfterSeconds?: number;
  triggerAtScrollPercent?: number;
}

export const MobileCTA: React.FC<MobileCTAProps> = ({
  ctaHref = WA_HERO,
  ctaLabel = "Cotizar por WhatsApp",
  triggerAfterSeconds = 3,
  triggerAtScrollPercent = 30,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTriggered(true);
    }, triggerAfterSeconds * 1000);

    const handleScroll = () => {
      if (hasTriggered) return;
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= triggerAtScrollPercent) {
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasTriggered, triggerAfterSeconds, triggerAtScrollPercent]);

  useEffect(() => {
    if (hasTriggered) {
      setIsVisible(true);
    }
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-[#E2E8F0] px-4 py-3 shadow-[0_-8px_24px_-18px_rgba(15,23,42,0.3)]">
        <div className="flex items-center justify-between gap-3 max-w-screen-xl mx-auto">
          <WhatsAppCTA href={ctaHref} label={ctaLabel} size="md" className="flex-1" />
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 text-[#64748B] hover:text-[#0F172A] transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;