import { products } from "../helpers/products";

export const getProductByName = (name = "") => {
  name = name.toLocaleLowerCase();
  return products.filter((product) =>
    product.name.toLocaleLowerCase().includes(name)
  );
};
