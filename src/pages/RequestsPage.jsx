// src/pages/RequestsPage.jsx
import React from 'react';
import RequestCard from '../components/RequestCard';

// Sample Data (replace with actual data fetching)
const sampleRequestsData = [
  {
    id: 1,
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg', // Example image
    service: 'Сантехник',
    requestId: '№341234',
    rating: 4.5,
    reviews: 23,
    masterName: 'Турсуналиев Алишер',
    distance: 6.0,
  },
  {
    id: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
    service: 'Сантехник',
    requestId: '№341235',
    rating: 3.8,
    reviews: 15,
    masterName: 'Иванов Петр',
    distance: 8.2,
  },
   {
    id: 3,
    imageUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
    service: 'Электрик',
    requestId: '№E45123',
    rating: 4.9,
    reviews: 45,
    masterName: 'Сидорова Елена',
    distance: 2.5,
  },
  // Add more request objects
];


function RequestsPage() {
  // TODO: Replace sampleRequestsData with actual data fetching (e.g., useEffect, useState)
  const requests = sampleRequestsData;
  const totalFound = 46; // Example total count
  const queryType = "сантехник"; // Example query type

  return (
    <div className="px-4 space-y-4"> {/* Use px-4 to align with header padding */}
      {/* Subtitle/Filter Info */}
      <p className="text-sm text-gray-600">
        Найдено по запросу: {totalFound} {queryType}
      </p>

      {/* List of Request Cards */}
      {requests.length > 0 ? (
        requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-8">Нет активных запросов.</p>
      )}
    </div>
  );
}

export default RequestsPage;