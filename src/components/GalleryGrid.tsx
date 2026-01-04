import { GalleryImage } from '@/types/gallery';
import GalleryCard from './GalleryCard';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">No images found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <GalleryCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
          index={index}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
