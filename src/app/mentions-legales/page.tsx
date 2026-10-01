import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";
import { ToFill } from "@/components/ui/ToFill";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader kicker="Informations" title="Mentions légales" />
      <Container className="py-16 sm:py-20">
        <Prose>
          <h2>Éditeur du site</h2>
          <p><ToFill>nom ou dénomination, forme juridique, adresse, numéro d’immatriculation le cas échéant</ToFill></p>
          <h2>Directeur de la publication</h2>
          <p><ToFill>nom du directeur de la publication</ToFill></p>
          <h2>Hébergement</h2>
          <p><ToFill>nom, adresse et téléphone de l’hébergeur retenu</ToFill></p>
          <h2>Contact</h2>
          <p><ToFill>adresse de contact</ToFill></p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes et éléments graphiques de RESET sont protégés. Les données citées restent la propriété de
            leurs producteurs, dont la source est systématiquement indiquée.
          </p>
        </Prose>
      </Container>
    </>
  );
}
