import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building,
  Coins,
  GraduationCap,
  HandHeart,
  HeartPulse,
  House,
  Landmark,
  Leaf,
  Scale,
  TrainFront,
} from "lucide-react";

export type Theme = {
  slug: string;
  name: string;
  /** Périmètre couvert par la thématique (description éditoriale, pas une donnée). */
  scope: string;
  icon: LucideIcon;
};

export const themes = [
  { slug: "education-jeunesse", name: "Éducation et jeunesse", scope: "École, vie scolaire, formation, insertion des jeunes", icon: GraduationCap },
  { slug: "sante-protection-sociale", name: "Santé et protection sociale", scope: "Assurance maladie, hôpital, prévention, reste à charge", icon: HeartPulse },
  { slug: "finances-publiques-fiscalite", name: "Finances publiques et fiscalité", scope: "Dette, dépense publique, impôts, pilotage budgétaire", icon: Coins },
  { slug: "organisation-etat", name: "Organisation de l’État", scope: "Administration, collectivités, numérique public", icon: Building },
  { slug: "justice-securite", name: "Justice et sécurité", scope: "Délais de justice, prisons, police, prévention", icon: Scale },
  { slug: "travail-economie", name: "Travail et économie", scope: "Emploi, compétences, entreprises, productivité", icon: Briefcase },
  { slug: "retraites-solidarite", name: "Retraites et solidarité", scope: "Systèmes de retraite, dépendance, minima sociaux", icon: HandHeart },
  { slug: "logement-urbanisme", name: "Logement et urbanisme", scope: "Construction, logement social, aménagement", icon: House },
  { slug: "transports-infrastructures", name: "Transports et infrastructures", scope: "Réseaux, maintenance, financement, mobilités", icon: TrainFront },
  { slug: "environnement-energie", name: "Environnement et énergie", scope: "Production d’énergie, climat, ressources", icon: Leaf },
  { slug: "democratie-institutions", name: "Démocratie et institutions", scope: "Participation, Parlement, décentralisation", icon: Landmark },
] as const satisfies readonly Theme[];

export type ThemeSlug = (typeof themes)[number]["slug"];
