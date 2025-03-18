import { render, screen } from "@testing-library/react";

import { Home } from "./Home";
import { Authentication } from "./Authentication/Authentication";
import { HeroBanner } from "./HeroBanner/HeroBanner";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

jest.mock("../../../contexts/AuthenticationContext");
jest.mock("./Authentication/Authentication");
jest.mock("./HeroBanner/HeroBanner");

describe("Home Component", () => {
  beforeEach(() => {
    Authentication.mockReturnValue(<div data-testid="authentication" />);
    HeroBanner.mockReturnValue(<div data-testid="hero-banner" />);
  });

  test("renders HeroBanner and Authentication when not authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: false });

    render(<Home />);

    const authentication = screen.getByTestId("authentication");
    expect(authentication).toBeInTheDocument();

    const heroBanner = screen.getByTestId("hero-banner");
    expect(heroBanner).toBeInTheDocument();
  });

  test("renders only HeroBanner when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });

    render(<Home />);

    const authentication = screen.queryByTestId("authentication");
    expect(authentication).not.toBeInTheDocument();

    const heroBanner = screen.getByTestId("hero-banner");
    expect(heroBanner).toBeInTheDocument();
  });
});
