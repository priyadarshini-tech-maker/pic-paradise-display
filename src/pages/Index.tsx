import { useState, useMemo, useCallback } from 'react';
import { Category, GalleryImage } from '@/types/gallery';
import { categories, galleryImages } from '@/data/galleryData';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import GalleryGrid from '@/components/GalleryGrid';
import Lightbox from '@/components/Lightbox';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const currentIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Header />
        
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <GalleryGrid
          key={activeCategory}
          images={filteredImages}
          onImageClick={handleImageClick}
        />
      </div>

      <Lightbox
        image={selectedImage}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentIndex < filteredImages.length - 1}
        hasPrevious={currentIndex > 0}
      />

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Press <kbd className="px-2 py-0.5 bg-secondary rounded text-xs font-mono">←</kbd>{' '}
            <kbd className="px-2 py-0.5 bg-secondary rounded text-xs font-mono">→</kbd> to navigate
            and <kbd className="px-2 py-0.5 bg-secondary rounded text-xs font-mono">Esc</kbd> to close
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
