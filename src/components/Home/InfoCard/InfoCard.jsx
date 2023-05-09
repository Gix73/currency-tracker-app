import { useEffect } from "react";
import {
  CardImg,
  CostSpan,
  InfoCardWrapper,
  InfoContainer,
  InfoSpan,
} from "./styled";

const InfoCard = ({ firstVal, name, urlImg, data, onShow, onExchange }) => {
  function convert() {
    return (1 / data[firstVal]).toFixed(6);
  }

  return (
    <InfoCardWrapper
      onClick={() => {
        onShow(true);
        onExchange(firstVal, "usd");
      }}
    >
      <CardImg url={urlImg} />
      <InfoContainer>
        <InfoSpan>{name}</InfoSpan>
        <CostSpan>
          {"$ "}
          {data ? convert() : ""}
        </CostSpan>
      </InfoContainer>
    </InfoCardWrapper>
  );
};

export default InfoCard;
