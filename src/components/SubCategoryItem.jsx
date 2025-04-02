// src/components/SubCategoryItem.jsx
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SubCategoryItem({ title, id, mainCategoryTitle }) { // Receive mainCategoryTitle
  const navigate = useNavigate();

  const handleClick = () => {
    // Encode titles to handle spaces or special characters in URL
    const encodedMainTitle = encodeURIComponent(mainCategoryTitle);
    const encodedSubTitle = encodeURIComponent(title);
    const path = `/create-request/${encodedMainTitle}/${encodedSubTitle}`;
    navigate(path);
  };

  return (
    <button
      onClick={handleClick} // Use onClick to navigate
      className="
        w-full flex justify-between items-center
        py-3 px-4
        text-sm text-gray-700 text-left
        border-t border-gray-100
        hover:bg-gray-50 transition-colors duration-150
        first:border-t-0 focus:outline-none focus:bg-gray-100
      "
    >
      <span>{title}</span>
      <FaChevronRight className="text-gray-400" />
    </button>
  );
}

export default SubCategoryItem;