import React, { useContext, useEffect, useState } from "react";
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
import { useParams, useNavigate, Link } from "react-router-dom";
import { productById } from "../helpers/GetData";
import  CartContext from "../Context/CartContext"

const SelectFood = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [productInfoById, setProductInfoById] = useState(null);
    const { addItemToCart } = useContext(CartContext);

  const handleReturn = () => {
    navigate(-1);
  };
  useEffect(() => {
    productById(params.id, setProductInfoById);
  }, [params.id]);


  return (
    <>
      {productInfoById !== null ? (
        <section>
          <NavSelectFood>
            <img
              src="/icons/chevron-left.svg"
              alt="chevron-left"
              onClick={handleReturn}
            />
            <Link to="/cart">
              <img src="/icons/shopping-cart.svg" alt="shopping-cart" />
            </Link>
          </NavSelectFood>
          <ItemDescription>
            <ItemDesImg alt="food" src={productInfoById.image} />
            <ItemInfo>
              <ItemH3>{productInfoById.name} </ItemH3>
              <ItemP>$ {productInfoById.price} MXN</ItemP>
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
              <img alt="taste" src={productInfoById.flaverImg} />
            </ItemTasteContainer>
          </ItemTaste>
          <ItemCombo>
            <h3>Guajolocombo</h3>
            <ComboP>
              Selecciona el acompañante que más te guste y disfruta de tu
              desayuno
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
            <BtnPay onClick={() => addItemToCart(productInfoById)}>
              Agregar 1 al carrito <span>$ {productInfoById.price}.00</span>
            </BtnPay>
          </ItemCombo>
        </section>
      ) : (
        "Cargando..."
      )}
    </>
  );
};

export default SelectFood;
