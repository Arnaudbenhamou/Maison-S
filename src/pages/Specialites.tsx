import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Activity, Heart, Stethoscope, ChevronRight, ChevronLeft } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import AccessibleButton from '../components/AccessibleButton';

export default function Specialites() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const doctolibUrl = "https://www.doctolib.fr/cabinet-paramedical/puteaux/maison-sealiah-centre-de-sante-kinesitherapie-osteopathie";

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Quelle est la différence entre kinésithérapie et ostéopathie ?",
      answer: "La kinésithérapie se concentre sur la rééducation fonctionnelle et le mouvement à travers des exercices thérapeutiques et des techniques manuelles. L'ostéopathie adopte une approche globale du corps, cherchant à identifier et traiter les causes des dysfonctionnements par des manipulations douces. Chez Maison Sealiah, nous combinons ces deux approches pour une prise en charge complète et personnalisée."
    },
    {
      question: "Pourquoi associer soins thérapeutiques et bien-être ?",
      answer: "L'association des soins thérapeutiques et du bien-être permet une approche holistique de la santé. Nos Combos Sealiah intègrent l'expertise médicale avec des techniques de relaxation profonde, favorisant ainsi une guérison plus complète et durable. Cette synergie optimise les résultats thérapeutiques tout en procurant une expérience apaisante."
    },
    {
      question: "Combien de séances sont nécessaires pour voir des résultats ?",
      answer: "Le nombre de séances varie selon votre condition, vos objectifs et votre réponse au traitement. Généralement, des améliorations sont ressenties dès les premières séances. Lors de votre bilan initial, nous établissons ensemble un plan de soins personnalisé avec des objectifs clairs et mesurables."
    },
    {
      question: "Vos soins sont-ils remboursés par la sécurité sociale ?",
      answer: "Les séances de kinésithérapie prescrites par un médecin sont remboursées par la sécurité sociale. Les consultations d'ostéopathie peuvent être prises en charge par certaines mutuelles. Nos soins bien-être et Combos Sealiah ne sont pas remboursés mais représentent un investissement précieux pour votre santé globale."
    },
    {
      question: "Puis-je venir sans ordonnance ?",
      answer: "Pour la kinésithérapie, une prescription médicale est nécessaire pour le remboursement. Pour l'ostéopathie et nos soins bien-être, aucune ordonnance n'est requise. Nous vous accueillons en accès libre pour ces prestations."
    },
    {
      question: "Que dois-je apporter lors de ma première visite ?",
      answer: "Apportez votre carte vitale, votre ordonnance (si applicable), vos examens médicaux récents (radiographies, IRM, etc.) et une tenue confortable permettant les mouvements. Pour nos soins bien-être, venez simplement avec l'envie de vous détendre !"
    }
  ];

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
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-specialites.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Spécialités kinésithérapie et ostéopathie - Maison Sealiah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-specialites.jpg" />
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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20" aria-label="Nos domaines de spécialité">
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

        {/* Section de mise en avant des soins */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
          aria-labelledby="soins-complementaires"
        >
          <div className="bg-gradient-to-r from-sealiah-eucalyptus to-sealiah-amber rounded-2xl p-8 text-sealiah-ivory">
            <h2 id="soins-complementaires" className="text-3xl font-serif mb-6 text-center">
              La Synergie de nos Spécialités
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif mb-4">Pourquoi cette approche intégrée ?</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Kinésithérapie + Ostéopathie :</strong> L'alliance parfaite entre rééducation fonctionnelle et approche globale du corps. Nous traitons non seulement les symptômes mais aussi leurs causes profondes.
                  </p>
                  <p>
                    <strong>Thérapie + Bien-être :</strong> Nos Combos Sealiah associent l'expertise médicale à l'art du massage, créant une expérience thérapeutique unique qui favorise une guérison complète.
                  </p>
                  <p>
                    <strong>Corps + Esprit :</strong> Cette approche holistique reconnaît l'interconnexion entre santé physique et bien-être mental, offrant des résultats durables et profonds.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Approche holistique combinant kinésithérapie, ostéopathie et bien-être"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  width={600}
                  height={256}
                  loading="lazy"
                />
                <div className="text-center">
                  <AccessibleButton
                    href={doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sealiah-eucalyptus bg-sealiah-ivory hover:bg-sealiah-sand"
                    aria-label="Découvrir nos Combos Sealiah sur Doctolib - Ouvre dans un nouvel onglet"
                  >
                    Découvrir nos Combos Sealiah
                  </AccessibleButton>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          aria-labelledby="faq-section"
        >
          <h2 id="faq-section" className="text-3xl font-serif text-sealiah-eucalyptus mb-12 text-center">
            Questions Fréquentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/60 transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-serif text-sealiah-eucalyptus pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronLeft className="w-5 h-5 text-sealiah-amber transform rotate-90" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-sealiah-amber" aria-hidden="true" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-sealiah-amber leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sealiah-amber mb-6">
              Vous avez d'autres questions ? N'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AccessibleButton
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
                aria-label="Prendre rendez-vous sur Doctolib - Ouvre dans un nouvel onglet"
              >
                Prendre rendez-vous
              </AccessibleButton>
              <AccessibleButton
                href="tel:+33140850022"
                className="text-sealiah-eucalyptus bg-transparent border-2 border-sealiah-eucalyptus hover:bg-sealiah-eucalyptus hover:text-sealiah-ivory"
                aria-label="Appeler le cabinet au 01.40.85.00.22"
              >
                01.40.85.00.22
              </AccessibleButton>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}