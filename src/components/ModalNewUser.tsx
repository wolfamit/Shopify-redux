import { useState } from "react";

// Define the props interface
interface UserModalProps {
  onClose: () => void;
}

// UserModal Component
const UserModal: React.FC<UserModalProps> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");

  const handleSave = () => {
    if (name && mobile) {
      // Save to local storage
      localStorage.setItem("userName", name);
      localStorage.setItem("userMobile", mobile);
      onClose(); // Corrected from "onclose" to "onClose"
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Welcome! Please enter your details</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserModal;
