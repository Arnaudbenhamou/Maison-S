-- Suppression du système d'articles en vedette
-- Suppression de la colonne featured
ALTER TABLE articles DROP COLUMN IF EXISTS featured;

-- Suppression de l'index sur featured
DROP INDEX IF EXISTS articles_featured_idx;

-- Mise à jour des commentaires pour refléter le changement
COMMENT ON TABLE articles IS 'Table des articles du blog, classés par ordre chronologique uniquement';