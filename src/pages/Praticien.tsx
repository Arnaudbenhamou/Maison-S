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
        <title>Arnaud Benhamou - Kinésithérapeute Ostéopathe | Maison Sealiah</title>
        <meta name="description" content="Arnaud Benhamou, Masseur-Kinésithérapeute et Ostéopathe à Puteaux. Fondateur de Maison Sealiah, expert en thérapies manuelles et approches holistiques." />
        <meta name="keywords" content="Arnaud Benhamou, kinésithérapeute, ostéopathe, Puteaux, thérapie manuelle, massage, rééducation, Doctolib" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/praticien/arnaud-benhamou" />
        <meta property="og:title" content="Arnaud Benhamou - Kinésithérapeute Ostéopathe | Maison Sealiah" />
        <meta property="og:description" content="Masseur-Kinésithérapeute et Ostéopathe à Puteaux, expert en thérapies manuelles et approches holistiques." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/praticien/arnaud-benhamou" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/arnaud-benhamou.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Arnaud Benhamou - Kinésithérapeute Ostéopathe" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/arnaud-benhamou.jpg" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <OptimizedImage
              src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah//Maison-Sealiah-prevenir-soigner-apaiser.png"
              alt="Logo Maison Sealiah - Prévenir, Soigner, Apaiser"
              className="w-48 h-48 rounded-full mx-auto object-cover mb-6"
              width={192}
              height={192}
              loading="lazy"
            />
            <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-4">
              Arnaud Benhamou
            </h1>
            <p className="text-xl text-sealiah-amber">
              Masseur-Kinésithérapeute et Ostéopathe
            </p>
            <div className="mt-8">
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
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 text-sealiah-amber" role="contentinfo">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <a href="tel:+33603736838" className="hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1">06.03.73.68.38</a>
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
        </motion.div>

        {/* Présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">Présentation</h2>
          <div className="space-y-4 text-sealiah-amber">
            <p>
              Bonjour, je vous accueille du lundi au vendredi au sein du cabinet de kinésithérapie et d'ostéopathie, 
              situé au 9 Rue Roque de Fillol, 92800 Puteaux, France.
            </p>
            <p>
              Ma pratique repose sur une approche intégrative qui vise à identifier et traiter la source de vos maux, 
              au-delà de vos simples symptômes.
            </p>
            <p>
              Mon parcours professionnel a été enrichi par une exploration des pratiques thérapeutiques diverses à travers le monde. 
              Tout en reconnaissant les mérites de la médecine allopathique, j'ai constaté qu'elle peut parfois présenter des 
              lacunes dans la prise en charge globale des patients.
            </p>
            <p>
              Animé par la quête de solutions holistiques et alternatives, j'ai entrepris des voyages enrichissants à Bali, 
              en Inde, en Thaïlande et à l'Université de médecine chinoise de Pékin, où j'ai découvert des approches 
              complémentaires et traditionnelles de soin.
            </p>
            <p>
              De retour en France, j'ai choisi de compléter ma formation en me spécialisant dans l'ostéopathie, 
              afin d'offrir à mes patients une prise en charge globale et personnalisée.
            </p>
            <p>
              Convaincu par les bienfaits des thérapies naturelles, je propose également des conseils en phytothérapie, 
              utilisant les vertus thérapeutiques des plantes, fruits, végétaux et minéraux pour favoriser la régénération 
              tissulaire et optimiser votre bien-être au quotidien.
            </p>
            <p>
              Je suis impatient de vous rencontrer et de vous accompagner sur le chemin de la santé et du bien-être.
            </p>
            <p className="font-serif text-sealiah-eucalyptus text-lg">
              Arnaud Benhamou
            </p>
          </div>
        </motion.div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">Parcours Professionnel</h2>
          
          {/* Diplômes nationaux et universitaires */}
          <div className="mb-8">
            <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-4">
              Diplômes nationaux et universitaires
            </h3>
            <div className="space-y-4" role="list">
              <div>
                <p className="text-sealiah-amber font-semibold" role="listitem">2022</p>
                <p className="text-sealiah-amber">Diplôme d'Ostéopathe (D.O.) - Collège Ostéopathique du Pays Basque (COPB)</p>
              </div>
              <div>
                <p className="text-sealiah-amber font-semibold" role="listitem">2015</p>
                <p className="text-sealiah-amber">Diplôme d'État de Masseur-Kinésithérapeute - Université Alfonso X el Sabio (UAX) - Madrid</p>
              </div>
            </div>
          </div>

          {/* Autres formations */}
          <div>
            <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-4">
              Autres formations
            </h3>
            <div className="space-y-4" role="list">
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
                <div key={index} role="listitem">
                  <p className="text-sealiah-amber font-semibold">{formation.year}</p>
                  <p className="text-sealiah-amber">{formation.title}</p>
                  <p className="text-sealiah-amber text-sm">{formation.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Praticien;