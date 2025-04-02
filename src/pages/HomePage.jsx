import React from 'react';
import ServiceCard from '../components/ServiceCard';
import HelpItem from '../components/HelpItem';
import { FaWrench, FaBolt, FaVideo } from 'react-icons/fa';

function HomePage() {
  return (
    // Main content area for the home page
    <div className="p-4 space-y-6">
      {/* Placeholder Box & Button */}
      <div className="bg-white rounded-lg h-32 flex items-center justify-center shadow-sm">
        {/* Content for the box if needed */}
      </div>
      <button className="w-full text-blue-600 text-sm font-medium py-2">
        Подать заявку
      </button>

      {/* Popular Services Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3 text-gray-800">
          Популярные услуги
        </h2>
        <div className="flex justify-between space-x-2">
          <ServiceCard icon={<FaWrench size={24} className="text-blue-500" />} label="Сантехника" />
          <ServiceCard icon={<FaBolt size={24} className="text-yellow-500" />} label="Электрик" />
          <ServiceCard icon={<FaVideo size={24} className="text-green-500" />} label="Камера домофания" />
        </div>
      </section>

      {/* Help Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3 text-gray-800">
          Чем мы можем вам помочь?
        </h2>
        <div className="space-y-3">
          <HelpItem text="Как зарегестрироваться?" />
          <HelpItem text="Представляется логичным, что сегментация рынка развивает" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;