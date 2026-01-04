import { useEffect, useCallback } from 'react';
import { GalleryImage } from '@/types/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const Lightbox = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
        case 'ArrowLeft':
          if (hasPrevious) onPrevious();
          break;
      }
    },
    [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="lightbox-backdrop animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background hover:scale-110 transition-all duration-300 z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="nav-button left-4 md:left-8"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div
        className="lightbox-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gallery-overlay/90 to-transparent rounded-b-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-primary text-primary-foreground rounded-full mb-3">
            {image.category}
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground font-medium">
            {image.title}
          </h2>
          {image.description && (
            <p className="text-primary-foreground/80 mt-2 max-w-lg">
              {image.description}
            </p>
          )}
        </div>
      </div>

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="nav-button right-4 md:right-8"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Keyboard hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 text-primary-foreground/60 text-sm">
        <span className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-background/20 rounded text-xs">←</kbd>
          <kbd className="px-2 py-1 bg-background/20 rounded text-xs">→</kbd>
          Navigate
        </span>
        <span className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-background/20 rounded text-xs">Esc</kbd>
          Close
        </span>
      </div>
    </div>
  );
};

export default Lightbox;
