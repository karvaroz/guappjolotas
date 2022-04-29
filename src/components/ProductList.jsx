import React, { useEffect, useState } from "react";
// import { getProductBycategory } from "../selectors/getByCategory";
import { FoodResults } from "../styles/categoriesStyled";
import { ProductCard } from "../components/ProductCard";
import { allProducts } from "../helpers/GetData";

export const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <>
      {products !== null ? (
        <FoodResults>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </FoodResults>
      ) : (
        "Cargando..."
      )}
    </>
  );
};
