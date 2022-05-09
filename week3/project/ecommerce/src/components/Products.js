import React from "react";
import ProductCard from "./ProductCard";
import "../App.css";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
import useFetch from "../hooks/UseFetch";


const Products = ({ selectedCategory }) => {
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products/";

  const { data: products, isLoading, errMessage } = useFetch(url);
 
  return (
    <div>
      {isLoading ? (
        <MoonLoader css={override} size={100} />
      ) : errMessage ? (
        <h3>{errMessage}</h3>
      ) : (
        <div className="products">
          {products?.map((product) => {
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
