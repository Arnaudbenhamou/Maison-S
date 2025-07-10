import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

function Praticien() {
  const doctolibUrl = "https://www.doctolib.fr/masseur-kinesitherapeute/levallois-perret/arnaud-benhamou-levallois-perret/booking?bookingFunnelSource=profile";

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <img
              src="/images/arnaud-benhamou.jpg"
              alt="Arnaud Benhamou"
              className="w-48 h-48 rounded-full mx-auto object-cover mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-4">
              Arnaud Benhamou
            </h1>
            <p className="text-xl text-sealiah-amber">
              Masseur-Kinésithérapeute et Ostéopathe
            </p>
            <div className="mt-8">
              <a
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-sealiah-ivory bg-sealiah-amber rounded-full
                         hover:bg-sealiah-eucalyptus transition-all duration-300
                         transform hover:scale-105"
              >
                Prendre rendez-vous
              </a>
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
            <div className="flex items-center space-x-4 text-sealiah-amber">
              <Phone className="w-5 h-5" />
              <span>06.03.73.68.38</span>
            </div>
            <div className="flex items-center space-x-4 text-sealiah-amber">
              <MapPin className="w-5 h-5" />
              <span>9 Rue Roque de Fillol, 92800 Puteaux, France</span>
            </div>
            <div className="flex items-center space-x-4 text-sealiah-amber">
              <Globe className="w-5 h-5" />
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
            <div className="space-y-4">
              <div>
                <p className="text-sealiah-amber font-semibold">2022</p>
                <p className="text-sealiah-amber">Diplôme d'Ostéopathe (D.O.) - Collège Ostéopathique du Pays Basque (COPB)</p>
              </div>
              <div>
                <p className="text-sealiah-amber font-semibold">2015</p>
                <p className="text-sealiah-amber">Diplôme d'État de Masseur-Kinésithérapeute - Université Alfonso X el Sabio (UAX) - Madrid</p>
              </div>
            </div>
          </div>

          {/* Autres formations */}
          <div>
            <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-4">
              Autres formations
            </h3>
            <div className="space-y-4">
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
                <div key={index}>
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