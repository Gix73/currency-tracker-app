import {
  CardImg,
  CostSpan,
  InfoCardWrapper,
  InfoContainer,
  InfoSpan,
} from "./styled";

const InfoCard = () => {
  return (
    <InfoCardWrapper>
      <CardImg />
      <InfoContainer>
        <InfoSpan>Índice Bovespa</InfoSpan>
        <CostSpan>0.15%</CostSpan>
      </InfoContainer>
    </InfoCardWrapper>
  );
};

export default InfoCard;
