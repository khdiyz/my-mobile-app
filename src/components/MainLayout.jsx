import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Import Outlet and useLocation
import Header from './Header';
import BottomNav from './BottomNav';

// Map paths to Tab names for BottomNav highlighting
const pathToTabName = {
  '/': 'Главная',
  '/catalog': 'Каталог',
  '/requests': 'Запросы',
  '/profile': 'Профиль',
};

function MainLayout() {
  const location = useLocation(); // Get current location
  const currentTab = pathToTabName[location.pathname] || 'Главная'; // Determine active tab

  return (
    // Simulate mobile view container
    <div className="max-w-sm mx-auto min-h-screen bg-slate-50 flex flex-col shadow-lg relative">
      <Header />

      {/* Main content area where routed pages will be rendered */}
      <main className="flex-grow pb-16"> {/* Add padding-bottom to prevent overlap with fixed nav */}
        <Outlet /> {/* Renders the matched child route component */}
      </main>

      {/* Pass the determined active tab to BottomNav */}
      <BottomNav activeTabName={currentTab} />
    </div>
  );
}

export default MainLayout;