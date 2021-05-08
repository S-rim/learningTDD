import React from "react";
import TodoItem from "./TodoItem";
import { render, fireEvent } from "@testing-library/react";

describe("<TodoItem />", () => {
  const sampleTodo = {
    id: 1,
    text: "TDD 시작하기",
    done: false,
  };

  const setUp = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const { getByText } = utils;
    const todo = props.todo || initialProps.todo;
    const span = getByText(todo.text);
    const button = getByText("삭제");
    return {
      ...utils,
      span,
      button,
    };
  };

  it("span and button", () => {
    const { span, button } = setUp();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("show line on span done is true", () => {
    const { span } = setUp({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle("text-decoration : line-through;");
  });
  it("show line on span done is false", () => {
    const { span } = setUp({ todo: { ...sampleTodo, done: false } });
    // not은 특정 조건이 만족하지 않아야 한다는 뜻
    expect(span).not.toHaveStyle("text-decoration : line-through;");
  });
  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { span } = setUp({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });
  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { button } = setUp({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
