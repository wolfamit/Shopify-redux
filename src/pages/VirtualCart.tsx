import { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon
import { NavLink } from "react-router-dom";

const VirtualCart = () => {
  // Default items in the cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-canceling headphones with deep bass",
      size: "Medium",
      price: 1999,
      discount: 20, // in percentage
      image: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-TruthearXCrinacle-ZERO-Red-02.jpg?v=1684912081&width=800", // Placeholder image
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Advanced fitness tracking with heart rate monitor",
      size: "Medium",
      price: 4999,
      discount: 15,
      image: "https://m.media-amazon.com/images/I/81YrLS4MV8L._SX425_.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable speaker with high-quality sound",
      size: "Medium",
      price: 2999,
      discount: 25,
      image: "https://m.media-amazon.com/images/I/91oOj6CNOxL._SX425_.jpg",
    },
  ]);

  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">🛒 Your Virtual Cart</h2>

      {/* Cart Items List */}
      <div className="w-full max-w-2xl space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const discountedPrice = item.price - (item.price * item.discount) / 100;

            return (
              <div
                key={item.id}
                className="flex flex-col bg-white p-6 shadow-lg rounded-lg transition-all transform hover:scale-105 hover:shadow-xl"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Product Details */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-gray-500 text-sm">Size: <span className="font-medium">Medium</span></p>

                  {/* Price Section */}
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through">
                      ₹{item.price}
                    </span>
                    <span className="text-green-600 text-sm font-semibold">
                      {item.discount}% OFF
                    </span>
                  </div>
                </div>
                <NavLink className="mt-4 flex items-center justify-center bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all" to="https://www.amazon.in/Titan-Smartwatch-Resolution-Functional-SingleSync/dp/B0CNW6XHP4/ref=sr_1_1_sspa?adgrpid=1319415560277958&brr=1&dib=eyJ2IjoiMSJ9.J4AUSmCj0k4d5P0PPPGlXBOc101MOic_38q5FIl_AVMtOQUCspOXJZ2kNWci3tMzdL9RCQQLswvC_RRhSE9R9V6MAE5-sM_2AV7ZijFlgg6SBAawFtpiZY-IAtN5rQy2QqC6LanIpkelj9eQgd-PZmvrxBjjsXr5y8Q6vXBHGJ0dkqOEWNScGY8JeTkI5d90XTVzPRtuPdIIUDkBsEELov6sVJI37mSsPZvT3YbEqm93zX2h8BQWLZDjIdguRcJXW2hhbUhxFtuda0YIJgIxqeRJjpDfXPQACEA5QHmQT48.rA6lVv_iXmuwfnwYS-NX3DTK0rNjc1NWbxIptcmrKWE&dib_tag=se&hvadid=82463731709241&hvbmt=be&hvdev=c&hvlocphy=143954&hvnetw=o&hvqmt=e&hvtargid=kwd-82464352106761%3Aloc-90&hydadcr=20673_1907129&msclkid=c0ce3c56a3281d3c4a105b96d5e2ec38&qid=1740666593&rd=1&s=watches&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1" >Go to product Page</NavLink>
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 flex items-center justify-center bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                  <FaTrash className="mr-2" />
                  Remove Item
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default VirtualCart;
