import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./globalStyled.js";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Global />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);

if ("development" && module && module.hot) {
  module.hot.accept();
}
