import { useEffect } from "react";
import {
  CardImg,
  CostSpan,
  InfoCardWrapper,
  InfoContainer,
  InfoSpan,
} from "./styled";

const InfoCard = ({
  firstVal,
  name,
  sign,
  url,
  data,
  showModal,
  exchangeHandler,
}) => {
  useEffect(() => {
    console.log("InfoCard Mount");
    return () => {
      console.log("InfoCard UnMount");
    };
  }),
    [];

  function convert() {
    return (1 / data[firstVal]).toFixed(6);
  }

  return (
    <InfoCardWrapper
      onClick={() => {
        // showModal("hi");
        showModal(true);
        exchangeHandler(firstVal, "usd");
      }}
    >
      <CardImg url={url} />
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
