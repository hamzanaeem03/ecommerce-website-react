import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import { Cart } from "./pages/Cart";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    localStorage.setItem("cartItems", JSON.stringify(setCartItems));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} /> */}

        <Route path="/Products" element={<Products />} />
        <Route
          path="/Products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart  cartItems={cartItems}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
