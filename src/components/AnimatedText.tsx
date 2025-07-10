import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  // Function to add bold tags to specific words
  const formatText = (text: string) => {
    return text.replace(
      /(notre savoir-faire|Vous)/g, 
      '<strong class="font-semibold">$1</strong>'
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`group font-serif ${className}`}
    >
      <span 
        className="transition-colors duration-300 group-hover:text-sealiah-eucalyptus"
        dangerouslySetInnerHTML={{ __html: formatText(text) }}
      />
    </motion.div>
  );
};

export default AnimatedText;