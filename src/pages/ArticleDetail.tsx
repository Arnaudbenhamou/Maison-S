import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SimilarArticles from '../components/SimilarArticles';
import { ArticleService } from '../services/articleService';
import type { Article } from '../types/article';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      loadArticle(slug);
    }
  }, [slug]);

  const loadArticle = async (articleSlug: string) => {
    try {
      setLoading(true);
      const articleData = await ArticleService.getArticleBySlug(articleSlug);
      
      if (!articleData) {
        setNotFound(true);
        return;
      }

      setArticle(articleData);
      
      // Charger les articles similaires
      const related = await ArticleService.getSimilarArticles(articleData, 4);
      setRelatedArticles(related);
      
    } catch (error) {
      console.error('Erreur lors du chargement de l\'article:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (!article) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Partage annulé');
      }
    } else {
      // Fallback: copier l'URL
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const generateStructuredData = (article: Article) => {
    return {
      '@context': 'https://schema.org',
      '@type': article.schema_type || 'Article',
      headline: article.title,
      description: article.excerpt,
      image: article.featured_image,
      author: {
        '@type': 'Person',
        name: article.author_name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Maison Sealiah',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.maisonsealiah.fr/logo.svg',
        },
      },
      datePublished: article.published_at,
      dateModified: article.updated_at,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': article.canonical_url || window.location.href,
      },
      keywords: article.meta_keywords?.join(', '),
      articleSection: article.category,
      wordCount: article.content.split(/\s+/).length,
      timeRequired: `PT${article.reading_time}M`,
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="animate-pulse text-sealiah-amber text-xl">Chargement de l'article...</div>
      </div>
    );
  }

  if (notFound || !article) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="min-h-screen py-20 px-6" role="main">
      <Helmet>
        <title>{article.meta_title || `${article.title} | Maison Sealiah`}</title>
        <meta name="description" content={article.meta_description || article.excerpt} />
        <meta name="keywords" content={article.meta_keywords?.join(', ')} />
        <link rel="canonical" href={article.canonical_url || window.location.href} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.meta_title || article.title} />
        <meta property="og:description" content={article.meta_description || article.excerpt} />
        <meta property="og:url" content={article.canonical_url || window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.og_image || article.featured_image} />
        <meta property="og:image:alt" content={article.featured_image_alt || article.title} />
        <meta property="article:author" content={article.author_name} />
        <meta property="article:published_time" content={article.published_at} />
        <meta property="article:modified_time" content={article.updated_at} />
        <meta property="article:section" content={article.category} />
        {article.meta_keywords?.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={article.meta_title || article.title} />
        <meta property="twitter:description" content={article.meta_description || article.excerpt} />
        <meta property="twitter:image" content={article.twitter_image || article.featured_image} />
        <meta property="twitter:image:alt" content={article.featured_image_alt || article.title} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData(article))}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/journal"
            className="inline-flex items-center text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au journal
          </Link>
        </motion.div>

        {/* En-tête de l'article */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="text-sm bg-sealiah-amber/20 text-sealiah-amber px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-sealiah-eucalyptus mb-6 leading-tight">
            {article.title}
          </h1>
          
          {article.excerpt && (
            <p className="text-xl text-sealiah-amber mb-6 leading-relaxed">
              {article.excerpt}
            </p>
          )}
          
          <div className="flex flex-wrap items-center gap-6 text-sealiah-amber">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <time dateTime={article.published_at}>
                {formatDate(article.published_at!)}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.reading_time} min de lecture</span>
            </div>
          </div>
        </motion.header>

        {/* Image principale */}
        {article.featured_image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <OptimizedImage
              src={article.featured_image}
              alt={article.featured_image_alt || article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              width={800}
              height={384}
              loading="lazy"
            />
          </motion.div>
        )}

        {/* Contenu de l'article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8"
        >
          <div 
            className="prose prose-lg max-w-none text-sealiah-amber prose-headings:text-sealiah-eucalyptus prose-headings:font-serif prose-a:text-sealiah-eucalyptus prose-strong:text-sealiah-eucalyptus"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }}
          />
        </motion.article>

        {/* Actions de l'article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-12"
        >
          <div className="flex items-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-sealiah-eucalyptus/20 text-sealiah-eucalyptus rounded-lg hover:bg-sealiah-eucalyptus/30 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
          </div>
          
          <span className="text-sm bg-sealiah-amber/20 text-sealiah-amber px-3 py-1 rounded-full">
            {article.category}
          </span>
        </motion.div>

        {/* Articles similaires */}
        <SimilarArticles articles={relatedArticles} currentArticleId={article.id} />
      </div>
    </div>
  );
}