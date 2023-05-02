import usd_logo from "../assets/cardIcons/Dollar.svg";
import ars_logo from "../assets/cardIcons/Peso_Argentino.svg";
import cad_logo from "../assets/cardIcons/Canadian_Dollar.svg";
import jpy_logo from "../assets/cardIcons/Yen.svg";
import aud_logo from "../assets/cardIcons/Australian_Dollar.svg";
import cny_logo from "../assets/cardIcons/Won.svg";
import eur_logo from "../assets/cardIcons/Euro.svg";
import btc_logo from "../assets/cardIcons/Bitcoin.svg";
import gbp_logo from "../assets/cardIcons/Libra.svg";
// import ars_logo from "../assets/cardIcons/";
// import ars_logo from "../assets/cardIcons/";

// export const exchangeValue = [
//   "USD",
//   "ARS",
//   "CAD",
//   "JPY",
//   "AUD",
//   "CNY",
//   "EUR",
//   "BTC",
//   "GBP",
// ];

export const exchangeValues = {
  USD: { name: "Dólar comercial", sign: "$", img: usd_logo },
  ARS: { name: "Peso Argentino", sign: "P$", img: ars_logo },
  CAD: { name: "Dólar canadense", sign: "С$", img: cad_logo },
  JPY: { name: "Yen", sign: "¥", img: jpy_logo },
  AUD: { name: "Dólar Australiano", sign: "A$", img: aud_logo },
  CNY: { name: "Yuan", sign: "¥", img: cny_logo },
  EUR: { name: "Euro", sign: "€", img: eur_logo },
  BTC: { name: "Bitcoin", sign: "₿", img: btc_logo },
  GBP: { name: "Libra", sign: "₱", img: gbp_logo },
};
