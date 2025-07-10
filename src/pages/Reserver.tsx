import React from 'react';
import { motion } from 'framer-motion';

export default function Reserver() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Réserver votre Soin
          </h1>
          <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
            Prenez rendez-vous pour votre moment de détente en quelques clics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sealiah-eucalyptus mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-sealiah-amber/30 focus:outline-none focus:border-sealiah-amber"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sealiah-eucalyptus mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-sealiah-amber/30 focus:outline-none focus:border-sealiah-amber"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sealiah-eucalyptus mb-2">
                Type de soin
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 rounded-lg border border-sealiah-amber/30 focus:outline-none focus:border-sealiah-amber"
              >
                <option value="">Sélectionnez un soin</option>
                <option value="massage">Massage Signature</option>
                <option value="facial">Soin du Visage</option>
                <option value="energy">Soin Énergétique</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sealiah-eucalyptus mb-2">
                Date souhaitée
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 rounded-lg border border-sealiah-amber/30 focus:outline-none focus:border-sealiah-amber"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sealiah-eucalyptus mb-2">
                Horaire préféré
              </label>
              <select
                id="time"
                className="w-full px-4 py-2 rounded-lg border border-sealiah-amber/30 focus:outline-none focus:border-sealiah-amber"
              >
                <option value="">Choisissez un horaire</option>
                <option value="morning">Matin (9h - 12h)</option>
                <option value="afternoon">Après-midi (14h - 17h)</option>
                <option value="evening">Soirée (17h - 20h)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sealiah-eucalyptus mb-2">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-sealiah-amber/30 focus:outline-none focus:border-sealiah-amber"
                placeholder="Informations complémentaires..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 text-sealiah-ivory bg-sealiah-amber rounded-full
                       hover:bg-sealiah-eucalyptus transition-all duration-300
                       transform hover:scale-105"
            >
              Confirmer la réservation
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}