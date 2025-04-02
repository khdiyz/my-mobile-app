// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import RequestsPage from './pages/RequestsPage';
import ProfilePage from './pages/ProfilePage';
import CreateRequestPage from './pages/CreateRequestPage';
import MasterInfoPage from './pages/MasterInfoPage'; // <-- Import the new page
import ChatPage from './pages/ChatPage'; // <-- Import the new Chat page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes using the Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Routes outside Main Layout */}
        <Route
          path="/create-request/:mainCategoryTitle/:subCategoryTitle"
          element={<CreateRequestPage />}
        />
        {/* NEW: Route for Master Info Page */}
        <Route path="/master/:masterId" element={<MasterInfoPage />} />

        {/* NEW: Route for Chat Page */}
        <Route path="/chat/:masterId" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;