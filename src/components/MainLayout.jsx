// src/components/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import ProfileHeader from './ProfileHeader'; // Import ProfileHeader
import BottomNav from './BottomNav';

const pathToTabName = {
  '/': 'Главная',
  '/catalog': 'Каталог',
  '/requests': 'Запросы',
  '/profile': 'Профиль',
};

// Sample User Data (replace with actual data source/context)
const sampleUserData = {
  name: 'Пользователь',
  id: '4321412',
  avatarUrl: null // Or 'https://randomuser.me/api/portraits/lego/1.jpg'
};

function MainLayout() {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile'; // Check if it's the profile page

  let pageTitle = "Заказчик";
  let hideSearch = false;

  // Set standard header props if NOT on profile page
  if (!isProfilePage) {
    switch (location.pathname) {
      case '/requests':
        pageTitle = "Мои запросы";
        hideSearch = true;
        break;
      case '/catalog':
        pageTitle = "Каталог Услуг";
        // hideSearch = false; // Example
        break;
      // ... other cases ...
      case '/': // Home page
      default:
        pageTitle = "Заказчик";
        hideSearch = false;
        break;
    }
  }

  const currentTab = pathToTabName[location.pathname] || 'Главная';

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-slate-50 flex flex-col shadow-lg relative">
      {/* --- Conditionally Render Header --- */}
      {isProfilePage ? (
        <ProfileHeader userData={sampleUserData} />
      ) : (
        <Header title={pageTitle} hideSearch={hideSearch} />
      )}
      {/* --- End Conditional Header --- */}


      <main className="flex-grow pb-16 pt-4">
        <Outlet />
      </main>

      <BottomNav activeTabName={currentTab} />
    </div>
  );
}

export default MainLayout;