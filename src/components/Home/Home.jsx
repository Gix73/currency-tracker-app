import InfoCard from "./InfoCard/InfoCard";
import { CategorySpan, Container, HomeWrapper, Wrapper } from "./styled";

const Home = () => {
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
        <Container>
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Container>
      </Wrapper>
    </HomeWrapper>
  );
};

export default Home;
