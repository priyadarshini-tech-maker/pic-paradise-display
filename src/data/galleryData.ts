import { GalleryImage, CategoryOption } from '@/types/gallery';

import nature1 from '@/assets/nature-1.jpg';
import nature2 from '@/assets/nature-2.jpg';
import animals1 from '@/assets/animals-1.jpg';
import animals2 from '@/assets/animals-2.jpg';
import tech1 from '@/assets/tech-1.jpg';
import tech2 from '@/assets/tech-2.jpg';
import people1 from '@/assets/people-1.jpg';
import people2 from '@/assets/people-2.jpg';

export const categories: CategoryOption[] = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'animals', label: 'Animals' },
  { id: 'technology', label: 'Technology' },
  { id: 'people', label: 'People' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: nature1,
    title: 'Mountain Serenity',
    category: 'nature',
    description: 'Majestic peaks reaching towards the endless sky',
  },
  {
    id: 2,
    src: animals1,
    title: 'Wild Spirit',
    category: 'animals',
    description: 'A glimpse into the untamed wilderness',
  },
  {
    id: 3,
    src: tech1,
    title: 'Digital Dreams',
    category: 'technology',
    description: 'Where innovation meets imagination',
  },
  {
    id: 4,
    src: people1,
    title: 'Urban Stories',
    category: 'people',
    description: 'Capturing the essence of human connection',
  },
  {
    id: 5,
    src: nature2,
    title: 'Ocean Whispers',
    category: 'nature',
    description: 'The eternal dance of waves and light',
  },
  {
    id: 6,
    src: animals2,
    title: 'Graceful Wings',
    category: 'animals',
    description: 'Freedom in flight',
  },
  {
    id: 7,
    src: tech2,
    title: 'Future Forward',
    category: 'technology',
    description: 'The architecture of tomorrow',
  },
  {
    id: 8,
    src: people2,
    title: 'Moments Shared',
    category: 'people',
    description: 'The beauty of togetherness',
  },
];
