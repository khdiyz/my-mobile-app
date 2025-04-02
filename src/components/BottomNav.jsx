import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use navigate for routing
import { FaHome, FaFileAlt, FaListAlt, FaUser } from 'react-icons/fa';

// Map Tab names back to paths
const tabNameToPath = {
  'Главная': '/',
  'Каталог': '/catalog',
  'Запросы': '/requests',
  'Профиль': '/profile',
};

const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-1 flex-grow ${
      active ? 'text-blue-600' : 'text-gray-500'
    } hover:text-blue-500 transition-colors focus:outline-none`} // Added focus:outline-none
  >
    {React.cloneElement(icon, { size: 22 })}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

// Accept activeTabName prop from MainLayout
function BottomNav({ activeTabName }) {
  const navigate = useNavigate(); // Hook for navigation

  const tabs = [
    { label: 'Главная', icon: <FaHome /> },
    { label: 'Запросы', icon: <FaFileAlt /> },
    { label: 'Каталог', icon: <FaListAlt /> },
    { label: 'Профиль', icon: <FaUser /> },
  ];

  const handleNavigate = (label) => {
    const path = tabNameToPath[label] || '/'; // Find the path for the label
    navigate(path); // Navigate to the path
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-up z-10"> {/* Added z-index */}
      {tabs.map((tab) => (
        <NavItem
          key={tab.label}
          icon={tab.icon}
          label={tab.label}
          // Determine active state based on the prop passed from MainLayout
          active={activeTabName === tab.label}
          onClick={() => handleNavigate(tab.label)} // Use navigate on click
        />
      ))}
    </nav>
  );
}

export default BottomNav;