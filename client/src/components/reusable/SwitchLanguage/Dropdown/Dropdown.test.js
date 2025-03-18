import { render, fireEvent, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown Component", () => {
  const mockLanguageChangeHandler = jest.fn();

  test("renders the dropdown with language options", () => {
    render(
      <Dropdown
        isTransitioning={false}
        language="English"
        languageChangeHandler={mockLanguageChangeHandler}
        variant="to-the-bottom"
      />
    );

    const chineseFlag = screen.getByAltText("Chinese flag");
    expect(chineseFlag).toBeInTheDocument();

    const bulgarianFlag = screen.getByAltText("Bulgarian flag");
    expect(bulgarianFlag).toBeInTheDocument();
  });

  test("calls languageChangeHandler when a language is clicked", () => {
    render(
      <Dropdown
        isTransitioning={false}
        language="English"
        languageChangeHandler={mockLanguageChangeHandler}
        variant="to-the-bottom"
      />
    );

    const chineseFlag = screen.getByAltText("Chinese flag");
    fireEvent.click(chineseFlag);

    expect(mockLanguageChangeHandler).toHaveBeenCalledWith("Chinese");
  });
});
