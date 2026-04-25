export interface Course {
  id: string;
  collectionId?: string;
  collectionName?: string;

  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  duration?: string;
  modality?: string;
  price?: number;
  image?: string;
  category?: string;
  is_featured: boolean;
  is_active: boolean;
  order?: number;

  created?: string;
  updated?: string;
}