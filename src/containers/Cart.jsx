import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/categories">
          <img src="/icons/chevron-left.svg" alt="back" />
        </Link>
        <NavCartP>Carrito</NavCartP>
        <Link to="/profile">
          <img src="/icons/user.png" alt="user" width={20} height={20} />
        </Link>
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
        <span>$50 MXN</span>
      </Total>
      <BtnPay>Pagar</BtnPay>
    </section>
  );
};

export default Cart;
