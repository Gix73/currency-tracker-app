import { render, screen } from "@testing-library/react";
import UpdateInfo from "./UpdateInfo";

describe("UpdateInfo component", () => {
  let dateNow = new Date().toLocaleTimeString();

  it("Should set time", () => {
    render(<UpdateInfo lastUpdate={dateNow} />);
    const result = screen.getByTestId("update-span").textContent;

    expect(result).toBe(`Last update at ${dateNow}`);
  });
});
