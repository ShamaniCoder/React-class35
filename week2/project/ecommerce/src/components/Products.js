import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../App.css";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const Products = ({ selectedCategory }) => {
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products/";

  const [products, setProducts] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [errMessage, setErrMessage] = useState("");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(url);
      let products = await response.json();
      setProducts(products);
      setIsLoading(false);
    } catch (err) {
      setErrMessage(err.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, [URL]);
  return (
    <div>
      {isLoading ? (
        <MoonLoader css={override} size={100} />
      ) : errMessage ? (
        <h3>{errMessage}</h3>
      ) : (
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
      )}
    </div>
  );
};

export default Products;

export const override = css`
	display: block;
	margin: 0 auto;
	margin-top: 10rem;
`;
