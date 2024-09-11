import { render, screen, fireEvent } from "@testing-library/react";

import { QuestionMark } from "./QuestionMark";

jest.mock("./Text/Text", () => ({
  Text: ({ text }) => <span>{text}</span>,
}));

describe("QuestionMark Component", () => {
  const textContent = "Info Text";

  it("should render the question mark icon", () => {
    render(<QuestionMark text={textContent} />);
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it("should show the text when mouse enters the icon and hide when mouse leaves", () => {
    render(<QuestionMark text={textContent} />);

    expect(screen.queryByText(textContent)).not.toBeInTheDocument();

    const icon = screen.getByRole("img", { hidden: true });

    fireEvent.mouseEnter(icon);
    expect(screen.getByText(textContent)).toBeInTheDocument();

    fireEvent.mouseLeave(icon);
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();
  });

  it("should toggle the text visibility on touch start and end", () => {
    render(<QuestionMark text={textContent} />);

    expect(screen.queryByText(textContent)).not.toBeInTheDocument();

    const icon = screen.getByRole("img", { hidden: true });

    fireEvent.touchStart(icon);
    expect(screen.getByText(textContent)).toBeInTheDocument();

    fireEvent.touchEnd(icon);
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();
  });
});
