import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Comparer",
  description: "Le futur outil de comparaison internationale de RESET.",
};

export default function ComparerPage() {
  return (
    <>
      <PageHeader kicker="Comparer" title="Un outil de comparaison, en préparation">
        <p>
          Cet outil permettra de choisir une thématique, des indicateurs, plusieurs pays et une période, puis de
          lire les résultats sous forme de graphiques et de tableaux.
        </p>
      </PageHeader>
      <Container className="py-16 sm:py-20">
        <Prose>
          <h2>Les règles que suivra l’outil</h2>
          <ul>
            <li>Chaque indicateur affichera sa définition, sa source et son année de référence.</li>
            <li>Seules des données publiées par des organismes identifiés seront utilisées.</li>
            <li>Les écarts de définition entre pays seront signalés à côté du graphique.</li>
          </ul>
          <p>
            Aucun graphique n’est affiché ici tant que ces données n’ont pas été collectées et vérifiées.
          </p>
        </Prose>
      </Container>
    </>
  );
}
