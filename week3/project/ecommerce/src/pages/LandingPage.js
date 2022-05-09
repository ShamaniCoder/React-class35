import "../App.css";
import React, { useState } from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="App">
      <div id="top-bar">
        <h1>Products</h1>
        <div>
          <Link to="/">Products</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <Category
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
};

export default LandingPage;
