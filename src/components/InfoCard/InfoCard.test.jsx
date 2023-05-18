import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";
import { currencyUsd } from "@constants/currencyUsd";
import { exchangeValues } from "@constants/exchangeValues";
import btc_logo from "@assets/cardIcons/Bitcoin.svg";

describe("InfoCard convert function", () => {
  let showModal = false;
  let refConvertInfo = {
    current: {
      from: "",
      to: "",
    },
  };

  function setShowModal(data) {
    showModal = data;
  }

  function exchangeHandler(from, to) {
    refConvertInfo.current.from = from;
    refConvertInfo.current.to = to;
  }

  it("Should convert btc to usd", () => {
    render(
      <InfoCard
        firstVal="btc"
        name={exchangeValues.BTC.name}
        urlImg={btc_logo}
        data={currencyUsd.usd}
        onShow={setShowModal}
        onExchange={exchangeHandler}
      />
    );
    const result = screen.getByTestId("cardRes-btc").textContent;

    expect(result).toBe("$ 27027.027027");
  });
});
