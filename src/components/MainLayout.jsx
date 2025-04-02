// src/components/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

const pathToTabName = {
  '/': 'Главная',
  '/catalog': 'Каталог',
  '/requests': 'Запросы',
  '/profile': 'Профиль',
};

function MainLayout() {
  const location = useLocation();
  let pageTitle = "Заказчик"; // Default title
  let hideSearch = false; // Default search visibility

  // --- Set Header props based on current route ---
  switch (location.pathname) {
    case '/requests':
      pageTitle = "Мои запросы";
      hideSearch = true;
      break;
    case '/catalog':
      pageTitle = "Каталог Услуг"; // Example: Different title for catalog
      // hideSearch = false; // Keep search for catalog? Or hide?
      break;
    // Add cases for other pages if needed
    case '/': // Home page
    default:
       pageTitle = "Заказчик";
       hideSearch = false;
       break;

  }
  // --- End Header props logic ---

  const currentTab = pathToTabName[location.pathname] || 'Главная';

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-slate-50 flex flex-col shadow-lg relative">
      {/* Pass dynamic props to Header */}
      <Header title={pageTitle} hideSearch={hideSearch} />

      {/* Added pt-4 to main content for spacing below sticky header if needed */}
      <main className="flex-grow pb-16 pt-4">
        <Outlet />
      </main>

      <BottomNav activeTabName={currentTab} />
    </div>
  );
}

export default MainLayout;