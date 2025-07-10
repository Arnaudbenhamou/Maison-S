import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import type { Article } from '../types/article';

interface SimilarArticlesProps {
  articles: Article[];
  currentArticleId: string;
}

const SimilarArticles: React.FC<SimilarArticlesProps> = ({ articles, currentArticleId }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (articles.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-16"
      aria-labelledby="similar-articles"
    >
      <div className="text-center mb-12">
        <h2 id="similar-articles" className="text-3xl font-serif text-sealiah-eucalyptus mb-4">
          Articles qui pourraient vous intéresser
        </h2>
        <p className="text-lg text-sealiah-amber max-w-2xl mx-auto">
          Découvrez d'autres contenus sélectionnés pour approfondir vos connaissances en bien-être et santé
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Link 
              to={`/journal/${article.slug}`} 
              className="block h-full"
              aria-label={`Lire l'article: ${article.title}`}
            >
              {article.featured_image && (
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={article.featured_image}
                    alt={article.featured_image_alt || article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={192}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              
              <div className="p-6 flex flex-col h-full">
                {/* Métadonnées */}
                <div className="flex items-center gap-2 mb-3 text-xs text-sealiah-amber">
                  <Calendar className="w-3 h-3" />
                  <time dateTime={article.published_at}>
                    {formatDate(article.published_at!)}
                  </time>
                  <span>•</span>
                  <Clock className="w-3 h-3" />
                  <span>{article.reading_time} min</span>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-serif text-sealiah-eucalyptus mb-3 group-hover:text-sealiah-amber transition-colors duration-300 line-clamp-2 flex-grow">
                  {article.title}
                </h3>

                {/* Extrait */}
                {article.excerpt && (
                  <p className="text-sm text-sealiah-amber mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-sealiah-amber/20 text-sealiah-amber px-2 py-1 rounded-full"
                    >
                      <Tag className="w-2 h-2 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="text-xs text-sealiah-amber/60">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs bg-sealiah-eucalyptus/20 text-sealiah-eucalyptus px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sealiah-eucalyptus group-hover:text-sealiah-amber transition-colors duration-300 flex items-center text-sm">
                    Lire
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* CTA vers le journal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="text-center mt-12"
      >
        <Link
          to="/journal"
          className="inline-flex items-center px-6 py-3 bg-sealiah-amber text-sealiah-ivory rounded-full hover:bg-sealiah-eucalyptus transition-colors duration-300 font-medium"
        >
          Découvrir tous nos articles
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default SimilarArticles;