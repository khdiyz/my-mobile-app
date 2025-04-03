// src/components/CategoryItem.jsx
import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Added showChevron prop, made onToggle/isExpanded optional
function CategoryItem({
  title,
  subtitle,
  isExpanded, // Optional
  onToggle,   // Optional
  onClick,    // Optional general click handler if not used as button
  showChevron = true, // Default to show chevron
}) {
  const content = (
    <>
      {/* Left side: Title and Subtitle */}
      <div className="flex flex-col">
        <span className="text-base font-medium text-gray-800">{title}</span>
        {subtitle && (
          <span className="text-sm text-gray-500 mt-1">{subtitle}</span>
        )}
      </div>

      {/* Right side: Chevron Icon */}
      {showChevron && (
          isExpanded ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-400" />
          )
      )}
    </>
  );

  // Render as button if onToggle is provided, otherwise as div (potentially clickable if onClick is provided)
  if (onToggle) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className="w-full bg-white p-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:bg-gray-100"
        aria-expanded={isExpanded}
      >
        {content}
      </button>
    );
  } else {
    return (
      <div
        onClick={onClick} // Use general onClick if provided
        className={`w-full bg-white p-4 flex justify-between items-center text-left ${onClick ? 'hover:bg-gray-50 cursor-pointer' : ''} transition-colors duration-150`}
      >
        {content}
      </div>
    );
  }
}

export default CategoryItem;