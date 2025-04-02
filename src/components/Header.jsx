// src/components/Header.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

// Accept title and hideSearch props
function Header({ title = "Заказчик", hideSearch = false }) {
  const searchInputId = 'header-search-input';

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', event.target.elements[searchInputId].value);
  };

  return (
    <header className="bg-white p-4 shadow-sm sticky top-0 z-10"> {/* Added sticky top */}
      {/* Display the passed title */}
      <h1 className="text-xl font-bold text-gray-800 mb-3">{title}</h1>

      {/* Conditionally render the search bar */}
      {!hideSearch && (
        <form
          role="search"
          className="relative flex items-center"
          onSubmit={handleSearchSubmit}
        >
          <label htmlFor={searchInputId} className="sr-only">
            Быстрый поиск
          </label>
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="search"
            id={searchInputId}
            name="search"
            placeholder="Быстрый поиск...."
            className="
              w-full                   // Take full width
              bg-search-bg             // Custom background color (e.g., bg-[#e0e7ff] or your theme color)
              text-gray-700            // Text color
              text-sm                  // Font size
              rounded-full             // Fully rounded corners
              py-2                     // Vertical padding
              pl-9                     // Left padding (to make space for the icon)
              pr-3                     // Right padding
              border                   // Add border
              border-transparent       // Make default border transparent
              focus:outline-none       // Remove default focus outline
              focus:ring-2             // Add custom focus ring
              focus:ring-blue-500      // Color of the focus ring
              focus:border-transparent // Keep border transparent on focus
            "
          />
          <button type="submit" className="sr-only">
            Искать
          </button>
        </form>
      )}
    </header>
  );
}

export default Header;