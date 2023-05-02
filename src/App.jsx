import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppWrapper, Container } from "./styled";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalConverter from "./components/Modal/ModalConverter";

const App = () => {
  const [exchange, setExchange] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [listTo, setListTo] = useState([]);
  const exchangeData = useRef({ from: "", to: "" });

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
      )
      .then((res) => {
        setExchange(() => res.data);
        setListTo(() => Object.keys(res.data.usd));
      });
    console.log(exchange);
    console.log("App Mount");
    return () => {
      console.log("App UnMount");
    };
  }, []);

  function exchangeHandler(from, to) {
    exchangeData.current.from = from;
    exchangeData.current.to = to;
    console.log(exchangeData);
  }

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={exchange}
                showModal={setShowModal}
                exchangeHandler={exchangeHandler}
              />
            }
          />
          <Route path="/timeline" element={<></>} />
          {/*<Route path="/" element={} />         */}
        </Routes>
        <Footer />
      </Container>
      {
        <ModalConverter
          show={showModal}
          closeHandler={setShowModal}
          exchangeData={exchangeData.current}
          chooseList={listTo}
          convTo={exchangeData.current.to}
          data={exchange.usd}
        />
      }
      {/* {showModal && (
        <ModalConverter
          closeHandler={() => {
            setShowModal((close) => !close);
          }}
        />
      )} */}
    </AppWrapper>
  );
};

export default App;
