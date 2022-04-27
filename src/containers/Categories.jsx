import React from "react";
import {
  FoodMenu,
  MenuLi,
  MenuLiA,
  NavCag,
  NavLogo,
  SearchDiv,
  SearchH1,
  SearchInpImg,
  SearchInput,
} from "../styles/categoriesStyled";
import { ProductList } from "../components/ProductList";

const Categories = () => {
  return (
    <>
      <section>
        <NavCag>
          <NavLogo src="/images/logo.png" alt="Logo Guappjolotas" />
          <img src="/icons/shopping-cart.svg" alt="cart" />
        </NavCag>
        <SearchDiv>
          <SearchH1>Nada como una Guajolota para empezar el día</SearchH1>
          <div>
            <SearchInput type="text" placeholder="Sabor de guajolota, bebida" />
            <SearchInpImg src="/icons/search.svg" alt="Seach Icon" />
          </div>
        </SearchDiv>
        <FoodMenu>
          <MenuLi>
            <MenuLiA href="/*">Guajolotas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA href="/*">Bebidas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA href="/*">Tamales</MenuLiA>
          </MenuLi>
        </FoodMenu>
        <ProductList category={"Tamales"} />
      </section>
    </>
  );
};

export default Categories;
