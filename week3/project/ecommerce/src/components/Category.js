import React, { useEffect, useState } from "react";

const Category = ({ onCategorySelect, selectedCategory }) => {
  const Url = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let response = await fetch(Url);
      let categories = await response.json();
      setCategories(categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="category-container">
      {categories?.map((category, index) => {
        return (
          <h3
            className={selectedCategory === category ? "title-active" : null}
            key={index}
            onClick={() => {
              if (selectedCategory === category) {
                onCategorySelect("");
              } else {
                onCategorySelect(category);
              }
            }}
          >
            {category}
          </h3>
        );
      })}
    </div>
  );
};

export default Category;
