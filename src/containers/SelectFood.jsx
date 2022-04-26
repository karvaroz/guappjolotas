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

const SelectFood = () => {
  return (
    <>
      <section>
        <NavSelectFood>
          <img src="/icons/chevron-left.svg" alt="chevron-left" />
          <img src="/icons/shopping-cart.svg" alt="shopping-cart" />
        </NavSelectFood>
        <ItemDescription>
          <ItemDesImg src="/images/tamal-verde.png" alt="food" />
          <ItemInfo>
            <ItemH3>Guajolota de Tamal Verde</ItemH3>
            <ItemP>$25 MXN</ItemP>
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
            <img src="/images/Name=verde.png" alt="taste" />
            <img src="/images/Name=mole.png" alt="taste" />
            <img src="/images/Name=rajas.png" alt="taste" />
            <img src="/images/Name=piña.png" alt="taste" />
            <img src="/images/Name=pasas.png" alt="taste" />
            <img src="/images/Name=guayaba.png" alt="taste" />
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
