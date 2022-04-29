import axios from "axios";

const allProducts = async (state) => {
  const request = await axios.get(
    "https://guappjolotas-api.herokuapp.com/products"
  );
  state(request.data);
};

const productById = async (id, state) => {
  const request = await axios.get(
    `https://guappjolotas-api.herokuapp.com/products/${id}`
  );
  state(request.data);
};

export { allProducts, productById };
