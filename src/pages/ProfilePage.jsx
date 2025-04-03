// src/pages/ProfilePage.jsx
import React from 'react';
import CategoryItem from '../components/CategoryItem'; // Using CategoryItem for list items
import { FaUserCog, FaSignOutAlt } from 'react-icons/fa'; // Example icons

// Data for the list items
const profileItemsData = [
  { id: 'my-requests', title: 'Мои заявки', subtitle: 'Подзаголовок для текста и тд', path: '/requests' }, // Example path
  { id: 'security', title: 'Безопасность', subtitle: 'Подзаголовок для текста и тд', path: '/settings/security' }, // Example path
  { id: 'help', title: 'Помощь и поддержка', subtitle: 'Подзаголовок для текста и тд', path: '/help' }, // Example path
  { id: 'language', title: 'Язык приложения', subtitle: 'Подзаголовок для текста и тд', path: '/settings/language' }, // Example path
  { id: 'privacy', title: 'Политика конфиденциальности', subtitle: 'Подзаголовок для текста и тд', path: '/privacy-policy' }, // Example path
];

function ProfilePage() {

  const handleSpecialistMode = () => {
    console.log("Switching to Specialist Mode...");
    // Add logic for switching mode
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic (clear tokens, redirect to login, etc.)
  };

  // Placeholder for navigation if needed, adapt CategoryItem if using paths
  const handleItemClick = (path) => {
      if (path) {
          console.log(`Navigating to ${path}...`);
          // navigate(path); // Requires useNavigate hook if used
      } else {
          console.log("Item clicked, no path defined.");
      }
  }

  return (
    <div className="px-4 space-y-3"> {/* Use px-4 for padding alignment */}
      {/* List of Profile Items */}
      <div className="space-y-3">
        {profileItemsData.map((item) => (
           <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
             <CategoryItem
               title={item.title}
               subtitle={item.subtitle}
               showChevron={true} // Explicitly show chevron
               // onClick={() => handleItemClick(item.path)} // Optional: handle navigation
               // Pass onToggle/isExpanded here if you implement expansion later
             />
           </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-6 space-y-3">
        <button
          onClick={handleSpecialistMode}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-full text-base font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          <FaUserCog />
          <span>Режим специалиста</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-full text-base font-semibold flex items-center justify-center space-x-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <FaSignOutAlt />
          <span>Выйти из приложения</span>
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;