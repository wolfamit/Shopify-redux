
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Header from "./components/Header";
import SingleItem from "./pages/SingleItem";
import CheckoutFinal from "./pages/CheckoutFinal";

import "react-loading-skeleton/dist/skeleton.css";
import Footer from "./components/Footer";
import UserModal from "./components/ModalNewUser";
import { useEffect , useState} from "react";
import axios from "axios";

function App() {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [cartId, setCartId] = useState();
  
  useEffect(() => {
    // Fetch the cart_id from the backend when the component mounts
    const fetchCartId = async () => {
        try {
            const response = await axios.get('https://cloudcart.vercel.app/cart');
            setCartId(response.data.cart_id);
        } catch (error) {
            console.error('Error fetching cart ID:', error);
        }
    };

    console.log('cartId:', cartId);

    fetchCartId();
}, []);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userMobile = localStorage.getItem("userMobile");
    
    if (!userName || !userMobile) {
      setIsUserModalOpen(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/checkout-final" Component={CheckoutFinal} />
          <Route path="/about" Component={About} />
          <Route path="/product/:id" Component={SingleItem} />
        </Routes>
      </BrowserRouter>
      {isUserModalOpen && <UserModal onClose={() => setIsUserModalOpen(false)} />}
      <Footer />
    </>
  );
}

export default App;
