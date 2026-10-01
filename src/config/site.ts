/**
 * Configuration globale du site RESET.
 * L'URL définitive sera fixée quand le domaine sera choisi (variable NEXT_PUBLIC_SITE_URL).
 */
export const site = {
  name: "RESET",
  signature: "Et si les solutions existaient déjà ailleurs\u00a0?",
  motto: ["Observer", "Comparer", "Comprendre", "Adapter"] as const,
  description:
    "RESET est une plateforme indépendante de réflexion citoyenne et d’analyse comparative internationale des politiques publiques.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/dossiers", label: "Les dossiers" },
  { href: "/monde", label: "Le monde" },
  { href: "/comparer", label: "Comparer" },
  { href: "/methode", label: "Notre méthode" },
  { href: "/a-propos", label: "À propos" },
];

export const legalNav: NavItem[] = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
];
