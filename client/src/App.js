import React from "react";
import { Home, ProductDetails } from "./pages";
import { Header, Footer } from "./layout";
import "./sass-helpers/globals.scss";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
