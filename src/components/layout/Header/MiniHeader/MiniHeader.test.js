import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import { MiniHeader } from "./MiniHeader";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../reusable/NormalTitle/NormalTitle", () => ({
  NormalTitle: ({ title }) => <h1>{title}</h1>,
}));

describe("MiniHeader Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders the Link component with correct props", () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    const linkElement = screen.getByRole("link", { name: /Go To Bag/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/users/shopping-bag");
  });

  test("renders the FontAwesomeIcon with the correct icon", () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    const iconElement = screen.getByRole("img");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("logo-image");
  });

  test("renders the NormalTitle component with correct title", () => {
    render(
      <Router>
        <MiniHeader />
      </Router>
    );

    const titleElement = screen.getByText("Go to Bag");
    expect(titleElement).toBeInTheDocument();
  });
});
