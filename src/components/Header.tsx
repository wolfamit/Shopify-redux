import React , { useState} from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Sidebar from './Sidebar/index'

const CartItem = ({state :{isSidebarOpen, setIsSidebar}}:any) => {
  return <div className="relative" onClick={() => setIsSidebar(!isSidebarOpen)}>
     <IoCartOutline className="text-5xl"></IoCartOutline>
     <span className="absolute -top-[5px] right-0 bg-red-400 p-1 px-2 rounded-full text-white" >0</span>
  </div>
} 

const Header = () => {
  const [isSidebarOpen, setIsSidebar] = useState(false);

  return (
    <>
      <header className="w-full shadow-md">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

               <CiShoppingCart className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"/>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            
            <span className="ml-3 text-xl">Shopify</span>
          </a>
          <nav className="md:ml-auto md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
            <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
            <Link to={'/checkout'} className="mr-5 hover:text-gray-900">Checkout</Link>
            <Link to={'/about'} className="mr-5 hover:text-gray-900">About</Link>
            <CartItem state={{isSidebarOpen, setIsSidebar}}/>

          </nav>
        </div>
        <Sidebar state={{isSidebarOpen, setIsSidebar}} />
      </header>
    </>
  );
};

export default Header;
