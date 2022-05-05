import React from "react";
import categoryData from "../fake-data/all-categories";
import "../App.css";

function Categories({ onSelectCategory, selectedCategory }) {
  return (
    <div className="category-container">
      {categoryData.map((category, index) => {
        return (
          <button
            className={selectedCategory === category && "title-active"}
            key={index}
            onClick={() => {
              if (selectedCategory === category) {
                onSelectCategory("");
              } else {
                onSelectCategory(category);
              }
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
