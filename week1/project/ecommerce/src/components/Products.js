
import ProductCard from "./ProductCard";
import productsData from "../fake-data/all-products";

import "../App.css";

function Products({ selectedCategory }) {
  let products;

  if (selectedCategory === "") {
    products = productsData;
  } else {
    products = productsData.filter(
      (product) => product.category === selectedCategory.slice(6)
    );
  }
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
          />
        );
      })}
    </div>
  );
}

export default Products;


