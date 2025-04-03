// src/components/MessageBubble.jsx
import React from 'react';

function MessageBubble({ text, isSender, timestamp }) {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`py-2 px-3 rounded-lg max-w-[80%] ${ // Limit width
          isSender
            ? 'bg-[#E5F0FF] text-gray-800' // Sender styles
            : 'bg-[#FFF9E5] text-gray-800' // Receiver styles
        }`}
      >
        <p className="text-sm">{text}</p>
        {/* Optional: Display timestamp */}
        {/* {timestamp && <span className="text-xs text-right block mt-1 opacity-75">{timestamp}</span>} */}
      </div>
    </div>
  );
}

export default MessageBubble;