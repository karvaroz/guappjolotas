import React from "react";
import { CardImg, CardInfoH3, CardInfoP, CardItem, CardItemImg, CardItemInfo } from "../styles/categoriesStyled";
import { SearchDiv, SearchInput, SearchResults } from "../styles/searchStyles";

const Search = () => {
  return (
    <section>
      <SearchDiv>
        <SearchInput type="text" placeholder="Sabor de guajolota..." />
        <p>Cancelar</p>
      </SearchDiv>
      <SearchResults>
        <CardItem>
          <CardItemImg>
            <CardImg src="/images/Property 1=mole-1.png" alt="Mole" />
          </CardItemImg>
          <CardItemInfo>
            <CardInfoH3>Mole</CardInfoH3>
            <CardInfoP>$25 MXN</CardInfoP>
          </CardItemInfo>
        </CardItem>
      </SearchResults>
    </section>
  );
};

export default Search;
