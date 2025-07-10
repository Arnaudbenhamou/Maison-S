import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Users, Dumbbell, Heart } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function NotreCabinet() {
  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Notre Cabinet
          </h1>
          <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
            Un espace moderne et apaisant dédié à votre bien-être et votre rééducation
          </p>
        </motion.div>

        {/* Présentation générale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
                alt="Espace d'accueil moderne et chaleureux du cabinet de kinésithérapie Maison Sealiah"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                width={600}
                height={384}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">
                Un espace pensé pour votre confort
              </h2>
              <p className="text-sealiah-amber mb-6">
                Notre cabinet s'étend sur plus de 200m², offrant un environnement spacieux et 
                chaleureux. Chaque espace a été conçu pour optimiser votre parcours de soins et 
                votre confort.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-sealiah-amber">
                  <MapPin className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>31 Rue Rousselle, 92800 Puteaux</span>
                </div>
                <div className="flex items-center text-sealiah-amber">
                  <Clock className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>Lun-Ven</span>
                </div>
                <div className="flex items-center text-sealiah-amber">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>Sur RDV</span>
                </div>
                <div className="flex items-center text-sealiah-amber">
                  <Users className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>Accès PMR</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Salles de soins */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-serif text-sealiah-eucalyptus mb-8 text-center">
            Nos Salles de Soins
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Présentation des salles de soins">
            {[
              {
                title: "Salle de Kinésithérapie",
                description: "Équipée de tables électriques et de matériel spécialisé pour les soins thérapeutiques.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
                alt: "Salle de kinésithérapie équipée de tables électriques et matériel thérapeutique professionnel"
              },
              {
                title: "Espace Bien-être",
                description: "Un cadre apaisant pour les massages et soins relaxants.",
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
                alt: "Espace bien-être avec ambiance zen et relaxante pour massages et soins de détente"
              },
              {
                title: "Salle de Consultation",
                description: "Pour les bilans et suivis personnalisés dans un cadre confidentiel.",
                image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
                alt: "Salle de consultation privée pour bilans et suivis personnalisés des patients"
              }
            ].map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              >
                <OptimizedImage
                  src={room.image}
                  alt={room.alt}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={192}
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-4">
                    {room.title}
                  </h3>
                  <p className="text-sealiah-amber">
                    {room.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>
        </motion.section>

        {/* Plateau technique */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-serif text-sealiah-eucalyptus mb-8 text-center">
              Plateau Technique de Remise en Forme
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Plateau technique de rééducation équipé d'appareils de musculation et cardio-training adaptés"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  width={600}
                  height={384}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-serif text-sealiah-eucalyptus mb-6">
                  Un espace complet pour votre rééducation
                </h3>
                <p className="text-sealiah-amber mb-6">
                  Notre plateau technique de 80m² est équipé d'appareils de pointe pour la rééducation 
                  et le renforcement musculaire. Vous y trouverez tout le nécessaire pour vos exercices 
                  thérapeutiques, supervisés par nos praticiens qualifiés.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-sealiah-amber">
                    <Dumbbell className="w-5 h-5 mr-3" aria-hidden="true" />
                    Équipements de musculation adaptés
                  </li>
                  <li className="flex items-center text-sealiah-amber">
                    <Heart className="w-5 h-5 mr-3" aria-hidden="true" />
                    Matériel cardio-training
                  </li>
                  <li className="flex items-center text-sealiah-amber">
                    <Users className="w-5 h-5 mr-3" aria-hidden="true" />
                    Espace pour exercices guidés
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Équipements et technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-serif text-sealiah-eucalyptus mb-8 text-center">
            Nos Équipements
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Équipements disponibles">
            {[
              {
                title: "Tables de massage électriques",
                description: "Pour un confort optimal pendant les soins"
              },
              {
                title: "Équipements de physiothérapie",
                description: "Ultrasons, électrothérapie, pressothérapie"
              },
              {
                title: "Matériel de rééducation",
                description: "Balles, élastiques, plateaux proprioceptifs"
              },
              {
                title: "Appareils de musculation",
                description: "Adaptés à la rééducation fonctionnelle"
              }
            ].map((equipment, index) => (
              <motion.div
                key={equipment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-3">
                  {equipment.title}
                </h3>
                <p className="text-sealiah-amber">
                  {equipment.description}
                </p>
              </motion.div>
            ))}
          </section>
        </motion.section>
      </div>
    </div>
  );
}