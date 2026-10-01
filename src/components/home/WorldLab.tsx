import Link from "next/link";
import { countries, countryStatusLabel } from "@/data/countries";
import { Container } from "@/components/ui/Container";

export function WorldLab() {
  return (
    <section aria-labelledby="monde-titre" className="border-t border-ink/10 bg-white">
      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="mb-3 font-semibold text-reset-2">Le monde comme laboratoire</p>
          <h2 id="monde-titre" className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Onze pays à étudier, aucun palmarès
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Chaque pays sera étudié sur des sujets précis, avec ses résultats et ses limites. La liste est évolutive et
            présentée par ordre alphabétique&nbsp;: ce n’est pas un classement des meilleurs modèles.
          </p>
          <p className="mt-6">
            <Link href="/monde" className="font-semibold text-reset underline decoration-reset/30 decoration-2 underline-offset-4 hover:decoration-coral">
              Voir les pays étudiés
            </Link>
          </p>
        </div>

        <ul className="grid grid-cols-1 border-t-2 border-reset sm:grid-cols-2">
          {countries.map((c) => (
            <li key={c.slug} className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
              <span className={`font-display text-xl font-bold tracking-tight ${c.status === "en-cours" ? "text-reset" : "text-ink/80"}`}>
                {c.name}
              </span>
              <span className={`shrink-0 text-sm font-medium ${c.status === "en-cours" ? "text-reset" : "text-muted"}`}>
                {c.status === "en-cours" ? <span aria-hidden="true" className="mr-1.5 inline-block h-2 w-2 rounded-full bg-coral" /> : null}
                {countryStatusLabel[c.status]}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
