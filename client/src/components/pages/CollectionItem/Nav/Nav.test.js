import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useLocation } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

describe("Nav Component", () => {
  const mockLanguageContext = (language) => {
    useLanguageContext.mockReturnValue({
      language,
    });
  };

  const mockLocation = (pathname) => {
    useLocation.mockReturnValue({
      pathname,
    });
  };

  it("renders the correct titles based on the language and location", () => {
    mockLanguageContext("English");
    mockLocation("/collection/bracelets");

    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();

    expect(screen.getByText("Collection")).toBeInTheDocument();
  });
});
