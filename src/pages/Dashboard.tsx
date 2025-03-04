import { useNavigate, useParams } from "react-router-dom";
import {
  FaCamera,
  FaCreditCard,
  FaGooglePay,
  FaCcVisa,
  FaSpinner,
} from "react-icons/fa"; // Payment Icons
import Header from "../components/Header";
import VirtualCart from "./VirtualCart";


const Dashboard = () => {
  // Extract cart ID from URL params
  const { id } = useParams<{ id?: string }>();
  const isScanning = true
  const navigate = useNavigate();
  console.log("Cart ID:", id);

  
  return (
    <>
      <Header />

      {/* Main Container */}
      <div className="flex flex-col pt-[140px] items-center justify-center min-h-screen bg-gradient-to-r from-white to-blue-100 p-6">
        {/* Camera Button Section */}
        <div className="w-full max-w-md flex flex-col items-center justify-center bg-white p-6 shadow-lg rounded-lg border border-dashed border-gray-400">
          <button className="flex items-center gap-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            <FaCamera className="text-xl" />
            <span className="text-lg font-semibold">Capture Item</span>
          </button>
          <p className="text-gray-500 text-sm mt-3 text-center">
            Tap on the camera button to take a photo of the item and add it to
            your cart.
          </p>
        </div>

        {/* Divider */}
        <div className="py-6 text-gray-500 font-semibold">— OR —</div>

        {/* Virtual Cart Section */}
        <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-3">
            🛒 Virtual Cart
          </h2>
          <p className="text-gray-500 text-center mb-4">
            Scan the RFID tags on items to add them to your shopping cart.
          </p>

          {/* Bullet Points for Instructions */}
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ensure your cart is linked with your account.</li>
            <li>Scan the RFID tags on the items.</li>
            <li>View added items in your cart below.</li>
          </ul>
          {/* Spinner Widget */}
          {isScanning && (
            <div className="flex flex-col items-center mt-6">
              <FaSpinner className="text-blue-500 text-4xl animate-spin" />
              <p className="text-gray-600 mt-2">
                Scanning in progress... Keep scanning items!
              </p>
            </div>
          )}
        </div>

        {/* Virtual Cart Display & Checkout Section */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start bg-white p-6 mt-10 rounded-lg shadow-xl border">
          {/* Virtual Cart Items */}
          <div className="w-full md:w-2/3">
            <VirtualCart />
          </div>

          {/* Grand Total & Payment Section */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 sm:pt-[140px] rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h3>
            <div className="text-gray-600 space-y-2">
              <p className="font-bold">
                <span className="font-bold">Total Items:</span> 3
              </p>
              <p className="font-bold">
                <span className="font-bold">Grand Total:</span> ₹10,990
              </p>
              <p className="font-bold">
                <span className="font-bold">Total Savings:</span> ₹300
              </p>
              <p className="font-bold">
                <span className="font-bold">GST (18%):</span> ₹213
              </p>
            </div>

            {/* Payment Options */}
            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
              Choose Payment Method
            </h3>
            <div className="flex flex-col gap-3">
              {/* Card Payment */}
              <button
                onClick={() => navigate("/payment-done")}
                className="flex items-center gap-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              >
                <FaCcVisa className="text-2xl" />
                <span className="text-lg font-semibold">Pay with Card</span>
              </button>

              {/* UPI Payment */}
              <button
                onClick={() => navigate("/payment-done")}
                className="flex items-center gap-3 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
              >
                <FaGooglePay className="text-2xl" />
                <span className="text-lg font-semibold">Pay with UPI</span>
              </button>

              {/* Credit Card Payment */}
              <button
                onClick={() => navigate("/payment-done")}
                className="flex items-center gap-3 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300"
              >
                <FaCreditCard className="text-2xl" />
                <span className="text-lg font-semibold">
                  Pay with Credit Card
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
