import type { CSSProperties, ReactNode } from "react";
import { WhatsAppLogo } from "./SocialIcons";
import { cn } from "./ui/utils";

type Size = "sm" | "md" | "lg";

interface ChipCTAProps {
  label: string;
  href: string;
  size?: Size;
  fullWidth?: boolean;
  align?: "center" | "start";
  className?: string;
  logo?: ReactNode;
  brand?: string;
}

const SIZES: Record<Size, { pad: string; logo: number }> = {
  sm: { pad: "px-4 py-2 text-sm gap-2", logo: 16 },
  md: { pad: "px-6 py-3.5 text-[15px] gap-2.5", logo: 18 },
  lg: { pad: "px-8 py-4 text-base gap-2.5", logo: 20 },
};

/* CTA chip carrying an official brand mark (WhatsApp by default) inside the
   light container used by the social buttons, outlined with the site accent
   border and lifted by a brand-colored glow on hover. */
export function ChipCTA({
  label,
  href,
  size = "md",
  fullWidth = false,
  align = "center",
  className,
  logo,
  brand = "#25D366",
}: ChipCTAProps) {
  const s = SIZES[size];
  const isWhatsApp = logo === undefined;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--brand": isWhatsApp ? "#25D366" : brand } as CSSProperties}
      className={cn(
        "cta-chip inline-flex items-center justify-center rounded-full font-semibold",
        isWhatsApp
          ? "bg-[#25D366] text-white border-2 border-[#25D366] shadow-[0_10px_28px_-12px_rgba(37,211,102,0.65)] hover:bg-[#20c05c]"
          : "bg-white text-[#0F172A] border-2 border-[#1A365D] hover:bg-[#F1F5F9]",
        s.pad,
        fullWidth && "w-full",
        align === "start" && "self-start",
        className
      )}
    >
      {logo ?? <WhatsAppLogo size={s.logo} />}
      {label}
    </a>
  );
}

export const WhatsAppCTA = ChipCTA;

export default ChipCTA;
