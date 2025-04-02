import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const searchInputId = 'header-search-input'; // Unique ID for label association

  // Handler for form submission (optional, prevents default page reload)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement search logic here based on input value
    console.log('Search submitted:', event.target.elements[searchInputId].value);
    // You might want to navigate to a search results page or filter content
  };

  return (
    <header className="bg-white p-4 shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 mb-3">Заказчик</h1>

      {/* Use a form element with role="search" for better semantics */}
      <form
        role="search"
        className="relative flex items-center" // Use relative positioning for potential icon placement inside
        onSubmit={handleSearchSubmit}
      >
        {/* Visually hidden label for accessibility */}
        <label htmlFor={searchInputId} className="sr-only">
          Быстрый поиск
        </label>

        {/* Search Icon positioned absolutely inside the input padding area */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
           {/* Wrap icon for positioning */}
          <FaSearch className="text-gray-500" />
        </div>

        {/* Actual search input */}
        <input
          type="search" // Use type="search" for semantics and potential browser UI hints
          id={searchInputId}
          name="search" // Optional: name attribute for form submission
          placeholder="Быстрый поиск...."
          // Apply styling to match the previous look:
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
          // Add handlers for input changes if needed for live filtering
          // onChange={(e) => console.log(e.target.value)}
        />

        {/* Optional: Add a visually hidden submit button for better form accessibility */}
        <button type="submit" className="sr-only">
           Искать {/* Search */}
        </button>
      </form>
    </header>
  );
}

export default Header;