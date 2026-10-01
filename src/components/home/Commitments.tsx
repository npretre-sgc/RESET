import { claimLevels } from "@/data/method";
import { editorialPrinciples, preferredSources } from "@/data/principles";
import { Container } from "@/components/ui/Container";

export function Commitments() {
  return (
    <section aria-labelledby="engagements-titre" className="bg-white">
      <Container className="py-20 sm:py-24">
        <p className="mb-3 font-semibold text-reset-2">Nos engagements éditoriaux</p>
        <h2 id="engagements-titre" className="max-w-3xl text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em]">
          Rigueur des sources, honnêteté sur les limites
        </h2>

        <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {editorialPrinciples.map((p) => (
            <li key={p.title} className="border-l-[3px] border-reset pl-5">
              <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/85">{p.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-10 rounded-3xl bg-paper p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Chaque affirmation est qualifiée</h3>
            <p className="mt-3 leading-relaxed text-ink/85">
              Dans nos dossiers, le lecteur sait toujours s’il lit un fait mesuré, un calcul, une lecture ou une piste.
            </p>
            <dl className="mt-6 space-y-4">
              {claimLevels.map((level) => (
                <div key={level.label} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                  <dt>
                    <span className="inline-block rounded-md bg-white px-2.5 py-1 text-sm font-semibold text-reset ring-1 ring-reset/20">
                      {level.label}
                    </span>
                  </dt>
                  <dd className="text-[0.95rem] text-ink/80">{level.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Des sources publiques et vérifiables</h3>
            <p className="mt-3 leading-relaxed text-ink/85">
              Nous privilégions les données d’organismes publics et de la recherche. Chaque chiffre renverra à sa
              publication d’origine, avec sa date.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {preferredSources.map((s) => (
                <li key={s} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-[0.95rem] font-medium text-ink">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">RESET n’a aucun lien avec ces organismes.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
