import type { CSSProperties } from "react";
import { WhatsAppLogo } from "./SocialIcons";
import { cn } from "./ui/utils";

type Size = "sm" | "md" | "lg";

interface WhatsAppCTAProps {
  label: string;
  href: string;
  size?: Size;
  fullWidth?: boolean;
  align?: "center" | "start";
  className?: string;
}

const SIZES: Record<Size, { pad: string; logo: number }> = {
  sm: { pad: "px-4 py-2 text-sm gap-2", logo: 16 },
  md: { pad: "px-6 py-3.5 text-[15px] gap-2.5", logo: 18 },
  lg: { pad: "px-8 py-4 text-base gap-2.5", logo: 20 },
};

/* Cotization CTA carrying the official WhatsApp mark inside the same chip
   surface used by the social buttons (white container + brand-color glow). */
export function WhatsAppCTA({
  label,
  href,
  size = "md",
  fullWidth = false,
  align = "center",
  className,
}: WhatsAppCTAProps) {
  const s = SIZES[size];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--brand": "#25D366" } as CSSProperties}
      className={cn(
        "cta-chip inline-flex items-center justify-center rounded-full bg-white text-[#0b0e17] font-semibold border border-black/5 shadow-[0_12px_32px_-16px_rgba(37,211,102,0.75)]",
        s.pad,
        fullWidth && "w-full",
        align === "start" && "self-start",
        className
      )}
    >
      <WhatsAppLogo size={s.logo} />
      {label}
    </a>
  );
}

export default WhatsAppCTA;
