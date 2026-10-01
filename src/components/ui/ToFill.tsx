import type { ReactNode } from "react";

/** Marque un champ à compléter avant mise en ligne (mentions légales, contact…). */
export function ToFill({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-sm bg-coral/15 px-1.5 py-0.5 font-medium text-ink ring-1 ring-coral/50">
      À compléter : {children}
    </mark>
  );
}
