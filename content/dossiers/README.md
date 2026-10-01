# Dossiers RESET

Ce dossier accueillera les articles au format MDX (version 2).

- Un fichier par dossier : `<slug>.mdx`.
- Les métadonnées suivent le type `Article` défini dans `src/lib/content/types.ts`.
- Statuts possibles : `brouillon`, `en-revision`, `publie`. Seuls les dossiers `publie` sont exposés.
- Les fichiers commençant par `_` (comme `_modele.mdx`) ne sont jamais publiés.
- Plan obligatoire : voir `_modele.mdx`.
