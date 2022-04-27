import React from "react";
import { Link } from "react-router-dom";
import {
  CardImg,
  CardInfoH3,
  CardInfoP,
  CardItem,
  CardItemImg,
  CardItemInfo,
} from "../styles/categoriesStyled";

export const ProductCard = ({ id, name, image, price }) => {
  return (
    <Link to={`/select-food/${id}/`}>
      <CardItem data-id={id}>
        <CardItemImg>
          <CardImg src={image} alt="Product" />
        </CardItemImg>
        <CardItemInfo>
          <CardInfoH3>{name}</CardInfoH3>
          <CardInfoP>$ {price} MXN</CardInfoP>
        </CardItemInfo>
      </CardItem>
    </Link>
  );
};
