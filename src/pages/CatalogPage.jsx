// src/pages/CatalogPage.jsx
import React, { useState } from 'react'; // Import useState again
// Removed Headless UI imports
import CategoryItem from '../components/CategoryItem';
import SubCategoryItem from '../components/SubCategoryItem';

// Sample data (ensure this is accessible here)
const categoriesData = [
  {
    id: 1,
    title: 'Сантехника',
    subtitle: '12 категории',
    subcategories: [
        { id: 101, title: 'Аварийный сантехник' }, { id: 102, title: 'Засоры' },
        { id: 103, title: 'Протечки' }, { id: 104, title: 'Раковина' },
        { id: 105, title: 'Сместитель' }, { id: 106, title: 'Унитаз' },
        { id: 107, title: 'Отопление' },
    ]
  },
  { id: 2, title: 'Электрик', subtitle: '12 категории', subcategories: [ { id: 201, title: 'Ремонт проводки' }, { id: 202, title: 'Установка розеток' },] },
  { id: 3, title: 'Камера домофания', subtitle: '12 категории', subcategories: [] },
  { id: 4, title: 'Бытовая техника', subtitle: '12 категории', subcategories: [] },
  { id: 5, title: 'Ремонт Кондиционер', subtitle: '12 категории', subcategories: [] },
];

function CatalogPage() {
  // Re-introduce state for managing the expanded category
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  // Re-introduce the toggle handler
  const handleToggleCategory = (categoryId) => {
    setExpandedCategoryId(prevId => (prevId === categoryId ? null : categoryId));
  };

  // Optional: Add a check for empty data before mapping
  if (!categoriesData || categoriesData.length === 0) {
    return (
        <div className="p-4 text-center text-gray-500">
            Категории не найдены. {/* Categories not found. */}
        </div>
    );
}

  return (
    <div className="p-4 space-y-3">
      {categoriesData.map((category) => {
        if (!category || !category.title) return null;

        const isExpanded = expandedCategoryId === category.id; // Check if current item is expanded

        return (
          // Main container for category item + subcategories
          // Added overflow-hidden and rounded-lg here
          <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <CategoryItem
              title={category.title}
              subtitle={category.subtitle}
              isExpanded={isExpanded} // Pass expanded state
              onToggle={() => handleToggleCategory(category.id)} // Pass toggle handler
            />

            {/* Subcategory Container with CSS Transitions */}
            <div
              className={`
                transition-all ease-in-out overflow-hidden // Base transition styles
                duration-500                              // Slower duration (500ms) - ADJUST AS NEEDED
                ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} // Conditional styles
              `}
              // You might need aria-hidden={!isExpanded} for better accessibility hiding
              aria-hidden={!isExpanded}
            >
              {/* Render subcategories only if they exist */}
              {category.subcategories?.length > 0 ? (
                 // Added a slight padding to the sublist container
                <div className="py-1 border-t border-gray-100">
                    {category.subcategories.map((subCategory) => (
                        <SubCategoryItem
                            key={subCategory.id}
                            id={subCategory.id}
                            title={subCategory.title}
                            mainCategoryTitle={category.title}
                        />
                    ))}
                </div>
              ) : (
                // Optionally show 'No subcategories' only when expanded
                isExpanded && (
                  <div className="px-4 py-3 text-sm text-gray-500 border-t border-gray-100">
                    Нет подкатегорий.
                  </div>
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CatalogPage;