import React from 'react';

// Accept icon and label as props
function ServiceCard({ icon, label }) {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-sm h-24 hover:shadow-md transition-shadow cursor-pointer">
      <div className="mb-2">
        {icon} {/* Render the passed icon component */}
      </div>
      <span className="text-xs text-center text-gray-700">{label}</span>
    </div>
  );
}

export default ServiceCard;