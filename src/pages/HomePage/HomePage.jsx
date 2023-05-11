import { useMemo } from "react";
import { PropTypes } from "prop-types";
import {
  CategorySpan,
  Container,
  HomePageWrapper,
  HomeWrapper,
  Wrapper,
} from "./styled";
import InfoCard from "@components/Home/InfoCard/InfoCard";

const HomePage = ({ data, onShow, onExchange, exchangeValues }) => {
  function createItems() {
    return Object.keys(exchangeValues).reduce(
      (comp, e) => [
        ...comp,
        <InfoCard
          key={e}
          firstVal={e.toLowerCase()}
          name={exchangeValues[e].name}
          sign={exchangeValues[e].sign}
          urlImg={exchangeValues[e].img}
          data={data.usd}
          onShow={onShow}
          onExchange={onExchange}
        />,
      ],
      []
    );
  }

  const currencyCards = useMemo(() => createItems(), [data]);

  return (
    <HomePageWrapper>
      <HomeWrapper>
        <Wrapper>
          {/* <Container>
            <CategorySpan>Ações</CategorySpan>
          </Container>
          <Container>
            <InfoCard onShow={onShow} onExchange={onExchange} />
            <InfoCard onShow={onShow} onExchange={onExchange} />
          </Container> */}
          <Container>
            <CategorySpan>Cotações</CategorySpan>
          </Container>
          <Container>{currencyCards}</Container>
        </Wrapper>
      </HomeWrapper>
    </HomePageWrapper>
  );
};

HomePage.propTypes = {
  data: PropTypes.object,
  onShow: PropTypes.func,
  onExchange: PropTypes.func,
  exchangeValues: PropTypes.object,
};

export default HomePage;
