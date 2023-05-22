import styled from "styled-components";

export const InfoWarapper = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  background: linear-gradient(
    252.93deg,
    #121212 11.77%,
    rgba(36, 121, 64, 0) 91.12%
  );
  filter: drop-shadow(rgba(52, 182, 25, 0.8) 0px 0px 1px);
  padding-top: 40px;
  padding-left: 63px;
  @media (max-width: 1060px) {
    height: auto;
    padding-top: 0px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  max-width: 1065px;
  width: 100%;
  height: 325px;
  @media (max-width: 1060px) {
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    height: 225px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 750px;
  width: 100%;
  height: 100%;
  margin-right: 65px;
  @media (max-width: 1060px) {
    align-items: flex-start;
    justify-content: space-evenly;
    max-width: 450px;
  }
`;

export const H1 = styled.h1`
  display: none;
`;

export const Name = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  max-width: 701px;
  width: 100%;
  max-height: 221px;
  @media (max-width: 1060px) {
    align-items: flex-start;
  }
`;

export const MainSpan = styled.div`
  font-weight: 600;
  font-size: 65px;
  line-height: 114px;
  background: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1060px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const LowSpan = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  line-height: 47px;
  max-width: 332px;
  width: 100%;
  /* height: 96px; */
  text-align: center;
  @media (max-width: 1060px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    line-height: 25px;
  }
`;

export const HugeLogo = styled.img`
  background: transparent;
  background-repeat: no-repeat;
  max-width: 300px;
  width: 100%;
  height: 100%;
  @media (max-width: 1060px) {
    max-width: 200px;
  }
  @media (max-width: 768px) {
    max-width: 100px;
  }
`;
