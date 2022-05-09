import useFetch from "../hooks/UseFetch"

function Category ({ onCategorySelect, selectedCategory }) {
  const url = "https://fakestoreapi.com/products/categories";
  const { data: categories } = useFetch(url);


  return (
    <div className="category-container">
      {categories?.map((category, index) => {
        return (
          <h3
            className={selectedCategory === category ? "title-active" : null}
            key={index}
            onClick={() => {
              if (selectedCategory === category) {
                onCategorySelect("");
              } else {
                onCategorySelect(category);
              };
            }}
          >
            {category}
          </h3>
        );
      })}
    </div>
  );
};

export default Category;