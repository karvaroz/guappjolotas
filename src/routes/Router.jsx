import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Cart from "../containers/Cart";
import Categories from "../containers/Categories";
import SelectFood from "../containers/SelectFood";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/select-food" element={<SelectFood />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
