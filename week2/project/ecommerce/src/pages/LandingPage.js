import "../App.css";
import React, { useState } from "react";
import Category from "../components/Category";
import Products from "../components/Products";
// import { useState } from "react";

const LandingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
  return (
    <div className="App">
      <h1>Products</h1>
      <Category  
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
};

export default LandingPage;
