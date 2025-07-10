import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import { ArticleService } from '../services/articleService';
import type { Article } from '../types/article';

export default function Journal() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, [selectedCategory, selectedTags, searchTerm]);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Charger les articles avec filtres
      const filters = {
        category: selectedCategory || undefined,
        tags: selectedTags.length > 0 ? selectedTags : undefined,
        search: searchTerm || undefined,
      };
      
      const [articlesData, featuredData, categoriesData, tagsData] = await Promise.all([
        ArticleService.getPublishedArticles(filters),
        ArticleService.getCategories(),
        ArticleService.getTags(),
      ]);
      
      setArticles(articlesData);
      setCategories(categoriesData);
      setTags(tagsData);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    loadData();
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>Journal Bien-être - Articles Santé | Maison Sealiah</title>
        <meta name="description" content="Articles bien-être et santé par Maison Sealiah : méditation, routines matinales, conseils pour une vie équilibrée. Expertise en kinésithérapie et ostéopathie." />
        <meta name="keywords" content="bien-être, méditation, santé, conseils, routine matinale, équilibre, kinésithérapie, ostéopathie" />
        <link rel="canonical" href="https://www.maisonsealiah.fr/journal" />
        <meta property="og:title" content="Journal Bien-être - Articles Santé | Maison Sealiah" />
        <meta property="og:description" content="Articles bien-être et conseils santé par nos experts en kinésithérapie et ostéopathie." />
        <meta property="og:url" content="https://www.maisonsealiah.fr/journal" />
        <meta property="og:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-journal.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Articles bien-être et conseils santé - Maison Sealiah" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://eniofgrvwufhyeumeetp.supabase.co/storage/v1/object/public/images-maison-sealiah/social-sharing/og-image-journal.jpg" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6">
            Journal Bien-être
          </h1>
          <p className="text-xl text-sealiah-amber max-w-2xl mx-auto">
            Découvrez nos conseils d'experts en kinésithérapie, ostéopathie et bien-être pour une vie plus équilibrée.
          </p>
        </motion.div>

        {/* Barre de recherche et filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-12"
        >
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sealiah-amber w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-sealiah-amber/30 rounded-lg focus:outline-none focus:border-sealiah-amber"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-sealiah-amber text-sealiah-ivory rounded-lg hover:bg-sealiah-eucalyptus transition-colors"
              >
                Rechercher
              </button>
            </div>
          </form>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-sealiah-amber" />
              <span className="text-sealiah-eucalyptus font-medium">Filtres:</span>
            </div>
            
            {/* Filtre par catégorie */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 border border-sealiah-amber/30 rounded-lg focus:outline-none focus:border-sealiah-amber"
            >
              <option value="">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Filtre par tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-sealiah-eucalyptus text-sealiah-ivory'
                      : 'bg-sealiah-amber/20 text-sealiah-amber hover:bg-sealiah-amber/30'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>


        {/* Articles par ordre chronologique */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-labelledby="all-articles"
        >
          <h2 id="all-articles" className="text-3xl font-serif text-sealiah-eucalyptus mb-8 text-center">
            Nos derniers articles
          </h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-pulse text-sealiah-amber">Chargement des articles...</div>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-sealiah-amber">Aucun article trouvé avec ces critères.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link to={`/journal/${article.slug}`} className="block">
                    {article.featured_image && (
                      <OptimizedImage
                        src={article.featured_image}
                        alt={article.featured_image_alt || article.title}
                        className="w-full h-48 object-cover"
                        width={400}
                        height={192}
                        loading="lazy"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-sm text-sealiah-amber">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.published_at}>
                          {formatDate(article.published_at!)}
                        </time>
                        <span>•</span>
                        <Clock className="w-4 h-4" />
                        <span>{article.reading_time} min</span>
                      </div>
                      <h3 className="text-xl font-serif text-sealiah-eucalyptus mb-3 hover:text-sealiah-amber transition-colors">
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-sealiah-amber mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs bg-sealiah-amber/20 text-sealiah-amber px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-sealiah-amber">
                          <User className="w-4 h-4" />
                          <span>{article.author_name}</span>
                        </div>
                        <span className="text-sm bg-sealiah-eucalyptus/20 text-sealiah-eucalyptus px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}