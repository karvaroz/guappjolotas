import React, { useEffect, useState } from "react";
// import { getProductBycategory } from "../selectors/getByCategory";
import { FoodMenu, FoodResults } from "../styles/categoriesStyled";
import { ProductCard } from "../components/ProductCard";
import { allProducts } from "../helpers/GetData";

export const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []);

  const handleCategory = (e) => {
    let category = e.target.value;
    if (category === "Todo") {
      allProducts(setProducts);
    } else if (category === "Guajolotas") {
      const filtered = products.filter(
        (product) => product.category === "Guajolotas"
      );
      setProducts(filtered);
    } else if (category === "Bebidas") {
      const filtered = products.filter(
        (product) => product.category === "Bebidas"
      );
      setProducts(filtered);
    } else {
      const filtered = products.filter(
        (product) => product.category === "Tamales"
      );
      setProducts(filtered);
    }
  };

  return (
    <>
      <FoodMenu>
        <label htmlFor="Todo">
          <input
            type="radio"
            name="category"
            id="Todo"
            value="Todo"
            onClick={handleCategory}
          />
          Todo
        </label>
        <label htmlFor="Guajolotas">
          <input
            type="radio"
            name="category"
            id="Guajolotas"
            value="Guajolotas"
            onClick={handleCategory}
          />
          Guajolotas
        </label>
        <label htmlFor="Bebidas">
          <input
            type="radio"
            name="category"
            id="Bebidas"
            value="Bebidas"
            onClick={handleCategory}
          />
          Bebidas
        </label>
        <label htmlFor="Tamales">
          <input
            type="radio"
            name="category"
            id="Tamales"
            value="Tamales"
            onClick={handleCategory}
          />
          Tamales
        </label>
      </FoodMenu>
      {products !== null ? (
        <FoodResults>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </FoodResults>
      ) : (
        "Cargando..."
      )}
    </>
  );
};
