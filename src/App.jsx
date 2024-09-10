import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} /> */}

        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
