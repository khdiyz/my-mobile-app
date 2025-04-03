// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts and Pages
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import RequestsPage from './pages/RequestsPage';
import ProfilePage from './pages/ProfilePage';
import CreateRequestPage from './pages/CreateRequestPage';
import MasterInfoPage from './pages/MasterInfoPage';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';       // Import LoginPage
import OtpPage from './pages/OtpPage';         // Import OtpPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<OtpPage />} />

        {/* Routes requiring authentication */}
        <Route element={<ProtectedRoute />}> {/* Wrap protected routes */}
            {/* Routes using the Main Layout */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="requests" element={<RequestsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>

            {/* Other protected routes outside Main Layout */}
            <Route
              path="/create-request/:mainCategoryTitle/:subCategoryTitle"
              element={<CreateRequestPage />}
            />
            <Route path="/master/:masterId" element={<MasterInfoPage />} />
            <Route path="/chat/:masterId" element={<ChatPage />} />
        </Route>

        {/* Optional: Add a 404 Not Found Route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;