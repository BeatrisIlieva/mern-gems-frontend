import { render, screen, fireEvent } from "@testing-library/react";
import { QuestionMark } from "./QuestionMark";
import { Text } from "./Text/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Mock the Text component
jest.mock("./Text/Text", () => ({
  Text: ({ text }) => <span>{text}</span>,
}));

describe("QuestionMark Component", () => {
  const textContent = "Info Text";

  it("should render the question mark icon", () => {
    render(<QuestionMark text={textContent} />);
    const icon = screen.getByRole("img", { hidden: true }); // FontAwesomeIcon is usually rendered as an <svg>
    expect(icon).toBeInTheDocument();
  });

  it("should show the text when mouse enters the icon and hide when mouse leaves", () => {
    render(<QuestionMark text={textContent} />);

    // Text should not be visible initially
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();

    const icon = screen.getByRole("img", { hidden: true });

    // Simulate mouse enter (hover)
    fireEvent.mouseEnter(icon);
    expect(screen.getByText(textContent)).toBeInTheDocument();

    // Simulate mouse leave
    fireEvent.mouseLeave(icon);
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();
  });

  it("should toggle the text visibility on touch start and end", () => {
    render(<QuestionMark text={textContent} />);

    // Text should not be visible initially
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();

    const icon = screen.getByRole("img", { hidden: true });

    // Simulate touch start (show text)
    fireEvent.touchStart(icon);
    expect(screen.getByText(textContent)).toBeInTheDocument();

    // Simulate touch end (hide text)
    fireEvent.touchEnd(icon);
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();
  });
});
