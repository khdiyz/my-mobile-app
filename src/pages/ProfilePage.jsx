// src/pages/ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import CategoryItem from '../components/CategoryItem';
import { FaUserCog, FaSignOutAlt } from 'react-icons/fa';

// Data for the list items (assuming it's defined or imported)
const profileItemsData = [
  { id: 'my-requests', title: 'Мои заявки', subtitle: 'Подзаголовок для текста и тд', path: '/requests' },
  { id: 'security', title: 'Безопасность', subtitle: 'Подзаголовок для текста и тд', path: '/settings/security' },
  { id: 'help', title: 'Помощь и поддержка', subtitle: 'Подзаголовок для текста и тд', path: '/help' },
  { id: 'language', title: 'Язык приложения', subtitle: 'Подзаголовок для текста и тд', path: '/settings/language' },
  { id: 'privacy', title: 'Политика конфиденциальности', subtitle: 'Подзаголовок для текста и тд', path: '/privacy-policy' },
];

function ProfilePage() {
  const navigate = useNavigate(); // <-- Initialize useNavigate

  const handleSpecialistMode = () => {
    console.log("Switching to Specialist Mode...");
    // Add logic for switching mode
  };

  // --- Implement Logout Logic ---
  const handleLogout = () => {
    console.log("Logging out...");

    // 1. Clear the stored JWT token
    localStorage.removeItem('jwtToken');
    console.log("JWT Token removed from localStorage.");

    // TODO: Add any other cleanup if needed (e.g., clear user state in Context)

    // 2. Redirect user to the login page
    // replace: true prevents the user from navigating back to the profile page
    navigate('/login', { replace: true });
  };
  // --- End Logout Logic ---

  const handleItemClick = (path) => { /* ... */ };

  return (
    <div className="px-4 space-y-3 pb-6"> {/* Added pb-6 for spacing */}
      {/* List of Profile Items */}
      <div className="space-y-3">
        {profileItemsData.map((item) => (
           <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
             <CategoryItem
               title={item.title}
               subtitle={item.subtitle}
               showChevron={true}
               // onClick={() => handleItemClick(item.path)}
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
        {/* Logout Button triggers handleLogout */}
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