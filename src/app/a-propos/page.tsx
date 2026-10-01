import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";
import { ToFill } from "@/components/ui/ToFill";

export const metadata: Metadata = {
  title: "À propos",
  description: "Origine, objectifs et indépendance éditoriale du projet RESET.",
};

const isNot = [
  "Un site de promotion d’un pays ou d’un modèle étranger.",
  "Un parti, un mouvement ou le soutien d’un candidat.",
  "Un classement des meilleurs pays.",
  "Un lieu de slogans ou d’attaques personnelles.",
];

const is = [
  "Un laboratoire de réflexion sur les politiques publiques.",
  "Une analyse des expériences étrangères, réussites et échecs compris.",
  "Une lecture rigoureuse des données, avec leurs sources.",
  "Un espace accessible à tous, sans prérequis.",
];

export default function AProposPage() {
  return (
    <>
      <PageHeader kicker="À propos" title="Un laboratoire de réflexion, pas un programme">
        <p>
          RESET part d’une question simple&nbsp;: face aux difficultés de la France, que pouvons-nous apprendre de
          ce que d’autres pays ont déjà essayé&nbsp;?
        </p>
      </PageHeader>

      <Container className="py-16 sm:py-20">
        <p role="note" className="mb-12 max-w-[68ch] rounded-xl border border-reset/20 bg-paper px-5 py-4 text-[0.95rem] text-ink/80">
          Version provisoire. Le texte définitif de cette page sera publié prochainement.
        </p>

        <Prose>
          <h2>Pourquoi RESET</h2>
          <p>
            La France fait face à des difficultés structurelles&nbsp;: finances publiques, système de santé,
            éducation, organisation administrative, modèle social. Elles nourrissent des désaccords profonds sur les
            réformes à mener, leur financement et la répartition des efforts.
          </p>
          <p>
            RESET propose une autre façon d’aborder ces débats. Plutôt que d’inventer un modèle entièrement nouveau,
            nous étudions ce qui existe déjà à travers le monde&nbsp;: comment d’autres pays ont répondu à des problèmes
            comparables, ce que ces réponses ont coûté, ce qu’elles ont produit, et ce qui a échoué.
          </p>

          <h2>Notre indépendance</h2>
          <p>
            RESET n’est affilié à aucun parti politique. Le site peut examiner des propositions politiques et les
            confronter aux expériences internationales, sans soutenir de candidat ni orienter le vote de ses
            lecteurs.
          </p>
          <p>
            Cette indépendance se vérifie dans les textes&nbsp;: sources citées, limites exposées, distinction claire
            entre les faits et leur interprétation. Notre méthode est publique.
          </p>
        </Prose>
      </Container>

      <section aria-labelledby="ce-que" className="bg-paper">
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-2 md:gap-12">
          <h2 id="ce-que" className="sr-only">Ce que RESET est, et n’est pas</h2>
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight">RESET est</h3>
            <ul className="mt-5 space-y-3">
              {is.map((item) => (
                <li key={item} className="grid grid-cols-[1.25rem_1fr] gap-2 text-lg leading-snug">
                  <span aria-hidden="true" className="font-display font-extrabold text-reset-2">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight">RESET n’est pas</h3>
            <ul className="mt-5 space-y-3">
              {isNot.map((item) => (
                <li key={item} className="grid grid-cols-[1.25rem_1fr] gap-2 text-lg leading-snug">
                  <span aria-hidden="true" className="font-display font-extrabold text-muted">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <Prose>
          <h2>À qui s’adresse RESET</h2>
          <p>
            Aux citoyens, aux professionnels, aux étudiants, aux chercheurs, et à toute personne qui s’intéresse à
            l’évolution du modèle français. Nos dossiers sont écrits pour être compris sans connaissance préalable,
            sans renoncer à la précision.
          </p>

          <h2>Nos objectifs</h2>
          <ul>
            <li>Rendre accessibles les expériences étrangères utiles au débat français.</li>
            <li>Présenter, pour chacune, ses résultats, ses coûts et ses limites.</li>
            <li>Identifier les conditions concrètes d’une éventuelle adaptation en France.</li>
            <li>Proposer des indicateurs pour évaluer une expérimentation.</li>
          </ul>

          <h2>Nous contacter</h2>
          <p>
            <ToFill>adresse de contact</ToFill>
          </p>
        </Prose>
      </Container>
    </>
  );
}
