import type { Metadata } from "next";
import { countries, countryStatusLabel, getCountry } from "@/data/countries";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Le monde comme laboratoire",
  description: "Les pays étudiés par RESET et les sujets sur lesquels ils sont analysés.",
};

export default function MondePage() {
  const japon = getCountry("japon");
  return (
    <>
      <PageHeader kicker="Le monde" title="Le monde comme laboratoire">
        <p>
          Chaque pays est étudié sur des sujets précis, jamais comme un modèle d’ensemble. Cette liste, présentée
          par ordre alphabétique, n’est pas un classement.
        </p>
      </PageHeader>
      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.3fr]">
        <section aria-labelledby="pays">
          <h2 id="pays" className="mb-6 text-2xl font-extrabold tracking-tight">Pays prévus</h2>
          <ul className="border-t-2 border-reset">
            {countries.map((c) => (
              <li key={c.slug} className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4">
                <span className={`font-display text-xl font-bold ${c.status === "en-cours" ? "text-reset" : "text-ink/80"}`}>{c.name}</span>
                <span className={`text-sm font-medium ${c.status === "en-cours" ? "text-reset" : "text-muted"}`}>
                  {countryStatusLabel[c.status]}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="japon" className="self-start rounded-2xl bg-paper p-6 sm:p-9">
          <h2 id="japon" className="text-3xl font-extrabold tracking-tight">Japon</h2>
          <p className="mt-3 leading-relaxed">
            Premier pays étudié. Les pistes ci-dessous sont des questions de recherche, pas des conclusions. Les
            difficultés propres au Japon seront étudiées au même titre que ses réussites.
          </p>
          <dl className="mt-6 divide-y divide-ink/10">
            {japon?.tracks?.map((t) => (
              <div key={t.domain} className="py-4">
                <dt className="font-display font-bold text-reset">{t.domain}</dt>
                <dd className="mt-1 text-ink/85">{t.topics.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>
    </>
  );
}
