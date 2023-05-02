import styled from "styled-components";
import icon from "../../../assets/cardIcons/Dollar.svg";

export const InfoCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  background: #202025;
  border: 1px solid #474747;
  border-radius: 8px;
`;

export const CardImg = styled.div`
  width: 80px;
  height: 80px;
  background-image: ${(props) =>
    props.url ? `url('${props.url}');` : `url("${icon}");`};
  background-repeat: no-repeat;
  padding-right: 110px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const InfoSpan = styled.span`
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;
`;

export const CostSpan = styled.span`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;
`;
