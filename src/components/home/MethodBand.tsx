import Link from "next/link";
import { methodSteps } from "@/data/method";
import { Container } from "@/components/ui/Container";

export function MethodBand() {
  return (
    <section aria-labelledby="methode-titre" className="bg-reset text-white">
      <Container className="py-20 sm:py-24">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-semibold text-reset-pale">Notre méthode</p>
            <h2 id="methode-titre" className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-white">
              Cinq étapes pour chaque dossier
            </h2>
          </div>
          <Link
            href="/methode"
            className="self-start font-display font-bold text-white underline decoration-coral decoration-2 underline-offset-[6px] md:self-auto"
          >
            Lire la méthode en détail
          </Link>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {methodSteps.map((step) => (
            <li key={step.number} className="bg-reset p-6 lg:p-7">
              <span className="block font-display text-4xl font-extrabold tracking-tight text-reset-pale tabular">{step.number}</span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
                {step.title}
                <span aria-hidden="true" className="text-coral">.</span>
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">{step.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
