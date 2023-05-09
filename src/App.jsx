import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppWrapper, Container } from "./styled";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalConverter from "./components/Modal/ModalConverter";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
import { exchangeValues } from "./constants/exchangeValues";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/themeData";

const App = () => {
  const [currencyData, setCurrencyData] = useState({});
  const [candleData, setCandleData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [listOfCurrencies, setListOfCurrencies] = useState([]);
  const [chartCurrency, setChartCurrency] = useState("BTC");
  const [themeColor, setThemeColor] = useState("dark");
  const exchangeData = useRef({ from: "", to: "" });

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
      )
      .then((res) => {
        setCurrencyData(() => res.data);
        setListOfCurrencies(() => Object.keys(res.data.usd));
      });
  }, []);

  useEffect(() => {
    // axios
    //   .get(
    //     `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${chartCurrency}_USD/latest?period_id=1DAY`,
    //     {
    //       headers: {
    //         "X-CoinAPI-Key": "CB362F47-896C-4102-B4FE-F056876DD518",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     setCandleData(() => res.data);
    //   });
  }, [chartCurrency]);

  function exchangeHandler(from, to) {
    exchangeData.current.from = from;
    exchangeData.current.to = to;
    console.log(exchangeData);
  }

  return (
    <ThemeProvider theme={theme[themeColor]}>
      <AppWrapper>
        <Container>
          <Header toggleTheme={setThemeColor} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  data={currencyData}
                  onShow={setShowModal}
                  onExchange={exchangeHandler}
                  exchangeValues={exchangeValues}
                />
              }
            />
            <Route
              path="/timeline"
              element={
                <TimelinePage
                  candleData={candleData}
                  onCurrencyChange={setChartCurrency}
                  chartCurrency={chartCurrency}
                  exchangeValues={exchangeValues}
                />
              }
            />
            {/*<Route path="/" element={} />         */}
          </Routes>
          <Footer />
        </Container>
        {
          <ModalConverter
            show={showModal}
            closeHandler={setShowModal}
            exchangeData={exchangeData.current}
            chooseList={listOfCurrencies}
            convTo={exchangeData.current.to}
            data={currencyData.usd}
          />
        }
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
