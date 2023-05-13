import { Routes, Route } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { AppWrapper, Container } from "./styled";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalConverter from "@components/Modal/ModalConverter";
import { exchangeValues } from "@constants/exchangeValues";
import { ThemeProvider } from "styled-components";
import { theme } from "@constants/themeData";
import Loading from "@components/Loading/Loading";

const HomePage = lazy(() => import("@pages/HomePage/HomePage"));
const TimelinePage = lazy(() => import("@pages/TimelinePage/TimelinePage"));
const BankCardPage = lazy(() => import("@pages/BankCardPage/BankCardPage"));
const ContactsPage = lazy(() => import("@pages/ContactsPage/ContactsPage"));

const App = () => {
  const [currencyData, setCurrencyData] = useState({});
  const [candleData, setCandleData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [listOfCurrencies, setListOfCurrencies] = useState([]);
  const [chartCurrency, setChartCurrency] = useState("BTC");
  const [themeColor, setThemeColor] = useState("dark");
  const [lastUpdateTime, setLastUpdateTime] = useState(
    new Date().toLocaleTimeString()
  );
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
    axios
      .get(
        `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${chartCurrency}_USD/latest?period_id=1MTH`,
        {
          headers: {
            "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_KEY,
          },
        }
      )
      .then((res) => {
        setCandleData(() => res.data);
      });
    setLastUpdateTime(new Date().toLocaleTimeString());
  }, [chartCurrency]);

  function exchangeHandler(from, to) {
    exchangeData.current.from = from;
    exchangeData.current.to = to;
  }

  return (
    <ThemeProvider theme={theme[themeColor]}>
      <AppWrapper>
        <Container>
          <Header toggleTheme={setThemeColor} lastUpdate={lastUpdateTime} />
          <Suspense fallback={<Loading />}>
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
              <Route
                path="/bankcard"
                element={<BankCardPage exchangeValues={exchangeValues} />}
              />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </Container>
        {
          <ModalConverter
            show={showModal}
            closeHandler={setShowModal}
            exchangeData={exchangeData.current}
            chooseList={listOfCurrencies}
            data={currencyData.usd}
          />
        }
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
