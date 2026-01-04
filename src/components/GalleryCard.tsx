import { GalleryImage } from '@/types/gallery';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

const GalleryCard = ({ image, onClick, index }: GalleryCardProps) => {
  const staggerClass = `stagger-${(index % 6) + 1}`;
  
  return (
    <div
      className={`gallery-card aspect-[4/3] opacity-0 animate-scale-in ${staggerClass}`}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="gallery-card-overlay">
        <div className="gallery-card-content">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-primary/90 text-primary-foreground rounded-full mb-2">
            {image.category}
          </span>
          <h3 className="font-display text-xl text-primary-foreground font-medium">
            {image.title}
          </h3>
          {image.description && (
            <p className="text-primary-foreground/80 text-sm mt-1">
              {image.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
