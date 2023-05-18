import { fireEvent, render, screen } from "@testing-library/react";
import ToggleButton from "./ToggleButton";

describe("ToggleButton component", () => {
  it("Check theme state changing", () => {
    let theme = "dark";

    function toggletheme(color) {
      theme = color;
    }

    render(<ToggleButton toggleTheme={toggletheme} />);
    const Inp = screen.getByRole("checkbox");
    fireEvent.click(Inp);

    expect(theme).toBe("light");
    fireEvent.click(Inp);
    expect(theme).toBe("dark");
  });
});
