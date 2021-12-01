import React from "react";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

export const Amazon = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer developer="Arman Ali" />
    </div>
  );
};
