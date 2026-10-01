import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-semibold text-reset-2">Erreur 404</p>
      <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold tracking-[-0.03em]">Cette page n’existe pas</h1>
      <p className="mt-5 max-w-xl text-lg">L’adresse est peut-être erronée, ou la page a été déplacée.</p>
      <div className="mt-8">
        <ButtonLink href="/">Revenir à l’accueil</ButtonLink>
      </div>
    </Container>
  );
}
