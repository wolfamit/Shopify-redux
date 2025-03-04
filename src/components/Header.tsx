import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Sidebar from "./Sidebar/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const CartItem = ({ state: { isSidebarOpen, setIsSidebar } }: any) => {
  const state = useSelector((state: any) => state.CartSlice.cart);

  return (
    <div className="relative" onClick={() => setIsSidebar(!isSidebarOpen)}>
      <IoCartOutline className="text-5xl"></IoCartOutline>
      {state.length != 0 ? (
        <span className="absolute -top-[5px] right-0 bg-red-400 p-1 px-2 rounded-full text-white">
          {state.length}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebar] = useState(false);
  const [User1, setUser1] = useState(false);
  // Assuming you have the user's mobile number stored in the Redux store

  const storedUser = localStorage.getItem("User");
  const User: any = storedUser ? JSON.parse(storedUser) : null;
  
   const cell = User?.cell;
   const customer = User?.customerName;
  // Function to generate a session ID using the user's mobile number
  const generateSessionId = (cell: string | null): string => {
    if (!cell) {
      return "SID-0000-0000"; // Fallback session ID if mobile number is null
    }
    // const prefix = "Cart-ID";
    // const suffix = new Date().getTime().toString().slice(-4);
    // return `${prefix}-${cell.slice(-4)}-${suffix}`;
    return customer;
  };
  useEffect(()=>{
    if(User){
      setUser1(true);
    }
  },[])
  const sir = generateSessionId(cell);

  return (
    <>
      <ToastContainer />
      <header className="w-full top-0 shadow-md fixed z-50 bg-white">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <CiShoppingCart className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

            <span className="ml-4 text-3xl">CloudCart</span>
          </Link>

          {/* Displaying the session ID in the middle of the header */}
         { User1 && <div className="flex-grow text-center">
            <span className="text-sml font-bold">Hello {sir}!✅</span>
            <span className="text-sml font-bold">You are Connected to the CloudCart !✅</span>
          </div>}

          <nav className="md:ml-auto md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/checkout"} className="mr-5 hover:text-gray-900">
              Checkout
            </Link>
            <Link to={"/about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <CartItem state={{ isSidebarOpen, setIsSidebar }} />
          </nav>
        </div>
        <Sidebar state={{ isSidebarOpen, setIsSidebar }} />
      </header>
    </>
  );
};

export default Header;
