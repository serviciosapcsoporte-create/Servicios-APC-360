import React from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppCTA } from "./WhatsAppCTA";

interface VideoHeroProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: () => void;
  overlayOpacity?: number;
  brightness?: number;
  className?: string;
  overlayClassName?: string;
  videoClassName?: string;
  showSecondaryCta?: boolean;
  minHeight?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const WA_HERO = "https://wa.me/573337450634?text=Hola%2C%20quiero%20cotizar%20la%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20para%20mi%20negocio%20en%20Bogot%C3%A1";

/* Hero corporativo claro: sin video ni resplandores, fondo #F8FAFC con
   lavados azul/verde muy sutiles y jerarquía tipográfica limpia. */
export const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  className = "",
  minHeight = "56vh",
  secondaryCtaLabel,
  secondaryCtaHref,
  showSecondaryCta = false,
}) => {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-background border-b border-border ${className}`}
      style={{ minHeight }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 15% 0%, #E8EEF8 0%, transparent 62%), radial-gradient(60% 50% at 100% 10%, #EAF7EF 0%, transparent 55%)",
        }}
      />

      {title && (
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center w-full">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {ctaLabel && <WhatsAppCTA label={ctaLabel} href={ctaHref || WA_HERO} size="lg" />}
            {showSecondaryCta && secondaryCtaLabel && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 text-[#0F172A] font-medium px-6 py-3.5 rounded-full border border-[#CBD5E1] bg-white hover:border-[#1A365D] hover:bg-[#F1F5F9] transition-colors"
              >
                {secondaryCtaLabel}
                <ArrowRight size={15} />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
