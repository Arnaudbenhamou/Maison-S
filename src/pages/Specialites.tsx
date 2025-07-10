import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Activity, Heart, Stethoscope } from 'lucide-react';

export default function Specialites() {
  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>Nos Spécialités - Kinésithérapie & Ostéopathie | Maison Sealiah</title>
        <meta name="description" content="Spécialités Maison Sealiah Puteaux : kinésithérapie, ostéopathie, bien-être. Rééducation, thérapie manuelle, soins personnalisés par Arnaud Benhamou." />
        <meta name="keywords" content="kinésithérapie, ostéopathie, rééducation, thérapie manuelle, Puteaux, Arnaud Benhamou, troubles musculo-squelettiques" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/specialites" />
        <meta property="og:title" content="Nos Spécialités - Kinésithérapie & Ostéopathie | Maison Sealiah" />
        <meta property="og:description" content="Kinésithérapie, ostéopathie, bien-être. Rééducation et thérapie manuelle par Arnaud Benhamou à Puteaux." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/specialites" />
        <meta property="og:image" content="https://www.maisonsealiah.fr/images/og-image-specialites.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Spécialités kinésithérapie et ostéopathie - Maison Sealiah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.maisonsealiah.fr/images/og-image-specialites.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Nos Spécialités
          </h1>
          <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
            Découvrez nos domaines d'expertise pour prendre soin de votre santé et de votre bien-être.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12" aria-label="Nos domaines de spécialité">
          {/* Kinésithérapie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <div className="text-sealiah-amber mb-6 flex justify-center" aria-hidden="true">
              <Activity className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4 text-center">
              Kinésithérapie
            </h2>
            <p className="text-sealiah-amber mb-6">
              La kinésithérapie vise à traiter les troubles du mouvement et de la fonction à travers des techniques manuelles et des exercices thérapeutiques.
            </p>
            <ul className="text-sealiah-amber space-y-2" role="list">
              <li>• Rééducation post-traumatique</li>
              <li>• Thérapie manuelle</li>
              <li>• Rééducation posturale</li>
              <li>• Drainage lymphatique</li>
              <li>• Kinésithérapie respiratoire</li>
            </ul>
          </motion.div>

          {/* Ostéopathie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <div className="text-sealiah-amber mb-6 flex justify-center" aria-hidden="true">
              <Stethoscope className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4 text-center">
              Ostéopathie
            </h2>
            <p className="text-sealiah-amber mb-6">
              L'ostéopathie est une approche thérapeutique manuelle qui vise à restaurer la mobilité des tissus et l'équilibre du corps.
            </p>
            <ul className="text-sealiah-amber space-y-2" role="list">
              <li>• Troubles musculo-squelettiques</li>
              <li>• Douleurs articulaires</li>
              <li>• Troubles digestifs</li>
              <li>• Maux de tête</li>
              <li>• Stress et tensions</li>
            </ul>
          </motion.div>

          {/* Bien-être */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <div className="text-sealiah-amber mb-6 flex justify-center" aria-hidden="true">
              <Heart className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4 text-center">
              Bien-être
            </h2>
            <p className="text-sealiah-amber mb-6">
              Nos soins bien-être combinent différentes techniques de massage et de relaxation pour vous offrir un moment de détente profonde.
            </p>
            <ul className="text-sealiah-amber space-y-2" role="list">
              <li>• Massage relaxant</li>
              <li>• Massage aux pierres chaudes</li>
              <li>• Réflexologie plantaire</li>
              <li>• Techniques de relaxation</li>
              <li>• Conseils en hygiène de vie</li>
            </ul>
          </motion.div>
        </section>
      </div>
    </div>
  );
}