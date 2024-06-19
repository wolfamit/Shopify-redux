import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
