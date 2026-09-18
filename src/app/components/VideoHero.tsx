import React, { useState } from "react";

interface VideoHeroProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCta?: () => void;
  overlayOpacity?: number;
  brightness?: number;
  className?: string;
  overlayClassName?: string;
  videoClassName?: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  ctaLabel,
  onCta,
  overlayOpacity = 0.82,
  brightness = 0.45,
  className = "",
  overlayClassName = "",
  videoClassName = "",
}) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className={`relative min-h-[70vh] flex items-center overflow-hidden ${className}`}>
      {/* Video de fondo — oscuro y sin protagonismo */}
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

      {/* Gradiente marca para transición suave */}
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
          {ctaLabel && onCta && (
            <button
              onClick={onCta}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      )}
    </section>
  );
};
