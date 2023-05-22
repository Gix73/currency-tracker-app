import { memo } from "react";
import logo from "@assets/hugeLogo.svg";
import {
  H1,
  HugeLogo,
  Info,
  InfoContainer,
  InfoWarapper,
  LowSpan,
  MainSpan,
  Name,
} from "./styled";

const SiteInfo = () => {
  return (
    <InfoWarapper>
      <InfoContainer>
        <Info>
          <H1>Modsen Currency Treacker</H1>
          <Name>
            <MainSpan>Modsen Currency</MainSpan>
            <MainSpan>Tracker</MainSpan>
          </Name>
          <LowSpan>Cotacão do dólar e outras moedas internacionais.</LowSpan>
        </Info>
        <HugeLogo src={logo} alt="logo" />
      </InfoContainer>
    </InfoWarapper>
  );
};

export default memo(SiteInfo);
