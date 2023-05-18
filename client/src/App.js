import React, { useEffect } from "react";
import { Cart, Home, ProductDetails, SignIn } from "./pages";
import { Header, Footer } from "./layout";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculateCartTotals } from "./features/cart/cartSlice";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
