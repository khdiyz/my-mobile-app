// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  // Check for JWT token in localStorage (or your preferred storage)
  const token = localStorage.getItem('jwtToken');

  // Basic check: Does the token exist?
  // TODO: Add token validation logic here (check expiry, signature - ideally on backend)
  const isAuthenticated = !!token; // Simple existence check

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    console.log("ProtectedRoute: No token found, redirecting to /login");
    return <Navigate to="/login" replace />; // replace: true prevents going back
  }

  // If authenticated, render the child routes/component
  return <Outlet />; // Renders nested routes defined within this route
}

export default ProtectedRoute;