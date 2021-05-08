import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  const setUp = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요");
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button,
    };
  };

  it("has input and button", () => {
    const { input, button } = setUp();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("change input", () => {
    const { input } = setUp();
    fireEvent.change(input, {
      target: {
        value: "TDD 시작하기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 시작하기");
  });
  it("calls onInsert and clear input", () => {
    const onInsert = jest.fn();
    const { input, button } = setUp({ onInsert });
    fireEvent.change(input, {
      target: {
        value: "TDD 시작하기",
      },
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 시작하기");
    expect(input).toHaveAttribute("value", "");
  });
});
