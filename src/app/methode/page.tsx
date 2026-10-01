import type { Metadata } from "next";
import { articleStructure, claimLevels, methodSteps } from "@/data/method";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Notre méthode",
  description: "Constater, observer, comprendre, adapter, évaluer : les cinq étapes suivies par RESET pour chaque dossier.",
};

export default function MethodePage() {
  return (
    <>
      <PageHeader kicker="Notre méthode" title="Comprendre avant de recommander">
        <p>
          Chaque dossier RESET suit la même démarche, en cinq étapes. Elle sert un seul objectif&nbsp;: savoir ce qu’une
          politique étrangère a réellement produit, et ce qu’il faudrait pour qu’elle fonctionne en France.
        </p>
      </PageHeader>

      <section aria-labelledby="etapes" className="bg-white">
        <Container className="py-20 sm:py-24">
          <h2 id="etapes" className="sr-only">Les cinq étapes</h2>
          <ol className="border-t-2 border-reset">
            {methodSteps.map((step) => (
              <li key={step.number} className="grid gap-6 border-b border-ink/10 py-10 md:grid-cols-[9rem_1fr_1.1fr] md:gap-10 md:py-12">
                <span className="font-display text-6xl font-extrabold leading-none tracking-tight text-reset-pale tabular md:text-7xl" aria-hidden="true">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight">
                    <span className="sr-only">Étape {step.number} : </span>
                    {step.title}
                    <span aria-hidden="true" className="text-coral">.</span>
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink/85">{step.summary}</p>
                </div>
                <div>
                  <p className="mb-3 font-display font-bold text-ink">Les questions posées</p>
                  <ul className="space-y-2.5">
                    {step.questions.map((q) => (
                      <li key={q} className="grid grid-cols-[1rem_1fr] gap-2 leading-relaxed text-ink/85">
                        <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-reset-2" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="affirmations" className="bg-paper">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="affirmations" className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Quatre niveaux d’affirmation
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Un débat public sain suppose de savoir ce que l’on sait. Dans nos dossiers, chaque énoncé important
              est rattaché à l’un de ces quatre niveaux.
            </p>
            <div className="mt-8 rounded-2xl bg-reset-pale p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight">Corrélation ou causalité&nbsp;?</h3>
              <p className="mt-3 leading-relaxed text-ink">
                Qu’un pays obtienne de bons résultats après une réforme ne prouve pas que la réforme en est la cause.
                Nous indiquons toujours si un effet a été démontré par une évaluation rigoureuse, ou seulement observé
                en même temps qu’autre chose.
              </p>
            </div>
          </div>
          <dl className="divide-y divide-ink/10 self-start rounded-2xl bg-white px-6 sm:px-8">
            {claimLevels.map((level) => (
              <div key={level.label} className="py-6">
                <dt className="font-display text-xl font-bold text-reset">{level.label}</dt>
                <dd className="mt-1.5 leading-relaxed text-ink/85">{level.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="comparable" className="bg-white">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <h2 id="comparable" className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Comparer ce qui est réellement comparable
          </h2>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Deux statistiques portant le même nom peuvent recouvrir des réalités différentes. Avant toute
              comparaison, nous vérifions la définition, le périmètre et l’année de chaque indicateur.
            </p>
            <p>
              Exemple&nbsp;: comparer les dépenses de santé de deux pays n’a de sens que si l’on additionne, dans
              chacun, les dépenses publiques, les assurances privées et ce qui reste à la charge des ménages.
            </p>
            <p>
              Nous explicitons aussi ce qui distingue les pays comparés&nbsp;: démographie, niveau de vie,
              organisation institutionnelle, histoire. Ces différences n’interdisent pas la comparaison, elles en
              fixent les limites.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="structure" className="border-t border-ink/10 bg-white">
        <Container className="grid gap-12 pb-24 pt-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="structure" className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Un même plan pour chaque dossier
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Une introduction présente le sujet et sa pertinence. Six parties suivent, toujours dans le même ordre,
              puis une bibliographie datée avec des liens vers les publications originales.
            </p>
            <p className="mt-4 text-muted">
              Chaque dossier précise aussi l’horizon de temps en jeu&nbsp;: certaines transformations prennent
              quelques années, d’autres plusieurs décennies.
            </p>
          </div>
          <ol className="border-t-2 border-reset">
            {articleStructure.map((part, i) => (
              <li key={part} className="flex items-baseline gap-5 border-b border-ink/10 py-4">
                <span className="w-6 shrink-0 font-display text-lg font-extrabold text-reset-2 tabular">{i + 1}</span>
                <span className="font-display text-xl font-bold tracking-tight text-ink">{part}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
