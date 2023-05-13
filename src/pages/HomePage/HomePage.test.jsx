import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { currencyUsd } from "../../constants/currencyUsd";
import { exchangeValues } from "../../constants/exchangeValues";

describe("HomePage components", () => {
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

  it("Should open modal window", () => {
    render(
      <HomePage
        data={currencyUsd}
        onShow={setShowModal}
        onExchange={exchangeHandler}
        exchangeValues={exchangeValues}
      />
    );
    const usdCard = screen.getByText("Bitcoin");
    fireEvent.click(usdCard);

    expect(showModal).toBe(true);
  });
});
