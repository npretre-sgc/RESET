import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function AboutCta() {
  return (
    <section aria-labelledby="apropos-titre" className="border-t border-ink/10 bg-paper">
      <Container className="flex flex-col items-start gap-8 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="apropos-titre" className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Un projet citoyen, indépendant de tout parti
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            RESET ne promeut ni un pays, ni un parti, ni une idéologie. C’est un laboratoire de réflexion ouvert aux
            citoyens, aux professionnels, aux étudiants et aux chercheurs.
          </p>
        </div>
        <ButtonLink href="/a-propos">Découvrir le projet</ButtonLink>
      </Container>
    </section>
  );
}
