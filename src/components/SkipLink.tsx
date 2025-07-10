import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a 
      href="#main-content" 
      className="skip-link"
      aria-label="Aller au contenu principal"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipLink;