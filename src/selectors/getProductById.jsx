import { products } from "../helpers/products";

export const getProductById = ( id ) => {
  return products.find( product => product.id === id );
}
