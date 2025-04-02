// src/components/CategoryItem.jsx
import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Reverted to accept isExpanded and onToggle props
function CategoryItem({ title, subtitle, isExpanded, onToggle }) {
  return (
    // Render as a button again
    <button
      type="button"
      onClick={onToggle}
      className="
        w-full bg-white p-4 flex justify-between items-center
        text-left hover:bg-gray-50 transition-colors duration-150
        focus:outline-none  // Add rounding back here if the parent div doesn't handle it
      "
      aria-expanded={isExpanded}
    >
      {/* Left side: Title and Subtitle */}
      <div className="flex flex-col">
        <span className="text-base font-medium text-gray-800">{title}</span>
        {subtitle && (
          <span className="text-sm text-gray-500 mt-1">{subtitle}</span>
        )}
      </div>

      {/* Right side: Chevron Icon (changes based on isExpanded) */}
      {isExpanded ? (
        <FaChevronUp className="text-gray-500" />
      ) : (
        <FaChevronDown className="text-gray-400" />
      )}
    </button>
  );
}

export default CategoryItem;