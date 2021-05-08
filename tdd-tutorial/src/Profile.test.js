import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="S-rim" name="신서림" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="S-rim" name="신서림" />);
    // 해당 텍스트 가지거나 정규식을 통과하는 엘리먼트가 있는지 확인
    utils.getByText("S-rim");
    utils.getByText("(신서림)");
    utils.getByText(/신/);
  });
});
