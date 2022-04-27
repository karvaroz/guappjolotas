import { products } from "../helpers/products";

export const getProductBycategory = (category) => {
  const categories = ["Guajolotas", "Bebidas", "Tamales"];

  if (!categories.includes(category)) {
    console.log(`La categoría "${category}" no es correcto`);
  } else {
    return products.filter((product) => product.category === category);
  }
};
