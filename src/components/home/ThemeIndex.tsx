import Link from "next/link";
import { themes } from "@/data/themes";
import { getArticlesByTheme } from "@/lib/content/articles";
import { Container } from "@/components/ui/Container";

/** Sommaire des grandes thématiques, présenté comme la table des matières d'une revue. */
export function ThemeIndex() {
  return (
    <section id="thematiques" aria-labelledby="thematiques-titre" className="scroll-mt-20 bg-paper">
      <Container className="py-20 sm:py-24">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-semibold text-reset-2">Les grands dossiers</p>
            <h2 id="thematiques-titre" className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Onze thématiques, une même exigence
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Aucun dossier n’est encore publié. Ils paraîtront au fil des recherches, et aucune rubrique ne sera remplie pour la forme.
          </p>
        </div>

        <ul className="grid border-t-2 border-reset md:grid-cols-2 md:gap-x-12">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const count = getArticlesByTheme(theme.slug).length;
            return (
              <li key={theme.slug} className="border-b border-ink/12">
                <Link
                  href={`/dossiers#${theme.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr] items-start gap-4 py-5 sm:py-6"
                >
                  <Icon aria-hidden="true" className="mt-0.5 text-reset-2" size={28} strokeWidth={1.75} />
                  <span>
                    <span className="block font-display text-xl font-bold tracking-tight text-reset group-hover:underline group-hover:decoration-coral group-hover:decoration-2 group-hover:underline-offset-4">
                      {theme.name}
                    </span>
                    <span className="mt-1 block text-[0.95rem] text-muted">{theme.scope}</span>
                    {count > 0 ? (
                      <span className="mt-2 block text-sm font-medium text-reset-2 tabular">
                        {count} dossier{count > 1 ? "s" : ""}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
