import { render, screen, fireEvent } from "@testing-library/react";

import { SectionContainer } from "./SectionContainer";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: ({ icon, className }) => (
    <i className={className} data-icon={icon.iconName} />
  ),
}));

describe("SectionContainer Component", () => {
  test("renders with correct title, button text, and icon", () => {
    render(
      <SectionContainer
        sectionTitle="My Section Title"
        callBackFunction={() => {}}
        icon={faPlus}
        buttonTitle="Click Me"
      />
    );

    expect(screen.getByText("My Section Title")).toBeInTheDocument();

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();

    const icon = screen
      .getByRole("button")
      .querySelector('i[data-icon="plus"]');
    expect(icon).toBeInTheDocument();
  });

  test("triggers callBackFunction on button click", () => {
    const mockCallBackFunction = jest.fn();
    render(
      <SectionContainer
        sectionTitle="My Section Title"
        callBackFunction={mockCallBackFunction}
        icon={faPlus}
        buttonTitle="Click Me"
      />
    );

    fireEvent.click(screen.getByText("Click Me"));

    expect(mockCallBackFunction).toHaveBeenCalledTimes(1);
  });
});
