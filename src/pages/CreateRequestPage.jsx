// src/pages/CreateRequestPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCamera, FaMapMarkerAlt } from 'react-icons/fa'; // Example icons

function CreateRequestPage() {
  const { mainCategoryTitle, subCategoryTitle } = useParams(); // Get params from URL
  const navigate = useNavigate();

  // Decode the titles obtained from URL params
  const serviceTitle = `${decodeURIComponent(mainCategoryTitle || '')} / ${decodeURIComponent(subCategoryTitle || '')}`;

  const goBack = () => {
    navigate(-1); // Go back to the previous page (Catalog)
  };

  const handleSubmit = (event) => {
     event.preventDefault();
     // Handle form submission logic here
     console.log("Submitting request...");
     // Collect data from form fields (need state management for this)
     // e.g., navigate('/request-submitted');
  }

  // TODO: Add state management for form fields (description, address, amount)

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-slate-50 flex flex-col">
      {/* Custom Header */}
      <header className="bg-white p-4 flex items-center shadow-sm">
        <button onClick={goBack} className="mr-4 p-1 text-gray-600 hover:text-gray-800">
          <FaArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Подать заявку</h1>
      </header>

      {/* Form Content */}
      <main className="flex-grow p-4 space-y-5">
        {/* Add Photo Button */}
        <button className="w-full border border-dashed border-gray-300 rounded-lg py-6 flex flex-col items-center justify-center text-sm text-blue-600 hover:bg-blue-50">
          <FaCamera size={24} className="mb-2 text-gray-400" />
          Добавить фото
        </button>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Field (Pre-filled) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Услуга
            </label>
            <div className="bg-white rounded-lg p-3 shadow-sm text-sm text-gray-800 border border-gray-200">
              {serviceTitle}
            </div>
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Описание заказа
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="Пожалуйста опишите свою заявку в чем пробл в вашем доме"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              // value={description} onChange={(e) => setDescription(e.target.value)} // Add state
            ></textarea>
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Укажите адрес
            </label>
            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Выберите на карете или в списке"
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                // value={address} onChange={(e) => setAddress(e.target.value)} // Add state
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                 {/* Using MapMarkerAlt as placeholder for the icon */}
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Amount Field */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Предлагаемая сумма
            </label>
            <input
              type="text" // Use 'number' or 'text' with pattern for better validation
              id="amount"
              name="amount"
              placeholder="от 100 000 сум"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              // value={amount} onChange={(e) => setAmount(e.target.value)} // Add state
            />
          </div>

           {/* Submit Button fixed at bottom */}
           {/* Requires parent div to be flex-col and main to be flex-grow */}
           {/* Add a spacer div if needed, or place button outside main */}

        </form>
      </main>
        {/* Footer Button Area */}
        <footer className="p-4 bg-slate-50">
           <button
              type="submit" // Link this to the form ID if outside the <form> tag
              form="requestForm" // Add id="requestForm" to the <form> tag if button is outside
              className="w-full bg-gray-800 text-white py-3 rounded-full text-base font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              // onClick={handleSubmit} // Or handle submit via form's onSubmit
            >
              Далее
            </button>
        </footer>
    </div>
  );
}

export default CreateRequestPage;