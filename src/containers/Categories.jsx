import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categoryClick, setCategoryClick] = useState("");
  const navigate = useNavigate();
  console.log(categoryClick);

  const handleClickGuajolotas = () => {
    setCategoryClick("Guajolotas");
    console.log("Guajolotas");
  };

  const handleClickBebidas = () => {
    setCategoryClick("Bebidas");
    console.log("Bebidas");
  };
  const handleClickTamales = () => {
    setCategoryClick("Tamales");
    console.log("Tamales");
  };

  const handleClickSearch = () => {
    console.log("Buscar");
    navigate("/search");
  };
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
            <SearchInput
              onClick={handleClickSearch}
              type="text"
              placeholder="Sabor de guajolota, bebida"
            />
            <SearchInpImg src="/icons/search.svg" alt="Seach Icon" />
          </div>
        </SearchDiv>
        <FoodMenu>
          <MenuLi>
            <MenuLiA onClick={handleClickGuajolotas}>Guajolotas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA onClick={handleClickBebidas}>Bebidas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA onClick={handleClickTamales}>Tamales</MenuLiA>
          </MenuLi>
        </FoodMenu>
        <ProductList category={"Tamales"} />
      </section>
    </>
  );
};

export default Categories;
