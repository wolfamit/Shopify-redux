import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import CheckoutFinal from "./pages/CheckoutFinal";
import SingleItem from "./pages/SingleItem";
import Header from "./components/Header";
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import PaymentDone from "./pages/PaymentDone.tsx"
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

// import axios from "axios";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:id" Component={Auth} />
          <Route path="/payment-done" Component={PaymentDone} />
          <Route path="/dashboard/:id" Component={Dashboard} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/checkout-final" Component={CheckoutFinal} />
          <Route path="/about" Component={Home} />
          <Route path="/product/:id" Component={SingleItem} />
        </Routes>
      </BrowserRouter>
      {/* {isUserModalOpen && <UserModal onClose={() => setIsUserModalOpen(false)} />} */}
   
    </>
  );
}

export default App;
