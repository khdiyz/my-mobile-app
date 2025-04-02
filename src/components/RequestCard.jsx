// src/components/RequestCard.jsx
import React from 'react';
import { FaUser, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import StarRating from './StarRating';
// Removed Link import, using useNavigate instead
import { useNavigate } from 'react-router-dom';

function RequestCard({ request }) {
  const {
    imageUrl, service, requestId, rating, reviews, masterName, distance, masterId
  } = request;
  const navigate = useNavigate(); // Hook for navigation

  const handleAccept = (e) => {
    e.stopPropagation(); // Prevent card navigation when clicking button
    console.log('Accepted request:', requestId);
    // Add logic to handle acceptance
  };

  const handleDecline = (e) => {
    e.stopPropagation(); // Prevent card navigation when clicking button
    console.log('Declined request:', requestId);
    // Add logic to handle decline
  };

  // Navigate to master page when the main card area is clicked
  const handleNavigateToMaster = () => {
    if (masterId) {
      navigate(`/master/${masterId}`);
    } else {
      console.error("Cannot navigate: masterId is missing from request:", request);
    }
  };

  if (!masterId) {
    console.error("RequestCard missing masterId:", request);
    // Optional: Render differently or return null if masterId is crucial
  }

  return (
    // Add onClick and cursor-pointer to the main div
    <div
      className="bg-white rounded-lg shadow p-4 space-y-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
      onClick={handleNavigateToMaster} // Navigate when card is clicked
    >
      {/* Top Section: Image, Title, Rating */}
      <div className="flex items-start space-x-3">
        <img
          src={imageUrl || 'https://via.placeholder.com/50'}
          alt={masterName}
          className="w-12 h-12 rounded-full object-cover border border-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-800">
            {service} ({requestId})
          </h3>
          <div className="flex items-center space-x-2 text-sm mt-1">
            <StarRating rating={rating} />
            <span className="text-gray-600">{rating.toFixed(1)}</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-500">{reviews} отзывов</span>
          </div>
        </div>
      </div>

      {/* Info Section: Name, Distance */}
      {/* Indentation fixed: pl-15 might be too much, maybe remove or adjust */}
      <div className="space-y-1 pl-0 md:pl-15"> {/* Adjusted padding */}
         {/* Removed Link wrapper from here */}
         <div className="flex items-center text-sm text-gray-600">
           <FaUser className="mr-2 text-gray-400" size={14}/>
           Мастер: <span className="font-medium ml-1">{masterName}</span>
         </div>
         <div className="flex items-center text-sm text-gray-600">
           <FaMapMarkerAlt className="mr-2 text-gray-400" size={14}/>
           в {distance.toFixed(1)} км от вас
         </div>
      </div>

      {/* Button Section */}
      {/* Add e.stopPropagation() to button onClick handlers */}
      <div className="flex space-x-3 pt-2">
        <button
          onClick={handleAccept} // Uses updated handler with stopPropagation
          className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-800"
        >
          <FaCheck size={14}/>
          <span>Принять</span>
        </button>
        <button
          onClick={handleDecline} // Uses updated handler with stopPropagation
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
        >
          <FaTimes size={14}/>
          <span>Отклонить</span>
        </button>
      </div>
    </div>
  );
}

export default RequestCard;