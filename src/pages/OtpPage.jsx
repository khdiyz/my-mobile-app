// src/pages/OtpPage.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OtpPage() {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Get phone number passed from LoginPage via route state
  const phoneNumber = location.state?.phone;

  // Redirect if phone number is missing (user accessed directly)
  if (!phoneNumber) {
     console.warn("OTP Page accessed without phone number state. Redirecting to login.");
     // Optionally navigate back or show an error
     // For now, just showing a message. In prod, redirect.
     // useEffect(() => { navigate('/login'); }, [navigate]); // Example redirect
     return <div className="p-4 text-red-500">Ошибка: Номер телефона не найден. Вернитесь на страницу входа.</div>;
  }


  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // --- TODO: API Call Implementation ---
    console.log('Verifying OTP:', otp, 'for phone:', phoneNumber);
    try {
        // Example: const response = await fetch('/api/auth/verify-otp', { method: 'POST', body: JSON.stringify({ phone: phoneNumber, otp }) });
        // if (!response.ok) throw new Error('Invalid OTP');
        // const data = await response.json(); // Expecting { token: '...' }

        // Simulate API call success
        await new Promise(resolve => setTimeout(resolve, 1000));
        const fakeToken = 'your_jwt_token_here'; // Replace with actual token from API

        // ** Store the token **
        localStorage.setItem('jwtToken', fakeToken);
        console.log('Token stored:', fakeToken);

        // Navigate to the main app (home page) after successful login
        navigate('/', { replace: true }); // replace: true prevents going back to OTP page

    } catch (err) {
        console.error("Error verifying OTP:", err);
        setError(err.message || 'Неверный код. Попробуйте еще раз.'); // Invalid code. Try again.
        setIsLoading(false);
    }
    // --- End API Call Implementation ---
  };


  return (
     <div className="max-w-sm mx-auto min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="w-full text-center mb-10">
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Подтверждение кода
        </h1>
        <p className="text-sm text-gray-500">
          Введите код, отправленный на номер {phoneNumber}
        </p>
      </div>

       <form className="w-full space-y-6" onSubmit={handleVerifyOtp}>
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
            Код подтверждения
          </label>
          <input
            type="text" // Can use type="number" but text is often better for OTPs
            inputMode="numeric" // Hint for mobile keyboards
            id="otp"
            name="otp"
            value={otp}
            onChange={handleOtpChange}
            maxLength="6" // Assuming 6-digit OTP
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base tracking-widest text-center" // Styling for OTP
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

         <button
          type="submit"
          disabled={isLoading || otp.length < 4} // Basic length check
          className={`w-full py-3 px-4 rounded-full text-base font-semibold transition-colors duration-200 ${
            (isLoading || otp.length < 4)
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' // Changed style for verify button
          }`}
        >
          {isLoading ? 'Проверка...' : 'Подтвердить'}
        </button>
         {/* Optional: Add Resend Code button */}
       </form>
     </div>
  );
}

export default OtpPage;