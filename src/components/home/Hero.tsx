import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

/** Bordures de la grille des verbes : 2 colonnes sur mobile, 4 sur écran large. */
const cellBorders = [
  "pr-4",
  "border-l pl-5 md:pl-6",
  "border-t md:border-l md:border-t-0 md:pl-6",
  "border-l border-t pl-5 md:border-t-0 md:pl-6",
];

export function Hero() {
  return (
    <section aria-labelledby="hero-titre" className="relative overflow-hidden bg-reset text-white">
      {/* Trame discrète : rappel des lignes d'un tableau comparatif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px)] [background-size:calc(100%/12)_100%]"
      />
      <Container className="relative pb-0 pt-14 sm:pt-20 lg:pt-24">
        <p className="mb-6 max-w-xl font-medium text-reset-pale sm:text-lg">
          Laboratoire indépendant d’analyse comparative des politiques publiques
        </p>
        <h1
          id="hero-titre"
          className="max-w-[14ch] text-[clamp(2.6rem,7.6vw,6.75rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white"
        >
          {site.signature}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          Finances publiques, santé, éducation, organisation de l’État : la France affronte des difficultés durables.
          D’autres pays ont fait face aux mêmes problèmes. RESET étudie leurs réponses, ce qu’elles ont réellement
          produit, et à quelles conditions elles pourraient être adaptées ici.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/methode" variant="light">
            Découvrir notre méthode
          </ButtonLink>
          <ButtonLink href="#thematiques" variant="outline-light">
            Parcourir les thématiques
          </ButtonLink>
        </div>

        <ol aria-label="Notre démarche en quatre verbes" className="mt-16 grid grid-cols-2 border-t border-white/25 sm:mt-24 md:grid-cols-4">
          {site.motto.map((verb, i) => (
            <li
              key={verb}
              className={`border-white/25 py-6 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-extrabold tracking-[-0.03em] sm:py-8 ${cellBorders[i]}`}
            >
              {verb}
              <span aria-hidden="true" className="text-coral">.</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
