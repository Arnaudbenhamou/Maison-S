import React from 'react';
import { Link } from 'react-router-dom';

interface InternalLinksProps {
  className?: string;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ className = '' }) => {
  const links = [
    {
      to: '/soins',
      text: 'Découvrez nos soins signature',
      description: 'Massages thérapeutiques et soins énergétiques'
    },
    {
      to: '/specialites',
      text: 'Nos spécialités thérapeutiques',
      description: 'Kinésithérapie, ostéopathie et bien-être'
    },
    {
      to: '/notre-cabinet',
      text: 'Visitez notre cabinet',
      description: 'Équipements modernes et espace de 200m²'
    },
    {
      to: '/praticien-kinesitherapeute-osteopathe-puteaux',
      text: 'Rencontrez Arnaud Benhamou',
      description: 'Masseur-Kinésithérapeute et Ostéopathe expert'
    },
    {
      to: '/journal',
      text: 'Lisez nos conseils bien-être',
      description: 'Articles sur la santé et la méditation'
    }
  ];

  return (
    <nav className={`internal-links ${className}`} aria-label="Liens internes du site">
      <h3 className="text-lg font-serif text-sealiah-eucalyptus mb-4">
        Explorez Maison Sealiah
      </h3>
      <ul className="space-y-3" role="list">
        {links.map((link, index) => (
          <li key={index} role="listitem">
            <Link
              to={link.to}
              className="block p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2"
              aria-label={`${link.text} - ${link.description}`}
            >
              <span className="text-sealiah-eucalyptus font-medium block">
                {link.text}
              </span>
              <span className="text-sealiah-amber text-sm">
                {link.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default InternalLinks;