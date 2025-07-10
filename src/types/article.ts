export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  featured_image_alt?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  author_id?: string;
  author_name: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  reading_time: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
  canonical_url?: string;
  og_image?: string;
  twitter_image?: string;
  schema_type: string;
}

export interface ArticleFilters {
  category?: string;
  tags?: string[];
  status?: string;
  featured?: boolean;
  author_id?: string;
  search?: string;
}

export interface ArticleFormData {
  title: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  featured_image_alt?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  reading_time: number;
  canonical_url?: string;
  og_image?: string;
  twitter_image?: string;
}