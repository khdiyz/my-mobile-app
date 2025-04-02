import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import RequestsPage from './pages/RequestsPage';
import ProfilePage from './pages/ProfilePage';
import CreateRequestPage from './pages/CreateRequestPage'; // <-- Import the new page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes using the Main Layout (Header + BottomNav) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* Note: SubCategory detail routes could also go here if they use MainLayout */}
        </Route>

        {/* Route for Create Request Page (uses its own layout/header) */}
        {/* Pass titles as params (URL encode them if they contain special chars) */}
        <Route
          path="/create-request/:mainCategoryTitle/:subCategoryTitle"
          element={<CreateRequestPage />}
        />

        {/* Other routes outside MainLayout if needed (e.g., Login) */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;