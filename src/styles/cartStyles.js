import styled from "styled-components";
import "../index.css";
// CART

export const NavCart = styled.nav`
  margin: 24px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

export const NavCartP = styled.p`
  width: 60%;
`;

export const Cards = styled.div`
  margin: 24px;
  height: 480px;
`;

export const Card = styled.div`
  margin: 5px;
  height: 60px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
`;

export const CardImg = styled.div`
  img {
    width: 50px;
  }
`;

export const CardInfo = styled.div`
  margin: 1px;
  width: 60%;
  margin-left: 5px;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const CardQuan = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: var(--primary);
`;

export const CardPrice = styled.div`
  font-weight: 600;
  font-size: 9px;
  color: var(--primary);
  margin-top: 3px;
`;

export const Total = styled.div`
  width: 312px;
  height: 53px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  margin: 24px;
  display: flex;
  justify-content: space-evenly;

  p {
    margin-top: 15px;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
  }
  span {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: var(--primary);
    margin-top: 15px;
  }
`;

// export const SearchDiv = styled.div`
//   margin: 24px;
// `;
