import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useState,  } from "react";

function App() {
 
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        onSelectCategory={(category) => setSelectedCategory(category)}
        selectedCategory={selectedCategory}
      />
      <Products
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
