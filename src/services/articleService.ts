import { supabase } from '../lib/supabase';
import type { Article, ArticleFilters, ArticleFormData } from '../types/article';

export class ArticleService {
  // Récupérer tous les articles publiés
  static async getPublishedArticles(filters?: ArticleFilters): Promise<Article[]> {
    let query = supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString())
      .order('published_at', { ascending: false });

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.tags && filters.tags.length > 0) {
      query = query.overlaps('tags', filters.tags);
    }

    if (filters?.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%,content.ilike.%${filters.search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Erreur lors de la récupération des articles:', error);
      throw error;
    }

    return data || [];
  }

  // Récupérer un article par son slug
  static async getArticleBySlug(slug: string): Promise<Article | null> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString())
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Article non trouvé
      }
      console.error('Erreur lors de la récupération de l\'article:', error);
      throw error;
    }

    return data;
  }

  // Récupérer les articles en vedette
  static async getFeaturedArticles(limit: number = 3): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .eq('featured', true)
      .lte('published_at', new Date().toISOString())
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Erreur lors de la récupération des articles en vedette:', error);
      throw error;
    }

    return data || [];
  }

  // Récupérer les articles récents
  static async getRecentArticles(limit: number = 5): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString())
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Erreur lors de la récupération des articles récents:', error);
      throw error;
    }

    return data || [];
  }

  // Récupérer les articles par catégorie
  static async getArticlesByCategory(category: string, limit?: number): Promise<Article[]> {
    let query = supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .eq('category', category)
      .lte('published_at', new Date().toISOString())
      .order('published_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Erreur lors de la récupération des articles par catégorie:', error);
      throw error;
    }

    return data || [];
  }

  // Rechercher des articles
  static async searchArticles(searchTerm: string): Promise<Article[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString())
      .or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Erreur lors de la recherche d\'articles:', error);
      throw error;
    }

    return data || [];
  }

  // Récupérer toutes les catégories
  static async getCategories(): Promise<string[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('category')
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString());

    if (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
      throw error;
    }

    const categories = [...new Set(data?.map(item => item.category) || [])];
    return categories.filter(Boolean);
  }

  // Récupérer tous les tags
  static async getTags(): Promise<string[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('tags')
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString());

    if (error) {
      console.error('Erreur lors de la récupération des tags:', error);
      throw error;
    }

    const allTags = data?.flatMap(item => item.tags || []) || [];
    return [...new Set(allTags)].filter(Boolean);
  }

  // Générer un slug à partir du titre
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
      .replace(/[^a-z0-9\s-]/g, '') // Supprime les caractères spéciaux
      .replace(/\s+/g, '-') // Remplace les espaces par des tirets
      .replace(/-+/g, '-') // Supprime les tirets multiples
      .trim();
  }

  // Calculer le temps de lecture
  static calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }

  // Générer automatiquement les méta-données SEO
  static generateSEOMetadata(article: Partial<ArticleFormData>) {
    const metadata: Partial<ArticleFormData> = {};

    // Meta title
    if (!article.meta_title && article.title) {
      metadata.meta_title = `${article.title} | Maison Sealiah`;
    }

    // Meta description
    if (!article.meta_description && article.excerpt) {
      metadata.meta_description = article.excerpt.length > 160 
        ? article.excerpt.substring(0, 157) + '...'
        : article.excerpt;
    }

    // Canonical URL
    if (!article.canonical_url && article.title) {
      const slug = this.generateSlug(article.title);
      metadata.canonical_url = `https://www.maisonsealiah.fr/journal/${slug}`;
    }

    // Images Open Graph et Twitter
    if (article.featured_image) {
      if (!article.og_image) {
        metadata.og_image = article.featured_image;
      }
      if (!article.twitter_image) {
        metadata.twitter_image = article.featured_image;
      }
    }

    return metadata;
  }

  // CRUD pour les utilisateurs authentifiés

  // Créer un article
  static async createArticle(articleData: ArticleFormData): Promise<Article> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Utilisateur non authentifié');
    }

    // Générer le slug
    const slug = this.generateSlug(articleData.title);
    
    // Calculer le temps de lecture
    const reading_time = this.calculateReadingTime(articleData.content);
    
    // Générer les métadonnées SEO
    const seoMetadata = this.generateSEOMetadata(articleData);

    const newArticle = {
      ...articleData,
      ...seoMetadata,
      slug,
      reading_time,
      author_id: user.id,
      author_name: user.user_metadata?.full_name || user.email || 'Auteur',
      published_at: articleData.status === 'published' ? new Date().toISOString() : null,
    };

    const { data, error } = await supabase
      .from('articles')
      .insert(newArticle)
      .select()
      .single();

    if (error) {
      console.error('Erreur lors de la création de l\'article:', error);
      throw error;
    }

    return data;
  }

  // Mettre à jour un article
  static async updateArticle(id: string, articleData: Partial<ArticleFormData>): Promise<Article> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Utilisateur non authentifié');
    }

    const updateData: any = { ...articleData };

    // Régénérer le slug si le titre a changé
    if (articleData.title) {
      updateData.slug = this.generateSlug(articleData.title);
    }

    // Recalculer le temps de lecture si le contenu a changé
    if (articleData.content) {
      updateData.reading_time = this.calculateReadingTime(articleData.content);
    }

    // Générer les métadonnées SEO
    const seoMetadata = this.generateSEOMetadata(articleData);
    Object.assign(updateData, seoMetadata);

    // Mettre à jour la date de publication si le statut change vers published
    if (articleData.status === 'published') {
      updateData.published_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from('articles')
      .update(updateData)
      .eq('id', id)
      .eq('author_id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Erreur lors de la mise à jour de l\'article:', error);
      throw error;
    }

    return data;
  }

  // Supprimer un article
  static async deleteArticle(id: string): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Utilisateur non authentifié');
    }

    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)
      .eq('author_id', user.id);

    if (error) {
      console.error('Erreur lors de la suppression de l\'article:', error);
      throw error;
    }
  }

  // Récupérer les articles de l'utilisateur connecté
  static async getUserArticles(): Promise<Article[]> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('Utilisateur non authentifié');
    }

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('author_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Erreur lors de la récupération des articles utilisateur:', error);
      throw error;
    }

    return data || [];
  }
}