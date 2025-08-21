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
        <title>Notre Équipe - Kinésithérapeutes & Ostéopathes | Maison Sealiah</title>
        <meta name="description" content="Rencontrez l'équipe de Maison Sealiah : Arnaud Benhamou et Clément Jankowski, kinésithérapeutes et ostéopathes experts à Puteaux." />
        <meta name="keywords" content="équipe, kinésithérapeute, ostéopathe, Arnaud Benhamou, Clément Jankowski, Puteaux, Maison Sealiah" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/notre-equipe" />
        <meta property="og:title" content="Notre Équipe - Kinésithérapeutes & Ostéopathes | Maison Sealiah" />
        <meta property="og:description" content="Rencontrez l'équipe de Maison Sealiah : professionnels experts en kinésithérapie et ostéopathie à Puteaux." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/notre-equipe" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-equipe.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Équipe Maison Sealiah - Kinésithérapeutes et Ostéopathes" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-equipe.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        {/* Présentation de Maison Sealiah */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
          aria-labelledby="maison-sealiah-presentation"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 id="maison-sealiah-presentation" className="text-3xl font-serif text-sealiah-eucalyptus mb-6 text-center">
              Maison Sealiah
            </h2>
            <div className="text-sealiah-amber leading-relaxed space-y-4">
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
              <p className="text-center font-serif text-sealiah-eucalyptus text-lg mt-6">
                Au plaisir de vous rencontrer.<br />
                L'équipe Maison Sealiah.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Présentation de l'équipe */}
        <section className="mb-20" aria-labelledby="team-members">
          <div className="text-center mb-12">
            <h2 id="team-members" className="text-3xl font-serif text-sealiah-eucalyptus mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-sealiah-amber max-w-2xl mx-auto">
              Rencontrez nos praticiens experts qui vous accompagnent avec passion et professionnalisme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Arnaud Benhamou */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            >
              <OptimizedImage
                src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/arnaud-benhamou.jpg"
                alt="Portrait professionnel d'Arnaud Benhamou, Masseur-Kinésithérapeute et Ostéopathe, fondateur de Maison Sealiah"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                width={192}
                height={192}
                loading="lazy"
              />
              <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-2">
                Arnaud Benhamou
              </h2>
              <p className="text-sealiah-amber font-semibold mb-4">
                Masseur-Kinésithérapeute et Ostéopathe
              </p>
              <p className="text-sealiah-amber mb-6">
                Fondateur de Maison Sealiah
              </p>
              
              {/* Contact Arnaud */}
              <div className="space-y-3 mb-6 text-sm text-sealiah-amber">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <a href="tel:+33603736838" className="hover:text-sealiah-eucalyptus transition-colors">
                    06.03.73.68.38
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span>Français, Anglais, Espagnol</span>
                </div>
              </div>

              <AccessibleButton
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
                aria-label="Prendre rendez-vous avec Arnaud Benhamou sur Doctolib - Ouvre dans un nouvel onglet"
              >
                Prendre rendez-vous
              </AccessibleButton>
            </motion.div>

            {/* Clément Jankowski */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            >
              <OptimizedImage
                src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/Clement-Jankowski-kinesitherapeute-Puteaux.png"
                alt="Portrait professionnel de Clément Jankowski, Masseur-Kinésithérapeute à Maison Sealiah"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                width={192}
                height={192}
                loading="lazy"
              />
              <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-2">
                Clément Jankowski
              </h2>
              <p className="text-sealiah-amber font-semibold mb-4">
                Masseur-Kinésithérapeute
              </p>
              <p className="text-sealiah-amber mb-6">
                Spécialiste en rééducation
              </p>
              
              {/* Contact Clément */}
              <div className="space-y-3 mb-6 text-sm text-sealiah-amber">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <a href="tel:+33140850022" className="hover:text-sealiah-eucalyptus transition-colors">
                    01.40.85.00.22
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span>Français, Anglais</span>
                </div>
              </div>

              <AccessibleButton
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
                aria-label="Prendre rendez-vous avec Clément Jankowski sur Doctolib - Ouvre dans un nouvel onglet"
              >
                Prendre rendez-vous
              </AccessibleButton>
            </motion.div>
          </div>
        </section>

        {/* Diplômes et formations d'Arnaud */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
          aria-labelledby="arnaud-qualifications"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 id="arnaud-qualifications" className="text-2xl font-serif text-sealiah-eucalyptus mb-8 text-center">
              Parcours et Formations d'Arnaud Benhamou
            </h2>
            
            {/* Diplômes nationaux et universitaires */}
            <div className="mb-8">
              <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-6">
                Diplômes nationaux et universitaires
              </h3>
              <div className="space-y-4" role="list">
                <div className="border-l-4 border-sealiah-amber pl-4">
                  <p className="text-sealiah-eucalyptus font-semibold text-lg" role="listitem">2022</p>
                  <p className="text-sealiah-amber">Diplôme d'Ostéopathe (D.O.) - Collège Ostéopathique du Pays Basque (COPB)</p>
                </div>
                <div className="border-l-4 border-sealiah-amber pl-4">
                  <p className="text-sealiah-eucalyptus font-semibold text-lg" role="listitem">2015</p>
                  <p className="text-sealiah-amber">MKDE - Diplôme d'État de Masseur-Kinésithérapeute - Université Alfonso X el Sabio (UAX) - Madrid</p>
                </div>
              </div>
            </div>

            {/* Autres formations */}
            <div>
              <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-6">
                Autres formations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                {[
                  {
                    year: "2020",
                    title: "Prise en charge des lésions musculaires du sportif",
                    institution: "INFMP"
                  },
                  {
                    year: "2018",
                    title: "Massage ayurvedique",
                    institution: "Rasovai méditation et massage training school - Inde"
                  },
                  {
                    year: "2018",
                    title: "Massage thailandais traditionnel",
                    institution: "Wat po school - Thaïlande"
                  },
                  {
                    year: "2017",
                    title: "Massage Tuina et cupping (ventouse thérapie)",
                    institution: "Université de médecine chinoise de Pékin"
                  },
                  {
                    year: "2017",
                    title: "Massage Balinais",
                    institution: "Jamu spa school - Bali"
                  },
                  {
                    year: "2016",
                    title: "Traitement des cicatrices",
                    institution: "Formatkine - Paris"
                  },
                  {
                    year: "2016",
                    title: "Kinésithérapie respiratoire du nourrisson et de l'enfant de 0 à 2 ans",
                    institution: "Kiné pédiatrie - Paris"
                  }
                ].map((formation, index) => (
                  <div key={index} className="bg-sealiah-ivory/50 rounded-lg p-4" role="listitem">
                    <p className="text-sealiah-eucalyptus font-semibold text-lg">{formation.year}</p>
                    <p className="text-sealiah-amber font-medium mb-1">{formation.title}</p>
                    <p className="text-sealiah-amber text-sm">{formation.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Informations de contact générales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
          aria-labelledby="contact-info"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 id="contact-info" className="text-2xl font-serif text-sealiah-eucalyptus mb-6">
              Nous Contacter
            </h2>
            <address className="space-y-4 text-sealiah-amber not-italic">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>9 rue roque de Fillol, 92800 Puteaux, France</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <a 
                  href="mailto:contact@maisonsealiah.fr" 
                  className="hover:text-sealiah-eucalyptus transition-colors"
                  aria-label="Envoyer un email à contact@maisonsealiah.fr"
                >
                  contact@maisonsealiah.fr
                </a>
              </div>
            </address>
            <div className="mt-8">
              <h3 className="text-lg font-serif text-sealiah-eucalyptus mb-4">Horaires</h3>
              <div className="space-y-2 text-sealiah-amber" role="list">
                <p role="listitem">Lundi - Vendredi : 8h - 20h</p>
                <p role="listitem">Samedi : Fermé</p>
                <p role="listitem">Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Praticien;