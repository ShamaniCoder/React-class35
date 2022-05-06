import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const URL = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({});
  const [errMessage, setErrMessage] = useState("");

  const getDetails = async () => {
    try {
      let response = await fetch(URL);
      let detail = await response.json();
      setProduct(detail);
    } catch (err) {
      setErrMessage(err.message);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {errMessage ? (
        <h3>{errMessage}</h3>
      ) : (
        <div>
          <div>
            <h1>{product.title}</h1>
          </div>
          <div className="product-detail">
            <p style={{ flex: 3 }}>{product.description}</p>
            <div style={{ flex: 2 }}>
              <img id="img" src={product.image} alt={product.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
