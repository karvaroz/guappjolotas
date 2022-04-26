import styled from "styled-components";
import "../index.css";
// SEARCH

export const SearchDiv = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p: {
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
  }
`;

export const SearchInput = styled.input`
  width: 60%;
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

export const SearchResults = styled.div`
  margin: 24px;
  height: 600px;
`;