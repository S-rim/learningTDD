import React from "react";
import TodoApp from "./TodoApp";
import { render, fireEvent } from "@testing-library/react";

describe("<TodoApp />", () => {
  it("render TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByTestId("TodoList");
    getByText("등록");
  });

  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("TDD 시작하기");
    getByText("react-testing-library 사용하기");
  });

  it("add new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(getByText("등록"));
    getByText("새 항목 추가하기");
  });

  it("toggle todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("TDD 시작하기");
    //클릭 시 선 그어지는 스타일이 적용되는지, 또 클릭했을 때 없어지는 확인
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });

  it("remove todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("TDD 시작하기");
    const removeButton = todoText.nextSibling;
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
