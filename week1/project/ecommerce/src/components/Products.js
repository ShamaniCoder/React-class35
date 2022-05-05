import { useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../fake-data/all-products";

import "../App.css";

function Products({ selectedCategory }) {
  let products;

  if (selectedCategory === "") {
    products = productsData;
  } else {
    products = productsData.filter(
      (product) => product.category === selectedCategory.slice(6)
    );
  }
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
          />
        );
      })}
    </div>
  );
}

export default Products;

// {
//     id: 1,
//     title: "FAKE: Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     }
