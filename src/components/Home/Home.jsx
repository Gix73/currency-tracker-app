import axios from "axios";
import InfoCard from "./InfoCard/InfoCard";
import { CategorySpan, Container, HomeWrapper, Wrapper } from "./styled";
import { exchangeValues } from "../../constants/exchangeValues";
import { useEffect, useState } from "react";

const Home = ({ data }) => {
  const [exchange, setExchange] = useState({});

  useEffect(() => {
    setExchange((prevState) => data);
  }, [data]);

  function createItems() {
    let components = [];

    for (let key in exchangeValues) {
      components.push(
        <InfoCard
          key={key}
          firstVal={key.toLowerCase()}
          name={exchangeValues[key].name}
          sign={exchangeValues[key].sign}
          url={exchangeValues[key].img}
          data={exchange.usd}
        />
      );
    }

    return components;
  }

  return (
    <HomeWrapper>
      <Wrapper>
        <Container>
          <CategorySpan>Ações</CategorySpan>
        </Container>
        <Container>
          <InfoCard />
          <InfoCard />
        </Container>
        <Container>
          <CategorySpan>Cotações</CategorySpan>
        </Container>
        <Container>{createItems().map((e) => e)}</Container>
      </Wrapper>
    </HomeWrapper>
  );
};

export default Home;
