import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchDiv, SearchInput, SearchResults } from "../styles/searchStyles";
import querystring from "query-string";
import { useSearchInput } from "../hooks/useSearchInput";
import { getProductByName } from "../selectors/getProductByName";
import { ProductCard } from "../components/ProductCard";

const Search = () => {
  const location = useLocation();

  const { q = "" } = querystring.parse(location.search);

  const navigate = useNavigate();

  const [values, handleInputChange] = useSearchInput({
    searchText: q,
  });
  const { searchText } = values;

  const productsFiltered = getProductByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <section>
      <SearchDiv>
        <SearchInput
          onSubmit={handleSearch}
          type="text"
          placeholder="Sabor de guajolota..."
          name="searchText"
          value={searchText}
          onChange={"" || handleInputChange}
        />
        <Link to="/categories">
          <p>Volver</p>
        </Link>
      </SearchDiv>
      <SearchResults>
        {!searchText ? (
          <p>Ingrese una palabra clave</p>
        ) : (
          productsFiltered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </SearchResults>
    </section>
  );
};

export default Search;
