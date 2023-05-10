import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding: 60px 80px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 38px;
  line-height: 57px;
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.exchangeColor};
  border-radius: 8px;
  border: 0px;
  color: ${(props) => props.theme.text};
  padding-left: 30px;
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;
  z-index: 999;
`;

export const ItemsWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

export const SearchItem = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: ${(props) => props.theme.exchangeColor};
  padding-left: 30px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
`;
