import {
  CardImg,
  CostSpan,
  InfoCardWrapper,
  InfoContainer,
  InfoSpan,
} from "./styled";

const InfoCard = ({ firstVal, name, sign, url, data }) => {
  function convert() {
    return (1 / data[firstVal]).toFixed(6);
  }

  return (
    <InfoCardWrapper>
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
