import type { ReactNode } from "react";

/** Mise en forme de lecture longue : largeur confortable, hiérarchie nette. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="max-w-[68ch] text-[1.075rem] leading-[1.75] text-ink
      [&_a]:font-medium [&_a]:text-reset [&_a]:underline [&_a]:decoration-reset/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-coral
      [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-[1.75rem] [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:tracking-tight first:[&_h2]:mt-0
      [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold
      [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-semibold
      [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 marker:[&_ul]:text-reset-2"
    >
      {children}
    </div>
  );
}
