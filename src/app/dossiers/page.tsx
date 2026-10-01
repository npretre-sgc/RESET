import type { Metadata } from "next";
import { themes } from "@/data/themes";
import { getArticlesByTheme } from "@/lib/content/articles";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Les dossiers",
  description: "Les grandes thématiques étudiées par RESET.",
};

export default function DossiersPage() {
  return (
    <>
      <PageHeader kicker="Les dossiers" title="Les grandes thématiques">
        <p>
          Chaque thématique réunira les dossiers qui la concernent. Les premiers sont en cours de rédaction&nbsp;:
          ils seront publiés quand leurs sources auront été vérifiées.
        </p>
      </PageHeader>
      <Container className="py-16 sm:py-20">
        <ul className="border-t-2 border-reset">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const count = getArticlesByTheme(theme.slug).length;
            return (
              <li key={theme.slug} id={theme.slug} className="grid scroll-mt-24 gap-4 border-b border-ink/10 py-8 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                <Icon aria-hidden="true" className="text-reset-2" size={32} strokeWidth={1.75} />
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight">{theme.name}</h2>
                  <p className="mt-1 text-muted">{theme.scope}</p>
                </div>
                <p className="text-sm font-medium text-ink/70 tabular">
                  {count === 0 ? "Aucun dossier publié" : `${count} dossier${count > 1 ? "s" : ""}`}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
