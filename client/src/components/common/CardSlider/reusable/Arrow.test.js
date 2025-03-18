import { render, screen, fireEvent } from "@testing-library/react";

import { Arrow } from "./Arrow";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

describe("Arrow component", () => {
  it("should render the FontAwesome icon", () => {
    render(<Arrow icon={faArrowRight} callBackFunction={() => {}} />);

    const arrowIcon = screen.getByTestId("arrow-icon");
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveClass("fa-arrow-right");
  });

  it("should trigger callBackFunction on click", () => {
    const mockCallBack = jest.fn();

    render(<Arrow icon={faArrowRight} callBackFunction={mockCallBack} />);

    const arrowIcon = screen.getByTestId("arrow-icon");

    fireEvent.click(arrowIcon);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
