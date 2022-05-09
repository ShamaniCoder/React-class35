import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [favProdId, setFavProdId] = useState([]);

  const addToFavorites = (id) => {
    setFavProdId([...favProdId, id]);
  };
  const removeFromFavorites = (id) => {
    const newFavorites = favProdId.filter((f) => f !== id);
    setFavProdId(newFavorites);
  };

  return (
    <ProductsContext.Provider
      value={{ favProdId, addToFavorites, removeFromFavorites }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
