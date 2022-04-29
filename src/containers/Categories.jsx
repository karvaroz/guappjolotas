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
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate()
  const handleClickSearch = () => {
    navigate("/search");
  }
  return (
    <>
      <section>
        <NavCag>
          <NavLogo src="/images/logo.png" alt="Logo Guappjolotas" />
          <Link to="/cart">
            <img src="/icons/shopping-cart.svg" alt="cart" />
          </Link>
        </NavCag>
        <SearchDiv>
          <SearchH1>Nada como una Guajolota para empezar el día</SearchH1>
          <div>
            <SearchInput
              type="text"
              placeholder="Sabor de guajolota, bebida"
              onClick={handleClickSearch}
            />
            <SearchInpImg src="/icons/search.svg" alt="Seach Icon" />
          </div>
        </SearchDiv>
        <FoodMenu>
          <MenuLi>
            <MenuLiA>Todo</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA>Guajolotas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA>Bebidas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA>Tamales</MenuLiA>
          </MenuLi>
        </FoodMenu>
        <ProductList />
      </section>
    </>
  );
};

export default Categories;
