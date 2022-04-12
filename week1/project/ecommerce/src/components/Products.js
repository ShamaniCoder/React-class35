import React from "react";
import ProductCard from "./ProductCard";
import "../App.css";


function Products({ filteredProducts }) {
  return (
    <div className="products">
      {filteredProducts.map((product, index) => {
        return (
          <ProductCard
            key={index}
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
