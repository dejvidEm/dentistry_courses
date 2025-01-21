import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  onSelectCategory: (categoryId: number) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div className="max-w-[1400px] mx-auto flex space-x-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`px-4 py-2 border rounded-md text-sm ${
            selectedCategory === category.id
              ? "border-green-500 text-green-500"
              : "border-gray-300 text-gray-500"
          }`}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;