import Link from "next/link";
import { getCountry } from "@/data/countries";
import { getPublishedArticles } from "@/lib/content/articles";
import { Container } from "@/components/ui/Container";

/**
 * Bloc « Derniers dossiers ».
 * Tant qu'aucun dossier n'est publié, il présente le chantier en cours (Japon)
 * avec ses pistes de recherche, clairement signalées comme telles.
 */
export function LatestWork() {
  const articles = getPublishedArticles().slice(0, 3);
  const japon = getCountry("japon");

  return (
    <section aria-labelledby="derniers-titre" className="bg-white">
      <Container className="py-20 sm:py-24">
        <p className="mb-3 font-semibold text-reset-2">Derniers dossiers</p>

        {articles.length > 0 ? (
          <>
            <h2 id="derniers-titre" className="mb-10 text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-[-0.03em]">
              Récemment publiés
            </h2>
            <ul className="grid gap-10 md:grid-cols-3">
              {articles.map((a) => (
                <li key={a.id} className="border-t-2 border-reset pt-5">
                  <h3 className="text-xl font-bold leading-snug">
                    <Link href={`/dossiers/${a.theme}/${a.slug}`} className="hover:underline">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-muted">{a.summary}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            <div>
              <h2 id="derniers-titre" className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em]">
                Premier terrain d’étude&nbsp;: le Japon
              </h2>
              <p className="mt-6 text-lg leading-relaxed">
                Aucun dossier n’est encore publié. Nos premières recherches portent sur le Japon, à travers cinq
                domaines. Les difficultés propres au pays seront étudiées avec la même attention que ses réussites.
              </p>
              <p className="mt-4 text-muted">
                Nous écartons d’emblée les explications fondées sur une prétendue supériorité culturelle.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-reset-pale px-4 py-1.5 text-sm font-semibold text-reset">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-coral" />
                Recherche en cours
              </p>
            </div>

            <div className="rounded-2xl bg-paper p-6 sm:p-9">
              <h3 className="mb-6 font-display text-lg font-bold text-ink">Pistes de recherche</h3>
              <dl className="divide-y divide-ink/10">
                {japon?.tracks?.map((track) => (
                  <div key={track.domain} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="font-display font-bold text-reset">{track.domain}</dt>
                    <dd className="text-ink/85">{track.topics.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
