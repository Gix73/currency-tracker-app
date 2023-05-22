import {
  CardImg,
  CostSpan,
  InfoCardWrapper,
  InfoContainer,
  InfoSpan,
} from "./styled";
import { PropTypes } from "prop-types";

const InfoCard = ({ firstVal, name, urlImg, data, onShow, onExchange }) => {
  const convert = () => (1 / data[firstVal]).toFixed(6);

  function handleClick() {
    onShow(true);
    onExchange(firstVal, "usd");
  }

  return (
    <InfoCardWrapper id={`card-${firstVal}`} onClick={handleClick}>
      <CardImg src={urlImg} alt="currency_logo" />
      <InfoContainer>
        <InfoSpan>{name}</InfoSpan>
        <CostSpan data-testid={`cardRes-${firstVal}`}>
          {"$ "}
          {data ? convert() : ""}
        </CostSpan>
      </InfoContainer>
    </InfoCardWrapper>
  );
};

InfoCard.propTypes = {
  firstVal: PropTypes.string,
  onShow: PropTypes.func,
  onExchange: PropTypes.func,
  data: PropTypes.object,
  name: PropTypes.string,
  urlImg: PropTypes.string,
};

export default InfoCard;
