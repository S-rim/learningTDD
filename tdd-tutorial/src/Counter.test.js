import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  it("number and buttons", () => {
    const utils = render(<Counter />);
    utils.getByText("0");
    utils.getByText("+1");
    utils.getByText("-1");
  });
  it("onIncrease", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const increaseButton = utils.getByText("+1");

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(number).toHaveTextContent("2");
    expect(number.textContent).toBe("2");
  });
  it("onDecrease", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const decreaseButton = utils.getByText("-1");

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    expect(number).toHaveTextContent("-2");
  });
});
