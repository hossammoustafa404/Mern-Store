import React from "react";
import { Home } from "./pages";
import { Header, Footer } from "./layout";
import "./sass-helpers/globals.scss";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
