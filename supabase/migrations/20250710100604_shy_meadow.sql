/*
  # Suppression des trackers de performances

  1. Modifications de la table
    - Suppression des colonnes `views_count` et `likes_count`
    - Ces métriques ne sont pas nécessaires pour un site vitrine médical

  2. Nettoyage
    - Suppression des fonctions liées aux compteurs
    - Mise à jour des types et services
*/

-- Suppression des colonnes de tracking
ALTER TABLE articles DROP COLUMN IF EXISTS views_count;
ALTER TABLE articles DROP COLUMN IF EXISTS likes_count;