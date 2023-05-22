import styled from "styled-components";

export const UpdateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-top: 50px;
`;

export const UpdaterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 33px;
  line-height: 41px;
  padding-left: 20px;
  @media (max-width: 1060px) {
    font-size: 23px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
    padding-left: 15px;
  }
`;

export const UpdateImg = styled.img`
  width: 33px;
  height: 34px;
  border-radius: 50%;
  background-repeat: no-repeat;
  @media (max-width: 1060px) {
    width: 20px;
    height: 20px;
  }
`;
