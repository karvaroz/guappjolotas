import styled from "styled-components";
import "../index.css";

// CATEGORIES

export const NavSelectFood = styled.nav`
  margin: 24px;
  display: flex;
  justify-content: space-between;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const ItemDesImg = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  width: 120px;
  height: auto;
  position: relative;
  top: -50px;
  background: transparent;
  text-align: center;
`;

export const ItemH3 = styled.h3`
  line-height: 24px;
  text-align: center;
`;

export const ItemP = styled.p`
  color: var(--primary);
  font-weight: 600;
`;

export const ItemControls = styled.div`
  margin-top: -20px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 42px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`;

export const ControlsBtn = styled.button`
  border: 2px solid #0d0d0d;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
`;

export const ItemTaste = styled.div`
  margin: 24px;
`;

export const ItemTasteP = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 14px;
`;

export const ItemTasteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 150px;
  grid-gap: 10px;
  cursor: pointer;
  img:hover {
    opacity: 0.3;
  }
`;

export const ItemCombo = styled.div`
  margin: 20px;
  height: 485px;
`;

export const ComboP = styled.p`
  color: gray;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const ComboDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const ItemDiv = styled.div`
  width: 150px;
  height: 130px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  margin: 2px;
  display: flex;
`;

export const ItemInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const ItemInfoH3 = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
`;

export const ItemInfoP = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: var(--primary);
  margin-top: 5px;
`;

export const BtnPay = styled.button`
  width: 212px;
  height: 45px;
  border-radius: 40px;
  margin-bottom: 10%;
  background: var(--primary);
  color: var(--bg-color);
  padding: 14px;
  border: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    opacity: 0.8;
  }
`;