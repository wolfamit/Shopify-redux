import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const navigate = useNavigate();
  const id = 123456789
  
  const [formData, setFormData] = useState({
    cartID: id, // Initially empty
    cell: "",
    customerName: "",
  });

  // Set cartID when component mounts or cart_id changes
  useEffect(() => {
    if (id) {
      setFormData((prev) => ({ ...prev, cartID: id }));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData)
    try {
      const payload = {
        cell: formData.cell,
        customerName: formData.customerName,
      }
      const response = await fetch(
        `https://cloudcart-httpserver.vercel.app/authorize/${id}`,
        // `http://localhost:3000/authorize/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log(data.customerName);
      localStorage.setItem("User" , JSON.stringify(data));
      if (data.status === "success") {
        navigate(`/dashboard/${id}`);
      } else {
        toast("something went wrong!")
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex min-h-screen pt-[120px] items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
          Authenticate Cart
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Cart ID
            </label>
            <input
              type="text"
              name="cartID"
              value={id} // Use formData.cartID instead of cart_id directly
              readOnly
              className="mt-1 w-full cursor-not-allowed rounded-md border text-gray bg-gray-100 p-2"
              placeholder="Cart ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Cell Number
            </label>
            <input
              type="text"
              name="cell"
              value={formData.cell}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border p-2"
              placeholder="Enter your cell number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border p-2"
              placeholder="Enter your name"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;