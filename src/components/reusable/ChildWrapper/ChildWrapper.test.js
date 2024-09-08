import { render, screen } from "@testing-library/react";

import { ChildWrapper } from "./ChildWrapper";

describe("ChildWrapper Component", () => {
  test("renders children correctly", () => {
    render(
      <ChildWrapper>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </ChildWrapper>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
    expect(screen.getByText("Child 3")).toBeInTheDocument();
  });
});
