import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "light" | "outline-light" | "outline";

const styles: Record<Variant, string> = {
  solid: "bg-reset text-white hover:bg-reset-2",
  light: "bg-white text-reset hover:bg-reset-pale",
  "outline-light": "border-2 border-white/70 text-white hover:border-white hover:bg-white/10",
  outline: "border-2 border-reset text-reset hover:bg-reset hover:text-white",
};

export function ButtonLink({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: Variant }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 font-display text-[1.02rem] font-bold transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
