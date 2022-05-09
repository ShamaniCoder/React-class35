import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "../pages/FavoritesPage";
import LandingPage from "../pages/LandingPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
