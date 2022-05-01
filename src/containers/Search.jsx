import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchDiv, SearchInput, SearchResults } from "../styles/searchStyles";
// import { ProductCard } from "../components/ProductCard";
import { allProducts } from "../helpers/GetData";
import { ProductCard } from "../components/ProductCard";

const Search = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []);

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search) {
      const productsFiltered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(productsFiltered);
    } else {
      setProducts(products);
    }
  };

  return (
    <section>
      <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Sabor de guajolota..."
          name="search"
          onChange={handleSearch}
        />

        <Link to="/categories">
          <p>Volver</p>
        </Link>
      </SearchDiv>
      <SearchResults>
        {products === null
          ? "Cargando..."
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </SearchResults>
    </section>
  );
};

export default Search;
