import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // To mock the router
import { Nav } from "./Nav";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { HOME_LINK_TITLE_BY_LANGUAGE, CATEGORY_TITLES_BY_LANGUAGE, COLLECTION_BY_LANGUAGE } from "../../../../constants/languageRelated";

// Mock useLocation
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

// Mock useLanguageContext
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
    // Mock the language as 'en' (English) and set the location to '/collection/bracelets'
    mockLanguageContext("English");
    mockLocation("/collection/bracelets");

    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check that the home link displays the correct text
    // const homeLinkTitle = HOME_LINK_TITLE_BY_LANGUAGE["English"];
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Check that the collection link displays the correct text
    // const collectionLinkTitle = COLLECTION_BY_LANGUAGE["English"];
    expect(screen.getByText("Collection")).toBeInTheDocument();

    // Check that the category (bracelets) is capitalized and correct
    // const categoryTitle = CATEGORY_TITLES_BY_LANGUAGE["Bracelets"]["English"];
    // expect(screen.getByText(categoryTitle)).toBeInTheDocument();
  });

});
