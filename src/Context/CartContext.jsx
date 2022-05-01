import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("https://guappjolotas-api.herokuapp.com/products")
      .then(({ data }) => setProducts(data.products));
  };

  const getProductsCart = async () => {
    return await axios
      .get("https://guappjolotas-api.herokuapp.com/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { name, image, price } = product;

    await axios.post("https://guappjolotas-api.herokuapp.com/products-cart", {
      name,
      image,
      price,
    });
    alert("Producto agregado al carrito");
    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`https://guappjolotas-api.herokuapp.com/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(
          `https://guappjolotas-api.herokuapp.com/products-cart/${id}?query=${query}`,
          {
            amount,
          }
        )
        .then(({ data }) => console.log(data));
    }
    alert("Producto actualizado");
    getProducts();
    getProductsCart();
  };

  return (
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
