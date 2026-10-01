import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";
import { ToFill } from "@/components/ui/ToFill";

export const metadata: Metadata = { title: "Politique de confidentialité", robots: { index: false } };

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader kicker="Informations" title="Politique de confidentialité" />
      <Container className="py-16 sm:py-20">
        <Prose>
          <h2>Ce que nous collectons</h2>
          <p>
            Dans sa version actuelle, RESET ne propose ni compte utilisateur, ni formulaire, ni newsletter. Le site
            ne dépose aucun cookie publicitaire et n’utilise aucun outil de mesure d’audience. Les polices de
            caractères sont hébergées sur nos serveurs&nbsp;: aucune requête n’est envoyée à un service tiers lors
            de votre visite.
          </p>
          <h2>Journaux techniques</h2>
          <p>
            Comme tout site, l’hébergeur peut conserver temporairement des journaux techniques (adresse IP, date et
            page consultée) nécessaires à la sécurité du service.{" "}
            <ToFill>durée de conservation et identité de l’hébergeur</ToFill>
          </p>
          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement et
            d’opposition. Vous pouvez également saisir la CNIL.{" "}
            <ToFill>adresse de contact pour exercer vos droits</ToFill>
          </p>
          <h2>Évolutions</h2>
          <p>
            Cette politique sera mise à jour avant l’ajout de toute fonctionnalité impliquant des données
            personnelles.
          </p>
        </Prose>
      </Container>
    </>
  );
}
