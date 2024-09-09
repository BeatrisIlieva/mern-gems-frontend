import { render, screen, fireEvent } from "@testing-library/react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { Arrow } from "./Arrow";

describe("Arrow component", () => {
  it("should render the FontAwesome icon", () => {
    render(<Arrow icon={faArrowRight} callBackFunction={() => {}} />);
    
    // Check if the icon is rendered
    const arrowIcon = screen.getByTestId("arrow-icon");
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveClass("fa-arrow-right"); // FontAwesome icon specific class
  });

  it("should trigger callBackFunction on click", () => {
    const mockCallBack = jest.fn();
    
    render(<Arrow icon={faArrowRight} callBackFunction={mockCallBack} />);
    
    const arrowIcon = screen.getByTestId("arrow-icon");
    
    // Simulate a click event
    fireEvent.click(arrowIcon);
    
    // Ensure that the callback function is called on click
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
