import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../App.css";

const Products = ({ selectedCategory }) => {
  const URL = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products/";

  const [products, setProducts] = useState([]);
  
  const [isLoading, setIsLoading] = useState("false");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(URL);
      let products = await response.json();
      setProducts(products);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [URL]);
  return (
    <div>
      {isLoading && <p>Loading</p>}
      <div className="products">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
