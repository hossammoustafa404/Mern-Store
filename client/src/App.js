import React, { useEffect } from "react";
import { Cart, Home, ProductDetails, Shipping, SignIn } from "./pages";
import { Header, Footer } from "./layout";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculateCartTotals } from "./features/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCartTotals());
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
