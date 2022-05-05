import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProductCard = ({ title, image, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="products--item"
      onClick={() => {
        navigate(`/products/${id}`);
      }}
    >
      <img src="../assets/heart-regular.svg" alt="Product" />
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ProductCard;
