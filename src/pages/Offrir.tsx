import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Gift, Heart, Star, Clock, Users, CheckCircle } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import AccessibleButton from '../components/AccessibleButton';

export default function Offrir() {
  const doctolibUrl = "https://www.doctolib.fr/cabinet-paramedical/puteaux/maison-sealiah-centre-de-sante-kinesitherapie-osteopathie";

  const giftOptions = [
    {
      title: "Séance Découverte",
      duration: "60 minutes",
      price: "80€",
      description: "Une première approche de nos soins signature pour découvrir l'univers Maison Sealiah",
      includes: [
        "Consultation personnalisée",
        "Massage relaxant ou thérapeutique",
        "Conseils bien-être personnalisés"
      ],
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Séance de massage relaxant dans un environnement zen"
    },
    {
      title: "Combo Sealiah Essentiel",
      duration: "90 minutes",
      price: "120€",
      description: "L'expérience complète alliant kinésithérapie et bien-être pour un moment d'exception",
      includes: [
        "Bilan postural complet",
        "Séance de kinésithérapie ciblée",
        "Massage signature aux huiles",
        "Moment de relaxation guidée"
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Espace de soins holistiques combinant différentes techniques thérapeutiques",
      popular: true
    },
    {
      title: "Parcours Bien-être Premium",
      duration: "2h30",
      price: "200€",
      description: "Une expérience immersive complète pour une régénération profonde du corps et de l'esprit",
      includes: [
        "Consultation approfondie",
        "Séance d'ostéopathie personnalisée",
        "Massage signature premium",
        "Soin énergétique",
        "Temps de relaxation avec tisanes"
      ],
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Séance de soin énergétique avec bols tibétains pour l'harmonisation"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>Offrir un Soin - Cartes Cadeaux | Maison Sealiah</title>
        <meta name="description" content="Offrez un moment de bien-être exceptionnel avec nos cartes cadeaux Maison Sealiah. Séances de kinésithérapie, massages signature et soins holistiques à Puteaux." />
        <meta name="keywords" content="carte cadeau, massage, kinésithérapie, bien-être, cadeau, Puteaux, soin, relaxation" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/offrir" />
        <meta property="og:title" content="Offrir un Soin - Cartes Cadeaux | Maison Sealiah" />
        <meta property="og:description" content="Offrez un moment de bien-être exceptionnel avec nos cartes cadeaux. Séances personnalisées et soins holistiques." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/offrir" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-offrir.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cartes cadeaux bien-être - Maison Sealiah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-offrir.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Gift className="w-16 h-16 text-sealiah-amber" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Offrir un Moment d'Exception
          </h1>
          <p className="text-xl text-sealiah-amber max-w-3xl mx-auto leading-relaxed">
            Partagez l'art du bien-être avec vos proches. Nos cartes cadeaux offrent une expérience 
            unique alliant expertise thérapeutique et raffinement sensoriel.
          </p>
        </motion.div>

        {/* Pourquoi offrir */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
          aria-labelledby="why-offer"
        >
          <h2 id="why-offer" className="text-3xl font-serif text-sealiah-eucalyptus mb-8 text-center">
            Pourquoi Offrir Maison Sealiah ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" aria-hidden="true" />,
                title: "Un Cadeau Mémorable",
                description: "Offrez plus qu'un soin, offrez une expérience transformatrice qui marquera durablement."
              },
              {
                icon: <Star className="w-8 h-8" aria-hidden="true" />,
                title: "Expertise Reconnue",
                description: "Nos praticiens allient savoir-faire thérapeutique et approche holistique du bien-être."
              },
              {
                icon: <Users className="w-8 h-8" aria-hidden="true" />,
                title: "Personnalisation Totale",
                description: "Chaque soin est adapté aux besoins spécifiques de la personne qui le reçoit."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-sealiah-amber mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sealiah-amber">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Options de cartes cadeaux */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
          aria-labelledby="gift-options"
        >
          <h2 id="gift-options" className="text-3xl font-serif text-sealiah-eucalyptus mb-12 text-center">
            Nos Cartes Cadeaux
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {giftOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg relative ${
                  option.popular ? 'ring-2 ring-sealiah-amber' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute top-4 right-4 bg-sealiah-amber text-sealiah-ivory px-3 py-1 rounded-full text-sm font-medium z-10">
                    Le plus choisi
                  </div>
                )}
                
                <OptimizedImage
                  src={option.image}
                  alt={option.alt}
                  className="w-full h-48 object-cover"
                  width={600}
                  height={192}
                  loading="lazy"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif text-sealiah-eucalyptus">
                      {option.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-sealiah-amber">{option.price}</div>
                      <div className="text-sm text-sealiah-amber flex items-center">
                        <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                        {option.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sealiah-amber mb-6">
                    {option.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-serif text-sealiah-eucalyptus mb-3">
                      Cette expérience comprend :
                    </h4>
                    <ul className="space-y-2">
                      {option.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sealiah-amber">
                          <CheckCircle className="w-5 h-5 text-sealiah-eucalyptus mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <AccessibleButton
                    href={doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center ${
                      option.popular 
                        ? 'text-sealiah-ivory bg-sealiah-eucalyptus hover:bg-sealiah-amber' 
                        : 'text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus'
                    }`}
                    aria-label={`Commander la carte cadeau ${option.title} sur Doctolib - Ouvre dans un nouvel onglet`}
                  >
                    Offrir cette expérience
                  </AccessibleButton>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Comment ça marche */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
          aria-labelledby="how-it-works"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 id="how-it-works" className="text-3xl font-serif text-sealiah-eucalyptus mb-8 text-center">
              Comment Ça Marche ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Choisissez",
                  description: "Sélectionnez l'expérience qui correspond à vos envies"
                },
                {
                  step: "2",
                  title: "Commandez",
                  description: "Réservez directement via Doctolib ou contactez-nous"
                },
                {
                  step: "3",
                  title: "Recevez",
                  description: "Votre carte cadeau vous est envoyée par email ou courrier"
                },
                {
                  step: "4",
                  title: "Offrez",
                  description: "La personne prend rendez-vous quand elle le souhaite"
                }
              ].map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-sealiah-eucalyptus text-sealiah-ivory rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-serif text-sealiah-eucalyptus mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sealiah-amber text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Informations pratiques */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-16"
          aria-labelledby="practical-info"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 id="practical-info" className="text-2xl font-serif text-sealiah-eucalyptus mb-6 text-center">
              Informations Pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-serif text-sealiah-eucalyptus mb-4">Validité et Utilisation</h3>
                <ul className="space-y-2 text-sealiah-amber">
                  <li>• Validité : 12 mois à partir de la date d'achat</li>
                  <li>• Réservation sur Doctolib ou par téléphone</li>
                  <li>• Possibilité de reporter un rendez-vous</li>
                  <li>• Non remboursable, non échangeable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif text-sealiah-eucalyptus mb-4">Livraison</h3>
                <ul className="space-y-2 text-sealiah-amber">
                  <li>• Envoi par email immédiat</li>
                  <li>• Carte physique sur demande</li>
                  <li>• Personnalisation du message possible</li>
                  <li>• Support client disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA final */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sealiah-eucalyptus to-sealiah-amber rounded-2xl p-8 text-sealiah-ivory">
            <h2 className="text-3xl font-serif mb-4">
              Prêt à Offrir un Moment d'Exception ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour toute question ou pour une recommandation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AccessibleButton
                href={doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sealiah-eucalyptus bg-sealiah-ivory hover:bg-sealiah-sand"
                aria-label="Commander une carte cadeau sur Doctolib - Ouvre dans un nouvel onglet"
              >
                Commander une carte cadeau
              </AccessibleButton>
              <AccessibleButton
                href="tel:+33603736838"
                className="text-sealiah-ivory bg-transparent border-2 border-sealiah-ivory hover:bg-sealiah-ivory hover:text-sealiah-eucalyptus"
                aria-label="Appeler pour plus d'informations"
              >
                Nous contacter
              </AccessibleButton>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}