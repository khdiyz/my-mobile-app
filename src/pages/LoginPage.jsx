import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('+998'); 
  const [formattedPhone, setFormattedPhone] = useState('+998 ');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Format phone number as +998 XX XXX XX XX
  const formatUzbekPhone = (input) => {
    // Strip all non-digit characters except the leading +
    let digits = input.replace(/(?!^\+)\D/g, '');
    
    // Ensure it starts with +998
    if (!digits.startsWith('+998')) {
      digits = '+998' + digits.replace(/^\+|^998/, '');
    }
    
    // Limit to correct length (13 characters including +)
    digits = digits.slice(0, 13);
    
    // Format the number
    if (digits.length > 4) {
      let formatted = `+998 ${digits.slice(4, 6)}`;
      if (digits.length > 6) {
        formatted += ` ${digits.slice(6, 9)}`;
        if (digits.length > 9) {
          formatted += ` ${digits.slice(9, 11)}`;
          if (digits.length > 11) {
            formatted += ` ${digits.slice(11, 13)}`;
          }
        }
      }
      return formatted;
    }
    
    return digits;
  };

  // Validate the phone number is a complete Uzbekistan number
  const validateUzbekPhone = (phone) => {
    // Should be +998 followed by 9 more digits
    const uzPhoneRegex = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
    return uzPhoneRegex.test(phone);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const formatted = formatUzbekPhone(input);
    setFormattedPhone(formatted);
    
    // Store raw value for API submission (no spaces)
    setPhoneNumber(formatted.replace(/\s/g, ''));
  };

  // Validate phone whenever it changes
  useEffect(() => {
    setIsValid(validateUzbekPhone(formattedPhone));
  }, [formattedPhone]);

  const handleGetCode = async (e) => {
    e.preventDefault();
    
    if (!isValid) {
      setError('Пожалуйста, введите правильный номер телефона Узбекистана'); // Please enter a valid Uzbekistan phone number
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      // API call implementation
      console.log('Requesting OTP for:', phoneNumber);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to OTP verification page
      navigate('/verify-otp', { state: { phone: phoneNumber } });
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError(err.message || 'Не удалось отправить код. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="w-full text-center mb-10">
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Войти в приложение
        </h1>
        <p className="text-sm text-gray-500">
          Введите номер телефона для авторизации
        </p>
      </div>

      <form className="w-full space-y-6" onSubmit={handleGetCode}>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Номер телефона
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formattedPhone}
            onChange={handlePhoneNumberChange}
            placeholder="+998 XX XXX XX XX"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
          />
          {formattedPhone && !isValid && (
            <p className="mt-1 text-xs text-amber-600">
              Номер должен быть в формате: +998 XX XXX XX XX
            </p>
          )}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={isLoading || !isValid}
          className={`w-full py-3 px-4 rounded-full text-base font-semibold transition-colors duration-200 ${
            isLoading || !isValid
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {isLoading ? 'Загрузка...' : 'Получить код'}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;