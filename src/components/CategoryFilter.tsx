import { Category, CategoryOption } from '@/types/gallery';

interface CategoryFilterProps {
  categories: CategoryOption[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
