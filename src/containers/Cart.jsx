import React from "react";
import {
  Card,
  CardImg,
  CardInfo,
  CardPrice,
  CardQuan,
  Cards,
  CardTitle,
  NavCart,
  NavCartP,
  Total,
} from "../styles/cartStyles";
import { BtnPay } from "../styles/selectFoodStyles";

const Cart = () => {
  return (
    <section>
      <NavCart>
        <img src="/icons/chevron-left.svg" alt="" />
        <NavCartP>Carrito</NavCartP>
      </NavCart>
      <Cards>
        <Card>
          <CardImg>
            <img src="/images/tamal-verde.png" alt="" />
          </CardImg>
          <CardInfo>
            <CardTitle>Guajolota de Tamal Verde</CardTitle>
            <CardQuan>x2</CardQuan>
          </CardInfo>
          <CardPrice>$50.00 MXN</CardPrice>
        </Card>
      </Cards>
      <Total>
        <p>Total </p>
        <span>$62 MXN</span>
      </Total>
      <BtnPay>Pagar</BtnPay>
    </section>
  );
};

export default Cart;
