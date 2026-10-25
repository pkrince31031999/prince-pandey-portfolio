import type { ReactNode } from "react";
import type { ProjectArtKind } from "@/types/portfolio";
import { cn } from "@/lib/utils";

function Frame({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative min-h-44 overflow-hidden border-white/10 bg-[#0c0d11]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(169,182,255,0.18),transparent_42%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px]" />
      <p className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b7b1a6]">
        {label}
      </p>
      <div className="relative h-full min-h-44">{children}</div>
    </div>
  );
}

function Motif({ kind }: { kind: ProjectArtKind }) {
  const stroke = "#c5ceff";

  if (kind === "identity") {
    return (
      <svg viewBox="0 0 400 180" className="h-full w-full" role="presentation">
        <rect x="128" y="36" width="144" height="108" rx="16" fill="none" stroke={stroke} strokeOpacity="0.85" />
        <path d="M128 58h18M254 58h18M128 122h18M254 122h18" stroke={stroke} strokeOpacity="0.45" />
        <path d="M146 90h108" stroke={stroke} strokeOpacity="0.9" />
        <circle cx="292" cy="90" r="8" fill="none" stroke={stroke} />
      </svg>
    );
  }

  if (kind === "courier") {
    return (
      <svg viewBox="0 0 400 180" className="h-full w-full" role="presentation">
        <path d="M78 48 H150 M78 90 H150 M78 132 H150 M150 48 L230 90 M150 90 L230 90 M150 132 L230 90 M230 90 H300" fill="none" stroke={stroke} strokeOpacity="0.7" />
        {[48, 90, 132].map((y) => (
          <circle key={y} cx="70" cy={y} r="7" fill="none" stroke={stroke} />
        ))}
        <circle cx="308" cy="90" r="12" fill="none" stroke={stroke} />
      </svg>
    );
  }

  if (kind === "booking") {
    return (
      <svg viewBox="0 0 400 180" className="h-full w-full" role="presentation">
        <rect x="56" y="42" width="132" height="26" rx="13" fill="none" stroke={stroke} />
        <rect x="72" y="78" width="156" height="26" rx="13" fill="none" stroke={stroke} strokeOpacity="0.75" />
        <rect x="56" y="114" width="110" height="26" rx="13" fill="none" stroke={stroke} strokeOpacity="0.55" />
        <path d="M246 91 H292" stroke={stroke} strokeOpacity="0.8" />
        <circle cx="314" cy="91" r="16" fill="none" stroke={stroke} />
        <path d="M307 91 l5 5 10-11" fill="none" stroke={stroke} />
      </svg>
    );
  }

  if (kind === "automation") {
    return (
      <svg viewBox="0 0 400 180" className="h-full w-full" role="presentation">
        <path d="M150 48 a42 42 0 1 1 -18 12" fill="none" stroke={stroke} />
        <path d="M132 52 l8-16 6 14" fill="none" stroke={stroke} />
        <rect x="236" y="46" width="92" height="88" rx="10" fill="none" stroke={stroke} />
        <path d="M252 70 h60 M252 88 h48 M252 106 h36" stroke={stroke} strokeOpacity="0.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 180" className="h-full w-full" role="presentation">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => (
        <rect
          key={bar}
          x={58 + bar * 12}
          y={120 - (bar % 3) * 22 - 36}
          width="6"
          height={36 + (bar % 3) * 22}
          fill={stroke}
          opacity={0.75}
        />
      ))}
      <path d="M180 52 h150 M180 78 h124 M180 104 h136 M180 130 h96" stroke={stroke} strokeOpacity="0.75" />
    </svg>
  );
}

export function ProjectArt({
  kind,
  label,
  className,
}: {
  kind: ProjectArtKind;
  label: string;
  className?: string;
}) {
  return (
    <Frame label={label} className={className}>
      <Motif kind={kind} />
    </Frame>
  );
}
