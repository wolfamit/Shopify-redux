import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Header from "./components/Header";
import SingleItem from "./pages/SingleItem";
import CheckoutFinal from "./pages/CheckoutFinal";

import "react-loading-skeleton/dist/skeleton.css";


function App() {
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

    </>
  );
}

export default App;
