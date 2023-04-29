import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppWrapper, Container } from "./styled";

const App = () => {
  return (
    <AppWrapper>
      <Container>
        <Header />
        <Footer />
      </Container>
    </AppWrapper>
  );
};

export default App;
