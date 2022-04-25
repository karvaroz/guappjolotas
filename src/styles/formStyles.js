import styled from "styled-components";

// FORM AND LOGIN
export const FormWrapper = styled.form`
  margin: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormImg = styled.img`
  width: 150px;
  height: auto;
  margin: 24px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  background: #e7e7e7;
  border-radius: 30px;
  margin-bottom: 5px;
`;

export const BtnLogin = styled.button`
  background: #fa4a0c;
  border-radius: 40px;
  width: 212px;
  height: 39px;
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #f6f6f9;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;

  &:hover {
    background: #fa4a0c;
    opacity: 0.5;
    border-radius: 40px;
  }
`;
