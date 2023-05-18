import styled from "styled-components";

export const InfoCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  background: ${(props) => props.theme.exchangeColor};
  border: 1px solid #474747;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CardImg = styled.img`
  background: transparent;
  background-repeat: no-repeat;
  width: 80px;
  height: 100%;
  @media (max-width: 1060px) {
    width: 50px;
  }
  @media (max-width: 768px) {
    width: 35px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-left: 40px;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const InfoSpan = styled.span`
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;
  @media (max-width: 1060px) {
    font-size: 20px;
    line-height: normal;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CostSpan = styled.span`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;
  @media (max-width: 1060px) {
    font-size: 20px;
    line-height: normal;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
