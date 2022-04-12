import React from "react";
import "../App.css";

function ProductCard(props) {
  return (
    <div className="products--item">
      <img src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </div>
  );
}

export default ProductCard;
