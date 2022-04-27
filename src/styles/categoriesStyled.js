import styled from "styled-components";
// CATEGORIES

export const NavCag = styled.nav`
  margin: 24px;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled.img`
  width: 64px;
  height: 64px;
`;

export const SearchDiv = styled.div`
  margin: 24px;
`;

export const SearchH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  color: var(--black);
  margin-bottom: 32px;
  margin-left:10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  background: #e7e7e7;
  border-radius: 30px;
  border: none;
  ::placeholder {
    color: #9a9a9d;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
  }
`;

export const SearchInpImg = styled.img`
  width: 17.89px;
  height: 18px;
  position: absolute;
  left: 13%;
  top: 23.1%;
`;

export const FoodMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 24px;
  height: 42px;
`;

export const MenuLiA = styled.a`
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #9a9a9d;
  cursor: pointer;
  :active {
    color: var(--primary);
  }
`;

export const MenuLi = styled.li`
  :active {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }
`;

export const FoodResults = styled.div`
  width: 312px;
  height: 800px;
  margin: 24px;
  overflow-y: auto;
`;

export const CardItem = styled.div`
  display: flex;
  height: 112px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  margin-bottom: 8px;
`;

export const CardItemImg = styled.div`
  margin: 10px;
  background: #ffffff;
`;

export const CardImg = styled.img`
  position: static;
  width: 80px;
  height: 80px;
`;

export const CardItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  width: 184px;
  height: 46px;
  gap: 8px;
  background: #ffffff;
`;

export const CardInfoH3 = styled.h3`
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: var(--black);
  background: #ffffff;
`;

export const CardInfoP = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--primary);
  background: #ffffff;
`;