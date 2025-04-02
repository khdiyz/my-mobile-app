import React from 'react';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

function HelpItem({ text }) {
  return (
    <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50">
      <div className="flex items-center">
        <FaQuestionCircle className="text-blue-500 mr-3" size={20} />
        <span className="text-sm text-gray-700">{text}</span>
      </div>
      <FaChevronDown className="text-gray-400" />
    </div>
  );
}

export default HelpItem;