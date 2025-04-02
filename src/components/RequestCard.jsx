// src/components/RequestCard.jsx
import React from 'react';
import { FaUser, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import StarRating from './StarRating'; // Import the star component

function RequestCard({ request }) {
  // Destructure data from the request prop
  const {
    imageUrl,
    service,
    requestId,
    rating,
    reviews,
    masterName,
    distance,
  } = request;

  const handleAccept = () => {
    console.log('Accepted request:', requestId);
    // Add logic to handle acceptance
  };

  const handleDecline = () => {
    console.log('Declined request:', requestId);
    // Add logic to handle decline
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-3">
      {/* Top Section: Image, Title, Rating */}
      <div className="flex items-start space-x-3">
        <img
          src={imageUrl || 'https://via.placeholder.com/50'} // Placeholder image
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
      <div className="space-y-1 pl-15"> {/* Indent info to align below text */}
         <div className="flex items-center text-sm text-gray-600">
           <FaUser className="mr-2 text-gray-400" size={14}/>
           Мастер: {masterName}
         </div>
         <div className="flex items-center text-sm text-gray-600">
           <FaMapMarkerAlt className="mr-2 text-gray-400" size={14}/>
           в {distance.toFixed(1)} км от вас
         </div>
      </div>


      {/* Button Section */}
      <div className="flex space-x-3 pt-2">
        <button
          onClick={handleAccept}
          className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-800"
        >
          <FaCheck size={14}/>
          <span>Принять</span>
        </button>
        <button
          onClick={handleDecline}
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