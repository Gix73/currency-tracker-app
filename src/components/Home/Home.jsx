import axios from "axios";
import InfoCard from "./InfoCard/InfoCard";
import { CategorySpan, Container, HomeWrapper, Wrapper } from "./styled";
import { exchangeValues } from "../../constants/exchangeValues";
import { useEffect } from "react";

const Home = ({ data, showModal, exchangeHandler }) => {
  useEffect(() => {
    console.log("Home Mount");
    return () => {
      console.log("Home UnMount");
    };
  }),
    [];

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
          data={data.usd}
          showModal={showModal}
          exchangeHandler={exchangeHandler}
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
          <InfoCard showModal={showModal} exchangeHandler={exchangeHandler} />
          <InfoCard showModal={showModal} exchangeHandler={exchangeHandler} />
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
