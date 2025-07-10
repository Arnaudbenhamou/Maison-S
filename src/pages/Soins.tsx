import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import OptimizedImage from '../components/OptimizedImage';

export default function Soins() {
  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>Nos Soins - Massages et Thérapies | Maison Sealiah Puteaux</title>
        <meta name="description" content="Découvrez nos soins holistiques à Puteaux : massages signature, soins énergétiques, reiki. Techniques ancestrales et modernes pour votre bien-être." />
        <meta name="keywords" content="massage, soins énergétiques, reiki, bien-être, Puteaux, thérapie holistique, relaxation" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/soins" />
        <meta property="og:title" content="Nos Soins - Massages et Thérapies | Maison Sealiah" />
        <meta property="og:description" content="Découvrez nos soins holistiques : massages signature, soins énergétiques, reiki. Techniques ancestrales et modernes." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/soins" />
        <meta property="og:image" content="https://www.maisonsealiah.fr/images/og-image-soins.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Soins et massages thérapeutiques - Maison Sealiah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.maisonsealiah.fr/images/og-image-soins.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Nos Soins
          </h1>
          <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
            Découvrez notre collection de soins holistiques, conçus pour harmoniser corps et esprit.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20" aria-label="Types de soins proposés">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <OptimizedImage
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Séance de massage relaxant avec huiles essentielles dans un environnement zen et apaisant"
              className="w-full h-64 object-cover rounded-lg mb-6"
              width={600}
              height={256}
              loading="lazy"
            />
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4">
              Massages Signature
            </h2>
            <p className="text-sealiah-amber mb-4">
              Nos massages signature allient techniques ancestrales et innovations modernes pour une
              expérience unique de détente profonde.
            </p>
            <ul className="text-sealiah-amber space-y-2" role="list">
              <li>• Massage relaxant aux huiles essentielles</li>
              <li>• Massage deep tissue</li>
              <li>• Massage aux pierres chaudes</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <OptimizedImage
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Séance de soin énergétique avec bols tibétains pour l'harmonisation des chakras"
              className="w-full h-64 object-cover rounded-lg mb-6"
              width={600}
              height={256}
              loading="lazy"
            />
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4">
              Soins Énergétiques
            </h2>
            <p className="text-sealiah-amber mb-4">
              Rééquilibrez vos énergies et retrouvez votre harmonie intérieure avec nos soins
              énergétiques personnalisés.
            </p>
            <ul className="text-sealiah-amber space-y-2" role="list">
              <li>• Reiki traditionnel</li>
              <li>• Soin aux bols tibétains</li>
              <li>• Harmonisation des chakras</li>
            </ul>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
        >
          <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">
            Votre Voyage vers le Bien-être
          </h2>
          <p className="text-sealiah-amber mb-8 max-w-2xl mx-auto">
            Chaque soin est une invitation à un voyage intérieur, une parenthèse de douceur où le
            temps s'arrête. Nos praticiennes expérimentées vous accompagnent dans cette découverte
            de soi, adaptant chaque soin à vos besoins spécifiques.
          </p>
          <OptimizedImage
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80"
            alt="Ambiance zen et relaxante d'un espace de soins avec éclairage tamisé et décoration naturelle"
            className="w-full h-96 object-cover rounded-lg"
            width={1200}
            height={384}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}