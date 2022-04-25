import React from "react";
import { CardImg, CardInfoH3, CardInfoP, CardItem, CardItemImg, CardItemInfo, FoodMenu, FoodResults, MenuLi, MenuLiA, NavCag, NavLogo, SearchDiv, SearchH1, SearchInpImg, SearchInput } from "../styles/categoriesStyled";


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
            <MenuLiA href="/*">Bedidas</MenuLiA>
          </MenuLi>
          <MenuLi>
            <MenuLiA href="/*">Tamales</MenuLiA>
          </MenuLi>
        </FoodMenu>

        <FoodResults className="food_results">
          <CardItem className="card_item">
            <CardItemImg className="card_item_img">
              <CardImg src="/images/Property 1=mole-1.png" alt="Mole" />
            </CardItemImg>
            <CardItemInfo className="card_item_info">
              <CardInfoH3>Mole</CardInfoH3>
              <CardInfoP>$25 MXN</CardInfoP>
            </CardItemInfo>
          </CardItem>
        </FoodResults>
      </section>
    </>
  );
};

export default Categories;
