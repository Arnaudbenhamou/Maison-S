/*
  # Création de la table articles pour le journal

  1. Nouvelle table
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text, titre de l'article)
      - `slug` (text, URL-friendly, unique)
      - `excerpt` (text, résumé court)
      - `content` (text, contenu complet)
      - `featured_image` (text, URL de l'image principale)
      - `featured_image_alt` (text, texte alternatif de l'image)
      - `meta_title` (text, titre SEO)
      - `meta_description` (text, description SEO)
      - `meta_keywords` (text[], mots-clés SEO)
      - `author_id` (uuid, référence vers auth.users)
      - `author_name` (text, nom de l'auteur)
      - `category` (text, catégorie de l'article)
      - `tags` (text[], tags de l'article)
      - `status` (text, statut: draft, published, archived)
      - `featured` (boolean, article mis en avant)
      - `reading_time` (integer, temps de lecture en minutes)
      - `published_at` (timestamptz, date de publication)
      - `created_at` (timestamptz, date de création)
      - `updated_at` (timestamptz, date de modification)
      - `views_count` (integer, nombre de vues)
      - `likes_count` (integer, nombre de likes)
      - `canonical_url` (text, URL canonique)
      - `og_image` (text, image Open Graph)
      - `twitter_image` (text, image Twitter)
      - `schema_type` (text, type de schema.org)

  2. Sécurité
    - Enable RLS sur la table `articles`
    - Politiques pour la lecture publique des articles publiés
    - Politiques pour la gestion par les auteurs authentifiés

  3. Index
    - Index sur slug pour les performances
    - Index sur status et published_at
    - Index sur category et tags
*/

-- Création de la table articles
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image text,
  featured_image_alt text,
  meta_title text,
  meta_description text,
  meta_keywords text[],
  author_id uuid REFERENCES auth.users(id),
  author_name text NOT NULL,
  category text DEFAULT 'bien-être',
  tags text[] DEFAULT '{}',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured boolean DEFAULT false,
  reading_time integer DEFAULT 5,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  views_count integer DEFAULT 0,
  likes_count integer DEFAULT 0,
  canonical_url text,
  og_image text,
  twitter_image text,
  schema_type text DEFAULT 'Article'
);

-- Activation de RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Politique pour la lecture publique des articles publiés
CREATE POLICY "Articles publiés lisibles par tous"
  ON articles
  FOR SELECT
  TO public
  USING (status = 'published' AND published_at <= now());

-- Politique pour que les auteurs puissent voir tous leurs articles
CREATE POLICY "Auteurs peuvent voir leurs articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = author_id);

-- Politique pour que les auteurs puissent créer des articles
CREATE POLICY "Auteurs peuvent créer des articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- Politique pour que les auteurs puissent modifier leurs articles
CREATE POLICY "Auteurs peuvent modifier leurs articles"
  ON articles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- Politique pour que les auteurs puissent supprimer leurs articles
CREATE POLICY "Auteurs peuvent supprimer leurs articles"
  ON articles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS articles_slug_idx ON articles(slug);
CREATE INDEX IF NOT EXISTS articles_status_published_idx ON articles(status, published_at DESC);
CREATE INDEX IF NOT EXISTS articles_category_idx ON articles(category);
CREATE INDEX IF NOT EXISTS articles_tags_idx ON articles USING GIN(tags);
CREATE INDEX IF NOT EXISTS articles_featured_idx ON articles(featured, published_at DESC) WHERE featured = true;

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger pour mettre à jour updated_at
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Fonction pour générer automatiquement le slug
CREATE OR REPLACE FUNCTION generate_slug(title text)
RETURNS text AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(title, '[àáâãäå]', 'a', 'g'),
        '[èéêë]', 'e', 'g'
      ),
      '[^a-z0-9]+', '-', 'g'
    )
  );
END;
$$ language 'plpgsql';

