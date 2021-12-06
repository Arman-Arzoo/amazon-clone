import React from "react";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home";
import { CheckOut } from "./components/CheckOut.jsx";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Amazon = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
};
