import React from "react";
import categoryData from "../fake-data/all-categories";
import "../App.css";

function categories({ selectCategory, selectedCategory }) {
  return (
    <div className="category-container">
      {categoryData.map((category, index) => {
        return (
          <h3
            className={selectedCategory === category && "title-active"}
            key={index}
            onClick={(e) => {
              selectCategory(e.currentTarget.innerText);
            }}
          >
            {category}
          </h3>
        );
      })}
    </div>
  );
}

export default categories;
