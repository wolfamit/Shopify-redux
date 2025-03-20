import { useNavigate, useParams } from "react-router-dom";
import {
  FaCamera,
  FaCreditCard,
  FaGooglePay,
  FaCcVisa,
  FaSpinner,
  FaTimes, // Added FaTimes for the cross icon
} from "react-icons/fa";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { handleRemoveItem } from "../api/index.js"; // Import the API function

// Define the correct interface for each item in the backend response
interface CartItem {
  _id: string;
  card_id: string;
  item_name: string;
  description: string;
  price: number;
  discounted_price: number;
  url: string;
  size: string;
  color: string;
  timestamp: string;
  __v: number;
}

const Dashboard = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isScanning = true;

  // State to hold the cart items
  const [incomingData, setIncomingData] = useState<CartItem[]>([]);

  // Polling function to fetch items
  const poolingFun = async () => {
    try {
      const res = await fetch(
        `https://cloudcart-httpserver.vercel.app/getItems/${id}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      if (data.success) {
        setIncomingData((prev) => {
          // Check if new items are added
          if (prev.length < data.items.length) {
            toast.success("Item added to the cart");
          }
          return data.items; // Replace with new items
        });
      }
    } catch (error) {
      console.log("Polling error:", error);
    }
  };

  // Set up polling with useEffect
  useEffect(() => {
    const interval = setInterval(poolingFun, 2000); // Poll every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [id]); // Dependency on id ensures it re-runs if id changes

  // Handle removing an item
  const handleRemove = async (itemId: string) => {
    try {
      // await handleRemoveItem(itemId); // Call the API function to remove the item

      const res = await fetch(
        `https://cloudcart-httpserver.vercel.app/removeItems/${itemId}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      if (data.success) {
        setIncomingData((prev) => prev.filter((item) => item._id !== itemId)); // Update state
        toast.success("Item removed from the cart");
      }
    } catch (error) {
      console.log("Remove error:", error);
      toast.error("Failed to remove item");
    }
  };

  // Calculate totals
  const subtotal = incomingData.reduce(
    (total, item) => total + item.discounted_price,
    0
  );
  const gst = subtotal * 0.18; // 18% GST
  const grandTotal = subtotal + gst;
  const totalSavings = incomingData.reduce(
    (total, item) => total + (item.price - item.discounted_price),
    0
  );

  return (
    <>
      <Header />
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
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ensure your cart is linked with your account.</li>
            <li>Scan the RFID tags on the items.</li>
            <li>View added items in your cart below.</li>
          </ul>
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
            {incomingData.length > 0 ? (
              incomingData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 mb-4 border-b pb-4 relative"
                >
                  <img
                    src={item.url}
                    alt={item.item_name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.item_name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-500">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="text-gray-700">
                      <span className="line-through">₹{item.price}</span>{" "}
                      <span className="font-bold text-green-600">
                        ₹{item.discounted_price}
                      </span>
                    </p>
                  </div>
                  {/* Cross Button */}
                  <button
                    title="submit"
                    type="submit"
                    onClick={() => handleRemove(item._id)}
                    className="absolute top-0 right-0 text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in the cart yet.</p>
            )}
          </div>

          {/* Grand Total & Payment Section */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 sm:pt-[140px] rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-bold">Total Items:</span>{" "}
                {incomingData.length}
              </p>
              <p>
                <span className="font-bold">Subtotal:</span> ₹
                {subtotal.toFixed(2)}
              </p>
              <p>
                <span className="font-bold">GST (18%):</span> ₹{gst.toFixed(2)}
              </p>
              <p>
                <span className="font-bold">Grand Total:</span> ₹
                {grandTotal.toFixed(2)}
              </p>
              <p>
                <span className="font-bold">Total Savings:</span> ₹
                {totalSavings.toFixed(2)}
              </p>
            </div>

            {/* Payment Options */}
            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
              Choose Payment Method
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/payment-done")}
                className="flex items-center gap-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              >
                <FaCcVisa className="text-2xl" />
                <span className="text-lg font-semibold">Pay with Card</span>
              </button>
              <button
                onClick={() => navigate("/payment-done")}
                className="flex items-center gap-3 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
              >
                <FaGooglePay className="text-2xl" />
                <span className="text-lg font-semibold">Pay with UPI</span>
              </button>
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
