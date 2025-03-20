import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import CheckoutFinal from "./pages/CheckoutFinal";
import SingleItem from "./pages/SingleItem";
import Header from "./components/Header";
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import PaymentDone from "./pages/PaymentDone.tsx"
import { ToastContainer } from "react-toastify";
import "./App.css";

// import axios from "axios";

function App() {
 
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Auth} />
          <Route path="/payment-done" Component={PaymentDone} />
          <Route path="/dashboard/:id" Component={Dashboard} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/checkout-final" Component={CheckoutFinal} />
          <Route path="/about" Component={Home} />
          <Route path="/product/:id" Component={SingleItem} />
        </Routes>
      </Router>
      {/* {isUserModalOpen && <UserModal onClose={() => setIsUserModalOpen(false)} />} */}
   <ToastContainer/>
    </>
  );
}

export default App;
