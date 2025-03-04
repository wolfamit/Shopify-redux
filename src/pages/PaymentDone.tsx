import { useEffect, useState } from "react";
import { FaThumbsUp, FaWhatsapp, FaSms } from "react-icons/fa";

const PaymentDone = () => {
  const [userCell, setUserCell] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the user's cell number from localStorage
    const storedUser = localStorage.getItem("User");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserCell(userData.cell);
    }
  }, []);

  return (
    <div className="flex pt-[170px] flex-col items-center justify-center min-h-screen bg-green-100 p-6">
      {/* Thumbs Up Icon */}
      <FaThumbsUp className="text-green-500 text-6xl mb-4 animate-bounce" />

      {/* Success Message */}
      <h2 className="text-2xl font-bold text-gray-800">Payment Received! ✅</h2>
      <p className="text-gray-600 text-lg text-center mt-2">
        Thank you for shopping with us! Your E-Bill has been sent to your registered number.
      </p>

      {/* Display User Cell Number */}
      {userCell ? (
        <p className="text-blue-600 font-semibold mt-3">📱 {userCell}</p>
      ) : (
        <p className="text-gray-500 mt-3">Fetching your registered number...</p>
      )}

      {/* Confirmation Messages */}
      <div className="mt-6 flex flex-col items-center space-y-3">
        <div className="flex items-center gap-3 text-gray-700 text-lg">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <span>E-Bill sent via WhatsApp</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700 text-lg">
          <FaSms className="text-blue-500 text-2xl" />
          <span>E-Bill sent via SMS</span>
        </div>
      </div>

      {/* Thank You Message */}
      <p className="mt-6 text-gray-600 text-center text-lg">
        🎉 We hope to see you again soon! Happy Shopping! 🛍️
      </p>
    </div>
  );
};

export default PaymentDone;
