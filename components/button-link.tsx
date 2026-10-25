import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-[#f3efe6] text-[#141311] hover:bg-white",
  secondary:
    "border border-white/15 bg-white/[0.03] text-[#f3efe6] hover:border-white/30 hover:bg-white/[0.06]",
  ghost: "text-[#d7d1c6] hover:text-white",
};

type Variant = keyof typeof variants;

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 motion-safe:hover:-translate-y-px",
    variants[variant],
    className,
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={buttonClasses(variant, className)} {...props} />;
}
