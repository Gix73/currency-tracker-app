import styled from "styled-components";
import bitcoin_icon from "../../assets/cardIcons/Bitcoin.svg";
//ethereum-eth.svg
export const TimelineWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding: 60px 80px;
`;

export const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 50px;
  max-width: 275px;
  position: relative;
  &::before {
    content: "<";
    position: absolute;
    top: 0;
    right: 15px;
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    border-style: solid;
    border-width: 0 3px 3px 0;
    border-color: #9e9e9e transparent transparent transparent;
    pointer-events: none;
    font-size: 30px;
    color: #9e9e9e;
  }
`;

export const ValueSelector = styled.select`
  width: 100%;
  height: 100%;
  max-width: 275px;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  border-color: #9e9e9e;
  padding: 0px 12px;
  appearance: none;
`;

export const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  background-image: ${(props) =>
    props.urlImg ? `url('${props.urlImg}');` : `url("${bitcoin_icon}");`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 50px;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;
`;

export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 160px;
`;

export const ChartContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
