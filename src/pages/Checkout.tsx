import { FaLock } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  
  const handlecheckout = () => {
    navigate('/checkout-final')
  }
  return (
    <div className="max-w-2xl mx-auto p-4 lg:pt-[100px] pt-[170px]">
      <h1 className="text-2xl font-bold mb-4">Complete your purchase</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Personal info</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Nancymark@gmail.com"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          <p className="text-xs text-gray-500">
            We will send the purchase receipt to this address
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nancy Mark"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          <p className="text-xs text-gray-500">
            We will use this to personalize your account experience
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="contact"
          >
            Contact no
          </label>
          <input
            id="contact"
            type="text"
            placeholder="987-432-869"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          <p className="text-xs text-gray-500">
            We will use this in case of any query
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-2">Select Payment Method</h2>
        <div className="flex justify-between mb-4">
          <button className="flex-1 bg-white border border-gray-300 p-4 rounded-md mr-2 hover:border-indigo-600">
            <img
              src="credit-card-icon.png"
              alt="Credit or debit card"
              className="inline-block w-6 h-6 mr-2"
            />
            Credit or debit card
          </button>
          <button className="flex-1 bg-white border border-gray-300 p-4 rounded-md mx-2 hover:border-indigo-600">
            <img
              src="gpay-icon.png"
              alt="Google Pay"
              className="inline-block w-6 h-6 mr-2"
            />
            Google Pay
          </button>
          <button className="flex-1 bg-white border border-gray-300 p-4 rounded-md ml-2 hover:border-indigo-600">
            <img
              src="paypal-icon.png"
              alt="PayPal"
              className="inline-block w-6 h-6 mr-2"
            />
            Cash on dilevery (COD)
          </button>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="card-number"
          >
            Card number
          </label>
          <input
            id="card-number"
            type="text"
            placeholder="1234 5678 9012 3456"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-between gap-x-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="Expiration-Month"
              >
                Expiration Month
              </label>
              <input
                id="Expiration-Month"
                type="text"
                placeholder="09"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="Expiration-Year"
              >
                Expiration Year
              </label>
              <input
                id="Expiration-Year"
                type="text"
                placeholder="2029"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="ccv"
              >
                CCV Number
              </label>
              <input
                id="ccv"
                type="text"
                placeholder="123"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button onClick={handlecheckout} className="bg-black w-full text-2xl text-white">
            <div className="flex justify-center items-center h-[40px] text-2xl font-light gap-x-2">
              <span>
                <FaLock />
              </span>
              Proceed to Checkout
            </div>
          </button>
        </div>
        <div className="mb-4 flex">
          <input
            id="coupon"
            placeholder="Have a coupon Code? Click to Enter"
            type="text"
            className="mt-3 p-2 block w-full border border-black text-center placeholder:text-center placeholder:text-black placeholder:align-middle"
          />
        </div>
      </div>

      <div className="flex mt-14">
        <div className="flex flex-col"><FaLock /><h1 className="font-semibold mb-3">Trust Our service</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint cupiditate necessitatibus molestias libero nam cumque optio amet rem! Eligendi quam minima dolore magnam a mag</p></div>
        <div className="flex flex-col"><AiOutlineSafety /><h1 className="font-semibold mb-3">Secure payment Gateway</h1><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo corporis tenetur laboriosam odio dolores, veritatis delectus temporibus tempora accusamus, aliquam fugiat labore aperiam porro ducimus quas placeat cum inventore.</p></div>
      </div>
    </div>
  );
};

export default Checkout;
