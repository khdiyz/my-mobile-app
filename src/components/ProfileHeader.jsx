// src/components/ProfileHeader.jsx
import React from 'react';
import { FaPencilAlt } from 'react-icons/fa'; // Edit icon

// Assume userData is passed as a prop
function ProfileHeader({ userData }) {
  const { name, id, avatarUrl } = userData || {}; // Default to empty object if no data

  return (
    <header className="bg-white p-4 shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Left side: Avatar, Name, ID */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              // Placeholder Icon or Initials
              <span className="text-xl text-gray-400">?</span>
            )}
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800 leading-tight">
              {name || 'Пользователь'}
            </h1>
            <p className="text-sm text-gray-500 leading-tight">
              ID: {id || 'N/A'}
            </p>
          </div>
        </div>

        {/* Right side: Edit Button */}
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <FaPencilAlt size={18} />
        </button>
      </div>
    </header>
  );
}

export default ProfileHeader;