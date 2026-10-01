import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Principle() {
  return (
    <section aria-labelledby="principe-titre" className="bg-white">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 font-semibold text-reset-2">Notre principe</p>
          <h2 id="principe-titre" className="text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            Ne pas réinventer ce qui fonctionne déjà ailleurs.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-ink lg:pt-10">
          <p>
            Plutôt que d’imaginer un modèle entièrement nouveau, nous partons de ce qui existe : des politiques
            appliquées, financées, évaluées.
          </p>
          <p>
            Mais aucune politique étrangère n’est jugée supérieure sans analyse factuelle et contradictoire. Une
            réforme peut réussir sur un point et échouer sur un autre. Nous montrons les deux.
          </p>
          <p>
            <Link href="/a-propos" className="font-semibold text-reset underline decoration-reset/30 decoration-2 underline-offset-4 hover:decoration-coral">
              Pourquoi RESET existe
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
