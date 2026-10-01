export type MethodStep = {
  number: string;
  title: string;
  summary: string;
  questions: string[];
};

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Constater",
    summary: "Définir précisément le problème français.",
    questions: [
      "Que disent les données disponibles, et depuis quand ?",
      "Quelle est l’ampleur du problème, et pour qui ?",
      "Qu’est-ce qui est établi, et qu’est-ce qui reste discuté ?",
    ],
  },
  {
    number: "02",
    title: "Observer",
    summary: "Identifier les réponses apportées dans d’autres pays.",
    questions: [
      "Quels pays ont affronté un problème comparable ?",
      "Quelles politiques ont-ils mises en place, et dans quel contexte ?",
      "Les indicateurs utilisés recouvrent-ils les mêmes réalités qu’en France ?",
    ],
  },
  {
    number: "03",
    title: "Comprendre",
    summary: "Étudier les résultats, les coûts et les limites.",
    questions: [
      "Quels résultats ont été mesurés, et par qui ?",
      "S’agit-il d’un effet démontré ou d’une simple corrélation ?",
      "Quels coûts, quels effets indésirables, quels perdants ?",
    ],
  },
  {
    number: "04",
    title: "Adapter",
    summary: "Examiner les conditions de transposition en France.",
    questions: [
      "Quels obstacles juridiques, budgétaires, administratifs ou sociétaux ?",
      "Qu’est-ce qui tient au contexte du pays d’origine ?",
      "Sur quel horizon de temps une transformation est-elle réaliste ?",
    ],
  },
  {
    number: "05",
    title: "Évaluer",
    summary: "Identifier les indicateurs qui permettraient de mesurer les résultats d’une expérimentation.",
    questions: [
      "Quels indicateurs suivre, avec quelle situation de départ ?",
      "Comment distinguer l’effet de la mesure des autres évolutions ?",
      "À quel moment juger qu’une expérimentation a échoué ?",
    ],
  },
];

/** Niveaux d’affirmation utilisés dans les dossiers pour qualifier chaque énoncé. */
export const claimLevels = [
  { label: "Donnée établie", description: "Publiée par une source identifiable, avec sa définition et son année." },
  { label: "Estimation", description: "Chiffre calculé ou projeté, dont la méthode et la marge d’incertitude sont indiquées." },
  { label: "Interprétation", description: "Lecture des données proposée par RESET ou par des chercheurs, présentée comme telle." },
  { label: "Hypothèse", description: "Piste à vérifier, qui ne doit pas être lue comme une conclusion." },
] as const;

/** Structure commune à tous les dossiers. */
export const articleStructure = [
  "La situation française",
  "Les pratiques internationales",
  "Les résultats observés",
  "Les limites",
  "La possibilité d’une adaptation française",
  "Les questions ouvertes",
] as const;
