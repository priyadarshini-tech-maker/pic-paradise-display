export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: Category;
  description?: string;
}

export type Category = 'all' | 'nature' | 'animals' | 'technology' | 'people';

export interface CategoryOption {
  id: Category;
  label: string;
}
