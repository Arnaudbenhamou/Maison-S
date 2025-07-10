import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import AccessibleButton from '../components/AccessibleButton';

function Praticien() {
  const doctolibUrl = "https://www.doctolib.fr/cabinet-paramedical/puteaux/maison-sealiah-centre-de-sante-kinesitherapie-osteopathie";

  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>Notre Équipe - Kinésithérapeutes Ostéopathes Puteaux | Maison Sealiah</title>
        <meta name="description" content="Découvrez l'équipe pluridisciplinaire de Maison Sealiah à Puteaux : Arnaud Benhamou et Clément Jankowski, kinésithérapeutes ostéopathes experts en thérapies manuelles." />
        <meta name="keywords" content="équipe kinésithérapeute Puteaux, ostéopathe Puteaux, Arnaud Benhamou, Clément Jankowski, thérapie manuelle, rééducation, Doctolib, 92800" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/notre-equipe" />
        <meta property="og:title" content="Notre Équipe - Kinésithérapeutes Ostéopathes Puteaux | Maison Sealiah" />
        <meta property="og:description" content="Équipe pluridisciplinaire de kinésithérapeutes ostéopathes experts à Puteaux. Thérapies manuelles et approches holistiques." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/notre-equipe" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-equipe.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Équipe Maison Sealiah - Kinésithérapeutes Ostéopathes Puteaux" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-equipe.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Notre Équipe
          </h1>
          <p className="text-xl text-sealiah-amber max-w-3xl mx-auto leading-relaxed">
            Une équipe pluridisciplinaire dédiée à votre bien-être et votre santé
          </p>
        </motion.div>

        {/* Présentation de Maison Sealiah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-6 text-center">Maison Sealiah</h2>
          <div className="space-y-4 text-sealiah-amber leading-relaxed">
            <p>
              Maison Sealiah est un lieu de soin pensé pour conjuguer rigueur thérapeutique, accompagnement global et expérience sensorielle.
            </p>
            <p>
              Notre équipe pluridisciplinaire regroupe des professionnels spécialisés en kinésithérapie, ostéopathie et coaching sportif, engagés autour d'un objectif commun : prendre soin du corps dans toutes ses dimensions, à chaque étape de la vie.
            </p>
            <p>
              Ici, la prise en charge ne se limite pas au geste technique : elle s'inscrit dans une attention globale, personnalisée et humaine. Chaque séance est pensée comme un temps de respiration, dans un cadre apaisant, où l'expertise, le confort, la discrétion et l'écoute sont au cœur de notre démarche.
            </p>
            <p>
              Chez Maison Sealiah, la précision du geste, la qualité du toucher, le soin apporté à chaque détail et la bienveillance de notre équipe font partie de notre ADN.
            </p>
            <p>
              Un lieu où l'on vient pour se soigner, mais aussi pour se recentrer, se reconnecter à soi.
            </p>
            <p className="font-serif text-sealiah-eucalyptus text-lg text-center mt-6">
              Au plaisir de vous rencontrer.<br />
              L'équipe Maison Sealiah.
            </p>
          </div>
        </motion.div>

        {/* Équipe */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-serif text-sealiah-eucalyptus mb-12 text-center">
            Nos Praticiens
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Arnaud Benhamou */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            >
              <OptimizedImage
                src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah//arnaud-benhamou.jpg"
                alt="Portrait professionnel d'Arnaud Benhamou, Masseur-Kinésithérapeute et Ostéopathe, fondateur de Maison Sealiah"
                className="w-48 h-48 rounded-full mx-auto object-cover mb-6"
                width={192}
                height={192}
                loading="lazy"
              />
              <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-2">Arnaud Benhamou</h3>
              <p className="text-sealiah-amber font-semibold mb-4">Masseur-Kinésithérapeute Ostéopathe</p>
              <p className="text-sealiah-amber mb-6">Fondateur de Maison Sealiah</p>
              
              {/* Présentation personnelle d'Arnaud */}
              <div className="text-left space-y-4 text-sealiah-amber mb-6">
                <p>
                  Bonjour et bienvenue chez Maison Sealiah,
                </p>
                <p>
                  Ma pratique repose sur une approche intégrative qui vise à identifier et traiter les causes profondes de vos troubles, au-delà des seuls symptômes.
                </p>
                <p>
                  Enrichi par un parcours international, j'ai exploré diverses pratiques thérapeutiques à travers le monde — Bali, Inde, Thaïlande, et l'Université de Médecine Chinoise de Pékin — qui m'ont permis d'élargir ma vision du soin.
                </p>
                <p>
                  Convaincu que la médecine conventionnelle, bien que précieuse, ne suffit pas toujours à répondre aux besoins de l'être dans sa globalité, j'ai choisi de me spécialiser en ostéopathie, afin d'offrir une prise en charge complète, précise et personnalisée.
                </p>
                <p>
                  Je propose également des conseils en phytothérapie, intégrant les bienfaits des plantes, fruits, minéraux et végétaux dans une démarche de régénération tissulaire et de soutien quotidien à la santé.
                </p>
                <p>
                  Au plaisir de vous accueillir et de vous accompagner avec attention, sérieux et engagement sur le chemin du soin.
                </p>
                <p className="font-serif text-sealiah-eucalyptus text-center mt-4">
                  Arnaud Benhamou
                </p>
              </div>
              
              <div className="text-left space-y-4 text-sealiah-amber">
                <h4 className="text-lg font-serif text-sealiah-eucalyptus mb-3">Diplômes</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>2022</strong> - Diplôme d'Ostéopathe (D.O.) - Collège Ostéopathique du Pays Basque (COPB)</p>
                  <p><strong>2015</strong> - Diplôme d'État de Masseur-Kinésithérapeute - Université Alfonso X el Sabio (UAX) - Madrid</p>
                </div>
              </div>

              <div className="mt-6">
                <AccessibleButton
                  href={doctolibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
                  aria-label="Prendre rendez-vous avec Arnaud Benhamou sur Doctolib - Ouvre dans un nouvel onglet"
                >
                  Prendre rendez-vous
                </AccessibleButton>
              </div>
            </motion.div>

            {/* Clément Jankowski */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            >
              <OptimizedImage
                src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah//Clement-Jankowski-kinesitherapeute-Puteaux.png"
                alt="Portrait professionnel de Clément Jankowski, Masseur-Kinésithérapeute à Maison Sealiah"
                className="w-48 h-48 rounded-full mx-auto object-cover mb-6"
                width={192}
                height={192}
                loading="lazy"
              />
              <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-2">Clément Jankowski</h3>
              <p className="text-sealiah-amber font-semibold mb-6">Masseur-Kinésithérapeute</p>
              
              <div className="text-left space-y-4 text-sealiah-amber">
                <div className="space-y-3">
                  <p>
                    Masseur-kinésithérapeute diplômé, je vous accueille au cabinet pour une prise en charge personnalisée, que ce soit pour des douleurs musculo-squelettiques, une rééducation post-opératoire, neurologique ou un accompagnement à la reprise du sport.
                  </p>
                  <p>
                    Je m'appuie sur une approche globale et actualisée, combinant thérapie manuelle, exercices actifs et éducation thérapeutique, dans le respect de vos objectifs : retour au sport, à la marche ou amélioration de votre qualité de vie.
                  </p>
                  <p>
                    Chaque séance est adaptée à votre évolution, avec un suivi régulier et une écoute attentive.
                  </p>
                  <p className="font-serif text-sealiah-eucalyptus text-center mt-4">
                    Au plaisir de vous rencontrer,<br />
                    Clément
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <AccessibleButton
                  href={doctolibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
                  aria-label="Prendre rendez-vous avec Clément Jankowski sur Doctolib - Ouvre dans un nouvel onglet"
                >
                  Prendre rendez-vous
                </AccessibleButton>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information - Déplacé en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-6 text-center">Nos Coordonnées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 text-sealiah-amber" role="contentinfo">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <div>
                <p>Fixe : <a href="tel:+33140850022" className="hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1">01 40 85 00 22</a></p>
                <p>Mobile : <a href="tel:+33603736838" className="hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1">06 03 73 68 38</a></p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sealiah-amber" role="contentinfo">
              <Mail className="w-5 h-5" aria-hidden="true" />
              <a 
                href="mailto:contact@maisonsealiah.fr" 
                className="hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1"
                aria-label="Envoyer un email à contact@maisonsealiah.fr"
              >
                contact@maisonsealiah.fr
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sealiah-amber" role="contentinfo">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span>9 Rue Roque de Fillol, 92800 Puteaux, France</span>
            </div>
            <div className="flex items-center space-x-4 text-sealiah-amber" role="contentinfo">
              <Globe className="w-5 h-5" aria-hidden="true" />
              <span>Français, Anglais, Espagnol</span>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <AccessibleButton
              href={doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
              aria-label="Prendre rendez-vous sur Doctolib - Ouvre dans un nouvel onglet"
            >
              Prendre rendez-vous
            </AccessibleButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Praticien;