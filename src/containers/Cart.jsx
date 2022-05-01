import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
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
  const [productsLength, setProductsLength] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <section>
      <NavCart>
        <Link to="/categories">
          <img src="/icons/chevron-left.svg" alt="back" />
        </Link>
        <NavCartP>Carrito</NavCartP>
        <p>{productsLength} productos en el carrito</p>
        <Link to="/profile">
          <img src="/icons/user.png" alt="user" width={20} height={20} />
        </Link>
      </NavCart>

      <Cards>
        {cartItems === 0 ? (
          <div>"Tu carrito esta vacio"</div>
        ) : (
          cartItems.map((product) => (
            <Card id={product.id}>
              <CardImg>
                <img src={product.image} alt="" />
              </CardImg>
              <CardInfo>
                <CardTitle>{product.name} </CardTitle>
                <CardQuan>{product.amount}</CardQuan>
              </CardInfo>
              <CardPrice>${product.price * product.amount}.00 MXN</CardPrice>
            </Card>
          ))
        )}
      </Cards>

      <Total>
        <p>Total </p>
        <span>${total} MXN</span>
      </Total>
      <BtnPay>Pagar</BtnPay>
    </section>
  );
};

export default Cart;
