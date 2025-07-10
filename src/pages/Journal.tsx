import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import OptimizedImage from '../components/OptimizedImage';

export default function Journal() {
  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>Journal Bien-être - Articles Santé | Maison Sealiah</title>
        <meta name="description" content="Articles bien-être et santé par Maison Sealiah : méditation, routines matinales, conseils pour une vie équilibrée. Expertise en kinésithérapie et ostéopathie." />
        <meta name="keywords" content="bien-être, méditation, santé, conseils, routine matinale, équilibre, kinésithérapie, ostéopathie" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/journal" />
        <meta property="og:title" content="Journal Bien-être - Articles Santé | Maison Sealiah" />
        <meta property="og:description" content="Articles bien-être et conseils santé par nos experts en kinésithérapie et ostéopathie." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/journal" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-journal.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Articles bien-être et conseils santé - Maison Sealiah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-journal.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Le Journal
          </h1>
          <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
            Explorez nos articles sur le bien-être, la pleine conscience et l'art de vivre.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12" aria-label="Articles du journal bien-être">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <OptimizedImage
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Personne en méditation dans un environnement paisible et naturel au lever du soleil"
              className="w-full h-64 object-cover rounded-lg mb-6"
              width={600}
              height={256}
              loading="lazy"
            />
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4">
              L'Art de la Méditation au Quotidien
            </h2>
            <p className="text-sealiah-amber mb-4">
              Découvrez comment intégrer la méditation dans votre routine quotidienne pour plus de
              sérénité et de présence.
            </p>
            <div className="flex items-center text-sealiah-amber" role="contentinfo">
              <time dateTime="2024-03-12">12 Mars 2024</time>
              <span className="mx-2">•</span>
              <span>5 min de lecture</span>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <OptimizedImage
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Routine matinale bien-être avec yoga et méditation dans un cadre naturel"
              className="w-full h-64 object-cover rounded-lg mb-6"
              width={600}
              height={256}
              loading="lazy"
            />
            <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-4">
              5 Rituels du Matin pour une Journée Équilibrée
            </h2>
            <p className="text-sealiah-amber mb-4">
              Commencez vos journées avec intention grâce à ces rituels simples mais puissants.
            </p>
            <div className="flex items-center text-sealiah-amber" role="contentinfo">
              <time dateTime="2024-03-08">8 Mars 2024</time>
              <span className="mx-2">•</span>
              <span>4 min de lecture</span>
            </div>
          </motion.article>
        </section>
      </div>
    </div>
  );
}