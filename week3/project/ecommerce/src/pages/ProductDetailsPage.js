import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
import useFetch from "../hooks/UseFetch";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data: product, isLoading, errMessage } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <MoonLoader css={override} size={100} />
      ) : errMessage ? (
        <h3>{errMessage}</h3>
      ) : (
        <>
          <div id="top-bar">
            <h1>{product.title}</h1>
            <div>
              <Link to="/">Products</Link>
              <Link to="/favorites">Favorites</Link>
            </div>
          </div>

          <div className="product-detail">
            <p style={{ flex: 3 }}>{product.description}</p>
            <div style={{ flex: 2 }}>
              <img id="img" src={product.image} alt={product.title} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsPage;

export const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 10rem;
`;
