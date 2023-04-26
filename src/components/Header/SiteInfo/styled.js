import styled from "styled-components";
import logo from "../../../assets/hugeLogo.svg";

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
`;

export const InfoContainer = styled.div`
  display: flex;
  max-width: 1065px;
  width: 100%;
  height: 325px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 750px;
  height: 100%;
  margin-right: 65px;
`;

export const H1 = styled.h1`
  display: none;
`;

export const Name = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 701px;
  height: 221px;
`;

export const MainSpan = styled.div`
  font-weight: 600;
  font-size: 76px;
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
`;

export const LowSpan = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  line-height: 47px;
  width: 332px;
  height: 96px;
  text-align: center;
`;

export const HugeLogo = styled.div`
  background-image: url("${logo}");
  width: 299.43px;
  height: 312.74px;
`;
