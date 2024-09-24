import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useParams, useLocation } from "react-router-dom";

import { CollectionItem } from "./CollectionItem";
import { useJewelry } from "../../../hooks/useJewelry";

jest.mock("./Nav/Nav", () => ({
  Nav: () => <div data-testid="nav"></div>,
}));

jest.mock("./MiniBag/MiniBag", () => ({
  MiniBag: ({ toggleDisplayMiniBagPopup }) => (
    <div data-testid="mini-bag" onClick={toggleDisplayMiniBagPopup}></div>
  ),
}));

jest.mock("../Page404/Page404", () => ({
  Page404: () => <div data-testid="page-404"></div>,
}));

jest.mock("./Images/Images", () => ({
  Images: ({ jewelriesByCategory }) => (
    <div data-testid="images">{jewelriesByCategory.length} images</div>
  ),
}));

jest.mock("./InfoAndAction/InfoAndAction", () => ({
  InfoAndAction: ({ jewelriesByCategory, toggleDisplayPopup }) => (
    <div data-testid="info-and-action" onClick={toggleDisplayPopup}>
      {jewelriesByCategory.length} info and action
    </div>
  ),
}));

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useLocation: jest.fn(),
}));
jest.mock("../../../hooks/useJewelry", () => ({
  useJewelry: jest.fn(),
}));

describe("CollectionItem Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockLocation = (pathname) => {
    useLocation.mockReturnValue({
      pathname,
    });
  };

  test("renders Page404 when displayPage404 is true", () => {
    mockLocation("/collection/rings");

    useParams.mockReturnValue({
      slugifiedCategoryTitle: "rings",
      slugifiedColorTitle: "gold",
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [],
      displayPage404: true,
    });

    render(<CollectionItem />);

    expect(screen.getByTestId("page-404")).toBeInTheDocument();
  });

  test("renders Images and InfoAndAction when jewelriesByCategory is not empty", () => {
    mockLocation("/collection/rings");
    useParams.mockReturnValue({
      slugifiedCategoryTitle: "rings",
      slugifiedColorTitle: "gold",
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }],
      displayPage404: false,
    });

    render(<CollectionItem />);

    expect(screen.getByTestId("images")).toBeInTheDocument();
    expect(screen.getByTestId("info-and-action")).toBeInTheDocument();
  });

  test("does not render Images or InfoAndAction when jewelriesByCategory is empty", () => {
    mockLocation("/collection/rings");
    useParams.mockReturnValue({
      slugifiedCategoryTitle: "rings",
      slugifiedColorTitle: "gold",
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [],
      displayPage404: false,
    });

    render(<CollectionItem />);

    expect(screen.queryByTestId("images")).not.toBeInTheDocument();
    expect(screen.queryByTestId("info-and-action")).not.toBeInTheDocument();
  });

  test("renders MiniBag when displayPopup is true", () => {
    mockLocation("/collection/rings");
    useParams.mockReturnValue({
      slugifiedCategoryTitle: "rings",
      slugifiedColorTitle: "gold",
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }],
      displayPage404: false,
    });

    const { rerender } = render(<CollectionItem />);

    expect(screen.queryByTestId("mini-bag")).not.toBeInTheDocument();

    rerender(<CollectionItem />);
    fireEvent.click(screen.getByTestId("info-and-action"));

    expect(screen.getByTestId("mini-bag")).toBeInTheDocument();
  });

  test("toggleDisplayPopup function works correctly", () => {
    mockLocation("/collection/rings");
    useParams.mockReturnValue({
      slugifiedCategoryTitle: "rings",
      slugifiedColorTitle: "gold",
    });
    useJewelry.mockReturnValue({
      jewelriesByCategory: [{ id: 1 }],
      displayPage404: false,
    });

    render(<CollectionItem />);

    fireEvent.click(screen.getByTestId("info-and-action"));

    expect(screen.getByTestId("mini-bag")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("mini-bag"));

    expect(screen.queryByTestId("mini-bag")).not.toBeInTheDocument();
  });
});
