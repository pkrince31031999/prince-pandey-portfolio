import {
  Activity,
  Boxes,
  Braces,
  Cable,
  Clock,
  CreditCard,
  Database,
  Gauge,
  LayoutGrid,
  Network,
  ScrollText,
  Server,
  Shield,
  Sparkles,
  Truck,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { brandIcons } from "@/data/brand-icons";
import { cn } from "@/lib/utils";

const concepts: Record<string, { icon: LucideIcon; color: string }> = {
  "REST APIs": { icon: Braces, color: "#67e8f9" },
  "SOAP APIs": { icon: Cable, color: "#67e8f9" },
  Webhooks: { icon: Webhook, color: "#67e8f9" },
  "API Integration": { icon: Cable, color: "#67e8f9" },
  "Cron Jobs": { icon: Clock, color: "#67e8f9" },
  Microservices: { icon: Boxes, color: "#67e8f9" },
  "MVC Architecture": { icon: LayoutGrid, color: "#67e8f9" },
  "Database Optimization": { icon: Database, color: "#86efac" },
  "Query Performance Tuning": { icon: Gauge, color: "#86efac" },
  "Connection Pooling": { icon: Network, color: "#86efac" },
  VPC: { icon: Network, color: "#fbbf24" },
  "Security Groups": { icon: Shield, color: "#fbbf24" },
  "Log Monitoring": { icon: ScrollText, color: "#fb7185" },
  "Application Performance Monitoring": { icon: Activity, color: "#fb7185" },
  "Courier APIs": { icon: Truck, color: "#fdba74" },
  "Payment Gateway APIs": { icon: CreditCard, color: "#fdba74" },
  "Generative AI": { icon: Sparkles, color: "#c4b5fd" },
  APIs: { icon: Braces, color: "#7eb6ff" },
};

const monograms: Record<string, { letters: string; color: string; text?: string }> = {
  SQL: { letters: "SQL", color: "#336791" },
  AWS: { letters: "AWS", color: "#FF9900" },
  "AWS EC2": { letters: "EC2", color: "#FF9900" },
  "AWS S3": { letters: "S3", color: "#FF9900" },
  "AWS RDS": { letters: "RDS", color: "#FF9900" },
  "AWS IAM": { letters: "IAM", color: "#FF9900" },
  "AWS CloudWatch": { letters: "CW", color: "#FF9900" },
  Azure: { letters: "Az", color: "#0078D4" },
  "VS Code": { letters: "VS", color: "#007ACC" },
  Twilio: { letters: "Tw", color: "#F22F46" },
  Cursor: { letters: "Cu", color: "#F4F1EA", text: "#111111" },
  Claude: { letters: "Cl", color: "#D97757" },
  "Google ADK": { letters: "ADK", color: "#4285F4" },
};

const darkHex = new Set(["000000", "181717", "092E20", "231F20"]);

export function skillColor(name: string) {
  const brand = brandIcons[name];
  if (brand) {
    return darkHex.has(brand.hex) ? "#d7d1c6" : `#${brand.hex}`;
  }

  return monograms[name]?.color ?? concepts[name]?.color ?? "#7eb6ff";
}

export function SkillMark({
  name,
  size = "sm",
  className,
}: {
  name: string;
  size?: "sm" | "lg";
  className?: string;
}) {
  const large = size === "lg";
  const brand = brandIcons[name];

  if (brand) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center bg-[#f4f1ea] shadow-[inset_0_0_0_1px_rgba(9,10,13,0.08)]",
          large ? "h-11 w-11 rounded-2xl" : "h-5 w-5 rounded-[6px]",
          className,
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className={large ? "h-6 w-6" : "h-3.5 w-3.5"}>
          <path d={brand.path} fill={`#${brand.hex}`} />
        </svg>
      </span>
    );
  }

  const mono = monograms[name];
  if (mono) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center font-semibold leading-none tracking-tight text-white",
          large
            ? "h-11 w-11 rounded-2xl text-[11px]"
            : "h-5 min-w-5 rounded-[6px] px-0.5 text-[7px]",
          className,
        )}
        style={{ backgroundColor: mono.color, color: mono.text ?? "#ffffff" }}
        aria-hidden="true"
      >
        {mono.letters}
      </span>
    );
  }

  const concept = concepts[name];
  const Icon = concept?.icon ?? Server;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-white/[0.06]",
        large ? "h-11 w-11 rounded-2xl" : "h-5 w-5 rounded-[6px]",
        className,
      )}
      aria-hidden="true"
    >
      <Icon
        className={large ? "h-5 w-5" : "h-3.5 w-3.5"}
        style={{ color: concept?.color ?? "#7eb6ff" }}
      />
    </span>
  );
}
