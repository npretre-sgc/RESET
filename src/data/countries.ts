export type CountryStatus = "en-cours" | "a-venir";

export type ResearchTrack = { domain: string; topics: string[] };

export type Country = {
  slug: string;
  name: string;
  status: CountryStatus;
  /** Pistes de recherche (questions à instruire, pas des conclusions). */
  tracks?: ResearchTrack[];
};

const list = [
  {
    slug: "japon",
    name: "Japon",
    status: "en-cours",
    tracks: [
      { domain: "Éducation", topics: ["organisation de la vie scolaire", "participation des élèves à la vie collective", "enseignement moral et civique", "résultats scolaires et bien-être des élèves"] },
      { domain: "Santé", topics: ["assurance maladie universelle", "participation financière des patients", "plafonnement des dépenses médicales", "financement global du système"] },
      { domain: "Transports", topics: ["organisation des réseaux", "ponctualité et maintenance", "financement"] },
      { domain: "Prévention des risques", topics: ["exercices d’évacuation", "préparation aux catastrophes", "organisation des secours"] },
      { domain: "Gestion publique", topics: ["amélioration continue", "qualité des services", "organisation des processus"] },
    ],
  },
  { slug: "suisse", name: "Suisse", status: "a-venir" },
  { slug: "danemark", name: "Danemark", status: "a-venir" },
  { slug: "suede", name: "Suède", status: "a-venir" },
  { slug: "finlande", name: "Finlande", status: "a-venir" },
  { slug: "allemagne", name: "Allemagne", status: "a-venir" },
  { slug: "pays-bas", name: "Pays-Bas", status: "a-venir" },
  { slug: "estonie", name: "Estonie", status: "a-venir" },
  { slug: "singapour", name: "Singapour", status: "a-venir" },
  { slug: "canada", name: "Canada", status: "a-venir" },
  { slug: "etats-unis", name: "États-Unis", status: "a-venir" },
] satisfies Country[];

/** Toujours affichés par ordre alphabétique : jamais sous forme de classement. */
export const countries: Country[] = [...list].sort((a, b) =>
  a.name.localeCompare(b.name, "fr"),
);

export const countryStatusLabel: Record<CountryStatus, string> = {
  "en-cours": "Étude en cours",
  "a-venir": "À venir",
};

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
