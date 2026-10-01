import type { Article } from "./types";

/**
 * Registre des dossiers.
 * V1 : volontairement vide — aucun dossier n'est publié et aucun contenu fictif n'est créé.
 * V2 : ce tableau sera alimenté par la lecture des fichiers MDX de /content/dossiers.
 */
const registry: Article[] = [];

/** Seuls les dossiers au statut « publie » sont exposés. Les brouillons ne sortent jamais d'ici. */
export function getPublishedArticles(): Article[] {
  return registry
    .filter((a) => a.status === "publie")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticlesByTheme(theme: string): Article[] {
  return getPublishedArticles().filter((a) => a.theme === theme);
}

export function getArticlesByCountry(country: string): Article[] {
  return getPublishedArticles().filter((a) => a.countries.includes(country));
}
