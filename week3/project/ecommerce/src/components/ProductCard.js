import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import solidHeart from "../assets/heart-solid.svg";
import regularHeart from "../assets/heart-regular.svg";
import { ProductsContext } from "../context/ProductsContext";

const ProductCard = ({ title, image, id }) => {
  const { favProdId, addToFavorites, removeFromFavorites } =
    useContext(ProductsContext);

  const navigate = useNavigate();

  const handleFav = (e) => {
    e.stopPropagation();
    addToFavorites(id);
  };
  const handleUnFav = (e) => {
    e.stopPropagation();
    removeFromFavorites(id);
  };
  return (
    <div
      className="products--item"
      onClick={() => {
        navigate(`/products/${id}`);
      }}
    >
      <img src={image} alt={title} />
      <p>{title}</p>
      {favProdId?.includes(id) ? (
        <img src={solidHeart} alt="favs" id="heart" onClick={handleUnFav} />
      ) : (
        <img src={regularHeart} alt="favs" id="heart" onClick={handleFav} />
      )}
    </div>
  );
};

export default ProductCard;
