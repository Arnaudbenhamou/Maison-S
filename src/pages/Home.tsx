import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, MessageSquare, Star, Users, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

function Home() {
  const doctolibUrl = "https://www.doctolib.fr/masseur-kinesitherapeute/levallois-perret/arnaud-benhamou-levallois-perret";
  
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-60"
        >
          <source src="https://player.vimeo.com/external/517090081.hd.mp4?s=b0c347f69c0797f5aa24c6df0b3c8ccf4e2f8a2c&profile_id=175" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-sealiah-ivory/40 to-sealiah-sand/40" />

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto translate-y-8">
          <div className="flex flex-col items-center justify-center space-y-12">
            {/* Logo */}
            <motion.div 
              className="w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[700px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah//Maison-Sealiah-prevenir-soigner-apaiser.png" 
                alt="Maison Sealiah" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* First Phrase */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl font-serif text-sealiah-eucalyptus leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Le bien-être n'est plus une activité ou une mode, il répond à des besoins humains fondamentaux.
            </motion.p>

            {/* Second Phrase */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-serif text-sealiah-eucalyptus leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              STOP THINKING, JUST FEEL IT...
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 relative z-10 bg-gradient-to-b from-sealiah-ivory to-sealiah-sand p-0.5 rounded-full"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <AnimatedText 
              text="Maison Sealiah cultive une vision subtile de la santé : experte, respectueuse, profondément humaine. Votre bien-être n'est pas une tendance, mais un besoin fondamental. Nous mettons notre savoir-faire au service de ce qui compte vraiment : Vous."
              className="text-2xl md:text-3xl lg:text-4xl text-sealiah-amber max-w-4xl mx-auto leading-relaxed"
            />
          </motion.div>
        </div>
      </section>

      {/* Notre Approche Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Notre Approche</h2>
            <p className="text-xl text-sealiah-amber max-w-3xl mx-auto">
              Fusionner l'expertise thérapeutique et le raffinement du spa : la promesse de Maison Sealiah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Écoute et Personnalisation",
                description: "Chaque personne est unique. Nous adaptons nos soins à vos besoins spécifiques.",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                title: "Savoir-faire thérapeutique",
                description: "Une prise en charge experte et préventive",
                icon: <Stethoscope className="w-8 h-8" />
              },
              {
                title: "Confiance et bienveillance",
                description: "Un lieu dédié aux soins, aux détails sensoriels apaisants",
                icon: <Heart className="w-8 h-8" />
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
              >
                <motion.div 
                  className="text-sealiah-amber mb-4 flex justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-4 group-hover:text-sealiah-amber transition-colors duration-300">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Notre Équipe</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            >
              <Link to="/praticien/arnaud-benhamou" className="block">
                <img
                  src="/images/arnaud-benhamou.jpg"
                  alt="Arnaud Benhamou"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover hover:scale-105 transition-transform duration-300"
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
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Nos Soins Signatures</h2>
            <p className="text-xl text-sealiah-amber max-w-3xl mx-auto">
              Un parcours de soins complet pour des bienfaits profonds et durables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Massages Signature",
                description: "Une fusion unique de techniques ancestrales et modernes",
                image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Les Combos Sealiah",
                description: "Une expérience de soin personnalisée et complète",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Soins Énergétiques",
                description: "Harmonisation corps et esprit",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((soin, index) => (
              <motion.div
                key={soin.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={soin.image}
                  alt={soin.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-4">
                    {soin.title}
                  </h3>
                  <p className="text-sealiah-amber mb-6">
                    {soin.description}
                  </p>
                  <Link
                    to="/soins"
                    className="text-sealiah-eucalyptus hover:text-sealiah-amber transition-colors duration-300"
                  >
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sealiah-ivory bg-sealiah-amber rounded-full
                       hover:bg-sealiah-eucalyptus transition-all duration-300
                       transform hover:scale-105"
            >
              Les Combos Sealiah
            </a>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-4">
              Journal de la santé et du bien-être
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Les bienfaits de la méditation",
                date: "15 Mars 2024",
                excerpt: "Découvrez comment la méditation peut transformer votre quotidien...",
                image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Routine bien-être du matin",
                date: "12 Mars 2024",
                excerpt: "5 habitudes simples pour commencer la journée en pleine forme...",
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sealiah-amber mb-2">{article.date}</p>
                  <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-4">
                    {article.title}
                  </h3>
                  <p className="text-sealiah-amber mb-6">{article.excerpt}</p>
                  <Link
                    to="/journal"
                    className="inline-flex items-center text-sealiah-eucalyptus hover:text-sealiah-amber transition-colors duration-300"
                  >
                    Lire l'article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-4">
              Avis de nos patients
            </h2>
            <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
              Découvrez ce que nos patients disent de leur expérience
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-sealiah-eucalyptus flex items-center justify-center mb-4">
                  <span className="text-sealiah-ivory text-xl font-semibold">
                    {getInitials(reviews[currentReview].name)}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google Logo"
                    className="h-6 object-contain"
                  />
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sealiah-amber mb-4 italic text-center">
                "{reviews[currentReview].text}"
              </p>
              <p className="text-sealiah-eucalyptus font-semibold text-center">
                {reviews[currentReview].name}
              </p>
            </motion.div>

            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? 'bg-sealiah-eucalyptus' : 'bg-sealiah-amber/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-6">
              Notre expertise au service de vos besoins
            </h2>
            <p className="text-xl text-sealiah-amber mb-8">
              Réservez dès maintenant votre séance et commencez votre voyage vers le bien-être.
            </p>
            <a
              href={doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sealiah-ivory bg-sealiah-amber rounded-full
                       hover:bg-sealiah-eucalyptus transition-all duration-300
                       transform hover:scale-105"
            >
              Réserver mon Combo Sealiah
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-sealiah-eucalyptus mb-4">Contact</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">Nos Coordonnées</h3>
            <div className="space-y-4 text-sealiah-amber">
              <p>9 rue roque de Fillol</p>
              <p>92800 Puteaux, France</p>
              <p>Tél : 06.03.73.68.38</p>
              <p>Email : <a href="mailto:contact@maisonsealiah.fr" className="hover:text-sealiah-eucalyptus transition-colors">contact@maisonsealiah.fr</a></p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-serif text-sealiah-eucalyptus mb-4">Horaires</h4>
              <div className="space-y-2 text-sealiah-amber">
                <p>Lundi - Vendredi : 8h - 20h</p>
                <p>Samedi : Fermé</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;