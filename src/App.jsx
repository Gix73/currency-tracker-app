import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppWrapper, Container } from "./styled";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [exchange, setExchange] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
      )
      .then((res) => {
        setExchange((prevState) => res.data);
      });
  }, []);
  console.log(exchange);

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage data={exchange} />} />
          <Route path="/timeline" element={<></>} />
          {/*<Route path="/" element={} />         */}
        </Routes>
        <Footer />
      </Container>
    </AppWrapper>
  );
};

export default App;
