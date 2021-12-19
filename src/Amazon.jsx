import React from "react";

import { Home } from "./components/Home";
import { CheckOut } from "./components/CheckOut.jsx";
import { Login } from "./components/Login.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Amazon = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
