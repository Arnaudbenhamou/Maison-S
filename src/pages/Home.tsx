import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, MessageSquare, Star, Users, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import OptimizedImage from '../components/OptimizedImage';
import AccessibleButton from '../components/AccessibleButton';
import InternalLinks from '../components/InternalLinks';

function Home() {
  const doctolibUrl = "https://www.doctolib.fr/masseur-kinesitherapeute/levallois-perret/arnaud-benhamou-levallois-perret";
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const reviews = [
    {
      name: "Hande Erkman",
      text: "Arnaud me suit depuis deux mois pour une déchirure sérieuse des ligaments croisés antérieurs. İl est très professionnel, il adore son métier. Grâce à lui, j'ai hâte d'aller à mes séances de kinésithérapie parce qu'elles sont efficaces et en même temps très amusants. Je pense que c'est rare 😊 je conseille à tous mes amis autour de moi les yeux fermés vraiment !"
    },
    {
      name: "Matthieu Lemesle",
      text: "J'ai vu Arnaud pour une consultation d'ostéopathie aujourd'hui, franchement c'était top ! C'est le second praticien que je consulte et ses méthodes n'ont rien à voir avec ce que j'ai connu jusqu'à présent. En plus d'être sympathique, il est à l'écoute, pédagogue, on sent qu'il cherche vraiment à comprendre les problématiques de ses patients. Il prend le temps d'expliquer chaque manipulation et les raisons derrière celles-ci, ce qui est très instructif. Après la séance, je me suis senti beaucoup plus détendu et mon corps \"remis en place\". Je recommande vivement ses services à quiconque cherche un ostéopathe compétent et attentionné ! Merci Arnaud !"
    },
    {
      name: "Alexandre Debats",
      text: "Arnaud est une pépite, j'avais un syndrome de l'essuie-glace sévère et moins de 4 semaines avant un semi marathon. Il a fait de la magie et c'était une histoire ancienne. Sportifs (ou non), vous avez trouvé votre héro."
    },
    {
      name: "N Saidani",
      text: "Arnaud est très professionnel, à l'écoute. Il a réussi à soulagé des douleurs de dos que j'avais depuis des années. De plus, très compétent, Arnaud associe plusieurs techniques qui permettent un relâchement total. Sur le plan humain, très agréable avec de belles valeurs ! Je recommande"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative">
      <Helmet>
        <title>Maison Sealiah | Centre de Santé - Kinésithérapie et Ostéopathie</title>
        <meta name="description" content="Maison Sealiah - Un lieu de soin pensé pour conjuguer rigueur thérapeutique, accompagnement global et expérience sensorielle. Prenez RDV sur Doctolib." />
        <meta name="keywords" content="kinésithérapie, ostéopathie, massage, Puteaux, Arnaud Benhamou, bien-être, rééducation, thérapie manuelle, Doctolib" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/" />
        <meta property="og:title" content="Maison Sealiah | Centre de Santé - Kinésithérapie et Ostéopathie" />
        <meta property="og:description" content="Maison Sealiah - Un lieu de soin pensé pour conjuguer rigueur thérapeutique, accompagnement global et expérience sensorielle." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Maison Sealiah - Centre de kinésithérapie et ostéopathie à Puteaux" />
        <meta property="og:site_name" content="Maison Sealiah" />
        <meta property="twitter:title" content="Maison Sealiah | Centre de Santé - Kinésithérapie et Ostéopathie" />
        <meta property="twitter:description" content="Maison Sealiah - Un lieu de soin pensé pour conjuguer rigueur thérapeutique, accompagnement global et expérience sensorielle." />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden -mt-10"
        aria-label="Section d'accueil principale"
        style={isMobile ? { 
          minHeight: 'calc(var(--vh, 1vh) * 100 - 80px)',
          transform: 'translateZ(0)' 
        } : {}}
      >
        {/* Vidéo désactivée sur mobile pour éviter les problèmes de performance */}
        {!isMobile && (
          <div className="absolute w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-60"
              aria-hidden="true"
              tabIndex={-1}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23F5EDE4'/%3E%3C/svg%3E"
            >
              <source src="https://player.vimeo.com/external/517090081.hd.mp4?s=b0c347f69c0797f5aa24c6df0b3c8ccf4e2f8a2c&profile_id=175" type="video/mp4" />
            </video>
          </div>
        )}
        
        {/* Image de fond statique sur mobile */}
        {isMobile && (
          <div 
            className="absolute w-full h-full bg-cover bg-center opacity-60"
            style={{
              backgroundImage: 'linear-gradient(rgba(245, 237, 228, 0.4), rgba(255, 253, 249, 0.4)), url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080&q=80")'
            }}
            aria-hidden="true"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-sealiah-ivory/40 to-sealiah-sand/40" aria-hidden="true" />

        <div className={`relative z-10 text-center px-4 max-w-7xl mx-auto ${isMobile ? 'translate-y-4' : 'translate-y-8'}`}>
          <div className="flex flex-col items-center justify-center space-y-12">
            {/* Logo */}
            <motion.div 
              className="w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[700px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.6 : 1 }}
            >
              <OptimizedImage 
                src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah//Maison-Sealiah-prevenir-soigner-apaiser.png" 
                alt="Logo Maison Sealiah - Prévenir, Soigner, Apaiser - Centre de kinésithérapie et ostéopathie" 
                role="img"
                className="w-full h-auto"
                priority={true}
                loading="eager"
                width={700}
                height={400}
              />
            </motion.div>

            {/* First Phrase */}
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-serif text-sealiah-eucalyptus leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.2 : 0.4 }}
            >
              Le bien-être n'est plus une activité ou une mode, il répond à des besoins humains fondamentaux.
            </motion.h1>

            {/* Second Phrase */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-serif text-sealiah-eucalyptus leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.4 : 0.8 }}
            >
              STOP THINKING, JUST FEEL IT...
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.6 : 1.2 }}
              className="mt-8 relative z-10 bg-gradient-to-b from-sealiah-ivory to-sealiah-sand p-0.5 rounded-full"
            >
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
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-20 px-6 bg-white/50" aria-labelledby="presentation-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="presentation-heading" className="sr-only">Présentation de Maison Sealiah</h2>
            <AnimatedText 
              text="Maison Sealiah cultive une vision subtile de la santé : experte, respectueuse, profondément humaine. Votre bien-être n'est pas une tendance, mais un besoin fondamental. Nous mettons notre savoir-faire au service de ce qui compte vraiment : Vous."
              className="text-2xl md:text-3xl lg:text-4xl text-sealiah-amber max-w-4xl mx-auto leading-relaxed"
            />
          </motion.div>
        </div>
      </section>

      {/* Notre Approche Section */}
      <section className="py-20 px-6 bg-white/50" aria-labelledby="approche-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="approche-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Notre Approche</h2>
            <p className="text-xl text-sealiah-amber max-w-3xl mx-auto">
              Fusionner l'expertise thérapeutique et le raffinement du spa : la promesse de Maison Sealiah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Écoute et Personnalisation",
                description: "Chaque personne est unique. Nous adaptons nos soins à vos besoins spécifiques.",
                icon: <MessageSquare className="w-8 h-8" aria-hidden="true" />
              },
              {
                title: "Savoir-faire thérapeutique",
                description: "Une prise en charge experte et préventive",
                icon: <Stethoscope className="w-8 h-8" aria-hidden="true" />
              },
              {
                title: "Confiance et bienveillance",
                description: "Un lieu dédié aux soins, aux détails sensoriels apaisants",
                icon: <Heart className="w-8 h-8" aria-hidden="true" />
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center group cursor-pointer"
                role="article"
                aria-labelledby={`value-${index}-title`}
              >
                <motion.div 
                  className="text-sealiah-amber mb-4 flex justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 id={`value-${index}-title`} className="text-2xl font-serif text-sealiah-eucalyptus mb-4 group-hover:text-sealiah-amber transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sealiah-amber group-hover:text-sealiah-eucalyptus transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe Section */}
      <section className="py-20 px-6" aria-labelledby="equipe-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="equipe-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Notre Équipe</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            >
              <Link 
                to="/praticien/arnaud-benhamou" 
                className="block focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded-lg"
                aria-label="En savoir plus sur Arnaud Benhamou, Masseur-Kinésithérapeute Ostéopathe"
              >
                <OptimizedImage
                  src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/arnaud-benhamou.jpg" 
                  alt="Portrait professionnel d'Arnaud Benhamou, Masseur-Kinésithérapeute et Ostéopathe, fondateur de Maison Sealiah"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover hover:scale-105 transition-transform duration-300"
                  width={160}
                  height={160}
                  loading="lazy"
                />
                <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-2">Arnaud Benhamou</h3>
                <p className="text-sealiah-amber font-semibold mb-4">Masseur-Kinésithérapeute Ostéopathe</p>
                <p className="text-sealiah-amber">Fondateur de Maison Sealiah</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Soins Signatures Section */}
      <section className="py-20 px-6 bg-white/50" aria-labelledby="soins-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="soins-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Nos Soins Signatures</h2>
            <p className="text-xl text-sealiah-amber max-w-3xl mx-auto">
              Un parcours de soins complet pour des bienfaits profonds et durables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Massages Signature",
                description: "Une fusion unique de techniques ancestrales et modernes",
                image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
                alt: "Séance de massage relaxant avec huiles essentielles dans un environnement zen et apaisant"
              },
              {
                title: "Les Combos Sealiah",
                description: "Une expérience de soin personnalisée et complète",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
                alt: "Espace de soins holistiques combinant différentes techniques thérapeutiques"
              },
              {
                title: "Soins Énergétiques",
                description: "Harmonisation corps et esprit",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
                alt: "Séance de soin énergétique avec bols tibétains pour l'harmonisation des chakras"
              }
            ].map((soin, index) => (
              <motion.div
                key={soin.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
                role="article"
                aria-labelledby={`soin-${index}-title`}
              >
                <OptimizedImage
                  src={soin.image} 
                  alt={soin.alt}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={192}
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 id={`soin-${index}-title`} className="text-xl font-serif text-sealiah-eucalyptus mb-4">
                    {soin.title}
                  </h3>
                  <p className="text-sealiah-amber mb-6">
                    {soin.description}
                  </p>
                  <Link
                    to="/soins"
                    className="text-sealiah-eucalyptus hover:text-sealiah-amber transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1"
                    aria-label={`En savoir plus sur ${soin.title}`}
                  >
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <AccessibleButton
              href={doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
              aria-label="Découvrir et réserver les Combos Sealiah sur Doctolib - Ouvre dans un nouvel onglet"
            >
              Les Combos Sealiah
            </AccessibleButton>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-20 px-6" aria-labelledby="journal-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="journal-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-4">
              Journal de la santé et du bien-être
            </h2>
          </motion.div>

          <JournalPreview />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 overflow-hidden" aria-labelledby="avis-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="avis-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-4">
              Avis de nos patients
            </h2>
            <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
              Découvrez ce que nos patients disent de leur expérience
            </p>
          </motion.div>

          <div 
            className="relative"
            role="region"
            aria-label="Témoignages de patients"
            aria-live="polite"
          >
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
              role="article"
              aria-labelledby={`review-${currentReview}-author`}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-sealiah-eucalyptus flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-sealiah-ivory text-xl font-semibold">
                    {getInitials(reviews[currentReview].name)}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <OptimizedImage
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Logo Google"
                    className="h-6 object-contain"
                    width={92}
                    height={30}
                    loading="lazy"
                  />
                  <div className="flex ml-2" role="img" aria-label="Note 5 étoiles sur 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-sealiah-amber mb-4 italic text-center">
                "{reviews[currentReview].text}"
              </blockquote>
              <p id={`review-${currentReview}-author`} className="text-sealiah-eucalyptus font-semibold text-center">
                {reviews[currentReview].name}
              </p>
            </motion.div>

            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded"
              onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-8 h-8" aria-hidden="true" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded"
              onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-8 h-8" aria-hidden="true" />
            </button>

            <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Navigation des témoignages">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
                  role="tab"
                  aria-selected={index === currentReview}
                  aria-label={`Aller au témoignage ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 ${
                    index === currentReview ? 'bg-sealiah-eucalyptus' : 'bg-sealiah-amber/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/50" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="cta-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-6">
              Notre expertise au service de vos besoins
            </h2>
            <p className="text-xl text-sealiah-amber mb-8">
              Réservez dès maintenant votre séance et commencez votre voyage vers le bien-être.
            </p>
            <AccessibleButton
              href={doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sealiah-ivory bg-sealiah-amber hover:bg-sealiah-eucalyptus"
              aria-label="Réserver votre Combo Sealiah sur Doctolib - Ouvre dans un nouvel onglet"
            >
              Réserver mon Combo Sealiah
            </AccessibleButton>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 id="contact-heading" className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Contact</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">Nos Coordonnées</h3>
            <address className="space-y-4 text-sealiah-amber not-italic">
              <p>
                <span className="sr-only">Adresse : </span>
                9 rue roque de Fillol<br />
                92800 Puteaux, France
              </p>
              <p>
                <span className="sr-only">Téléphone : </span>
                <a href="tel:+33603736838" className="hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1">
                  06.03.73.68.38
                </a>
              </p>
              <p>
                <span className="sr-only">Email : </span>
                <a 
                  href="mailto:contact@maisonsealiah.fr" 
                  className="hover:text-sealiah-eucalyptus transition-colors focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-1"
                  aria-label="Envoyer un email à contact@maisonsealiah.fr"
                >
                  contact@maisonsealiah.fr
                </a>
              </p>
            </address>
            <div className="mt-8">
              <h4 className="text-xl font-serif text-sealiah-eucalyptus mb-4">Horaires</h4>
              <div className="space-y-2 text-sealiah-amber" role="list">
                <p role="listitem">Lundi - Vendredi : 8h - 20h</p>
                <p role="listitem">Samedi : Fermé</p>
                <p role="listitem">Dimanche : Fermé</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-16 px-6 bg-sealiah-ivory/30" aria-labelledby="internal-links-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 id="internal-links-heading" className="text-3xl font-serif text-sealiah-eucalyptus mb-4">
              Découvrez l'univers Maison Sealiah
            </h2>
            <p className="text-lg text-sealiah-amber max-w-2xl mx-auto">
              Explorez nos services, notre expertise et notre approche holistique du bien-être
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <InternalLinks />
          </div>
        </div>
      </section>
    </div>
  );
}

// Composant pour afficher les articles récents du journal
const JournalPreview = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecentArticles = async () => {
      try {
        const { ArticleService } = await import('../services/articleService');
        const recentArticles = await ArticleService.getRecentArticles(2);
        setArticles(recentArticles);
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRecentArticles();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg animate-pulse">
            <div className="w-full h-64 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-sealiah-amber">Aucun article disponible pour le moment.</p>
        <Link
          to="/journal"
          className="inline-flex items-center text-sealiah-eucalyptus hover:text-sealiah-amber transition-colors duration-300 mt-4"
        >
          Voir le journal <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
          aria-labelledby={`article-${article.id}-title`}
        >
          <Link to={`/journal/${article.slug}`}>
            {article.featured_image && (
              <OptimizedImage
                src={article.featured_image} 
                alt={article.featured_image_alt || article.title}
                className="w-full h-64 object-cover"
                width={600}
                height={256}
                loading="lazy"
              />
            )}
            <div className="p-6">
              <time className="text-sealiah-amber mb-2 block" dateTime={article.published_at}>
                {formatDate(article.published_at)}
              </time>
              <h3 id={`article-${article.id}-title`} className="text-2xl font-serif text-sealiah-eucalyptus mb-4 hover:text-sealiah-amber transition-colors">
                {article.title}
              </h3>
              <p className="text-sealiah-amber mb-6">{article.excerpt}</p>
              <span className="inline-flex items-center text-sealiah-eucalyptus hover:text-sealiah-amber transition-colors duration-300">
                Lire l'article <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
};

export default Home;