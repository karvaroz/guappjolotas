import React from "react";
import {
  BtnPay,
  ComboDiv,
  ComboP,
  ControlsBtn,
  ItemCombo,
  ItemControls,
  ItemDescription,
  ItemDesImg,
  ItemDiv,
  ItemH3,
  ItemInfo,
  ItemInfoDiv,
  ItemInfoH3,
  ItemInfoP,
  ItemP,
  ItemTaste,
  ItemTasteContainer,
  ItemTasteP,
  NavSelectFood,
} from "../styles/selectFoodStyles";
// import { useParams, useNavigate } from "react-router-dom";
// import { getProductById } from "../selectors/getProductById";

const SelectFood = () => {
  // const navigate = useNavigate();
  // const {id} = useParams();
  // console.log(id);
  // const prod = getProductById(id);
  // console.log(prod);
  // const { name, price, image, flaverImg } = prod;
  // console.log(name);

  // const handleReturn = () => {
  //   navigate(-1);
  // };

  return (
    <>
      <section>
        <NavSelectFood>
          <img
            src="/icons/chevron-left.svg"
            alt="chevron-left"
            // onClick={}
          />
          <img src="/icons/shopping-cart.svg" alt="shopping-cart" />
        </NavSelectFood>
        <ItemDescription>
          <ItemDesImg  alt="food" />
          <ItemInfo>
            <ItemH3></ItemH3>
            <ItemP>$MXN</ItemP>
          </ItemInfo>
          <ItemControls>
            <ControlsBtn>-</ControlsBtn>
            <p>2</p>
            <ControlsBtn>+</ControlsBtn>
          </ItemControls>
        </ItemDescription>
        <ItemTaste>
          <ItemTasteP>Sabor</ItemTasteP>
          <ItemTasteContainer>
            <img  alt="taste" />
          </ItemTasteContainer>
        </ItemTaste>
        <ItemCombo>
          <h3>Guajolocombo</h3>
          <ComboP>
            Selecciona el acompañante que más te guste y disfruta de tu desayuno
          </ComboP>
          <ComboDiv>
            <ItemDiv>
              <ItemInfoDiv>
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
                <ItemInfoH3>Mole</ItemInfoH3>
                <ItemInfoP>$25 MXN</ItemInfoP>
              </ItemInfoDiv>
              <div className="item_check">
                <img src="/icons/check-square.svg" alt="check" />
              </div>
            </ItemDiv>
          </ComboDiv>
          <BtnPay>
            Agregar 1 al carrito <span>$25.00</span>
          </BtnPay>
        </ItemCombo>
      </section>
    </>
  );
};

export default SelectFood;
