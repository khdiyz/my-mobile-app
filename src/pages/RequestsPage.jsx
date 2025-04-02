// src/pages/RequestsPage.jsx
import React from 'react';
import RequestCard from '../components/RequestCard';

// NEW: Sample Master Data (keyed by masterId)
const sampleMastersData = {
  'master123': {
    id: 'master123',
    name: 'Турсуналиев Алишер',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg', // Same image as request for consistency
    rating: 4.5,
    experienceYears: 36,
    about: 'Диагностика и устранение засоров: Очищение труб от засоров и мусора, восстановление нормальной работы канализационных и водопроводных систем.',
    portfolioImages: [
      'https://via.placeholder.com/150/1ee', 'https://via.placeholder.com/150/2ff', 'https://via.placeholder.com/150/3aa',
      'https://via.placeholder.com/150/4bb', 'https://via.placeholder.com/150/5cc', 'https://via.placeholder.com/150/6dd'
    ],
    reviews: 23 // Can be stored here or derived
  },
  'master456': {
    id: 'master456',
    name: 'Иванов Петр',
    imageUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
    rating: 3.8,
    experienceYears: 10,
    about: 'Специалист по электромонтажным работам любой сложности.',
    portfolioImages: ['https://via.placeholder.com/150/7ee', 'https://via.placeholder.com/150/8ff'],
    reviews: 15
  },
   'master789': {
    id: 'master789',
    name: 'Сидорова Елена',
    imageUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
    rating: 4.9,
    experienceYears: 15,
    about: 'Профессиональный монтаж и ремонт электрики, слаботочные системы.',
    portfolioImages: ['https://via.placeholder.com/150/9aa', 'https://via.placeholder.com/150/abb', 'https://via.placeholder.com/150/bcc'],
    reviews: 45
  },
};

// UPDATED: Sample Request Data with masterId
const sampleRequestsData = [
  {
    id: 1,
    masterId: 'master123', // Added masterId
    imageUrl: sampleMastersData['master123'].imageUrl, // Use master image
    service: 'Сантехник',
    requestId: '№341234',
    rating: sampleMastersData['master123'].rating, // Use master rating
    reviews: sampleMastersData['master123'].reviews,
    masterName: sampleMastersData['master123'].name,
    distance: 6.0,
  },
  {
    id: 2,
    masterId: 'master456', // Added masterId
    imageUrl: sampleMastersData['master456'].imageUrl,
    service: 'Сантехник',
    requestId: '№341235',
    rating: sampleMastersData['master456'].rating,
    reviews: sampleMastersData['master456'].reviews,
    masterName: sampleMastersData['master456'].name,
    distance: 8.2,
  },
   {
    id: 3,
    masterId: 'master789', // Added masterId
    imageUrl: sampleMastersData['master789'].imageUrl,
    service: 'Электрик',
    requestId: '№E45123',
    rating: sampleMastersData['master789'].rating,
    reviews: sampleMastersData['master789'].reviews,
    masterName: sampleMastersData['master789'].name,
    distance: 2.5,
  },
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