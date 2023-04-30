import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppWrapper, Container } from "./styled";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <AppWrapper>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={} />
          <Route path="/" element={} />         */}
        </Routes>
        <Footer />
      </Container>
    </AppWrapper>
  );
};

export default App;
