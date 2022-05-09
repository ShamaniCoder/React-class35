import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../context/ProductsContext";

const FavoritesPage = () => {
  const { favProdId } = useContext(ProductsContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    async function getData() {
      try {
        const data = await Promise.all(
          favProdId.map(async (id) => {
            const response = await fetch(`${url}${id}`);
            const result = await response.json();
            return result;
          })
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    getData();
  }, [favProdId]);

  return (
    <div>
      <div id="top-bar">
        <h1>Favorites</h1>
        <div>
          <Link to="/">Products</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <h2>
        {isLoading
          ? "Loading..."
          : (!products || products.length === 0) && (
              <div>"No Favorite Products"</div>
            )}
      </h2>
      <div className="products">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          id={product.id}
        />
      ))}
      </div>
      
    </div>
  );
};

export default FavoritesPage;
