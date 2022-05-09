import ProductsProvider from "./context/ProductsContext";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <ProductsProvider>
        <Router />
      </ProductsProvider>
    </div>
  );
}

export default App;
