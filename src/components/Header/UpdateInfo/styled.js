import styled from "styled-components";
import logo from "../../../assets/updaterImg.svg";

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
  width: 510px;
`;

export const Span = styled.span`
  font-size: 33px;
  line-height: 41px;
`;

export const UpdateImg = styled.div`
  width: 33px;
  height: 34px;
  border-radius: 50%;
  background-image: url(${logo});
`;
