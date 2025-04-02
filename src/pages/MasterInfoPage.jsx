// src/pages/MasterInfoPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaBriefcase, FaInfoCircle, FaPaperPlane, FaPhone } from 'react-icons/fa';

// Import or define sampleMastersData here
// For now, assuming it's defined in this file or imported
const sampleMastersData = {
  'master123': { id: 'master123', name: 'Турсуналиев Алишер', imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 4.5, experienceYears: 36, about: 'Диагностика и устранение засоров: Очищение труб от засоров и мусора, восстановление нормальной работы канализационных и водопроводных систем.', portfolioImages: [
    'https://stroyvitrina.uz/storage/publications/April2021/.%D0%BE%D0%B1%D0%BB.png', 
    'https://megaprom.uz/wp-content/uploads/classified-listing/2024/11/11.jpg', 
    'https://static.zarnews.uz/crop/f/6/720__80_f6b039364a17f9dcd8fb7f378aa08dfd.jpg?img=self&v=1707734792', 
    'https://frankfurt.apollo.olxcdn.com/v1/files/ktulq99924xq2-UZ/image', 
    'https://www.undp.org/sites/g/files/zskgke326/files/styles/image_carousel_mobile/public/2024-11/img_7478.jpg?itok=6T9tnAPn',
    'https://euro-rabota.com/userContent/user_5ba30fb807a2e04bc4ac7d0f02a353fd/photos/d722afaaf47d1c2a5221fe009ad995ff.jpg',
], reviews: 23 },
  'master456': { id: 'master456', name: 'Иванов Петр', imageUrl: 'https://randomuser.me/api/portraits/men/33.jpg', rating: 3.8, experienceYears: 10, about: 'Специалист по электромонтажным работам...', portfolioImages: ['https://via.placeholder.com/150/7ee', 'https://via.placeholder.com/150/8ff'], reviews: 15 },
  'master789': { id: 'master789', name: 'Сидорова Елена', imageUrl: 'https://randomuser.me/api/portraits/women/34.jpg', rating: 4.9, experienceYears: 15, about: 'Профессиональный монтаж и ремонт электрики...', portfolioImages: ['https://via.placeholder.com/150/9aa', 'https://via.placeholder.com/150/abb', 'https://via.placeholder.com/150/bcc'], reviews: 45 },
};

function MasterInfoPage() {
  const { masterId } = useParams(); // Get masterId from URL
  const navigate = useNavigate();

  // --- Data Fetching Simulation ---
  // TODO: Replace this with actual data fetching based on masterId
  const master = sampleMastersData[masterId];
  // --- End Data Fetching Simulation ---

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // --- Navigation Handler for Chat Button ---
  const handleNavigateToChat = () => {
    if (masterId) {
      navigate(`/chat/${masterId}`); // Navigate to the chat page with masterId
    } else {
      console.error("Cannot navigate to chat: masterId is missing.");
      // Optionally show an error message to the user
    }
  };
  // --- End Navigation Handler ---

  // Handle loading/not found state
  if (!master) {
    return (
      <div className="max-w-sm mx-auto min-h-screen bg-slate-50 flex flex-col items-center justify-center">
         <header className="w-full bg-white p-4 flex items-center shadow-sm absolute top-0 left-0 right-0 max-w-sm mx-auto">
            <button onClick={goBack} className="mr-4 p-1 text-gray-600 hover:text-gray-800"><FaArrowLeft size={18} /></button>
            <h1 className="text-lg font-semibold text-gray-800">Информация</h1>
         </header>
        <p className="text-gray-600">Мастер не найден.</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-slate-50 flex flex-col">
      {/* Custom Header */}
      <header className="bg-white p-4 flex items-center shadow-sm sticky top-0 z-20">
        <button onClick={goBack} className="mr-4 p-1 text-gray-600 hover:text-gray-800">
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Информация</h1>
      </header>

      {/* Profile Section */}
      <section className="flex flex-col items-center pt-14 pb-4 bg-white -mt-1 z-10"> {/* Overlap slightly */}
         <img
            src={master.imageUrl || 'https://via.placeholder.com/100'}
            alt={master.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md -mt-12" // Adjust overlap
         />
         <h2 className="text-xl font-semibold mt-3">{master.name}</h2>
         <div className="flex items-center text-sm text-gray-600 mt-1">
            Рейтинг
            <FaStar className="text-yellow-400 mx-1" size={16}/>
            <span className="font-medium">{master.rating.toFixed(1)}</span>
         </div>
      </section>

      {/* Details Section */}
      <section className="p-4 space-y-4 flex-grow">
         {/* Experience */}
         <div className="flex items-center text-sm text-gray-700">
             <FaBriefcase className="mr-2 text-gray-400" size={16} />
             Стаж работы: <span className="font-medium ml-1">{master.experienceYears} лет</span>
         </div>

         {/* About */}
         <div className="text-sm text-gray-700">
             <div className="flex items-center mb-1 font-medium">
                <FaInfoCircle className="mr-2 text-gray-400" size={16} />
                О специалисте:
             </div>
             <p className="text-gray-600 leading-relaxed pl-6"> {/* Indent paragraph */}
                 {master.about}
             </p>
         </div>

         {/* Action Buttons */}
         <div className="flex space-x-3 pt-2">
             {/* Updated Chat Button with onClick */}
             <button
                onClick={handleNavigateToChat} // <-- Add onClick handler
                className="flex-1 bg-gray-800 text-white py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-1.5 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-800"
             >
                <FaPaperPlane size={14}/>
                <span>Написать в чат</span>
             </button>
             {/* <a href={`tel:${master.phone}`} target='_blank'  className="p-3 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400">
                 <FaPhone size={16}/>
             </a> */}
             <a href='tel:+998943244090' target='_blank'  className="p-3 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400">
                 <FaPhone size={16}/>
             </a>
         </div>

         {/* Portfolio Section */}
         <div className="pt-4">
             <h3 className="text-base font-semibold mb-3 text-gray-800">
                Фото сделанных работ
             </h3>
             <div className="grid grid-cols-3 gap-2">
                 {master.portfolioImages && master.portfolioImages.map((imgUrl, index) => (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`Работа ${index + 1}`}
                        className="w-full h-24 object-cover rounded-md shadow-sm bg-gray-200" // Added bg-gray-200 for loading
                    />
                 ))}
             </div>
         </div>
      </section>

    </div>
  );
}

export default MasterInfoPage;