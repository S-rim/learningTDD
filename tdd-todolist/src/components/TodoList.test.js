import React from "react";
import TodoList from "./TodoList";
import { render, fireEvent } from "@testing-library/react";

describe("<TodoList />", () => {
  // todo배열에 데이터를 넣어서 테스트
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 시작하기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  it("render todos", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(<TodoList todos={sampleTodos} onRemove={onRemove} onToggle={onToggle} />);

    fireEvent.click(getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);
    fireEvent.click(getAllByText("삭제")[0]); // 첫번째 삭제 버튼을 클릭
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
