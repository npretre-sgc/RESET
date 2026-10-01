import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = { kicker: string; title: string; children?: ReactNode };

/** En-tête commun aux pages intérieures : bandeau bleu, titre affirmé. */
export function PageHeader({ kicker, title, children }: Props) {
  return (
    <header className="bg-reset text-white">
      <Container className="pb-14 pt-14 sm:pb-20 sm:pt-20">
        <p className="mb-5 font-medium text-reset-pale">{kicker}</p>
        <h1 className="max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
          {title}
        </h1>
        {children ? <div className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{children}</div> : null}
      </Container>
    </header>
  );
}
