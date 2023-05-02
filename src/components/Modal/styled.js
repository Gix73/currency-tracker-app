import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  /* display: flex; */
  display: ${(props) => (props.show == true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #938787a8;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  /* height: 1000px; */
  padding: 30px;
  background-color: black;
  border-radius: 20px;
`;

export const StyledSelect = styled.select`
  width: 200px;
  height: 50px;
  font-size: 30px;
  color: black;
  text-align: center;
`;

export const StyledOption = styled.option`
  color: black;
  font-size: 20px;
`;
export const TitleSpan = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: 400;
  font-size: 55px;
  line-height: 41px;
`;

export const ExchangeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: auto;
  padding-top: 20px;
`;

export const StyledDiv = styled.div`
  max-width: 200px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  color: black;
  background-color: white;
  text-align: center;
`;

export const InpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AmountInput = styled.input`
  max-width: 200px;
  width: 100%;
  height: 50px;
  font-size: 30px;
  color: black;
  text-align: center;
`;

export const InpSpan = styled.span`
  font-weight: 300;
  font-size: 35px;
`;

export const ResWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  cursor: pointer;
  border-radius: 20px;
  width: 50px;
  height: 50px;
  &:after,
  :before {
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    background: gray;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