-- Insertion d'articles d'exemple
INSERT INTO articles (
  title,
  slug,
  excerpt,
  content,
  featured_image,
  featured_image_alt,
  meta_title,
  meta_description,
  meta_keywords,
  author_name,
  category,
  tags,
  status,
  featured,
  reading_time,
  published_at,
  canonical_url,
  og_image,
  twitter_image
) VALUES 
(
  'L''Art de la Méditation au Quotidien',
  'art-meditation-quotidien',
  'Découvrez comment intégrer la méditation dans votre routine quotidienne pour plus de sérénité et de présence.',
  '# L''Art de la Méditation au Quotidien

La méditation n''est plus une pratique réservée aux moines tibétains ou aux yogis expérimentés. Elle s''est démocratisée et trouve aujourd''hui sa place dans nos vies modernes, souvent stressantes et hyperconnectées.

## Pourquoi méditer ?

La méditation offre de nombreux bienfaits scientifiquement prouvés :
- Réduction du stress et de l''anxiété
- Amélioration de la concentration
- Meilleur sommeil
- Renforcement du système immunitaire
- Développement de l''empathie et de la bienveillance

## Comment commencer ?

### 1. Choisissez un moment
Le matin au réveil ou le soir avant de dormir sont des moments privilégiés. L''important est de créer une routine.

### 2. Trouvez un lieu calme
Un coin de votre chambre, un coussin dans le salon, ou même votre jardin. L''essentiel est de vous sentir à l''aise.

### 3. Commencez petit
5 minutes suffisent pour débuter. Augmentez progressivement la durée selon votre confort.

## Techniques simples pour débuter

### La respiration consciente
Concentrez-vous simplement sur votre respiration. Observez l''air qui entre et sort de vos narines, sans chercher à la modifier.

### La méditation guidée
Utilisez des applications comme Headspace, Calm ou Petit BamBou pour vous accompagner dans vos premiers pas.

### La marche méditative
Marchez lentement en portant attention à chaque pas, à chaque sensation.

## Intégrer la méditation dans votre quotidien

- **Au bureau** : 2 minutes de respiration consciente entre deux réunions
- **Dans les transports** : Observez vos sensations plutôt que de consulter votre téléphone
- **Avant les repas** : Prenez quelques respirations pour vous connecter à l''instant présent

## Les obstacles courants

### "Je n''ai pas le temps"
5 minutes par jour représentent moins de 0,35% de votre journée. C''est un investissement minimal pour un retour considérable.

### "Je n''arrive pas à faire le vide"
C''est normal ! Le but n''est pas de faire le vide mais d''observer vos pensées sans jugement.

### "Je m''endors"
Choisissez un moment où vous êtes alerte, ou méditez assis plutôt qu''allongé.

## Conclusion

La méditation est un voyage, pas une destination. Chaque session est unique, et il n''y a pas de "bonne" ou "mauvaise" méditation. L''important est de pratiquer régulièrement, avec bienveillance envers vous-même.

Commencez dès aujourd''hui, même si ce n''est que pour quelques minutes. Votre esprit et votre corps vous en remercieront.',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80',
  'Personne en méditation dans un environnement paisible et naturel au lever du soleil',
  'L''Art de la Méditation au Quotidien | Maison Sealiah',
  'Découvrez comment intégrer la méditation dans votre routine quotidienne. Techniques simples, bienfaits scientifiques et conseils pratiques pour débuter.',
  ARRAY['méditation', 'bien-être', 'stress', 'relaxation', 'mindfulness', 'sérénité'],
  'Arnaud Benhamou',
  'méditation',
  ARRAY['méditation', 'bien-être', 'relaxation', 'stress'],
  'published',
  true,
  8,
  now() - interval '2 days',
  'https://www.maisonsealiah.fr/journal/art-meditation-quotidien',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80'
),
(
  '5 Rituels du Matin pour une Journée Équilibrée',
  '5-rituels-matin-journee-equilibree',
  'Commencez vos journées avec intention grâce à ces rituels simples mais puissants pour plus d''énergie et de bien-être.',
  '# 5 Rituels du Matin pour une Journée Équilibrée

La façon dont vous commencez votre journée détermine souvent son déroulement. Adopter des rituels matinaux peut transformer votre quotidien et améliorer significativement votre bien-être.

## Pourquoi créer des rituels matinaux ?

Les rituels matinaux vous permettent de :
- Prendre le contrôle de votre journée
- Réduire le stress et l''anxiété
- Augmenter votre niveau d''énergie
- Améliorer votre focus et votre productivité
- Cultiver un état d''esprit positif

## Rituel 1 : L''hydratation consciente

Dès le réveil, buvez un grand verre d''eau tiède avec quelques gouttes de citron. Cette pratique simple :
- Réhydrate votre corps après la nuit
- Stimule votre métabolisme
- Aide à éliminer les toxines
- Prépare votre système digestif

**Conseil** : Préparez votre verre d''eau la veille pour ne pas avoir à y penser.

## Rituel 2 : 5 minutes de mouvement

Pas besoin d''une séance de sport intensive. Quelques étirements, du yoga doux ou même danser sur votre musique préférée suffisent.

**Bénéfices** :
- Réveille votre corps en douceur
- Améliore la circulation sanguine
- Libère des endorphines
- Augmente votre niveau d''énergie

**Suggestions** :
- Salutation au soleil (yoga)
- Étirements du dos et des épaules
- Quelques squats ou pompes
- Marche rapide de 5 minutes

## Rituel 3 : La gratitude quotidienne

Prenez 2-3 minutes pour noter ou simplement penser à trois choses pour lesquelles vous êtes reconnaissant.

**Pourquoi ça marche** :
- Reprogramme votre cerveau vers le positif
- Réduit le stress et l''anxiété
- Améliore votre humeur
- Renforce votre résilience

**Comment faire** :
- Tenez un journal de gratitude
- Partagez votre gratitude avec un proche
- Visualisez ces moments positifs

## Rituel 4 : La planification intentionnelle

Définissez vos 3 priorités de la journée. Pas 10, pas 20, juste 3.

**Avantages** :
- Clarifie vos objectifs
- Réduit le sentiment d''être débordé
- Augmente votre efficacité
- Donne un sens à votre journée

**Méthode** :
1. Une priorité professionnelle importante
2. Une priorité personnelle/familiale
3. Une priorité bien-être/santé

## Rituel 5 : Le moment de silence

5 minutes de méditation, de respiration consciente ou simplement de silence.

**Techniques simples** :
- Respiration 4-7-8 (inspirez 4s, retenez 7s, expirez 8s)
- Observation des sensations corporelles
- Écoute des sons environnants
- Visualisation positive de votre journée

## Comment intégrer ces rituels ?

### Commencez petit
Choisissez 1-2 rituels et pratiquez-les pendant une semaine avant d''en ajouter d''autres.

### Adaptez à votre rythme
Si vous n''avez que 10 minutes, adaptez chaque rituel. L''important est la régularité, pas la durée.

### Préparez la veille
- Posez votre tenue de sport
- Préparez votre verre d''eau
- Laissez votre journal ouvert

### Soyez flexible
Certains matins seront différents, et c''est normal. L''important est de revenir à vos rituels dès que possible.

## Les erreurs à éviter

### Vouloir tout faire parfaitement
Il vaut mieux faire 2 minutes de méditation que de ne rien faire parce que vous n''avez pas 20 minutes.

### Être trop rigide
Vos rituels doivent s''adapter à votre vie, pas l''inverse.

### Abandonner après quelques jours
Il faut environ 21 jours pour créer une habitude. Soyez patient avec vous-même.

## Conclusion

Ces 5 rituels peuvent transformer vos matinées et, par extension, vos journées. Commencez dès demain avec un seul rituel qui vous inspire le plus.

Rappelez-vous : il ne s''agit pas de perfection, mais de progression. Chaque petit pas compte dans votre voyage vers un bien-être durable.',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80',
  'Routine matinale bien-être avec yoga et méditation dans un cadre naturel',
  '5 Rituels du Matin pour une Journée Équilibrée | Maison Sealiah',
  'Découvrez 5 rituels matinaux simples pour transformer vos journées : hydratation, mouvement, gratitude, planification et méditation.',
  ARRAY['rituels matinaux', 'bien-être', 'routine', 'énergie', 'productivité', 'équilibre'],
  'Arnaud Benhamou',
  'bien-être',
  ARRAY['routine', 'matin', 'bien-être', 'énergie'],
  'published',
  true,
  6,
  now() - interval '5 days',
  'https://www.maisonsealiah.fr/journal/5-rituels-matin-journee-equilibree',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80'
),
(
  'Les Bienfaits du Massage Thérapeutique',
  'bienfaits-massage-therapeutique',
  'Explorez les nombreux bienfaits du massage thérapeutique sur le corps et l''esprit, et découvrez comment il peut améliorer votre qualité de vie.',
  '# Les Bienfaits du Massage Thérapeutique

Le massage thérapeutique est bien plus qu''un simple moment de détente. C''est une pratique millénaire qui offre de nombreux bienfaits pour la santé physique et mentale.

## Qu''est-ce que le massage thérapeutique ?

Le massage thérapeutique utilise différentes techniques manuelles pour manipuler les tissus mous du corps. Contrairement au massage de relaxation, il vise des objectifs thérapeutiques spécifiques.

## Les bienfaits physiques

### Soulagement de la douleur
- Réduction des tensions musculaires
- Amélioration de la circulation sanguine
- Diminution de l''inflammation
- Libération d''endorphines naturelles

### Amélioration de la mobilité
- Augmentation de la flexibilité
- Réduction de la raideur articulaire
- Amélioration de l''amplitude de mouvement
- Prévention des blessures

### Récupération sportive
- Accélération de la récupération musculaire
- Réduction des courbatures
- Amélioration des performances
- Prévention des blessures

## Les bienfaits mentaux

### Réduction du stress
Le massage active le système nerveux parasympathique, favorisant la relaxation et réduisant les hormones de stress comme le cortisol.

### Amélioration du sommeil
Les séances régulières de massage peuvent améliorer la qualité du sommeil en favorisant la relaxation profonde.

### Bien-être émotionnel
- Réduction de l''anxiété
- Amélioration de l''humeur
- Augmentation de la confiance en soi
- Sensation de bien-être général

## Types de massage thérapeutique

### Massage suédois
Technique classique utilisant des mouvements longs et fluides pour détendre les muscles.

### Massage deep tissue
Pression plus profonde pour traiter les tensions chroniques et les nœuds musculaires.

### Massage aux pierres chaudes
Utilisation de pierres chauffées pour détendre les muscles et améliorer la circulation.

### Massage sportif
Spécialement conçu pour les athlètes et les personnes actives.

## Qui peut bénéficier du massage thérapeutique ?

- Personnes souffrant de douleurs chroniques
- Travailleurs de bureau avec tensions cervicales
- Sportifs en récupération
- Personnes stressées ou anxieuses
- Individus cherchant à améliorer leur bien-être général

## À quelle fréquence ?

La fréquence dépend de vos besoins :
- **Douleur chronique** : 1-2 fois par semaine
- **Maintenance** : 1 fois par mois
- **Récupération sportive** : Selon l''intensité de l''entraînement
- **Stress** : 2-3 fois par mois

## Conclusion

Le massage thérapeutique est un investissement dans votre santé et votre bien-être. Chez Maison Sealiah, nos praticiens qualifiés vous accompagnent dans votre parcours de mieux-être.',
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80',
  'Séance de massage thérapeutique professionnel dans un environnement apaisant',
  'Les Bienfaits du Massage Thérapeutique | Maison Sealiah',
  'Découvrez les bienfaits du massage thérapeutique : soulagement de la douleur, réduction du stress, amélioration du sommeil et bien-être général.',
  ARRAY['massage thérapeutique', 'bien-être', 'douleur', 'stress', 'récupération', 'santé'],
  'Arnaud Benhamou',
  'massage',
  ARRAY['massage', 'thérapie', 'bien-être', 'santé'],
  'published',
  false,
  7,
  now() - interval '1 week',
  'https://www.maisonsealiah.fr/journal/bienfaits-massage-therapeutique',
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80'
);