import React from "react";
import { getProductBycategory } from "../selectors/getByCategory";
import { FoodResults } from "../styles/categoriesStyled";
import { ProductCard } from "../components/ProductCard";

export const ProductList = ({ category }) => {
  const products = getProductBycategory(category);
  return (
    <FoodResults>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </FoodResults>
  );
};
