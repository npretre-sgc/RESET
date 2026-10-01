import type { ThemeSlug } from "@/data/themes";

/**
 * Modèle de contenu des dossiers RESET.
 * En V2, ces objets seront produits à partir des fichiers MDX de /content/dossiers.
 * La structure est pensée pour pouvoir migrer plus tard vers un CMS.
 */
export type PublicationStatus = "brouillon" | "en-revision" | "publie";

export type DocumentarySource = {
  title: string;
  publisher: string;
  url?: string;
  /** Date de publication de la source (ISO 8601). */
  publishedAt?: string;
  /** Date de consultation par la rédaction (ISO 8601). */
  consultedAt?: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  theme: ThemeSlug;
  countries: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  sources: DocumentarySource[];
  status: PublicationStatus;
};
