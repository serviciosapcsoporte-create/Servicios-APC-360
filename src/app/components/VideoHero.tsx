import React, { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

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
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const WA_HERO = "https://wa.me/573337450634?text=Hola%2C%20quiero%20cotizar%20la%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20para%20mi%20negocio%20en%20Bogot%C3%A1";

export const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  onCta,
  overlayOpacity = 0.82,
  brightness = 0.45,
  className = "",
  overlayClassName = "",
  videoClassName = "",
  showSecondaryCta = false,
  secondaryCtaLabel,
  secondaryCtaHref,
}) => {
  const [videoError, setVideoError] = useState(false);

  const handleCta = (href?: string, onClick?: () => void) => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
    if (onClick) onClick();
  };

  return (
    <section className={`relative min-h-[70vh] flex items-center overflow-hidden ${className}`}>
      {/* Video de fondo �?" oscuro y sin protagonismo */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/reels-poster.webp"
          className={`absolute inset-0 w-full h-full object-cover ${videoClassName}`}
          style={{ filter: `brightness(${brightness}) contrast(1) saturate(0.8)` }}
          aria-hidden="true"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/reels-10s.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback: poster image when video fails or is blocked */}
      {videoError && (
        <div
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage: "url('/videos/reels-poster.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: `brightness(${brightness}) contrast(1) saturate(0.8)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Capa de oscurecido */}
      <div
        className={`absolute inset-0 ${overlayClassName}`}
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />

      {/* Gradiente marca para transici�n suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />

      {/* Contenido sobre video */}
      {title && (
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {title && (
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {ctaLabel && (
              <a
                href={ctaHref || WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                {ctaLabel}
                <MessageCircle size={18} />
              </a>
            )}
            {showSecondaryCta && secondaryCtaLabel && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 text-foreground/90 font-medium px-6 py-3.5 rounded-full border border-foreground/20 backdrop-blur-md hover:border-foreground/40 hover:bg-foreground/5 transition-colors"
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
