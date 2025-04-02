// src/pages/ChatPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPaperclip, FaRegSmile, FaPaperPlane } from 'react-icons/fa'; // Or use FaMicrophone, etc.
import MessageBubble from '../components/MessageBubble';

// Assume sampleMastersData is accessible (imported or defined)
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

// Sample Chat Messages (replace with actual data fetching/state)
const sampleMessages = {
  'master123': [
    { id: 1, text: 'Вас приветствует служба поддержки Usta365. Чем мы вам можем помочь?', senderId: 'master123', timestamp: '10:01 AM' },
    { id: 2, text: 'Как вы там бро, что нового?', senderId: 'user', timestamp: '10:02 AM' }, // Assuming 'user' is the current user
    { id: 3, text: 'Спасибо что спросили, всё отлично! Чем я могу вам помочь?', senderId: 'master123', timestamp: '10:03 AM' },
    { id: 4, text: 'Здесь короче такое дело что у меня дома кран поломался.', senderId: 'user', timestamp: '10:04 AM' },
  ],
  'master456': [
      {id: 5, text: 'Здравствуйте! Готов обсудить ваш заказ.', senderId: 'master456'}
  ]
  // Add more chat histories
};


function ChatPage() {
  const { masterId } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null); // Ref to scroll to bottom

  // --- State ---
  const [messageInput, setMessageInput] = useState('');
  // TODO: Replace sampleMessages with state for dynamic messages & fetching
  const [messages, setMessages] = useState(sampleMessages[masterId] || []);
  const master = sampleMastersData[masterId]; // Get master info
  // --- End State ---

  const goBack = () => {
    navigate(-1);
  };

  // --- Effects ---
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  // --- End Effects ---


  // --- Handlers ---
  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return; // Don't send empty messages

    const newMessage = {
      id: Date.now(), // Simple unique ID for demo
      text: messageInput.trim(),
      senderId: 'user', // Assume current user is sender
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // TODO: Replace this with actual message sending logic (API call, state update)
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput(''); // Clear input field
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent newline on Enter
        handleSendMessage();
    }
  };
  // --- End Handlers ---


  // Handle master not found
  if (!master) {
     return ( 
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">Master Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">We're sorry, but the master you're looking for does not exist.</p>
            <a href="/" className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Go back to Home
            </a>
        </div> 
    );
  }

  return (
    <div className="max-w-sm mx-auto h-screen bg-white flex flex-col"> {/* Use h-screen for full height */}
      {/* Chat Header */}
      <header className="bg-white p-3 flex items-center shadow-sm sticky top-0 z-10 border-b border-gray-200">
        <button onClick={goBack} className="mr-3 p-1 text-gray-600 hover:text-gray-800">
          <FaArrowLeft size={18} />
        </button>
        <img
            src={master.imageUrl || 'https://via.placeholder.com/40'}
            alt={master.name}
            className="w-8 h-8 rounded-full mr-3"
         />
        <div className="flex-1">
             <h1 className="text-base font-semibold text-gray-800 leading-tight">{master.name}</h1>
             {/* Optional: Display ID or status */}
             {/* <p className="text-xs text-gray-500 leading-tight">Nº1321312321</p> */}
        </div>
        {/* Optional: Add call/video icons */}
      </header>

      {/* Message List Area */}
      <main className="flex-grow overflow-y-auto p-3 bg-slate-50"> {/* Scrollable area */}
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            text={msg.text}
            // Determine if the sender is the current user
            isSender={msg.senderId === 'user'}
            timestamp={msg.timestamp}
          />
        ))}
        {/* Empty div to scroll to */}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Footer Area */}
      <footer className="bg-white p-2 border-t border-gray-200 flex items-center space-x-2 sticky bottom-0">
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <FaPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Пишите сюда!"
          value={messageInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="flex-grow p-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {/* Send button or other action (e.g., Emoji) */}
        <button
            onClick={handleSendMessage}
            className="p-2 text-blue-600 hover:text-blue-800 disabled:opacity-50"
            disabled={messageInput.trim() === ''}
        >
          <FaPaperPlane size={20} />
        </button>
        {/* OR <button className="p-2 text-gray-500 hover:text-gray-700"><FaRegSmile size={20} /></button> */}

      </footer>
    </div>
  );
}

export default ChatPage;